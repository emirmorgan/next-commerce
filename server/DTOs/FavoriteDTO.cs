using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class FavoriteDTO
    {
        [Required]
        public string Brand { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Src { get; set; }

        [Required]
        public string Alt { get; set; }

        [Required]
        public decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        [Required]
        public string Slug { get; set; }
    }
}
