using System;
using Engine.Interfaces;

namespace Engine.Xna
{
    public class XnaScreen : IScreen
    {
        private readonly XnaScreenManager _xnaScreenManager;

        public XnaScreen(XnaScreenManager xnaScreenManager )
        {
            _xnaScreenManager = xnaScreenManager;
            LayoutManager = new XnaLayoutManager(xnaScreenManager.Renderer);

        }

        public ILayoutManager LayoutManager { get; set; }
        public void Init()
        {
            foreach (var layout in LayoutManager.Layouts)
            {
                layout.LayoutView.Init();

            }
        }
        public void Destroy()
        {
            foreach (var layout in LayoutManager.Layouts)
            {
                layout.LayoutView.Destroy();
            }
        }

        public void Draw(TimeSpan elapsedGameTime)
        {
            LayoutManager.Draw(elapsedGameTime);
        }

        public void TouchEvent(TouchType touchType, int x, int y)
        {
            LayoutManager.TouchEvent(touchType,x,y);
        }

        public void Tick(TimeSpan elapsedGameTime)
        {
            LayoutManager.Tick(elapsedGameTime);

        }
    }
}