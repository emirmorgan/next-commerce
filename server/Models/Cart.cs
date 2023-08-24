namespace server.Models;

using System.ComponentModel.DataAnnotations;

public class Cart
{
    [Key]
    public required int Id { get; set; }
    public required int UserId { get; set; }
    public string? Color { get; set; }
    public string? Size { get; set; }
    public required int Quantity { get; set; }
}
