using System;
using System.Html;
using Engine.Interfaces;

namespace Engine.Html5.Web
{
    public class WebScreen : IScreen
    {
        private readonly WebScreenManager _webScreenManager;

        public WebScreen(WebScreenManager webScreenManager)
        {
            _webScreenManager = webScreenManager;
            LayoutManager = new WebLayoutManager(webScreenManager.Renderer);

        }

        public ILayoutManager LayoutManager { get; set; }
        public void Init()
        {

            Document.Body.InsertBefore(((WebLayoutManager)LayoutManager).Element, (_webScreenManager.Renderer).ClickManager);
            foreach (var layout in LayoutManager.Layouts)
            {
                layout.LayoutView.InitLayoutView();

            }
        }
        public void Destroy()
        {
            var divElement = ((WebLayoutManager)LayoutManager).Element;
            Document.Body.RemoveChild(divElement);


            foreach (WebLayout layout in LayoutManager.Layouts)
            {
                var el = layout.Element;
                while (el.FirstChild != null)
                {
                    el.RemoveChild(el.FirstChild);
                }
            }




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
            LayoutManager.TouchEvent(touchType, x, y);
        }

        public void Tick(TimeSpan elapsedGameTime)
        {
            LayoutManager.Tick(elapsedGameTime);

        }
    }
}