using System.ComponentModel.DataAnnotations;

public class OrderItem
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int OrderId { get; set; }

    [Required]
    public int ProductId { get; set; }

    [Required]
    public string Brand { get; set; }

    [Required]
    public string Name { get; set; }

    public string? Image { get; set; }
    public string? Color { get; set; }
    public string? Size { get; set; }

    [Required]
    public string Price { get; set; }

    [Required]
    public int Quantity { get; set; }

    [Required]
    public virtual Order Order { get; set; }
}
