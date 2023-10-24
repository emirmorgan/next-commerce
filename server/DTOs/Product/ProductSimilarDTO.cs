using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductSimilarDTO
    {
        [Required]
        public required int Id { get; set; }

        [Required]
        public required string Src { get; set; }

        [Required]
        public required string Alt { get; set; }
    }
}
