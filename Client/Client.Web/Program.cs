using System;
using System.Collections.Generic;
using System.Html;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Engine.Web;
using Window = Engine.Web.Window;

namespace Client.Web
{
    class Program
    {
        WebRenderer renderer;
        WebClient client;

        public Program()
        {
            client = new WebClient();
            renderer = new WebRenderer(client, finishedLoadingImages);
            client.LoadImages(renderer);
            Console.WriteLine("hi");
        }

        private void finishedLoadingImages()
        {
            client.Init(renderer);
            Window.SetInterval(() => client.Tick(new TimeSpan(0)), 1000 / 60);
            Window.SetInterval(() => client.Draw(new TimeSpan(0)), 1000 / 60);
        }

        static void Main()
        {
            new Program();
        }
    }

}
