namespace server.Models;

using System.ComponentModel.DataAnnotations;

public class User
{
    [Key]
    public required int Id { get; set; }
    public required string Email { get; set; }
    public required string Password { get; set; }
    public string? Gender { get; set; }
}
