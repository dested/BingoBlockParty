using System;
using System.Collections.Generic;
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
            settingsStack = new List<WebContextSettings>();

            settingsStack.Add(new WebContextSettings());
        }



        public void Begin()
        {
            //not needed for web
        }
        public void End()
        {
            //not needed for web
        }

        private List<WebContextSettings> settingsStack;

        public void Save()
        {
            settingsStack.Add(settingsStack.Last().Clone());
            CanvasInformation.Context.Save();
        }
        private WebContextSettings CurrentSettings()
        {
            return settingsStack.Last();
        }
        public void Restore()
        {
            settingsStack.RemoveAt(settingsStack.Count - 1);
            CanvasInformation.Context.Restore();

        }

        public void Translate(Point point)
        {
            Translate(point.X,point.Y);
        }

        public void Translate(int x, int y)
        {
            CanvasInformation.Context.Translate(x, y);
        }

        public void DrawImage(IImage image, Point point)
        {
            DrawImage(image,point.X,point.Y);
        }

        public void DrawImage(IImage image, int x, int y)
        {
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x, y);
        }

        public void DrawImage(IImage image, Point point, bool center)
        {
            DrawImage(image, point.X, point.Y,center);
        }

        public void DrawImage(IImage image, int x, int y, bool center)
        {
            switch (CurrentSettings().DrawingEffects)
            {
                case DrawingEffects.FlipHorizontally:
                    CanvasInformation.Context.Scale(-1, 1);
                    break;
                case DrawingEffects.FlipVertically:
                    CanvasInformation.Context.Scale(1, -1);
                    break;
            }
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x - image.Center.X, y - image.Center.Y);
        }

        public void DrawImage(IImage image, int x, int y, int width, int height)
        {
            switch (CurrentSettings().DrawingEffects)
            {
                case DrawingEffects.FlipHorizontally:
                    CanvasInformation.Context.Scale(-1, 1);
                    break;
                case DrawingEffects.FlipVertically:
                    CanvasInformation.Context.Scale(1, -1);
                    break;
            }
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x, y, width, height);

        }

        public void DrawImage(IImage image, int x, int y, double angle, int centerX, int centerY)
        {
            Save();
            CanvasInformation.Context.Translate(centerX,centerY);
            CanvasInformation.Context.Rotate(angle);

            switch (CurrentSettings().DrawingEffects)
            {
                case DrawingEffects.FlipHorizontally:
                    CanvasInformation.Context.Scale(-1, 1);
                    break;
                case DrawingEffects.FlipVertically:
                    CanvasInformation.Context.Scale(1, -1);
                    break;
            }
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x - centerX, y - centerY);
            Restore();
        }

        public void DrawImage(IImage image, int x, int y, double angle, Point center)
        {
            DrawImage(image, x, y, angle, center.X, center.Y);
        }
        public void DrawImage(IImage image, Point point, double angle, Point center)
        {
            DrawImage(image, point.X, point.Y, angle, center.X, center.Y);
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

        public void SetDrawingEffects(DrawingEffects drawingEffects)
        {
            CurrentSettings().DrawingEffects = drawingEffects;
        }
    }
    public class WebContextSettings
    {
        public DrawingEffects DrawingEffects { get; set; }

        public WebContextSettings Clone()
        {
            return new WebContextSettings()
            {
                DrawingEffects = this.DrawingEffects

            };
        }
    }

}