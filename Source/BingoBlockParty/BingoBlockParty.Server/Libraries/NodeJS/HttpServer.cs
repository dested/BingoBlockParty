using System.Runtime.CompilerServices;

namespace BingoBlockParty.Server.Libraries.NodeJS
{
    [IgnoreNamespace]
    [Imported()]
    public class HttpServer
    {
        [ScriptName("listen")]
        public object Listen(int port)
        {
            return null;
        }
    }
}