using System;

namespace Engine.Interfaces
{
    public interface IClient
    {
        IGame Game { get; set; }
        IScreenManager ScreenManager { get; set; }
        ISocketManager SocketManager { get; set; }
        void LoadImages(IRenderer renderer);
        void Init(IRenderer renderer, bool oneLayoutAtATime);
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);
        void Timeout(Action callback, int ms);

    }
}
