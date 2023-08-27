using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.Models;

namespace server.Controllers;

public class ProductsController : BaseController
{
    private readonly CommerceContext _context;

    public ProductsController(CommerceContext context)
    {
        _context = context;
    }

    [HttpGet] // api/products - Get All Products
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        var products = await _context.Products.ToListAsync();

        if (products == null)
        {
            return NotFound();
        }

        return products;
    }
}
