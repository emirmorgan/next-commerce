using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class OrderDTO
    {
        public int OrderID { get; set; }
        public DateTime OrderDate { get; set; }

        [Required]
        public string OrderStatus { get; set; }

        [Required]
        public string DeliveryAddress { get; set; }

        [Required]
        public string DeliveryContact { get; set; }
        public string? DeliveryInvoice { get; set; }
        public string? DeliveryTrace { get; set; }
        public List<OrderItemDTO>? OrderItems { get; set; }
    }
}
