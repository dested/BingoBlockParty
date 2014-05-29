using System.Collections.Generic;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;

using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame
{
    public class ClientGameModel : GameModel
    {
        public ILayout GameBoardLayout { get; set; }

        public ClientGameModel(int boardWidth, int boardHeight, ILayout gameBoardLayout)
            : base(boardWidth, boardHeight)
        {
            GameBoardLayout = gameBoardLayout;
        }

        public TouchManager TouchManager { get; set; }
    }
}