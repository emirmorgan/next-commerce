namespace server.DTOs
{
    public class UserDTO
    {
        public required string UserID { get; set; }
        public required string Email { get; set; }
        public required string Role { get; set; }
        public AddressDTO? Address { get; set; }
    }
}
