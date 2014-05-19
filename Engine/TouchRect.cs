namespace Engine
{
    public class TouchRect
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public TouchTrigger EventToTrigger { get; set; }

        public TouchRect(int x, int y, int width, int height, TouchTrigger eventToTrigger)
        {
            X = x;
            Y = y;
            Width = width;
            Height = height;
            EventToTrigger = eventToTrigger;
        }

        public bool Collides(int x, int y)
        {
            return this.X < x &&
                   this.X + this.Width > x &&
                   this.Y < y &&
                   this.Y + this.Height > y;
        }
    }
}