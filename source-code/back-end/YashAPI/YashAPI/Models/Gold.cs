using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace YashAPI.Models
{
    public class Gold
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GoldId { get; set; }

        [Required(ErrorMessage ="Gold carat can not be blank")]
        public string GoldCarat { get; set; }//14k 18k 24k

        [Required(ErrorMessage ="Gold price can not be blank")]
        public float Price { get; set; }

    }
}
