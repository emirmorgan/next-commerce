using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;

namespace server.Controllers;

[Authorize]
public class AddressController : BaseController
{
    private readonly UserManager<User> userManager;
    private readonly CommerceContext _context;

    public AddressController(UserManager<User> userManager, CommerceContext context)
    {
        this.userManager = userManager;
        _context = context;
    }

    [HttpPost("add")] //api/address/add
    public async Task<ActionResult> AddAddress(AddressDTO addressDTO)
    {
        var user = await userManager.Users
            .Include(u => u.Address)
            .SingleOrDefaultAsync(u => u.UserName == User.Identity.Name);

        if (user == null)
        {
            return Unauthorized();
        }

        var address = new Address
        {
            FullName = addressDTO.FullName,
            ContactNumber = addressDTO.ContactNumber,
            Country = addressDTO.Country,
            City = addressDTO.City,
            AddressLine = addressDTO.AddressLine,
            AddressLineSecond = addressDTO.AddressLineSecond,
            UserId = user.Id
        };

        _context.Address.Add(address);
        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("update")] //api/address/update
    public async Task<ActionResult> UpdateAddress(AddressDTO addressDTO)
    {
        var user = await userManager.Users
            .Include(u => u.Address)
            .SingleOrDefaultAsync(u => u.UserName == User.Identity.Name);

        if (user == null)
        {
            return Unauthorized();
        }

        if (user.Address == null)
        {
            return NotFound();
        }

        user.Address.FullName = addressDTO.FullName;
        user.Address.ContactNumber = addressDTO.ContactNumber;
        user.Address.Country = addressDTO.Country;
        user.Address.City = addressDTO.City;
        user.Address.AddressLine = addressDTO.AddressLine;
        user.Address.AddressLineSecond = addressDTO.AddressLineSecond;

        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("delete")] //api/address/delete
    public async Task<ActionResult> DeleteAddress()
    {
        var user = await userManager.Users
            .Include(u => u.Address)
            .SingleOrDefaultAsync(u => u.UserName == User.Identity.Name);

        if (user == null)
        {
            return Unauthorized();
        }

        if (user.Address == null)
        {
            return NotFound();
        }

        _context.Address.Remove(user.Address);
        await _context.SaveChangesAsync();

        return Ok();
    }
}
