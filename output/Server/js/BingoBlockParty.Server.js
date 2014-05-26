'use strict';

var socketio = require('socket.io');
global.BingoBlockParty = global.BingoBlockParty || {};
global.BingoBlockParty.Server = global.BingoBlockParty.Server || {};
////////////////////////////////////////////////////////////////////////////////
// BingoBlockParty.Server.Server
var $BingoBlockParty_Server_Server = function() {
	var http = require('http');
	setInterval(function() {
		console.log('keep alive ' + (new Date()).toString().substr(17, 24));
	}, 10000);
	//load();
	var app = http.createServer(function(req, res) {
		res.end();
	});
	var io = socketio.listen(app);
	io.set('log level', 1);
	app.listen(8998);
	io.sockets.on('connection', function(socket) {
		var curLevel = 0;
		socket.on('GetSonicLevel', function(levelName) {
			console.log('Serving   ' + curLevel);
			socket.emit('SonicLevel', new (ss.makeGenericType(OurSonicModels.Common.DataObject$1, [String]))(''));
		});
	});
};
$BingoBlockParty_Server_Server.__typeName = 'BingoBlockParty.Server.Server';
$BingoBlockParty_Server_Server.main = function() {
	new $BingoBlockParty_Server_Server();
};
global.BingoBlockParty.Server.Server = $BingoBlockParty_Server_Server;
ss.initClass($BingoBlockParty_Server_Server, {});
$BingoBlockParty_Server_Server.main();
