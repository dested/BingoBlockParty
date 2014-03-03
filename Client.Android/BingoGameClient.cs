using System.Runtime.Remoting.Channels;
using Android.OS;
using Client.Interfaces;
using Engine.Interfaces;
using Engine.Xna;
using Java.IO;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Input.Touch;

namespace Client.Android
{
    /// <summary>
    /// This is the main type for your game
    /// </summary>
    public class BingoGameClient : Microsoft.Xna.Framework.Game
    {

        GraphicsDeviceManager graphics;
        private IClient client;
        private IRenderer renderer; 

        public BingoGameClient()
        {
            graphics = new GraphicsDeviceManager(this);
            Resolution.Init(ref graphics);
            Content.RootDirectory = "Content";
             graphics.SupportedOrientations = DisplayOrientation.Portrait | DisplayOrientation.PortraitUpsideDown;

             Resolution.SetVirtualResolution(1024, 768);
             Resolution.SetResolution(1280, 800, false);
        }

        /// <summary>
        /// Allows the game to perform any initialization it needs to before starting to run.
        /// This is where it can query for any required services and load any non-graphic
        /// related content.  Calling base.Initialize will enumerate through any components
        /// and initialize them as well.
        /// </summary>
        protected override void Initialize()
        {
            // TODO: Add your initialization logic here




            base.Initialize();
        }

        /// <summary>
        /// LoadContent will be called once per game and is the place to load
        /// all of your content.
        /// </summary>
        protected override void LoadContent()
        {
            /*
                        logoTexture = Content.Load<Texture2D>("images/cannonBalls/ball_inner.png");
                        spriteBatch = new SpriteBatch(graphics.GraphicsDevice);
            */

            client = new XnaClient();
            renderer = new XnaRenderer(GraphicsDevice, Content);
            client.Init(renderer);

        }

        /// <summary>
        /// Allows the game to run logic such as updating the world,
        /// checking for collisions, gathering input, and playing audio.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Update(GameTime gameTime)
        {

            TouchCollection touchCollection = TouchPanel.GetState();

            for (int index = 0; index < touchCollection.Count; index++)
            {
                var touch = touchCollection[index];
            }

            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed)
            {
                Exit();
            }
            client.Tick();

            base.Update(gameTime);
        }

        /// <summary>
        /// This is called when the game should draw itself.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Draw(GameTime gameTime)
        {
            Resolution.BeginDraw();


            graphics.GraphicsDevice.Clear(Color.CornflowerBlue);

            /*
                        spriteBatch.Begin();
                        spriteBatch.Draw(logoTexture, new Vector2(16, 16), Color.White);
                        spriteBatch.End();
            */


            /*         spriteBatch.Begin();
                     spriteBatch.DrawString(font, "Hello from MonoGame!", new Vector2(16, 16), Color.White);
                     spriteBatch.End();
         */
            client.Draw();

            base.Draw(gameTime);
        }
    }
}
