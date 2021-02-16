using System;
using System.Collections.Generic;
using System.Text;

namespace YashSolution.Data.Entities
{
    public class Certification
    {
        public int Id { get; set; }
        public string CertifyType { get; set; }


        public List<Item> Items { get; set; }
    }
}
