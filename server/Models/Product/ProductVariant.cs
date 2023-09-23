using server.Models;

public class ProductVariant
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Value { get; set; }
    public int Quantity { get; set; }

    public Product Product { get; set; }
    public int ProductId { get; set; }
}
