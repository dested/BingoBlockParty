using Client.Interfaces;
using Engine.Interfaces;

namespace Engine.Xna
{
    public class XnaClient : IClient
    {

        public XnaClient()
        {
            Game = new BingoBlockParty.Client.Game();
        }

        public IGame Game { get; set; }

        public void Init(IRenderer renderer)
        {
            Game.Init(renderer);
        }

        public void Draw()
        {
            Game.Draw();
        }

        public void Tick()
        {
            Game.Tick();
        }
    }
}