using BingoBlockParty.Client.BallGame;
using BingoBlockParty.Client.BallGame.Pieces;
using BingoBlockParty.Client.BallGame.Planes;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Pieces;
using BingoBlockParty.Common.BallGame.Planes;

namespace BingoBlockParty.Client.Utils
{
    public static class ClientSwitcher
    {
        public static ClientGameBoard Client(this GameBoard obj)
        {
            return (ClientGameBoard)obj;
        }
        public static ClientGameModel Client(this GameModel obj)
        {
            return (ClientGameModel)obj;
        }
        public static ClientCannonBall Client(this CannonBall obj)
        {
            return (ClientCannonBall)obj;
        }
        public static ClientPegPhysicsManager Client(this PegPhysicsManager obj)
        {
            return (ClientPegPhysicsManager)obj;
        }
        public static ClientCannonPlane Client(this CannonPlane obj)
        {
            return (ClientCannonPlane)obj;
        }
        public static ClientChutesPlane Client(this ChutesPlane obj)
        {
            return (ClientChutesPlane)obj;
        }
        public static ClientPegsPlane Client(this PegsPlane obj)
        {
            return (ClientPegsPlane)obj;
        }
        public static ClientCannonBallPlane Client(this CannonBallPlane obj)
        {
            return (ClientCannonBallPlane)obj;
        }
        public static ClientCannon Client(this Cannon obj)
        {
            return (ClientCannon)obj;
        }
        public static ClientChute Client(this Chute obj)
        {
            return (ClientChute)obj;
        }
        public static ClientPeg Client(this Peg obj)
        {
            return (ClientPeg)obj;
        }

    }
}