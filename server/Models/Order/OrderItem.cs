using System.ComponentModel.DataAnnotations;
using server.Models;

public class OrderItem
{
    public int Id { get; set; }

    [Required]
    public int OrderId { get; set; }

    [Required]
    public decimal Price { get; set; }

    [Required]
    public int Quantity { get; set; }

    public string? Color { get; set; }
    public string? Size { get; set; }

    public Product Product { get; set; }
    public int ProductId { get; set; }

    public Order Order { get; set; }
}
