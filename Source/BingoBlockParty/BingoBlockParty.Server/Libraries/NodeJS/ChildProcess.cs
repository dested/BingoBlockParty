using System;
using System.Runtime.CompilerServices;

namespace BingoBlockParty.Server.Libraries.NodeJS
{
    [IgnoreNamespace]
    [Imported()]
    public class ChildProcess : NodeModule
    {
        [IntrinsicProperty]
        [ScriptName("exec")]
        public Func<string, Process> Exec { get; set; }
    }
}