using System.Collections.Generic;
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

        public XnaLayer(XnaRenderer renderer, int width, int height, ILayout layout)
        {
            this.renderer = renderer;
            this.width = width;
            this.height = height;
            Layout = layout;


            currentSpriteBatch = new SpriteBatch(renderer.graphicsDevice);

            settingsStack = new List<XnaContextSettings>();

            settingsStack.Add(new XnaContextSettings());

        }


        public void Begin()
        {
            var scaleMatrix = renderer.GetScaleMatrix();

            var settings = CurrentSettings();
            if (Layout.LayoutManager.OneLayoutAtATime)
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

        public void DrawString(string text, int x, int y)
        {
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

            Texture2D rect = new Texture2D(renderer.graphicsDevice, width, height);

            var xnaColor = new Microsoft.Xna.Framework.Color(color.R, color.G, color.B, color.A);


            Microsoft.Xna.Framework.Color[] data = new Microsoft.Xna.Framework.Color[width * height];
            for (int i = 0; i < data.Length; ++i) data[i] = xnaColor;
            rect.SetData(data);

            currentSpriteBatch.Draw(rect, new Vector2(xnaContextSettings.Left + x, xnaContextSettings.Top + y), WHITE);


        }
    }
}