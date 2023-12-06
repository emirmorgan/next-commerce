using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Product
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Brand { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public string Slug { get; set; }
    public string? Desc { get; set; }
    public string? Color { get; set; }
    public int TotalQuantity { get; set; }

    public decimal CurrentPrice { get; set; }
    public decimal? DiscountPrice { get; set; }

    public string Date { get; set; }

    public List<ProductImage>? Images { get; set; }
    public List<Review>? Reviews { get; set; }
    public List<Favorite>? Favorites { get; set; }
    public List<ProductVariant>? ProductVariants { get; set; }

    [Required]
    public int CategoryId { get; set; }
    public Category Category { get; set; }

    [Required]
    public int SubcategoryId { get; set; }
    public Subcategory Subcategory { get; set; }
}
