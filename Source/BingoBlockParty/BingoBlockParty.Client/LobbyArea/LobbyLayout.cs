using System;
using System.CodeDom;
using System.Collections.Generic;
using BingoBlockParty.Client.Utils;
using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.LobbyArea
{
    public class LobbyLayout : ILayoutView
    {
        private readonly Game _game;
        private readonly int _width;
        private readonly int _height;
        public ILayout Layout { get; set; }
        public IRenderer Renderer { get; set; }
        public HeaderButtonTop SelectedHeaderButton { get; set; }
        public ITouchManager TouchManager { get; private set; }

        private ILayer mainLayer;

        public LobbyLayout(Game game, int width, int height, IRenderer renderer, ILayout lobbyBoardLayout)
        {
            _game = game;
            _width = width;
            _height = height;
            Layout = lobbyBoardLayout;
            Renderer = renderer;
        }

        public void Init()
        {
            mainLayer = Renderer.CreateLayer(_width, _height, Layout);
            Renderer.AddLayer(mainLayer);

            TouchManager = new TouchManager();



            this.LobbyOverlay = Renderer.GetImage("lobby.lobby");
            this.ProfileOverlay = Renderer.GetImage("lobby.profile");
            this.GoldCoinOverlay = Renderer.GetImage("coinBoxOverlay");
            this.SilverCoinOverlay = Renderer.GetImage("silverCoinBoxOverlay");
            this.LobbyBackground = Renderer.GetImage("lobby.wideBackground");

            this.AllRoomsOverlay = Renderer.GetImage("lobby.allRooms");
            this.FeaturedOverlay = Renderer.GetImage("lobby.featuredText");
            this.FavoritesOverlay = Renderer.GetImage("lobby.favoritesText");

            this.EyeOverlay = Renderer.GetImage("lobby.eyeBall");
            this.DollarOverlay = Renderer.GetImage("lobby.dollarSign");
            this.StarOverlay = Renderer.GetImage("lobby.favoritesStar");

            this.SelectedOverlay = Renderer.GetImage("lobby.selectedButton");

            this.CreateRoomTextOverlay = Renderer.GetImage("lobby.createNewRoomText");
            this.OrangeButtonOverlay = Renderer.GetImage("lobby.orangeButton");
            this.PlusOverlay = Renderer.GetImage("lobby.plus");

            this.ScrollBarOverlay = Renderer.GetImage("lobby.scrollBar");
            this.ScrollBarButtonOverlay = Renderer.GetImage("lobby.scrollButton");




            this.LobbyOverlayPosition = new Point(45, 14);
            this.ProfileOverlayPosition = new Point(192, 9);
            this.GoldCoinOverlayPosition = new Point(349, 3);
            this.SilverCoinOverlayPosition = new Point(610, 3);
            this.LobbyBackgroundPosition = new Point(11, 45);


            this.AllRoomsButtonPosition = new Point(30, 55);
            this.FeaturedButtonPosition = new Point(205, 55);
            this.FavoritesButtonPosition = new Point(380, 55);

            this.ButtonIconOffset = new Point(25, 25);
            this.ButtonTextOffset = new Point(100, 25);

            this.CreateRoomPosition = new Point(565, 55);

            this.CreateRoomIconOffset = new Point(25, 25);
            this.CreateRoomTextOffset = new Point(100, 25);

            this.RoomsPosition = new Point(12, 110);

            RoomButtonColor = new Color(230, 230, 230);
            AlternateRoomButtonColor = new Color(191, 191, 191);

            ScrollBarPosition = new Point(LobbyOverlayPosition.X + LobbyBackground.Width - ScrollBarButtonOverlay.Center.X - 50, RoomsPosition.Y);

            RoomButtonSize = new Size(745, 90);

            NumberOfRoomsVisible = 5;
            createTouches();

            Layout.UIManager.CreateTextBox(new Rectangle(CreateRoomPosition, OrangeButtonOverlay.Width, OrangeButtonOverlay.Height),this);

            Rooms=new List<LobbyRoom>()
            {
                new LobbyRoom(){Name = "Room Name 1"}, 
                new LobbyRoom(){Name = "Room Name 2"}, 
                new LobbyRoom(){Name = "Room Name 3"}, 
                new LobbyRoom(){Name = "Room Name 4"}, 
                new LobbyRoom(){Name = "Room Name 5"}, 
                new LobbyRoom(){Name = "Room Name 6"}, 
                new LobbyRoom(){Name = "Room Name 7"}, 
                new LobbyRoom(){Name = "Room Name 8"}, 
                new LobbyRoom(){Name = "Room Name 9"}, 
                new LobbyRoom(){Name = "Room Name 10"}, 
            };
        }



        private void createTouches()
        {
            TouchManager.PushClickRect(
                new TouchRect(new Rectangle(AllRoomsButtonPosition, SelectedOverlay.Width, SelectedOverlay.Height),
                    (eventType, touchBox, x, y, collide) =>
                    {
                        switch (eventType)
                        {
                            case TouchType.TouchUp:
                                if (collide)
                                {
                                    SelectedHeaderButton = HeaderButtonTop.AllRooms;
                                }
                                break;
                        }
                        return false;
                    }));


            TouchManager.PushClickRect(
                new TouchRect(new Rectangle(FeaturedButtonPosition, SelectedOverlay.Width, SelectedOverlay.Height),
                    (eventType, touchBox, x, y, collide) =>
                    {
                        switch (eventType)
                        {
                            case TouchType.TouchUp:
                                if (collide)
                                {
                                    SelectedHeaderButton = HeaderButtonTop.Featured;
                                }
                                break;
                        }
                        return false;
                    }));


            TouchManager.PushClickRect(
                new TouchRect(new Rectangle(FavoritesButtonPosition, SelectedOverlay.Width, SelectedOverlay.Height),
                    (eventType, touchBox, x, y, collide) =>
                    {
                        switch (eventType)
                        {
                            case TouchType.TouchUp:
                                if (collide)
                                {
                                    SelectedHeaderButton = HeaderButtonTop.Favorites;
                                }
                                break;
                        }
                        return false;
                    }));


            TouchManager.PushClickRect(
                new TouchRect(new Rectangle(CreateRoomPosition, OrangeButtonOverlay.Width, OrangeButtonOverlay.Height),
                    (eventType, touchBox, x, y, collide) =>
                    {
                        switch (eventType)
                        {
                            case TouchType.TouchUp:
                                if (collide)
                                {
                                    SelectedHeaderButton = HeaderButtonTop.Featured;
                                }
                                break;
                        }
                        return false;
                    }));
        }



        public int NumberOfRoomsVisible { get; set; }
        public Size RoomButtonSize { get; set; }

        public Point RoomsPosition { get; set; }


        public IImage PlusOverlay { get; set; }
        public IImage OrangeButtonOverlay { get; set; }
        public IImage CreateRoomTextOverlay { get; set; }


        public IImage SelectedOverlay { get; set; }

        public IImage AllRoomsOverlay { get; set; }
        public IImage FeaturedOverlay { get; set; }
        public IImage FavoritesOverlay { get; set; }


        public IImage EyeOverlay { get; set; }
        public IImage DollarOverlay { get; set; }
        public IImage StarOverlay { get; set; }

        public IImage LobbyOverlay { get; set; }
        public IImage ProfileOverlay { get; set; }
        public IImage GoldCoinOverlay { get; set; }
        public IImage SilverCoinOverlay { get; set; }
        public IImage LobbyBackground { get; set; }

        public IImage ScrollBarButtonOverlay { get; set; }
        public IImage ScrollBarOverlay { get; set; }

        public Point GoldCoinOverlayPosition { get; set; }
        public Point SilverCoinOverlayPosition { get; set; }
        public Point ProfileOverlayPosition { get; set; }
        public Point LobbyOverlayPosition { get; set; }
        public Point LobbyBackgroundPosition { get; set; }

        public Point FavoritesButtonPosition { get; set; }
        public Point FeaturedButtonPosition { get; set; }
        public Point AllRoomsButtonPosition { get; set; }
        public Point CreateRoomPosition { get; set; }

        public Point ButtonIconOffset { get; set; }
        public Point ButtonTextOffset { get; set; }

        public Point CreateRoomTextOffset { get; set; }
        public Point CreateRoomIconOffset { get; set; }

        public Color RoomButtonColor { get; set; }
        public Color AlternateRoomButtonColor { get; set; }
        public Point ScrollBarPosition { get; set; }

        public void Tick(TimeSpan elapsedGameTime)
        {
        }
        public void Render(TimeSpan elapsedGameTime)
        {
            mainLayer.Begin();


            mainLayer.Save();
            mainLayer.DrawRectangle(new Color(0, 0, 0), 0, 0, _width, _height);

            mainLayer.DrawImage(LobbyOverlay, LobbyOverlayPosition.X, LobbyOverlayPosition.Y);
            mainLayer.DrawImage(ProfileOverlay, ProfileOverlayPosition.X, ProfileOverlayPosition.Y);
            mainLayer.DrawImage(GoldCoinOverlay, GoldCoinOverlayPosition.X, GoldCoinOverlayPosition.Y);
            mainLayer.DrawImage(SilverCoinOverlay, SilverCoinOverlayPosition.X, SilverCoinOverlayPosition.Y);

            mainLayer.DrawImage(LobbyBackground, LobbyBackgroundPosition.X, LobbyBackgroundPosition.Y);


            headerButtonGroup(mainLayer, HeaderButtonTop.AllRooms, SelectedHeaderButton == HeaderButtonTop.AllRooms);
            headerButtonGroup(mainLayer, HeaderButtonTop.Featured, SelectedHeaderButton == HeaderButtonTop.Featured);
            headerButtonGroup(mainLayer, HeaderButtonTop.Favorites, SelectedHeaderButton == HeaderButtonTop.Favorites);

            createRoomButtonGroup(mainLayer);
            rooms(mainLayer, RoomButtonSize.Width, RoomButtonSize.Height);

            mainLayer.DrawImage(ScrollBarOverlay, ScrollBarPosition.X, ScrollBarPosition.Y);
            mainLayer.DrawImage(ScrollBarButtonOverlay, ScrollBarPosition.X + 4, ScrollBarPosition.Y + (ScrollBarButtonPosition));

            mainLayer.Restore();
            mainLayer.End();
        }

        private List<LobbyRoom> Rooms { get; set; }
        

        public int TopRoomIndex { get; set; }
        private int c = 0;
        public int ScrollBarButtonPosition
        {
            get
            {
                if (c++ % 20 == 0)
                {
                    var i = (Rooms.Count+1 - NumberOfRoomsVisible);
                    if (i > 0)
                    {
                        TopRoomIndex++;
                        TopRoomIndex = TopRoomIndex % i;
                    }
                }

                var height = ScrollBarOverlay.Height - ScrollBarButtonOverlay.Height;


                return (height / (Rooms.Count  - (NumberOfRoomsVisible))) * TopRoomIndex;
            }
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

        private void headerButtonGroup(ILayer layer, HeaderButtonTop buttonType, bool selected)
        {
            Point buttonLoc;
            IImage icon;
            IImage text;

            switch (buttonType)
            {
                case HeaderButtonTop.AllRooms:
                    buttonLoc = AllRoomsButtonPosition;
                    icon = EyeOverlay;
                    text = AllRoomsOverlay;
                    break;
                case HeaderButtonTop.Featured:
                    buttonLoc = FeaturedButtonPosition;
                    icon = DollarOverlay;
                    text = FeaturedOverlay;
                    break;
                case HeaderButtonTop.Favorites:
                    buttonLoc = FavoritesButtonPosition;
                    icon = StarOverlay;
                    text = FavoritesOverlay;
                    break;
                default:
                    throw new ArgumentOutOfRangeException("buttonType");
            }

            layer.Save();
            layer.Translate(buttonLoc.X, buttonLoc.Y);

            if (selected)
            {
                layer.DrawImage(SelectedOverlay, 0, 0);
            }

            layer.DrawImage(icon, ButtonIconOffset.X, ButtonIconOffset.Y, true);

            layer.DrawImage(text, ButtonTextOffset.X, ButtonTextOffset.Y, true);
            layer.Restore();

        }


        private void createRoomButtonGroup(ILayer layer)
        {
            layer.Save();
            layer.Translate(CreateRoomPosition.X, CreateRoomPosition.Y);

            layer.DrawImage(OrangeButtonOverlay, 0, 0);

            layer.DrawImage(PlusOverlay, CreateRoomIconOffset.X, CreateRoomIconOffset.Y, true);

            layer.DrawImage(CreateRoomTextOverlay, CreateRoomTextOffset.X, CreateRoomTextOffset.Y, true);

            layer.Restore();
        }

        private void rooms(ILayer layer, int buttonWidth, int buttonHeight)
        {
            layer.Save();
            layer.Translate(RoomsPosition.X, RoomsPosition.Y);



            for (int i = 0; i < NumberOfRoomsVisible; i++)
            {
                
                layer.Save();
                layer.Translate(0, buttonHeight * i);
                layer.DrawRectangle(i % 2 == 0 ? RoomButtonColor : AlternateRoomButtonColor, 0, 0, buttonWidth, buttonHeight);

                if ((i + TopRoomIndex) < Rooms.Count)
                {
                    var currentRoom = Rooms[i + TopRoomIndex];
                    layer.DrawString("lobby.font", "Hello " + currentRoom.Name, 50, 50);
                }
                layer.Restore();
            }

            layer.Restore();


        }

    }

    internal class LobbyRoom
    {
        public string Name { get; set; }
    }

    public enum HeaderButtonTop
    {
        AllRooms,
        Featured,
        Favorites
    }
}