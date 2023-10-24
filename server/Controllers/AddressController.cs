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
    public async Task<ActionResult<AddressDTO>> AddAddress(AddressDTO addressDTO)
    {
        var user = await userManager.GetUserAsync(User);

        if (user == null)
        {
            return Unauthorized();
        }

        var address = new Address
        {
            Title = addressDTO.Title,
            Details = addressDTO.Details,
            ContactNumber = addressDTO.ContactNumber,
            UserId = user.Id
        };

        _context.Address.Add(address);
        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("update")] //api/address/update
    public async Task<ActionResult<AddressDTO>> UpdateAddress(AddressDTO addressDTO)
    {
        var user = await userManager.GetUserAsync(User);

        if (user == null)
        {
            return Unauthorized();
        }

        var userAddress = await _context.Address
            .Where(a => a.UserId == user.Id)
            .FirstOrDefaultAsync();

        if (userAddress == null)
        {
            return NotFound();
        }

        userAddress.Title = addressDTO.Title;
        userAddress.Details = addressDTO.Details;
        userAddress.ContactNumber = addressDTO.ContactNumber;

        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("delete")] //api/address/delete
    public async Task<ActionResult<AddressDTO>> DeleteAddress()
    {
        var user = await userManager.GetUserAsync(User);

        if (user == null)
        {
            return Unauthorized();
        }

        var userAddress = await _context.Address
            .Where(a => a.UserId == user.Id)
            .FirstOrDefaultAsync();

        if (userAddress == null)
        {
            return NotFound();
        }

        _context.Address.Remove(userAddress);
        await _context.SaveChangesAsync();

        return Ok();
    }
}
