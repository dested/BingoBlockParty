using System;
using System.Collections.Generic;
using BingoBlockParty.Client.BallGame;

namespace BingoBlockParty.Client.Utils
{
    public delegate bool ClickTrigger(ClickType eventType, ClickRect clickBox, int x, int y, bool collide);
    public class ClickManager
    {
        public List<ClickRect> clickRects { get; set; }
        public ClickManager(ClientGameBoard clientGameBoard)
        {
        }

        public void Init()
        {
        }

        public void PushClickRect(ClickRect clickRect)
        {
            clickRects.Add(clickRect);
        }
    }

    public enum ClickType
    {
        MouseUp, MouseDown, MouseMove
    }

    public class ClickRect
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public object Instance { get; set; }
        public ClickTrigger EventToTrigger { get; set; }

        public ClickRect(int x, int y, int width, int height, object instance, ClickTrigger eventToTrigger)
        {
            X = x;
            Y = y;
            Width = width;
            Height = height;
            Instance = instance;
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