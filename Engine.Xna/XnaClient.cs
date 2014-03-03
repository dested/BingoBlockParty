using System;
using System.Collections.Generic;
using Client.Interfaces;
using Engine.Interfaces;
using Microsoft.Xna.Framework;

namespace Engine.Xna
{
    public class XnaClient : IClient
    {

        public IGame Game { get; set; }
        public XnaRenderer Renderer { get; set; }

        public XnaClient()
        {
            Game = new BingoBlockParty.Client.Game(this);
        }

        public void Init(IRenderer renderer)
        {
            Renderer = (XnaRenderer)renderer;
            Game.Init(renderer);
        }


        public void Draw(TimeSpan elapsedGameTime)
        {

            Renderer.graphicsDevice.Clear(Color.Black);

            Renderer.BeginRender();
            Game.Draw(elapsedGameTime);
            Renderer.EndRender();

        }

        public void TouchEvent(TouchType touchType, int x, int y)
        {
            var matrix = Renderer.GetScaleMatrix();



            Game.TouchEvent(touchType, (int)(x / matrix.Right.Length()), (int)(y / matrix.Down.Length()));
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
                if (timeouts[i].Item2 > elapsedGameTime)
                {
                    timeouts[i].Item1();
                    timeouts.RemoveAt(i);
                }
            }

            Renderer.ClearScaleMatrix();
            Game.Tick(elapsedGameTime);
        }
    }
}

