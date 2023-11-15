using Microsoft.EntityFrameworkCore;
using MyRegList.Data.Model;

namespace MyRegList.Data.Data
{
    public class GameContext : DbContext
    {
        public DbSet<Game> Games { get; set; }
        public DbSet<GameInfos> Genres { get; set; }

        public GameContext()
        {
            this.Database.EnsureCreated();
        }

        public GameContext(DbContextOptions<GameContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            if (!builder.IsConfigured)
            {
                builder
                   .UseInMemoryDatabase("games")
                   .UseLazyLoadingProxies();
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>(game => game
                                        .HasOne<Game>()
                                        .WithOne()
                                        .HasForeignKey<Game>(game => game.GameInfos)
                                        .OnDelete(DeleteBehavior.Cascade)
                                        );
            modelBuilder.Entity<GameInfos>();

            modelBuilder.Entity<Game>().HasData(new Game[]
            {
                new Game() { Id=1 ,Title="Assasins Creed", Company="Ubisoft", GameInfos=1, Price=15000, Sale=null},
                new Game() { Id=2 ,Title="The Last of Us", Company="Naughtydog", GameInfos=2, Price=20000, Sale=10},
                new Game() { Id=3 ,Title="Witcher 3", Company="Cd Project Red", GameInfos=3, Price=17500, Sale=50},
                new Game() { Id=4 ,Title="God of War", Company="Santa Monica", GameInfos=4, Price=15500, Sale=null},
                new Game() { Id=5 ,Title="Gta 5", Company="Rockstar", GameInfos=5, Price=10000, Sale=30},
                new Game() { Id=6 ,Title="The Legend Of Zelda", Company="Ubisoft", GameInfos=6, Price=8000, Sale=null}
            });

            modelBuilder.Entity<GameInfos>().HasData(new GameInfos[]
            {
                new GameInfos() {GameId = 1, GameGenre="Openworld;Action;Single", GamePlatforms="Pc;Ps;Xbox"},
                new GameInfos() {GameId = 2, GameGenre="Survival;Single", GamePlatforms="Ps"},
                new GameInfos() {GameId = 3, GameGenre="Rpg;Openworld;Action;Single", GamePlatforms="Pc,Ps,Xbox"},
                new GameInfos() {GameId = 4, GameGenre="Action;Openworld;Single", GamePlatforms="Ps"},
                new GameInfos() {GameId = 5, GameGenre="Acton;Openworld;Single;Multiplayer;", GamePlatforms="Pc,Ps;Xbox"},
                new GameInfos() {GameId = 6, GameGenre="Openworld;Single", GamePlatforms="Nintendo"}
            });
        }
    }
}
