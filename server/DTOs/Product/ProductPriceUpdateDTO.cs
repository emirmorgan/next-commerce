using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductPriceUpdateDTO
    {
        [Required]
        public int ProductId { get; set; }

        [Required]
        public decimal Price { get; set; }
        public decimal? Discount { get; set; }
    }
}
