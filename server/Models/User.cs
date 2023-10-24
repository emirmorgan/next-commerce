using Microsoft.AspNetCore.Identity;

public class User : IdentityUser
{
    public Address? Address { get; set; }
}
