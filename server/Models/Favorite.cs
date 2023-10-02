using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Favorite
{
    public int Id { get; set; }

    [Required]
    public int UserId { get; set; }

    [Required]
    public int ProductId { get; set; }
    public Product Product { get; set; }
}
