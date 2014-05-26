using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using Engine.Interfaces;
using Engine.Xna.Network;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;


namespace Engine.Xna
{

    public class XnaClient : IClient
    {
        public IGame Game { get; set; }
        public XnaRenderer Renderer { get; set; }
        public IScreenManager ScreenManager { get; set; }
        public ISocketManager SocketManager { get; set; }
        public IClientSettings ClientSettings { get; set; }

        public XnaClient()
        {
            Game = new BingoBlockParty.Client.Game(this);
        }

        public void LoadImages(IRenderer renderer)
        {
            Game.LoadAssets(renderer);
            Game.LoadFonts(renderer);
        }

        public void Init(IRenderer renderer, IClientSettings clientSettings)
        {
            Renderer = (XnaRenderer)renderer;
            ClientSettings = clientSettings;
            ScreenManager = new XnaScreenManager(Renderer, this);
            Game.InitScreens(renderer, ScreenManager);
            SocketManager = new XnaSocketManager();
            Game.InitSocketManager(SocketManager);

/*
            var size = screen.GetLayoutSize();

            Renderer.graphics.PreferredBackBufferWidth = size.Width;
            Renderer.graphics.PreferredBackBufferHeight = size.Height;*/


        }



        public void Draw(TimeSpan elapsedGameTime)
        {
            Game.BeforeDraw();
            ScreenManager.Draw(elapsedGameTime);
            Game.AfterDraw();
        }

        public void TouchEvent(TouchType touchType, int x, int y)
        {
            var matrix = Renderer.GetScaleMatrix();

            var x_ = (int)(x / matrix.Right.Length());
            var _y = (int)(y / matrix.Down.Length());

            ScreenManager.TouchEvent(touchType, x_, _y);
        }




        public void Timeout(Action callback, int ms)
        {
            ScreenManager.Timeout(callback, ms);
        }

        public void ShowKeyboard()
        {


        }

        public void Tick(TimeSpan elapsedGameTime)
        {
            Game.BeforeTick();
          
            ScreenManager.Tick(elapsedGameTime);
            Game.AfterTick();
        }
    }
    public class XnaClientSettings : IClientSettings
    {
        public bool OneLayoutAtATime { get; set; }
        public Action<Action<string>> GetKeyboardInput { get; set; }
    }

}

