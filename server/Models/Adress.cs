using System.ComponentModel.DataAnnotations;

public class Address
{
    [Key]
    public int Id { get; set; }

    [Required]
    public required string Title { get; set; }

    [Required]
    public required string ContactNumber { get; set; }

    [Required]
    public required string Details { get; set; }

    [Required]
    public required string UserId { get; set; }
    public User? User { get; set; }
}
