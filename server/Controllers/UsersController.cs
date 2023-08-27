using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.Models;

namespace server.Controllers;

public class UsersController : BaseController
{
    private readonly CommerceContext _context;

    public UsersController(CommerceContext context)
    {
        _context = context;
    }

    [HttpGet] // Get all users
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        var users = await _context.Users.ToListAsync();

        return users;
    }

    [HttpGet("{id}")] // api/users/{id} - Get spesific user by id
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }
}
