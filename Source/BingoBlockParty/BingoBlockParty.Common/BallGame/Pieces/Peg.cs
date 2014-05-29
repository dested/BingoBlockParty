using System;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Planes;

namespace BingoBlockParty.Common.BallGame.Pieces
{
    public class Peg : ICollider
    {
        public GameBoard GameBoard { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public PegType PegType { get; set; }
        public bool Hit { get; set; }
        public IPhysicsBody Body { get; set; }
        public int Bonus { get; set; }

        public Peg(GameBoard gameBoard, int x, int y, PegType pegType)
        {
            GameBoard = gameBoard;
            X = x;
            Y = y;
            PegType = pegType;
            Hit = false;
            Bonus = 30;
        }

        public virtual void Init()
        {
            Body = this.GameBoard.PegPhysicsManager.CreatePeg(this.X, this.Y, this);

        }

        public virtual void Tick()
        {
        }

        protected string PegName
        {
            get
            {
                switch (PegType)
                {
                    case PegType.None:
                        return "white";
                    case PegType.Blue:
                        return "blue";
                    case PegType.Yellow:
                        return "yellow";
                    case PegType.Red:
                        return "red";
                    case PegType.Green:
                        return "green";
                    case PegType.Purple:
                        return "purple";
                }
                return null;
            }
        }

        public void Destroy()
        {
            this.GameBoard.PegPhysicsManager.DestroyBody(this.Body);

        }

        public virtual void RoundOver(RoundOverState state)
        {
            if (this.Hit)
            {
                switch (state)
                { 
                    case RoundOverState.Post:

                        this.Destroy();
                        break;
                }

            }
        }

        public virtual void Collide(ICollider collider)
        {
        }

        public virtual void Trigger()
        {
            if (!this.Hit)
            {
                this.GameBoard.GameModel.InterRoundBonus += this.Bonus;
                this.Hit = true; 
            }
        }
    }
}