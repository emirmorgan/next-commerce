using System.ComponentModel.DataAnnotations;
using server.Models;

public class Order
{
    [Key]
    public int OrderID { get; set; }
    public DateTime OrderDate { get; set; }
    public string OrderTotal { get; set; }
    public string OrderStatus { get; set; } = "preparing";
    public string DeliveryAddress { get; set; }
    public string DeliveryContact { get; set; }
    public string? DeliveryTrace { get; set; }
    public string? DeliveryInvoice { get; set; }

    public int UserID { get; set; }
    public virtual User User { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; }
}
