(function() {
	'use strict';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Web.Program
	var $Client_Web_$Program = function() {
		this.$renderer = null;
		this.$client = null;
		this.$client = new Engine.Web.WebClient();
		this.$renderer = new Engine.Web.WebRenderer(this.$client, ss.mkdel(this, this.$finishedLoadingImages));
		this.$client.loadImages(this.$renderer);
		console.log('hi');
	};
	$Client_Web_$Program.__typeName = 'Client.Web.$Program';
	$Client_Web_$Program.$main = function() {
		new $Client_Web_$Program();
	};
	ss.initClass($Client_Web_$Program, {
		$finishedLoadingImages: function() {
			this.$client.init(this.$renderer);
			window.setInterval(ss.mkdel(this, function() {
				this.$client.tick(new ss.TimeSpan(0));
			}), 16);
			window.setInterval(ss.mkdel(this, function() {
				this.$client.draw(new ss.TimeSpan(0));
			}), 16);
		}
	});
	$Client_Web_$Program.$main();
})();
