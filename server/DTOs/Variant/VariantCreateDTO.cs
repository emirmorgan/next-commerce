using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class VariantCreateDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Value { get; set; }

        public int Quantity { get; set; } = 0;

        [Required]
        public int ProductId { get; set; }
    }
}
