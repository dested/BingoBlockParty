

using System.Text;
using Android.App;
using Android.Content.PM;
using Android.OS;
using Android.Views;
using Android.Widget;
using Java.IO;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.GamerServices;
using droid = Android;

namespace Client.Android
{
    [Activity(Label = "Bingo Block Party!"
        , MainLauncher = true
        , Icon = "@drawable/icon"
        , Theme = "@style/Theme.Splash"
        , AlwaysRetainTaskState = true
        , LaunchMode = droid.Content.PM.LaunchMode.SingleInstance
        , ScreenOrientation = ScreenOrientation.SensorLandscape
        , ConfigurationChanges = ConfigChanges.Orientation | ConfigChanges.Keyboard | ConfigChanges.KeyboardHidden)]
    public class MainActivity : Microsoft.Xna.Framework.AndroidGameActivity
    {
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            BingoGameClient.Activity = this;
            var g = new BingoGameClient();
//                http://discordgames.com/?p=2029
            SetContentView(g.Window);
            g.Run();
        }
     }
}

