using System.IdentityModel.Tokens.Jwt;
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
    public async Task<ActionResult<AddressDTO>> AddAddress(
        [FromHeader] string authorization,
        AddressDTO addressDTO
    )
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
    public async Task<ActionResult<AddressDTO>> UpdateAddress(
        [FromHeader] string authorization,
        AddressDTO addressDTO
    )
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
    public async Task<ActionResult<AddressDTO>> DeleteAddress([FromHeader] string authorization)
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
