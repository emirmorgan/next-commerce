using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FavoritesController : ControllerBase
{
    private readonly CommerceContext _context;

    public FavoritesController(CommerceContext context)
    {
        _context = context;
    }

    [HttpGet("{id}")] // api/favorites/{id} - Get user's favorite products
    public async Task<IEnumerable<object>> GetFavorites(int id)
    {
        return await _context.Favorites
            .Where(f => f.UserId == id)
            .Select(c => c.Product)
            .ToListAsync();
    }
}
