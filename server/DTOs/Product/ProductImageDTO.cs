using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductImageDTO
    {
        [Required]
        public string src { get; set; }

        [Required]
        public string alt { get; set; }
    }
}
