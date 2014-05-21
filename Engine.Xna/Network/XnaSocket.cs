using System;
#if WINDOWS_PHONE
using SocketIOClient;
#else
using SocketEngine.SocketIO;
#endif

namespace Engine.Xna.Network
{
    public class XnaSocket : ISocket
    {
        public Client Client { get; set; }
        public Action<ISocketError> OnError { get; set; }
        public Action OnClose { get; set; }
        public Action OnConnect { get; set; }

        public XnaSocket(string url)
        {
            Client = new Client(url);
            Client.SocketConnectionClosed += SocketConnectionClosed;
            Client.Error += SocketError;
            Client.On("connect", (fn) => OnConnect());

        }

        public void Connect()
        {
            Client.Connect();
        }

        public void On<T>(string eventName, Action<T> callback)
        {
            Client.On(eventName, (data) => callback(data.Json.GetFirstArgAs<T>()));
        }

        public void Emit(string eventName, object payload)
        {
            Client.Emit(eventName, payload);
        }

        private void SocketConnectionClosed(object sender, EventArgs e)
        {
            OnClose();
        }

        private void SocketError(object sender, ErrorEventArgs e)
        {
            OnError(new SocketError(e.Exception, e.Message));
        }

    }
}