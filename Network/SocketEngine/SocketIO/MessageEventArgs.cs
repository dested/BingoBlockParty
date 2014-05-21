using System;
using SocketEngine.SocketIO.Messages;

namespace SocketEngine.SocketIO
{
	public class MessageEventArgs : EventArgs
	{
		public IMessage Message { get; private set; }

		public MessageEventArgs(IMessage msg)
			: base()
		{
			this.Message = msg;
		}
	}
}
