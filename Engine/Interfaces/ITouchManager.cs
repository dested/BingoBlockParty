namespace Engine.Interfaces
{
    public interface ITouchManager
    {
        void Init();
        void PushClickRect(TouchRect touchRect);
        void ProcessTouchEvent(TouchType touchType, int x, int y);
    }
}