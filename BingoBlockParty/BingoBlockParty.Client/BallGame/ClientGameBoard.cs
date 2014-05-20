using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using BingoBlockParty.Client.BallGame.Planes;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Models;

using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame
{
    public class ClientGameBoard : GameBoard,ILayoutView
    {
        public IRenderer Renderer { get; set; }
        public ILayout GameBoardLayout { get; set; }
        private readonly Game game; 

        public ClientBackgroundPlane BackgroundPlane { get; set; }

        public ClientGameBoard(Game game, int boardWidth, int boardHeight, IRenderer renderer,ILayout gameBoardLayout)
            : base(boardWidth, boardHeight)
        {
            Renderer = renderer;
            GameBoardLayout = gameBoardLayout;
            this.game = game;

        }

        public override void CreateObjects()
        {

            this.BackgroundPlane = new ClientBackgroundPlane(this);

            this.GameModel = new ClientGameModel(boardWidth, boardHeight, GameBoardLayout);
            this.PegsPlane = new ClientPegsPlane(this);
            this.CannonBallPlane = new ClientCannonBallPlane(this);
            this.CannonPlane = new ClientCannonPlane(this);
            this.ChutesPlane = new ClientChutesPlane(this);
            this.PegPhysicsManager = new ClientPegPhysicsManager(this, false);

            this.OverlaysPlane = new ClientOverlaysPlane(this);

            this.ViewManager = new ViewManager(this);

            this.GameModel.Client().TouchManager = new TouchManager();
        }

        public ViewManager ViewManager { get; set; }

        public ClientOverlaysPlane OverlaysPlane { get; set; }
        
        public override void Init()
        {
            CreateObjects();
            base.Init();

            this.BackgroundPlane.Init();
            this.OverlaysPlane.Init();
            this.GameModel.Client().TouchManager.Init();

            Renderer.AddLayer(BackgroundPlane.Plane);
            Renderer.AddLayer(ChutesPlane.Client().BackPlane);
            Renderer.AddLayer(CannonBallPlane.Client().Plane);
            Renderer.AddLayer(CannonPlane.Client().Plane);
            Renderer.AddLayer(ChutesPlane.Client().FrontPlane);
            Renderer.AddLayer(PegsPlane.Client().Plane);
            Renderer.AddLayer(OverlaysPlane.Plane);

            if (PegPhysicsManager.Client().ShouldDraw)
            {
                //            Renderer.AddLayer(PegPhysicsManager.Plane);
            }
        }

        public override void RoundOver()
        {
            base.RoundOver();
                        
                         this.PegPhysicsManager.RoundOver(RoundOverState.Pre);
                         this.BackgroundPlane.RoundOver(RoundOverState.Pre);
                         this.CannonPlane.RoundOver(RoundOverState.Pre);
                         this.ChutesPlane.RoundOver(RoundOverState.Pre);
                         this.PegsPlane.RoundOver(RoundOverState.Pre);
                         this.OverlaysPlane.RoundOver(RoundOverState.Pre);
                         this.CannonBallPlane.RoundOver(RoundOverState.Pre);
            game.Client.Timeout(() =>
                         {
                             this.PegPhysicsManager.RoundOver(RoundOverState.Post);
                             this.BackgroundPlane.RoundOver(RoundOverState.Post);
                             this.CannonPlane.RoundOver(RoundOverState.Post);
                             this.ChutesPlane.RoundOver(RoundOverState.Post);
                             this.PegsPlane.RoundOver(RoundOverState.Post);
                             this.OverlaysPlane.RoundOver(RoundOverState.Post);
                             this.CannonBallPlane.RoundOver(RoundOverState.Post);

                             this.ViewManager.Set(0, 0);
                             if (this.OnRoundOver!=null)
                                this.OnRoundOver();

                         }, 2500);
        }

        public override void Tick(TimeSpan elapsedGameTime)
        {
            base.Tick(elapsedGameTime);
            BackgroundPlane.Tick();
            OverlaysPlane.Tick();
        }


        public ITouchManager TouchManager
        {
            get { return this.GameModel.Client().TouchManager; }
        }

        public void Render(TimeSpan elapsedGameTime)
        {
            PegPhysicsManager.Client().Render();
            BackgroundPlane.Render();
            CannonPlane.Client().Render();
            ChutesPlane.Client().Render();
            PegsPlane.Client().Render();
            OverlaysPlane.Render();
            CannonBallPlane.Client().Render();
        }

        public void Destroy()
        {

        }
        public void InitLayoutView()
        {
            Init();
        }

        public void TickLayoutView(TimeSpan elapsedGameTime)
        {
            Tick(elapsedGameTime);
        }
    }
}