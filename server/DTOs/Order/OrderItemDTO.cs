namespace server.DTOs
{
    public class OrderItemDTO
    {
        public string Brand { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string? Color { get; set; }
        public string? Size { get; set; }
        public string Price { get; set; }
        public int Quantity { get; set; }
    }
}
