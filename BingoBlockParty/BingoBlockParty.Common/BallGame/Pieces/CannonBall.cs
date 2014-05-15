using System;
using System.Diagnostics;
using System.Text;
using BingoBlockParty.Common.BallGame.Models;

namespace BingoBlockParty.Common.BallGame.Pieces
{
    public class CannonBall :ICollider
    {
        public GameBoard GameBoard { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public int Angle { get; set; }
        public int Velocity { get; set; }
        public bool BallDead { get; set; }
        public IPhysicsBody Body { get; set; }

        public CannonBall(GameBoard gameBoard, int x, int y, int angle)
        {
            GameBoard = gameBoard;
            X = x;
            Y = y;
            Angle = angle;
            Velocity = 25;
            BallDead = false; 
        }

        public virtual void Init()
        {
            Body = GameBoard.PegPhysicsManager.CreateCannonBall(this.X, this.Y, this.Angle, this.Velocity, this);

        }
        public virtual void Collide(ICollider other)
        {
            if (other is Peg)
            {
                other.Trigger();
            }

            if (other is Chute)
            {
                var format = sb.ToString();
                Console.WriteLine(format); 
                this.GameBoard.PegPhysicsManager.DestroyBody(this.Body);
                this.BallDead = true;
                other.Trigger();
                this.GameBoard.RoundOver();
            }
             
        } 
        public void Trigger()
        {
        }

        public StringBuilder sb = new StringBuilder();

        public virtual void Tick()
        {
            sb.AppendLine(Body.Position.X + ", " + Body.Position.Y);
            if (!Body.Awake)
            {
                BallDead = true;
                GameBoard.PegPhysicsManager.DestroyBody(Body);
                GameBoard.RoundOver();
            }
        }

    }
}