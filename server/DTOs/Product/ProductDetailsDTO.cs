using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductDetailsDTO
    {
        [Required]
        public required int Id { get; set; }

        [Required]
        public required string Brand { get; set; }

        [Required]
        public required string Name { get; set; }

        public string? Desc { get; set; }

        [Required]
        public required decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        [Required]
        public required string Slug { get; set; }

        [Required]
        public required string Category { get; set; }

        [Required]
        public required string Subcategory { get; set; }

        public List<ProductVariantDTO>? Variants { get; set; }

        public List<ProductImageDTO>? Images { get; set; }

        public List<ProductSimilarDTO>? SimilarProducts { get; set; }
    }
}
