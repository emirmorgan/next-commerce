using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;

namespace server.Controllers;

[Authorize]
public class AddressController : BaseController
{
    private readonly CommerceContext _context;

    public AddressController(CommerceContext context)
    {
        _context = context;
    }

    [HttpPost("add")] //api/address/add
    public async Task<ActionResult<AddressDTO>> AddAddress(AddressDTO addressDTO)
    {
        var uid = int.Parse(User?.Claims.FirstOrDefault(c => c.Type == "userid")?.Value ?? "0");

        if (uid == 0)
        {
            return Unauthorized();
        }

        var address = new Address
        {
            Title = addressDTO.Title,
            Details = addressDTO.Details,
            ContactNumber = addressDTO.ContactNumber,
            UserId = uid
        };

        _context.Address.Add(address);
        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("update")] //api/address/update
    public async Task<ActionResult<AddressDTO>> UpdateAddress(AddressDTO addressDTO)
    {
        var uid = int.Parse(User?.Claims.FirstOrDefault(c => c.Type == "userid")?.Value ?? "0");

        if (uid == 0)
        {
            return Unauthorized();
        }

        var userAddress = await _context.Address.Where(a => a.UserId == uid).FirstOrDefaultAsync();

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
        var uid = int.Parse(User?.Claims.FirstOrDefault(c => c.Type == "userid")?.Value ?? "0");

        if (uid == 0)
        {
            return Unauthorized();
        }

        var userAddress = await _context.Address.Where(a => a.UserId == uid).FirstOrDefaultAsync();

        if (userAddress == null)
        {
            return NotFound();
        }

        _context.Address.Remove(userAddress);
        await _context.SaveChangesAsync();

        return Ok();
    }
}
