using MyRegList.Data.Models;
using MyRegList.Repository.Interfaces;

namespace MyRegList.Repository.Classes
{
    public abstract class Repository<T> : IRepository<T> where T : class
    {
        protected MyDbContext ctx;

        protected Repository(MyDbContext ctx)
        {
            this.ctx = ctx;
        }

        public void Create(T item)
        {
            ctx.Set<T>().Add(item);
            ctx.SaveChanges();

        }

        public void Delete(int id)
        {
            ctx.Set<T>().Remove(Get(id));
            ctx.SaveChanges();
        }

        public abstract T Get(int id);


        public IQueryable<T> GetAll()
        {
            return ctx.Set<T>();
        }

        public abstract void Update(T item);
    }
}
