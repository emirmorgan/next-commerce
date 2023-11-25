using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.Models;

namespace server.Controllers;

[Authorize]
public class FavoritesController : BaseController
{
    private readonly UserManager<User> userManager;
    private readonly CommerceContext _context;

    public FavoritesController(UserManager<User> userManager, CommerceContext context)
    {
        this.userManager = userManager;
        _context = context;
    }

    [HttpPost("update/{productId}")]
    public async Task<ActionResult> HandleFavorite(int productId)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = await userManager.GetUserAsync(User);

        if (user == null)
        {
            return Unauthorized();
        }

        var favorite = await _context.Favorites.FirstOrDefaultAsync(
            f => f.UserId == user.Id && f.ProductId == productId
        );

        if (favorite == null)
        {
            var favoriteProduct = new Favorite { UserId = user.Id, ProductId = productId, };
            _context.Favorites.Add(favoriteProduct);
        }
        else
        {
            _context.Favorites.Remove(favorite);
        }

        await _context.SaveChangesAsync();
        return Ok();
    }
}
