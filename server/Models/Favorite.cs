namespace server.Models;

public class Favorite
{
    public int Id { get; set; }
    public int UserId { get; set; }

    public int ProductId { get; set; }
    public Product Product { get; set; }
}
