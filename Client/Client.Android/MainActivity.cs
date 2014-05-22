

using Android.App;
using Android.Content.PM;
using Android.OS;
using Android.Views;
using Android.Widget;
using droid=Android;

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
            EditText tx = new EditText(this);
            tx.Visibility=ViewStates.Gone;

            SetContentView(g.Window);
            g.Run();
        }
    }
}

