using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data;

public class CommerceContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Cart> Cart { get; set; }
    public DbSet<Favorites> Favorites { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Address> Address { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .Entity<User>()
            .HasOne(u => u.Address)
            .WithOne(a => a.User)
            .HasForeignKey<Address>(a => a.UserId);

        base.OnModelCreating(modelBuilder);
    }

    public CommerceContext(DbContextOptions<CommerceContext> options)
        : base(options) { }
}
