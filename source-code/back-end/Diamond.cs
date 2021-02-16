using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace YashAPI.Models
{
    public class Diamond
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DiamondId { get; set; }

        [Required(ErrorMessage ="Diamond type can not be blank")]
        public string DiamondType { get; set; }

        [Required(ErrorMessage ="Diamond carat can not be blank")]
        public string DiamondCarat { get; set; }

        [Required(ErrorMessage ="Diamond price can not be blank")]
        public float Price { get; set; }

        public virtual ICollection<Item> Items { get; set; }

    }
}
