using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data;

public class CommerceContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Cart> Cart { get; set; }
    public DbSet<Favorite> Favorites { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<Address> Address { get; set; }

    public DbSet<Product> Products { get; set; }
    public DbSet<ProductVariant> ProductVariants { get; set; }
    public DbSet<ProductImage> ProductImages { get; set; }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Subcategory> Subcategories { get; set; }

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
