using System;
using System.Collections.Generic;

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

        void LoadFonts(IRenderer renderer);
    }

    public interface IUIManager
    {

        ILayout Layout { get; set; }

        bool ProcessTouchEvent(TouchType touchType, int x, int y);
        IUITextBox CreateTextBox(Rectangle rectangle, ILayoutView layoutView, Action<string> onTextChange = null);
        List<IUITextBox> TextBoxes { get; set; }
        void ClearFocus();
    }

    public interface IUITextBox
    {
        void Focus();
        IUIManager UIManager { get; set; }
        Rectangle Rectangle { get; set; }
        ILayoutView LayoutView { get; set; }
        Action<string> OnTextChange { get; set; }
        bool Focused { get; set; }
        void Blur();
    }
}