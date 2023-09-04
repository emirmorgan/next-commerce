using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using server.Models;

public class Address
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Title { get; set; }

    [Required]
    public string ContactNumber { get; set; }

    [Required]
    public string Details { get; set; }

    [Required]
    public int UserId { get; set; }
    public User User { get; set; }
}
