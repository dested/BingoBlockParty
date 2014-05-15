(function() {
	'use strict';
	global.Engine = global.Engine || {};
	global.Engine.Interfaces = global.Engine.Interfaces || {};
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
	// Engine.Interfaces.IRenderer
	var $Engine_Interfaces_IRenderer = function() {
	};
	$Engine_Interfaces_IRenderer.__typeName = 'Engine.Interfaces.IRenderer';
	global.Engine.Interfaces.IRenderer = $Engine_Interfaces_IRenderer;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.Point
	var $Engine_Interfaces_Point = function(x, y) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.set_x(x);
		this.set_y(y);
	};
	$Engine_Interfaces_Point.__typeName = 'Engine.Interfaces.Point';
	global.Engine.Interfaces.Point = $Engine_Interfaces_Point;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.PointF
	var $Engine_Interfaces_PointF = function(x, y) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.set_x(x);
		this.set_y(y);
	};
	$Engine_Interfaces_PointF.__typeName = 'Engine.Interfaces.PointF';
	global.Engine.Interfaces.PointF = $Engine_Interfaces_PointF;
	////////////////////////////////////////////////////////////////////////////////
	// Engine.Interfaces.Size
	var $Engine_Interfaces_Size = function(width, height) {
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.set_width(width);
		this.set_height(height);
	};
	$Engine_Interfaces_Size.__typeName = 'Engine.Interfaces.Size';
	global.Engine.Interfaces.Size = $Engine_Interfaces_Size;
	ss.initInterface($Engine_Interfaces_IImage, { get_center: null, set_center: null, get_width: null, set_width: null, get_height: null, set_height: null });
	ss.initInterface($Engine_Interfaces_ILayer, { save: null, restore: null, translate: null, drawImage: null, drawImage$1: null, drawImage$2: null, drawString: null, clear: null, measureString: null });
	ss.initInterface($Engine_Interfaces_IRenderer, { createLayer: null, addLayer: null, getImage: null, createImage: null, beginRender: null, endRender: null });
	ss.initClass($Engine_Interfaces_Point, {
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
	ss.initClass($Engine_Interfaces_PointF, {
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
	ss.initClass($Engine_Interfaces_Size, {
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
})();
