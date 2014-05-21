using System;
using SocketEngine.SocketIO.Messages;

namespace SocketEngine.SocketIO
{
	public interface IEndPointClient
	{
		void On(string eventName, Action<IMessage> action);
		void Emit(string eventName, object payload, Action<object> callBack = null);

		void Send(IMessage msg);
	}
}
