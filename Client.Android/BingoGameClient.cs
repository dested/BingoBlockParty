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
        SpriteBatch spriteBatch;
        SpriteFont font;
        private IClient client;
        private IRenderer renderer;

        public BingoGameClient()
        {
            graphics = new GraphicsDeviceManager(this);
                    
            Content.RootDirectory = "Content";

            graphics.IsFullScreen = true;
            graphics.PreferredBackBufferWidth = 800;
            graphics.PreferredBackBufferHeight = 480;
            graphics.SupportedOrientations = DisplayOrientation.LandscapeLeft | DisplayOrientation.LandscapeRight;
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
            // Create a new SpriteBatch, which can be used to draw textures.
            spriteBatch = new SpriteBatch(GraphicsDevice);
            // TODO: use this.Content to load your game content here
            font = Content.Load<SpriteFont>("spriteFont1");
            client = new XnaClient();
            client.Init();
            renderer = new XnaRenderer();

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
            graphics.GraphicsDevice.Clear(Color.CornflowerBlue);

            spriteBatch.Begin();
            spriteBatch.DrawString(font, "Hello from MonoGame!", new Vector2(16, 16), Color.White);
            spriteBatch.End();

            client.Draw(renderer);

            base.Draw(gameTime);
        }
    }
}
