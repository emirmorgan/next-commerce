using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.DTOs;

namespace server.Controllers;

[Authorize(Roles = "ADMIN")]
public class VariantController : BaseController
{
    private readonly CommerceContext _context;

    public VariantController(CommerceContext context)
    {
        _context = context;
    }

    [HttpPost("increase")] // api/variant/increase
    public async Task<IActionResult> IncreaseVariantStock(int variantId)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var variant = await _context.ProductVariants
            .Where(v => v.Id == variantId)
            .FirstOrDefaultAsync();

        if (variant == null)
        {
            return NotFound("Variant couldn't find.");
        }

        if (variant.Quantity >= 0)
        {
            variant.Quantity += 1;
        }

        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("decrease")] // api/variant/decrease
    public async Task<IActionResult> DecreaseVariantStock(int variantId)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var variant = await _context.ProductVariants
            .Where(v => v.Id == variantId)
            .FirstOrDefaultAsync();

        if (variant == null)
        {
            return NotFound("Variant couldn't find.");
        }

        if (variant.Quantity > 0)
        {
            variant.Quantity -= 1;
        }

        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPost("create")] // api/variant/create
    public async Task<ActionResult<string>> CreateVariant(
        [FromBody] VariantCreateDTO variantCreateDTO
    )
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        bool exist = await _context.ProductVariants.AnyAsync(
            v => v.ProductId == variantCreateDTO.ProductId && v.Value == variantCreateDTO.Value
        );

        if (exist)
        {
            return BadRequest("Variant already exist.");
        }

        var variant = new ProductVariant
        {
            Name = variantCreateDTO.Name,
            Value = variantCreateDTO.Value,
            Quantity = variantCreateDTO.Quantity,
            ProductId = variantCreateDTO.ProductId
        };

        _context.ProductVariants.Add(variant);
        await _context.SaveChangesAsync();

        return Ok("Variant successfully created.");
    }

    [HttpPost("delete")] // api/variant/delete
    public async Task<ActionResult<string>> DeleteVariant(int variantId)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var variant = await _context.ProductVariants
            .Where(v => v.Id == variantId)
            .FirstOrDefaultAsync();

        if (variant == null)
        {
            return NotFound();
        }

        _context.ProductVariants.Remove(variant);
        await _context.SaveChangesAsync();

        return Ok("Variant successfully deleted.");
    }
}
