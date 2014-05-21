using System;
using System.Runtime.CompilerServices;

namespace Engine.Html5.Web
{
    [IgnoreNamespace]
    [Imported()]
    public class EventEmitter
    {
        [ScriptName("emit")]
        public void Emit(string channel, object content) { }

        [ScriptName("on")]
        public void On(string channel, Action callback) { }

        [ScriptName("on")]

        public void On<T>(string channel, Action<T> callback) { }

        [ScriptName("on")]

        public void On<T, T2>(string channel, Action<T, T2> callback) { }

        [ScriptName("on")]

        public void On<T, T2, T3>(string channel, Action<T, T2, T3> callback) { }
    }
    [IgnoreNamespace]
    [Imported()]
    [ScriptName("io")]
    public class SocketIOClient : EventEmitter
    {
        [ScriptName("connect")]
        public static SocketIOClient Connect(string server)
        {
            return null;
        }
    }
}