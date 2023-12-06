using System.Text.Json;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using server.Data;
using server.DTOs;
using server.Models;
using Stripe;

namespace server.Controllers;

[Authorize(Roles = "ADMIN")]
public class OrdersController : BaseController
{
    private readonly CommerceContext _context;
    private readonly IConfiguration _configuration;

    public OrdersController(CommerceContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    // api/orders/
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

    // api/orders/add
    [HttpPost("add")]
    public async Task<IActionResult> AddOrder([FromBody] string paymentIntent)
    {
        try
        {
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];

            var paymentIntentService = new PaymentIntentService();
            var paymentIntentData = await paymentIntentService.GetAsync(paymentIntent);

            if (paymentIntentData.Metadata.TryGetValue("products", out var productsJson))
            {
                List<OrderItem> products = JsonConvert.DeserializeObject<List<OrderItem>>(
                    productsJson
                );
            }

            return Ok("succeeded");
        }
        catch (System.Exception)
        {
            return BadRequest("failed");
        }
    }
}
