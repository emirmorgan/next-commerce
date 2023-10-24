using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductImageDTO
    {
        [Required]
        public required string src { get; set; }

        [Required]
        public required string alt { get; set; }
    }
}
