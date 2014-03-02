using System;
using System.ComponentModel;
using BingoBlockParty.Client.BallGame.Planes;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Pieces;
using BingoBlockParty.Common.BallGame.Planes;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Pieces
{
    public class ClientCannon : Cannon
    {

        public ClientCannon(GameBoard gameBoard, CannonPlane cannonPlane)
            : base(gameBoard, cannonPlane)
        {
        }

        public override void Init()
        {
            base.Init();
            this.CannonAsset = GameBoard.Client().Renderer.GetImage("cannon");

            var cannonButton = this.GameBoard.GameModel.CannonLocation;

            this.GameBoard.GameModel.Client().ClickManager.PushClickRect(
                new ClickRect(
                        cannonButton.X - this.CannonAsset.Width * 2,
                    cannonButton.Y,
                        this.CannonAsset.Width * 4,
                    this.CannonAsset.Height,
                    this,
                    ShootBall
                )
            );

            this.GameBoard.GameModel.Client().ClickManager.PushClickRect(
                new ClickRect(
                    0,
                    0,
                    this.GameBoard.GameModel.BoardWidth,
                    this.GameBoard.GameModel.BoardHeight,
                    this,
                    RotateClick
                )
            );

        }

        public IImage CannonAsset { get; set; }

        public bool RotateClick(ClickType eventType, ClickRect clickBox, int x, int y, bool collide)
        {
            switch (eventType)
            {
                case ClickType.MouseUp:
                    MovingCannon = false;
                    break;
                case ClickType.MouseDown:
                    MovingCannon = true;
                    break;
                case ClickType.MouseMove:
                    if (MovingCannon)
                    {

                        var angle = (int)((Math.Atan2(y - this.GameBoard.GameModel.CannonLocation.Y, x - this.GameBoard.GameModel.CannonLocation.X) * 180 / Math.PI) - 90);
                        this.RotateCannon(angle);
                    }
                    break;
            }
            return false;
        }
        public bool ShootBall(ClickType eventType, ClickRect clickBox, int x, int y, bool collide)
        {
            switch (eventType)
            {
                case ClickType.MouseUp:
                    if (collide)
                    {
                        CannonPlane.ShootBall();
                    }
                    break;
                case ClickType.MouseDown:
                case ClickType.MouseMove:
                    if (collide)
                    {
                        return true;
                    }
                    break;
            }
            return false;

        }

        public void Render(ILayer context)
        {
            
                    var cannonLocation = this.GameBoard.GameModel.CannonLocation;

                    var cannonImage = this.CannonAsset;


                    context.Save();
                    context.Translate(cannonLocation.X - cannonImage.Width / 2, cannonLocation.Y);
                    context.Translate(cannonImage.Width / 2, -cannonImage.Height);

//todo                    context.Rotate(this.GameBoard.GameModel.CannonAngle * Math.PI / 180);
                    context.DrawImage(cannonImage, -cannonImage.Width / 2, cannonImage.Height);
                    context.Restore();


/*
                    if (this.GameBoard.GameModel.showPeople) {
                        this.ticking += 2;

                        context.Save();

                        var person = assetLoader.getAsset('female.blonde.front');

                        context.Translate((-this.ticking + (this.GameBoard.GameModel.canvasWidth * 100)) % this.GameBoard.GameModel.canvasWidth, 100);

                        context.Translate(person.Width / 2, person.Height / 2);


                        if (this.ticking % 20 < 10) {
                            context.Rotate(.07);
                            context.DrawImage(person.image, -person.Width / 2, -person.Height / 2)
                        } else {
                            context.Rotate(-.07);
                            context.DrawImage(person.image, -person.Width / 2, -person.Height / 2)
                        }

                        context.Restore();


                        context.Save();

                        var person = assetLoader.getAsset('male.hat.front');

                        context.Translate((this.ticking + (this.GameBoard.GameModel.canvasWidth * 100)) % this.GameBoard.GameModel.canvasWidth, 200);

                        context.Translate(person.Width / 2, person.Height / 2);


                        if (this.ticking % 20 < 10) {
                            context.Rotate(.07);
                            context.scale(-1, 1);
                            context.DrawImage(person.image, -person.Width / 2, -person.Height / 2)
                        } else {
                            context.Rotate(-.07);
                            context.scale(-1, 1);
                            context.DrawImage(person.image, -person.Width / 2, -person.Height / 2)
                        }

                        context.Restore();
                    }
*/

        }
     }
}