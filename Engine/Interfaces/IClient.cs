using System;
using System.Collections.Generic;

namespace Engine.Interfaces
{
    public interface IClientSettings
    {
        bool OneLayoutAtATime { get; set; }
        Action<Action<string>> GetKeyboardInput { get; set; }
    }

    public interface IClient
    {
      
        IGame Game { get; set; }
        IScreenManager ScreenManager { get; set; }
        ISocketManager SocketManager { get; set; }
        IClientSettings ClientSettings { get; set; }
        DragGestureManager DragDragGestureManager { get; set; }
        void LoadImages(IRenderer renderer);
        void Init(IRenderer renderer, IClientSettings clientSettings);
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);
        void Timeout(Action callback, int ms);
    }

    public class DragGestureManager
    {
        private List<TouchPoint> points = new List<TouchPoint>();
        public const int TriggerDistance = 300;
        private bool tillUp = false;
        public void TouchUp()
        {
            tillUp = false;
        }

         public void AddDataPoint(TouchType touchType, int x, int y)
        {
            if (!tillUp)
            {
                if (touchType == TouchType.TouchUp)
                {
                    points.Clear();
                    return;
                }
                points.Add(new TouchPoint(touchType, x, y));
            }

        }

        public DragGesture GetGeture()
        {
            if (points.Count < 2)
            {
                return null;
            }

            var touchPoint = points[points.Count - 1];

            var point = new Point(touchPoint.X - points[0].X, touchPoint.Y - points[0].Y);
            if (Math.Abs(point.X) > Math.Abs(point.Y))
            {
                return new DragGesture(Math.Abs(point.X), point.X < 0 ? Direction.Right : Direction.Left);
            }
            else
            {
                return new DragGesture(Math.Abs(point.Y), point.Y < 0 ? Direction.Down : Direction.Up);
            }

        }

        public void ClearDataPoints()
        {
            points.Clear();

        }

        public void ClearDataPointsTillUp()
        {
            tillUp = true;
            ClearDataPoints();

        }
    }
    public class DragGesture
    {
        public DragGesture(int distance, Direction direction)
        {
            Distance = distance;
            Direction = direction;
        }

        public int Distance { get; set; }
        public Direction Direction { get; set; }
    }


    public class TouchPoint
    {
        public TouchPoint(TouchType touchMove, int x, int y)
        {
            this.touchMove = touchMove;
            this.X = x;
            this.Y = y;
        }

        public TouchType touchMove { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
    }

}
