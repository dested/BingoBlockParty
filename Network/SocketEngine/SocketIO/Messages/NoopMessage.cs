using SocketEngine.SocketIO.Helpers;

namespace SocketEngine.SocketIO.Messages
{
	/// <summary>
	/// Defined as No operation. Used for example to close a poll after the polling duration times out.
	/// </summary>
    public class NoopMessage : Message
    {
        public NoopMessage()
        {
            this.MessageType = SocketIOMessageTypes.Noop;
        }
        public static NoopMessage Deserialize(string rawMessage)
        {
			return new NoopMessage();
        }
    }
}
