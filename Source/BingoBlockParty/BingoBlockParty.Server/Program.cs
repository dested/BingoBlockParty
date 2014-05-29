using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BingoBlockParty.Server.Libraries.NodeJS;
using BingoBlockParty.Server.Libraries.Socket.IO;
using OurSonicModels.Common;

namespace BingoBlockParty.Server
{
    public class Server
    {
        public Server()
        {
            var http = Global.Require<Http>("http");

            Global.SetInterval(() => { Global.Console.Log("keep alive " + new DateTime().ToString().Substring(17, 24)); }, 10 * 1000);

            //load();

            var app = http.CreateServer((req, res) => res.End());
            var io = SocketIO.Listen(app);

            io.Set("log level", 1);
            app.Listen(8998);
            io.Sockets.On("connection", ((SocketIOConnection socket) =>
                          {
                              int curLevel = 0;
                              socket.On("GetSonicLevel",
                                        new Action<string>((levelName) =>
                                        {
                                            Global.Console.Log("Serving " + "  " + curLevel);
                                            socket.Emit("SonicLevel", new DataObject<string>(""));
                                        }));
                          }));
        }

        public static void Main()
        {
            new Server();
        }
    }
}
