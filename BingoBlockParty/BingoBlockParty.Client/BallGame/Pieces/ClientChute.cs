using System.Collections.Generic;
using BingoBlockParty.Client.BallGame.Planes;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Pieces;
using BingoBlockParty.Common.BallGame.Planes;
using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Pieces
{
    public class ClientChute :Chute
    {

        public int Ticking { get; set; }
        public bool Blinking { get; set; }
        public override void RoundOver(RoundOverState state)
        {
            base.RoundOver(state);
            switch (state)
            {
                case RoundOverState.Pre:
                    if (Triggered)
                    {
                        Blinking = true;
                    }
                    break;
                case RoundOverState.Post:
                    this.Blinking = false;
                    break;
            }

        }

        public ClientChute(GameBoard gameBoard, ChutesPlane chutesPlane, int chuteIndex, Point chuteLocation) : base(gameBoard, chutesPlane, chuteIndex, chuteLocation)
        {

            Blinking = false;
            Ticking = 0;

            ChuteAssets=new List<IImage>();
            ChuteAssetsLit=new List<IImage>();

        }
        public List<IImage> ChuteAssets { get; set; }
        public List<IImage> ChuteAssetsLit { get; set; }
        public override void Init()
        {
            base.Init();
            
                    this.ChuteAssets.Add(GameBoard.Client().Renderer.GetImage("chuteBlueBucket"));
                    this.ChuteAssets.Add(GameBoard.Client().Renderer.GetImage("chuteGreenBucket"));
                    this.ChuteAssets.Add(GameBoard.Client().Renderer.GetImage("chuteYellowBucket"));
                    this.ChuteAssets.Add(GameBoard.Client().Renderer.GetImage("chuteRedBucket"));
                    this.ChuteAssets.Add(GameBoard.Client().Renderer.GetImage("chutePurpleBucket"));
                         
                    this.ChuteAssetsLit.Add(GameBoard.Client().Renderer.GetImage("chuteBlueBucketLit"));
                    this.ChuteAssetsLit.Add(GameBoard.Client().Renderer.GetImage("chuteGreenBucketLit"));
                    this.ChuteAssetsLit.Add(GameBoard.Client().Renderer.GetImage("chuteYellowBucketLit"));
                    this.ChuteAssetsLit.Add(GameBoard.Client().Renderer.GetImage("chuteRedBucketLit"));
                    this.ChuteAssetsLit.Add(GameBoard.Client().Renderer.GetImage("chutePurpleBucketLit"));
        }


  


        public void Render(ILayer context)
        {
            this.Ticking++;
            var chuteLocation = this.ChuteLocation;


            bool lit;
            if (this.Blinking)
            {
                lit = !((this.Ticking % 10) < 4);
            }
            else
            {
                lit = (this.Ticking % 50) < (this.ChuteIndex + 1) * 10 && (this.Ticking % 50) > (this.ChuteIndex) * 10;

                for (var i = 0; i < this.ChutesPlane.Chutes.Count; i++)
                {
                    var chute = this.ChutesPlane.Chutes[i];
                    if (chute.Client().Blinking)
                    {
                        lit = false;
                        break;
                    }
                }
            }


            var chuteImage = (lit ? this.ChuteAssetsLit : this.ChuteAssets)[this.ChuteIndex];

            context.Save();
            context.Translate(chuteLocation.X, chuteLocation.Y);
            if (lit)
            {
                var offX = (this.ChuteAssetsLit[this.ChuteIndex].Width - this.ChuteAssets[this.ChuteIndex].Width) / 2;
                var offY = (this.ChuteAssetsLit[this.ChuteIndex].Height - this.ChuteAssets[this.ChuteIndex].Height) / 2;

                context.Translate(-offX, -offY);
            }
            context.DrawImage(chuteImage, 0, 0);
            context.Restore();


            context.Save();
            context.Translate(chuteLocation.X, chuteLocation.Y);
            context.Translate(this.ChuteAssets[this.ChuteIndex].Width / 2, this.ChuteAssets[this.ChuteIndex].Height / 2);


            var fontSize = 25;
            /*context.FillStyle = "white";
            context.Font = "bold " + fontSize + "px Arial";
            context.ShadowColor = "#72C9FC";
            context.ShadowOffsetX = 0;
            context.ShadowOffsetY = 0;
            context.ShadowBlur = 5;
*/
            var bonusText = this.ChuteNumber.ToString();
            var size = context.MeasureString(bonusText);
            context.DrawString(bonusText, (int)-size / 2, 8);

            context.Restore();

        }

     }
}