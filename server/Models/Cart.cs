namespace server.Models;

using System.ComponentModel.DataAnnotations;

public class Cart
{
    [Key]
    [Required]
    public int Id { get; set; }

    [Required]
    public string UserId { get; set; }
    public string? Color { get; set; }
    public string? Size { get; set; }

    [Required]
    public int Quantity { get; set; }
}
