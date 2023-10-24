using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class FavoriteDTO
    {
        [Required]
        public required string Brand { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Src { get; set; }

        [Required]
        public required string Alt { get; set; }

        [Required]
        public required decimal Price { get; set; }

        public decimal? DiscountPrice { get; set; }

        [Required]
        public required string Slug { get; set; }
    }
}
