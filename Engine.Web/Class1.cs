using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Client.Interfaces;
using Engine.Interfaces;

namespace Engine.Web
{
    public class WebClient : IClient
    {
        public IGame Game { get; set; }
        public WebRenderer Renderer { get; set; }

        public WebClient()
        {
            Game = new BingoBlockParty.Client.Game(this);
        }

        public void Init(IRenderer renderer)
        {
            throw new NotImplementedException();
        }

        public void Draw(TimeSpan elapsedGameTime)
        {
            throw new NotImplementedException();
        }

        public void TouchEvent(TouchType touchType, int x, int y)
        {
            throw new NotImplementedException();
        }

        public void Tick(TimeSpan elapsedGameTime)
        {
            throw new NotImplementedException();
        }

        public void Timeout(Action callback, int ms)
        {
            throw new NotImplementedException();
        }
    }
    public class WebRenderer : IRenderer
    {
        public ILayer CreateLayer(int width, int height)
        {
            throw new NotImplementedException();
        }

        public void AddLayer(ILayer layer)
        {
            throw new NotImplementedException();
        }

        public IImage GetImage(string imageName)
        {
            throw new NotImplementedException();
        }

        public void CreateImage(string imageName, string imagePath, Point center = null)
        {
            throw new NotImplementedException();
        }

        public void BeginRender()
        {
            throw new NotImplementedException();
        }

        public void EndRender()
        {
            throw new NotImplementedException();
        }
    }

}
