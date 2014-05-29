namespace Engine.Html5.Network
{
    public class WebSocketManager : ISocketManager
    {
        public ISocket Create(string url)
        {
            return new WebSocket(url);
        }
    }
}