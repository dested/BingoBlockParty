using System.Collections.Generic;
using System.Diagnostics;
using Engine.Interfaces;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace Engine.Xna
{
    public class XnaLayer : ILayer
    {
        private readonly XnaRenderer renderer;
        private readonly SpriteBatch currentSpriteBatch;
        private readonly int width;
        private readonly int height;
        public ILayout Layout { get; set; }
        private XnaShapeCache shapeCache;
        public XnaLayer(XnaRenderer renderer, int width, int height, ILayout layout)
        {
            this.renderer = renderer;
            this.width = width;
            this.height = height;
            Layout = layout;


            currentSpriteBatch = new SpriteBatch(renderer.graphicsDevice);
            
            settingsStack = new List<XnaContextSettings>();

            settingsStack.Add(new XnaContextSettings());
            shapeCache = new XnaShapeCache(renderer.graphicsDevice);

        }


        public void Begin()
        {
            var scaleMatrix = renderer.GetScaleMatrix();

            var settings = CurrentSettings();
            if (Layout.Screen.OneLayoutAtATime)
            {
                settings.Left = 0;
                settings.Top = 0;
            }
            else
            {
                settings.Left = Layout.LayoutPosition.Location.X;
                settings.Top = Layout.LayoutPosition.Location.Y;
            }

            //            Resolution.getTransformationMatrix()

            currentSpriteBatch.Begin(SpriteSortMode.Deferred, BlendState.NonPremultiplied, null, null, null, null, scaleMatrix);
        }
        public void End()
        {
            currentSpriteBatch.End();
        }

        private List<XnaContextSettings> settingsStack;
        private static Microsoft.Xna.Framework.Color WHITE = new Microsoft.Xna.Framework.Color(255, 255, 255);

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
            currentSpriteBatch.Draw(xnaImage.Texture, new Vector2(xnaContextSettings.Left + x, xnaContextSettings.Top + y), WHITE);
        }
        public void DrawImage(IImage image, int x, int y,bool center)
        {

            XnaContextSettings xnaContextSettings = CurrentSettings();
            var xnaImage = (XnaImage)image;
            currentSpriteBatch.Draw(xnaImage.Texture, new Vector2(xnaContextSettings.Left + x - xnaImage.Center.X, xnaContextSettings.Top + y - xnaImage.Center.Y), WHITE);
        }

        public void DrawImage(IImage image, int x, int y, int width, int height)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            var xnaImage = (XnaImage)image;
            currentSpriteBatch.Draw(xnaImage.Texture, new Microsoft.Xna.Framework.Rectangle(xnaContextSettings.Left + x, xnaContextSettings.Top + y, width, height), WHITE);
        }

        public void DrawImage(IImage image, int x, int y, double angle, int centerX, int centerY)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            var xnaImage = (XnaImage)image;


            Vector2 location = new Vector2(xnaContextSettings.Left + x + centerX, xnaContextSettings.Top + y + centerY);
            Microsoft.Xna.Framework.Rectangle sourceRectangle = new Microsoft.Xna.Framework.Rectangle(0, 0, image.Width, image.Height);
            Vector2 origin = new Vector2(centerX, centerY);

            currentSpriteBatch.Draw(xnaImage.Texture, location, sourceRectangle, WHITE, (float)angle, origin, 1.0f, SpriteEffects.None, 1);

        }

        public void DrawString(string fontName, string text, int x, int y)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            var font = renderer.GetFont(fontName);
            if (font == null) return;
            
            currentSpriteBatch.DrawString(font, text, new Vector2(xnaContextSettings.Left + x, xnaContextSettings.Top+y),
                new Microsoft.Xna.Framework.Color(255, 255, 255), 0, new Vector2(0,0), 1.0f, SpriteEffects.None, 1);
        }

        public void Clear()
        {
        }

        public double MeasureString(string text)
        {
            return 0;
        }

        public void DrawRectangle(Color color, int x, int y, int width, int height)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            currentSpriteBatch.Draw(shapeCache.GetShape(color,width,height), new Vector2(xnaContextSettings.Left + x, xnaContextSettings.Top + y), WHITE);
        }

    }

    public class XnaShapeCache
    {
        private readonly GraphicsDevice _graphicDevice;

        public XnaShapeCache(GraphicsDevice graphicDevice)
        {
            _graphicDevice = graphicDevice;
        }

        private Dictionary<string, Texture2D> caches = new Dictionary<string, Texture2D>();

        public Texture2D GetShape(Color color, int width, int height)
        {
            string m = getKey(color,width,height);
            Texture2D texture;
            if (caches.TryGetValue(m, out texture))
            {
                return texture;
            }

            Texture2D rect = new Texture2D(_graphicDevice, width, height);
            var xnaColor = new Microsoft.Xna.Framework.Color(color.R, color.G, color.B, color.A);
            Microsoft.Xna.Framework.Color[] data = new Microsoft.Xna.Framework.Color[width * height];
            for (int i = 0; i < data.Length; ++i) data[i] = xnaColor;
            rect.SetData(data);




            caches.Add(m, rect);
            return rect;
        }

        private string getKey(Color color, int width, int height)
        {

            return string.Format("{0}-{1}-{2}-{3}-{4}-{5}", color.R, color.G, color.B, color.A, width, height);
        } 
    }
}