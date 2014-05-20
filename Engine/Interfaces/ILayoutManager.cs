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
    public interface IScreenManager
    {
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

    public interface IScreen
    {
        ILayoutManager LayoutManager { get; set; }
        
        void Init();
        void Draw(TimeSpan elapsedGameTime);
        void TouchEvent(TouchType touchType, int x, int y);
        void Tick(TimeSpan elapsedGameTime);

        void Destroy();
    }

    public interface IScreenView
    {
        ILayoutView LayoutView { get; set; }
        int Width { get; set; }
        int Height { get; set; }
    }

    public enum Direction
    {
        Left,Right,Up,Down
    }
}