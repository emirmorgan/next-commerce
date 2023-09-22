namespace server.Models;

public class Subcategory
{
    public int Id { get; set; }
    public string Name { get; set; }

    public List<Product>? Products { get; set; }
}
