using System.Runtime.CompilerServices;

namespace BingoBlockParty.Server.Libraries.NodeJS
{
    [IgnoreNamespace]
    [Imported()]
    [ScriptName("util")]
    public class Util : NodeModule
    {
        [ScriptName("print")]
        public void Print(string s) {}
    }
}