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
                    Brand = product.Brand,
                    Name = product.Name,
                    Src = image.src ?? "/assets/products/default.webp",
                    Alt = image.alt,
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
}
