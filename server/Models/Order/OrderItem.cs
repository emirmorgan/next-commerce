using System.ComponentModel.DataAnnotations;

public class OrderItem
{
    [Key]
    public int Id { get; set; }
    public required int OrderId { get; set; }
    public required int ProductId { get; set; }
    public required string Brand { get; set; }
    public required string Name { get; set; }
    public string? Image { get; set; }
    public string? Color { get; set; }
    public string? Size { get; set; }
    public required string Price { get; set; }
    public required int Quantity { get; set; }

    public virtual required Order Order { get; set; }
}
