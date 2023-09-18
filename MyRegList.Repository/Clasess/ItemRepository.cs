using MyRegList.Data.Models;
using MyRegList.Repository.Interfaces;

namespace MyRegList.Repository.Classes
{
    public class ItemRepository : Repository<Item>, IRepository<Item>
    {
        public ItemRepository(MyDbContext ctx) : base(ctx)
        {
        }
        public override Item Get(int id)
        {

            return ctx.Items.FirstOrDefault(x => x.Id == id) ?? throw new NullReferenceException();
        }
        public override void Update(Item item)
        {
            var old = Get(item.Id);
            foreach (var prop in old.GetType().GetProperties())
            {
                prop.SetValue(old, prop.GetValue(item));
            }
            ctx.SaveChanges();
        }
    }
}
