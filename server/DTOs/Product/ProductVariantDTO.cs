using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductVariantDTO
    {
        [Required]
        public required int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Value { get; set; }

        [Required]
        public required int Quantity { get; set; }
    }
}
