using Microsoft.EntityFrameworkCore;
using MyRegList.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyRegList.Data.Data
{
    public class ItemDBContext : DbContext
    {
        public DbSet<Item> Items { get; set; }

        public ItemDBContext()
        {
            this.Database.EnsureCreated();
        }

        public ItemDBContext(DbContextOptions<ItemDBContext> options): base(options) 
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            if (!builder.IsConfigured)
            {
                builder
                   .UseInMemoryDatabase("item")
                   .UseLazyLoadingProxies();
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Item>();

            modelBuilder.Entity<Item>().HasData(new Item[]
            {
                new Item() {Id=1,Name="Valami1", Description="Desc1", ImageUrl=null, Type="Valami"},
                new Item() {Id=2,Name="Valami2", Description="Desc2", ImageUrl=null, Type="Valami"},
                new Item() {Id=3,Name="Valami3", Description="Desc3", ImageUrl=null, Type="Valami"},
                new Item() {Id=4,Name="Valami4", Description="Desc4", ImageUrl=null, Type="Valami"},
                new Item() {Id=5,Name="Valami5", Description="Desc5", ImageUrl=null, Type="Valami2"},
                new Item() {Id=6,Name="Valami6", Description="Desc6", ImageUrl=null, Type="Valami2"},
                new Item() {Id=7,Name="Valami7", Description="Desc7", ImageUrl=null, Type="Valami3"},
                new Item() {Id=8,Name="Valami8", Description="Desc8", ImageUrl=null, Type="Valami3"},
                new Item() {Id=9,Name="Valami9", Description="Desc9", ImageUrl=null, Type="Valami3"},
                new Item() {Id=10,Name="Valami10", Description="Desc10", ImageUrl=null, Type="Valami3"},
                new Item() {Id=11,Name="Valami11", Description="Desc11", ImageUrl=null, Type="Valami4"},
                new Item() {Id=12,Name="Valami11", Description="Desc12", ImageUrl=null, Type="Valami4"}
            });
        }
        }
}
