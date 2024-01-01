using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using server.Data;
using server.DTOs;
using server.Models;

using SixLabors.ImageSharp.Formats.Webp;

namespace server.Controllers;

public class ProductsController : BaseController
{
    private readonly UserManager<User> userManager;
    private readonly CommerceContext _context;

    public ProductsController(UserManager<User> userManager, CommerceContext context)
    {
        this.userManager = userManager;
        _context = context;
    }

    [AllowAnonymous] // api/products/
    public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProducts(
        [FromQuery] string? sort,
        [FromQuery] string? category,
        [FromQuery] string? subcategory,
        [FromQuery] string? brand,
        [FromQuery] string? color,
        [FromQuery] decimal? priceFrom,
        [FromQuery] decimal? priceTo,
        [FromQuery] string? q,
        [FromQuery] int? pid = 0,
        [FromQuery] int pn = 1
    )
    {
        const int pageSize = 20;

        var query = _context.Products
            .Include(p => p.Category)
            .Include(p => p.Subcategory)
            .Include(p => p.Images)
            .AsQueryable();

        if (pid != 0)
        {
            query = query.Where(p => p.Id == pid);
        }

        if (!string.IsNullOrEmpty(category) && category != "Any")
        {
            query = query.Where(p => p.Category.Name == category);
        }

        if (!string.IsNullOrEmpty(subcategory) && subcategory != "Any")
        {
            query = query.Where(p => p.Subcategory.Name == subcategory);
        }

        if (!string.IsNullOrEmpty(color) && color != "Any")
        {
            query = query.Where(p => p.Color == color);
        }

        if (!string.IsNullOrEmpty(brand) && brand != "Any")
        {
            query = query.Where(p => p.Brand == brand);
        }

        if (!string.IsNullOrEmpty(q))
        {
            var qLower = q.ToLower();
            query = query.Where(p => p.Name.ToLower().Contains(qLower));
        }

        if (priceFrom.HasValue)
        {
            query = query.Where(
                p =>
                    (p.DiscountPrice.HasValue ? p.DiscountPrice : p.CurrentPrice) >= priceFrom.Value
            );
        }

        if (priceTo.HasValue)
        {
            query = query.Where(
                p => (p.DiscountPrice.HasValue ? p.DiscountPrice : p.CurrentPrice) <= priceTo.Value
            );
        }

        switch (sort)
        {
            case "priceAsc":
                query = query.OrderBy(
                    p => p.DiscountPrice.HasValue ? p.DiscountPrice : p.CurrentPrice
                );
                break;
            case "priceDesc":
                query = query.OrderByDescending(
                    p => p.DiscountPrice.HasValue ? p.DiscountPrice : p.CurrentPrice
                );
                break;
            case "dateAsc":
                query = query.OrderBy(p => p.Date);
                break;
            default:
                // Default sorting: latest products (dateDesc)
                query = query.OrderByDescending(p => p.Date);
                break;
        }

        if (User.Identity.IsAuthenticated)
        {
            var user = await userManager.GetUserAsync(User);

            if (user == null)
            {
                return Unauthorized();
            }

            var productsWithFavorites = await query
                .Select(
                    p =>
                        new ProductDTO
                        {
                            Id = p.Id,
                            Brand = p.Brand,
                            Name = p.Name,
                            Src =
                                p.Images != null && p.Images.Any()
                                    ? p.Images[0].src
                                    : "/assets/logo.png",
                            Alt = p.Images != null && p.Images.Any() ? p.Images[0].alt : p.Brand,
                            Price = p.CurrentPrice,
                            DiscountPrice = p.DiscountPrice,
                            Date = p.Date,
                            Slug = p.Slug,
                            IsFavorite = _context.Favorites.Any(
                                f => f.UserId == user.Id && f.ProductId == p.Id
                            ),
                            Quantity = p.TotalQuantity
                        }
                )
                .ToListAsync();

            var totalProducts = productsWithFavorites.Count;

            productsWithFavorites = productsWithFavorites
                .Skip((pn - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return Ok(
                new
                {
                    TotalProducts = totalProducts,
                    PageSize = pageSize,
                    PageNumber = pn,
                    Products = productsWithFavorites
                }
            );
        }
        else
        {
            var totalProducts = await query.CountAsync();

            var products = await query
                .Skip((pn - 1) * pageSize)
                .Take(pageSize)
                .Select(
                    p =>
                        new ProductDTO
                        {
                            Id = p.Id,
                            Brand = p.Brand,
                            Name = p.Name,
                            Src = p.Images.Any() ? p.Images[0].src : "/assets/logo.png",
                            Alt = p.Images.Any() ? p.Images[0].alt : p.Brand,
                            Price = p.CurrentPrice,
                            DiscountPrice = p.DiscountPrice,
                            Date = p.Date,
                            Slug = p.Slug,
                            IsFavorite = false,
                            Quantity = p.TotalQuantity
                        }
                )
                .ToListAsync();

            return Ok(
                new
                {
                    TotalProducts = totalProducts,
                    PageSize = pageSize,
                    PageNumber = pn,
                    Products = products
                }
            );
        }
    }

    [HttpGet("details")] // api/products/details
    public async Task<ActionResult<ProductDetailsDTO>> GetProductDetails(int productId)
    {
        if (productId == 0)
            return NotFound();

        var product = await _context.Products
            .Where(p => p.Id == productId)
            .Include(c => c.Category)
            .Include(sc => sc.Subcategory)
            .Include(pv => pv.ProductVariants)
            .Include(img => img.Images)
            .FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound();
        }

        var SlugProducts = await _context.Products
            .Where(p => p.Slug == product.Slug)
            .Include(i => i.Images)
            .ToListAsync();

        var ProductDTO = new ProductDetailsDTO
        {
            Id = product.Id,
            Brand = product.Brand,
            Name = product.Name,
            Desc = product.Desc,
            Price = product.CurrentPrice,
            DiscountPrice = product.DiscountPrice,
            Slug = product.Slug,
            Category = product.Category.Name,
            Subcategory = product.Subcategory.Name,
            Variants = product.ProductVariants
                .Select(
                    pv =>
                        new ProductVariantDTO
                        {
                            Id = pv.Id,
                            Name = pv.Name,
                            Value = pv.Value,
                            Quantity = pv.Quantity
                        }
                )
                .ToList(),
            Images = product.Images
                .Select(image => new ProductImageDTO { src = image.src, alt = image.alt })
                .ToList(),
            SimilarProducts = SlugProducts
                .Select(
                    sp =>
                        new ProductSimilarDTO
                        {
                            Id = sp.Id,
                            Src = sp.Images[0].src,
                            Alt = sp.Images[0].alt,
                            Slug = sp.Slug
                        }
                )
                .ToList()
        };
        return Ok(ProductDTO);
    }

    [Authorize(Roles = "ADMIN")]
    [HttpPost("create")] // api/products/create
    public async Task<ActionResult<Product>> CreateProduct(
        [FromBody] ProductCreateDTO productCreateDTO
    )
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var product = new Product
        {
            Brand = productCreateDTO.Brand,
            Name = productCreateDTO.Name,
            CurrentPrice = productCreateDTO.Price,
            DiscountPrice = productCreateDTO.DiscountPrice,
            Date = productCreateDTO.Date,
            Slug = productCreateDTO.Slug,
            TotalQuantity = productCreateDTO.Quantity,
            CategoryId = productCreateDTO.CategoryId,
            SubcategoryId = productCreateDTO.SubcategoryId,
        };

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        // Handle Variants
        if (productCreateDTO.Variants != null)
        {
            foreach (var variant in productCreateDTO.Variants)
            {
                var productVariant = new ProductVariant
                {
                    Name = variant.Name,
                    Value = variant.Value,
                    Quantity = variant.Quantity,
                    ProductId = product.Id,
                };

                _context.ProductVariants.Add(productVariant);
            }

            await _context.SaveChangesAsync();
        }
        else
        {
            return BadRequest();
        }

        return Ok(product);
    }

