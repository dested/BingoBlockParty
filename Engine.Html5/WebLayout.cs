using System.Html;
using Engine.Interfaces;

namespace Engine.Html5.Web
{
    public class WebLayout : ILayout
    {
        public ILayoutView LayoutView { get; set; }
        public ILayoutManager LayoutManager { get; set; }
        public LayoutPosition LayoutPosition { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public ScreenOrientation ScreenOrientation { get; set; }
        public bool AlwaysTick { get; set; }

        public DivElement Element { get; set; }
        public WebLayout(ILayoutManager layoutManager, int width, int height)
        {
            LayoutManager = layoutManager;
            Width = width;
            Height = height;

            ScreenOrientation = ScreenOrientation.Vertical;
            LayoutPosition = new LayoutPosition(new Size(width, height));

            Element = (DivElement)Document.CreateElement("div");

        }


        private bool active;
        public bool Active
        {
            get { return active; }
            set
            {
                if (value)
                {
                    if (LayoutManager.OneLayoutAtATime)
                    {
                        foreach (var layout in LayoutManager.Layouts)
                        {
                            layout.Active = false;
                        }
                        this.active = true;
                    }
                    else
                    {
                        active = true;
                    }
                }
                else
                {
                    active = false;
                }
            }
        }

        public ILayout Offset(int x, int y)
        {
            LayoutPosition.Offset.X = x;
            LayoutPosition.Offset.Y = y;
            return this;
        }
        public void ForceScreenOrientation(ScreenOrientation orientation)
        {
            ScreenOrientation = orientation;
        }


        public ILayout LeftOf(ILayout layout)
        {
            LayoutPosition.Right = layout;
            layout.LayoutPosition.Left = this;
            return this;
        }

        public ILayout RightOf(ILayout layout)
        {
            LayoutPosition.Left = layout;
            layout.LayoutPosition.Right = this;
            return this;
        }

        public ILayout Above(ILayout layout)
        {
            LayoutPosition.Bottom = layout;
            layout.LayoutPosition.Top = this;
            return this;
        }

        public ILayout Below(ILayout layout)
        {
            LayoutPosition.Top = layout;
            layout.LayoutPosition.Bottom = this;
            return this;
        }

        public ILayout MakeActive()
        {
            Active = true;
            LayoutManager.ChangeLayout(this);
            return this;
        }

        public ILayout ForceTick()
        {
            AlwaysTick = true;
            return this;
        }

        public ILayout SetScreenOrientation(ScreenOrientation orientation)
        {
            ScreenOrientation = orientation;
            return this;
        }

    }
}