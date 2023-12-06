using System.ComponentModel.DataAnnotations;
using server.Models;

public class ProductImage
{
    public int Id { get; set; }

    [Required]
    public string src { get; set; }

    [Required]
    public string alt { get; set; }

    public Product? Product { get; set; }
    public int ProductId { get; set; }
}
