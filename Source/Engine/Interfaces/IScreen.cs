using System;
using System.Collections.Generic;

namespace Engine.Interfaces
{
    public interface IScreen
    {

        ILayout CreateLayout(int width, int height);
        IEnumerable<ILayout> Layouts { get; }
        bool OneLayoutAtATime { get; set; }
        IScreenManager ScreenManager { get; set; }
        void Init();
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);
        Size GetLayoutSize();
        bool HasLayout(Direction direction);
        void ChangeLayout(Direction direction);
        void ChangeLayout(ILayout layout);

         
        void Destroy();
    }
}