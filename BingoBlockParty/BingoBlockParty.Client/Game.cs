using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BingoBlockParty.Client.BallGame;
using BingoBlockParty.Client.BingoGame;
using BingoBlockParty.Client.InfoArea;
using BingoBlockParty.Client.LobbyArea;
using BingoBlockParty.Client.PeopleArea;
using BingoBlockParty.Client.Utils;
using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client
{
    public class Game : IGame
    {
        public Game(IClient client)
        {
            Client = client;
        }

        public IClient Client { get; private set; }
        public ILayout GameBoardLayout { get; set; }
        public ILayout InfoAreaLayout { get; set; }
        public ILayout BingoBoardLayout { get; set; }
        public ILayout PeopleAreaLayout { get; set; }

        public ILayout LobbyListLayout { get; set; }
        public IScreenManager ScreenManager { get; set; }
        public ISocket Socket { get; set; }

        public void InitScreens(IRenderer renderer, IScreenManager screenManager)
        {
            ScreenManager = screenManager;

            var gameScreen = screenManager.CreateScreen();

            GameBoardLayout = gameScreen.CreateLayout(430, 557).MakeActive().ForceTick();
            BingoBoardLayout = gameScreen.CreateLayout(332, 557);
            InfoAreaLayout = gameScreen.CreateLayout(259, 708);
            PeopleAreaLayout = gameScreen.CreateLayout(762, 212).SetScreenOrientation(ScreenOrientation.Horizontal).Offset(0, -61);

            GameBoardLayout.LeftOf(InfoAreaLayout).RightOf(BingoBoardLayout);

            PeopleAreaLayout.Below(BingoBoardLayout).Below(GameBoardLayout);

            GameBoardLayout.LayoutView = new ClientGameBoard(this, GameBoardLayout.Width, 1280, renderer, GameBoardLayout);
            BingoBoardLayout.LayoutView = new BingoLayout(this, 332, 557, renderer, BingoBoardLayout);
            InfoAreaLayout.LayoutView = new InfoAreaLayout(this, 259, 708, renderer, InfoAreaLayout);
            PeopleAreaLayout.LayoutView = new PeopleAreaLayout(this, 762, 212, renderer, PeopleAreaLayout);




            var lobbyScreen = screenManager.CreateScreen();

            LobbyListLayout = lobbyScreen.CreateLayout(766, 584). MakeActive();
            LobbyListLayout.LayoutView = new LobbyLayout(this, 766, 584, renderer, LobbyListLayout);


            screenManager.ChangeScreen(lobbyScreen);

        }


        public void InitSocketManager(ISocketManager socketManager)
        {
/*
            Socket = socketManager.Create("http://192.168.1.3:3000/");
            Socket.OnConnect = () =>
            {
                Socket.Emit("shoes2", new { Fuck = "Yopu" });
            };
            Socket.On<Boo>("shoes", a =>
            {
            });
            Socket.On<Boo>("shoes3", a =>
            {
            });

            Socket.Connect();
*/
        }

        public class Boo
        {
            public string Foo { get; set; }
        }


        public void BeforeDraw()
        {
        }
        public void AfterDraw()
        {
        } 



        public void BeforeTick()
        {
        }
        public void AfterTick()
        {
        }

        public void LoadAssets(IRenderer renderer)
        {


            renderer.CreateImage("lobby.allRooms", "images/lobby/allRooms.png");
            renderer.CreateImage("lobby.createNewRoomText", "images/lobby/createNewRoomText.png");
            renderer.CreateImage("lobby.dollarSign", "images/lobby/dollarSign.png");
            renderer.CreateImage("lobby.emptyStar", "images/lobby/emptyStar.png");
            renderer.CreateImage("lobby.eyeBall", "images/lobby/eyeBall.png");
            renderer.CreateImage("lobby.favoritesStar", "images/lobby/favoritesStar.png");
            renderer.CreateImage("lobby.favoritesText", "images/lobby/favoritesText.png");
            renderer.CreateImage("lobby.featuredText", "images/lobby/featuredText.png");
            renderer.CreateImage("lobby.floor", "images/lobby/floor.png");
            renderer.CreateImage("lobby.joinText", "images/lobby/joinText.png");
            renderer.CreateImage("lobby.lobby", "images/lobby/lobby.png");
            renderer.CreateImage("lobby.orangeButton", "images/lobby/orangeButton.png");
            renderer.CreateImage("lobby.plus", "images/lobby/plus.png");
            renderer.CreateImage("lobby.profile", "images/lobby/profile.png");
            renderer.CreateImage("lobby.purpleButton", "images/lobby/purpleButton.png");
            renderer.CreateImage("lobby.scrollBar", "images/lobby/scrollBar.png");
            renderer.CreateImage("lobby.scrollButton", "images/lobby/scrollButton.png");
            renderer.CreateImage("lobby.selectedButton", "images/lobby/selectedButton.png");
            renderer.CreateImage("lobby.thinBackground", "images/lobby/thinBackground.png");
            renderer.CreateImage("lobby.wideBackground", "images/lobby/wideBackground.png");




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
            renderer.CreateImage("silverCoinBoxOverlay", "images/overlays/silver_coin_box.png");
            renderer.CreateImage("pullBoxOverlay", "images/overlays/pulls_button.png");

            renderer.CreateImage("female.blonde.front", "images/people/Female1_FrontDesign.png");
            renderer.CreateImage("male.hat.front", "images/people/male2_FrontDesign.png");


        }

        public void LoadFonts(IRenderer renderer)
        {
            renderer.CreateFont("lobby.font", "spriteFont1");
        }

      
    }

}
