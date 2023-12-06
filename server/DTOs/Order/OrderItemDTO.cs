using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class OrderItemDTO
    {
        [Required]
        public string Brand { get; set; }

        [Required]
        public string Name { get; set; }
        public string? Image { get; set; }
        public string? Color { get; set; }
        public string? Size { get; set; }

        [Required]
        public string Price { get; set; }
        public int Quantity { get; set; }
    }
}
