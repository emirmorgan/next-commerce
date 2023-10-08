using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
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

    [AllowAnonymous] // Allows access to both authenticated and non-authenticated users
    public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProducts(
        [FromQuery] string? sort,
        [FromQuery] string? category,
        [FromQuery] string? subcategory,
        [FromQuery] string? color,
        [FromQuery] decimal? priceFrom,
        [FromQuery] decimal? priceTo,
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
}
