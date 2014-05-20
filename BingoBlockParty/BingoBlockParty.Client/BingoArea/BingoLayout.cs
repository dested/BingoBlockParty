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
        private readonly ILayout _bingoBoardLayout;
        private readonly IRenderer _renderer;

        private ILayer mainLayer;

        public BingoLayout(Game game, int width, int height, IRenderer renderer, ILayout bingoBoardLayout)
        {
            _game = game;
            _width = width;
            _height = height;
            _bingoBoardLayout = bingoBoardLayout;
            _renderer = renderer;
        }

        public void Init()
        {
            mainLayer = _renderer.CreateLayer(_width, _height, _bingoBoardLayout);
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
    }

}