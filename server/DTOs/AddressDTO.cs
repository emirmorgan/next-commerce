using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class AddressDTO
    {
        [Required]
        public string FullName { get; set; }

        [Required]
        public string ContactNumber { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string AddressLine { get; set; }

        public string? AddressLineSecond { get; set; }
    }
}
