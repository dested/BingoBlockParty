using System.Collections.Generic;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;

namespace BingoBlockParty.Client.BallGame
{
    public class ClientGameModel : GameModel
    {
        public int CanvasWidth { get; set; }
        public int CanvasHeight { get; set; }

        public ClientGameModel(int boardWidth, int boardHeight,int canvasWidth,int canvasHeight)
            : base(boardWidth, boardHeight)
        {
            CanvasWidth = canvasWidth;
            CanvasHeight = canvasHeight;
        }

        public ClickManager ClickManager { get; set; }
    }
}