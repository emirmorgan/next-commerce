using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class AuthDTO
    {
        [Required]
        [EmailAddress]
        [StringLength(128, ErrorMessage = "Create a shorter e-mail (under 128 characters).")]
        public required string Email { get; set; }

        [Required]
        [StringLength(
            128,
            ErrorMessage = "Create a shorter password (under 128 characters).",
            MinimumLength = 6
        )]
        public required string Password { get; set; }
    }
}
