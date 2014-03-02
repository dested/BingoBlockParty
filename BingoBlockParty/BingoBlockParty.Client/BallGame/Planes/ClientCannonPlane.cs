﻿
using BingoBlockParty.Client.BallGame.Pieces;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Pieces;
using BingoBlockParty.Common.BallGame.Planes;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame.Planes
{
    public class ClientCannonPlane : CannonPlane
    {
        public ILayer Plane { get; set; }

        public ClientCannonPlane(GameBoard gameBoard)
            : base(gameBoard)
        {

        }
        public override void Init()
        {
            base.Init();
            Plane = GameBoard.Client().Renderer.CreateLayer(GameBoard.GameModel.Client().CanvasWidth, GameBoard.GameModel.Client().CanvasHeight);
        }

        public override Cannon CreateCannon(CannonPlane cannonPlane)
        {
            return new ClientCannon(GameBoard, cannonPlane);
        }

        public void Render()
        {
            this.Plane.Clear();
            var context = this.Plane;

            context.Save();
            this.GameBoard.Client().ViewManager.TranslateContext(context);

            context.Save();
            this.Cannon.Client().Render(context);
            context.Restore();

            context.Restore();

        }



    }
}