using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class OrderDTO
    {
        [Required]
        public int OrderID { get; set; }

        [Required]
        public string OrderDate { get; set; }

        [Required]
        public string OrderStatus { get; set; } = "preparing";

        [Required]
        public string OrderTotal { get; set; }

        [Required]
        public string OrderInvoice { get; set; }
        public string? OrderTrace { get; set; }

        [Required]
        public AddressDTO Address { get; set; }

        [Required]
        public virtual ICollection<OrderItemDTO> OrderItems { get; set; }
    }
}
