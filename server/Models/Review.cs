namespace server.Models;

public class Review
{
    public int Id { get; set; }
    public string? Comment { get; set; }
    public int Rating { get; set; }
    public DateTime ReviewDate { get; set; }

    public required Product Product { get; set; }
    public int ProductId { get; set; }

    public required User User { get; set; }
    public required string UserId { get; set; }
}
