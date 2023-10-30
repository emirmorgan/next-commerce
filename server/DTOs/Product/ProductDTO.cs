using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductDTO
    {
        [Required]
        public required int Id { get; set; }

        [Required]
        public required string Brand { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Src { get; set; }

        [Required]
        public required string Alt { get; set; }

        [Required]
        public required decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        public string? Color { get; set; }

        [Required]
        public required string Date { get; set; }

        [Required]
        public required string Slug { get; set; }

        [Required]
        public required bool IsFavorite { get; set; } = false;

        [Required]
        public required int Quantity { get; set; }
    }
}
