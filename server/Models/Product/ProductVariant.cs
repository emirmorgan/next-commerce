using server.Models;

public class ProductVariant
{
    public int Id { get; set; }
    public string Name { get; set; } //size or color
    public string Value { get; set; }

    public Product Product { get; set; }
    public int ProductId { get; set; }

    public List<ProductImage>? Images { get; set; }
}
