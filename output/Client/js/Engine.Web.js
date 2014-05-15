(function() {
	'use strict';
	global.Engine = global.Engine || {};
	global.Engine.Web = global.Engine.Web || {};
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Web.CanvasInformation
	var $Engine_Web_CanvasInformation = function(context, domCanvas) {
		this.context = null;
		this.canvas = null;
		this.context = context;
		this.canvas = domCanvas;
	};
	$Engine_Web_CanvasInformation.__typeName = 'Engine.Web.CanvasInformation';
	$Engine_Web_CanvasInformation.get_blackPixel = function() {
		if (ss.isNullOrUndefined($Engine_Web_CanvasInformation.$blackPixel)) {
			var m = $Engine_Web_CanvasInformation.create(0, 0);
			m.context.fillStyle = 'black';
			m.context.fillRect(0, 0, 1, 1);
			$Engine_Web_CanvasInformation.$blackPixel = m.canvas;
		}
		return $Engine_Web_CanvasInformation.$blackPixel;
	};
	$Engine_Web_CanvasInformation.create = function(w, h) {
		var $t1 = document.createElement('canvas');
		var canvas = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS'));
		return $Engine_Web_CanvasInformation.create$1(canvas, w, h);
	};
	$Engine_Web_CanvasInformation.create$1 = function(canvas, w, h) {
		if (w === 0) {
			w = 1;
		}
		if (h === 0) {
			h = 1;
		}
		canvas.width = w;
		canvas.height = h;
		var ctx = ss.cast(canvas.getContext('2d'), CanvasRenderingContext2D);
		return new $Engine_Web_CanvasInformation(ctx, canvas);
	};
	global.Engine.Web.CanvasInformation = $Engine_Web_CanvasInformation;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Web.WebClient
	var $Engine_Web_WebClient = function() {
		this.$1$GameField = null;
		this.$1$RendererField = null;
		this.set_game(new BingoBlockParty.Client.Game(this));
	};
	$Engine_Web_WebClient.__typeName = 'Engine.Web.WebClient';
	global.Engine.Web.WebClient = $Engine_Web_WebClient;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Web.WebImage
	var $Engine_Web_WebImage = function(imagePath, center, ready) {
		this.image = null;
		this.$1$CenterField = null;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		var image = new Image();
		image.src = imagePath;
		this.image = image;
		image.onload = ss.mkdel(this, function(e) {
			this.set_width(image.width);
			this.set_height(image.height);
			this.set_center(center || new Engine.Interfaces.Point(ss.Int32.div(image.width, 2), ss.Int32.div(image.height, 2)));
			ready();
		});
	};
	$Engine_Web_WebImage.__typeName = 'Engine.Web.WebImage';
	global.Engine.Web.WebImage = $Engine_Web_WebImage;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Web.WebImageCache
	var $Engine_Web_WebImageCache = function() {
		this.$textures = null;
		this.$textures = {};
	};
	$Engine_Web_WebImageCache.__typeName = 'Engine.Web.WebImageCache';
	global.Engine.Web.WebImageCache = $Engine_Web_WebImageCache;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Web.WebLayer
	var $Engine_Web_WebLayer = function(renderer, width, height) {
		this.$renderer = null;
		this.$width = 0;
		this.$height = 0;
		this.canvasInformation = null;
		this.$renderer = renderer;
		this.$width = width;
		this.$height = height;
		this.canvasInformation = $Engine_Web_CanvasInformation.create(width, height);
	};
	$Engine_Web_WebLayer.__typeName = 'Engine.Web.WebLayer';
	global.Engine.Web.WebLayer = $Engine_Web_WebLayer;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Web.WebRenderer
	var $Engine_Web_WebRenderer = function(client, loaded) {
		this.$_client = null;
		this.$_loaded = null;
		this.$imageCache = null;
		this.$layers = null;
		this.$numberOfImages = 0;
		this.$numberOfImagesLoaded = 0;
		this.$clickManager = null;
		this.$_client = client;
		this.$_loaded = loaded;
		this.$layers = [];
		this.$imageCache = new $Engine_Web_WebImageCache();
		var $t1 = document.createElement('div');
		this.$clickManager = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'DIV'));
		this.$clickManager.className = 'clickManager';
		this.$clickManager.style.width = '1000px';
		this.$clickManager.style.height = '1000px';
		this.$clickManager.onmousedown = function(e) {
			client.touchEvent(1, ss.unbox(ss.cast(e.pageX - e.target.offsetLeft, ss.Int32)), ss.unbox(ss.cast(e.pageY - e.target.offsetTop, ss.Int32)));
		};
		this.$clickManager.onmousemove = function(e1) {
			client.touchEvent(2, ss.unbox(ss.cast(e1.pageX - e1.target.offsetLeft, ss.Int32)), ss.unbox(ss.cast(e1.pageY - e1.target.offsetTop, ss.Int32)));
		};
		this.$clickManager.onmouseup = function(e2) {
			client.touchEvent(0, ss.unbox(ss.cast(e2.pageX - e2.target.offsetLeft, ss.Int32)), ss.unbox(ss.cast(e2.pageY - e2.target.offsetTop, ss.Int32)));
		};
		document.body.appendChild(this.$clickManager);
	};
	$Engine_Web_WebRenderer.__typeName = 'Engine.Web.WebRenderer';
	global.Engine.Web.WebRenderer = $Engine_Web_WebRenderer;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Web.Window
	var $Engine_Web_Window = function() {
	};
	$Engine_Web_Window.__typeName = 'Engine.Web.Window';
	global.Engine.Web.Window = $Engine_Web_Window;
	ss.initClass($Engine_Web_CanvasInformation, {});
	ss.initClass($Engine_Web_WebClient, {
		get_game: function() {
			return this.$1$GameField;
		},
		set_game: function(value) {
			this.$1$GameField = value;
		},
		get_renderer: function() {
			return this.$1$RendererField;
		},
		set_renderer: function(value) {
			this.$1$RendererField = value;
		},
		init: function(renderer) {
			this.set_renderer(ss.cast(renderer, $Engine_Web_WebRenderer));
			this.get_game().init(this.get_renderer());
		},
		draw: function(elapsedGameTime) {
			this.get_game().draw(elapsedGameTime);
		},
		touchEvent: function(touchType, x, y) {
			this.get_game().touchEvent(touchType, x, y);
		},
		tick: function(elapsedGameTime) {
			this.get_game().tick(elapsedGameTime);
		},
		timeout: function(callback, ms) {
			window.setTimeout(callback, ms);
		},
		loadImages: function(renderer) {
			this.get_game().loadImages(renderer);
		}
	}, null, [Client.Interfaces.IClient]);
	ss.initClass($Engine_Web_WebImage, {
		get_center: function() {
			return this.$1$CenterField;
		},
		set_center: function(value) {
			this.$1$CenterField = value;
		},
		get_width: function() {
			return this.$1$WidthField;
		},
		set_width: function(value) {
			this.$1$WidthField = value;
		},
		get_height: function() {
			return this.$1$HeightField;
		},
		set_height: function(value) {
			this.$1$HeightField = value;
		}
	}, null, [Engine.Interfaces.IImage]);
	ss.initClass($Engine_Web_WebImageCache, {
		getImage: function(imageName) {
			return this.$textures[imageName];
		},
		createImage: function(imageName, imagePath, center, ready) {
			this.$textures[imageName] = new $Engine_Web_WebImage(imagePath, center, ready);
		}
	});
	ss.initClass($Engine_Web_WebLayer, {
		begin: function() {
			//not needed for web
		},
		end: function() {
			//not needed for web
		},
		save: function() {
			this.canvasInformation.context.save();
		},
		restore: function() {
			this.canvasInformation.context.restore();
		},
		translate: function(x, y) {
			this.canvasInformation.context.translate(x, y);
		},
		drawImage: function(image, x, y) {
			this.canvasInformation.context.drawImage(ss.cast(image, $Engine_Web_WebImage).image, x, y);
		},
		drawImage$1: function(image, x, y, width, height) {
			this.canvasInformation.context.drawImage(ss.cast(image, $Engine_Web_WebImage).image, x, y, width, height);
		},
		drawImage$2: function(image, x, y, angle, centerX, centerY) {
			this.save();
			this.canvasInformation.context.translate(centerX, centerY);
			this.canvasInformation.context.rotate(angle);
			this.canvasInformation.context.drawImage(ss.cast(image, $Engine_Web_WebImage).image, x - centerX, y - centerY);
			this.restore();
		},
		drawString: function(text, x, y) {
			this.canvasInformation.context.fillText(text, x, y);
		},
		clear: function() {
			this.canvasInformation.context.clearRect(0, 0, this.$width, this.$height);
		},
		measureString: function(text) {
			return this.canvasInformation.context.measureText(text).width;
		}
	}, null, [Engine.Interfaces.ILayer]);
	ss.initClass($Engine_Web_WebRenderer, {
		createLayer: function(width, height) {
			return new $Engine_Web_WebLayer(this, width, height);
		},
		addLayer: function(layer) {
			document.body.insertBefore(ss.cast(layer, $Engine_Web_WebLayer).canvasInformation.canvas, this.$clickManager);
			ss.add(this.$layers, ss.cast(layer, $Engine_Web_WebLayer));
		},
		getImage: function(imageName) {
			return this.$imageCache.getImage(imageName);
		},
		createImage: function(imageName, imagePath, center) {
			this.$numberOfImages++;
			this.$imageCache.createImage(imageName, imagePath, center, ss.mkdel(this, this.$imagesReady));
		},
		$imagesReady: function() {
			this.$numberOfImagesLoaded++;
			if (this.$numberOfImagesLoaded === this.$numberOfImages) {
				this.$_loaded();
			}
		},
		beginRender: function() {
			for (var $t1 = 0; $t1 < this.$layers.length; $t1++) {
				var xnaLayer = this.$layers[$t1];
				xnaLayer.begin();
			}
		},
		endRender: function() {
			for (var $t1 = 0; $t1 < this.$layers.length; $t1++) {
				var xnaLayer = this.$layers[$t1];
				xnaLayer.end();
			}
		}
	}, null, [Engine.Interfaces.IRenderer]);
	ss.initClass($Engine_Web_Window, {});
	$Engine_Web_CanvasInformation.$blackPixel = null;
})();
