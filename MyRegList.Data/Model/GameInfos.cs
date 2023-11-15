using System.ComponentModel.DataAnnotations;

namespace MyRegList.Data.Model
{
    public class GameInfos
    {
        [Key]
        public int GameId { get; set; }
        
        [Required]
        public string GameGenre { get; set; } 
        [Required]
        public string GamePlatforms { get; set; }
    }
}
