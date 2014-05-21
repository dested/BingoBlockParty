namespace Engine
{
    public interface ISocketManager
    {
        ISocket Create(string url);
    }
}