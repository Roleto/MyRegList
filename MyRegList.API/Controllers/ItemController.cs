using Microsoft.AspNetCore.Mvc;
using MyRegList.Data.Models;
using MyRegList.Logic.Interfaces;

namespace Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ItemController : Controller
    {
        IItemLogic logic;

        public ItemController(IItemLogic logic)
        {
            this.logic = logic;
        }

        [HttpGet]
        public IEnumerable<Item> GetAll()
        {
            return this.logic.GetAll();
        }
        [HttpGet("{id}")]
        public Item Get(int id)
        {
            return this.logic.Get(id);
        }

        [HttpPut]
        public void Update([FromBody] Item value)
        {
            this.logic.Update(value);
        }

        [HttpPost]
        public void Create([FromBody] Item value)
        {
            this.logic.Create(value);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            this.logic.Delete(id);
        }
    }
}
