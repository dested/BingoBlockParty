using System;
using BingoBlockParty.Client.Utils;

using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BingoGame
{
    public class BingoLayout : ILayoutView
    {
        private readonly Game _game;
        private readonly int _width;
        private readonly int _height;
        public ILayout Layout { get; set; }
        private readonly IRenderer _renderer;

        private ILayer mainLayer;

        public BingoLayout(Game game, int width, int height, IRenderer renderer, ILayout bingoBoardLayout)
        {
            _game = game;
            _width = width;
            _height = height;
            Layout = bingoBoardLayout;
            _renderer = renderer;
        }

        public void Init()
        {
            mainLayer = _renderer.CreateLayer(_width, _height, Layout);
            _renderer.AddLayer(mainLayer);

            TouchManager = new TouchManager();
        }

        public void Tick(TimeSpan elapsedGameTime)
        {
        }

        public ITouchManager TouchManager { get; private set; }
        public void Render(TimeSpan elapsedGameTime)
        {
            mainLayer.Save();
            mainLayer.DrawRectangle(new Color(125,19,148), 0, 0, _width, _height);
            mainLayer.Restore();
        }

        public void Destroy()
        {

        }
        public void InitLayoutView()
        {
            Init();
        }

        public void TickLayoutView(TimeSpan elapsedGameTime)
        {
            Tick(elapsedGameTime);
        }
    }

}