using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;

namespace server.Controllers;

public class ProductsController : BaseController
{
    private readonly CommerceContext _context;

    public ProductsController(CommerceContext context)
    {
        _context = context;
    }

    [HttpGet] // api/products/ - Get All Products
    public async Task<ActionResult<ProductDTO>> GetProducts()
    {
        var products = await _context.Products.ToListAsync();

        if (products == null)
        {
            return NotFound();
        }

        var productDTOs = await Task.WhenAll(
            products.Select(async product =>
            {
                var image = await _context.ProductImages
                    .Where(i => i.ProductId == product.Id)
                    .FirstOrDefaultAsync();

                return new ProductDTO
                {
                    Id = product.Id,
                    Brand = product.Brand,
                    Name = product.Name,
                    Src =
                        image != null && !string.IsNullOrEmpty(image.src)
                            ? image.src
                            : "/assets/logo.png",
                    Alt =
                        image != null && !string.IsNullOrEmpty(image.alt)
                            ? image.alt
                            : product.Brand,
                    Price = product.CurrentPrice,
                    DiscountPrice = product.DiscountPrice,
                    Slug = product.Slug,
                    IsFavorite = false
                };
            })
        );

        return Ok(productDTOs);
    }

    [HttpGet("user")] // api/products/user - Get All Products(favorite products of user is marked)
    public async Task<ActionResult<ProductDTO>> GetUserProducts([FromHeader] string authorization)
    {
        if (authorization == null)
            return NotFound();

        var tokenString = authorization.Substring(7); // trim 'Bearer '
        var token = new JwtSecurityToken(jwtEncodedString: tokenString);

        var userEmailClaim = token.Claims.FirstOrDefault(c => c.Type == "email");
        if (userEmailClaim == null)
        {
            return NotFound();
        }

        var userEmail = userEmailClaim.Value;

        var user = await _context.Users.Where(u => u.Email == userEmail).FirstOrDefaultAsync();

        if (user == null)
        {
            return NotFound();
        }

        var products = await _context.Products.ToListAsync();

        if (products == null)
        {
            return NotFound();
        }

        var productDTOs = await Task.WhenAll(
            products.Select(async product =>
            {
                var image = await _context.ProductImages
                    .Where(i => i.ProductId == product.Id)
                    .FirstOrDefaultAsync();

                var favorite = await _context.Favorites.AnyAsync(
                    f => f.ProductId == product.Id && f.UserId == user.Id
                );

                return new ProductDTO
                {
                    Id = product.Id,
                    Brand = product.Brand,
                    Name = product.Name,
                    Src =
                        image != null && !string.IsNullOrEmpty(image.src)
                            ? image.src
                            : "/assets/logo.png",
                    Alt =
                        image != null && !string.IsNullOrEmpty(image.alt)
                            ? image.alt
                            : product.Brand,
                    Price = product.CurrentPrice,
                    DiscountPrice = product.DiscountPrice,
                    Slug = product.Slug,
                    IsFavorite = favorite
                };
            })
        );

        return Ok(productDTOs);
    }

    [HttpGet("details")] // api/products/details
    public async Task<ActionResult<ProductDetailsDTO>> GetProductDetails(int productId)
    {
        if (productId == 0)
            return NotFound();

        var product = await _context.Products
            .Where(p => p.Id == productId)
            .Include(c => c.Category)
            .Include(sc => sc.Subcategory)
            .Include(pv => pv.ProductVariants)
            .Include(img => img.Images)
            .FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        var SlugProducts = await _context.Products.Where(p => p.Slug == product.Slug).ToListAsync();

        var ProductDTO = new ProductDetailsDTO
        {
            Id = product.Id,
            Brand = product.Brand,
            Name = product.Name,
            Desc = product.Desc,
            Price = product.CurrentPrice,
            DiscountPrice = product.DiscountPrice,
            Slug = product.Slug,
            Category = product.Category.Name,
            Subcategory = product.Subcategory.Name,
            Variants = product.ProductVariants
                .Select(
                    pv =>
                        new ProductVariantDTO
                        {
                            Name = pv.Name,
                            Value = pv.Value,
                            Quantity = pv.Quantity
                        }
                )
                .ToList(),
            Images = product.Images
                .Select(image => new ProductImageDTO { src = image.src, alt = image.alt })
                .ToList(),
            SimilarProducts = SlugProducts
                .Select(
                    sp =>
                        new ProductSimilarDTO
                        {
                            Id = sp.Id,
                            Src = sp.Images[0].src,
                            Alt = sp.Images[0].alt
                        }
                )
                .ToList()
        };

        return Ok(ProductDTO);
    }
}
