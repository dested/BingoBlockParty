using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Engine.Interfaces
{
    public interface IRenderer
    {
        ILayer CreateLayer(int width, int height);
        IImage GetImage(string imageName);
    }
    public interface ILayer
    {
        void Save();
        void Restore();
        void Translate(int x, int y);
        void DrawImage(IImage image, int x, int y);
        void DrawImage(IImage image, int x, int y, int width, int height);
        void DrawImage(IImage image, int x, int y,int angle, int centerX, int centerY  );
        void DrawString(string text, int x, int y);
        void Clear();
        int MeasureString(string text);
    }
    public interface IImage
    {
        Point Center { get; set; }
        int Width { get; set; }
        int Height { get; set; }
    }
}
