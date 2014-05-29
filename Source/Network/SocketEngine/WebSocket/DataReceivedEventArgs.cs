using System;

namespace SocketEngine.WebSocket
{
    public class DataReceivedEventArgs : EventArgs
    {
        public DataReceivedEventArgs(byte[] data)
        {
            Data = data;
        }

        public byte[] Data { get; private set; }
    }
}
