using BingoBlockParty.Client.BallGame.Pieces;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame.Models;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Planes
{
    public class ClientBackgroundPlane : IPlane
    {
        public ClientGameBoard GameBoard { get; set; }
        public ILayer Plane { get; set; }
        public ClientBackgroundPlane(ClientGameBoard gameBoard)
        {

            this.GameBoard = gameBoard;

        }

        public void Init()
        {
            Plane = GameBoard.Renderer.CreateLayer(GameBoard.GameModel.Client().CanvasWidth, GameBoard.GameModel.Client().CanvasHeight);
        }

        public void RoundOver(RoundOverState state)
        {
        }

        public void Tick()
        {
        }
        public void Render()
        {
            var context = this.Plane;

            context.Save();
            this.GameBoard.ViewManager.TranslateContext(context);
            context.DrawImage(GameBoard.Renderer.GetImage("board"), 0, 0, this.GameBoard.GameModel.BoardWidth, this.GameBoard.GameModel.BoardHeight);

            context.Restore();
        }
    }

}