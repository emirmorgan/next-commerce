using Microsoft.AspNetCore.Authorization;
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

    [AllowAnonymous] // api/products/
    public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProducts(
        [FromQuery] string? sort,
        [FromQuery] string? category,
        [FromQuery] string? subcategory,
        [FromQuery] string? brand,
        [FromQuery] string? color,
        [FromQuery] decimal? priceFrom,
        [FromQuery] decimal? priceTo,
        [FromQuery] string? q,
        [FromQuery] int pn = 1
    )
    {
        const int pageSize = 20;

        var query = _context.Products
            .Include(p => p.Category)
            .Include(p => p.Subcategory)
            .Include(p => p.Images)
            .AsQueryable();

        if (!string.IsNullOrEmpty(category) && category != "Any")
        {
            query = query.Where(p => p.Category.Name == category);
        }

        if (!string.IsNullOrEmpty(subcategory) && subcategory != "Any")
        {
            query = query.Where(p => p.Subcategory.Name == subcategory);
        }

        if (!string.IsNullOrEmpty(color) && color != "Any")
        {
            query = query.Where(p => p.Color == color);
        }

        if (!string.IsNullOrEmpty(brand) && brand != "Any")
        {
            query = query.Where(p => p.Brand == brand);
        }

        if (!string.IsNullOrEmpty(q))
        {
            var qLower = q.ToLower();
            query = query.Where(p => p.Name.ToLower().Contains(qLower));
        }

        if (priceFrom.HasValue)
        {
            query = query.Where(
                p =>
                    (p.DiscountPrice.HasValue ? p.DiscountPrice : p.CurrentPrice) >= priceFrom.Value
            );
        }

        if (priceTo.HasValue)
        {
            query = query.Where(
                p => (p.DiscountPrice.HasValue ? p.DiscountPrice : p.CurrentPrice) <= priceTo.Value
            );
        }

        switch (sort)
        {
            case "priceAsc":
                query = query.OrderBy(
                    p => p.DiscountPrice.HasValue ? p.DiscountPrice : p.CurrentPrice
                );
                break;
            case "priceDesc":
                query = query.OrderByDescending(
                    p => p.DiscountPrice.HasValue ? p.DiscountPrice : p.CurrentPrice
                );
                break;
            case "dateAsc":
                query = query.OrderBy(p => p.Date);
                break;
            default:
                // Default sorting: latest products (dateDesc)
                query = query.OrderByDescending(p => p.Date);
                break;
        }

        if (User.Identity.IsAuthenticated)
        {
            var uid = int.Parse(User?.Claims.FirstOrDefault(c => c.Type == "userid")?.Value ?? "0");

            if (uid == 0)
            {
                return Unauthorized();
            }

            var productsWithFavorites = await query
                .Select(
                    p =>
                        new ProductDTO
                        {
                            Id = p.Id,
                            Brand = p.Brand,
                            Name = p.Name,
                            Src = p.Images.Any() ? p.Images[0].src : "/assets/logo.png",
                            Alt = p.Images.Any() ? p.Images[0].alt : p.Brand,
                            Price = p.CurrentPrice,
                            DiscountPrice = p.DiscountPrice,
                            Date = p.Date,
                            Slug = p.Slug,
                            IsFavorite = _context.Favorites.Any(
                                f => f.UserId == uid && f.ProductId == p.Id
                            ),
                        }
                )
                .ToListAsync();

            var totalProducts = productsWithFavorites.Count;

            productsWithFavorites = productsWithFavorites
                .Skip((pn - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return Ok(
                new
                {
                    TotalProducts = totalProducts,
                    PageSize = pageSize,
                    PageNumber = pn,
                    Products = productsWithFavorites
                }
            );
        }
        else
        {
            var totalProducts = await query.CountAsync();

            query = query.Skip((pn - 1) * pageSize).Take(pageSize);

            var products = await query
                .Select(
                    p =>
                        new ProductDTO
                        {
                            Id = p.Id,
                            Brand = p.Brand,
                            Name = p.Name,
                            Src = p.Images.Any() ? p.Images[0].src : "/assets/logo.png",
                            Alt = p.Images.Any() ? p.Images[0].alt : p.Brand,
                            Price = p.CurrentPrice,
                            DiscountPrice = p.DiscountPrice,
                            Date = p.Date,
                            Slug = p.Slug,
                            IsFavorite = false
                        }
                )
                .ToListAsync();

            return Ok(
                new
                {
                    TotalProducts = totalProducts,
                    PageSize = pageSize,
                    PageNumber = pn,
                    Products = products
                }
            );
        }
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
