using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data;

public class CommerceContext : DbContext
{
    public DbSet<User> Users { get; set; }

    public CommerceContext(DbContextOptions options)
        : base(options) { }
}
