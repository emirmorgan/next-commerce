using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class AddressDTO
    {
        [Required]
        public required string Title { get; set; }

        [Required]
        public required string Details { get; set; }

        [Required]
        public required string ContactNumber { get; set; }
    }
}
