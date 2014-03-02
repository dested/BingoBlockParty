using System;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Pieces;

namespace BingoBlockParty.Common.BallGame.Planes
{
    public class CannonBallPlane : IPlane
    {
        public CannonBall CannonBall { get; set; }
        public GameBoard GameBoard { get; set; }

        public CannonBallPlane(GameBoard gameBoard)
        {

            this.GameBoard = gameBoard;

        }

        public virtual  void Init()
        {
        }

        public void FireCannonBall()
        {
            if (this.CannonBall == null)
            {
                this.CannonBall = CreateCannonBall(this.GameBoard.GameModel.CannonLocation.X, this.GameBoard.GameModel.CannonLocation.Y, this.GameBoard.GameModel.CannonAngle + 90);
                this.CannonBall.Init();
            }

        }

        public virtual CannonBall CreateCannonBall(int x, int y, int angle)
        {
            return new CannonBall(GameBoard, x, y, angle);
        }

        public virtual void RoundOver(RoundOverState state)
        {
            switch (state)
            {
                case RoundOverState.Pre:
                    break;
                case RoundOverState.Post:
                    this.CannonBall = null;
                    break;
            }
        }

        public virtual void Tick()
        {
            if (this.CannonBall != null)
            {
                this.CannonBall.Tick();
            }
        }
    }

}