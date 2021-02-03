using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace YashAPI.Models
{
    public class Brand
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BrandId { get; set; }
        [Required(ErrorMessage ="Brand type can not be blank")]
        public string BrandType { get; set; }


        public virtual ICollection<Item> Items { get; set; }

    }
}
