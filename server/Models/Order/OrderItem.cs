using System.ComponentModel.DataAnnotations;

public class OrderItem
{
    [Key]
    public int Id { get; set; }
    public int OrderId { get; set; }
    public int ProductId { get; set; }
    public string Brand { get; set; }
    public string Name { get; set; }
    public string Image { get; set; }
    public string? Color { get; set; }
    public string? Size { get; set; }
    public string Price { get; set; }
    public int Quantity { get; set; }

    public virtual Order Order { get; set; }
}
