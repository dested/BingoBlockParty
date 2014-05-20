using System.Html;
using System.Html.Media.Graphics;
using System.Runtime.CompilerServices;

namespace Engine.Html5.Web
{
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
            canvas.Width =  w;
            canvas.Height =  h;

            var ctx = (CanvasRenderingContext2D)canvas.GetContext("2d");
            return new CanvasInformation(ctx, canvas);
        }
    }
}