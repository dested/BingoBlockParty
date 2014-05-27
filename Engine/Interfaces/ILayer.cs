namespace Engine.Interfaces
{
    public interface ILayer
    {
          ILayout Layout { get; set; }
        void Save();
        void Restore();
        void Translate(int x, int y);
        void DrawImage(IImage image, int x, int y);
        void DrawImage(IImage image, int x, int y,bool center);
        void DrawImage(IImage image, int x, int y, int width, int height);
        void DrawImage(IImage image, int x, int y, double angle, int centerX, int centerY);
        void DrawString(string fontName, string text, int x, int y);
        void DrawString(string fontName, string text, int x, int y,Color color);
        void Clear();
        double MeasureString(string text);
        void  DrawRectangle(Color color, int x, int y, int width, int height);
    }
}