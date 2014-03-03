using System;
using System.Collections.Generic;
using BingoBlockParty.Client.BallGame;
using Client.Interfaces;

namespace BingoBlockParty.Client.Utils
{
    public delegate bool TouchTrigger(TouchType eventType, TouchRect touchBox, int x, int y, bool collide);
    public class TouchManager
    {
        private readonly ClientGameBoard clientGameBoard;
        public List<TouchRect> touchRects { get; set; }
        public TouchManager(ClientGameBoard clientGameBoard)
        {
            this.clientGameBoard = clientGameBoard;
            touchRects = new List<TouchRect>();
        }

        public void Init()
        {
        }

        public void PushClickRect(TouchRect touchRect)
        {
            touchRects.Add(touchRect);
        }

        public void ProcessTouchEvent(TouchType touchType, int x, int y)
        {
            switch (touchType)
            {
                case TouchType.TouchUp:
                    foreach (var clickRect in this.touchRects)
                    {
                        clickRect.EventToTrigger(touchType, clickRect, x - clickRect.X, y - clickRect.Y, clickRect.Collides(x, y));//ignore result for mouseup
                    }
                    break;
                case TouchType.TouchDown:
                case TouchType.TouchMove:
                    foreach (var clickRect in this.touchRects)
                    {
                        if (!clickRect.Collides(x, y)) continue;

                        if (clickRect.EventToTrigger(touchType, clickRect, x - clickRect.X, y - clickRect.Y, true))
                        {
                            break;
                        }
                    }

                    break;
            }
        }
    }


    public class TouchRect
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public TouchTrigger EventToTrigger { get; set; }

        public TouchRect(int x, int y, int width, int height, TouchTrigger eventToTrigger)
        {
            X = x;
            Y = y;
            Width = width;
            Height = height;
            EventToTrigger = eventToTrigger;
        }

        public bool Collides(int x, int y)
        {
            return this.X < x &&
                    this.X + this.Width > x &&
                    this.Y < y &&
                    this.Y + this.Height > y;
        }
    }

}