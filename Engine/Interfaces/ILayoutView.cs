using System;

namespace Engine.Interfaces
{
    public interface ILayoutView
    {
        void Init();
        void Tick(TimeSpan elapsedGameTime);
        ITouchManager TouchManager { get; }

        void Render(TimeSpan elapsedGameTime);
    }
}