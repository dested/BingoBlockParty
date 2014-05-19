using System;
using System.Collections.Generic;
using System.Diagnostics;
using Engine.Interfaces;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;


namespace Engine.Xna
{
    public class XnaClient : IClient
    {

        public IGame Game { get; set; }
        public XnaRenderer Renderer { get; set; }
        public ILayoutManager LayoutManager { get; set; }

        public XnaClient()
        {
            Game = new BingoBlockParty.Client.Game(this);
        }

        public void LoadImages(IRenderer renderer)
        {
            Game.LoadAssets(renderer);
        }

        public void Init(IRenderer renderer, bool oneLayoutAtATime)
        {
            Renderer = (XnaRenderer)renderer;

            
            LayoutManager = new XnaLayoutManager(Renderer);
            LayoutManager.OneLayoutAtATime = oneLayoutAtATime;
            Game.InitLayouts(renderer, LayoutManager);
/*
            var size = LayoutManager.GetLayoutSize();

            Renderer.graphics.PreferredBackBufferWidth = size.Width;
            Renderer.graphics.PreferredBackBufferHeight = size.Height;*/


        }


        public void Draw(TimeSpan elapsedGameTime)
        {

            var size = LayoutManager.GetLayoutSize();
            if (Renderer.graphics.PreferredBackBufferWidth != size.Width ||
                Renderer.graphics.PreferredBackBufferHeight != size.Height)
            {
//                Renderer.graphics.PreferredBackBufferWidth = size.Width;
//                Renderer.graphics.PreferredBackBufferHeight = size.Height;
//                Renderer.graphicsDevice.Viewport = new Viewport(0, 0, size.Width, size.Height);
//                Renderer.graphics.ApplyChanges();
            }

            Renderer.graphicsDevice.Clear(Microsoft.Xna.Framework.Color.Black);
            Renderer.BeginRender();
            Game.BeforeDraw();
            LayoutManager.Draw(elapsedGameTime);
            Game.AfterDraw();
            Renderer.EndRender();

        }

        public void TouchEvent(TouchType touchType, int x, int y)
        {
            var matrix = Renderer.GetScaleMatrix();

            LayoutManager.TouchEvent(touchType, (int)(x / matrix.Right.Length()), (int)(y / matrix.Down.Length()));
        }



        private List<Tuple<Action, TimeSpan>> timeouts = new List<Tuple<Action, TimeSpan>>();

        public void Timeout(Action callback, int ms)
        {
            var cur = lastElapsedTime.Add(new TimeSpan(0, 0, 0, 0, ms));
            timeouts.Add(new Tuple<Action, TimeSpan>(callback, cur));
        }

        private TimeSpan lastElapsedTime;
        public void Tick(TimeSpan elapsedGameTime)
        {
            lastElapsedTime = elapsedGameTime;

            for (int i = timeouts.Count - 1; i >= 0; i--)
            {
                if (timeouts[i].Item2 < elapsedGameTime)
                {
                    timeouts[i].Item1();
                    timeouts.RemoveAt(i);
                }
            }

            Renderer.ClearScaleMatrix();

            Game.BeforeTick();
            LayoutManager.Tick(elapsedGameTime);
            Game.AfterTick();
        }
    }
}

