using System.ComponentModel.DataAnnotations;

public class Order
{
    [Key]
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public string? OrderTotal { get; set; }
    public string OrderStatus { get; set; } = "preparing";

    public string? DeliveryTrace { get; set; }
    public string DeliveryInvoice { get; set; }

    public string UserID { get; set; }
    public User User { get; set; }

    public int AddressID { get; set; }
    public Address Address { get; set; }

    public List<OrderItem> OrderItems { get; set; }
}
