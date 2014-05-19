using System.Collections.Generic;
using System.Reflection;
using BingoBlockParty.Common.BallGame.Models;
using Engine;

namespace BingoBlockParty.Common.BallGame
{
    public class GameModel
    {
        public int BoardWidth { get; set; }
        public int BoardHeight { get; set; }
        public List<PegData> Pegs { get; set; }
        public Point CannonLocation { get; set; }
        public int CannonAngle { get; set; }
        public int JackpotScore { get; set; }
        public int NumberOfCoins { get; set; }
        public int NumberOfPulls { get; set; }
        public int InterRoundBonus { get; set; }

        public GameModel(int boardWidth, int boardHeight)
        {
            this.BoardWidth = boardWidth;
            this.BoardHeight = boardHeight;
            this.Pegs = new List<PegData>();
            this.CannonLocation = new Point(this.BoardWidth / 2,0);
            this.CannonAngle = 0;
            this.JackpotScore = 0;
            this.NumberOfCoins = 2567;
            this.NumberOfPulls = 15;
            this.InterRoundBonus = 0;
        }
    }
}