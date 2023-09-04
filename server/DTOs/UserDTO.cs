namespace server.DTOs
{
    public class UserDTO
    {
        public int UserID { get; set; }
        public string Token { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public AddressDTO Address { get; set; }
    }

    public class AddressDTO
    {
        public string Title { get; set; }
        public string Details { get; set; }
        public string ContactNumber { get; set; }
    }
}
