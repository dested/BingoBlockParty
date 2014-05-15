(function() {
	'use strict';
	global.Client = global.Client || {};
	global.Client.Interfaces = global.Client.Interfaces || {};
	////////////////////////////////////////////////////////////////////////////////
	// Client.Interfaces.IClient
	var $Client_Interfaces_IClient = function() {
	};
	$Client_Interfaces_IClient.__typeName = 'Client.Interfaces.IClient';
	global.Client.Interfaces.IClient = $Client_Interfaces_IClient;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Interfaces.IGame
	var $Client_Interfaces_IGame = function() {
	};
	$Client_Interfaces_IGame.__typeName = 'Client.Interfaces.IGame';
	global.Client.Interfaces.IGame = $Client_Interfaces_IGame;
	////////////////////////////////////////////////////////////////////////////////
	// Client.Interfaces.TouchType
	var $Client_Interfaces_TouchType = function() {
	};
	$Client_Interfaces_TouchType.__typeName = 'Client.Interfaces.TouchType';
	global.Client.Interfaces.TouchType = $Client_Interfaces_TouchType;
	ss.initInterface($Client_Interfaces_IClient, { get_game: null, set_game: null, loadImages: null, init: null, draw: null, touchEvent: null, tick: null, timeout: null });
	ss.initInterface($Client_Interfaces_IGame, { init: null, loadImages: null, get_client: null, draw: null, touchEvent: null, tick: null });
	ss.initEnum($Client_Interfaces_TouchType, { touchUp: 0, touchDown: 1, touchMove: 2 });
})();
