
using System;

using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.PeopleArea
{
    public class PeopleAreaLayout : ILayoutView
    {
        private readonly Game _game;
        private readonly int _width;
        private readonly int _height;
        private readonly IRenderer _renderer;
        public ILayout Layout { get; set; }

        private ILayer mainLayer;

        public PeopleAreaLayout(Game game, int width, int height, IRenderer renderer, ILayout peopleAreaLayout)
        {
            _game = game;
            _width = width;
            _height = height;
            _renderer = renderer;
            Layout = peopleAreaLayout;
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
            mainLayer.Clear();
            mainLayer.Save();
            mainLayer.DrawRectangle(new Color(11, 19, 255), 0, 61, _width, _height-61);
            mainLayer.DrawRectangle(new Color(11, 200, 255, 80), _width/2, 0, _width / 2, 61);
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