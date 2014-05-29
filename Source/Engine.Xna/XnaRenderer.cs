using System;
using System.Collections.Generic;
using Engine.Interfaces;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;

namespace Engine.Xna
{
    public class XnaRenderer : IRenderer
    {
        public IClient Client { get; set; }
        protected internal readonly GraphicsDevice graphicsDevice;
        public readonly ContentManager content;
         protected internal readonly GraphicsDeviceManager graphics;
        private readonly XnaAssetCache assetCache;
        private List<XnaLayer> layers;


        public XnaRenderer(GraphicsDevice graphicsDevice, ContentManager content, GraphicsDeviceManager graphics, IClient client)
        {
            Client = client;
            this.graphicsDevice = graphicsDevice;
            this.content = content;
            this.graphics = graphics;

            this.assetCache = new XnaAssetCache(content);
            layers = new List<XnaLayer>();

        }



        private Matrix? scaleMatrix;
        public void ClearScaleMatrix()
        {
            scaleMatrix = null;
        }

        public Matrix GetScaleMatrix()
        {
            if (scaleMatrix.HasValue == false)
            {
                var screenSize = Client.ScreenManager.CurrentScreen.GetLayoutSize();

                var gameWorldSize = new Vector2(screenSize.Width, screenSize.Height);
                var vp = graphicsDevice.Viewport;

                float scaleX = vp.Width / gameWorldSize.X;
                float scaleY = vp.Height / gameWorldSize.Y;

                float translateX = (vp.Width - (gameWorldSize.X * scaleX)) / 2f;
                float translateY = (vp.Height - (gameWorldSize.Y * scaleY)) / 2f;

                Matrix camera = Matrix.CreateScale(scaleX, scaleY, 1)
                        * Matrix.CreateTranslation(translateX, translateY, 0);

                scaleMatrix = camera;

            }

            return scaleMatrix.Value;
        }

        public ILayer CreateLayer(int width, int height, ILayout layout)
        {
            return new XnaLayer(this, width, height, layout);
        }

        
        public void AddLayer(ILayer layer)
        {
            layers.Add((XnaLayer)layer);
        }

        public IImage GetImage(string imageName)
        {
            return assetCache.GetImage(imageName);
        }
        public SpriteFont GetFont(string fontName)
        {
            return assetCache.GetFont(fontName);
        }
        public void CreateImage(string imageName, string imagePath, Point center = null)
        {
            assetCache.CreateImage(imageName, imagePath, center);
        }

        public void CreateFont(string fontName, string fontPath)
        {
            assetCache.CreateFont(fontName,fontPath);
        }

        public void BeginRender()
        { 
        }
        public void EndRender()
        {
            
        }

    }
}