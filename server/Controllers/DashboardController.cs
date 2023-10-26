using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs;

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
}
