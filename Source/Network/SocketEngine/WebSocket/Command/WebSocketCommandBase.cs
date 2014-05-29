using SuperSocket.ClientEngine.Protocol;

namespace SocketEngine.WebSocket.Command
{
    public abstract class WebSocketCommandBase : ICommand<WebSocket, WebSocketCommandInfo>
    {
        public abstract void ExecuteCommand(WebSocket session, WebSocketCommandInfo commandInfo);

        public abstract string Name { get; }
    }
}
