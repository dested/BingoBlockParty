using System.Runtime.CompilerServices;
using Engine.Interfaces;

namespace Engine.Html5.Web
{
    public class WebLayer : ILayer
    {
        private readonly WebRenderer renderer;
        private readonly int width;
        private readonly int height;
        public ILayout Layout { get; set; }

        [IntrinsicProperty]
        public CanvasInformation CanvasInformation { get; set; }
        public WebLayer(WebRenderer renderer, int width, int height, ILayout layout)
        {
            this.renderer = renderer;
            this.width = width;
            this.height = height;
            Layout = layout;
            CanvasInformation = CanvasInformation.Create(width, height);
        }



        public void Begin()
        {
            //not needed for web
        }
        public void End()
        {
            //not needed for web
        }


        public void Save()
        {
            CanvasInformation.Context.Save();
        }

        public void Restore()
        {
            CanvasInformation.Context.Restore();

        }

        public void Translate(int x, int y)
        {
            CanvasInformation.Context.Translate(x, y);
        }

        public void DrawImage(IImage image, int x, int y)
        {
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x, y);
        }

        public void DrawImage(IImage image, int x, int y, bool center)
        {
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x - image.Center.X, y - image.Center.Y);
        }

        public void DrawImage(IImage image, int x, int y, int width, int height)
        {
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x, y, width, height);

        }

        public void DrawImage(IImage image, int x, int y, double angle, int centerX, int centerY)
        {
            Save();
            CanvasInformation.Context.Translate(centerX,centerY);
            CanvasInformation.Context.Rotate(angle);
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x - centerX, y - centerY);
            Restore();
        }

        public void DrawString(string fontName, string text, int x, int y)
        {
            CanvasInformation.Context.FillText(text, x, y);
        }

        public void DrawString(string fontName, string text, int x, int y, Color color)
        {
            CanvasInformation.Context.Save();
            CanvasInformation.Context.FillStyle=color.ToString();
            CanvasInformation.Context.FillText(text, x, y);
            CanvasInformation.Context.Restore();
        }


        public void Clear()
        {
            CanvasInformation.Context.ClearRect(0, 0, width, height);
        }

        public double MeasureString(string text)
        {
            return CanvasInformation.Context.MeasureText(text).Width;

        }

        public void DrawRectangle(Color color, int x, int y, int width, int height)
        {
            CanvasInformation.Context.Save();
            CanvasInformation.Context.FillStyle = string.Format("rgba({0},{1},{2},{3})", color.R, color.G, color.B, color.A/255f);
            CanvasInformation.Context.FillRect(x,y,width,height);
            CanvasInformation.Context.Restore();
        }
    }
}