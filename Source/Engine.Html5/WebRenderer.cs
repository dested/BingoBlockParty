using System;
using System.Collections.Generic;
using System.Html;
using Engine.Interfaces;

namespace Engine.Html5.Web
{
    public class WebRenderer : IRenderer
    {
        private readonly WebClient _client;
        private readonly Action _loaded;
        private readonly WebImageCache imageCache;

        private List<WebLayer> layers;

        public WebRenderer(WebClient client, Action loaded)
        {
            _client = client;
            _loaded = loaded;

            layers = new List<WebLayer>();
            imageCache = new WebImageCache();

            ClickManager = (DivElement)Document.CreateElement("div");
            ClickManager.ClassName = "clickManager";
            ClickManager.Style.Width = "1000px";
            ClickManager.Style.Height = "1000px";
            ClickManager.OnMousedown = (e) =>
            {
                client.TouchEvent(TouchType.TouchDown, ((dynamic)e).pageX - ((dynamic)e).target.offsetLeft, ((dynamic)e).pageY - ((dynamic)e).target.offsetTop);
            };
            ClickManager.OnMousemove= (e) =>
            {
                client.TouchEvent(TouchType.TouchMove, ((dynamic)e).pageX - ((dynamic)e).target.offsetLeft, ((dynamic)e).pageY - ((dynamic)e).target.offsetTop);
            };
            ClickManager.OnMouseup = (e) =>
            {
                client.TouchEvent(TouchType.TouchUp, ((dynamic)e).pageX - ((dynamic)e).target.offsetLeft, ((dynamic)e).pageY - ((dynamic)e).target.offsetTop);
            };
            Document.Body.AppendChild(ClickManager);
        }

        public ILayer CreateLayer(int width, int height, ILayout layout)
        {
            return new WebLayer(this, width, height,layout);
        }

        public void AddLayer(ILayer layer)
        {
            var webLayout = (WebLayout)layer.Layout;
            webLayout.Element.AppendChild(((WebLayer) layer).CanvasInformation.Canvas);
            layers.Add((WebLayer)layer);
        }

        public IImage GetImage(string imageName)
        {
            return imageCache.GetImage(imageName);
        }

        private int numberOfImages;
        private int numberOfImagesLoaded;
        public DivElement ClickManager { get; set; }

        public void CreateImage(string imageName, string imagePath, Point center = null)
        {
            numberOfImages++;
            imageCache.CreateImage(imageName, imagePath, center, imagesReady);
        }

        public void CreateFont(string fontName, string fontPath)
        {
             
        }

        private void imagesReady()
        {
            numberOfImagesLoaded++;

            if (numberOfImagesLoaded == numberOfImages)
            {
                _loaded();
            }
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
}
