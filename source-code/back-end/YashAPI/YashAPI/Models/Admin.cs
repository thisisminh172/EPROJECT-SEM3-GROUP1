using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace YashAPI.Models
{
    public class Admin
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AdminId { get; set; }
        [Required(ErrorMessage ="First name can not be blank")]
        public string FirstName { get; set; }

        [Required(ErrorMessage ="Last name can not be blank")]
        public string LastName { get; set; }

        [Required(ErrorMessage ="Address can not be blank")]
        public string Address { get; set; }

        [Required(ErrorMessage ="Email can not be blank")]
        public string Email { get; set; }

        [Required(ErrorMessage ="Password can not be blank")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage ="Role can not be blank")]
        public bool Role { get; set; }
    }
}
