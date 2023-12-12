namespace server.DTOs
{
    public class OrderDTO
    {
        public int OrderID { get; set; }
        public string UserID { get; set; }

        public DateTime OrderDate { get; set; }
        public string OrderStatus { get; set; } = "preparing";

        public string? DeliveryInvoice { get; set; }
        public string? DeliveryTrace { get; set; }

        public AddressDTO Address { get; set; }
        public virtual ICollection<OrderItemDTO> OrderItems { get; set; }
    }
}
