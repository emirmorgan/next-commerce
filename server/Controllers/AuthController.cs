using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;
using server.Interfaces;
using server.Models;

namespace server.Controllers;

public class AuthController : BaseController
{
    private readonly CommerceContext _context;
    private readonly ITokenService _tokenService;

    public AuthController(CommerceContext context, ITokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
    }

    [HttpPost] // POST: api/auth
    public async Task<ActionResult<UserDTO>> Auth(AuthDTO authDTO)
    {
        if (authDTO.Type == "register")
        {
            if (await AlreadyExist(authDTO.Email))
                return BadRequest("already-exist");

            using var hmac = new HMACSHA256();

            var user = new User
            {
                Email = authDTO.Email,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(authDTO.Password)),
                PasswordSalt = hmac.Key,
                Gender = authDTO.Gender,
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new UserDTO
            {
                Email = user.Email,
                Token = await _tokenService.CreateToken(user)
            };
        }
        else if (authDTO.Type == "login")
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Email == authDTO.Email);

            if (user == null)
                return Unauthorized("wrong-email");

            using var hmac = new HMACSHA256(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(authDTO.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                    return Unauthorized("wrong-password");
            }

            return new UserDTO
            {
                Email = user.Email,
                Token = await _tokenService.CreateToken(user)
            };
        }
        else
        {
            return BadRequest("Unknown type.");
        }
    }

    private async Task<bool> AlreadyExist(string email)
    {
        return await _context.Users.AnyAsync(x => x.Email == email.ToLower());
    }
}
