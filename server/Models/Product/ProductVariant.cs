using System.ComponentModel.DataAnnotations;
using server.Models;

public class ProductVariant
{
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public string Value { get; set; }

    [Required]
    public int Quantity { get; set; } = 0;

    public Product? Product { get; set; }

    [Required]
    public int ProductId { get; set; }
}
