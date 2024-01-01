using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductCreateDTO
    {
        [Required]
        public string Brand { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [Range(0, double.MaxValue, ErrorMessage = "Price must be greater than or equal to 0.")]
        public decimal Price { get; set; }

        [Required]
        public string Date { get; set; }

        [Required]
        public string Slug { get; set; }

        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Quantity must be greater than or equal to 0.")]
        public int Quantity { get; set; } = 0;

        [Required]
        public int CategoryId { get; set; }

        [Required]
        public int SubcategoryId { get; set; }

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
