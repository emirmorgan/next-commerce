using server.Models;

public class ProductImage
{
    public int Id { get; set; }
    public string src { get; set; }
    public string alt { get; set; }

    public Product? Product { get; set; }
    public int? ProductId { get; set; }
}
