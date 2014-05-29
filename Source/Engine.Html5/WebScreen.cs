using System;
using System.Collections.Generic;
using System.Html;
using Engine.Interfaces;

namespace Engine.Html5.Web
{
    public class WebScreen : IScreen
    {
        public DivElement Element { get; set; }

        public WebScreen(WebScreenManager webScreenManager)
        {
            ScreenManager = webScreenManager;

            WebLayouts = new List<WebLayout>();
            Element = (DivElement)Document.CreateElement("div");
        }

        public void Destroy()
        {
            var divElement = Element;
            Document.Body.RemoveChild(divElement);


            foreach (WebLayout layout in Layouts)
            {
                var el = layout.Element;
                while (el.FirstChild != null)
                {
                    el.RemoveChild(el.FirstChild);
                }
            }




            foreach (var layout in Layouts)
            {
                layout.LayoutView.Destroy();
            }
        }


        public ILayout CreateLayout(int width, int height)
        {
            var xnaLayout = new WebLayout(this, width, height);
            WebLayouts.Add(xnaLayout);
            Element.AppendChild(xnaLayout.Element);
            return xnaLayout;
        }


        protected List<WebLayout> WebLayouts { get; set; }

        public IEnumerable<ILayout> Layouts { get { return WebLayouts; } }

        public bool OneLayoutAtATime { get; set; }
        public IScreenManager ScreenManager { get; set; }

        public WebLayout CurrentLayout
        {
            get
            {
                foreach (var xnaLayout in WebLayouts)
                {
                    if (xnaLayout.Active)
                    {
                        return xnaLayout;
                    }
                }
                return null;
            }
        }

        public void Init()
        {
            Document.Body.InsertBefore(Element, (((WebScreenManager)ScreenManager).Renderer).ClickManager);
            foreach (var layout in Layouts)
            {
                layout.LayoutView.InitLayoutView();

            }


            foreach (var layout in Layouts)
            {
                layout.LayoutView.InitLayoutView();
            }
        }

        public void Draw(TimeSpan elapsedGameTime)
        {
            if (OneLayoutAtATime)
            {
                CurrentLayout.LayoutView.Render(elapsedGameTime);
            }
            else
            {
                foreach (var xnaLayout in WebLayouts)
                {

                    xnaLayout.LayoutView.Render(elapsedGameTime);
                }
            }
        }
        public void Tick(TimeSpan elapsedGameTime)
        {
            if (OneLayoutAtATime)
            {
                CurrentLayout.LayoutView.TickLayoutView(elapsedGameTime);

                foreach (var xnaLayout in WebLayouts)
                {
                    if (xnaLayout.AlwaysTick && CurrentLayout != xnaLayout)
                        xnaLayout.LayoutView.TickLayoutView(elapsedGameTime);
                }

            }
            else
            {
                foreach (var xnaLayout in WebLayouts)
                {
                    xnaLayout.LayoutView.TickLayoutView(elapsedGameTime);
                }
            }

        }

        public Size GetLayoutSize()
        {
            if (OneLayoutAtATime)
            {
                return new Size(CurrentLayout.Width, CurrentLayout.Height);
            }
            else
            {
                Size size = new Size();

                foreach (var layout in Layouts)
                {
                    var rectangle = layout.LayoutPosition.Location;
                    if (size.Width < rectangle.X + rectangle.Width)
                    {
                        size.Width = rectangle.X + rectangle.Width;
                    }
                    if (size.Height < rectangle.Y + rectangle.Height)
                    {
                        size.Height = rectangle.Y + rectangle.Height;
                    }
                }
                return size;
            }


        }

        public bool HasLayout(Direction direction)
        {
            if (OneLayoutAtATime)
            {
                switch (direction)
                {
                    case Direction.Left:
                        if (CurrentLayout.LayoutPosition.Left != null)
                            return true;
                        break;
                    case Direction.Right:
                        if (CurrentLayout.LayoutPosition.Right != null)
                            return true;

                        break;
                    case Direction.Up:
                        if (CurrentLayout.LayoutPosition.Top != null)
                            return true;

                        break;
                    case Direction.Down:
                        if (CurrentLayout.LayoutPosition.Bottom != null)
                            return true;

                        break;
                    default:
                        throw new ArgumentOutOfRangeException("direction");
                }
            }
            return false;
        }

        public void ChangeLayout(Direction direction)
        {
            if (OneLayoutAtATime)
            {
                switch (direction)
                {
                    case Direction.Left:
                        if (CurrentLayout.LayoutPosition.Left != null)
                            ChangeLayout(CurrentLayout.LayoutPosition.Left);
                        break;
                    case Direction.Right:
                        if (CurrentLayout.LayoutPosition.Right != null)
                            ChangeLayout(CurrentLayout.LayoutPosition.Right);

                        break;
                    case Direction.Up:
                        if (CurrentLayout.LayoutPosition.Top != null)
                            ChangeLayout(CurrentLayout.LayoutPosition.Top);
                        break;
                    case Direction.Down:
                        if (CurrentLayout.LayoutPosition.Bottom != null)
                            ChangeLayout(CurrentLayout.LayoutPosition.Bottom);
                        break;
                    default:
                        throw new ArgumentOutOfRangeException("direction");
                }
            }
        }

        public void ChangeLayout(ILayout changeTo)
        {
            changeTo.Active = true;
        }



        public void TouchEvent(TouchType touchType, int x, int y)
        {
            if (OneLayoutAtATime)
            {
                CurrentLayout.LayoutView.TouchManager.ProcessTouchEvent(touchType, x, y);
            }
            else
            {
                foreach (var xnaLayout in WebLayouts)
                {
                    var rectangle = xnaLayout.LayoutPosition.Location;
                    if (rectangle.IsInside(new Point(x, y)))
                    {
                        xnaLayout.LayoutView.TouchManager.ProcessTouchEvent(touchType, x - rectangle.X, y - rectangle.Y);

                    }
                }
            }

        }
    }
}