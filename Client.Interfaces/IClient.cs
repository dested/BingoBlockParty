using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Engine.Interfaces;

namespace Client.Interfaces
{
    public interface IClient
    {
        IGame Game { get; set; }
        void LoadImages(IRenderer renderer);
        void Init(IRenderer renderer);
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);
        void Timeout(Action callback, int ms);

    }
    public enum TouchType
    {
        TouchUp, TouchDown, TouchMove
    }

    public interface IGame
    {
        void Init(IRenderer renderer);
        void LoadImages(IRenderer renderer);
        IClient Client { get; }
        void Draw(TimeSpan elapsedGameTime);

        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);
    }
}
