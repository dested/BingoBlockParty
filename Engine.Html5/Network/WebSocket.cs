using System;
using Engine.Html5.Web;

namespace Engine.Html5.Network
{
    public class WebSocket : ISocket
    {
        public SocketIOClient Client { get; set; }
        public Action<ISocketError> OnError { get; set; }
        public Action OnClose { get; set; }
        public Action OnConnect { get; set; }

        public WebSocket(string url)
        {
            Client = SocketIOClient.Connect(url);
        }

        public void Connect()
        {

            Client.On("disconnect", SocketConnectionClosed);
            Client.On<string>("error", SocketError);
            
             
            Client.On("connect", () => OnConnect());
        }

        public void On<T>(string eventName, Action<T> callback)
        {
            Client.On<T>(eventName, (data) => callback(data));
        }

        public void Emit(string eventName, object payload)
        {
            Client.Emit(eventName, payload);
        }

        private void SocketConnectionClosed( )
        {
            OnClose();
        }

        private void SocketError(string message)
        {
            OnError(new SocketError(new Exception(message), message));
        }

    }
    internal class SocketError : ISocketError
    {
        public Exception Exception { get; set; }
        public string Message { get; set; }

        public SocketError(Exception exception, string message)
        {
            Exception = exception;
            Message = message;
        }
    }

}