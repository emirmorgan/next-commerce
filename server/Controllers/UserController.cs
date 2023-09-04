using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.Models;

namespace server.Controllers;

public class UserController : BaseController
{
    private readonly CommerceContext _context;

    public UserController(CommerceContext context)
    {
        _context = context;
    }

    [HttpGet] // api/user/
    public async Task<ActionResult<User>> GetUser([FromHeader] string authorization)
    {
        if (authorization == null)
            return NotFound();

        var tokenString = authorization.Substring(7); // trim 'Bearer '
        var token = new JwtSecurityToken(jwtEncodedString: tokenString);

        var userEmail = token.Claims.First(c => c.Type == "email").Value;

        var user = await _context.Users.Where(u => u.Email == userEmail).FirstOrDefaultAsync();

        var userWithAdress = await _context.Users
            .Include(u => u.Address)
            .FirstOrDefaultAsync(u => u.Id == user.Id);

        return Ok(userWithAdress);
    }
}
