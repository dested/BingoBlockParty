using System;

namespace SocketEngine.WebSocket
{
    interface IJsonExecutor
    {
        Type Type { get; }

        void Execute(JsonWebSocket websocket, string token, object param);
    }
}
