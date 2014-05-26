using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Engine;
using Engine.Interfaces;
using Engine.Xna;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Input.Touch;
using Microsoft.Xna.Framework.Storage;
using Microsoft.Xna.Framework.GamerServices;

namespace Client.Windows
{
    /// <summary>
    /// This is the main type for your game
    /// </summary>
    public class Game1 : Game
    {
        SpriteBatch spriteBatch;
        GraphicsDeviceManager graphics;
        private IClient client;
        private IRenderer renderer;

        public Game1()
            : base()
        {
            graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
            IsMouseVisible = true;
            TouchPanel.EnableMouseTouchPoint = true;

            graphics.PreferredBackBufferHeight = 720;
            graphics.PreferredBackBufferWidth = 1080;
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
            client = new XnaClient();

            renderer = new XnaRenderer(GraphicsDevice, Content, graphics, client);
            client.LoadImages(renderer);

            client.Init(renderer, new XnaClientSettings()
            {
                GetKeyboardInput = (callback) =>
                    {
                        callback("");
                    },
                OneLayoutAtATime = false
            });

            // TODO: use this.Content to load your game content here
        }

        /// <summary>
        /// UnloadContent will be called once per game and is the place to unload
        /// all content.
        /// </summary>
        protected override void UnloadContent()
        {
            // TODO: Unload any non ContentManager content here
        }

        private int mouseX;
        private int mouseY;
        private bool mouseIsDown;
        private int currentIndex = 0;
        protected override void Update(GameTime gameTime)
        {

            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Escape))
                Exit();



            if (Keyboard.GetState().IsKeyDown(Keys.Space))
            {
                currentIndex = currentIndex == 0 ? 1 : 0;
                var screen = client.ScreenManager.Screens.ElementAt(currentIndex);
                client.ScreenManager.ChangeScreen(screen);
            }


            var layoutManager = client.ScreenManager.CurrentScreen;



            if (Keyboard.GetState().IsKeyDown(Keys.Left))
            {
                layoutManager.ChangeLayout(Direction.Left);
            }
            if (Keyboard.GetState().IsKeyDown(Keys.Right))
            {
                layoutManager.ChangeLayout(Direction.Right);
            }
            if (Keyboard.GetState().IsKeyDown(Keys.Up))
            {
                layoutManager.ChangeLayout(Direction.Up);
            }
            if (Keyboard.GetState().IsKeyDown(Keys.Down))
            {
                layoutManager.ChangeLayout(Direction.Down);
            }

            MouseState mouseState = Mouse.GetState();
            if (mouseX != mouseState.X || mouseY != mouseState.Y)
            {
                mouseX = mouseState.X;
                mouseY = mouseState.Y;
                client.TouchEvent(TouchType.TouchMove, (int)mouseState.X, (int)mouseState.Y);
            }



            switch (mouseState.LeftButton)
            {
                case ButtonState.Pressed:
                    client.TouchEvent(TouchType.TouchDown, (int)mouseState.X, (int)mouseState.Y);
                    mouseIsDown = true;
                    break;
                case ButtonState.Released:
                    if (mouseIsDown)
                    {
                        client.TouchEvent(TouchType.TouchUp, (int)mouseState.X, (int)mouseState.Y);
                        mouseIsDown = false;
                    }
                    break;
            }

            TouchCollection touchCollection = TouchPanel.GetState();
            foreach (var touch in touchCollection)
            {
                switch (touch.State)
                {
                    case TouchLocationState.Moved:
                        client.TouchEvent(TouchType.TouchMove, (int)touch.Position.X, (int)touch.Position.Y);
                        break;
                    case TouchLocationState.Pressed:
                        client.TouchEvent(TouchType.TouchDown, (int)touch.Position.X, (int)touch.Position.Y);
                        break;
                    case TouchLocationState.Released:
                        client.TouchEvent(TouchType.TouchUp, (int)touch.Position.X, (int)touch.Position.Y);
                        break;
                }
            }

            client.Tick(gameTime.TotalGameTime);

            base.Update(gameTime);
        }

        /// <summary>
        /// This is called when the game should draw itself.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(Microsoft.Xna.Framework.Color.CornflowerBlue);

            client.Draw(gameTime.TotalGameTime);

            base.Draw(gameTime);
        }
    }
}
