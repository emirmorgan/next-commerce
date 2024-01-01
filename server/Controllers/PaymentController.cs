using server.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

using Stripe;

namespace server.Controllers;

public class PaymentController : BaseController
{
    private readonly CommerceContext _context;

    public PaymentController(CommerceContext context)
    {
        _context = context;
    }

    [HttpPost]
    public ActionResult Create(PaymentIntentCreateRequest request)
    {
        var paymentIntentService = new PaymentIntentService();

        string productsJson = JsonConvert.SerializeObject(request.Products);

        var paymentIntent = paymentIntentService.Create(
            new PaymentIntentCreateOptions
            {
                Amount = CalculateOrderAmount(request.Products),
                Currency = "usd",
                AutomaticPaymentMethods = new PaymentIntentAutomaticPaymentMethodsOptions
                {
                    Enabled = true,
                },
                Metadata = new Dictionary<string, string> { { "products", productsJson } },
            }
        );

        return new JsonResult(new { clientSecret = paymentIntent.ClientSecret });
    }

    private long CalculateOrderAmount(IEnumerable<Product> items)
    {
        long result = 0;

        foreach (var item in items)
        {
            var product = _context.Products.Where(p => p.Id == item.ProductId).FirstOrDefault();

            if (product != null)
            {
                if (product.DiscountPrice != null && product.DiscountPrice != item.Price)
                {
                    // Handle discount price mismatch error
                    BadRequest("stripe-err-2");
                }
                else if (product.DiscountPrice == null && product.CurrentPrice != item.Price)
                {
                    // Handle current price mismatch error
                    BadRequest("stripe-err-3");
                }
                else
                {
                    // Product and prices are valid
                    result += (long)(item.Price * item.Quantity * 100);
                }
            }
            else
            {
                // Product doesn't exist
                BadRequest("stripe-err-1");
            }
        }

        return result;
    }

    public class Product
    {
        [JsonProperty("productId")]
        public int ProductId { get; set; }

        [JsonProperty("brand")]
        public string Brand { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("price")]
        public decimal Price { get; set; }

        [JsonProperty("quantity")]
        public int Quantity { get; set; }

        [JsonProperty("color")]
        public string? Color { get; set; }

        [JsonProperty("size")]
        public string? Size { get; set; }
    }

    public class PaymentIntentCreateRequest
    {
        [JsonProperty("products")]
        public Product[] Products { get; set; }
    }
}
