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
            this.SourceRectangle = new Microsoft.Xna.Framework.Rectangle(0, 0, Width, Height);
        }

        public Microsoft.Xna.Framework.Rectangle SourceRectangle { get; private set; }

        public Texture2D Texture { get; set; }

        public Point Center { get; private set; }
        public int Width { get; private set; }
        public int Height { get; private set; }
    }
}