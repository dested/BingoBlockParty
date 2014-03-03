using Client.Interfaces;
using Engine.Interfaces;

namespace Engine.Xna
{
    public class XnaClient : IClient
    {

        public IGame Game { get; set; }
        public XnaRenderer Renderer { get; set; }

        public XnaClient()
        {
            Game = new BingoBlockParty.Client.Game();
        }

        public void Init(IRenderer renderer)
        {
            Renderer = (XnaRenderer)renderer;
            Game.Init(renderer);
        }


        public void Draw()
        {
            Renderer.BeginRender();
            Game.Draw();
            Renderer.EndRender();
        
        }

        public void Tick()
        {
            Game.Tick();
        }
    }
}

