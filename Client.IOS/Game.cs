
using System;
using Client.Interfaces;
using Engine.Interfaces;
using Engine.Xna;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Audio;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using Microsoft.Xna.Framework.Input.Touch;
using Microsoft.Xna.Framework.Storage;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Media;

namespace OpenGL1
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
            Resolution.Init(ref graphics);
			
			Content.RootDirectory = "Content";

            Resolution.SetVirtualResolution(1024, 768);
            Resolution.SetResolution(1280, 800, false);
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

            client.Tick();
			// TODO: Add your update logic here			
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