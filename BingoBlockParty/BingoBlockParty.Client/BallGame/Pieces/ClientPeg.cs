using System;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Pieces;
using BingoBlockParty.Common.BallGame.Planes;
using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Pieces
{
    public class ClientPeg : Peg
    {

        public int Ticking { get; set; }
        public int Tocking { get; set; }
        public bool Blinking { get; set; }
        public bool DrawText { get; set; }

        public ClientPeg(GameBoard gameBoard, int x, int y, PegType pegType):base(gameBoard,x,y,pegType)
        { 
        }

        public override void Init()
        {
            base.Init();
        }

        public override void Tick()
        {
            base.Tick();
        }

        public override void RoundOver(RoundOverState state)
        {
            base.RoundOver(state);
            if (this.Hit)
            {
                switch (state)
                {
                    case RoundOverState.Pre:

                        this.Blinking = true;
                        break; 
                }

            }

        }

        public override void Trigger()
        {
            if (!this.Hit)
            {
                DrawText = true;
                this.Ticking = 50;
            } 
            base.Trigger();
        }

        public void Render(ILayer context)
        {
             this.Tocking++;
             context.Save();
             context.Translate(this.X, this.Y);
             IImage image;
             string pegAssetName;
             if (this.Blinking) {
                 if ((this.Tocking % 20 < 10)) {
                     pegAssetName = "peg.hit";
                 } else {
                     pegAssetName = "peg";  
                 }
             } else {
                 if (this.Hit) {
                     pegAssetName = "peg.hit";
                 }
                 else {
                     pegAssetName = "peg";
                 }
             }
             
             pegAssetName += "." + PegName;
             image = GameBoard.Client().Renderer.GetImage(pegAssetName);
             
             context.Translate(-image.Center.X, -image.Center.Y);
             context.DrawImage(image, 0, 0);
             context.Restore();
            
        }

        public void RenderText(ILayer context)
        {
            if (this.DrawText)
            {

                this.Ticking--;
                var posY = (int)(this.Ticking / 4);


                context.Save();
                context.Translate(this.X, this.Y);


                context.Translate(0, -25 + posY);


                var fontSize = 17;
/*
                context.FillStyle = "white";
                context.Font = "bold " + fontSize + "px Arial";


                context.ShadowColor = "#72C9FC";
                context.ShadowOffsetX = 0;
                context.ShadowOffsetY = 0;
                context.ShadowBlur = 5;
*/

                var bonusText = "+$" + this.Bonus.ToString();
                var size = context.MeasureString(bonusText);
                context.DrawString(bonusText, (int)-size / 2, -fontSize / 2);


                context.Restore();

                if (this.Ticking == 0)
                    this.DrawText = false;


            }
        }
    }
}