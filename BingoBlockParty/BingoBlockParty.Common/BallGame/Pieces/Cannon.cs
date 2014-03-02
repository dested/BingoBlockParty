using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Planes;

namespace BingoBlockParty.Common.BallGame.Pieces
{
    public class Cannon 
    {
        public GameBoard GameBoard { get; set; }
        public CannonPlane CannonPlane { get; set; }

        public Cannon(GameBoard gameBoard, CannonPlane cannonPlane)
        {
            GameBoard = gameBoard;
            CannonPlane = cannonPlane;
            MovingCannon = false;
        }

        public bool MovingCannon { get; set; }

        public void RotateCannon(int angle)
        {
            this.GameBoard.GameModel.CannonAngle = angle;
            if (this.GameBoard.GameModel.CannonAngle < -30) this.GameBoard.GameModel.CannonAngle = -30;
            if (this.GameBoard.GameModel.CannonAngle > 30) this.GameBoard.GameModel.CannonAngle = 30; 
        }

        public virtual void Init()
        {
        }

        public virtual void Tick()
        {
        }
    }
}