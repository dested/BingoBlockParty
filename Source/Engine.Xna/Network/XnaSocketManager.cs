namespace Engine.Xna.Network
{
    public class XnaSocketManager : ISocketManager
    {
        public ISocket Create(string url)
        {
            return new XnaSocket(url);
        }
    }
}