    [Authorize(Roles = "ADMIN")]
    [HttpPost("delete")] // api/products/delete
    public async Task<ActionResult<string>> DeleteProduct(
        [FromBody] ProductDeleteDTO productDeleteDTO
    )
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var product = await _context.Products
            .Where(p => p.Id == productDeleteDTO.ProductId)
            .FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound("Product not found.");
        }

        var productImages = await _context.ProductImages
            .Where(i => i.ProductId == productDeleteDTO.ProductId)
            .ToListAsync();

        var productVariants = await _context.ProductVariants
            .Where(v => v.ProductId == productDeleteDTO.ProductId)
            .ToListAsync();

        _context.Products.Remove(product);

        // Deleting product images
        foreach (var productImage in productImages)
        {
            var currentDirectory = Directory.GetCurrentDirectory();
            var parentDirectory = Path.GetDirectoryName(currentDirectory);
            var uploadDirectory = Path.Combine(parentDirectory, "client", "public", "uploads");

            var imagePath = productImage.src.Substring("/uploads/".Length);
            var filePath = Path.Combine(uploadDirectory, imagePath);

            if (System.IO.File.Exists(filePath))
            {
                System.IO.File.Delete(filePath);
            }

            _context.ProductImages.Remove(productImage);
        }

        _context.ProductVariants.RemoveRange(productVariants);

        await _context.SaveChangesAsync();

        return Ok("Product successfully deleted.");
    }

    [Authorize(Roles = "ADMIN")]
    [HttpPost("update/price")] // api/products/update/price
    public async Task<ActionResult<string>> UpdateProductPrice(ProductPriceUpdateDTO request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var product = await _context.Products
            .Where(p => p.Id == request.ProductId)
            .FirstOrDefaultAsync();

        if (product == null)
        {
            return NotFound("Product couldn't find.");
        }

        product.CurrentPrice = request.Price;

        if (request.Discount == 0)
        {
            product.DiscountPrice = null;
        }
        else
        {
            product.DiscountPrice = request.Discount;
        }

        await _context.SaveChangesAsync();

        return Ok("Product price successfully updated.");
    }

    [Authorize(Roles = "ADMIN")]
    [HttpPost("image/upload")] // api/products/image/upload
    public async Task<ActionResult<string>> CreateProductImage(
        [FromForm] IFormFile[] images,
        [FromForm] string productName,
        [FromForm] int productId
    )
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            foreach (var image in images)
            {
                // Check file type
                var allowedContentTypes = new[]
                {
                    "image/jpeg",
                    "image/jpg",
                    "image/png",
                    "image/webp"
                };
                if (!allowedContentTypes.Contains(image.ContentType.ToLower()))
                {
                    return BadRequest(
                        "Invalid file type. Only JPG, JPEG, PNG and WEBP images are allowed."
                    );
                }

                // Check file extension
                var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".webp" };
                var fileExtension = Path.GetExtension(image.FileName).ToLower();
                if (!allowedExtensions.Contains(fileExtension))
                {
                    return BadRequest(
                        "Invalid file extension. Only JPG, JPEG, PNG and WEBP images are allowed."
                    );
                }

                // Check file size
                var maxFileSizeInBytes = 3 * 1024 * 1024; // 3 MB
                if (image.Length > maxFileSizeInBytes)
                {
                    return BadRequest(
                        "Type: " + "File size exceeds the maximum allowed limit (3 MB)."
                    );
                }

                var currentDirectory = Directory.GetCurrentDirectory();
                var parentDirectory = Path.GetDirectoryName(currentDirectory);
                var uploadDirectory = Path.Combine(parentDirectory, "client", "public", "uploads");

                if (!Directory.Exists(uploadDirectory))
                {
                    Directory.CreateDirectory(uploadDirectory);
                }

                var uniqueFileName = Guid.NewGuid().ToString() + ".webp";
                var filePath = Path.Combine(uploadDirectory, uniqueFileName);

                using (var outputStream = new FileStream(filePath, FileMode.Create))
                {
                    using (var inputStream = image.OpenReadStream())
                    {
                        var img = await Image.LoadAsync(inputStream);

                        if (!fileExtension.Equals(".webp"))
                        {
                            img.Save(outputStream, new WebpEncoder());
                        }
                        else
                        {
                            await image.CopyToAsync(outputStream);
                        }
                    }
                }

                var imageSrc = "/uploads/" + uniqueFileName;
                var imageAlt = productName;

                var productImage = new ProductImage
                {
                    src = imageSrc,
                    alt = imageAlt,
                    ProductId = productId
                };

                _context.ProductImages.Add(productImage);
            }

            await _context.SaveChangesAsync();
            return Ok("Product created successfully.");
        }
        catch (Exception ex)
        {
            return StatusCode(
                500,
                $"An error occurred while creating the product. Details: {ex.Message}"
            );
        }
    }
}
