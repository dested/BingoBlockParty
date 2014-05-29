using System;
using System.Collections.Generic;
using System.Diagnostics;
using Engine.Interfaces;
using Engine.Xna.Network;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;


namespace Engine.Xna
{

    public class XnaClient : IClient
    {
        public IGame Game { get; set; }
        public XnaRenderer Renderer { get; set; }
        public IScreenManager ScreenManager { get; set; }
        public ISocketManager SocketManager { get; set; }
        public IClientSettings ClientSettings { get; set; }

        public DragGestureManager DragDragGestureManager { get; set; }

        public XnaClient()
        {
            Game = new BingoBlockParty.Client.Game(this);
        }

        public void LoadImages(IRenderer renderer)
        {
            Game.LoadAssets(renderer);
            Game.LoadFonts(renderer);
        }

        public void Init(IRenderer renderer, IClientSettings clientSettings)
        {
            Renderer = (XnaRenderer)renderer;
            ClientSettings = clientSettings;
            ScreenManager = new XnaScreenManager(Renderer, this);
            Game.InitScreens(renderer, ScreenManager);
            SocketManager = new XnaSocketManager();
            Game.InitSocketManager(SocketManager);
            DragDragGestureManager = new DragGestureManager();

            overlaySpriteBatch = new SpriteBatch(Renderer.graphicsDevice);
            renderer.CreateImage("overlay.arrow", "images/overlays/arrow.png");


            /*
                        var size = screen.GetLayoutSize();

                        Renderer.graphics.PreferredBackBufferWidth = size.Width;
                        Renderer.graphics.PreferredBackBufferHeight = size.Height;*/


        }


        SpriteBatch overlaySpriteBatch;

        public void Draw(TimeSpan elapsedGameTime)
        {
            Game.BeforeDraw();
            ScreenManager.Draw(elapsedGameTime);


            var layoutManager = ScreenManager.CurrentScreen;

            var dragGesture = DragDragGestureManager.GetGeture();
            if (dragGesture != null)
            {
                if (layoutManager.HasLayout(dragGesture.Direction))
                {
                    var scaleMatrix = Renderer.GetScaleMatrix();
                    overlaySpriteBatch.Begin(SpriteSortMode.Deferred, BlendState.NonPremultiplied, null, null, null, null, scaleMatrix);

                    var location = new Vector2();
                    var quarter = Math.PI * 2 / 4;
                    float distance = (float)dragGesture.Distance / (float)DragGestureManager.TriggerDistance;
                    float angle = 0;
                    var size = ScreenManager.CurrentScreen.GetLayoutSize();
                    switch (dragGesture.Direction)
                    {
                        case Direction.Left:
                            angle = (float)(quarter * 3);
                            location.X = 50;
                            location.Y = size.Height / 2;
                            break;
                        case Direction.Right:
                            angle = (float)(quarter * 1);
                            location.X = size.Width - 50;
                            location.Y = size.Height / 2;
                            break;
                        case Direction.Up:
                            angle = 0;
                            location.X = size.Width / 2;
                            location.Y = 50;
                            break;
                        case Direction.Down:
                            angle = (float)(quarter * 2);
                            location.X = size.Width / 2;
                            location.Y = size.Height - 50;
                            break;
                    }

                    var xnaImage = ((XnaImage)Renderer.GetImage("overlay.arrow"));
                    overlaySpriteBatch.Draw(xnaImage.Texture, location, null, Microsoft.Xna.Framework.Color.White * distance, angle, new Vector2(xnaImage.Center.X, xnaImage.Center.Y), 1, SpriteEffects.None, 1);
                    overlaySpriteBatch.End();
                }
            }

            Game.AfterDraw();
        }

        public void TouchEvent(TouchType touchType, int x, int y)
        {
            var matrix = Renderer.GetScaleMatrix();

            var x_ = (int)(x / matrix.Right.Length());
            var _y = (int)(y / matrix.Down.Length());

            ScreenManager.TouchEvent(touchType, x_, _y);
        }




        public void Timeout(Action callback, int ms)
        {
            ScreenManager.Timeout(callback, ms);
        }


        public void Tick(TimeSpan elapsedGameTime)
        {
            Game.BeforeTick();

            ScreenManager.Tick(elapsedGameTime);
            Game.AfterTick();
        }
    }
    public class XnaClientSettings : IClientSettings
    {
        public bool OneLayoutAtATime { get; set; }
        public Action<Action<string>> GetKeyboardInput { get; set; }
    }




}

