using MyRegList.Data.Models;

namespace MyRegList.Logic.Interfaces
{
    public interface IItemLogic
    {
        void Create(Item item);
        void Delete(int id);
        Item Get(int id);
        IQueryable<Item> GetAll();
        void Update(Item item);
    }
}