using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;

namespace server.Controllers;

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

        var userEmail = token.Claims.First(c => c.Type == "email").Value;

        var user = await _context.Users.Where(u => u.Email == userEmail).FirstOrDefaultAsync();

        if (user == null)
        {
            return NotFound();
        }

        var userData = await _context.Users
            .Include(u => u.Address)
            .FirstOrDefaultAsync(u => u.Id == user.Id);

        return new UserDTO
        {
            UserID = userData.Id,
            Token = tokenString,
            Email = userData.Email,
            Role = userData.Role,
            Address = new AddressDTO
            {
                Title = userData.Address.Title,
                Details = userData.Address.Details,
                ContactNumber = userData.Address.ContactNumber,
            }
        };
    }
}
