using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;

namespace server.Controllers;

[Authorize]
public class FavoritesController : BaseController
{
    private readonly CommerceContext _context;

    public FavoritesController(CommerceContext context)
    {
        _context = context;
    }

    [HttpGet] // api/favorites/
    public async Task<object> GetFavorites([FromHeader] string authorization)
    {
        var tokenString = authorization.Substring(7); // trim 'Bearer '
        var token = new JwtSecurityToken(jwtEncodedString: tokenString);

        var userEmail = token.Claims.First(c => c.Type == "email").Value;
        var user = _context.Users.Where(u => u.Email == userEmail).FirstOrDefault();

        return await _context.Favorites
            .Where(f => f.UserId == user.Id)
            .Select(c => c.Product)
            .ToListAsync();
    }
}
