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
                new Item() {Id=3,Name="Valami3", Description="Desc3", ImageUrl=null, Type="Valami1"},
                new Item() {Id=4,Name="Valami4", Description="Desc4", ImageUrl=null, Type="Valami1"},
                new Item() {Id=5,Name="Valami5", Description="Desc5", ImageUrl=null, Type="Valami2"},
                new Item() {Id=6,Name="Valami6", Description="Desc6", ImageUrl=null, Type="Valami2"},
                new Item() {Id=7,Name="Valami7", Description="Desc7", ImageUrl=null, Type="Valami2"}
                //new Item("2#Valami2#Desc2##Valmi"),
                //new Item("3#Valami3#Desc3##Valmi"),
                //new Item("4#Valami4#Desc4##Valmi1"),
                //new Item("5#Valami5#Desc5##Valmi1"),
                //new Item("6#Valami6#Desc6##Valmi2"),
                //new Item("7#Valami7#Desc7##Valmi2"),
                //new Item("8#Valami8#Desc8##Valmi2"),
                //new Item("9#Valami9#Desc9##Valmi2"),
                //new Item("10#Valami10#Desc10##Valmi3"),
                //new Item("11#Valami11#Desc11##Valmi3"),
                //new Item("12#Valami12#Desc12##Valmi3")
            });
        }
        }
}
