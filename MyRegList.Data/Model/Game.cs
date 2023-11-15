using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyRegList.Data.Model
{
    public class Game
    {
        private int id;
        private string title;
        private string company;
        private int genre;
        private int platforms;
        private int price;
        private int? sale;


        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id
        {
            get { return id; }
            set { id = value; }
        }
        [StringLength(24)]
        public string Title
        {
            get { return title; }
            set { title = value; }
        }

        [StringLength(24)]
        public string Company
        {
            get { return company; }
            set { company = value; }
        }

        [ForeignKey(nameof(Model.GameInfos))]
        public int GameInfos
        {
            get { return genre; }
            set { genre = value; }
        }
        public int Price
        {
            get { return price; }
            set { price = value; }
        }


        [Range(5, 100)]
        public int? Sale
        {
            get { return sale; }
            set { sale = value; }
        }

        [NotMapped]
        public int Value { get => sale != null ? price * ((int)sale / 100) : price; }

        [NotMapped] 
        public virtual ICollection<GameInfos> Genres { get; set; }

    }
}
