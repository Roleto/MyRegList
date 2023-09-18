namespace MyRegList.Repository.Interfaces
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> GetAll();
        abstract T Get(int id);

        void Create(T item);
        abstract void Update(T item);
        void Delete(int id);
    }
}
