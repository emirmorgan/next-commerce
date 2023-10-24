using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using server.Data;

namespace server.Controllers;

[Authorize(Roles = "ADMIN")]
public class DashboardController : BaseController
{
    private readonly UserManager<User> userManager;
    private readonly CommerceContext _context;

    public DashboardController(UserManager<User> userManager, CommerceContext context)
    {
        this.userManager = userManager;
        _context = context;
    }
}
