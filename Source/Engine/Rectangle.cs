namespace Engine
{
    public class Rectangle
    {
        public Rectangle()
        {
        }

        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }

        public Rectangle(int x, int y, int width, int height)
        {
            X = x;
            Y = y;
            Width = width;
            Height = height;
        }
        public Rectangle(int x, int y, Size size)
        {
            X = x;
            Y = y;
            Width = size.Width;
            Height = size.Height;
        }
        public Rectangle(Point position, int width, int height)
        {
            X = position.X;
            Y = position.Y;
            Width = width;
            Height = height;
        }
        public Rectangle(Point position, Size size)
        {
            X = position.X;
            Y = position.Y;
            Width = size.Width;
            Height = size.Height;
        }

        public bool IsInside(Point point)
        {
            return IsInside(point.X,point.Y);
        }
        public bool IsInside(int x, int y)
        {
            return X < x && Y < y && X + Width > x && Y + Height > y;
        }
    }
}