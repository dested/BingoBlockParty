using System;
using System.Collections.Generic;
using System.Html;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Engine.Html5.Web;
using Window = Engine.Html5.Web.Window;

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
            int index = 0;
            Document.OnKeypress = (e) =>
            {

                index = index == 0 ? 1 : 0;

                var i = 0;
                foreach (var screen in client.ScreenManager.Screens)
                {
                    if (i == index)
                    {
                        client.ScreenManager.ChangeScreen(screen);
                        break;
                    }
                    i++;
                }
            };
        }

        private void finishedLoadingImages()
        {
            client.Init(renderer, false);
            Window.SetInterval(() => client.Tick(new TimeSpan(0)), 1000 / 60);
            Window.SetInterval(() => client.Draw(new TimeSpan(0)), 1000 / 60);
        }

        static void Main()
        {
            new Program();
        }
    }

}
