using System;

namespace Engine.Interfaces
{
    public interface IScreen
    {
        ILayoutManager LayoutManager { get; set; }
        
        void Init();
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);

        void Destroy();
    }
}