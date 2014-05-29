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
//            _rasterizerState = new RasterizerState() { ScissorTestEnable = true };

        }

        private Microsoft.Xna.Framework.Rectangle currentScissorRect;
        private RasterizerState _rasterizerState;

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


//            currentSpriteBatch.GraphicsDevice.ScissorRectangle = new Microsoft.Xna.Framework.Rectangle(settings.Left, settings.Top,width,height);
            currentSpriteBatch.Begin(SpriteSortMode.Deferred, BlendState.NonPremultiplied, null, null, _rasterizerState, null, scaleMatrix);
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

        public void Translate(Point point)
        {
            Translate(point.X, point.Y);
        }

        public void Translate(int x, int y)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            xnaContextSettings.Left += x;
            xnaContextSettings.Top += y;
        }

        public void DrawImage(IImage image, Point point)
        {
            DrawImage(image, point.X, point.Y);
        }

        public void DrawImage(IImage image, int x, int y)
        {
            DrawImage(image, x, y, image.Width,image.Height);
        }

        public void DrawImage(IImage image, Point point, bool center)
        {
            DrawImage(image, point.X, point.Y, center);
        }

        public void DrawImage(IImage image, int x, int y, bool center)
        {
            var _x = x ;
            var _y = y ;

            if (center)
            {
                _x -= image.Center.X;
                _y -= image.Center.Y;
            }

            DrawImage(image, _x, _y,image.Width,image.Height);
        }

        public void DrawImage(IImage image, int x, int y, int width, int height)
        {
            
            XnaContextSettings xnaContextSettings = CurrentSettings();
            var xnaImage = (XnaImage)image;
            currentSpriteBatch.Draw(xnaImage.Texture, new Microsoft.Xna.Framework.Rectangle(xnaContextSettings.Left + x, xnaContextSettings.Top + y, width, height), xnaImage.SourceRectangle, WHITE, 0, Vector2.Zero, DrawingEffectsToSpriteEffects(xnaContextSettings.DrawingEffects), 1);
        }

        public void DrawImage(IImage image, int x, int y, double angle, int centerX, int centerY)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            var xnaImage = (XnaImage)image;


            Vector2 location = new Vector2(xnaContextSettings.Left + x + centerX, xnaContextSettings.Top + y + centerY);
            Vector2 origin = new Vector2(centerX, centerY);

            currentSpriteBatch.Draw(xnaImage.Texture, location, xnaImage.SourceRectangle, WHITE, (float)angle, origin, 1.0f, DrawingEffectsToSpriteEffects(xnaContextSettings.DrawingEffects), 1);

        }

        private static SpriteEffects DrawingEffectsToSpriteEffects(DrawingEffects drawingEffects)
        {
            return (SpriteEffects)drawingEffects;
        }

        public void SetDrawingEffects(DrawingEffects drawingEffects)
        {

            XnaContextSettings xnaContextSettings = CurrentSettings();
            xnaContextSettings.DrawingEffects = drawingEffects;
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
            XnaContextSettings xnaContextSettings = CurrentSettings();
            var font = renderer.GetFont(fontName);
            if (font == null) return;

            currentSpriteBatch.DrawString(font, text, new Vector2(xnaContextSettings.Left + x, xnaContextSettings.Top + y),
                WHITE, 0, new Vector2(0, 0), 1.0f, SpriteEffects.None, 1);
        }

        public void DrawString(string fontName, string text, int x, int y, Color color)
        {
            XnaContextSettings xnaContextSettings = CurrentSettings();
            var font = renderer.GetFont(fontName);
            if (font == null) return;

            currentSpriteBatch.DrawString(font, text, new Vector2(xnaContextSettings.Left + x, xnaContextSettings.Top + y),
                new Microsoft.Xna.Framework.Color(color.R, color.G, color.B, color.A), 0, new Vector2(0, 0), 1.0f, SpriteEffects.None, 1);
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
            currentSpriteBatch.Draw(shapeCache.GetShape(color, width, height), new Vector2(xnaContextSettings.Left + x, xnaContextSettings.Top + y), WHITE);
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
            string m = getKey(color, width, height);
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