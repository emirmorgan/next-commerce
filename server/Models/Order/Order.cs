using System.ComponentModel.DataAnnotations;

public class Order
{
    [Key]
    public int Id { get; set; }
    public string OrderDate { get; set; }
    public string? OrderTotal { get; set; }
    public string OrderStatus { get; set; } = "preparing";
    public string? OrderTrace { get; set; }
    public string OrderInvoice { get; set; }

    public string UserID { get; set; }
    public User User { get; set; }

    public int AddressID { get; set; }
    public Address Address { get; set; }

    public List<OrderItem> OrderItems { get; set; }
}
