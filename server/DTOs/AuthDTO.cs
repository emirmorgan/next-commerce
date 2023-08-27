using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class AuthDTO
    {
        [Required]
        public string Type { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(128, ErrorMessage = "Create a shorter e-mail (under 128 characters).")]
        public string Email { get; set; }

        [Required]
        [StringLength(
            128,
            ErrorMessage = "Create a shorter password (under 128 characters).",
            MinimumLength = 6
        )]
        public string Password { get; set; }

        [StringLength(6, MinimumLength = 4)]
        public string? Gender { get; set; }
    }
}
