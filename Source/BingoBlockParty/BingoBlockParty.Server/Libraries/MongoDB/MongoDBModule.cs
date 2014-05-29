using System;
using System.Runtime.CompilerServices;
using BingoBlockParty.Server.Libraries.NodeJS;

namespace BingoBlockParty.Server.Libraries.MongoDB
{
    [IgnoreNamespace]
    [Imported()]
    public class MongoDB : NodeModule
    {
        [ScriptName("open")]
        public void Open(Action<object, object> action) {}

        [ScriptName("collection")]
        public void Collection(string testInsert, Action<string, MongoCollection> test) {}
    }
}