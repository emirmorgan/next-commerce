using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class OrderItemDTO
    {
        [Required]
        public string Brand { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string ImageSrc { get; set; }

        [Required]
        public string ImageAlt { get; set; }

        [Required]
        public string Price { get; set; }

        [Required]
        public int Quantity { get; set; }

        public string? Color { get; set; }
        public string? Size { get; set; }
    }
}
