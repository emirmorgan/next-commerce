using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.Models;

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
    public async Task<IActionResult> GetFavorites([FromHeader] string authorization)
    {
        if (authorization == null)
            return NotFound();

        var tokenString = authorization.Substring(7); // trim 'Bearer '
        var token = new JwtSecurityToken(jwtEncodedString: tokenString);

        var userEmail = token.Claims.First(c => c.Type == "email").Value;
        var user = _context.Users.Where(u => u.Email == userEmail).FirstOrDefault();

        if (user == null)
        {
            return NotFound();
        }

        var favoriteProducts = await _context.Products
            .Where(p => p.Favorites.Any(f => f.UserId == user.Id))
            .ToListAsync();

        return Ok(favoriteProducts);
    }
}
