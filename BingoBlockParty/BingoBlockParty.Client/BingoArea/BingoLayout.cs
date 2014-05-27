using System;
using System.Collections.Generic;

using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BingoGame
{
    public class BingoLayout : ILayoutView
    {
        private readonly Game _game;
        private readonly int _width;
        private readonly int _height;
        public ILayout Layout { get; set; }
        private readonly IRenderer _renderer;

        private ILayer mainLayer;

        public BingoLayout(Game game, int width, int height, IRenderer renderer, ILayout bingoBoardLayout)
        {
            _game = game;
            _width = width;
            _height = height;
            Layout = bingoBoardLayout;
            _renderer = renderer;
        }

        public void Init()
        {
            mainLayer = _renderer.CreateLayer(_width, _height, Layout);
            _renderer.AddLayer(mainLayer);

            TouchManager = new TouchManager();


            this.NumberCallAreaPosition = new Point(8, 380);
            this.PreviousCalledBallsPosition = new Point(37, 370);

            this.BingoCardPosition1 = new Point(-9, 20);
            this.BingoCardPosition2 = new Point(151, 20);
            this.BingoCardPosition3 = new Point(-9, 190);
            this.BingoCardPosition4 = new Point(151, 190);

            LeftBoard = _renderer.GetImage("leftBoard.leftBoard");
            NumberCallArea = _renderer.GetImage("leftBoard.numberCallArea");
            BingoCard = _renderer.GetImage("leftBoard.bingoCard");
            PreviousCalledBalls = _renderer.GetImage("leftBoard.previousCalledBalls");
            ChooseYourCards = _renderer.GetImage("leftBoard.chooseYourCards");
            PurchaseBingoCardOutline = _renderer.GetImage("leftBoard.purchaseBingCardOutline");
            PurchaseBingoCardOutlineSelected = _renderer.GetImage("leftBoard.purchaseBingCardOutlineSelected");

            this.PurchaseBingoCardPosition1 = new Point(4, 5);
            this.PurchaseBingoCardPosition2 = new Point(146, 5);
            this.PurchaseBingoCardPosition3 = new Point(4, 175);
            this.PurchaseBingoCardPosition4 = new Point(146, 175);


            LightBoard = _renderer.GetImage("leftBoard.lightBoard");
            PurchaseBingoCard = _renderer.GetImage("leftBoard.purchaseBingoCard");

            Icon100 = _renderer.GetImage("icons.100");
            Icon200 = _renderer.GetImage("icons.200");
            Icon300 = _renderer.GetImage("icons.300");
            Icon400 = _renderer.GetImage("icons.400");
            GoldCoin = _renderer.GetImage("icons.goldCoin");



            Purchase1BingoCardPosition = new Point(83, 65);

            Purchase2BingoCardPosition1 = new Point(83 - 4, 65 - 4);
            Purchase2BingoCardPosition2 = new Point(83 + 4, 65 + 4);

            Purchase3BingoCardPosition1 = new Point(83 - 8, 65 - 8);
            Purchase3BingoCardPosition2 = new Point(83 + 0, 65 + 0);
            Purchase3BingoCardPosition3 = new Point(83 + 8, 65 + 8);

            Purchase4BingoCardPosition1 = new Point(83 - 12, 65 - 12);
            Purchase4BingoCardPosition2 = new Point(83 - 4, 65 - 4);
            Purchase4BingoCardPosition3 = new Point(83 + 4, 65 + 4);
            Purchase4BingoCardPosition4 = new Point(83 + 12, 65 + 12);

            PurchaseAmountPosition = new Point(40, 110);
            PurchaseCoinPosition = new Point(116, 121);


            ChooseYourCardsPosition = new Point(10, 142);
            LightBoardPosition = new Point(10, 30);
            SetState(BingoLayoutState.PurchaseCards);
            TouchManager.PushClickRect(new TouchRect(0, 0, _width, _height, purchaseCard));
            setupCards();
        }

        public Point Purchase2BingoCardPosition2 { get; set; }
        public Point Purchase2BingoCardPosition1 { get; set; }

        public Point Purchase3BingoCardPosition1 { get; set; }
        public Point Purchase3BingoCardPosition2 { get; set; }
        public Point Purchase3BingoCardPosition3 { get; set; }

        public Point Purchase4BingoCardPosition1 { get; set; }
        public Point Purchase4BingoCardPosition2 { get; set; }
        public Point Purchase4BingoCardPosition3 { get; set; }
        public Point Purchase4BingoCardPosition4 { get; set; }

        public Point Purchase1BingoCardPosition { get; set; }

        public IImage PurchaseBingoCard { get; set; }

        public Point PurchaseCoinPosition { get; set; }
        public Point PurchaseAmountPosition { get; set; }

        public IImage GoldCoin { get; set; }
        public IImage Icon400 { get; set; }
        public IImage Icon300 { get; set; }
        public IImage Icon200 { get; set; }
        public IImage Icon100 { get; set; }

        public bool PurchaseBingoCardSelected1 { get; set; }
        public bool PurchaseBingoCardSelected2 { get; set; }
        public bool PurchaseBingoCardSelected3 { get; set; }
        public bool PurchaseBingoCardSelected4 { get; set; }

        public Point PurchaseBingoCardPosition4 { get; set; }
        public Point PurchaseBingoCardPosition3 { get; set; }
        public Point PurchaseBingoCardPosition2 { get; set; }
        public Point PurchaseBingoCardPosition1 { get; set; }

        public IImage PurchaseBingoCardOutline { get; set; }

        public IImage PurchaseBingoCardOutlineSelected { get; set; }

        public IImage ChooseYourCards { get; set; }

        public Point ChooseYourCardsPosition { get; set; }

        public IImage LightBoard { get; set; }
        public Point LightBoardPosition { get; set; }


        public Point PreviousCalledBallsPosition { get; set; }

        public IImage PreviousCalledBalls { get; set; }

        public BingoCard BingoCard1 { get; set; }
        public BingoCard BingoCard2 { get; set; }
        public BingoCard BingoCard3 { get; set; }
        public BingoCard BingoCard4 { get; set; }

        public Point BingoCardPosition1 { get; set; }
        public Point BingoCardPosition2 { get; set; }
        public Point BingoCardPosition3 { get; set; }
        public Point BingoCardPosition4 { get; set; }

        public Point NumberCallAreaPosition { get; set; }

        public IImage BingoCard { get; set; }
        public IImage NumberCallArea { get; set; }
        public IImage LeftBoard { get; set; }

        public List<int> PreviousNumbersCalled { get; set; }
        public void Tick(TimeSpan elapsedGameTime)
        {
        }

        public ITouchManager TouchManager { get; private set; }
        public void Render(TimeSpan elapsedGameTime)
        {
            mainLayer.Save();

            renderBackground();
            switch (CurrentBingoState)
            {
                case BingoLayoutState.PurchaseCards:
                    renderPurchaseCards();
                    break;
                case BingoLayoutState.InGame:
                    renderInGame();
                    break;
                case BingoLayoutState.Lobby:
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
            mainLayer.Restore();
        }

        public BingoLayoutState CurrentBingoState { get; set; }
        private readonly List<TouchRect> touchRectangles = new List<TouchRect>();

        public void SetState(BingoLayoutState state)
        {
            foreach (var touchRectangle in touchRectangles)
            {
                TouchManager.RemoveClickRect(touchRectangle);
            }
            touchRectangles.Clear();
            CurrentBingoState = state;
            switch (state)
            {
                case BingoLayoutState.PurchaseCards:
                    touchRectangles.Add(TouchManager.PushClickRect(new TouchRect(LightBoardPosition.X + PurchaseBingoCardPosition1.X, LightBoardPosition.Y + PurchaseBingoCardPosition1.Y, PurchaseBingoCardOutline.Width, PurchaseBingoCardOutline.Height, purchaseCard, 1)));
                    touchRectangles.Add(TouchManager.PushClickRect(new TouchRect(LightBoardPosition.X + PurchaseBingoCardPosition2.X, LightBoardPosition.Y + PurchaseBingoCardPosition2.Y, PurchaseBingoCardOutline.Width, PurchaseBingoCardOutline.Height, purchaseCard, 2)));
                    touchRectangles.Add(TouchManager.PushClickRect(new TouchRect(LightBoardPosition.X + PurchaseBingoCardPosition3.X, LightBoardPosition.Y + PurchaseBingoCardPosition3.Y, PurchaseBingoCardOutline.Width, PurchaseBingoCardOutline.Height, purchaseCard, 3)));
                    touchRectangles.Add(TouchManager.PushClickRect(new TouchRect(LightBoardPosition.X + PurchaseBingoCardPosition4.X, LightBoardPosition.Y + PurchaseBingoCardPosition4.Y, PurchaseBingoCardOutline.Width, PurchaseBingoCardOutline.Height, purchaseCard, 4)));
                    break;
                case BingoLayoutState.InGame:
                    break;
                case BingoLayoutState.Lobby:
                    break;
            }
        }

        private bool purchaseCard(TouchType eventtype, TouchRect touchbox, int x, int y, bool collide)
        {
            PurchaseBingoCardSelected1 = false;
            PurchaseBingoCardSelected2 = false;
            PurchaseBingoCardSelected3 = false;
            PurchaseBingoCardSelected4 = false;
            switch (eventtype)
            {
                case TouchType.TouchUp:
                    if (collide)
                    {
                        switch (CurrentBingoState)
                        {
                            case BingoLayoutState.PurchaseCards:
                                SetState(BingoLayoutState.Lobby);
                                break;
                            case BingoLayoutState.InGame:
                                SetState(BingoLayoutState.PurchaseCards);
                                break;
                            case BingoLayoutState.Lobby:
                                SetState(BingoLayoutState.InGame);
                                break;
                            default:
                                throw new ArgumentOutOfRangeException();
                        }
                    }
                    break;
                case TouchType.TouchDown:
                    break;
                case TouchType.TouchMove:
                    if (touchbox.State != null)
                    {
                        var number = (int) touchbox.State;
                        switch (number)
                        {
                            case 1:
                                PurchaseBingoCardSelected1 = true;
                                break;
                            case 2:
                                PurchaseBingoCardSelected2 = true;
                                break;
                            case 3:
                                PurchaseBingoCardSelected3 = true;
                                break;
                            case 4:
                                PurchaseBingoCardSelected4 = true;
                                break;
                        }
                        return true;
                    }
                    break;
                default:
                    throw new ArgumentOutOfRangeException("eventtype");
            }
            return false;
        }

        private void renderPurchaseCards()
        {
            mainLayer.Save();
            mainLayer.Translate(LightBoardPosition.X, LightBoardPosition.Y);
            mainLayer.DrawImage(LightBoard, 0, 0);
            mainLayer.DrawImage(ChooseYourCards, ChooseYourCardsPosition.X, ChooseYourCardsPosition.Y);


            drawPurchaseBingoCard(100, 1, PurchaseBingoCardPosition1);
            drawPurchaseBingoCard(200, 2, PurchaseBingoCardPosition2);
            drawPurchaseBingoCard(300, 3, PurchaseBingoCardPosition3);
            drawPurchaseBingoCard(400, 4, PurchaseBingoCardPosition4);


            mainLayer.Restore();
            mainLayer.DrawImage(PreviousCalledBalls, PreviousCalledBallsPosition.X, PreviousCalledBallsPosition.Y);
        }

        private void drawPurchaseBingoCard(int amount, int numOfCards, Point cardPosition)
        {
            mainLayer.Save();
            mainLayer.Translate(cardPosition.X, cardPosition.Y);
            
            IImage purchaseOutline = PurchaseBingoCardOutline;

            switch (numOfCards)
            {
                case 1:
                    if(PurchaseBingoCardSelected1)
                    purchaseOutline = PurchaseBingoCardOutlineSelected;
                    break;
                case 2:
                    if (PurchaseBingoCardSelected2)
                        purchaseOutline = PurchaseBingoCardOutlineSelected;
                    break;
                case 3:
                    if (PurchaseBingoCardSelected3)
                        purchaseOutline = PurchaseBingoCardOutlineSelected;
                    break;
                case 4:
                    if (PurchaseBingoCardSelected4)
                        purchaseOutline = PurchaseBingoCardOutlineSelected;
                    break;
            }
            mainLayer.DrawImage(purchaseOutline, 0, 0);
            mainLayer.Save();
            switch (numOfCards)
            {
                case 1:
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase1BingoCardPosition.X, Purchase1BingoCardPosition.Y, true);
                    break;
                case 2:
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase2BingoCardPosition1.X, Purchase2BingoCardPosition1.Y, true);
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase2BingoCardPosition2.X, Purchase2BingoCardPosition2.Y, true);
                    break;
                case 3:
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase3BingoCardPosition1.X, Purchase3BingoCardPosition1.Y, true);
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase3BingoCardPosition2.X, Purchase3BingoCardPosition2.Y, true);
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase3BingoCardPosition3.X, Purchase3BingoCardPosition3.Y, true);
                    break;
                case 4:
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase4BingoCardPosition1.X, Purchase4BingoCardPosition1.Y, true);
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase4BingoCardPosition2.X, Purchase4BingoCardPosition2.Y, true);
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase4BingoCardPosition3.X, Purchase4BingoCardPosition3.Y, true);
                    mainLayer.DrawImage(PurchaseBingoCard, Purchase4BingoCardPosition4.X, Purchase4BingoCardPosition4.Y, true);
                    break;
            }
            mainLayer.Restore();

            IImage amountImage;
            switch (amount)
            {
                case 100:
                    amountImage = Icon100;
                    break;
                case 200:
                    amountImage = Icon200;
                    break;
                case 300:
                    amountImage = Icon300;
                    break;
                case 400:
                    amountImage = Icon400;
                    break;
                default: throw new Exception("Bad Amount");
            }
            mainLayer.DrawImage(amountImage, PurchaseAmountPosition.X, PurchaseAmountPosition.Y);
            mainLayer.DrawImage(GoldCoin, PurchaseCoinPosition.X, PurchaseCoinPosition.Y, true);
            mainLayer.Restore();

        }

        private void renderBackground()
        {
            mainLayer.DrawImage(LeftBoard, 0, 0);
            mainLayer.DrawImage(NumberCallArea, NumberCallAreaPosition.X, NumberCallAreaPosition.Y);
        }
        private void renderInGame()
        {
            drawBingoCard(BingoCard1, BingoCardPosition1);
            drawBingoCard(BingoCard2, BingoCardPosition2);
            drawBingoCard(BingoCard3, BingoCardPosition3);
            drawBingoCard(BingoCard4, BingoCardPosition4);

            drawPreviousNumbersCalled();

        }

        private void drawPreviousNumbersCalled()
        {
            mainLayer.DrawImage(PreviousCalledBalls, PreviousCalledBallsPosition.X, PreviousCalledBallsPosition.Y);

            mainLayer.Save();

            mainLayer.Translate(NumberCallAreaPosition.X + 30, NumberCallAreaPosition.Y + 22);
            var paddingW = 45;
            var paddingH = 29;
            for (int index = 0; index < PreviousNumbersCalled.Count; index++)
            {
                var number = PreviousNumbersCalled[index];
                mainLayer.DrawImage(_renderer.GetImage("leftBoard.numbers.colored." + number), (index % 6) * paddingW, (index / 6) * paddingH);
            }
            mainLayer.Restore();

        }

        private void drawBingoCard(BingoCard card, Point cardPosition)
        {
            mainLayer.Save();
            mainLayer.Translate(cardPosition.X, cardPosition.Y);

            mainLayer.DrawImage(BingoCard, 0, 0);

            mainLayer.Save();
            mainLayer.Translate(31, 28);
            for (int x = 0; x < BingoGame.BingoCard.NumbersWide; x++)
            {
                for (int y = 0; y < BingoGame.BingoCard.NumbersHigh; y++)
                {
                    var bingoCardNumber = card.GetNumberAt(x, y);

                    var color = BingoCardNumber.ColorToColor(bingoCardNumber.Color);

                    mainLayer.DrawRectangle(color, x * 33, y * 34, 30, 30);
                    mainLayer.DrawImage(_renderer.GetImage("leftBoard.numbers.white." + bingoCardNumber.Number), x * 33 + 1, y * 34 + 8);
                }
            }
            mainLayer.Restore();
            mainLayer.Restore();
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
        private void setupCards()
        {
            BingoCard1 = new BingoCard(RandomNumbers(12, 1, 30));
            foreach (var bingoCardNumber in BingoCard1.Numbers)
            {
                bingoCardNumber.Called = r.Next(1, 100) < 20;
            }
            BingoCard2 = new BingoCard(RandomNumbers(12, 1, 30));
            foreach (var bingoCardNumber in BingoCard2.Numbers)
            {
                bingoCardNumber.Called = r.Next(1, 100) < 20;
            }
            BingoCard3 = new BingoCard(RandomNumbers(12, 1, 30));
            foreach (var bingoCardNumber in BingoCard3.Numbers)
            {
                bingoCardNumber.Called = r.Next(1, 100) < 20;
            }
            BingoCard4 = new BingoCard(RandomNumbers(12, 1, 30));
            foreach (var bingoCardNumber in BingoCard4.Numbers)
            {
                bingoCardNumber.Called = r.Next(1, 100) < 20;
            }
            PreviousNumbersCalled = new List<int>(RandomNumbers(28, 1, 30));
        }

        Random r = new Random();

        private int[] RandomNumbers(int count, int low, int high)
        {
            List<int> nums = new List<int>();
            for (int i = 0; i < count; i++)
            {
                var next = r.Next(low, high);
                if (nums.Contains(next))
                {
                    i--;
                    continue;
                }
                nums.Add(next);
            }
            return nums.ToArray();
        }
    }

    public class BingoCard
    {
        public BingoCard(int[] numbers)
        {
            Numbers = new BingoCardNumber[numbers.Length];
            for (int index = 0; index < numbers.Length; index++)
            {
                var number = numbers[index];
                Numbers[index] = new BingoCardNumber(number);
            }
        }

        public BingoCardNumber[] Numbers { get; set; }
        public const int NumbersWide = 4;
        public const int NumbersHigh = 3;

        public BingoCardNumber GetNumberAt(int x, int y)
        {
            return Numbers[y * NumbersWide + x];
        }
    }

    public enum BingoCardNumberColor
    {
        Red, Green, Blue, Yellow, Purple, Black
    }
    public class BingoCardNumber
    {
        public int Number { get; set; }

        public BingoCardNumberColor Color
        {
            get
            {
                if (Called) return BingoCardNumberColor.Black;

                return NumberToColor(Number);
            }
        }

        public static Color ColorToColor(BingoCardNumberColor color)
        {

            switch (color)
            {
                case BingoCardNumberColor.Red:
                    return Red;
                case BingoCardNumberColor.Green:
                    return Green;
                case BingoCardNumberColor.Blue:
                    return Blue;
                case BingoCardNumberColor.Yellow:
                    return Yellow;
                case BingoCardNumberColor.Purple:
                    return Purple;
                case BingoCardNumberColor.Black:
                    return Black;
                default:
                    throw new ArgumentOutOfRangeException("color");
            }
        }
        public static BingoCardNumberColor NumberToColor(int number)
        {

            if (number >= 1 && number < 7)
                return BingoCardNumberColor.Blue;
            if (number >= 7 && number < 13)
                return BingoCardNumberColor.Green;
            if (number >= 13 && number < 19)
                return BingoCardNumberColor.Yellow;
            if (number >= 19 && number < 25)
                return BingoCardNumberColor.Red;
            if (number >= 25 && number < 31)
                return BingoCardNumberColor.Purple;

            throw new Exception("Bad Number");
        }

        public bool Called { get; set; }

        public static Color Red = new Color(249, 27, 27);
        public static Color Green = new Color(89, 253, 31);
        public static Color Blue = new Color(39, 107, 247);
        public static Color Yellow = new Color(241, 248, 62);
        public static Color Purple = new Color(237, 20, 245);
        public static Color Black = new Color(0, 0, 0);

        public BingoCardNumber(int number)
        {
            Number = number;
            Called = false;

        }
    }

    public enum BingoLayoutState
    {
        PurchaseCards,
        InGame,
        Lobby
    }
}