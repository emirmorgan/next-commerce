using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Favorite
{
    public int Id { get; set; }

    [Required]
    public required string UserId { get; set; }

    [Required]
    public required int ProductId { get; set; }
    public Product? Product { get; set; }
}
