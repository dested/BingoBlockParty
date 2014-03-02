using System.Collections.Generic;
using System.Linq;
using System.Xml.Serialization;
using Engine.Interfaces;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;

namespace Engine.Xna
{
    public class XnaRenderer : IRenderer
    {
        private readonly GraphicsDevice graphicsDevice;
        private readonly ContentManager content;
        private readonly XnaImageCache imageCache;

        public XnaRenderer(GraphicsDevice graphicsDevice, ContentManager content)
        {
            this.graphicsDevice = graphicsDevice;
            this.content = content;

            this.imageCache = new XnaImageCache(content);

            //            new SpriteBatch(GraphicsDevice)
        }

        public ILayer CreateLayer(int width, int height)
        {
            return new XnaLayer(this, width, height);
        }

        public IImage GetImage(string imageName)
        {
            return imageCache.GetImage(imageName);
        }
        public void CreateImage(string imageName, string imagePath, Point center = null)
        {
            imageCache.CreateImage(imageName, imagePath, center);
        }
    }
    public class XnaImageCache
    {
        private readonly ContentManager content;
        private readonly Dictionary<string, XnaImage> textures;

        public XnaImageCache( ContentManager content)
        {
            this.content = content;
            textures = new Dictionary<string, XnaImage>();

        }

        public XnaImage GetImage(string imageName)
        {
            return textures[imageName];
        }
        public void CreateImage(string imageName, string imagePath, Point center = null)
        {

            textures.Add(imageName, new XnaImage(content.Load<Texture2D>(imagePath),center));
        }
    }

    public class XnaImage : IImage
    {
        private readonly Texture2D texture;
        private readonly Point center;

        public XnaImage(Texture2D texture, Point center)
        {
            this.texture = texture;
            this.center = center ?? new Point(texture.Width / 2, texture.Height / 2);
        }

        public Point Center { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
    }

    public class XnaContextSettings
    {
        public int Left { get; set; }
        public int Top { get; set; }
        public XnaContextSettings Clone()
        {
            return new XnaContextSettings()
                   {
                       Left = this.Left,
                       Top = this.Top,   
                   };
        }
    }
    public class XnaLayer : ILayer
    {
        private readonly XnaRenderer renderer;
        private readonly int width;
        private readonly int height;

        public XnaLayer(XnaRenderer renderer, int width, int height)
        {
            this.renderer = renderer;
            this.width = width;
            this.height = height;
            
            settingsStack = new Stack<XnaContextSettings>();
            
            settingsStack.Push(new XnaContextSettings());


        }

        private Stack<XnaContextSettings> settingsStack;

        public void Save()
        {
            settingsStack.Push(settingsStack.Last().Clone());
        }
        private XnaContextSettings CurrentSettings()
        {
          return  settingsStack.Last();
        }

        public void Restore()
        {
            settingsStack.Pop();
        }

        public void Translate(int x, int y)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            xnaContextSettings.Left += x;
            xnaContextSettings.Top += y;
        }

        public void DrawImage(IImage image, int x, int y)
        {

        }

        public void DrawImage(IImage image, int x, int y, int width, int height)
        {
        }

        public void DrawImage(IImage image, int x, int y, int angle, int centerX, int centerY)
        {
        }

        public void DrawString(string text, int x, int y)
        {
        }

        public void Clear()
        {
        }

        public int MeasureString(string text)
        {
            return 0;
        }
    }
}