using server.Models;

public class ProductVariant
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Value { get; set; }
    public required int Quantity { get; set; } = 0;

    public Product? Product { get; set; }
    public required int ProductId { get; set; }
}
