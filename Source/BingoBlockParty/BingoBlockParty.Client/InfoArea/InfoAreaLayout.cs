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
        public ILayout Layout { get; set; }

        private ILayer mainLayer;

        public InfoAreaLayout(Game game, int width, int height, IRenderer renderer, ILayout infoAreaLayout)
        {
            _game = game;
            _width = width;
            _height = height;
            _renderer = renderer;
            Layout = infoAreaLayout;
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
            mainLayer.Begin();
            mainLayer.Save();
            mainLayer.DrawRectangle(new Color(58, 58, 148), 0, 0, _width, _height);
            mainLayer.Restore();
            mainLayer.End();

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