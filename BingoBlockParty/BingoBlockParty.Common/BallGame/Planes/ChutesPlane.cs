using System.Collections.Generic;
using BingoBlockParty.Common.BallGame.Models;
using Engine.Interfaces;
using BingoBlockParty.Common.BallGame.Pieces;

namespace BingoBlockParty.Common.BallGame.Planes
{
    public class ChutesPlane : IPlane
    {
        public GameBoard GameBoard { get; set; }
        public Engine.Interfaces.Size BucketsSize { get; set; }
        public Size BumpersSize { get; set; }
        public List<Chute> Chutes { get; set; }

        public ChutesPlane(GameBoard gameBoard)
        {
            GameBoard = gameBoard;
            Chutes = new List<Chute>();
        }

        private class wallLocation
        {
            public int X { get; set; }
            public int Y { get; set; }
            public int Width { get; set; }
            public int Height { get; set; }
            public int CircleX { get; set; }
        }


        public virtual void Init()
        {

            this.BumpersSize = new Size(434, 65);
            this.BucketsSize = new Size(399, 47);


            var chuteLocations = new List<Point>();

            var roundBumperOffset = 14;
            var bucketWidth = 55;
            var bucketHeight = this.BucketsSize.Height;
            var bumperWidth = 31;
            var halfBumperWidth = 18;


            for (var i = 0; i < 5; i++)
            {
                var x = halfBumperWidth + i * (bucketWidth + bumperWidth);
                chuteLocations.Add(new Point(x, this.GameBoard.GameModel.BoardHeight - this.BucketsSize.Height));
            }


            var wallLocations = new List<wallLocation>();

            wallLocations.Add(new wallLocation()
            {
                X = 0,
                Y = this.GameBoard.GameModel.BoardHeight - (this.BumpersSize.Height - roundBumperOffset),
                Width = halfBumperWidth,
                Height = this.BumpersSize.Height - roundBumperOffset,
                CircleX = 0
            }
                );

            for (var i = 1; i < 5; i++)
            {
                var x = halfBumperWidth + (bucketWidth * i) + (bumperWidth * (i - 1));
                wallLocations.Add(new wallLocation()
                    {
                        X = x,
                        Y = this.GameBoard.GameModel.BoardHeight - (this.BumpersSize.Height - roundBumperOffset),
                        Width = bumperWidth,
                        Height = this.BumpersSize.Height - roundBumperOffset,
                        CircleX = x + (bumperWidth / 2)

                    }
                );
            }

            wallLocations.Add(new wallLocation()
                {
                    X = halfBumperWidth + (bucketWidth * 5) + (bumperWidth * (5 - 1)),
                    Y = this.GameBoard.GameModel.BoardHeight - (this.BumpersSize.Height - roundBumperOffset),
                    Width = halfBumperWidth,
                    Height = this.BumpersSize.Height - roundBumperOffset,
                    CircleX = this.GameBoard.GameModel.BoardWidth
                }
            );


            for (var i = 0; i < chuteLocations.Count; i++)
            {
                var chuteLocation = chuteLocations[i];
                var chute = createChute(this.GameBoard, this, i, chuteLocation);
                chute.Init();
                this.GameBoard.PegPhysicsManager.CreateRectangleSensor(chuteLocation.X, chuteLocation.Y, bucketWidth, bucketHeight, chute);
                this.Chutes.Add(chute);

            }


            foreach (var wallLocation in wallLocations)
            {
                this.GameBoard.PegPhysicsManager.CreateRectangleWall(wallLocation.X, wallLocation.Y, wallLocation.Width, wallLocation.Height, "wall");
                this.GameBoard.PegPhysicsManager.CreateCircleWall(wallLocation.CircleX, wallLocation.Y, roundBumperOffset, "wall");
            }



        }

        private Chute createChute(GameBoard gameBoard, ChutesPlane chutesPlane, int chuteNumber, Point chuteLocation)
        {
            return new Chute(gameBoard, chutesPlane, chuteNumber, chuteLocation);
        }

        public virtual void RoundOver(RoundOverState state)
        {
            foreach (var chute in this.Chutes)
            {
                chute.RoundOver(state);
            }
        }

        public virtual void Tick()
        {
        }

     }

}