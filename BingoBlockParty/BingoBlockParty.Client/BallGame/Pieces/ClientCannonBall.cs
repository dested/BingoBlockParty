using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Pieces;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Pieces
{
    public class ClientCannonBall :CannonBall
    { 
        public ClientCannonBall(GameBoard gameBoard, int x, int y, int angle):base(gameBoard,x,y,angle)
        { 
        }

        public override void Tick()
        {
            base.Tick();
            var position = Body.Position;
            GameBoard.Client().ViewManager.Center((int)GameBoard.PegPhysicsManager.MeterToPixel(position.X), (int)GameBoard.PegPhysicsManager.MeterToPixel(position.Y));
        }

        public void Render(ILayer context)
        {
              if (this.BallDead)return;
                    var position = this.Body.Position;

                    var x = this.GameBoard.PegPhysicsManager.MeterToPixel(position.X);
                    var y = this.GameBoard.PegPhysicsManager.MeterToPixel(position.Y);
                    var cannonBall = GameBoard.Client().Renderer.GetImage("cannonBall");
                    var cannonBallShine = GameBoard.Client().Renderer.GetImage("cannonBallShine");


                    context.Save();
                    context.Translate((int)x, (int)y);

                    context.Translate(-cannonBall.Width / 2, -cannonBall.Height / 2);

                    context.Save();

                    context.Translate(cannonBall.Width / 2, cannonBall.Height / 2);
//todo                    context.Rotate(this.Body.GetAngle());

                    context.DrawImage(cannonBall, -cannonBall.Width / 2, -cannonBall.Height / 2);
                    context.Restore();

                    context.DrawImage(cannonBallShine, 0, 0);
                    context.Restore();

        }

     }
}