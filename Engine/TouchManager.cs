using System.Collections.Generic;
using Engine.Interfaces;

namespace Engine
{
    public class TouchManager : ITouchManager
    {
        public List<TouchRect> touchRects { get; set; }
        public TouchManager()
        {
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
}