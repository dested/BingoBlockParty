
using System;

using Engine;
using Engine.Interfaces;

namespace BingoBlockParty.Client.PeopleArea
{
    public class PeopleAreaLayout : ILayoutView
    {
        private readonly Game _game;
        private readonly int _width;
        private readonly int _height;
        private readonly IRenderer _renderer;
        public ILayout Layout { get; set; }

        private ILayer mainLayer;

        public PeopleAreaLayout(Game game, int width, int height, IRenderer renderer, ILayout peopleAreaLayout)
        {
            _game = game;
            _width = width;
            _height = height;
            _renderer = renderer;
            Layout = peopleAreaLayout;
        }

        public void Init()
        {
            mainLayer = _renderer.CreateLayer(_width, _height, Layout);
            _renderer.AddLayer(mainLayer);



            RedWalkway = _renderer.GetImage("walkway.red");
            Barrier = _renderer.GetImage("walkway.barrier");


            BarrierPosition = new Point(-5, 0);
            WalkwayPosition = new Point(-5, Barrier.Height - 2);


            TouchManager = new TouchManager();
        }
        public Point BarrierPosition { get; set; }

        public Point WalkwayPosition { get; set; }

        public IImage Barrier { get; set; }

        public IImage RedWalkway { get; set; }

        public void Tick(TimeSpan elapsedGameTime)
        {
        }

        private int ticking;
        public ITouchManager TouchManager { get; private set; }
        public void Render(TimeSpan elapsedGameTime)
        {
            mainLayer.Begin();

            mainLayer.Clear();
            mainLayer.Save();
            mainLayer.Translate(0, 61);
            mainLayer.DrawImage(Barrier, BarrierPosition);
            mainLayer.DrawImage(RedWalkway, WalkwayPosition);




            this.ticking += 2;

            mainLayer.Save();

            var person = _renderer.GetImage("female.blonde.front");

            mainLayer.Translate((-this.ticking + (_width * 100)) % _width, 50);
             

            double rotate;
            rotate = this.ticking%30 < 15 ? .07 : -.07;
            mainLayer.DrawImage(person, -person.Width / 2, -person.Height / 2, rotate, person.Center);

            mainLayer.Restore();


            mainLayer.Save();

            person = _renderer.GetImage("male.hat.front");
            mainLayer.Translate((this.ticking + (_width * 100)) % _width, 100);

            rotate = this.ticking % 30 < 15 ? .07 : -.07;



            mainLayer.SetDrawingEffects(DrawingEffects.FlipHorizontally);
            mainLayer.DrawImage(person, -person.Width / 2, -person.Height / 2, rotate, person.Center);
            mainLayer.Restore();




            mainLayer.Restore();
            mainLayer.End();
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