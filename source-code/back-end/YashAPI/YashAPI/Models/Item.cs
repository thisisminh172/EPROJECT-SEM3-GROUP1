using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace YashAPI.Models
{
    public class Item
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required(ErrorMessage ="Last name can not be blank")]
        public int StyleCode { get; set; }

        public int Pairs { get; set; }//not clear

        [Required(ErrorMessage ="Brand id can not be blank")]
        public int BrandId { get; set; }//FK

        [Required(ErrorMessage ="Quantity can not be blank")]
        public int Quantity { get; set; }//Storage

        [Required(ErrorMessage ="Category id can not be blank")]
        public int CategoryId { get; set; }//FK

        //public string ProductQuality { get; set; }//not clear

        [Required(ErrorMessage ="Certificate id can not be blank")]
        public int CertifyId { get; set; }//FK

        [Required(ErrorMessage ="Product id can not be blank")]
        public int ProductId { get; set; }//FK

        [Required(ErrorMessage ="Gold type can not be blank")]
        public int GoldTypeId { get; set; }//FK

        public int DiamondTypeId { get; set; }// does not required, nullable

        [Required(ErrorMessage ="Gold weight can not be blank")]
        public float GoldWeight { get; set; }

        [Required(ErrorMessage ="wastage in percentage can not be blank")]
        public int WastageInPercentage { get; set; }

        [Required(ErrorMessage ="Last name can not be blank")]
        public float TotalMaking { get; set; }//total price

        [Required(ErrorMessage ="Item size can not be blank")]
        public int Size { get; set; }

        public virtual Gold Gold { get; set; }
        public virtual Certification Certification { get; set; }
        public virtual Product Product { get; set; }
        public virtual Brand Brand { get; set; }
        public virtual Category Category { get; set; }

        public virtual ICollection<ItemImage> ItemImages { get; set; }



    }
}
