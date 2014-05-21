namespace Engine.Interfaces
{
    public interface IScreenView
    {
        ILayoutView LayoutView { get; set; }
        int Width { get; set; }
        int Height { get; set; }
    }
}