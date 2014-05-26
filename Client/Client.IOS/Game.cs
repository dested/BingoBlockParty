
using System;
using System.Threading.Tasks;
using Engine;
using Engine.Interfaces;
using Engine.Xna;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Audio;
using Microsoft.Xna.Framework.GamerServices;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Input.Touch;
using Microsoft.Xna.Framework.Storage;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Media;


namespace Client.IOS
{
	/// <summary>
	/// Default Project Template
	/// </summary>
	public class BingoGameClient : Game
	{

        GraphicsDeviceManager graphics;
        private IClient client;
        private IRenderer renderer; 
         

        public BingoGameClient()
        { 

			graphics = new GraphicsDeviceManager(this);
			
			Content.RootDirectory = "Content";
            TouchPanel.EnableMouseGestures = true;
            TouchPanel.EnabledGestures = GestureType.Flick;

            graphics.SupportedOrientations=DisplayOrientation.Portrait;
            graphics.ApplyChanges();

        }

		/// <summary>
		/// Overridden from the base Game.Initialize. Once the GraphicsDevice is setup,
		/// we'll use the viewport to initialize some values.
		/// </summary>
		protected override void Initialize()
		{
			base.Initialize();
		}


		/// <summary>
		/// Load your graphics content.
		/// </summary>
		protected override void LoadContent()
		{

            client = new XnaClient();

            renderer = new XnaRenderer(GraphicsDevice, Content, graphics, client);
            client.LoadImages(renderer);

            client.Init(renderer, true);
								}
         

		/// <summary>
        	/// Allows the game to run logic such as updating the world,
        	/// checking for collisions, gathering input, and playing audio.
        	/// </summary>
        	/// <param name="gameTime">Provides a snapshot of timing values.</param>
		protected override async void Update(GameTime gameTime)
		{
            var layoutManager = client.ScreenManager.CurrentScreen;

            while (TouchPanel.IsGestureAvailable)
            {
                var gest = TouchPanel.ReadGesture();
                switch (gest.GestureType)
                {
                    case GestureType.Flick:
                        const int tolerance = 4000;
                        if (gest.Delta.X > tolerance)
                        {
                            var text = await Task<string>.Factory.FromAsync(Guide.BeginShowKeyboardInput(PlayerIndex.One, "", "", "", null, null), Guide.EndShowKeyboardInput);
                            
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


            for (int index = 0; index < touchCollection.Count; index++)
            {
                var touch = touchCollection[index];

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
            client.Draw(gameTime.TotalGameTime);
			base.Draw(gameTime);
		}
	}
}