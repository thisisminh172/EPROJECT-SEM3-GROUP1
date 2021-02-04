using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace YashAPI.Models
{
    public class User
    {
        //User is customer
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required(ErrorMessage ="First name can not be blank")]
        public string FirstName { get; set; }

        [Required(ErrorMessage ="Last name can not be blank")]
        public string LastName { get; set; }

        [Required(ErrorMessage ="Address can not be blank")]
        public string Address { get; set; }

        [Required(ErrorMessage ="City can not be blank")]
        public string City { get; set; }

        [Required(ErrorMessage ="State can not be blank")]
        public string State { get; set; }

        [Required(ErrorMessage ="Phone number can not be blank")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage ="Email can not be blank")]
        public string Email { get; set; }

        [DataType(DataType.Date)]
        [Required(ErrorMessage ="Date of birth can not be blank")]
        public DateTime DOB { get; set; }

        [DataType(DataType.DateTime)]
        [Required(ErrorMessage ="Current date can not be blank")]
        public DateTime CurrentDate { get; set; }

        [Required(ErrorMessage ="Password can not be blank")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
