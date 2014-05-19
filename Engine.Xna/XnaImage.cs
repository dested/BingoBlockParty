using Engine.Interfaces;
using Microsoft.Xna.Framework.Graphics;

namespace Engine.Xna
{
    public class XnaImage : IImage
    {

        public XnaImage(Texture2D texture, Point center)
        {
            this.Texture = texture;
            this.Center = center ?? new Point(texture.Width / 2, texture.Height / 2);
            this.Width = texture.Width;
            this.Height = texture.Height;
        }

        public Texture2D Texture { get; set; }

        public Point Center { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }
}