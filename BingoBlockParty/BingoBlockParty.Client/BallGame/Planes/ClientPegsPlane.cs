using System.Collections.Generic;
using BingoBlockParty.Client.BallGame.Pieces;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Pieces;
using BingoBlockParty.Common.BallGame.Planes;
using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Planes
{
    public class ClientPegsPlane : PegsPlane 
    {
        public ILayer Plane { get; set; }

        public ClientPegsPlane(ClientGameBoard gameBoard):base(gameBoard)
        {
        }

        public override Peg createPeg(int x, int y, PegType pegType)
        {

            return new ClientPeg(GameBoard, x, y, pegType);
        }

        public override void Init()
        {
            base.Init();
            Plane = GameBoard.Client().Renderer.CreateLayer(GameBoard.GameModel.Client().GameBoardLayout.Width, GameBoard.GameModel.Client().GameBoardLayout.Height, GameBoard.Client().Layout);

        }


        public   void Render()
        {
            Plane.Begin();
            Plane.Clear();
            var context = Plane;
            context.Save();
            GameBoard.Client().ViewManager.TranslateContext(context);
            foreach (var peg in Pegs)
            {
                peg.Client().Render(context);
            }
            foreach (var peg in Pegs)
            {
                peg.Client().RenderText(context);
                
            }
            context.Restore();
            Plane.End();
        }
    }
}