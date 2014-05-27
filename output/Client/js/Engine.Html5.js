(function() {
	'use strict';
	global.Engine = global.Engine || {};
	global.Engine.Html5 = global.Engine.Html5 || {};
	global.Engine.Html5.Network = global.Engine.Html5.Network || {};
	global.Engine.Html5.Web = global.Engine.Html5.Web || {};
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Network.SocketError
	var $Engine_Html5_Network_$SocketError = function(exception, message) {
		this.$1$ExceptionField = null;
		this.$1$MessageField = null;
		this.set_exception(exception);
		this.set_message(message);
	};
	$Engine_Html5_Network_$SocketError.__typeName = 'Engine.Html5.Network.$SocketError';
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Network.WebSocket
	var $Engine_Html5_Network_WebSocket = function(url) {
		this.$1$ClientField = null;
		this.$1$OnErrorField = null;
		this.$1$OnCloseField = null;
		this.$1$OnConnectField = null;
		this.set_client(io.connect(url));
	};
	$Engine_Html5_Network_WebSocket.__typeName = 'Engine.Html5.Network.WebSocket';
	global.Engine.Html5.Network.WebSocket = $Engine_Html5_Network_WebSocket;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Network.WebSocketManager
	var $Engine_Html5_Network_WebSocketManager = function() {
	};
	$Engine_Html5_Network_WebSocketManager.__typeName = 'Engine.Html5.Network.WebSocketManager';
	global.Engine.Html5.Network.WebSocketManager = $Engine_Html5_Network_WebSocketManager;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.CanvasInformation
	var $Engine_Html5_Web_CanvasInformation = function(context, domCanvas) {
		this.context = null;
		this.canvas = null;
		this.context = context;
		this.canvas = domCanvas;
	};
	$Engine_Html5_Web_CanvasInformation.__typeName = 'Engine.Html5.Web.CanvasInformation';
	$Engine_Html5_Web_CanvasInformation.get_blackPixel = function() {
		if (ss.isNullOrUndefined($Engine_Html5_Web_CanvasInformation.$blackPixel)) {
			var m = $Engine_Html5_Web_CanvasInformation.create(0, 0);
			m.context.fillStyle = 'black';
			m.context.fillRect(0, 0, 1, 1);
			$Engine_Html5_Web_CanvasInformation.$blackPixel = m.canvas;
		}
		return $Engine_Html5_Web_CanvasInformation.$blackPixel;
	};
	$Engine_Html5_Web_CanvasInformation.create = function(w, h) {
		var $t1 = document.createElement('canvas');
		var canvas = ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS'));
		return $Engine_Html5_Web_CanvasInformation.create$1(canvas, w, h);
	};
	$Engine_Html5_Web_CanvasInformation.create$1 = function(canvas, w, h) {
		if (w === 0) {
			w = 1;
		}
		if (h === 0) {
			h = 1;
		}
		canvas.width = w;
		canvas.height = h;
		var ctx = ss.cast(canvas.getContext('2d'), CanvasRenderingContext2D);
		return new $Engine_Html5_Web_CanvasInformation(ctx, canvas);
	};
	global.Engine.Html5.Web.CanvasInformation = $Engine_Html5_Web_CanvasInformation;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.EnumerableExtensions
	var $Engine_Html5_Web_EnumerableExtensions = function() {
	};
	$Engine_Html5_Web_EnumerableExtensions.__typeName = 'Engine.Html5.Web.EnumerableExtensions';
	$Engine_Html5_Web_EnumerableExtensions.last = function(T) {
		return function(items) {
			var last = ss.getDefaultValue(T);
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					last = item;
				}
			}
			finally {
				$t1.dispose();
			}
			return last;
		};
	};
	$Engine_Html5_Web_EnumerableExtensions.first = function(T) {
		return function(items) {
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					return item;
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.getDefaultValue(T);
		};
	};
	$Engine_Html5_Web_EnumerableExtensions.elementAt = function(T) {
		return function(items, index) {
			var i = 0;
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (i === index) {
						return item;
					}
					i++;
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.getDefaultValue(T);
		};
	};
	global.Engine.Html5.Web.EnumerableExtensions = $Engine_Html5_Web_EnumerableExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebClient
	var $Engine_Html5_Web_WebClient = function() {
		this.$1$ScreenManagerField = null;
		this.$1$SocketManagerField = null;
		this.$1$ClientSettingsField = null;
		this.$1$GameField = null;
		this.$1$RendererField = null;
		this.set_game(new BingoBlockParty.Client.Game(this));
	};
	$Engine_Html5_Web_WebClient.__typeName = 'Engine.Html5.Web.WebClient';
	global.Engine.Html5.Web.WebClient = $Engine_Html5_Web_WebClient;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebClientSettings
	var $Engine_Html5_Web_WebClientSettings = function() {
		this.$1$OneLayoutAtATimeField = false;
		this.$1$GetKeyboardInputField = null;
	};
	$Engine_Html5_Web_WebClientSettings.__typeName = 'Engine.Html5.Web.WebClientSettings';
	global.Engine.Html5.Web.WebClientSettings = $Engine_Html5_Web_WebClientSettings;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebContextSettings
	var $Engine_Html5_Web_WebContextSettings = function() {
		this.$1$DrawingEffectsField = 0;
	};
	$Engine_Html5_Web_WebContextSettings.__typeName = 'Engine.Html5.Web.WebContextSettings';
	global.Engine.Html5.Web.WebContextSettings = $Engine_Html5_Web_WebContextSettings;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebImage
	var $Engine_Html5_Web_WebImage = function(imagePath, center, ready) {
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
			this.set_center(center || new Engine.Point(ss.Int32.div(image.width, 2), ss.Int32.div(image.height, 2)));
			ready();
		});
	};
	$Engine_Html5_Web_WebImage.__typeName = 'Engine.Html5.Web.WebImage';
	global.Engine.Html5.Web.WebImage = $Engine_Html5_Web_WebImage;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebImageCache
	var $Engine_Html5_Web_WebImageCache = function() {
		this.$textures = null;
		this.$textures = {};
	};
	$Engine_Html5_Web_WebImageCache.__typeName = 'Engine.Html5.Web.WebImageCache';
	global.Engine.Html5.Web.WebImageCache = $Engine_Html5_Web_WebImageCache;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebLayer
	var $Engine_Html5_Web_WebLayer = function(renderer, width, height, layout) {
		this.$renderer = null;
		this.$width = 0;
		this.$height = 0;
		this.$1$LayoutField = null;
		this.canvasInformation = null;
		this.$settingsStack = null;
		this.$renderer = renderer;
		this.$width = width;
		this.$height = height;
		this.set_layout(layout);
		this.canvasInformation = $Engine_Html5_Web_CanvasInformation.create(width, height);
		this.$settingsStack = [];
		ss.add(this.$settingsStack, new $Engine_Html5_Web_WebContextSettings());
	};
	$Engine_Html5_Web_WebLayer.__typeName = 'Engine.Html5.Web.WebLayer';
	global.Engine.Html5.Web.WebLayer = $Engine_Html5_Web_WebLayer;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebLayout
	var $Engine_Html5_Web_WebLayout = function(screen, width, height) {
		this.$1$UIManagerField = null;
		this.$1$LayoutViewField = null;
		this.$1$ScreenField = null;
		this.$1$LayoutPositionField = null;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.$1$ScreenOrientationField = 0;
		this.$1$AlwaysTickField = false;
		this.$1$ElementField = null;
		this.$active = false;
		this.set_screen(screen);
		this.set_width(width);
		this.set_height(height);
		this.set_screenOrientation(0);
		this.set_layoutPosition(new Engine.LayoutPosition(new Engine.Size.$ctor1(width, height)));
		var $t1 = document.createElement('div');
		this.set_element(ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'DIV')));
		this.set_uiManager(new $Engine_Html5_Web_WebUIManager(this));
	};
	$Engine_Html5_Web_WebLayout.__typeName = 'Engine.Html5.Web.WebLayout';
	global.Engine.Html5.Web.WebLayout = $Engine_Html5_Web_WebLayout;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebRenderer
	var $Engine_Html5_Web_WebRenderer = function(client, loaded) {
		this.$_client = null;
		this.$_loaded = null;
		this.$imageCache = null;
		this.$layers = null;
		this.$numberOfImages = 0;
		this.$numberOfImagesLoaded = 0;
		this.$1$ClickManagerField = null;
		this.$_client = client;
		this.$_loaded = loaded;
		this.$layers = [];
		this.$imageCache = new $Engine_Html5_Web_WebImageCache();
		var $t1 = document.createElement('div');
		this.set_clickManager(ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'DIV')));
		this.get_clickManager().className = 'clickManager';
		this.get_clickManager().style.width = '1000px';
		this.get_clickManager().style.height = '1000px';
		this.get_clickManager().onmousedown = function(e) {
			client.touchEvent(1, ss.unbox(ss.cast(e.pageX - e.target.offsetLeft, ss.Int32)), ss.unbox(ss.cast(e.pageY - e.target.offsetTop, ss.Int32)));
		};
		this.get_clickManager().onmousemove = function(e1) {
			client.touchEvent(2, ss.unbox(ss.cast(e1.pageX - e1.target.offsetLeft, ss.Int32)), ss.unbox(ss.cast(e1.pageY - e1.target.offsetTop, ss.Int32)));
		};
		this.get_clickManager().onmouseup = function(e2) {
			client.touchEvent(0, ss.unbox(ss.cast(e2.pageX - e2.target.offsetLeft, ss.Int32)), ss.unbox(ss.cast(e2.pageY - e2.target.offsetTop, ss.Int32)));
		};
		document.body.appendChild(this.get_clickManager());
	};
	$Engine_Html5_Web_WebRenderer.__typeName = 'Engine.Html5.Web.WebRenderer';
	global.Engine.Html5.Web.WebRenderer = $Engine_Html5_Web_WebRenderer;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebScreen
	var $Engine_Html5_Web_WebScreen = function(webScreenManager) {
		this.$1$ElementField = null;
		this.$1$WebLayoutsField = null;
		this.$1$OneLayoutAtATimeField = false;
		this.$1$ScreenManagerField = null;
		this.set_screenManager(webScreenManager);
		this.set_webLayouts([]);
		var $t1 = document.createElement('div');
		this.set_element(ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'DIV')));
	};
	$Engine_Html5_Web_WebScreen.__typeName = 'Engine.Html5.Web.WebScreen';
	global.Engine.Html5.Web.WebScreen = $Engine_Html5_Web_WebScreen;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebScreenManager
	var $Engine_Html5_Web_WebScreenManager = function(renderer, client) {
		this.$1$WebScreensField = null;
		this.$1$RendererField = null;
		this.$1$ClientField = null;
		this.$1$OneLayoutAtATimeField = false;
		this.$1$CurrentScreenField = null;
		this.$lastElapsedTime = ss.TimeSpan.getDefaultValue();
		this.$timeouts = [];
		this.set_renderer(renderer);
		this.set_client(client);
		this.set_webScreens([]);
	};
	$Engine_Html5_Web_WebScreenManager.__typeName = 'Engine.Html5.Web.WebScreenManager';
	global.Engine.Html5.Web.WebScreenManager = $Engine_Html5_Web_WebScreenManager;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebUIManager
	var $Engine_Html5_Web_WebUIManager = function(webLayout) {
		this.$1$LayoutField = null;
		this.$1$TextBoxesField = null;
		this.set_layout(webLayout);
		this.set_textBoxes([]);
	};
	$Engine_Html5_Web_WebUIManager.__typeName = 'Engine.Html5.Web.WebUIManager';
	global.Engine.Html5.Web.WebUIManager = $Engine_Html5_Web_WebUIManager;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.WebUITextBox
	var $Engine_Html5_Web_WebUITextBox = function(uiManager, rectangle, layoutView, onTextChange) {
		this.$1$FocusedField = false;
		this.$1$UIManagerField = null;
		this.$1$TextField = null;
		this.$1$RectangleField = null;
		this.$1$LayoutViewField = null;
		this.$1$OnTextChangeField = null;
		this.set_uiManager(uiManager);
		this.set_rectangle(rectangle);
		this.set_layoutView(layoutView);
		this.set_onTextChange(onTextChange);
	};
	$Engine_Html5_Web_WebUITextBox.__typeName = 'Engine.Html5.Web.WebUITextBox';
	global.Engine.Html5.Web.WebUITextBox = $Engine_Html5_Web_WebUITextBox;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Html5.Web.Window
	var $Engine_Html5_Web_Window = function() {
	};
	$Engine_Html5_Web_Window.__typeName = 'Engine.Html5.Web.Window';
	global.Engine.Html5.Web.Window = $Engine_Html5_Web_Window;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Xna.Network.SocketError
	var $Engine_Xna_Network_$SocketError = function(exception, message) {
		this.$1$ExceptionField = null;
		this.$1$MessageField = null;
		this.set_exception(exception);
		this.set_message(message);
	};
	$Engine_Xna_Network_$SocketError.__typeName = 'Engine.Xna.Network.$SocketError';
	ss.initClass($Engine_Html5_Network_$SocketError, {
		get_exception: function() {
			return this.$1$ExceptionField;
		},
		set_exception: function(value) {
			this.$1$ExceptionField = value;
		},
		get_message: function() {
			return this.$1$MessageField;
		},
		set_message: function(value) {
			this.$1$MessageField = value;
		}
	}, null, [Engine.ISocketError]);
	ss.initClass($Engine_Html5_Network_WebSocket, {
		get_client: function() {
			return this.$1$ClientField;
		},
		set_client: function(value) {
			this.$1$ClientField = value;
		},
		get_onError: function() {
			return this.$1$OnErrorField;
		},
		set_onError: function(value) {
			this.$1$OnErrorField = value;
		},
		get_onClose: function() {
			return this.$1$OnCloseField;
		},
		set_onClose: function(value) {
			this.$1$OnCloseField = value;
		},
		get_onConnect: function() {
			return this.$1$OnConnectField;
		},
		set_onConnect: function(value) {
			this.$1$OnConnectField = value;
		},
		connect: function() {
			this.get_client().on('disconnect', ss.mkdel(this, this.$socketConnectionClosed));
			this.get_client().on('error', ss.mkdel(this, this.$socketError));
			this.get_client().on('connect', ss.mkdel(this, function() {
				this.get_onConnect()();
			}));
		},
		on: function(T) {
			return function(eventName, callback) {
				this.get_client().on(eventName, function(data) {
					callback(data);
				});
			};
		},
		emit: function(eventName, payload) {
			this.get_client().emit(eventName, payload);
		},
		$socketConnectionClosed: function() {
			this.get_onClose()();
		},
		$socketError: function(message) {
			this.get_onError()(new $Engine_Html5_Network_$SocketError(new ss.Exception(message), message));
		}
	}, null, [Engine.ISocket]);
	ss.initClass($Engine_Html5_Network_WebSocketManager, {
		create: function(url) {
			return new $Engine_Html5_Network_WebSocket(url);
		}
	}, null, [Engine.ISocketManager]);
	ss.initClass($Engine_Html5_Web_CanvasInformation, {});
	ss.initClass($Engine_Html5_Web_EnumerableExtensions, {});
	ss.initClass($Engine_Html5_Web_WebClient, {
		get_screenManager: function() {
			return this.$1$ScreenManagerField;
		},
		set_screenManager: function(value) {
			this.$1$ScreenManagerField = value;
		},
		get_socketManager: function() {
			return this.$1$SocketManagerField;
		},
		set_socketManager: function(value) {
			this.$1$SocketManagerField = value;
		},
		get_clientSettings: function() {
			return this.$1$ClientSettingsField;
		},
		set_clientSettings: function(value) {
			this.$1$ClientSettingsField = value;
		},
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
		init: function(renderer, clientSettings) {
			this.set_renderer(ss.cast(renderer, $Engine_Html5_Web_WebRenderer));
			this.set_clientSettings(clientSettings);
			this.set_screenManager(new $Engine_Html5_Web_WebScreenManager(this.get_renderer(), this));
			this.get_game().initScreens(renderer, this.get_screenManager());
			this.set_socketManager(new $Engine_Html5_Network_WebSocketManager());
			this.get_game().initSocketManager(this.get_socketManager());
		},
		draw: function(elapsedGameTime) {
			this.get_game().beforeDraw();
			this.get_screenManager().draw(elapsedGameTime);
			this.get_game().afterDraw();
		},
		touchEvent: function(touchType, x, y) {
			this.get_screenManager().touchEvent(touchType, x, y);
		},
		tick: function(elapsedGameTime) {
			this.get_game().beforeTick();
			this.get_screenManager().tick(elapsedGameTime);
			this.get_game().afterTick();
		},
		timeout: function(callback, ms) {
			window.setTimeout(callback, ms);
		},
		showKeyboard: function() {
			throw new ss.NotImplementedException();
		},
		loadImages: function(renderer) {
			this.get_game().loadAssets(renderer);
		}
	}, null, [Engine.Interfaces.IClient]);
	ss.initClass($Engine_Html5_Web_WebClientSettings, {
		get_oneLayoutAtATime: function() {
			return this.$1$OneLayoutAtATimeField;
		},
		set_oneLayoutAtATime: function(value) {
			this.$1$OneLayoutAtATimeField = value;
		},
		get_getKeyboardInput: function() {
			return this.$1$GetKeyboardInputField;
		},
		set_getKeyboardInput: function(value) {
			this.$1$GetKeyboardInputField = value;
		}
	}, null, [Engine.Interfaces.IClientSettings]);
	ss.initClass($Engine_Html5_Web_WebContextSettings, {
		get_drawingEffects: function() {
			return this.$1$DrawingEffectsField;
		},
		set_drawingEffects: function(value) {
			this.$1$DrawingEffectsField = value;
		},
		clone: function() {
			var $t1 = new $Engine_Html5_Web_WebContextSettings();
			$t1.set_drawingEffects(this.get_drawingEffects());
			return $t1;
		}
	});
	ss.initClass($Engine_Html5_Web_WebImage, {
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
	ss.initClass($Engine_Html5_Web_WebImageCache, {
		getImage: function(imageName) {
			return this.$textures[imageName];
		},
		createImage: function(imageName, imagePath, center, ready) {
			this.$textures[imageName] = new $Engine_Html5_Web_WebImage(imagePath, center, ready);
		}
	});
	ss.initClass($Engine_Html5_Web_WebLayer, {
		get_layout: function() {
			return this.$1$LayoutField;
		},
		set_layout: function(value) {
			this.$1$LayoutField = value;
		},
		begin: function() {
			//not needed for web
		},
		end: function() {
			//not needed for web
		},
		save: function() {
			ss.add(this.$settingsStack, $Engine_Html5_Web_EnumerableExtensions.last($Engine_Html5_Web_WebContextSettings).call(null, this.$settingsStack).clone());
			this.canvasInformation.context.save();
		},
		$currentSettings: function() {
			return $Engine_Html5_Web_EnumerableExtensions.last($Engine_Html5_Web_WebContextSettings).call(null, this.$settingsStack);
		},
		restore: function() {
			ss.removeAt(this.$settingsStack, this.$settingsStack.length - 1);
			this.canvasInformation.context.restore();
		},
		translate: function(point) {
			this.translate$1(point.get_x(), point.get_y());
		},
		translate$1: function(x, y) {
			this.canvasInformation.context.translate(x, y);
		},
		drawImage: function(image, point) {
			this.drawImage$2(image, point.get_x(), point.get_y());
		},
		drawImage$2: function(image, x, y) {
			this.canvasInformation.context.drawImage(ss.cast(image, $Engine_Html5_Web_WebImage).image, x, y);
		},
		drawImage$1: function(image, point, center) {
			this.drawImage$4(image, point.get_x(), point.get_y(), center);
		},
		drawImage$4: function(image, x, y, center) {
			switch (this.$currentSettings().get_drawingEffects()) {
				case 1: {
					this.canvasInformation.context.scale(-1, 1);
					break;
				}
				case 2: {
					this.canvasInformation.context.scale(1, -1);
					break;
				}
			}
			this.canvasInformation.context.drawImage(ss.cast(image, $Engine_Html5_Web_WebImage).image, x - image.get_center().get_x(), y - image.get_center().get_y());
		},
		drawImage$6: function(image, x, y, width, height) {
			switch (this.$currentSettings().get_drawingEffects()) {
				case 1: {
					this.canvasInformation.context.scale(-1, 1);
					break;
				}
				case 2: {
					this.canvasInformation.context.scale(1, -1);
					break;
				}
			}
			this.canvasInformation.context.drawImage(ss.cast(image, $Engine_Html5_Web_WebImage).image, x, y, width, height);
		},
		drawImage$7: function(image, x, y, angle, centerX, centerY) {
			this.save();
			this.canvasInformation.context.translate(centerX, centerY);
			this.canvasInformation.context.rotate(angle);
			switch (this.$currentSettings().get_drawingEffects()) {
				case 1: {
					this.canvasInformation.context.scale(-1, 1);
					break;
				}
				case 2: {
					this.canvasInformation.context.scale(1, -1);
					break;
				}
			}
			this.canvasInformation.context.drawImage(ss.cast(image, $Engine_Html5_Web_WebImage).image, x - centerX, y - centerY);
			this.restore();
		},
		drawImage$5: function(image, x, y, angle, center) {
			this.drawImage$7(image, x, y, angle, center.get_x(), center.get_y());
		},
		drawImage$3: function(image, point, angle, center) {
			this.drawImage$7(image, point.get_x(), point.get_y(), angle, center.get_x(), center.get_y());
		},
		drawString: function(fontName, text, x, y) {
			this.canvasInformation.context.fillText(text, x, y);
		},
		drawString$1: function(fontName, text, x, y, color) {
			this.canvasInformation.context.save();
			this.canvasInformation.context.fillStyle = color.toString();
			this.canvasInformation.context.fillText(text, x, y);
			this.canvasInformation.context.restore();
		},
		clear: function() {
			this.canvasInformation.context.clearRect(0, 0, this.$width, this.$height);
		},
		measureString: function(text) {
			return this.canvasInformation.context.measureText(text).width;
		},
		drawRectangle: function(color, x, y, width, height) {
			this.canvasInformation.context.save();
			this.canvasInformation.context.fillStyle = ss.formatString('rgba({0},{1},{2},{3})', color.get_r(), color.get_g(), color.get_b(), color.get_a() / 255);
			this.canvasInformation.context.fillRect(x, y, width, height);
			this.canvasInformation.context.restore();
		},
		setDrawingEffects: function(drawingEffects) {
			this.$currentSettings().set_drawingEffects(drawingEffects);
		}
	}, null, [Engine.Interfaces.ILayer]);
	ss.initClass($Engine_Html5_Web_WebLayout, {
		get_uiManager: function() {
			return this.$1$UIManagerField;
		},
		set_uiManager: function(value) {
			this.$1$UIManagerField = value;
		},
		get_layoutView: function() {
			return this.$1$LayoutViewField;
		},
		set_layoutView: function(value) {
			this.$1$LayoutViewField = value;
		},
		get_screen: function() {
			return this.$1$ScreenField;
		},
		set_screen: function(value) {
			this.$1$ScreenField = value;
		},
		get_layoutPosition: function() {
			return this.$1$LayoutPositionField;
		},
		set_layoutPosition: function(value) {
			this.$1$LayoutPositionField = value;
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
		},
		get_screenOrientation: function() {
			return this.$1$ScreenOrientationField;
		},
		set_screenOrientation: function(value) {
			this.$1$ScreenOrientationField = value;
		},
		get_alwaysTick: function() {
			return this.$1$AlwaysTickField;
		},
		set_alwaysTick: function(value) {
			this.$1$AlwaysTickField = value;
		},
		get_element: function() {
			return this.$1$ElementField;
		},
		set_element: function(value) {
			this.$1$ElementField = value;
		},
		get_active: function() {
			return this.$active;
		},
		set_active: function(value) {
			if (value) {
				if (this.get_screen().get_oneLayoutAtATime()) {
					var $t1 = ss.getEnumerator(this.get_screen().get_layouts());
					try {
						while ($t1.moveNext()) {
							var layout = $t1.current();
							layout.set_active(false);
						}
					}
					finally {
						$t1.dispose();
					}
					this.$active = true;
				}
				else {
					this.$active = true;
				}
			}
			else {
				this.$active = false;
			}
		},
		offset: function(x, y) {
			this.get_layoutPosition().get_offset().set_x(x);
			this.get_layoutPosition().get_offset().set_y(y);
			return this;
		},
		forceScreenOrientation: function(orientation) {
			this.set_screenOrientation(orientation);
		},
		leftOf: function(layout) {
			this.get_layoutPosition().set_right(layout);
			layout.get_layoutPosition().set_left(this);
			return this;
		},
		rightOf: function(layout) {
			this.get_layoutPosition().set_left(layout);
			layout.get_layoutPosition().set_right(this);
			return this;
		},
		above: function(layout) {
			this.get_layoutPosition().set_bottom(layout);
			layout.get_layoutPosition().set_top(this);
			return this;
		},
		below: function(layout) {
			this.get_layoutPosition().set_top(layout);
			layout.get_layoutPosition().set_bottom(this);
			return this;
		},
		makeActive: function() {
			this.set_active(true);
			this.get_screen().changeLayout$1(this);
			return this;
		},
		forceTick: function() {
			this.set_alwaysTick(true);
			return this;
		},
		setScreenOrientation: function(orientation) {
			this.set_screenOrientation(orientation);
			return this;
		},
		processTouchEvent: function(touchType, x, y) {
			if (this.get_uiManager().processTouchEvent(touchType, x, y)) {
				return;
			}
			this.get_layoutView().get_touchManager().processTouchEvent(touchType, x, y);
		}
	}, null, [Engine.Interfaces.ILayout]);
	ss.initClass($Engine_Html5_Web_WebRenderer, {
		createLayer: function(width, height, layout) {
			return new $Engine_Html5_Web_WebLayer(this, width, height, layout);
		},
		addLayer: function(layer) {
			var webLayout = ss.cast(layer.get_layout(), $Engine_Html5_Web_WebLayout);
			webLayout.get_element().appendChild(ss.cast(layer, $Engine_Html5_Web_WebLayer).canvasInformation.canvas);
			ss.add(this.$layers, ss.cast(layer, $Engine_Html5_Web_WebLayer));
		},
		getImage: function(imageName) {
			return this.$imageCache.getImage(imageName);
		},
		get_clickManager: function() {
			return this.$1$ClickManagerField;
		},
		set_clickManager: function(value) {
			this.$1$ClickManagerField = value;
		},
		createImage: function(imageName, imagePath, center) {
			this.$numberOfImages++;
			this.$imageCache.createImage(imageName, imagePath, center, ss.mkdel(this, this.$imagesReady));
		},
		createFont: function(fontName, fontPath) {
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
	ss.initClass($Engine_Html5_Web_WebScreen, {
		get_element: function() {
			return this.$1$ElementField;
		},
		set_element: function(value) {
			this.$1$ElementField = value;
		},
		destroy: function() {
			var divElement = this.get_element();
			document.body.removeChild(divElement);
			var $t1 = ss.getEnumerator(this.get_layouts());
			try {
				while ($t1.moveNext()) {
					var layout = $t1.current();
					var el = layout.get_element();
					while (ss.isValue(el.firstChild)) {
						el.removeChild(el.firstChild);
					}
				}
			}
			finally {
				$t1.dispose();
			}
			var $t2 = ss.getEnumerator(this.get_layouts());
			try {
				while ($t2.moveNext()) {
					var layout1 = $t2.current();
					layout1.get_layoutView().destroy();
				}
			}
			finally {
				$t2.dispose();
			}
		},
		createLayout: function(width, height) {
			var xnaLayout = new $Engine_Html5_Web_WebLayout(this, width, height);
			ss.add(this.get_webLayouts(), xnaLayout);
			this.get_element().appendChild(xnaLayout.get_element());
			return xnaLayout;
		},
		get_webLayouts: function() {
			return this.$1$WebLayoutsField;
		},
		set_webLayouts: function(value) {
			this.$1$WebLayoutsField = value;
		},
		get_layouts: function() {
			return this.get_webLayouts();
		},
		get_oneLayoutAtATime: function() {
			return this.$1$OneLayoutAtATimeField;
		},
		set_oneLayoutAtATime: function(value) {
			this.$1$OneLayoutAtATimeField = value;
		},
		get_screenManager: function() {
			return this.$1$ScreenManagerField;
		},
		set_screenManager: function(value) {
			this.$1$ScreenManagerField = value;
		},
		get_currentLayout: function() {
			var $t1 = this.get_webLayouts();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var xnaLayout = $t1[$t2];
				if (xnaLayout.get_active()) {
					return xnaLayout;
				}
			}
			return null;
		},
		init: function() {
			document.body.insertBefore(this.get_element(), ss.cast(this.get_screenManager(), $Engine_Html5_Web_WebScreenManager).get_renderer().get_clickManager());
			var $t1 = ss.getEnumerator(this.get_layouts());
			try {
				while ($t1.moveNext()) {
					var layout = $t1.current();
					layout.get_layoutView().initLayoutView();
				}
			}
			finally {
				$t1.dispose();
			}
			var $t2 = ss.getEnumerator(this.get_layouts());
			try {
				while ($t2.moveNext()) {
					var layout1 = $t2.current();
					layout1.get_layoutView().initLayoutView();
				}
			}
			finally {
				$t2.dispose();
			}
		},
		draw: function(elapsedGameTime) {
			if (this.get_oneLayoutAtATime()) {
				this.get_currentLayout().get_layoutView().render(elapsedGameTime);
			}
			else {
				var $t1 = this.get_webLayouts();
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var xnaLayout = $t1[$t2];
					xnaLayout.get_layoutView().render(elapsedGameTime);
				}
			}
		},
		tick: function(elapsedGameTime) {
			if (this.get_oneLayoutAtATime()) {
				this.get_currentLayout().get_layoutView().tickLayoutView(elapsedGameTime);
				var $t1 = this.get_webLayouts();
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var xnaLayout = $t1[$t2];
					if (xnaLayout.get_alwaysTick() && !ss.referenceEquals(this.get_currentLayout(), xnaLayout)) {
						xnaLayout.get_layoutView().tickLayoutView(elapsedGameTime);
					}
				}
			}
			else {
				var $t3 = this.get_webLayouts();
				for (var $t4 = 0; $t4 < $t3.length; $t4++) {
					var xnaLayout1 = $t3[$t4];
					xnaLayout1.get_layoutView().tickLayoutView(elapsedGameTime);
				}
			}
		},
		getLayoutSize: function() {
			if (this.get_oneLayoutAtATime()) {
				return new Engine.Size.$ctor1(this.get_currentLayout().get_width(), this.get_currentLayout().get_height());
			}
			else {
				var size = new Engine.Size();
				var $t1 = ss.getEnumerator(this.get_layouts());
				try {
					while ($t1.moveNext()) {
						var layout = $t1.current();
						var rectangle = layout.get_layoutPosition().get_location();
						if (size.get_width() < rectangle.get_x() + rectangle.get_width()) {
							size.set_width(rectangle.get_x() + rectangle.get_width());
						}
						if (size.get_height() < rectangle.get_y() + rectangle.get_height()) {
							size.set_height(rectangle.get_y() + rectangle.get_height());
						}
					}
				}
				finally {
					$t1.dispose();
				}
				return size;
			}
		},
		changeLayout: function(direction) {
			if (this.get_oneLayoutAtATime()) {
				switch (direction) {
					case 0: {
						if (ss.isValue(this.get_currentLayout().get_layoutPosition().get_left())) {
							this.changeLayout$1(this.get_currentLayout().get_layoutPosition().get_left());
						}
						break;
					}
					case 1: {
						if (ss.isValue(this.get_currentLayout().get_layoutPosition().get_right())) {
							this.changeLayout$1(this.get_currentLayout().get_layoutPosition().get_right());
						}
						break;
					}
					case 2: {
						if (ss.isValue(this.get_currentLayout().get_layoutPosition().get_top())) {
							this.changeLayout$1(this.get_currentLayout().get_layoutPosition().get_top());
						}
						break;
					}
					case 3: {
						if (ss.isValue(this.get_currentLayout().get_layoutPosition().get_bottom())) {
							this.changeLayout$1(this.get_currentLayout().get_layoutPosition().get_bottom());
						}
						break;
					}
					default: {
						throw new ss.ArgumentOutOfRangeException('direction');
					}
				}
			}
		},
		changeLayout$1: function(changeTo) {
			changeTo.set_active(true);
		},
		touchEvent: function(touchType, x, y) {
			if (this.get_oneLayoutAtATime()) {
				this.get_currentLayout().get_layoutView().get_touchManager().processTouchEvent(touchType, x, y);
			}
			else {
				var $t1 = this.get_webLayouts();
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var xnaLayout = $t1[$t2];
					var rectangle = xnaLayout.get_layoutPosition().get_location();
					if (rectangle.isInside(new Engine.Point(x, y))) {
						xnaLayout.get_layoutView().get_touchManager().processTouchEvent(touchType, x - rectangle.get_x(), y - rectangle.get_y());
					}
				}
			}
		}
	}, null, [Engine.Interfaces.IScreen]);
	ss.initClass($Engine_Html5_Web_WebScreenManager, {
		get_webScreens: function() {
			return this.$1$WebScreensField;
		},
		set_webScreens: function(value) {
			this.$1$WebScreensField = value;
		},
		get_renderer: function() {
			return this.$1$RendererField;
		},
		set_renderer: function(value) {
			this.$1$RendererField = value;
		},
		get_client: function() {
			return this.$1$ClientField;
		},
		set_client: function(value) {
			this.$1$ClientField = value;
		},
		get_oneLayoutAtATime: function() {
			return this.$1$OneLayoutAtATimeField;
		},
		set_oneLayoutAtATime: function(value) {
			this.$1$OneLayoutAtATimeField = value;
		},
		createScreen: function() {
			var webScreen = new $Engine_Html5_Web_WebScreen(this);
			ss.add(this.get_webScreens(), webScreen);
			return webScreen;
		},
		get_currentScreen: function() {
			return this.$1$CurrentScreenField;
		},
		set_currentScreen: function(value) {
			this.$1$CurrentScreenField = value;
		},
		get_screens: function() {
			return this.get_webScreens();
		},
		draw: function(elapsedGameTime) {
			this.get_renderer().beginRender();
			this.get_currentScreen().draw(elapsedGameTime);
			this.get_renderer().endRender();
		},
		touchEvent: function(touchType, x, y) {
			this.get_currentScreen().touchEvent(touchType, x, y);
		},
		timeout: function(callback, ms) {
			var cur = new ss.TimeSpan(this.$lastElapsedTime.ticks + (new ss.TimeSpan(((((0 * 24 + 0) * 60 + 0) * 60 + 0) * 1000 + ms) * 10000)).ticks);
			ss.add(this.$timeouts, { item1: callback, item2: cur });
		},
		init: function() {
			this.get_currentScreen().init();
		},
		tick: function(elapsedGameTime) {
			this.$lastElapsedTime = elapsedGameTime;
			for (var i = this.$timeouts.length - 1; i >= 0; i--) {
				if (this.$timeouts[i].item2.ticks < elapsedGameTime.ticks) {
					this.$timeouts[i].item1();
					ss.removeAt(this.$timeouts, i);
				}
			}
			this.get_currentScreen().tick(elapsedGameTime);
		},
		getScreenSize: function() {
			return this.get_currentScreen().getLayoutSize();
		},
		changeScreen: function(screen) {
			if (ss.isValue(this.get_currentScreen())) {
				this.get_currentScreen().destroy();
			}
			this.set_currentScreen(screen);
			var $t1 = ss.getEnumerator(this.get_currentScreen().get_layouts());
			try {
				while ($t1.moveNext()) {
					var layout = $t1.current();
					layout.get_element().style.position = 'absolute';
					layout.get_element().style.left = layout.get_layoutPosition().get_location().get_x() + 'px';
					layout.get_element().style.top = layout.get_layoutPosition().get_location().get_y() + 'px';
					layout.get_element().style.width = layout.get_layoutPosition().get_location().get_width() + 'px';
					layout.get_element().style.height = layout.get_layoutPosition().get_location().get_height() + 'px';
				}
			}
			finally {
				$t1.dispose();
			}
			this.init();
		}
	}, null, [Engine.Interfaces.IScreenManager]);
	ss.initClass($Engine_Html5_Web_WebUIManager, {
		get_layout: function() {
			return this.$1$LayoutField;
		},
		set_layout: function(value) {
			this.$1$LayoutField = value;
		},
		get_textBoxes: function() {
			return this.$1$TextBoxesField;
		},
		set_textBoxes: function(value) {
			this.$1$TextBoxesField = value;
		},
		processTouchEvent: function(touchType, x, y) {
			var $t1 = ss.getEnumerator(this.get_layout().get_screen().get_layouts());
			try {
				while ($t1.moveNext()) {
					var layout = $t1.current();
					layout.get_uiManager().clearFocus();
				}
			}
			finally {
				$t1.dispose();
			}
			var $t2 = this.get_textBoxes();
			for (var $t3 = 0; $t3 < $t2.length; $t3++) {
				var uiTextBox = $t2[$t3];
				if (uiTextBox.get_rectangle().isInside$1(x, y)) {
					uiTextBox.focus();
					return true;
				}
			}
			return false;
		},
		createTextBox: function(rectangle, layoutView, onTextChange) {
			var webUiTextBox = new $Engine_Html5_Web_WebUITextBox(this, rectangle, layoutView, onTextChange);
			ss.add(this.get_textBoxes(), webUiTextBox);
			return webUiTextBox;
		},
		clearFocus: function() {
			var $t1 = this.get_textBoxes();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var uiTextBox = $t1[$t2];
				uiTextBox.blur();
			}
		}
	}, null, [Engine.Interfaces.IUIManager]);
	ss.initClass($Engine_Html5_Web_WebUITextBox, {
		get_focused: function() {
			return this.$1$FocusedField;
		},
		set_focused: function(value) {
			this.$1$FocusedField = value;
		},
		get_uiManager: function() {
			return this.$1$UIManagerField;
		},
		set_uiManager: function(value) {
			this.$1$UIManagerField = value;
		},
		get_text: function() {
			return this.$1$TextField;
		},
		set_text: function(value) {
			this.$1$TextField = value;
		},
		get_rectangle: function() {
			return this.$1$RectangleField;
		},
		set_rectangle: function(value) {
			this.$1$RectangleField = value;
		},
		get_layoutView: function() {
			return this.$1$LayoutViewField;
		},
		set_layoutView: function(value) {
			this.$1$LayoutViewField = value;
		},
		get_onTextChange: function() {
			return this.$1$OnTextChangeField;
		},
		set_onTextChange: function(value) {
			this.$1$OnTextChangeField = value;
		},
		focus: function() {
			this.set_focused(true);
			this.get_uiManager().get_layout().get_screen().get_screenManager().get_client().get_clientSettings().get_getKeyboardInput()(ss.mkdel(this, function(text) {
				this.set_text(text);
			}));
			//            var content = j.Result;
		},
		draw: function() {
			//
			//                        Draw text box draw blinking cursor when focused
			//
			//                        take in the font u want
			//
			//                        on focus if applicable, open up the keyboard and move the whole layout up to y-height-idk10?
			//
			//                        Capture all keyboard input, if any textbox is focused, pass it along, update OnTextChange
		},
		blur: function() {
			this.set_focused(false);
		}
	}, null, [Engine.Interfaces.IUITextBox]);
	ss.initClass($Engine_Html5_Web_Window, {});
	ss.initClass($Engine_Xna_Network_$SocketError, {
		get_exception: function() {
			return this.$1$ExceptionField;
		},
		set_exception: function(value) {
			this.$1$ExceptionField = value;
		},
		get_message: function() {
			return this.$1$MessageField;
		},
		set_message: function(value) {
			this.$1$MessageField = value;
		}
	}, null, [Engine.ISocketError]);
	$Engine_Html5_Web_CanvasInformation.$blackPixel = null;
})();
