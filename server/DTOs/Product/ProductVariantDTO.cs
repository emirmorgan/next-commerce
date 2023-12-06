using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductVariantDTO
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Value { get; set; }

        [Required]
        public int Quantity { get; set; }
    }
}
