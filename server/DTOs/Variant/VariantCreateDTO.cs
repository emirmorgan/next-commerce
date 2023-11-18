using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class VariantCreateDTO
    {
        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Value { get; set; }

        [Required]
        public required int Quantity { get; set; } = 0;

        [Required]
        public required int ProductId { get; set; }
    }
}
