using System;
using System.Collections.Generic;
using Engine.Interfaces;

namespace Engine.Html5.Web
{
    public class WebScreenManager : IScreenManager
    {
        public WebScreenManager(WebRenderer renderer, IClient client)
        {

            Renderer = renderer;
            Client = client;
            WebScreens = new List<WebScreen>();
        }

        public List<WebScreen> WebScreens { get; set; }

        public WebRenderer Renderer { get; set; }
        public IClient Client { get; set; }
        public bool OneLayoutAtATime { get; set; }

        public IScreen CreateScreen()
        {
            var webScreen = new WebScreen(this);
            WebScreens.Add(webScreen);
            return webScreen;
        }

        public IScreen CurrentScreen { get; set; }
        public IEnumerable<IScreen> Screens { get { return WebScreens; } }
        public void Draw(TimeSpan elapsedGameTime)
        {
            Renderer.BeginRender();
            CurrentScreen.Draw(elapsedGameTime);

            Renderer.EndRender();

        }

        public void TouchEvent(TouchType touchType, int x, int y)
        {
            CurrentScreen.TouchEvent(touchType, x, y);
        }

        private TimeSpan lastElapsedTime;
        private List<Tuple<Action, TimeSpan>> timeouts = new List<Tuple<Action, TimeSpan>>();
        public void Timeout(Action callback, int ms)
        {

            var cur = lastElapsedTime.Add(new TimeSpan(0, 0, 0, 0, ms));
            timeouts.Add(new Tuple<Action, TimeSpan>(callback, cur));
        }

        public void Init()
        {
            CurrentScreen.Init();
        }

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
            CurrentScreen.Tick(elapsedGameTime);

        }

        public Size GetScreenSize()
        {
            return CurrentScreen.GetLayoutSize();
        }

        public void ChangeScreen(IScreen screen)
        {
            if (CurrentScreen != null)
            {
                CurrentScreen.Destroy();
            }
            CurrentScreen = screen;
            foreach (WebLayout layout in CurrentScreen.Layouts)
            {
                layout.Element.Style.Position = "absolute";
                layout.Element.Style.Left = layout.LayoutPosition.Location.X + "px";
                layout.Element.Style.Top = layout.LayoutPosition.Location.Y + "px";
                layout.Element.Style.Width = layout.LayoutPosition.Location.Width + "px";
                layout.Element.Style.Height = layout.LayoutPosition.Location.Height + "px";
            }

            Init();
        }
    }
}