using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class UserDTO
    {
        [Required]
        public string UserID { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Role { get; set; }
        public AddressDTO? Address { get; set; }
    }
}
