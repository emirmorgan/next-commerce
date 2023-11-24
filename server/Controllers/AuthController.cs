using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using server.DTOs;

namespace server.Controllers;

public class AuthController : BaseController
{
    private readonly UserManager<User> userManager;
    private readonly RoleManager<IdentityRole> roleManager;
    private readonly IConfiguration _configuration;

    public AuthController(
        UserManager<User> userManager,
        RoleManager<IdentityRole> roleManager,
        IConfiguration configuration
    )
    {
        this.userManager = userManager;
        this.roleManager = roleManager;
        _configuration = configuration;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(AuthDTO authDTO)
    {
        if (await AlreadyExist(authDTO.Email))
            return Unauthorized("already-exist");

        var user = new User
        {
            UserName = authDTO.Email,
            Email = authDTO.Email,
            SecurityStamp = Guid.NewGuid().ToString(),
        };

        var result = await userManager.CreateAsync(user, authDTO.Password);

        if (!result.Succeeded)
        {
            return BadRequest("Something went wrong, please try again. " + result.Errors);
        }

        if (!await roleManager.RoleExistsAsync("USER"))
            await roleManager.CreateAsync(new IdentityRole("USER"));

        if (await roleManager.RoleExistsAsync("USER"))
            await userManager.AddToRoleAsync(user, "USER");

        return Ok("Account successfully created.");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(AuthDTO authDTO)
    {
        var user = await userManager.FindByNameAsync(authDTO.Email);

        if (user == null)
            return Unauthorized("wrong-email-or-password");
        if (!await userManager.CheckPasswordAsync(user, authDTO.Password))
            return Unauthorized("wrong-email-or-password");

        var userRoles = await userManager.GetRolesAsync(user);
        var authClaims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.Email),
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };

        foreach (var userRole in userRoles)
        {
            authClaims.Add(new Claim(ClaimTypes.Role, userRole));
        }

        string token = CreateToken(authClaims);

        return Ok(token);
    }

    private async Task<bool> AlreadyExist(string email)
    {
        var user = await userManager.FindByNameAsync(email);
        return user != null;
    }

    private string CreateToken(IEnumerable<Claim> claims)
    {
        var authSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_configuration["JWTKey:Secret"])
        );
        var _TokenExpiryTimeInHour = Convert.ToInt64(
            _configuration["JWTKey:TokenExpiryTimeInHour"]
        );

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Issuer = _configuration["JWTKey:ValidIssuer"],
            Audience = _configuration["JWTKey:ValidAudience"],
            Expires = DateTime.UtcNow.AddHours(_TokenExpiryTimeInHour),
            SigningCredentials = new SigningCredentials(
                authSigningKey,
                SecurityAlgorithms.HmacSha256
            ),
            Subject = new ClaimsIdentity(claims)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
