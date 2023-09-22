namespace server.Models;

public class Review
{
    public int Id { get; set; }
    public string? Comment { get; set; }
    public int Rating { get; set; }
    public DateTime ReviewDate { get; set; }

    public Product Product { get; set; }
    public int ProductId { get; set; }

    public User User { get; set; }
    public int UserId { get; set; }
}
