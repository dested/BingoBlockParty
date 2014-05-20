using System;
using System.Collections.Generic;
using System.Html;
using System.Html.Media.Graphics;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

using Engine.Interfaces;

namespace Engine.Web
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

            clickManager = (DivElement)Document.CreateElement("div");
            clickManager.ClassName = "clickManager";
            clickManager.Style.Width = "1000px";
            clickManager.Style.Height = "1000px";
            clickManager.OnMousedown = (e) =>
            {
                client.TouchEvent(TouchType.TouchDown, ((dynamic)e).pageX - ((dynamic)e).target.offsetLeft, ((dynamic)e).pageY - ((dynamic)e).target.offsetTop);
            };
            clickManager.OnMousemove= (e) =>
            {
                client.TouchEvent(TouchType.TouchMove, ((dynamic)e).pageX - ((dynamic)e).target.offsetLeft, ((dynamic)e).pageY - ((dynamic)e).target.offsetTop);
            };
            clickManager.OnMouseup = (e) =>
            {
                client.TouchEvent(TouchType.TouchUp, ((dynamic)e).pageX - ((dynamic)e).target.offsetLeft, ((dynamic)e).pageY - ((dynamic)e).target.offsetTop);
            };
            Document.Body.AppendChild(clickManager);
        }

        public ILayer CreateLayer(int width, int height, ILayout layout)
        {
            return new WebLayer(this, width, height,layout);
        }

        public void AddLayer(ILayer layer)
        {
            Document.Body.InsertBefore(((WebLayer)layer).CanvasInformation.Canvas, clickManager);
            layers.Add((WebLayer)layer);
        }

        public IImage GetImage(string imageName)
        {
            return imageCache.GetImage(imageName);
        }

        private int numberOfImages;
        private int numberOfImagesLoaded;
        private DivElement clickManager;

        public void CreateImage(string imageName, string imagePath, Point center = null)
        {
            numberOfImages++;
            imageCache.CreateImage(imageName, imagePath, center, imagesReady);
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

    public class WebLayer : ILayer
    {
        private readonly WebRenderer renderer;
        private readonly int width;
        private readonly int height;
        private readonly ILayout _layout;

        [IntrinsicProperty]
        public CanvasInformation CanvasInformation { get; set; }
        public WebLayer(WebRenderer renderer, int width, int height, ILayout layout)
        {
            this.renderer = renderer;
            this.width = width;
            this.height = height;
            _layout = layout;
            CanvasInformation = CanvasInformation.Create(width, height);
        }



        public void Begin()
        {
            //not needed for web
        }
        public void End()
        {
            //not needed for web
        }


        public void Save()
        {
            CanvasInformation.Context.Save();
        }

        public void Restore()
        {
            CanvasInformation.Context.Restore();

        }

        public void Translate(int x, int y)
        {
            CanvasInformation.Context.Translate(x, y);
        }

        public void DrawImage(IImage image, int x, int y)
        {
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x, y);
        }

        public void DrawImage(IImage image, int x, int y, int width, int height)
        {
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x, y, width, height);

        }

        public void DrawImage(IImage image, int x, int y, double angle, int centerX, int centerY)
        {
            Save();
            CanvasInformation.Context.Translate(centerX,centerY);
            CanvasInformation.Context.Rotate(angle);
            CanvasInformation.Context.DrawImage(((WebImage)image).Image, x - centerX, y - centerY);
            Restore();
        }

        public void DrawString(string text, int x, int y)
        {
            CanvasInformation.Context.FillText(text, x, y);
        }

        public void Clear()
        {
            CanvasInformation.Context.ClearRect(0, 0, width, height);
        }

        public double MeasureString(string text)
        {
            return CanvasInformation.Context.MeasureText(text).Width;

        }

        public void DrawRectangle(Color color, int x, int y, int width, int height)
        {
            CanvasInformation.Context.Save();
            CanvasInformation.Context.FillStyle = string.Format("rgba({0},{1},{2},{3})", color.R, color.G, color.B, color.A/255f);
            CanvasInformation.Context.FillRect(x,y,width,height);
            CanvasInformation.Context.Restore();
        }
    }

    public class WebImageCache
    {
        private readonly JsDictionary<string, WebImage> textures;

        public WebImageCache()
        {
            textures = new JsDictionary<string, WebImage>();
        }
        public WebImage GetImage(string imageName)
        {
            return textures[imageName];
        }
        public void CreateImage(string imageName, string imagePath, Point center, Action ready)
        {
            textures[imageName]=new WebImage(imagePath, center, ready);
        }

    }

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
    public class CanvasInformation
    {
        private static CanvasElement blackPixel;
        [IntrinsicProperty]
        public CanvasRenderingContext2D Context { get; set; }
        [IntrinsicProperty]
        public CanvasElement Canvas { get; set; }
        public static CanvasElement BlackPixel
        {
            get
            {
                if (blackPixel == null)
                {
                    var m = Create(0, 0);

                    m.Context.FillStyle = "black";
                    m.Context.FillRect(0, 0, 1, 1);

                    blackPixel = m.Canvas;
                }
                return blackPixel;
            }
        }

        public CanvasInformation(CanvasRenderingContext2D context, CanvasElement domCanvas)
        {
            Context = context;
            Canvas = domCanvas;
        }

        public static CanvasInformation Create(int w, int h)
        {
            var canvas = (CanvasElement)Document.CreateElement("canvas");
            return Create(canvas, w, h);
        }

        public static CanvasInformation Create(CanvasElement canvas, int w, int h)
        {
            if (w == 0) w = 1;
            if (h == 0) h = 1;
            canvas.Width = (uint)w;
            canvas.Height = (uint)h;

            var ctx = (CanvasRenderingContext2D)canvas.GetContext("2d");
            return new CanvasInformation(ctx, canvas);
        }
    }
}
