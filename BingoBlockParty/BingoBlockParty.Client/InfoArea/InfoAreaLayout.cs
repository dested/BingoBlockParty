using System;

using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.InfoArea
{
    public class InfoAreaLayout : ILayoutView
    {
        private readonly Game _game;
        private readonly int _width;
        private readonly int _height;
        private readonly IRenderer _renderer;
        private readonly ILayout _infoAreaLayout;
        private ILayer mainLayer;

        public InfoAreaLayout(Game game, int width, int height, IRenderer renderer, ILayout infoAreaLayout)
        {
            _game = game;
            _width = width;
            _height = height;
            _renderer = renderer;
            _infoAreaLayout = infoAreaLayout;
        }

        public void Init()
        {
            mainLayer = _renderer.CreateLayer(_width, _height, _infoAreaLayout);
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
            mainLayer.DrawRectangle(new Color(58, 58, 148), 0, 0, _width, _height);
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