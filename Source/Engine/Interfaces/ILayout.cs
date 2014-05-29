namespace Engine.Interfaces
{
    public interface ILayout
    {
        IUIManager UIManager { get; set; }
        ILayoutView LayoutView { get; set; }
        IScreen Screen { get; set; }
LayoutPosition LayoutPosition { get; set; }
        int Width { get; set; }
        int Height { get; set; }
        bool Active { get; set; }
        bool AlwaysTick { get; set; }
        ScreenOrientation ScreenOrientation { get; set; }
        ILayout Offset(int x, int y);
        ILayout LeftOf(ILayout layout);
        ILayout RightOf(ILayout layout);
        ILayout Above(ILayout layout);
        ILayout Below(ILayout layout);
        ILayout MakeActive();
        ILayout ForceTick();
        ILayout SetScreenOrientation(ScreenOrientation orientation);
        void ProcessTouchEvent(TouchType touchType, int x, int y);
    }
}