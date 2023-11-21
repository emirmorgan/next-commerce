using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;

namespace server.Controllers;

[Authorize(Roles = "ADMIN")]
public class DashboardController : BaseController
{
    private readonly CommerceContext _context;

    public DashboardController(CommerceContext context)
    {
        _context = context;
    }

    [HttpGet("statistics")] // api/dashboard/statistics
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
}
