using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BingoBlockParty.Client.BallGame;
using Client.Interfaces;
using Engine.Interfaces;

namespace BingoBlockParty.Client
{
    public class Game : IGame
    {
        public void Init(IRenderer renderer)
        {

            var boardWidth = 430;
            var boardHeight = 557;
            GameBoard = new ClientGameBoard(boardWidth, boardHeight * 2, renderer, boardWidth, boardHeight);


            loadImages(renderer);


            GameBoard.Init();


        }

        private static void loadImages(IRenderer renderer)
        {
            renderer.CreateImage("board", "images/gameBoards/board1.png");

            renderer.CreateImage("walkway.red", "images/walkway/walkway-red.png");

            renderer.CreateImage("peg.white", "images/pegs/white_peg.png", new Point(13, 9));
            renderer.CreateImage("peg.hit.white", "images/pegs/white_peg_lit_overlay.png");

            renderer.CreateImage("peg.blue", "images/pegs/blue_peg.png", new Point(13, 9));
            renderer.CreateImage("peg.hit.blue", "images/pegs/blue_peg_lit_overlay.png");

            renderer.CreateImage("peg.green", "images/pegs/green_peg.png", new Point(13, 9));
            renderer.CreateImage("peg.hit.green", "images/pegs/green_peg_lit_overlay.png");

            renderer.CreateImage("peg.purple", "images/pegs/purple_peg.png", new Point(13, 9));
            renderer.CreateImage("peg.hit.purple", "images/pegs/purple_peg_lit_overlay.png");

            renderer.CreateImage("peg.red", "images/pegs/red_peg.png", new Point(13, 9));
            renderer.CreateImage("peg.hit.red", "images/pegs/red_peg_lit_overlay.png");

            renderer.CreateImage("peg.yellow", "images/pegs/yellow_peg.png", new Point(16, 8));
            renderer.CreateImage("peg.hit.yellow", "images/pegs/yellow_peg_lit_overlay.png");


            renderer.CreateImage("cannon", "images/cannons/shooter.png");
            renderer.CreateImage("cannonBall", "images/cannonBalls/ball_inner.png");
            renderer.CreateImage("cannonBallShine", "images/cannonBalls/ball_outer.png");

            renderer.CreateImage("chuteBuckets", "images/chutes/buckets.png");
            renderer.CreateImage("chuteBumpers", "images/chutes/bumpers.png");

            renderer.CreateImage("chuteGreenBucket", "images/chutes/green_bucket.png");
            renderer.CreateImage("chutePurpleBucket", "images/chutes/purple_bucket.png");
            renderer.CreateImage("chuteRedBucket", "images/chutes/red_bucket.png");
            renderer.CreateImage("chuteYellowBucket", "images/chutes/yellow_bucket.png");
            renderer.CreateImage("chuteBlueBucket", "images/chutes/blue_bucket.png");

            renderer.CreateImage("chuteGreenBucketLit", "images/chutes/green_bucket_lit.png");
            renderer.CreateImage("chutePurpleBucketLit", "images/chutes/purple_bucket_lit.png");
            renderer.CreateImage("chuteRedBucketLit", "images/chutes/red_bucket_lit.png");
            renderer.CreateImage("chuteYellowBucketLit", "images/chutes/yellow_bucket_lit.png");
            renderer.CreateImage("chuteBlueBucketLit", "images/chutes/blue_bucket_lit.png");

            renderer.CreateImage("jackpotOverlay", "images/overlays/jackpot_shooter_overlay.png");
            renderer.CreateImage("coinBoxOverlay", "images/overlays/coin_box.png");
            renderer.CreateImage("pullBoxOverlay", "images/overlays/pulls_button.png");

            renderer.CreateImage("female.blonde.front", "images/people/Female1_FrontDesign.png");
            renderer.CreateImage("male.hat.front", "images/people/male2_FrontDesign.png");
        }

        public ClientGameBoard GameBoard { get; set; }

        public void Tick()
        {
            GameBoard.Tick();
        }

        public void Draw()
        {
            GameBoard.Render();
        }
    }
}
