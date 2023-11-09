using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductDeleteDTO
    {
        [Required(ErrorMessage = "ProductId is required.")]
        public int ProductId { get; set; }
    }
}
