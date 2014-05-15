namespace Engine.Interfaces
{
    public class Point
    {
        public int X { get; set; }
        public int Y { get; set; }

        public Point(int x, int y)
        {
            X = x;
            Y = y;
        }
    }
    public class PointF
    {
        public double X { get; set; }
        public double Y { get; set; }

        public PointF(double x, double y)
        {
            X = x;
            Y = y;
        }
    }
}