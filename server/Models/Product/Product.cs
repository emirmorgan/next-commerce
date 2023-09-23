using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Product
{
    [Key]
    public int Id { get; set; }
    public string Brand { get; set; }
    public string Name { get; set; }
    public string Slug { get; set; }
    public string Desc { get; set; }
    public string? Color { get; set; }
    public int TotalQuantity { get; set; } // sum of variants quantity

    public decimal CurrentPrice { get; set; }
    public decimal? DiscountPrice { get; set; }

    public List<ProductImage>? Images { get; set; }
    public List<Review>? Reviews { get; set; }
    public List<Favorite>? Favorites { get; set; }
    public List<ProductVariant>? ProductVariants { get; set; }

    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public int SubcategoryId { get; set; }
    public Subcategory Subcategory { get; set; }
}
