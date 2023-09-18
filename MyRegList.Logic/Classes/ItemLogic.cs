using MyRegList.Data.Model;
using MyRegList.Logic.Interfaces;
using MyRegList.Repository.Interfaces;

namespace MyRegList.Logic.Classes
{
    public class ItemLogic : IItemLogic
    {
        IRepository<Item> repo;

        public ItemLogic(IRepository<Item> repo)
        {
            this.repo = repo;
        }

        public void Create(Item item)
        {
            this.repo.Create(item);
        }

        public void Delete(int id)
        {
            this.repo.Delete(id);
        }

        public Item Get(int id)
        {
            return this.repo.Get(id);
        }

        public IQueryable<Item> GetAll()
        {
            return this.repo.GetAll();
        }

        public void Update(Item item)
        {
            this.repo.Update(item);
        }
    }
}
