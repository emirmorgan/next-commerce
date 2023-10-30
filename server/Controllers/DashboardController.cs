using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs;
using server.Models;

namespace server.Controllers;

[Authorize(Roles = "ADMIN")]
public class DashboardController : BaseController
{
    private readonly UserManager<User> userManager;
    private readonly CommerceContext _context;

    public DashboardController(UserManager<User> userManager, CommerceContext context)
    {
        this.userManager = userManager;
        _context = context;
    }

    [HttpGet("statistics")] // dashboard/statistics
    public async Task<ActionResult> GetStatistics()
    {
        const int totalSales = 34855;
        int totalCustomer = await _context.Users.CountAsync();
        int totalProducts = await _context.Products.CountAsync();
        int totalOrders = await _context.Orders.CountAsync();

        var sales = new Dictionary<string, object>
        {
            {
                "thisMonth",
                new[]
                {
                    new { label = "Jan", data = 800 },
                    new { label = "Feb", data = 700 },
                    new { label = "Mar", data = 800 },
                    new { label = "Apr", data = 900 },
                    new { label = "May", data = 600 },
                    new { label = "Jun", data = 700 },
                    new { label = "Jul", data = 700 },
                    new { label = "Aug", data = 600 },
                    new { label = "Sep", data = 500 },
                    new { label = "Oct", data = 500 },
                    new { label = "Nov", data = 400 },
                    new { label = "Dec", data = 500 }
                }
            },
            {
                "lastMonth",
                new[]
                {
                    new { label = "Jan", data = 400 },
                    new { label = "Feb", data = 500 },
                    new { label = "Mar", data = 500 },
                    new { label = "Apr", data = 600 },
                    new { label = "May", data = 500 },
                    new { label = "Jun", data = 400 },
                    new { label = "Jul", data = 300 },
                    new { label = "Aug", data = 300 },
                    new { label = "Sep", data = 200 },
                    new { label = "Oct", data = 300 },
                    new { label = "Nov", data = 400 },
                    new { label = "Dec", data = 300 }
                }
            }
        };

        var visitors = new[]
        {
            new { label = "Social media", percentage = 30 },
            new { label = "Purchased visitors", percentage = 40 },
            new { label = "By advertisement", percentage = 18 },
            new { label = "Affiliate visitors", percentage = 12 }
        };

        return Ok(
            new
            {
                TotalSales = totalSales,
                TotalCustomer = totalCustomer,
                TotalProducts = totalProducts,
                TotalOrders = totalOrders,
                Visitors = visitors,
                Sales = sales
            }
        );
    }

    [HttpGet("orders")] // dashboard/statistics
    public async Task<ActionResult<OrderDTO>> GetOrders(
        [FromQuery] int? orderId,
        [FromQuery] string? sort,
        [FromQuery] int pn = 1
    )
    {
        const int pageSize = 10;

        var query = _context.Orders.AsQueryable();

        if (orderId != null || orderId == 0)
        {
            query = query.Where(q => q.OrderID == orderId);
        }

        switch (sort)
        {
            case "priceAsc":
                query = query.OrderBy(q => q.OrderTotal);
                break;
            case "priceDesc":
                query = query.OrderByDescending(q => q.OrderTotal);
                break;
            case "dateAsc":
                query = query.OrderBy(q => q.OrderDate);
                break;
            default:
                // Default sorting: latest orders (dateDesc)
                query = query.OrderByDescending(q => q.OrderDate);
                break;
        }

        var orders = await query
            .Select(
                order =>
                    new OrderDTO
                    {
                        OrderID = order.OrderID,
                        OrderDate = order.OrderDate,
                        OrderStatus = order.OrderStatus,
                        DeliveryAddress = order.DeliveryAddress,
                        DeliveryContact = order.DeliveryContact,
                    }
            )
            .ToListAsync();

        var totalOrders = orders.Count;

        orders = orders.Skip((pn - 1) * pageSize).Take(pageSize).ToList();

        return Ok(
            new
            {
                TotalOrders = totalOrders,
                PageSize = pageSize,
                PageNumber = pn,
                Orders = orders
            }
        );
    }

    [HttpPost("product/create")]
    public async Task<ActionResult<ProductCreateDTO>> CreateProduct(
        [FromBody] ProductCreateDTO productCreateDTO
    )
    {
        if (productCreateDTO == null)
        {
            return BadRequest();
        }

        var product = new Product
        {
            Brand = productCreateDTO.Brand,
            Name = productCreateDTO.Name,
            CurrentPrice = productCreateDTO.Price,
            DiscountPrice = productCreateDTO.DiscountPrice,
            Date = productCreateDTO.Date,
            Slug = productCreateDTO.Slug,
            TotalQuantity = productCreateDTO.Quantity,
            CategoryId = productCreateDTO.CategoryId,
            SubcategoryId = productCreateDTO.SubcategoryId,
            Color = productCreateDTO.Color,
        };

        _context.Products.Add(product);

        int productId = product.Id;

        if (productCreateDTO.Images != null && productCreateDTO.Images.Any())
        {
            foreach (var image in productCreateDTO.Images)
            {
                var productImage = new ProductImage
                {
                    src = image.src,
                    alt = image.alt,
                    ProductId = productId,
                };

                _context.ProductImages.Add(productImage);
            }
        }
        else
        {
            return NotFound("You can't upload a product without image.");
        }

        if (productCreateDTO.Variants != null && productCreateDTO.Variants.Any())
        {
            foreach (var variant in productCreateDTO.Variants)
            {
                var productVariant = new ProductVariant
                {
                    Name = variant.Name,
                    Value = variant.Value,
                    Quantity = variant.Quantity,
                    ProductId = productId,
                };

                _context.ProductVariants.Add(productVariant);
                await _context.SaveChangesAsync();
            }
        }

        await _context.SaveChangesAsync();

        return Ok("Product created successfully.");
    }
}
