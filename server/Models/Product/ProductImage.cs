using server.Models;

public class ProductImage
{
    public int Id { get; set; }
    public required string src { get; set; }
    public required string alt { get; set; }

    public Product? Product { get; set; }
    public int ProductId { get; set; }
}
