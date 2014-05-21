using System;

namespace Engine.Xna.Network
{
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