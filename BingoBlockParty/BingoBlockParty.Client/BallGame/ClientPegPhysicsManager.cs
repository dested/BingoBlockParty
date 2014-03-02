using System;
using System.Collections.Generic;
using BingoBlockParty.Common.BallGame;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame
{
    public class ClientPegPhysicsManager : PegPhysicsManager
    {
        public bool ShouldDraw { get; set; }

        public ClientPegPhysicsManager(ClientGameBoard gameBoard,bool shouldDraw)
            : base(gameBoard)
        {
            ShouldDraw = shouldDraw;
            this.GameBoard = gameBoard;
        }

        public void Render( )
        {
        }
    }
     
}