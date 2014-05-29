using System;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Planes;
using Engine;

namespace BingoBlockParty.Common.BallGame.Pieces
{
    public class Chute : ICollider
    {
        public GameBoard GameBoard { get; set; }
        public ChutesPlane ChutesPlane { get; set; }
        public int ChuteIndex { get; set; }
        public int ChuteNumber { get; set; }
        public Point ChuteLocation { get; set; }
        public bool Triggered { get; set; }

        public Chute(GameBoard gameBoard, ChutesPlane chutesPlane, int chuteIndex, Point chuteLocation)
        {
            GameBoard = gameBoard;
            ChutesPlane = chutesPlane;
            ChuteIndex = chuteIndex;
            ChuteLocation = chuteLocation;
            Triggered = false;
            ChuteNumber = 20;//todo random
        }



        public virtual void Init()
        {
        }

        public virtual void Tick()
        {
        }

        public virtual void RoundOver(RoundOverState state)
        {
            switch (state)
            {
                case RoundOverState.Pre:
                     break;
                case RoundOverState.Post:
                    this.Triggered = false;
                    this.ChuteNumber = 50;

                    break;
            }
        }

        public virtual void Collide(ICollider collider)
        {
            this.Triggered = true;
        }

        public virtual void Trigger()
        {
        }
    }
}