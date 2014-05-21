using System;
using System.Collections.Generic;

namespace Engine.Interfaces
{
    public interface ILayoutManager
    {
        ILayout CreateLayout(int width, int height);
        IEnumerable<ILayout> Layouts { get; }
        bool OneLayoutAtATime { get; set; }
        void Init();
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);
        Size GetLayoutSize();
        void ChangeLayout(Direction direction);
        void ChangeLayout(ILayout layout);
    }
}