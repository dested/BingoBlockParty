using System.Threading.Tasks;
using Engine;
using Engine.Interfaces;
using Engine.Xna;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.GamerServices;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Input.Touch;
using Color = Microsoft.Xna.Framework.Color;

namespace Client.WindowsPhone
{
    /// <summary>
    /// This is the main type for your game
    /// </summary>
    public class Game1 : Game
    {
        GraphicsDeviceManager graphics;
        SpriteBatch spriteBatch;

        private IClient client;
        private IRenderer renderer; 
        public Game1()
        {
            graphics = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
            TouchPanel.EnableMouseGestures = true;
            TouchPanel.EnabledGestures = GestureType.Flick;
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


            client.Init(renderer,new XnaClientSettings(){OneLayoutAtATime=true,GetKeyboardInput = () =>
            {
                return "";
            }});
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

        /// <summary>
        /// Allows the game to run logic such as updating the world,
        /// checking for collisions, gathering input, and playing audio.
        /// </summary>
        /// <param name="gameTime">Provides a snapshot of timing values.</param>
        protected override async void Update(GameTime gameTime)
        {
            if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Escape))
                Exit();
            var layoutManager = client.ScreenManager.CurrentScreen;

            while (TouchPanel.IsGestureAvailable)
            {
                var gest = TouchPanel.ReadGesture();
                switch (gest.GestureType)
                {
                    case GestureType.Flick:
                        const int tolerance = 300;
                        if (gest.Delta.X > tolerance)
                        {

                            layoutManager.ChangeLayout(Direction.Left);
                        }
                        if (gest.Delta.X < -tolerance)
                        {
                            layoutManager.ChangeLayout(Direction.Right);
                        }
                        if (gest.Delta.Y > tolerance)
                        {
                            layoutManager.ChangeLayout(Direction.Up);
                        }
                        if (gest.Delta.Y < -tolerance)
                        {
                            layoutManager.ChangeLayout(Direction.Down);

                        }
                        break;
                }
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
                        var text = await Task<string>.Factory.FromAsync(Guide.BeginShowKeyboardInput(PlayerIndex.One, "", "", "", null, null), Guide.EndShowKeyboardInput);

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
            GraphicsDevice.Clear(Color.CornflowerBlue);

            client.Draw(gameTime.TotalGameTime);

            base.Draw(gameTime);
        }
    }
}
