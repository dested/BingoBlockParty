using System;
using System.Collections.Generic;

namespace Engine.Interfaces
{
    public interface IScreenManager
    {
          IClient Client { get; set; }
        IScreen CurrentScreen { get; set; }
        IScreen CreateScreen( );
        IEnumerable<IScreen> Screens { get; }
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);
        Size GetScreenSize();
        void ChangeScreen(IScreen screen);
        void Timeout(Action callback, int ms);
        void Init();
    }
}