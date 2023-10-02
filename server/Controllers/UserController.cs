using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;

namespace server.Controllers;

[Authorize]
public class UserController : BaseController
{
    private readonly CommerceContext _context;

    public UserController(CommerceContext context)
    {
        _context = context;
    }

    [HttpGet] // api/user/
    public async Task<ActionResult<UserDTO>> GetUser()
    {
        var uid = int.Parse(User?.Claims.FirstOrDefault(c => c.Type == "userid")?.Value ?? "0");

        if (uid == 0)
        {
            return Unauthorized();
        }

        var userData = await _context.Users
            .Include(u => u.Address)
            .FirstOrDefaultAsync(u => u.Id == uid);

        if (userData == null)
        {
            return NotFound();
        }

        return new UserDTO
        {
            UserID = userData.Id,
            Email = userData.Email,
            Role = userData.Role,
            Address =
                userData.Address != null
                    ? new AddressDTO
                    {
                        Title = userData.Address.Title,
                        Details = userData.Address.Details,
                        ContactNumber = userData.Address.ContactNumber,
                    }
                    : null,
        };
    }

    [HttpGet("order")] // api/user/order
    public async Task<ActionResult<OrderDTO>> GetUserOrders()
    {
        var uid = int.Parse(User?.Claims.FirstOrDefault(c => c.Type == "userid")?.Value ?? "0");

        if (uid == 0)
        {
            return Unauthorized();
        }

        var orders = await _context.Orders
            .Where(o => o.UserID == uid)
            .Include(i => i.OrderItems)
            .ToListAsync();

        var orderDTOs = await Task.WhenAll(
            orders.Select(async order =>
            {
                var orderItemDTOs = await _context.OrderItems
                    .Where(i => i.OrderId == order.OrderID)
                    .Select(
                        item =>
                            new OrderItemDTO
                            {
                                Brand = item.Brand,
                                Name = item.Name,
                                Image = item.Image,
                                Color = item.Color,
                                Size = item.Size,
                                Price = item.Price,
                                Quantity = item.Quantity
                            }
                    )
                    .ToListAsync();

                return new OrderDTO
                {
                    OrderID = order.OrderID,
                    OrderDate = order.OrderDate,
                    OrderStatus = order.OrderStatus,
                    DeliveryAddress = order.DeliveryAddress,
                    DeliveryContact = order.DeliveryContact,
                    DeliveryInvoice = order.DeliveryInvoice,
                    DeliveryTrace = order.DeliveryTrace,
                    OrderItems = orderItemDTOs
                };
            })
        );

        return Ok(orderDTOs);
    }

    [HttpPost("password/update")] // POST: api/user/password/update
    public async Task<ActionResult<UpdatePasswordDTO>> UpdatePassword(UpdatePasswordDTO request)
    {
        if (request.newPassword == null || request.currentPassword == null)
            return Unauthorized("Something is not right.");

        var uid = int.Parse(User?.Claims.FirstOrDefault(c => c.Type == "userid")?.Value ?? "0");

        if (uid == 0)
        {
            return Unauthorized();
        }

        var user = await _context.Users.Where(u => u.Id == uid).FirstOrDefaultAsync();

        if (user == null)
        {
            return NotFound();
        }

        using var hmac = new HMACSHA256(user.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(request.currentPassword));

        for (int i = 0; i < computedHash.Length; i++)
        {
            if (computedHash[i] != user.PasswordHash[i])
                return Unauthorized("wrong-password");
        }

        var newPasswordHashed = hmac.ComputeHash(Encoding.UTF8.GetBytes(request.newPassword));

        user.PasswordHash = newPasswordHashed;

        await _context.SaveChangesAsync();

        return Ok();
    }
}
