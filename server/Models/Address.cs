using System.ComponentModel.DataAnnotations;

public class Address
{
    [Key]
    public int Id { get; set; }

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

    [Required]
    public string UserId { get; set; }
    public User? User { get; set; }
}
