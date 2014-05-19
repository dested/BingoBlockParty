namespace Engine.Interfaces
{
    public interface IGame
    {
        void InitLayouts(IRenderer renderer, ILayoutManager layoutManager);
        void LoadAssets(IRenderer renderer);
        IClient Client { get; }


        void BeforeTick();
        void AfterTick();

        void BeforeDraw();
        void AfterDraw();
    }
}