using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using server.Models;

namespace server.Data;

public class CommerceContext : IdentityDbContext<User>
{
    public DbSet<Favorite> Favorites { get; set; }
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
        base.OnModelCreating(modelBuilder);
    }

    public CommerceContext(DbContextOptions<CommerceContext> options)
        : base(options) { }
}
