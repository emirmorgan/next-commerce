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

        public List<ProductCreateVariant>? Variants { get; set; }
    }
}

public class ProductCreateVariant
{
    public required string Name { get; set; }
    public required string Value { get; set; }
    public required int Quantity { get; set; } = 0;
}
