using System;
using System.Collections.Generic;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Planes;

namespace BingoBlockParty.Common.BallGame
{
    public delegate void RoundOverDelegate();

 
    public class GameBoard
    {
        protected readonly int boardWidth;
        protected readonly int boardHeight;
        public GameModel GameModel { get; set; }
        public PegsPlane PegsPlane { get; set; }
        public CannonBallPlane CannonBallPlane { get; set; }
        public CannonPlane CannonPlane { get; set; }
        public ChutesPlane ChutesPlane { get; set; }
        public PegPhysicsManager PegPhysicsManager { get; set; }
        public   RoundOverDelegate OnRoundOver;

        public GameBoard(int boardWidth, int boardHeight)
        {
            this.boardWidth = boardWidth;
            this.boardHeight = boardHeight;
            
        }

        public virtual void CreateObjects()
        {
            this.GameModel = new GameModel(boardWidth, boardHeight);
            this.PegsPlane = new PegsPlane(this);
            this.CannonBallPlane = new CannonBallPlane(this);
            this.CannonPlane = new CannonPlane(this);
            this.ChutesPlane = new ChutesPlane(this);
            this.PegPhysicsManager = new PegPhysicsManager(this);
        }

        public virtual void Init()
        {


            this.PegPhysicsManager.Init();
            this.ChutesPlane.Init();
            this.CannonBallPlane.Init();
            this.CannonPlane.Init();
            this.PegsPlane.Init();

            var type = 0;
            var pegLocs = new List<PegData>();
            for (var i = 0; i < 400; i += 50)
            {
                pegLocs.Add(new PegData(62, 201 + i, PegType.None));
                pegLocs.Add(new PegData(101, 178 + i, PegType.None));
                pegLocs.Add(new PegData(145, 173 + i, PegType.None));
                pegLocs.Add(new PegData(188, 184 + i, (PegType)(type + 1)));
                pegLocs.Add(new PegData(226, 207 + i, PegType.None));
                pegLocs.Add(new PegData(262, 224 + i, PegType.None));
                pegLocs.Add(new PegData(301, 235 + i, (PegType)((type + 3) % 5)));
                pegLocs.Add(new PegData(345, 231 + i, PegType.None));
                pegLocs.Add(new PegData(380, 213 + i, PegType.None));

                type = (type + 1) % 5;
            }
            this.PegsPlane.LoadPegs(pegLocs);
            
        }

        public virtual void FireCannon()
        {
            this.CannonBallPlane.FireCannonBall();
        }

        public virtual void RoundOver()
        {

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

            if (this.OnRoundOver!=null)
            {
                this.OnRoundOver();
            }
        }

        public virtual void Tick(TimeSpan elapsedGameTime)
        {
            this.PegPhysicsManager.Tick();
            this.CannonPlane.Tick();
            this.ChutesPlane.Tick();
            this.PegsPlane.Tick();
            this.CannonBallPlane.Tick();
        }
    }

}