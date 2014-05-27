(function() {
	'use strict';
	global.Engine = global.Engine || {};
	global.Engine.Interfaces = global.Engine.Interfaces || {};
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Color
	var $Engine_Color = function(r, g, b, a) {
		this.$1$RField = 0;
		this.$1$GField = 0;
		this.$1$BField = 0;
		this.$1$AField = 0;
		this.set_r(r);
		this.set_g(g);
		this.set_b(b);
		this.set_a(a);
	};
	$Engine_Color.__typeName = 'Engine.Color';
	global.Engine.Color = $Engine_Color;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.ISocket
	var $Engine_ISocket = function() {
	};
	$Engine_ISocket.__typeName = 'Engine.ISocket';
	global.Engine.ISocket = $Engine_ISocket;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.ISocketError
	var $Engine_ISocketError = function() {
	};
	$Engine_ISocketError.__typeName = 'Engine.ISocketError';
	global.Engine.ISocketError = $Engine_ISocketError;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.ISocketManager
	var $Engine_ISocketManager = function() {
	};
	$Engine_ISocketManager.__typeName = 'Engine.ISocketManager';
	global.Engine.ISocketManager = $Engine_ISocketManager;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.LayoutPosition
	var $Engine_LayoutPosition = function(size) {
		this.$1$SizeField = null;
		this.$1$OffsetField = null;
		this.$1$LeftField = null;
		this.$1$RightField = null;
		this.$1$TopField = null;
		this.$1$BottomField = null;
		this.set_offset(new $Engine_Point(0, 0));
		this.set_size(size);
	};
	$Engine_LayoutPosition.__typeName = 'Engine.LayoutPosition';
	global.Engine.LayoutPosition = $Engine_LayoutPosition;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Point
	var $Engine_Point = function(x, y) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.set_x(x);
		this.set_y(y);
	};
	$Engine_Point.__typeName = 'Engine.Point';
	global.Engine.Point = $Engine_Point;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.PointF
	var $Engine_PointF = function(x, y) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.set_x(x);
		this.set_y(y);
	};
	$Engine_PointF.__typeName = 'Engine.PointF';
	global.Engine.PointF = $Engine_PointF;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Rectangle
	var $Engine_Rectangle = function() {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
	};
	$Engine_Rectangle.__typeName = 'Engine.Rectangle';
	$Engine_Rectangle.$ctor4 = function(x, y, width, height) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.set_x(x);
		this.set_y(y);
		this.set_width(width);
		this.set_height(height);
	};
	$Engine_Rectangle.$ctor3 = function(x, y, size) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.set_x(x);
		this.set_y(y);
		this.set_width(size.get_width());
		this.set_height(size.get_height());
	};
	$Engine_Rectangle.$ctor2 = function(position, width, height) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.set_x(position.get_x());
		this.set_y(position.get_y());
		this.set_width(width);
		this.set_height(height);
	};
	$Engine_Rectangle.$ctor1 = function(position, size) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.set_x(position.get_x());
		this.set_y(position.get_y());
		this.set_width(size.get_width());
		this.set_height(size.get_height());
	};
	global.Engine.Rectangle = $Engine_Rectangle;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.ScreenOrientation
	var $Engine_ScreenOrientation = function() {
	};
	$Engine_ScreenOrientation.__typeName = 'Engine.ScreenOrientation';
	global.Engine.ScreenOrientation = $Engine_ScreenOrientation;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Size
	var $Engine_Size = function() {
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
	};
	$Engine_Size.__typeName = 'Engine.Size';
	$Engine_Size.$ctor1 = function(width, height) {
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.set_width(width);
		this.set_height(height);
	};
	global.Engine.Size = $Engine_Size;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.TouchManager
	var $Engine_TouchManager = function() {
		this.$1$touchRectsField = null;
		this.set_touchRects([]);
	};
	$Engine_TouchManager.__typeName = 'Engine.TouchManager';
	global.Engine.TouchManager = $Engine_TouchManager;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.TouchRect
	var $Engine_TouchRect = function(rect, eventToTrigger, state) {
		$Engine_TouchRect.$ctor1.call(this, rect.get_x(), rect.get_y(), rect.get_width(), rect.get_height(), eventToTrigger, state);
	};
	$Engine_TouchRect.__typeName = 'Engine.TouchRect';
	$Engine_TouchRect.$ctor1 = function(x, y, width, height, eventToTrigger, state) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.$1$EventToTriggerField = null;
		this.$1$StateField = null;
		this.set_x(x);
		this.set_y(y);
		this.set_width(width);
		this.set_height(height);
		this.set_eventToTrigger(eventToTrigger);
		this.set_state(state);
	};
	global.Engine.TouchRect = $Engine_TouchRect;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.TouchType
	var $Engine_TouchType = function() {
	};
	$Engine_TouchType.__typeName = 'Engine.TouchType';
	global.Engine.TouchType = $Engine_TouchType;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.Direction
	var $Engine_Interfaces_Direction = function() {
	};
	$Engine_Interfaces_Direction.__typeName = 'Engine.Interfaces.Direction';
	global.Engine.Interfaces.Direction = $Engine_Interfaces_Direction;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.DrawingEffects
	var $Engine_Interfaces_DrawingEffects = function() {
	};
	$Engine_Interfaces_DrawingEffects.__typeName = 'Engine.Interfaces.DrawingEffects';
	global.Engine.Interfaces.DrawingEffects = $Engine_Interfaces_DrawingEffects;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IClient
	var $Engine_Interfaces_IClient = function() {
	};
	$Engine_Interfaces_IClient.__typeName = 'Engine.Interfaces.IClient';
	global.Engine.Interfaces.IClient = $Engine_Interfaces_IClient;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IClientSettings
	var $Engine_Interfaces_IClientSettings = function() {
	};
	$Engine_Interfaces_IClientSettings.__typeName = 'Engine.Interfaces.IClientSettings';
	global.Engine.Interfaces.IClientSettings = $Engine_Interfaces_IClientSettings;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IGame
	var $Engine_Interfaces_IGame = function() {
	};
	$Engine_Interfaces_IGame.__typeName = 'Engine.Interfaces.IGame';
	global.Engine.Interfaces.IGame = $Engine_Interfaces_IGame;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IImage
	var $Engine_Interfaces_IImage = function() {
	};
	$Engine_Interfaces_IImage.__typeName = 'Engine.Interfaces.IImage';
	global.Engine.Interfaces.IImage = $Engine_Interfaces_IImage;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.ILayer
	var $Engine_Interfaces_ILayer = function() {
	};
	$Engine_Interfaces_ILayer.__typeName = 'Engine.Interfaces.ILayer';
	global.Engine.Interfaces.ILayer = $Engine_Interfaces_ILayer;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.ILayout
	var $Engine_Interfaces_ILayout = function() {
	};
	$Engine_Interfaces_ILayout.__typeName = 'Engine.Interfaces.ILayout';
	global.Engine.Interfaces.ILayout = $Engine_Interfaces_ILayout;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.ILayoutView
	var $Engine_Interfaces_ILayoutView = function() {
	};
	$Engine_Interfaces_ILayoutView.__typeName = 'Engine.Interfaces.ILayoutView';
	global.Engine.Interfaces.ILayoutView = $Engine_Interfaces_ILayoutView;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IRenderer
	var $Engine_Interfaces_IRenderer = function() {
	};
	$Engine_Interfaces_IRenderer.__typeName = 'Engine.Interfaces.IRenderer';
	global.Engine.Interfaces.IRenderer = $Engine_Interfaces_IRenderer;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IScreen
	var $Engine_Interfaces_IScreen = function() {
	};
	$Engine_Interfaces_IScreen.__typeName = 'Engine.Interfaces.IScreen';
	global.Engine.Interfaces.IScreen = $Engine_Interfaces_IScreen;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IScreenManager
	var $Engine_Interfaces_IScreenManager = function() {
	};
	$Engine_Interfaces_IScreenManager.__typeName = 'Engine.Interfaces.IScreenManager';
	global.Engine.Interfaces.IScreenManager = $Engine_Interfaces_IScreenManager;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IScreenView
	var $Engine_Interfaces_IScreenView = function() {
	};
	$Engine_Interfaces_IScreenView.__typeName = 'Engine.Interfaces.IScreenView';
	global.Engine.Interfaces.IScreenView = $Engine_Interfaces_IScreenView;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.ITouchManager
	var $Engine_Interfaces_ITouchManager = function() {
	};
	$Engine_Interfaces_ITouchManager.__typeName = 'Engine.Interfaces.ITouchManager';
	global.Engine.Interfaces.ITouchManager = $Engine_Interfaces_ITouchManager;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IUIManager
	var $Engine_Interfaces_IUIManager = function() {
	};
	$Engine_Interfaces_IUIManager.__typeName = 'Engine.Interfaces.IUIManager';
	global.Engine.Interfaces.IUIManager = $Engine_Interfaces_IUIManager;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.IUITextBox
	var $Engine_Interfaces_IUITextBox = function() {
	};
	$Engine_Interfaces_IUITextBox.__typeName = 'Engine.Interfaces.IUITextBox';
	global.Engine.Interfaces.IUITextBox = $Engine_Interfaces_IUITextBox;
	ss.initClass($Engine_Color, {
		get_r: function() {
			return this.$1$RField;
		},
		set_r: function(value) {
			this.$1$RField = value;
		},
		get_g: function() {
			return this.$1$GField;
		},
		set_g: function(value) {
			this.$1$GField = value;
		},
		get_b: function() {
			return this.$1$BField;
		},
		set_b: function(value) {
			this.$1$BField = value;
		},
		get_a: function() {
			return this.$1$AField;
		},
		set_a: function(value) {
			this.$1$AField = value;
		},
		toString: function() {
			return ss.formatString('rgba({0},{1},{2},{3})', this.get_r(), this.get_g(), this.get_b(), this.get_a());
		}
	});
	ss.initInterface($Engine_ISocket, { get_onError: null, set_onError: null, get_onClose: null, set_onClose: null, get_onConnect: null, set_onConnect: null, connect: null, on: null, emit: null });
	ss.initInterface($Engine_ISocketError, { get_exception: null, set_exception: null, get_message: null, set_message: null });
	ss.initInterface($Engine_ISocketManager, { create: null });
	ss.initClass($Engine_LayoutPosition, {
		get_size: function() {
			return this.$1$SizeField;
		},
		set_size: function(value) {
			this.$1$SizeField = value;
		},
		get_offset: function() {
			return this.$1$OffsetField;
		},
		set_offset: function(value) {
			this.$1$OffsetField = value;
		},
		get_left: function() {
			return this.$1$LeftField;
		},
		set_left: function(value) {
			this.$1$LeftField = value;
		},
		get_right: function() {
			return this.$1$RightField;
		},
		set_right: function(value) {
			this.$1$RightField = value;
		},
		get_top: function() {
			return this.$1$TopField;
		},
		set_top: function(value) {
			this.$1$TopField = value;
		},
		get_bottom: function() {
			return this.$1$BottomField;
		},
		set_bottom: function(value) {
			this.$1$BottomField = value;
		},
		get_location: function() {
			var x = (ss.isValue(this.get_left()) ? (this.get_left().get_layoutPosition().get_location().get_x() + this.get_left().get_layoutPosition().get_location().get_width()) : 0) + this.get_offset().get_x();
			var y = (ss.isValue(this.get_top()) ? (this.get_top().get_layoutPosition().get_location().get_y() + this.get_top().get_layoutPosition().get_location().get_height()) : 0) + this.get_offset().get_y();
			return new $Engine_Rectangle.$ctor3(x, y, this.get_size());
		}
	});
	ss.initClass($Engine_Point, {
		get_x: function() {
			return this.$1$XField;
		},
		set_x: function(value) {
			this.$1$XField = value;
		},
		get_y: function() {
			return this.$1$YField;
		},
		set_y: function(value) {
			this.$1$YField = value;
		}
	});
	ss.initClass($Engine_PointF, {
		get_x: function() {
			return this.$1$XField;
		},
		set_x: function(value) {
			this.$1$XField = value;
		},
		get_y: function() {
			return this.$1$YField;
		},
		set_y: function(value) {
			this.$1$YField = value;
		}
	});
	ss.initClass($Engine_Rectangle, {
		get_x: function() {
			return this.$1$XField;
		},
		set_x: function(value) {
			this.$1$XField = value;
		},
		get_y: function() {
			return this.$1$YField;
		},
		set_y: function(value) {
			this.$1$YField = value;
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
		isInside: function(point) {
			return this.isInside$1(point.get_x(), point.get_y());
		},
		isInside$1: function(x, y) {
			return this.get_x() < x && this.get_y() < y && this.get_x() + this.get_width() > x && this.get_y() + this.get_height() > y;
		}
	});
	$Engine_Rectangle.$ctor4.prototype = $Engine_Rectangle.$ctor3.prototype = $Engine_Rectangle.$ctor2.prototype = $Engine_Rectangle.$ctor1.prototype = $Engine_Rectangle.prototype;
	ss.initEnum($Engine_ScreenOrientation, { vertical: 0, horizontal: 1 });
	ss.initClass($Engine_Size, {
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
	});
	$Engine_Size.$ctor1.prototype = $Engine_Size.prototype;
	ss.initInterface($Engine_Interfaces_ITouchManager, { init: null, pushClickRect: null, removeClickRect: null, processTouchEvent: null });
	ss.initClass($Engine_TouchManager, {
		get_touchRects: function() {
			return this.$1$touchRectsField;
		},
		set_touchRects: function(value) {
			this.$1$touchRectsField = value;
		},
		init: function() {
		},
		pushClickRect: function(touchRect) {
			ss.add(this.get_touchRects(), touchRect);
			return touchRect;
		},
		removeClickRect: function(touchRect) {
			ss.remove(this.get_touchRects(), touchRect);
		},
		processTouchEvent: function(touchType, x, y) {
			switch (touchType) {
				case 0: {
					var $t1 = Array.prototype.slice.call(this.get_touchRects());
					for (var $t2 = 0; $t2 < $t1.length; $t2++) {
						var clickRect = $t1[$t2];
						clickRect.get_eventToTrigger()(touchType, clickRect, x - clickRect.get_x(), y - clickRect.get_y(), clickRect.collides(x, y));
						//ignore result for mouseup
					}
					break;
				}
				case 1:
				case 2: {
					var $t3 = Array.prototype.slice.call(this.get_touchRects());
					for (var $t4 = 0; $t4 < $t3.length; $t4++) {
						var clickRect1 = $t3[$t4];
						if (!clickRect1.collides(x, y)) {
							continue;
						}
						if (clickRect1.get_eventToTrigger()(touchType, clickRect1, x - clickRect1.get_x(), y - clickRect1.get_y(), true)) {
							break;
						}
					}
					break;
				}
			}
		}
	}, null, [$Engine_Interfaces_ITouchManager]);
	ss.initClass($Engine_TouchRect, {
		get_x: function() {
			return this.$1$XField;
		},
		set_x: function(value) {
			this.$1$XField = value;
		},
		get_y: function() {
			return this.$1$YField;
		},
		set_y: function(value) {
			this.$1$YField = value;
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
		get_eventToTrigger: function() {
			return this.$1$EventToTriggerField;
		},
		set_eventToTrigger: function(value) {
			this.$1$EventToTriggerField = value;
		},
		get_state: function() {
			return this.$1$StateField;
		},
		set_state: function(value) {
			this.$1$StateField = value;
		},
		collides: function(x, y) {
			return this.get_x() < x && this.get_x() + this.get_width() > x && this.get_y() < y && this.get_y() + this.get_height() > y;
		}
	});
	$Engine_TouchRect.$ctor1.prototype = $Engine_TouchRect.prototype;
	ss.initEnum($Engine_TouchType, { touchUp: 0, touchDown: 1, touchMove: 2 });
	ss.initEnum($Engine_Interfaces_Direction, { left: 0, right: 1, up: 2, down: 3 });
	ss.initEnum($Engine_Interfaces_DrawingEffects, { none: 0, flipHorizontally: 1, flipVertically: 2 });
	ss.initInterface($Engine_Interfaces_IClient, { get_game: null, set_game: null, get_screenManager: null, set_screenManager: null, get_socketManager: null, set_socketManager: null, get_clientSettings: null, set_clientSettings: null, loadImages: null, init: null, draw: null, touchEvent: null, tick: null, timeout: null, showKeyboard: null });
	ss.initInterface($Engine_Interfaces_IClientSettings, { get_oneLayoutAtATime: null, set_oneLayoutAtATime: null, get_getKeyboardInput: null, set_getKeyboardInput: null });
	ss.initInterface($Engine_Interfaces_IGame, { get_client: null, initScreens: null, initSocketManager: null, loadAssets: null, beforeTick: null, afterTick: null, beforeDraw: null, afterDraw: null, loadFonts: null });
	ss.initInterface($Engine_Interfaces_IImage, { get_center: null, get_width: null, get_height: null });
	ss.initInterface($Engine_Interfaces_ILayer, { get_layout: null, set_layout: null, save: null, restore: null, translate: null, translate$1: null, drawImage: null, drawImage$2: null, drawImage$1: null, drawImage$4: null, drawImage$6: null, drawImage$7: null, drawImage$5: null, drawImage$3: null, drawString: null, drawString$1: null, clear: null, measureString: null, drawRectangle: null, setDrawingEffects: null, begin: null, end: null });
	ss.initInterface($Engine_Interfaces_ILayout, { get_uiManager: null, set_uiManager: null, get_layoutView: null, set_layoutView: null, get_screen: null, set_screen: null, get_layoutPosition: null, set_layoutPosition: null, get_width: null, set_width: null, get_height: null, set_height: null, get_active: null, set_active: null, get_alwaysTick: null, set_alwaysTick: null, get_screenOrientation: null, set_screenOrientation: null, offset: null, leftOf: null, rightOf: null, above: null, below: null, makeActive: null, forceTick: null, setScreenOrientation: null, processTouchEvent: null });
	ss.initInterface($Engine_Interfaces_ILayoutView, { initLayoutView: null, tickLayoutView: null, get_touchManager: null, get_layout: null, set_layout: null, render: null, destroy: null });
	ss.initInterface($Engine_Interfaces_IRenderer, { createLayer: null, addLayer: null, getImage: null, createImage: null, createFont: null });
	ss.initInterface($Engine_Interfaces_IScreen, { createLayout: null, get_layouts: null, get_oneLayoutAtATime: null, set_oneLayoutAtATime: null, get_screenManager: null, set_screenManager: null, init: null, draw: null, touchEvent: null, tick: null, getLayoutSize: null, changeLayout: null, changeLayout$1: null, destroy: null });
	ss.initInterface($Engine_Interfaces_IScreenManager, { get_client: null, set_client: null, get_currentScreen: null, set_currentScreen: null, createScreen: null, get_screens: null, draw: null, touchEvent: null, tick: null, getScreenSize: null, changeScreen: null, timeout: null, init: null });
	ss.initInterface($Engine_Interfaces_IScreenView, { get_layoutView: null, set_layoutView: null, get_width: null, set_width: null, get_height: null, set_height: null });
	ss.initInterface($Engine_Interfaces_IUIManager, { get_layout: null, set_layout: null, processTouchEvent: null, createTextBox: null, get_textBoxes: null, set_textBoxes: null, clearFocus: null });
	ss.initInterface($Engine_Interfaces_IUITextBox, { focus: null, get_uiManager: null, set_uiManager: null, get_rectangle: null, set_rectangle: null, get_layoutView: null, set_layoutView: null, get_onTextChange: null, set_onTextChange: null, get_focused: null, set_focused: null, blur: null });
	ss.setMetadata($Engine_Interfaces_DrawingEffects, { enumFlags: true });
})();
