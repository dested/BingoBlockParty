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

        public void Init()
        {
            Game.Init();
        }

        public void Draw(IRenderer renderer)
        {
            Game.Draw(renderer);
        }

        public void Tick()
        {
            Game.Tick();
        }
    }
}