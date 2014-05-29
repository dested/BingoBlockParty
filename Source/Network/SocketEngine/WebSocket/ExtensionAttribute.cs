using System;

namespace SocketEngine.WebSocket
{
    [AttributeUsage(AttributeTargets.Method)]
    internal sealed class ExtensionAttribute : Attribute
    {
        public ExtensionAttribute() { }
    }
}
