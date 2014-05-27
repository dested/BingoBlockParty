(function() {
	'use strict';
	////////////////////////////////////////////////////////////////////////////////
	// Client.Web.Program
	var $Client_Web_$Program = function() {
		this.$renderer = null;
		this.$client = null;
		this.$client = new Engine.Html5.Web.WebClient();
		this.$renderer = new Engine.Html5.Web.WebRenderer(this.$client, ss.mkdel(this, this.$finishedLoadingImages));
		this.$client.loadImages(this.$renderer);
		console.log('hi');
		var index = 0;
		document.onkeypress = ss.mkdel(this, function(e) {
			index = ((index === 0) ? 1 : 0);
			var i = 0;
			var $t1 = ss.getEnumerator(this.$client.get_screenManager().get_screens());
			try {
				while ($t1.moveNext()) {
					var screen = $t1.current();
					if (i === index) {
						this.$client.get_screenManager().changeScreen(screen);
						break;
					}
					i++;
				}
			}
			finally {
				$t1.dispose();
			}
		});
	};
	$Client_Web_$Program.__typeName = 'Client.Web.$Program';
	$Client_Web_$Program.$main = function() {
		new $Client_Web_$Program();
	};
	ss.initClass($Client_Web_$Program, {
		$finishedLoadingImages: function() {
			var $t2 = this.$client;
			var $t3 = this.$renderer;
			var $t1 = new Engine.Html5.Web.WebClientSettings();
			$t1.set_oneLayoutAtATime(false);
			$t1.set_getKeyboardInput(function(callback) {
			});
			$t2.init($t3, $t1);
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
