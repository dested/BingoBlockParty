using System;
using System.Html;
using System.Runtime.CompilerServices;
using Engine.Interfaces;

namespace Engine.Html5.Web
{
    public class WebImage : IImage
    {
        [IntrinsicProperty]
        public ImageElement Image { get; set; }

        public WebImage(string imagePath, Point center, Action ready)
        {
            ImageElement image = new ImageElement();
            image.Src = imagePath;
            Image = image;
            image.OnLoad = (e) =>
            {
                Width = (int)image.Width;
                Height = (int)image.Height;
                Center = center ?? new Point((int)(image.Width / 2), (int)image.Height / 2);
                ready();
            };
        }

        public Point Center { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }
}