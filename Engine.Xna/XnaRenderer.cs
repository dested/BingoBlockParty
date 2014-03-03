using System.Collections.Generic;
using System.Linq;
using System.Xml.Serialization;
using Engine.Interfaces;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;
using Point = Engine.Interfaces.Point;

namespace Engine.Xna
{
    public class XnaRenderer : IRenderer
    {
        protected internal readonly GraphicsDevice graphicsDevice;
        protected readonly ContentManager content;
        private readonly XnaImageCache imageCache;
        private List<XnaLayer> layers;

        public XnaRenderer(GraphicsDevice graphicsDevice, ContentManager content)
        {
            this.graphicsDevice = graphicsDevice;
            this.content = content;

            this.imageCache = new XnaImageCache(content);
            layers = new List<XnaLayer>();

        }



        public ILayer CreateLayer(int width, int height)
        {
            return new XnaLayer(this, width, height);
        }

        public void AddLayer(ILayer layer)
        {
            layers.Add((XnaLayer)layer);
        }

        public IImage GetImage(string imageName)
        {
            return imageCache.GetImage(imageName);
        }
        public void CreateImage(string imageName, string imagePath, Point center = null)
        {
            imageCache.CreateImage(imageName, imagePath, center);
        }

        public void BeginRender()
        {
            foreach (var xnaLayer in layers)
            {
                xnaLayer.Begin();
            }
        }
        public void EndRender()
        {
            foreach (var xnaLayer in layers)
            {
                xnaLayer.End();
            }
        }

    }
    public class XnaImageCache
    {
        private readonly ContentManager content;
        private readonly Dictionary<string, XnaImage> textures;

        public XnaImageCache(ContentManager content)
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
            var texture2D = content.Load<Texture2D>(imagePath);
            textures.Add(imageName, new XnaImage(texture2D, center));
        }
    }

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
        private readonly SpriteBatch currentSpriteBatch;
        private readonly int width;
        private readonly int height;

        public XnaLayer(XnaRenderer renderer, int width, int height)
        {
            this.renderer = renderer;
            this.width = width;
            this.height = height;


            currentSpriteBatch = new SpriteBatch(renderer.graphicsDevice);

            settingsStack = new List<XnaContextSettings>();

            settingsStack.Add(new XnaContextSettings()
                              {
                                  Left = -7
                              });


        }


        public void Begin()
        {

            currentSpriteBatch.Begin(SpriteSortMode.Deferred, BlendState.NonPremultiplied, null, null, null, null, Resolution.getTransformationMatrix());
        }
        public void End()
        {
            currentSpriteBatch.End();
        }

        private List<XnaContextSettings> settingsStack;

        public void Save()
        {
            settingsStack.Add(settingsStack.Last().Clone());
        }
        private XnaContextSettings CurrentSettings()
        {
            return settingsStack.Last();
        }

        public void Restore()
        {
            settingsStack.RemoveAt(settingsStack.Count - 1);
        }

        public void Translate(int x, int y)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            xnaContextSettings.Left += x;
            xnaContextSettings.Top += y;
        }

        public void DrawImage(IImage image, int x, int y)
        {

            XnaContextSettings xnaContextSettings = CurrentSettings();
            var xnaImage = (XnaImage)image;
            currentSpriteBatch.Draw(xnaImage.Texture, new Vector2((float)(xnaContextSettings.Left + x), (float)(xnaContextSettings.Top + y)), Color.White);
        }

        public void DrawImage(IImage image, int x, int y, int width, int height)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            var xnaImage = (XnaImage)image;
            currentSpriteBatch.Draw(xnaImage.Texture, new Rectangle(xnaContextSettings.Left + x, xnaContextSettings.Top + y, width, height), Color.White);
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