using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public class ProductSimilarDTO
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Src { get; set; }

        public string Alt { get; set; }
    }
}
