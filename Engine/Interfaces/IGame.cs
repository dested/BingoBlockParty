namespace Engine.Interfaces
{
    public interface IGame
    {
        void InitScreens(IRenderer renderer, IScreenManager screenManager);
        void LoadAssets(IRenderer renderer);
        IClient Client { get; }


        void BeforeTick();
        void AfterTick();

        void BeforeDraw();
        void AfterDraw();
    }
}