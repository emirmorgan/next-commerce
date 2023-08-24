namespace server.Models;

using System.ComponentModel.DataAnnotations;

public class Product
{
    [Key]
    public required int Id { get; set; }
    public required string Brand { get; set; }
    public required string Name { get; set; }
    public required string Image { get; set; }
    public required int Price { get; set; }
    public required string Slug { get; set; }
    public required string Category { get; set; }
    public string? Gender { get; set; }
    public string? Desc { get; set; }
    public required int Quantity { get; set; }

    public ICollection<Favorites> Favorites { get; set; }
}
