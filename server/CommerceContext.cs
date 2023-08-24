using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data;

public class CommerceContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Cart> Cart { get; set; }
    public DbSet<Favorites> Favorites { get; set; }
    public DbSet<Product> Products { get; set; }

    public CommerceContext(DbContextOptions<CommerceContext> options)
        : base(options) { }
}
