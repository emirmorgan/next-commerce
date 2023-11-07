using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs;
using server.Models;

namespace server.Controllers;

[Authorize(Roles = "ADMIN")]
public class DashboardController : BaseController
{
    private readonly CommerceContext _context;

    public DashboardController(CommerceContext context)
    {
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
        };

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        // Handle Variants
        if (productCreateDTO.Variants != null)
        {
            foreach (var variant in productCreateDTO.Variants)
            {
                var productVariant = new ProductVariant
                {
                    Name = variant.Name,
                    Value = variant.Value,
                    Quantity = variant.Quantity,
                    ProductId = product.Id,
                };

                _context.ProductVariants.Add(productVariant);
            }

            await _context.SaveChangesAsync();
        }

        return Ok(product);
    }

    [HttpPost("image/upload")]
    public async Task<ActionResult> CreateProductImage(
        [FromForm] IFormFile[] images,
        [FromForm] string productName,
        [FromForm] int productId
    )
    {
        if (productName == null || productId == 0)
        {
            return BadRequest();
        }

        try
        {
            foreach (var image in images)
            {
                var currentDirectory = Directory.GetCurrentDirectory();
                var parentDirectory = Path.GetDirectoryName(currentDirectory);
                var uploadDirectory = Path.Combine(parentDirectory, "client", "public", "uploads");

                if (!Directory.Exists(uploadDirectory))
                {
                    Directory.CreateDirectory(uploadDirectory);
                }

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + image.FileName;
                var filePath = Path.Combine(uploadDirectory, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(stream);
                }

                var imageSrc = "/uploads/" + uniqueFileName;
                var imageAlt = productName;

                var productImage = new ProductImage
                {
                    src = imageSrc,
                    alt = imageAlt,
                    ProductId = productId
                };

                _context.ProductImages.Add(productImage);
            }

            await _context.SaveChangesAsync();
            return Ok("Product created successfully.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, "An error occurred while creating the product.");
        }
    }
}
