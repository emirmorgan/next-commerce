using server.Models;

namespace server.Interfaces;

public interface ITokenService
{
    Task<string> CreateToken(User user);
}
