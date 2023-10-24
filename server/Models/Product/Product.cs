using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Product
{
    [Key]
    public int Id { get; set; }
    public required string Brand { get; set; }
    public required string Name { get; set; }
    public required string Slug { get; set; }
    public string? Desc { get; set; }
    public string? Color { get; set; }
    public int TotalQuantity { get; set; }

    public decimal CurrentPrice { get; set; }
    public decimal? DiscountPrice { get; set; }

    public DateTime Date { get; set; }

    public List<ProductImage>? Images { get; set; }
    public List<Review>? Reviews { get; set; }
    public List<Favorite>? Favorites { get; set; }
    public List<ProductVariant>? ProductVariants { get; set; }

    public required int CategoryId { get; set; }
    public required Category Category { get; set; }
    public required int SubcategoryId { get; set; }
    public required Subcategory Subcategory { get; set; }
}
