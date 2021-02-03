using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YashAPI.Models
{
    public class YashDbContext : DbContext
    {
        public DbSet<Admin> Admins { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Certification> Certifications { get; set; }
        public DbSet<Diamond> Diamonds { get; set; }
        public DbSet<Gold> Golds { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Product> Products { get; set; }


        //The override function is use to generate db
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("server="+Environment.MachineName+"\\SQLEXPRESS;database=BookDb;user id=sa;password=123");
        }
    }
}
