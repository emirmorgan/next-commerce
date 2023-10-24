using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class UpdatePasswordDTO
    {
        [Required]
        [StringLength(
            128,
            ErrorMessage = "Current password can't be shorter than 8 digit and longer than 128 digit.",
            MinimumLength = 6
        )]
        public required string currentPassword { get; set; }

        [Required]
        [StringLength(
            128,
            ErrorMessage = "New password can't be shorter than 8 digit and longer than 128 digit.",
            MinimumLength = 6
        )]
        public required string newPassword { get; set; }
    }
}
