using System.Collections.Generic;
using BingoBlockParty.Client.BallGame.Planes;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame
{
    public class ClientGameBoard : GameBoard
    {
        public IRenderer Renderer { get; set; }
        private readonly int canvasWidth;
        private readonly int canvasHeight;

        public ClientBackgroundPlane BackgroundPlane { get; set; }

        public ClientGameBoard(int boardWidth, int boardHeight, IRenderer renderer, int canvasWidth, int canvasHeight)
            : base(boardWidth, boardHeight)
        {
            Renderer = renderer;
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
        }

        public override void CreateObjects()
        {

            this.BackgroundPlane = new ClientBackgroundPlane(this);

            this.GameModel = new ClientGameModel(boardWidth, boardHeight, canvasWidth, canvasHeight);
            this.PegsPlane = new ClientPegsPlane(this);
            this.CannonBallPlane = new ClientCannonBallPlane(this);
            this.CannonPlane = new ClientCannonPlane(this);
            this.ChutesPlane = new ClientChutesPlane(this);
            this.PegPhysicsManager = new ClientPegPhysicsManager(this, false);

            this.OverlaysPlane = new ClientOverlaysPlane(this);

            this.ViewManager = new ViewManager(this);

            this.GameModel.Client().ClickManager = new ClickManager(this);
        }

        public ViewManager ViewManager { get; set; }

        public ClientOverlaysPlane OverlaysPlane { get; set; }
        /*
         

                ClientGameBoard.prototype.render = function () {
                    this.pegPhysicsManager.render();
                    this.backgroundPlane.render();
                    this.cannonPlane.render();
                    this.chutesPlane.render();
                    this.pegsPlane.render();
                    this.overlaysPlane.render();
                    this.cannonBallPlane.render();
                };*/

        public override void Init()
        {
            CreateObjects();
            base.Init();

            this.BackgroundPlane.Init();
            this.OverlaysPlane.Init();
            this.GameModel.Client().ClickManager.Init();

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
            //ballGameBoard.appendChild(this.gameModel.clickManager.element);
        }

        public override void RoundOver()
        {
            base.RoundOver();
/*
                        this.PegPhysicsManager.RoundOver(RoundOverState.Pre);
                        this.CannonPlane.RoundOver(RoundOverState.Pre);
                        this.ChutesPlane.RoundOver(RoundOverState.Pre);
                        this.PegsPlane.RoundOver(RoundOverState.Pre);
                        this.CannonBallPlane.RoundOver(RoundOverState.Pre);

                        this.PegPhysicsManager.RoundOver(RoundOverState.Post);
                        this.CannonPlane.RoundOver(RoundOverState.Post);
                        this.ChutesPlane.RoundOver(RoundOverState.Post);
                        this.PegsPlane.RoundOver(RoundOverState.Post);
                        this.CannonBallPlane.RoundOver(RoundOverState.Post);
                        this.OnRoundOver();

             this.pegPhysicsManager.roundOver(false);
                                this.backgroundPlane.roundOver(false);
                                this.cannonPlane.roundOver(false);
                                this.chutesPlane.roundOver(false);
                                this.pegsPlane.roundOver(false);
                                this.overlaysPlane.roundOver(false);
                                this.cannonBallPlane.roundOver(false);

                                setTimeout((function () {
                                    this.pegPhysicsManager.roundOver(true);
                                    this.backgroundPlane.roundOver(true);
                                    this.cannonPlane.roundOver(true);
                                    this.chutesPlane.roundOver(true);
                                    this.pegsPlane.roundOver(true);
                                    this.overlaysPlane.roundOver(true);
                                    this.cannonBallPlane.roundOver(true);

                                    this.viewManager.set(0, 0);

                                }).bind(this), 2500);
             * 
            */
        }

        public override void Tick()
        {

            base.Tick();
            BackgroundPlane.Tick();
            OverlaysPlane.Tick();
        }
        public void Render()
        {
            PegPhysicsManager.Client().Render();
            BackgroundPlane.Render();
            CannonPlane.Client().Render();
            ChutesPlane.Client().Render();
            PegsPlane.Client().Render();
            OverlaysPlane.Render();
            CannonBallPlane.Client().Render();
        }
        
       
    }
}