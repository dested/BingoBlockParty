using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Pieces;

namespace BingoBlockParty.Common.BallGame.Planes
{
    public class CannonPlane : IPlane
    {
        public Cannon Cannon{ get; set; }
        public GameBoard GameBoard { get; set; }

        public CannonPlane(GameBoard gameBoard)
        { 
            this.GameBoard = gameBoard;
        }

        public void ShootBall()
        {
            GameBoard.FireCannon();
        }

        public virtual void Init()
        {
            Cannon = CreateCannon( this);
            Cannon.Init();
        }

        public virtual Cannon CreateCannon( CannonPlane cannonPlane)
        {
            return new Cannon(GameBoard, cannonPlane);
        }

        public virtual void RoundOver(RoundOverState state)
        {
            switch (state)
            {
                case RoundOverState.Pre:
                    break;
                case RoundOverState.Post:
                    GameBoard.GameModel.CannonAngle = 0;
                    break;
            }
        }

        public virtual void Tick()
        {

            this.Cannon.Tick();
        }
    }
}