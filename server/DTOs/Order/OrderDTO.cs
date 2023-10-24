namespace server.DTOs
{
    public class OrderDTO
    {
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }
        public required string OrderStatus { get; set; }
        public required string DeliveryAddress { get; set; }
        public required string DeliveryContact { get; set; }
        public string? DeliveryInvoice { get; set; }
        public string? DeliveryTrace { get; set; }
        public List<OrderItemDTO>? OrderItems { get; set; }
    }
}
