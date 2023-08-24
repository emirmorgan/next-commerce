namespace server.Models;

using System.ComponentModel.DataAnnotations;

public class Favorites
{
    [Key]
    public required int Id { get; set; }
    public required int UserId { get; set; }

    public int ProductId { get; set; }
    public Product Product { get; set; }
}
