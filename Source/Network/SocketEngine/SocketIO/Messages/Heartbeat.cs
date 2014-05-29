using SocketEngine.SocketIO.Helpers;

namespace SocketEngine.SocketIO.Messages
{
    public class Heartbeat : Message
    {
        public static string HEARTBEAT = "2::";

        public Heartbeat()
        {
            this.MessageType = SocketIOMessageTypes.Heartbeat;
        }

        public override string Encoded
        {
            get
            {
                return HEARTBEAT;
            }
        }

    }
}
