using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;

namespace server.Controllers;

[Authorize]
public class UserController : BaseController
{
    private readonly UserManager<User> userManager;
    private readonly CommerceContext _context;

    public UserController(CommerceContext context, UserManager<User> userManager)
    {
        _context = context;
        this.userManager = userManager;
    }

    [HttpGet] // api/user/
    public async Task<ActionResult<UserDTO>> GetUser()
    {
        var user = await userManager.Users
            .Include(u => u.Address)
            .SingleOrDefaultAsync(u => u.UserName == User.Identity.Name);

        if (user == null)
        {
            return Unauthorized();
        }

        var userRoles = await userManager.GetRolesAsync(user);
        var role = userRoles.FirstOrDefault();

        return new UserDTO
        {
            UserID = user.Id,
            Email = user.Email,
            Role = role,
            Address =
                user.Address != null
                    ? new AddressDTO
                    {
                        FullName = user.Address.FullName,
                        ContactNumber = user.Address.ContactNumber,
                        Country = user.Address.Country,
                        City = user.Address.City,
                        AddressLine = user.Address.AddressLine,
                        AddressLineSecond = user.Address.AddressLineSecond
                    }
                    : null,
        };
    }

    [HttpGet("order")] // api/user/order
    public async Task<ActionResult<OrderDTO>> GetUserOrders()
    {
        var user = await userManager.GetUserAsync(User);

        if (user == null)
        {
            return Unauthorized();
        }

        var orders = await _context.Orders
            .Where(o => o.UserID == user.Id)
            .Include(i => i.OrderItems)
            .ToListAsync();

        var orderDTOs = await Task.WhenAll(
            orders.Select(async order =>
            {
                var orderItemDTOs = await _context.OrderItems
                    .Where(i => i.OrderId == order.Id)
                    .Include(i => i.Product)
                    .Select(
                        item =>
                            new OrderItemDTO
                            {
                                Brand = item.Product.Brand,
                                Name = item.Product.Name,
                                ImageSrc =
                                    item.Product.Images != null && item.Product.Images.Any()
                                        ? item.Product.Images.First().src
                                        : "/assets/logo.png",
                                ImageAlt =
                                    item.Product.Images != null && item.Product.Images.Any()
                                        ? item.Product.Images.First().alt
                                        : item.Product.Brand,
                                Color = item.Color,
                                Size = item.Size,
                                Price = item.Price,
                                Quantity = item.Quantity
                            }
                    )
                    .ToListAsync();

                return new OrderDTO
                {
                    OrderID = order.Id,
                    OrderDate = order.OrderDate,
                    OrderStatus = order.OrderStatus,
                    OrderInvoice = order.OrderInvoice,
                    OrderTrace = order.OrderTrace,
                    Address = new AddressDTO
                    {
                        FullName = user.Address.FullName,
                        ContactNumber = user.Address.ContactNumber,
                        Country = user.Address.Country,
                        City = user.Address.City,
                        AddressLine = user.Address.AddressLine,
                        AddressLineSecond = user.Address.AddressLineSecond
                    },
                    OrderItems = orderItemDTOs
                };
            })
        );

        return Ok(orderDTOs);
    }

    [HttpPost("password/update")] // POST: api/user/password/update
    public async Task<ActionResult<UpdatePasswordDTO>> UpdatePassword(UpdatePasswordDTO request)
    {
        var user = await userManager.GetUserAsync(User);

        if (user == null)
        {
            return Unauthorized();
        }

        var changePasswordResult = await userManager.ChangePasswordAsync(
            user,
            request.currentPassword,
            request.newPassword
        );

        if (changePasswordResult.Succeeded)
        {
            return Ok("Password has been successfully changed.");
        }
        else
        {
            return BadRequest(
                "Password change failed. Please check your old password and try again."
            );
        }
    }
}
