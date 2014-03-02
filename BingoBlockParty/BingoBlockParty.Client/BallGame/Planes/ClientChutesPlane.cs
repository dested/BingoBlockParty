using System.Collections.Generic;
using BingoBlockParty.Client.BallGame.Pieces;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Planes;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Planes
{
    public class ClientChutesPlane : ChutesPlane
    {
        public ILayer BackPlane { get; set; }
        public ILayer FrontPlane { get; set; }
        public IImage BumpersAsset { get; set; }
        public IImage BucketsAsset { get; set; }

        public ClientChutesPlane(GameBoard gameBoard):base(gameBoard)
        { 
        }

        public override void Init()
        {
            base.Init();
            BackPlane = GameBoard.Client().Renderer.CreateLayer(GameBoard.GameModel.Client().CanvasWidth, GameBoard.GameModel.Client().CanvasHeight);
            FrontPlane = GameBoard.Client().Renderer.CreateLayer(GameBoard.GameModel.Client().CanvasWidth, GameBoard.GameModel.Client().CanvasHeight);
            BumpersAsset = GameBoard.Client().Renderer.GetImage("chuteBumpers");
            BucketsAsset = GameBoard.Client().Renderer.GetImage("chuteBuckets");
        }

        public void Render()
        {
            this.BackPlane.Clear();
            this.FrontPlane.Clear();

            var backContext = this.BackPlane;
            var frontContext = this.FrontPlane;


            backContext.Save();
            frontContext.Save();

            GameBoard.Client().ViewManager.TranslateContext(backContext);
            GameBoard.Client().ViewManager.TranslateContext(frontContext);


            backContext.Save();
            backContext.Translate(0, this.GameBoard.GameModel.BoardHeight - this.BumpersAsset.Height);
            backContext.DrawImage(this.BumpersAsset, 0, 0);
            backContext.Restore();


            backContext.Save();
            backContext.Translate(18, this.GameBoard.GameModel.BoardHeight - this.BucketsAsset.Height);
            backContext.DrawImage(this.BucketsAsset, 0, 0);
            backContext.Restore();


            foreach (var chute in Chutes)
            {
                chute.Client().Render(frontContext);
            }

            backContext.Restore();
            frontContext.Restore();
            
        }

      }

}