using System;
using System.Html;
using System.Runtime.CompilerServices;
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

            Renderer = (WebRenderer) renderer;
            Game.Init(Renderer);
        }

        public void Draw(TimeSpan elapsedGameTime)
        {
            Game.Draw(elapsedGameTime);
        }

        public void TouchEvent(TouchType touchType, int x, int y)
        {
            Game.TouchEvent(touchType, x, y);
        }

        public void Tick(TimeSpan elapsedGameTime)
        {
            Game.Tick(elapsedGameTime);
        }

        public void Timeout(Action callback, int ms)
        {
            Window.SetTimeout(callback, ms);
        }

        public void LoadImages(IRenderer renderer)
        {
            Game.LoadImages(renderer);
        }
    }
    public class Window
    {
        [InlineCode("window.setTimeout({action},{timeout});")]
        public static void SetTimeout(Action action, int timeout)
        {

        }
        [InlineCode("window.setInterval({action},{timeout});")]
        public static void SetInterval(Action action, int timeout)
        {

        }
    }

}