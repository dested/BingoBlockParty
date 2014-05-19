namespace Engine
{
    public class Size
    {
        public Size(int width, int height)
        {
            Width = width;
            Height = height;
        }

        public Size()
        {
        }

        public int Width { get; set; }
        public int Height { get; set; }
    }
}