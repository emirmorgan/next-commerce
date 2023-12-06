using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class AddressDTO
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Details { get; set; }

        [Required]
        public string ContactNumber { get; set; }
    }
}
