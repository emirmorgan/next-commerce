using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductCreateDTO
    {
        [Required]
        public required string Brand { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        [Range(0, double.MaxValue, ErrorMessage = "Price must be greater than or equal to 0.")]
        public required decimal Price { get; set; }

        [Required]
        public required string Date { get; set; }

        [Required]
        public required string Slug { get; set; }

        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Quantity must be greater than or equal to 0.")]
        public required int Quantity { get; set; } = 0;

        [Required]
        public required int CategoryId { get; set; }

        [Required]
        public required int SubcategoryId { get; set; }

        public decimal? DiscountPrice { get; set; }

        public string? Color { get; set; }

        public List<ProductImage> Images { get; set; }

        public List<ProductVariant>? Variants { get; set; }
    }
}
