using System;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame.Models;
using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Planes
{
    public class ClientOverlaysPlane : IPlane
    {
        public ILayer Plane { get; set; }


        public Point JackpotOverlayPosition { get; set; }
        public Point PullBoxOverlayPosition { get; set; }
        public Point CoinBoxOverlayPosition { get; set; }

        public IImage JackpotOverlay { get; set; }
        public IImage CoinBoxOverlay { get; set; }
        public IImage PullBoxOverlay { get; set; }


        public ClientOverlaysPlane(ClientGameBoard gameBoard)
        {
            this.GameBoard = gameBoard;


            this.JackpotOverlayPosition = new Point(this.GameBoard.GameModel.Client().GameBoardLayout.Width / 2, 0);
            this.CoinBoxOverlayPosition = new Point(70, 0);
            this.PullBoxOverlayPosition = new Point(351, 0);
        }

        public ClientGameBoard GameBoard { get; set; }

        public void Init()
        {


            this.Plane = GameBoard.Client().Renderer.CreateLayer(GameBoard.GameModel.Client().GameBoardLayout.Width, GameBoard.GameModel.Client().GameBoardLayout.Height, GameBoard.GameModel.Client().GameBoardLayout);

            this.JackpotOverlay = GameBoard.Client().Renderer.GetImage("jackpotOverlay");
            this.CoinBoxOverlay = GameBoard.Client().Renderer.GetImage("coinBoxOverlay");
            this.PullBoxOverlay = GameBoard.Client().Renderer.GetImage("pullBoxOverlay");
        }

        public void RoundOver(RoundOverState state)
        {
            switch (state)
            {
                case RoundOverState.Post:
                    this.GameBoard.GameModel.JackpotScore += this.GameBoard.GameModel.InterRoundBonus;
                    this.GameBoard.GameModel.InterRoundBonus = 0;
                    break;
            }
        }

        public void Tick()
        {
        }
        public void Render()
        {
            Plane.Begin();
            Plane.Clear();
            var context = Plane;
            renderJackpot(context);
            renderCoinBox(context);
            renderPullBox(context);
            Plane.End();
        }

        private void renderJackpot(ILayer context)
        {
            context.Save();
            context.Translate(this.JackpotOverlayPosition.X, this.JackpotOverlayPosition.Y);
            context.Translate(-this.JackpotOverlay.Width / 2, 0);
            context.DrawImage(this.JackpotOverlay, 0, 0);
            context.Restore();


            context.Save();
            context.Translate(this.JackpotOverlayPosition.X, this.JackpotOverlayPosition.Y);
            context.Translate(0, 46);
            var fontSize = 15;
            /*
                        context.FillStyle = "white";
                        context.Font = "bold " + fontSize + "px Arial";
            */

            var size = context.MeasureString(this.GameBoard.GameModel.JackpotScore.ToString());
            context.DrawString("lobby.font", this.GameBoard.GameModel.JackpotScore.ToString(), (int)(-size / 2), (int)-fontSize / 2);
            context.Restore();
        }
        private void renderCoinBox(ILayer context)
        {
            context.Save();
            context.Translate(this.CoinBoxOverlayPosition.X, this.CoinBoxOverlayPosition.Y);
            context.Translate(-this.CoinBoxOverlay.Width / 2, 0);
            context.DrawImage(this.CoinBoxOverlay, 0, 0);
            context.Restore();


            context.Save();
            context.Translate(this.CoinBoxOverlayPosition.X, this.CoinBoxOverlayPosition.Y);
            context.Translate(0, 33);
            var fontSize = 15;
            /*
                        context.FillStyle = "white";
                        context.Font = "bold " + fontSize + "px Arial";
            */

            var size = context.MeasureString(this.GameBoard.GameModel.NumberOfCoins.ToString());
            context.DrawString("lobby.font", this.GameBoard.GameModel.NumberOfCoins.ToString(), (int)-size / 2, -fontSize / 2);
            context.Restore();
        }
        private void renderPullBox(ILayer context)
        {
            context.Save();
            context.Translate(this.PullBoxOverlayPosition.X, this.PullBoxOverlayPosition.Y);
            context.Translate(-this.PullBoxOverlay.Width / 2, 0);
            context.DrawImage(this.PullBoxOverlay, 0, 0);
            context.Restore();


            context.Save();
            context.Translate(this.PullBoxOverlayPosition.X, this.PullBoxOverlayPosition.Y);
            context.Translate(0, 34);
            var fontSize = 15;
            /*
                        context.FillStyle = "white";
                        context.Font = "bold " + fontSize + "px Arial";
            */

            var size = context.MeasureString(this.GameBoard.GameModel.NumberOfPulls.ToString());
            context.DrawString("lobby.font", this.GameBoard.GameModel.NumberOfPulls.ToString(), (int)-size / 2, -fontSize / 2);
            context.Restore();
        }

     }
}