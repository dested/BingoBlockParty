namespace Engine.Interfaces
{
    public interface ILayout
    {
        ILayoutView LayoutView { get; set; }
        ILayoutManager LayoutManager { get; set; }
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
    }
}