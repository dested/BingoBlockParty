using System;
using System.Runtime.CompilerServices;

namespace Engine.Interfaces
{
    public interface ILayoutView
    {
        void InitLayoutView();
        void TickLayoutView(TimeSpan elapsedGameTime);
        ITouchManager TouchManager { get; }
        ILayout Layout { get; set; }
        void Render(TimeSpan elapsedGameTime);
        void Destroy();
    }
}