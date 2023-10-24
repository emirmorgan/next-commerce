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

    [HttpPost("add/{productId}")] //api/favorites/add
    public async Task<ActionResult<Favorite>> AddFavorite(int productId)
    {
        var user = await userManager.GetUserAsync(User);

        if (user == null)
        {
            return Unauthorized();
        }

        var product = await _context.Products.Where(p => p.Id == productId).FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound("product-not-exist");
        }

        var favorite = new Favorite { UserId = user.Id, ProductId = productId, };

        _context.Favorites.Add(favorite);
        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("delete/{productId}")] //api/favorites/delete
    public async Task<ActionResult<Favorite>> DeleteFavorite(int productId)
    {
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
            return Conflict("favorite-product-not-exist");
        }

        _context.Favorites.Remove(favorite);
        await _context.SaveChangesAsync();

        return Ok();
    }
}
