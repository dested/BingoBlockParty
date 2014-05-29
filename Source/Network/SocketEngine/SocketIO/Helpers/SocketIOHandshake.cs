using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;

namespace SocketEngine.SocketIO.Helpers
{
    public class SocketIOHandshake
    {
        public string SID { get; set; }
        public int HeartbeatTimeout { get; set; }
		public string ErrorMessage { get; set; }
		public bool HadError
		{
			get { return !string.IsNullOrWhiteSpace(this.ErrorMessage); }

		}
		/// <summary>
		/// The HearbeatInterval will be approximately 20% faster than the Socket.IO service indicated was required
		/// </summary>
        public TimeSpan HeartbeatInterval
        {
            get
            {
                return new TimeSpan(0, 0, HeartbeatTimeout);
            }
        }
        public int ConnectionTimeout { get; set; }
        public List<string> Transports = new List<string>();

		public NameValueCollection Headers;

		public SocketIOHandshake()
		{
			this.Headers = new NameValueCollection();
		}
		public SocketIOHandshake(NameValueCollection headers)
		{
			if (headers == null)
				this.Headers = new NameValueCollection();
			else
				this.Headers = headers;
		}

		public void ResetConnection()
		{
			this.SID = string.Empty;
			this.ErrorMessage = string.Empty;
		}
		/// <summary>
		/// </summary>
		/// <param name="value"></param>
		/// <returns></returns>
		public void UpdateFromSocketIOResponse(string value)
        {
            if (!string.IsNullOrEmpty(value))
            {
				this.ErrorMessage = string.Empty;
                string[] items = value.Split(new char[] { ':' });
                if (items.Count() == 4)
                {
                    int hb = 0;
                    int ct = 0;
                    this.SID = items[0];

                    if (int.TryParse(items[1], out hb))
                    { 
                        var pct = (int)(hb * .75);  // setup client time to occur 25% faster than needed
						this.HeartbeatTimeout = pct;
                    }
                    if (int.TryParse(items[2], out ct))
						this.ConnectionTimeout = ct;
					this.Transports.AddRange(items[3].Split(new char[] { ',' }));
                }
            }
        }
    }
}
