using Engine.Interfaces;

namespace Engine
{
    public class LayoutPosition
    {
        public LayoutPosition(Size size)
        {
            Offset = new Point(0, 0);
            Size = size;
        }

        public Size Size { get; set; }

        public Point Offset { get; set; }
        public ILayout Left { get; set; }
        public ILayout Right { get; set; }
        public ILayout Top { get; set; }
        public ILayout Bottom { get; set; }

        public Rectangle Location
        {
            get
            {
                var x =(Left != null ? (Left.LayoutPosition.Location.X + Left.LayoutPosition.Location.Width) : 0) + Offset.X;
                var y = (Top != null ? (Top.LayoutPosition.Location.Y + Top.LayoutPosition.Location.Height) : 0 )+ Offset.Y;
                return new Rectangle(x, y, Size);
            }
        }


    }
}