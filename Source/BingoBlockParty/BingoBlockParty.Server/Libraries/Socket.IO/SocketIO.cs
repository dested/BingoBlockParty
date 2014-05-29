using System.Runtime.CompilerServices;
using BingoBlockParty.Server.Libraries.NodeJS;

namespace BingoBlockParty.Server.Libraries.Socket.IO
{
    [IgnoreNamespace]
    [Imported()]
    [ModuleName("socket.io")]
    [GlobalMethods]
    public static class SocketIO
    {
        public static SocketIOClient Listen(HttpServer app)
        {
            return null;
        }
    }
}