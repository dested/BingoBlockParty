namespace Engine.Interfaces
{
    public interface IGame
    {
        IClient Client { get; }
        void InitScreens(IRenderer renderer, IScreenManager screenManager);
        void InitSocketManager(ISocketManager socketManager);
        void LoadAssets(IRenderer renderer);

        void BeforeTick();
        void AfterTick();

        void BeforeDraw();
        void AfterDraw(); 


    }
}