using System.ComponentModel.DataAnnotations;

namespace server.Models;

public class Review
{
    public int Id { get; set; }
    public string? Comment { get; set; }
    public int Rating { get; set; }
    public DateTime ReviewDate { get; set; }

    [Required]
    public Product Product { get; set; }
    public int ProductId { get; set; }

    [Required]
    public User User { get; set; }

    [Required]
    public string UserId { get; set; }
}
