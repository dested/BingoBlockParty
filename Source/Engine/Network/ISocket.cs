using System;

namespace Engine
{
    public interface ISocket
    {
        Action<ISocketError> OnError { get; set; }
        Action OnClose { get; set; }
        Action OnConnect { get; set; }
        void Connect();
        void On<T>(string eventName, Action<T> callback);
        void Emit(string eventName, object payload);
    }
}