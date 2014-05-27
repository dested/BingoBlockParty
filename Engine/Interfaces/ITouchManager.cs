namespace Engine.Interfaces
{
    public interface ITouchManager
    {
        void Init();
        TouchRect PushClickRect(TouchRect touchRect);
        void RemoveClickRect(TouchRect touchRect);
        void ProcessTouchEvent(TouchType touchType, int x, int y);
    }
}