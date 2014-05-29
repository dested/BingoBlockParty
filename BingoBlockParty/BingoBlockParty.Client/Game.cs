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
            InfoAreaLayout = gameScreen.CreateLayout(259, 698);
            PeopleAreaLayout = gameScreen.CreateLayout(762, 202).SetScreenOrientation(ScreenOrientation.Horizontal).Offset(0, -61);

            GameBoardLayout.LeftOf(InfoAreaLayout).RightOf(BingoBoardLayout);

            PeopleAreaLayout.Below(BingoBoardLayout).Below(GameBoardLayout);

            GameBoardLayout.LayoutView = new ClientGameBoard(this, GameBoardLayout.Width, 1280, renderer, GameBoardLayout);
            BingoBoardLayout.LayoutView = new BingoLayout(this, 332, 557, renderer, BingoBoardLayout);
            InfoAreaLayout.LayoutView = new InfoAreaLayout(this, 259, 698, renderer, InfoAreaLayout);
            PeopleAreaLayout.LayoutView = new PeopleAreaLayout(this, 762, 202, renderer, PeopleAreaLayout);




            var lobbyScreen = screenManager.CreateScreen();

            LobbyListLayout = lobbyScreen.CreateLayout(766, 584). MakeActive();
            LobbyListLayout.LayoutView = new LobbyLayout(this, 766, 584, renderer, LobbyListLayout);


            screenManager.ChangeScreen(gameScreen);

        }


        public void InitSocketManager(ISocketManager socketManager)
        {
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


            renderer.CreateImage("icons.lock", "images/icons/lock.png");
            renderer.CreateImage("icons.goldCoin", "images/icons/goldCoin.png");
            renderer.CreateImage("icons.100", "images/icons/100.png");
            renderer.CreateImage("icons.200", "images/icons/200.png");
            renderer.CreateImage("icons.300", "images/icons/300.png");
            renderer.CreateImage("icons.400", "images/icons/400.png");

            renderer.CreateImage("leftBoard.bingoCard", "images/leftBoard/bingoCard.png");
            renderer.CreateImage("leftBoard.chooseYourCards", "images/leftBoard/chooseYourCards.png");
            renderer.CreateImage("leftBoard.darkBoard", "images/leftBoard/darkBoard.png");
            renderer.CreateImage("leftBoard.greyPersonBox", "images/leftBoard/greyPersonBox.png");
            renderer.CreateImage("leftBoard.leftBoard", "images/leftBoard/leftBoard.png");
            renderer.CreateImage("leftBoard.lightBoard", "images/leftBoard/lightBoard.png");
            renderer.CreateImage("leftBoard.numberCallArea", "images/leftBoard/numberCallArea.png");
            renderer.CreateImage("leftBoard.purchaseBingCardOutline", "images/leftBoard/purchaseBingCardOutline.png");
            renderer.CreateImage("leftBoard.purchaseBingCardOutlineSelected", "images/leftBoard/purchaseBingCardOutlineSelected.png");
            renderer.CreateImage("leftBoard.purchaseBingoCard", "images/leftBoard/purchaseBingoCard.png");
            renderer.CreateImage("leftBoard.purchaseCard", "images/leftBoard/purchaseCard.png");
            renderer.CreateImage("leftBoard.purchaseConfirm", "images/leftBoard/purchaseConfirm.png");
            renderer.CreateImage("leftBoard.selectAvatar", "images/leftBoard/selectAvatar.png");
            renderer.CreateImage("leftBoard.smallGreyBox", "images/leftBoard/smallGreyBox.png");
            renderer.CreateImage("leftBoard.smallOrangeButton", "images/leftBoard/smallOrangeButton.png");
            renderer.CreateImage("leftBoard.wideGreyBox", "images/leftBoard/wideGreyBox.png");
            renderer.CreateImage("leftBoard.previousCalledBalls", "images/leftBoard/previousCalledBalls.png");
            renderer.CreateImage("leftBoard.wideOrangeButton", "images/leftBoard/wideOrangeButton.png");


            renderer.CreateImage("leftBoard.numbers.white.1", "images/leftBoard/numbers/white/1.png");
            renderer.CreateImage("leftBoard.numbers.white.2", "images/leftBoard/numbers/white/2.png");
            renderer.CreateImage("leftBoard.numbers.white.3", "images/leftBoard/numbers/white/3.png");
            renderer.CreateImage("leftBoard.numbers.white.4", "images/leftBoard/numbers/white/4.png");
            renderer.CreateImage("leftBoard.numbers.white.5", "images/leftBoard/numbers/white/5.png");
            renderer.CreateImage("leftBoard.numbers.white.6", "images/leftBoard/numbers/white/6.png");
            renderer.CreateImage("leftBoard.numbers.white.7", "images/leftBoard/numbers/white/7.png");
            renderer.CreateImage("leftBoard.numbers.white.8", "images/leftBoard/numbers/white/8.png");
            renderer.CreateImage("leftBoard.numbers.white.9", "images/leftBoard/numbers/white/9.png");
            renderer.CreateImage("leftBoard.numbers.white.10", "images/leftBoard/numbers/white/10.png");
            renderer.CreateImage("leftBoard.numbers.white.11", "images/leftBoard/numbers/white/11.png");
            renderer.CreateImage("leftBoard.numbers.white.12", "images/leftBoard/numbers/white/12.png");
            renderer.CreateImage("leftBoard.numbers.white.13", "images/leftBoard/numbers/white/13.png");
            renderer.CreateImage("leftBoard.numbers.white.14", "images/leftBoard/numbers/white/14.png");
            renderer.CreateImage("leftBoard.numbers.white.15", "images/leftBoard/numbers/white/15.png");
            renderer.CreateImage("leftBoard.numbers.white.16", "images/leftBoard/numbers/white/16.png");
            renderer.CreateImage("leftBoard.numbers.white.17", "images/leftBoard/numbers/white/17.png");
            renderer.CreateImage("leftBoard.numbers.white.18", "images/leftBoard/numbers/white/18.png");
            renderer.CreateImage("leftBoard.numbers.white.19", "images/leftBoard/numbers/white/19.png");
            renderer.CreateImage("leftBoard.numbers.white.20", "images/leftBoard/numbers/white/20.png");
            renderer.CreateImage("leftBoard.numbers.white.21", "images/leftBoard/numbers/white/21.png");
            renderer.CreateImage("leftBoard.numbers.white.22", "images/leftBoard/numbers/white/22.png");
            renderer.CreateImage("leftBoard.numbers.white.23", "images/leftBoard/numbers/white/23.png");
            renderer.CreateImage("leftBoard.numbers.white.24", "images/leftBoard/numbers/white/24.png");
            renderer.CreateImage("leftBoard.numbers.white.25", "images/leftBoard/numbers/white/25.png");
            renderer.CreateImage("leftBoard.numbers.white.26", "images/leftBoard/numbers/white/26.png");
            renderer.CreateImage("leftBoard.numbers.white.27", "images/leftBoard/numbers/white/27.png");
            renderer.CreateImage("leftBoard.numbers.white.28", "images/leftBoard/numbers/white/28.png");
            renderer.CreateImage("leftBoard.numbers.white.29", "images/leftBoard/numbers/white/29.png");
            renderer.CreateImage("leftBoard.numbers.white.30", "images/leftBoard/numbers/white/30.png");



            renderer.CreateImage("leftBoard.numbers.colored.1", "images/leftBoard/numbers/colored/1.png");
            renderer.CreateImage("leftBoard.numbers.colored.2", "images/leftBoard/numbers/colored/2.png");
            renderer.CreateImage("leftBoard.numbers.colored.3", "images/leftBoard/numbers/colored/3.png");
            renderer.CreateImage("leftBoard.numbers.colored.4", "images/leftBoard/numbers/colored/4.png");
            renderer.CreateImage("leftBoard.numbers.colored.5", "images/leftBoard/numbers/colored/5.png");
            renderer.CreateImage("leftBoard.numbers.colored.6", "images/leftBoard/numbers/colored/6.png");
            renderer.CreateImage("leftBoard.numbers.colored.7", "images/leftBoard/numbers/colored/7.png");
            renderer.CreateImage("leftBoard.numbers.colored.8", "images/leftBoard/numbers/colored/8.png");
            renderer.CreateImage("leftBoard.numbers.colored.9", "images/leftBoard/numbers/colored/9.png");
            renderer.CreateImage("leftBoard.numbers.colored.10", "images/leftBoard/numbers/colored/10.png");
            renderer.CreateImage("leftBoard.numbers.colored.11", "images/leftBoard/numbers/colored/11.png");
            renderer.CreateImage("leftBoard.numbers.colored.12", "images/leftBoard/numbers/colored/12.png");
            renderer.CreateImage("leftBoard.numbers.colored.13", "images/leftBoard/numbers/colored/13.png");
            renderer.CreateImage("leftBoard.numbers.colored.14", "images/leftBoard/numbers/colored/14.png");
            renderer.CreateImage("leftBoard.numbers.colored.15", "images/leftBoard/numbers/colored/15.png");
            renderer.CreateImage("leftBoard.numbers.colored.16", "images/leftBoard/numbers/colored/16.png");
            renderer.CreateImage("leftBoard.numbers.colored.17", "images/leftBoard/numbers/colored/17.png");
            renderer.CreateImage("leftBoard.numbers.colored.18", "images/leftBoard/numbers/colored/18.png");
            renderer.CreateImage("leftBoard.numbers.colored.19", "images/leftBoard/numbers/colored/19.png");
            renderer.CreateImage("leftBoard.numbers.colored.20", "images/leftBoard/numbers/colored/20.png");
            renderer.CreateImage("leftBoard.numbers.colored.21", "images/leftBoard/numbers/colored/21.png");
            renderer.CreateImage("leftBoard.numbers.colored.22", "images/leftBoard/numbers/colored/22.png");
            renderer.CreateImage("leftBoard.numbers.colored.23", "images/leftBoard/numbers/colored/23.png");
            renderer.CreateImage("leftBoard.numbers.colored.24", "images/leftBoard/numbers/colored/24.png");
            renderer.CreateImage("leftBoard.numbers.colored.25", "images/leftBoard/numbers/colored/25.png");
            renderer.CreateImage("leftBoard.numbers.colored.26", "images/leftBoard/numbers/colored/26.png");
            renderer.CreateImage("leftBoard.numbers.colored.27", "images/leftBoard/numbers/colored/27.png");
            renderer.CreateImage("leftBoard.numbers.colored.28", "images/leftBoard/numbers/colored/28.png");
            renderer.CreateImage("leftBoard.numbers.colored.29", "images/leftBoard/numbers/colored/29.png");
            renderer.CreateImage("leftBoard.numbers.colored.30", "images/leftBoard/numbers/colored/30.png");


            renderer.CreateImage("board", "images/gameBoards/board1.png");

            renderer.CreateImage("walkway.red", "images/walkway/walkway-red.png");
            renderer.CreateImage("walkway.barrier", "images/walkway/walkwayBarrier.png");

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
            renderer.CreateFont("Arial-18", "Arial-18");
        }

      
    }

}
