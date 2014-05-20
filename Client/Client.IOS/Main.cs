using MonoTouch.Foundation;
using MonoTouch.UIKit;

namespace Client.IOS
{
    [Register("AppDelegate")]
    class Program : UIApplicationDelegate
    {
        BingoGameClient game;
        public override void FinishedLaunching(UIApplication app)
        {
            // Fun begins..
            game = new BingoGameClient();
            game.Run();
        }

        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        static void Main(string[] args)
        {
            UIApplication.Main(args, null, "AppDelegate");
        }
    }
}