namespace server.DTOs
{
    public class OrderItemDTO
    {
        public required string Brand { get; set; }
        public required string Name { get; set; }
        public string? Image { get; set; }
        public string? Color { get; set; }
        public string? Size { get; set; }
        public required string Price { get; set; }
        public int Quantity { get; set; }
    }
}
