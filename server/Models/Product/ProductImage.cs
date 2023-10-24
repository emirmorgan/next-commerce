using server.Models;

public class ProductImage
{
    public int Id { get; set; }
    public required string src { get; set; }
    public required string alt { get; set; }

    public required Product Product { get; set; }
    public required int ProductId { get; set; }
}
