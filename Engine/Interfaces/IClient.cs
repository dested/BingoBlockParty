using System;
using System.Threading.Tasks;

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
        void LoadImages(IRenderer renderer);
        void Init(IRenderer renderer, IClientSettings clientSettings);
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);
        void Timeout(Action callback, int ms);
        
        void ShowKeyboard();
        
    }
}
