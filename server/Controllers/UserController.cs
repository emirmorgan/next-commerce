﻿using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;
using server.Models;

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
    public async Task<ActionResult<UserDTO>> GetUser([FromHeader] string authorization)
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

        var userData = await _context.Users
            .Include(u => u.Address)
            .FirstOrDefaultAsync(u => u.Id == user.Id);

        if (userData == null)
        {
            return NotFound();
        }

        return new UserDTO
        {
            UserID = userData.Id,
            Token = tokenString,
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
    public async Task<ActionResult<OrderDTO>> GetUserOrders([FromHeader] string authorization)
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

        var orders = await _context.Orders
            .Where(o => o.UserID == user.Id)
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

    [HttpGet("favorites")] // api/user/favorites
    public async Task<ActionResult<Favorite>> GetFavorites([FromHeader] string authorization)
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

        var favoriteProducts = await _context.Products
            .Where(p => p.Favorites.Any(f => f.UserId == user.Id))
            .ToListAsync();

        return Ok(favoriteProducts);
    }

    [HttpPost("password/update")] // POST: api/auth/password/update
    public async Task<ActionResult<UpdatePasswordDTO>> UpdatePassword(
        UpdatePasswordDTO request,
        [FromHeader(Name = "Authorization")] string authorization
    )
    {
        if (authorization == null || request.newPassword == null || request.currentPassword == null)
            return Unauthorized("Something is not right.");

        if (request.currentPassword == request.newPassword)
        {
            return Unauthorized("current-password");
        }

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
