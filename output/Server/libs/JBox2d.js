(function() {
	'use strict';
	global.java = global.java || {};
	global.java.lang = global.java.lang || {};
	global.org = global.org || {};
	global.org.jbox2d = global.org.jbox2d || {};
	global.org.jbox2d.callbacks = global.org.jbox2d.callbacks || {};
	global.org.jbox2d.collision = global.org.jbox2d.collision || {};
	global.org.jbox2d.collision.broadphase = global.org.jbox2d.collision.broadphase || {};
	global.org.jbox2d.collision.shapes = global.org.jbox2d.collision.shapes || {};
	global.org.jbox2d.common = global.org.jbox2d.common || {};
	global.org.jbox2d.dynamics = global.org.jbox2d.dynamics || {};
	global.org.jbox2d.dynamics.contacts = global.org.jbox2d.dynamics.contacts || {};
	global.org.jbox2d.dynamics.joints = global.org.jbox2d.dynamics.joints || {};
	global.org.jbox2d.pooling = global.org.jbox2d.pooling || {};
	global.org.jbox2d.pooling.arrays = global.org.jbox2d.pooling.arrays || {};
	global.org.jbox2d.pooling.normal = global.org.jbox2d.pooling.normal || {};
	global.org.jbox2d.pooling.stacks = global.org.jbox2d.pooling.stacks || {};
	////////////////////////////////////////////////////////////////////////////////
	// java.lang.StrictMath
	var $java_lang_StrictMath = function() {
	};
	$java_lang_StrictMath.__typeName = 'java.lang.StrictMath';
	$java_lang_StrictMath.atan2 = function(y, x) {
		return Math.atan2(y, x);
	};
	$java_lang_StrictMath.cos = function(a) {
		return Math.cos(a);
	};
	$java_lang_StrictMath.round = function(a) {
		return ss.Int32.trunc(ss.round(a));
	};
	$java_lang_StrictMath.sin = function(a) {
		return Math.sin(a);
	};
	$java_lang_StrictMath.sqrt = function(a) {
		return Math.sqrt(a);
	};
	global.java.lang.StrictMath = $java_lang_StrictMath;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.ContactFilter
	var $org_jbox2d_callbacks_ContactFilter = function() {
	};
	$org_jbox2d_callbacks_ContactFilter.__typeName = 'org.jbox2d.callbacks.ContactFilter';
	global.org.jbox2d.callbacks.ContactFilter = $org_jbox2d_callbacks_ContactFilter;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.ContactImpulse
	var $org_jbox2d_callbacks_ContactImpulse = function() {
		this.count = 0;
		this.normalImpulses = new Array($org_jbox2d_common_Settings.maxManifoldPoints);
		this.tangentImpulses = new Array($org_jbox2d_common_Settings.maxManifoldPoints);
	};
	$org_jbox2d_callbacks_ContactImpulse.__typeName = 'org.jbox2d.callbacks.ContactImpulse';
	global.org.jbox2d.callbacks.ContactImpulse = $org_jbox2d_callbacks_ContactImpulse;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.ContactListener
	var $org_jbox2d_callbacks_ContactListener = function() {
		this.beginContact = null;
		this.endContact = null;
		this.preSolve = null;
		this.postSolve = null;
		this.beginContact = function(c) {
		};
		this.endContact = function(c1) {
		};
		this.preSolve = function(c2, d) {
		};
		this.postSolve = function(c3, d1) {
		};
	};
	$org_jbox2d_callbacks_ContactListener.__typeName = 'org.jbox2d.callbacks.ContactListener';
	global.org.jbox2d.callbacks.ContactListener = $org_jbox2d_callbacks_ContactListener;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.DebugDraw
	var $org_jbox2d_callbacks_DebugDraw = function(viewport) {
		this.viewportTransform = null;
		this.m_drawFlags = 0;
		this.m_drawFlags = 0;
		this.viewportTransform = viewport;
	};
	$org_jbox2d_callbacks_DebugDraw.__typeName = 'org.jbox2d.callbacks.DebugDraw';
	global.org.jbox2d.callbacks.DebugDraw = $org_jbox2d_callbacks_DebugDraw;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.DestructionListener
	var $org_jbox2d_callbacks_DestructionListener = function() {
	};
	$org_jbox2d_callbacks_DestructionListener.__typeName = 'org.jbox2d.callbacks.DestructionListener';
	global.org.jbox2d.callbacks.DestructionListener = $org_jbox2d_callbacks_DestructionListener;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.PairCallback
	var $org_jbox2d_callbacks_PairCallback = function() {
	};
	$org_jbox2d_callbacks_PairCallback.__typeName = 'org.jbox2d.callbacks.PairCallback';
	global.org.jbox2d.callbacks.PairCallback = $org_jbox2d_callbacks_PairCallback;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.QueryCallback
	var $org_jbox2d_callbacks_QueryCallback = function() {
	};
	$org_jbox2d_callbacks_QueryCallback.__typeName = 'org.jbox2d.callbacks.QueryCallback';
	global.org.jbox2d.callbacks.QueryCallback = $org_jbox2d_callbacks_QueryCallback;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.RayCastCallback
	var $org_jbox2d_callbacks_RayCastCallback = function() {
	};
	$org_jbox2d_callbacks_RayCastCallback.__typeName = 'org.jbox2d.callbacks.RayCastCallback';
	global.org.jbox2d.callbacks.RayCastCallback = $org_jbox2d_callbacks_RayCastCallback;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.TreeCallback
	var $org_jbox2d_callbacks_TreeCallback = function() {
	};
	$org_jbox2d_callbacks_TreeCallback.__typeName = 'org.jbox2d.callbacks.TreeCallback';
	global.org.jbox2d.callbacks.TreeCallback = $org_jbox2d_callbacks_TreeCallback;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.callbacks.TreeRayCastCallback
	var $org_jbox2d_callbacks_TreeRayCastCallback = function() {
	};
	$org_jbox2d_callbacks_TreeRayCastCallback.__typeName = 'org.jbox2d.callbacks.TreeRayCastCallback';
	global.org.jbox2d.callbacks.TreeRayCastCallback = $org_jbox2d_callbacks_TreeRayCastCallback;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.SeparationFunction
	var $org_jbox2d_collision_$SeparationFunction = function() {
		this.$axisA = new $org_jbox2d_common_Vec2();
		this.$axisB = new $org_jbox2d_common_Vec2();
		this.$localPointA = new $org_jbox2d_common_Vec2();
		this.$localPointA1 = new $org_jbox2d_common_Vec2();
		this.$localPointA2 = new $org_jbox2d_common_Vec2();
		this.$localPointB = new $org_jbox2d_common_Vec2();
		this.$localPointB1 = new $org_jbox2d_common_Vec2();
		this.$localPointB2 = new $org_jbox2d_common_Vec2();
		this.$m_axis = new $org_jbox2d_common_Vec2();
		this.$m_localPoint = new $org_jbox2d_common_Vec2();
		this.$normal = new $org_jbox2d_common_Vec2();
		this.$pointA = new $org_jbox2d_common_Vec2();
		this.$pointB = new $org_jbox2d_common_Vec2();
		this.$temp = new $org_jbox2d_common_Vec2();
		this.$xfa = new $org_jbox2d_common_Transform();
		this.$xfb = new $org_jbox2d_common_Transform();
		this.$m_proxyA = null;
		this.$m_proxyB = null;
		this.$m_sweepA = null;
		this.$m_sweepB = null;
		this.$m_type = 0;
	};
	$org_jbox2d_collision_$SeparationFunction.__typeName = 'org.jbox2d.collision.$SeparationFunction';
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Type
	var $org_jbox2d_collision_$Type = function() {
	};
	$org_jbox2d_collision_$Type.__typeName = 'org.jbox2d.collision.$Type';
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.AABB
	var $org_jbox2d_collision_AABB = function() {
		this.lowerBound = null;
		this.upperBound = null;
		this.lowerBound = new $org_jbox2d_common_Vec2();
		this.upperBound = new $org_jbox2d_common_Vec2();
	};
	$org_jbox2d_collision_AABB.__typeName = 'org.jbox2d.collision.AABB';
	$org_jbox2d_collision_AABB.$ctor1 = function(copy) {
		$org_jbox2d_collision_AABB.$ctor2.call(this, copy.lowerBound, copy.upperBound);
	};
	$org_jbox2d_collision_AABB.$ctor2 = function(lowerVertex, upperVertex) {
		this.lowerBound = null;
		this.upperBound = null;
		this.lowerBound = lowerVertex.clone();
		// clone to be safe
		this.upperBound = upperVertex.clone();
	};
	$org_jbox2d_collision_AABB.testOverlap = function(a, b) {
		if (b.lowerBound.x - a.upperBound.x > 0 || b.lowerBound.y - a.upperBound.y > 0) {
			return false;
		}
		if (a.lowerBound.x - b.upperBound.x > 0 || a.lowerBound.y - b.upperBound.y > 0) {
			return false;
		}
		return true;
	};
	global.org.jbox2d.collision.AABB = $org_jbox2d_collision_AABB;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision
	var $org_jbox2d_collision_Collision = function(argPool) {
		this.$p2 = new $org_jbox2d_common_Vec2();
		this.$q = new $org_jbox2d_common_Vec2();
		this.$cache = new $org_jbox2d_collision_SimplexCache();
		this.$cf = new $org_jbox2d_collision_ContactID();
		this.$clipPoints1 = new Array(2);
		this.$clipPoints2 = new Array(2);
		this.$collider = new $org_jbox2d_collision_Collision$EPCollider();
		this.$e = new $org_jbox2d_common_Vec2();
		this.$e1 = new $org_jbox2d_common_Vec2();
		this.$incidentEdge = new Array(2);
		this.$input = new $org_jbox2d_collision_DistanceInput();
		this.$localNormal = new $org_jbox2d_common_Vec2();
		this.$localTangent = new $org_jbox2d_common_Vec2();
		this.$n = new $org_jbox2d_common_Vec2();
		this.$output = new $org_jbox2d_collision_DistanceOutput();
		this.$planePoint = new $org_jbox2d_common_Vec2();
		this.$pool = null;
		this.$results1 = new $org_jbox2d_collision_Collision$EdgeResults();
		this.$results2 = new $org_jbox2d_collision_Collision$EdgeResults();
		this.$tangent = new $org_jbox2d_common_Vec2();
		this.$temp = new $org_jbox2d_common_Vec2();
		this.$v11 = new $org_jbox2d_common_Vec2();
		this.$v12 = new $org_jbox2d_common_Vec2();
		this.$incidentEdge[0] = new $org_jbox2d_collision_Collision$ClipVertex();
		this.$incidentEdge[1] = new $org_jbox2d_collision_Collision$ClipVertex();
		this.$clipPoints1[0] = new $org_jbox2d_collision_Collision$ClipVertex();
		this.$clipPoints1[1] = new $org_jbox2d_collision_Collision$ClipVertex();
		this.$clipPoints2[0] = new $org_jbox2d_collision_Collision$ClipVertex();
		this.$clipPoints2[1] = new $org_jbox2d_collision_Collision$ClipVertex();
		this.$pool = argPool;
	};
	$org_jbox2d_collision_Collision.__typeName = 'org.jbox2d.collision.Collision';
	$org_jbox2d_collision_Collision.getPointStates = function(state1, state2, manifold1, manifold2) {
		for (var i = 0; i < $org_jbox2d_common_Settings.maxManifoldPoints; i++) {
			state1[i] = 0;
			state2[i] = 0;
		}
		// Detect persists and removes.
		for (var i1 = 0; i1 < manifold1.pointCount; i1++) {
			var id = manifold1.points[i1].id;
			state1[i1] = 3;
			for (var j = 0; j < manifold2.pointCount; j++) {
				if (manifold2.points[j].id.isEqual(id)) {
					state1[i1] = 2;
					break;
				}
			}
		}
		// Detect persists and adds
		for (var i2 = 0; i2 < manifold2.pointCount; i2++) {
			var id1 = manifold2.points[i2].id;
			state2[i2] = 1;
			for (var j1 = 0; j1 < manifold1.pointCount; j1++) {
				if (manifold1.points[j1].id.isEqual(id1)) {
					state2[i2] = 2;
					break;
				}
			}
		}
	};
	$org_jbox2d_collision_Collision.clipSegmentToLine = function(vOut, vIn, normal, offset, vertexIndexA) {
		// Start with no output points
		var numOut = 0;
		var vIn0 = vIn[0];
		var vIn1 = vIn[1];
		var vIn0v = vIn0.v;
		var vIn1v = vIn1.v;
		// Calculate the distance of end points to the line
		var distance0 = $org_jbox2d_common_Vec2.dot(normal, vIn0v) - offset;
		var distance1 = $org_jbox2d_common_Vec2.dot(normal, vIn1v) - offset;
		// If the points are behind the plane
		if (distance0 <= 0) {
			vOut[numOut++].set(vIn0);
		}
		if (distance1 <= 0) {
			vOut[numOut++].set(vIn1);
		}
		// If the points are on different sides of the plane
		if (distance0 * distance1 < 0) {
			// Find intersection point of edge and plane
			var interp = distance0 / (distance0 - distance1);
			var vOutNO = vOut[numOut];
			// vOut[numOut].v = vIn[0].v + interp * (vIn[1].v - vIn[0].v);
			vOutNO.v.x = vIn0v.x + interp * (vIn1v.x - vIn0v.x);
			vOutNO.v.y = vIn0v.y + interp * (vIn1v.y - vIn0v.y);
			// VertexA is hitting edgeB.
			vOutNO.id.indexA = vertexIndexA;
			vOutNO.id.indexB = vIn0.id.indexB;
			vOutNO.id.typeA = 0;
			vOutNO.id.typeB = 1;
			++numOut;
		}
		return numOut;
	};
	global.org.jbox2d.collision.Collision = $org_jbox2d_collision_Collision;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.ClipVertex
	var $org_jbox2d_collision_Collision$ClipVertex = function() {
		this.id = null;
		this.v = null;
		this.v = new $org_jbox2d_common_Vec2();
		this.id = new $org_jbox2d_collision_ContactID();
	};
	$org_jbox2d_collision_Collision$ClipVertex.__typeName = 'org.jbox2d.collision.Collision$ClipVertex';
	global.org.jbox2d.collision.Collision$ClipVertex = $org_jbox2d_collision_Collision$ClipVertex;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.EdgeResults
	var $org_jbox2d_collision_Collision$EdgeResults = function() {
		this.edgeIndex = 0;
		this.separation = 0;
	};
	$org_jbox2d_collision_Collision$EdgeResults.__typeName = 'org.jbox2d.collision.Collision$EdgeResults';
	global.org.jbox2d.collision.Collision$EdgeResults = $org_jbox2d_collision_Collision$EdgeResults;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.EPAxis
	var $org_jbox2d_collision_Collision$EPAxis = function() {
		this.index = 0;
		this.separation = 0;
		this.type = 0;
	};
	$org_jbox2d_collision_Collision$EPAxis.__typeName = 'org.jbox2d.collision.Collision$EPAxis';
	global.org.jbox2d.collision.Collision$EPAxis = $org_jbox2d_collision_Collision$EPAxis;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.EPAxis.Type
	var $org_jbox2d_collision_Collision$EPAxis$Type = function() {
	};
	$org_jbox2d_collision_Collision$EPAxis$Type.__typeName = 'org.jbox2d.collision.Collision$EPAxis$Type';
	global.org.jbox2d.collision.Collision$EPAxis$Type = $org_jbox2d_collision_Collision$EPAxis$Type;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.EPCollider
	var $org_jbox2d_collision_Collision$EPCollider = function() {
		this.$clipPoints1 = new Array(2);
		this.$clipPoints2 = new Array(2);
		this.$edge0 = new $org_jbox2d_common_Vec2();
		this.$edge1 = new $org_jbox2d_common_Vec2();
		this.$edge2 = new $org_jbox2d_common_Vec2();
		this.$edgeAxis = new $org_jbox2d_collision_Collision$EPAxis();
		this.$ie = new Array(2);
		this.m_centroidB = new $org_jbox2d_common_Vec2();
		this.m_lowerLimit = new $org_jbox2d_common_Vec2();
		this.m_normal = new $org_jbox2d_common_Vec2();
		this.m_normal0 = new $org_jbox2d_common_Vec2();
		this.m_normal1 = new $org_jbox2d_common_Vec2();
		this.m_normal2 = new $org_jbox2d_common_Vec2();
		this.m_polygonB = new $org_jbox2d_collision_Collision$TempPolygon();
		this.m_upperLimit = new $org_jbox2d_common_Vec2();
		this.m_xf = new $org_jbox2d_common_Transform();
		this.$n = new $org_jbox2d_common_Vec2();
		this.$perp = new $org_jbox2d_common_Vec2();
		this.$polygonAxis = new $org_jbox2d_collision_Collision$EPAxis();
		this.$rf = new $org_jbox2d_collision_Collision$ReferenceFace();
		this.$temp = new $org_jbox2d_common_Vec2();
		this.m_front = false;
		this.m_radius = 0;
		this.m_type1 = 0;
		this.m_type2 = 0;
		this.m_v0 = new $org_jbox2d_common_Vec2();
		this.m_v1 = new $org_jbox2d_common_Vec2();
		this.m_v2 = new $org_jbox2d_common_Vec2();
		this.m_v3 = new $org_jbox2d_common_Vec2();
		for (var i = 0; i < 2; i++) {
			this.$ie[i] = new $org_jbox2d_collision_Collision$ClipVertex();
			this.$clipPoints1[i] = new $org_jbox2d_collision_Collision$ClipVertex();
			this.$clipPoints2[i] = new $org_jbox2d_collision_Collision$ClipVertex();
		}
	};
	$org_jbox2d_collision_Collision$EPCollider.__typeName = 'org.jbox2d.collision.Collision$EPCollider';
	global.org.jbox2d.collision.Collision$EPCollider = $org_jbox2d_collision_Collision$EPCollider;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.EPCollider.VertexType
	var $org_jbox2d_collision_Collision$EPCollider$VertexType = function() {
	};
	$org_jbox2d_collision_Collision$EPCollider$VertexType.__typeName = 'org.jbox2d.collision.Collision$EPCollider$VertexType';
	global.org.jbox2d.collision.Collision$EPCollider$VertexType = $org_jbox2d_collision_Collision$EPCollider$VertexType;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.PointState
	var $org_jbox2d_collision_Collision$PointState = function() {
	};
	$org_jbox2d_collision_Collision$PointState.__typeName = 'org.jbox2d.collision.Collision$PointState';
	global.org.jbox2d.collision.Collision$PointState = $org_jbox2d_collision_Collision$PointState;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.ReferenceFace
	var $org_jbox2d_collision_Collision$ReferenceFace = function() {
		this.normal = new $org_jbox2d_common_Vec2();
		this.sideNormal1 = new $org_jbox2d_common_Vec2();
		this.sideNormal2 = new $org_jbox2d_common_Vec2();
		this.v1 = new $org_jbox2d_common_Vec2();
		this.v2 = new $org_jbox2d_common_Vec2();
		this.i1 = 0;
		this.i2 = 0;
		this.sideOffset1 = 0;
		this.sideOffset2 = 0;
	};
	$org_jbox2d_collision_Collision$ReferenceFace.__typeName = 'org.jbox2d.collision.Collision$ReferenceFace';
	global.org.jbox2d.collision.Collision$ReferenceFace = $org_jbox2d_collision_Collision$ReferenceFace;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Collision.TempPolygon
	var $org_jbox2d_collision_Collision$TempPolygon = function() {
		this.normals = new Array($org_jbox2d_common_Settings.maxPolygonVertices);
		this.vertices = new Array($org_jbox2d_common_Settings.maxPolygonVertices);
		this.count = 0;
		for (var i = 0; i < this.vertices.length; i++) {
			this.vertices[i] = new $org_jbox2d_common_Vec2();
			this.normals[i] = new $org_jbox2d_common_Vec2();
		}
	};
	$org_jbox2d_collision_Collision$TempPolygon.__typeName = 'org.jbox2d.collision.Collision$TempPolygon';
	global.org.jbox2d.collision.Collision$TempPolygon = $org_jbox2d_collision_Collision$TempPolygon;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.ContactID
	var $org_jbox2d_collision_ContactID = function() {
		this.indexA = 0;
		this.indexB = 0;
		this.typeA = 0;
		this.typeB = 0;
	};
	$org_jbox2d_collision_ContactID.__typeName = 'org.jbox2d.collision.ContactID';
	$org_jbox2d_collision_ContactID.$ctor1 = function(c) {
		this.indexA = 0;
		this.indexB = 0;
		this.typeA = 0;
		this.typeB = 0;
		this.set(c);
	};
	global.org.jbox2d.collision.ContactID = $org_jbox2d_collision_ContactID;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.ContactID.Type
	var $org_jbox2d_collision_ContactID$Type = function() {
	};
	$org_jbox2d_collision_ContactID$Type.__typeName = 'org.jbox2d.collision.ContactID$Type';
	global.org.jbox2d.collision.ContactID$Type = $org_jbox2d_collision_ContactID$Type;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Distance
	var $org_jbox2d_collision_Distance = function() {
		this.$closestPoint = new $org_jbox2d_common_Vec2();
		this.$d = new $org_jbox2d_common_Vec2();
		this.$normal = new $org_jbox2d_common_Vec2();
		this.$saveA = new Array(3);
		this.$saveB = new Array(3);
		this.$simplex = new $org_jbox2d_collision_Simplex();
		this.$temp = new $org_jbox2d_common_Vec2();
	};
	$org_jbox2d_collision_Distance.__typeName = 'org.jbox2d.collision.Distance';
	global.org.jbox2d.collision.Distance = $org_jbox2d_collision_Distance;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.DistanceInput
	var $org_jbox2d_collision_DistanceInput = function() {
		this.proxyA = new $org_jbox2d_collision_DistanceProxy();
		this.proxyB = new $org_jbox2d_collision_DistanceProxy();
		this.transformA = new $org_jbox2d_common_Transform();
		this.transformB = new $org_jbox2d_common_Transform();
		this.useRadii = false;
	};
	$org_jbox2d_collision_DistanceInput.__typeName = 'org.jbox2d.collision.DistanceInput';
	global.org.jbox2d.collision.DistanceInput = $org_jbox2d_collision_DistanceInput;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.DistanceOutput
	var $org_jbox2d_collision_DistanceOutput = function() {
		this.pointA = new $org_jbox2d_common_Vec2();
		this.pointB = new $org_jbox2d_common_Vec2();
		this.distance = 0;
		this.iterations = 0;
	};
	$org_jbox2d_collision_DistanceOutput.__typeName = 'org.jbox2d.collision.DistanceOutput';
	global.org.jbox2d.collision.DistanceOutput = $org_jbox2d_collision_DistanceOutput;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.DistanceProxy
	var $org_jbox2d_collision_DistanceProxy = function() {
		this.m_buffer = null;
		this.m_vertices = null;
		this.m_count = 0;
		this.m_radius = 0;
		this.m_vertices = new Array($org_jbox2d_common_Settings.maxPolygonVertices);
		for (var i = 0; i < this.m_vertices.length; i++) {
			this.m_vertices[i] = new $org_jbox2d_common_Vec2();
		}
		this.m_buffer = new Array(2);
		this.m_count = 0;
		this.m_radius = 0;
	};
	$org_jbox2d_collision_DistanceProxy.__typeName = 'org.jbox2d.collision.DistanceProxy';
	global.org.jbox2d.collision.DistanceProxy = $org_jbox2d_collision_DistanceProxy;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Manifold
	var $org_jbox2d_collision_Manifold = function() {
		this.localNormal = null;
		this.localPoint = null;
		this.points = null;
		this.pointCount = 0;
		this.type = 0;
		this.points = new Array($org_jbox2d_common_Settings.maxManifoldPoints);
		for (var i = 0; i < $org_jbox2d_common_Settings.maxManifoldPoints; i++) {
			this.points[i] = new $org_jbox2d_collision_ManifoldPoint();
		}
		this.localNormal = new $org_jbox2d_common_Vec2();
		this.localPoint = new $org_jbox2d_common_Vec2();
		this.pointCount = 0;
	};
	$org_jbox2d_collision_Manifold.__typeName = 'org.jbox2d.collision.Manifold';
	$org_jbox2d_collision_Manifold.$ctor1 = function(other) {
		this.localNormal = null;
		this.localPoint = null;
		this.points = null;
		this.pointCount = 0;
		this.type = 0;
		this.points = new Array($org_jbox2d_common_Settings.maxManifoldPoints);
		this.localNormal = other.localNormal.clone();
		this.localPoint = other.localPoint.clone();
		this.pointCount = other.pointCount;
		this.type = other.type;
		// djm: this is correct now
		for (var i = 0; i < $org_jbox2d_common_Settings.maxManifoldPoints; i++) {
			this.points[i] = new $org_jbox2d_collision_ManifoldPoint.$ctor1(other.points[i]);
		}
	};
	global.org.jbox2d.collision.Manifold = $org_jbox2d_collision_Manifold;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.ManifoldPoint
	var $org_jbox2d_collision_ManifoldPoint = function() {
		this.id = null;
		this.localPoint = null;
		this.normalImpulse = 0;
		this.tangentImpulse = 0;
		this.localPoint = new $org_jbox2d_common_Vec2();
		this.normalImpulse = this.tangentImpulse = 0;
		this.id = new $org_jbox2d_collision_ContactID();
	};
	$org_jbox2d_collision_ManifoldPoint.__typeName = 'org.jbox2d.collision.ManifoldPoint';
	$org_jbox2d_collision_ManifoldPoint.$ctor1 = function(cp) {
		this.id = null;
		this.localPoint = null;
		this.normalImpulse = 0;
		this.tangentImpulse = 0;
		this.localPoint = cp.localPoint.clone();
		this.normalImpulse = cp.normalImpulse;
		this.tangentImpulse = cp.tangentImpulse;
		this.id = new $org_jbox2d_collision_ContactID.$ctor1(cp.id);
	};
	global.org.jbox2d.collision.ManifoldPoint = $org_jbox2d_collision_ManifoldPoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.ManifoldType
	var $org_jbox2d_collision_ManifoldType = function() {
	};
	$org_jbox2d_collision_ManifoldType.__typeName = 'org.jbox2d.collision.ManifoldType';
	global.org.jbox2d.collision.ManifoldType = $org_jbox2d_collision_ManifoldType;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.RayCastInput
	var $org_jbox2d_collision_RayCastInput = function() {
		this.p1 = null;
		this.p2 = null;
		this.maxFraction = 0;
		this.p1 = new $org_jbox2d_common_Vec2();
		this.p2 = new $org_jbox2d_common_Vec2();
		this.maxFraction = 0;
	};
	$org_jbox2d_collision_RayCastInput.__typeName = 'org.jbox2d.collision.RayCastInput';
	global.org.jbox2d.collision.RayCastInput = $org_jbox2d_collision_RayCastInput;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.RayCastOutput
	var $org_jbox2d_collision_RayCastOutput = function() {
		this.normal = null;
		this.fraction = 0;
		this.normal = new $org_jbox2d_common_Vec2();
		this.fraction = 0;
	};
	$org_jbox2d_collision_RayCastOutput.__typeName = 'org.jbox2d.collision.RayCastOutput';
	global.org.jbox2d.collision.RayCastOutput = $org_jbox2d_collision_RayCastOutput;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.Simplex
	var $org_jbox2d_collision_Simplex = function() {
		this.$case2 = new $org_jbox2d_common_Vec2();
		this.$case22 = new $org_jbox2d_common_Vec2();
		this.$case3 = new $org_jbox2d_common_Vec2();
		this.$case33 = new $org_jbox2d_common_Vec2();
		this.$e12 = new $org_jbox2d_common_Vec2();
		this.$e13 = new $org_jbox2d_common_Vec2();
		this.$e23 = new $org_jbox2d_common_Vec2();
		this.m_v1 = new $org_jbox2d_collision_SimplexVertex();
		this.m_v2 = new $org_jbox2d_collision_SimplexVertex();
		this.m_v3 = new $org_jbox2d_collision_SimplexVertex();
		this.vertices = null;
		this.$w1 = new $org_jbox2d_common_Vec2();
		this.$w2 = new $org_jbox2d_common_Vec2();
		this.$w3 = new $org_jbox2d_common_Vec2();
		this.m_count = 0;
		this.vertices = [this.m_v1, this.m_v2, this.m_v3];
	};
	$org_jbox2d_collision_Simplex.__typeName = 'org.jbox2d.collision.Simplex';
	global.org.jbox2d.collision.Simplex = $org_jbox2d_collision_Simplex;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.SimplexCache
	var $org_jbox2d_collision_SimplexCache = function() {
		this.indexA = new Array(3);
		this.indexB = new Array(3);
		this.count = 0;
		this.metric = 0;
		this.metric = 0;
		this.count = 0;
		this.indexA[0] = 2147483647;
		this.indexA[1] = 2147483647;
		this.indexA[2] = 2147483647;
		this.indexB[0] = 2147483647;
		this.indexB[1] = 2147483647;
		this.indexB[2] = 2147483647;
	};
	$org_jbox2d_collision_SimplexCache.__typeName = 'org.jbox2d.collision.SimplexCache';
	global.org.jbox2d.collision.SimplexCache = $org_jbox2d_collision_SimplexCache;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.SimplexVertex
	var $org_jbox2d_collision_SimplexVertex = function() {
		this.w = new $org_jbox2d_common_Vec2();
		this.wA = new $org_jbox2d_common_Vec2();
		this.wB = new $org_jbox2d_common_Vec2();
		this.a = 0;
		this.indexA = 0;
		this.indexB = 0;
	};
	$org_jbox2d_collision_SimplexVertex.__typeName = 'org.jbox2d.collision.SimplexVertex';
	global.org.jbox2d.collision.SimplexVertex = $org_jbox2d_collision_SimplexVertex;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.TimeOfImpact
	var $org_jbox2d_collision_TimeOfImpact = function(argPool) {
		this.$cache = new $org_jbox2d_collision_SimplexCache();
		this.$distanceInput = new $org_jbox2d_collision_DistanceInput();
		this.$distanceOutput = new $org_jbox2d_collision_DistanceOutput();
		this.$fcn = new $org_jbox2d_collision_$SeparationFunction();
		this.$indexes = new Array(2);
		this.$pool = null;
		this.$sweepA = new $org_jbox2d_common_Sweep();
		this.$sweepB = new $org_jbox2d_common_Sweep();
		this.$xfA = new $org_jbox2d_common_Transform();
		this.$xfB = new $org_jbox2d_common_Transform();
		this.$pool = argPool;
	};
	$org_jbox2d_collision_TimeOfImpact.__typeName = 'org.jbox2d.collision.TimeOfImpact';
	global.org.jbox2d.collision.TimeOfImpact = $org_jbox2d_collision_TimeOfImpact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.TOIInput
	var $org_jbox2d_collision_TOIInput = function() {
		this.proxyA = new $org_jbox2d_collision_DistanceProxy();
		this.proxyB = new $org_jbox2d_collision_DistanceProxy();
		this.sweepA = new $org_jbox2d_common_Sweep();
		this.sweepB = new $org_jbox2d_common_Sweep();
		this.tMax = 0;
	};
	$org_jbox2d_collision_TOIInput.__typeName = 'org.jbox2d.collision.TOIInput';
	global.org.jbox2d.collision.TOIInput = $org_jbox2d_collision_TOIInput;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.TOIOutput
	var $org_jbox2d_collision_TOIOutput = function() {
		this.state = 0;
		this.t = 0;
	};
	$org_jbox2d_collision_TOIOutput.__typeName = 'org.jbox2d.collision.TOIOutput';
	global.org.jbox2d.collision.TOIOutput = $org_jbox2d_collision_TOIOutput;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.TOIOutputState
	var $org_jbox2d_collision_TOIOutputState = function() {
	};
	$org_jbox2d_collision_TOIOutputState.__typeName = 'org.jbox2d.collision.TOIOutputState';
	global.org.jbox2d.collision.TOIOutputState = $org_jbox2d_collision_TOIOutputState;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.WorldManifold
	var $org_jbox2d_collision_WorldManifold = function() {
		this.normal = null;
		this.points = null;
		this.$pool3 = new $org_jbox2d_common_Vec2();
		this.$pool4 = new $org_jbox2d_common_Vec2();
		this.normal = new $org_jbox2d_common_Vec2();
		this.points = new Array($org_jbox2d_common_Settings.maxManifoldPoints);
		for (var i = 0; i < $org_jbox2d_common_Settings.maxManifoldPoints; i++) {
			this.points[i] = new $org_jbox2d_common_Vec2();
		}
	};
	$org_jbox2d_collision_WorldManifold.__typeName = 'org.jbox2d.collision.WorldManifold';
	global.org.jbox2d.collision.WorldManifold = $org_jbox2d_collision_WorldManifold;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.broadphase.BroadPhase
	var $org_jbox2d_collision_broadphase_BroadPhase = function(strategy) {
		this.$m_tree = null;
		this.$m_moveBuffer = null;
		this.$m_moveCapacity = 0;
		this.$m_moveCount = 0;
		this.$m_pairBuffer = null;
		this.$m_pairCapacity = 0;
		this.$m_pairCount = 0;
		this.$m_proxyCount = 0;
		this.$m_queryProxyId = 0;
		this.$m_proxyCount = 0;
		this.$m_pairCapacity = 16;
		this.$m_pairCount = 0;
		this.$m_pairBuffer = new Array(this.$m_pairCapacity);
		for (var i = 0; i < this.$m_pairCapacity; i++) {
			this.$m_pairBuffer[i] = new $org_jbox2d_collision_broadphase_Pair();
		}
		this.$m_moveCapacity = 16;
		this.$m_moveCount = 0;
		this.$m_moveBuffer = new Array(this.$m_moveCapacity);
		this.$m_tree = strategy;
		this.$m_queryProxyId = $org_jbox2d_collision_broadphase_BroadPhase.nulL_PROXY;
	};
	$org_jbox2d_collision_broadphase_BroadPhase.__typeName = 'org.jbox2d.collision.broadphase.BroadPhase';
	global.org.jbox2d.collision.broadphase.BroadPhase = $org_jbox2d_collision_broadphase_BroadPhase;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.broadphase.BroadPhaseStrategy
	var $org_jbox2d_collision_broadphase_BroadPhaseStrategy = function() {
	};
	$org_jbox2d_collision_broadphase_BroadPhaseStrategy.__typeName = 'org.jbox2d.collision.broadphase.BroadPhaseStrategy';
	global.org.jbox2d.collision.broadphase.BroadPhaseStrategy = $org_jbox2d_collision_broadphase_BroadPhaseStrategy;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.broadphase.DynamicTree
	var $org_jbox2d_collision_broadphase_DynamicTree = function() {
		this.$aabb = new $org_jbox2d_collision_AABB();
		this.$color = new $org_jbox2d_common_Color3f();
		this.$combinedAABB = new $org_jbox2d_collision_AABB();
		this.$drawVecs = new Array(4);
		this.$nodeStack = new $org_jbox2d_collision_broadphase_DynamicTree$TreeNodeStack(10);
		this.$r = new $org_jbox2d_common_Vec2();
		this.$subInput = new $org_jbox2d_collision_RayCastInput();
		this.$textVec = new $org_jbox2d_common_Vec2();
		this.$m_freeList = 0;
		this.$m_insertionCount = 0;
		this.$m_nodeCapacity = 0;
		this.$m_nodeCount = 0;
		this.$m_nodes = null;
		this.$m_root = null;
		this.$m_root = null;
		this.$m_nodeCount = 0;
		this.$m_nodeCapacity = 16;
		this.$m_nodes = new Array(16);
		// Build a linked list for the free list.
		for (var i = this.$m_nodeCapacity - 1; i >= 0; i--) {
			this.$m_nodes[i] = new $org_jbox2d_collision_broadphase_DynamicTreeNode(i);
			this.$m_nodes[i].parent = ((i === this.$m_nodeCapacity - 1) ? null : this.$m_nodes[i + 1]);
			this.$m_nodes[i].height = -1;
		}
		this.$m_freeList = 0;
		this.$m_insertionCount = 0;
		for (var i1 = 0; i1 < this.$drawVecs.length; i1++) {
			this.$drawVecs[i1] = new $org_jbox2d_common_Vec2();
		}
	};
	$org_jbox2d_collision_broadphase_DynamicTree.__typeName = 'org.jbox2d.collision.broadphase.DynamicTree';
	global.org.jbox2d.collision.broadphase.DynamicTree = $org_jbox2d_collision_broadphase_DynamicTree;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.broadphase.DynamicTree.TreeNodeStack
	var $org_jbox2d_collision_broadphase_DynamicTree$TreeNodeStack = function(initialSize) {
		this.$position = 0;
		this.$size = 0;
		this.$stack = null;
		this.$stack = new Array(initialSize);
		this.$position = 0;
		this.$size = initialSize;
	};
	$org_jbox2d_collision_broadphase_DynamicTree$TreeNodeStack.__typeName = 'org.jbox2d.collision.broadphase.DynamicTree$TreeNodeStack';
	global.org.jbox2d.collision.broadphase.DynamicTree$TreeNodeStack = $org_jbox2d_collision_broadphase_DynamicTree$TreeNodeStack;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.broadphase.DynamicTreeNode
	var $org_jbox2d_collision_broadphase_DynamicTreeNode = function(id) {
		this.aabb = new $org_jbox2d_collision_AABB();
		this.id = 0;
		this.child1 = null;
		this.child2 = null;
		this.height = 0;
		this.leaf = false;
		this.parent = null;
		this.userData = null;
		this.id = id;
	};
	$org_jbox2d_collision_broadphase_DynamicTreeNode.__typeName = 'org.jbox2d.collision.broadphase.DynamicTreeNode';
	global.org.jbox2d.collision.broadphase.DynamicTreeNode = $org_jbox2d_collision_broadphase_DynamicTreeNode;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.broadphase.Pair
	var $org_jbox2d_collision_broadphase_Pair = function() {
		this.proxyIdA = 0;
		this.proxyIdB = 0;
	};
	$org_jbox2d_collision_broadphase_Pair.__typeName = 'org.jbox2d.collision.broadphase.Pair';
	global.org.jbox2d.collision.broadphase.Pair = $org_jbox2d_collision_broadphase_Pair;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.shapes.ChainShape
	var $org_jbox2d_collision_shapes_ChainShape = function() {
		this.m_nextVertex = new $org_jbox2d_common_Vec2();
		this.m_prevVertex = new $org_jbox2d_common_Vec2();
		this.$pool0 = new $org_jbox2d_collision_shapes_EdgeShape();
		this.m_count = 0;
		this.m_hasNextVertex = false;
		this.m_hasPrevVertex = false;
		this.m_vertices = null;
		$org_jbox2d_collision_shapes_Shape.call(this, 3);
		this.m_vertices = null;
		this.m_radius = $org_jbox2d_common_Settings.polygonRadius;
		this.m_count = 0;
	};
	$org_jbox2d_collision_shapes_ChainShape.__typeName = 'org.jbox2d.collision.shapes.ChainShape';
	global.org.jbox2d.collision.shapes.ChainShape = $org_jbox2d_collision_shapes_ChainShape;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.shapes.CircleShape
	var $org_jbox2d_collision_shapes_CircleShape = function() {
		this.m_p = null;
		$org_jbox2d_collision_shapes_Shape.call(this, 0);
		this.m_p = new $org_jbox2d_common_Vec2();
		this.m_radius = 0;
	};
	$org_jbox2d_collision_shapes_CircleShape.__typeName = 'org.jbox2d.collision.shapes.CircleShape';
	global.org.jbox2d.collision.shapes.CircleShape = $org_jbox2d_collision_shapes_CircleShape;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.shapes.EdgeShape
	var $org_jbox2d_collision_shapes_EdgeShape = function() {
		this.m_vertex0 = new $org_jbox2d_common_Vec2();
		this.m_vertex1 = new $org_jbox2d_common_Vec2();
		this.m_vertex2 = new $org_jbox2d_common_Vec2();
		this.m_vertex3 = new $org_jbox2d_common_Vec2();
		this.$normal = new $org_jbox2d_common_Vec2();
		this.m_hasVertex0 = false;
		this.m_hasVertex3 = false;
		$org_jbox2d_collision_shapes_Shape.call(this, 1);
		this.m_radius = $org_jbox2d_common_Settings.polygonRadius;
	};
	$org_jbox2d_collision_shapes_EdgeShape.__typeName = 'org.jbox2d.collision.shapes.EdgeShape';
	global.org.jbox2d.collision.shapes.EdgeShape = $org_jbox2d_collision_shapes_EdgeShape;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.shapes.MassData
	var $org_jbox2d_collision_shapes_MassData = function() {
		this.center = null;
		this.i = 0;
		this.mass = 0;
		this.mass = this.i = 0;
		this.center = new $org_jbox2d_common_Vec2();
	};
	$org_jbox2d_collision_shapes_MassData.__typeName = 'org.jbox2d.collision.shapes.MassData';
	$org_jbox2d_collision_shapes_MassData.$ctor1 = function(md) {
		this.center = null;
		this.i = 0;
		this.mass = 0;
		this.mass = md.mass;
		this.i = md.i;
		this.center = md.center.clone();
	};
	global.org.jbox2d.collision.shapes.MassData = $org_jbox2d_collision_shapes_MassData;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.shapes.PolygonShape
	var $org_jbox2d_collision_shapes_PolygonShape = function() {
		this.m_centroid = new $org_jbox2d_common_Vec2();
		this.m_normals = null;
		this.m_vertices = null;
		this.$pool1 = new $org_jbox2d_common_Vec2();
		this.$pool2 = new $org_jbox2d_common_Vec2();
		this.$pool3 = new $org_jbox2d_common_Vec2();
		this.$pool4 = new $org_jbox2d_common_Vec2();
		this.$poolt1 = new $org_jbox2d_common_Transform();
		this.m_count = 0;
		$org_jbox2d_collision_shapes_Shape.call(this, 2);
		this.m_count = 0;
		this.m_vertices = new Array($org_jbox2d_common_Settings.maxPolygonVertices);
		for (var i = 0; i < this.m_vertices.length; i++) {
			this.m_vertices[i] = new $org_jbox2d_common_Vec2();
		}
		this.m_normals = new Array($org_jbox2d_common_Settings.maxPolygonVertices);
		for (var i1 = 0; i1 < this.m_normals.length; i1++) {
			this.m_normals[i1] = new $org_jbox2d_common_Vec2();
		}
		this.setRadius($org_jbox2d_common_Settings.polygonRadius);
		this.m_centroid.setZero();
	};
	$org_jbox2d_collision_shapes_PolygonShape.__typeName = 'org.jbox2d.collision.shapes.PolygonShape';
	global.org.jbox2d.collision.shapes.PolygonShape = $org_jbox2d_collision_shapes_PolygonShape;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.shapes.Shape
	var $org_jbox2d_collision_shapes_Shape = function(type) {
		this.m_type = 0;
		this.m_radius = 0;
		this.m_type = type;
	};
	$org_jbox2d_collision_shapes_Shape.__typeName = 'org.jbox2d.collision.shapes.Shape';
	global.org.jbox2d.collision.shapes.Shape = $org_jbox2d_collision_shapes_Shape;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.collision.shapes.ShapeType
	var $org_jbox2d_collision_shapes_ShapeType = function() {
	};
	$org_jbox2d_collision_shapes_ShapeType.__typeName = 'org.jbox2d.collision.shapes.ShapeType';
	global.org.jbox2d.collision.shapes.ShapeType = $org_jbox2d_collision_shapes_ShapeType;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Color3f
	var $org_jbox2d_common_Color3f = function() {
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.x = this.y = this.z = 0;
	};
	$org_jbox2d_common_Color3f.__typeName = 'org.jbox2d.common.Color3f';
	$org_jbox2d_common_Color3f.$ctor1 = function(r, g, b) {
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.x = r;
		this.y = g;
		this.z = b;
	};
	global.org.jbox2d.common.Color3f = $org_jbox2d_common_Color3f;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Console
	var $org_jbox2d_common_Console = function() {
	};
	$org_jbox2d_common_Console.__typeName = 'org.jbox2d.common.Console';
	$org_jbox2d_common_Console.writeLine = function(s) {
	};
	global.org.jbox2d.common.Console = $org_jbox2d_common_Console;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.IViewportTransform
	var $org_jbox2d_common_IViewportTransform = function() {
	};
	$org_jbox2d_common_IViewportTransform.__typeName = 'org.jbox2d.common.IViewportTransform';
	global.org.jbox2d.common.IViewportTransform = $org_jbox2d_common_IViewportTransform;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Mat22
	var $org_jbox2d_common_Mat22 = function() {
		this.ex = null;
		this.ey = null;
		this.ex = new $org_jbox2d_common_Vec2();
		this.ey = new $org_jbox2d_common_Vec2();
	};
	$org_jbox2d_common_Mat22.__typeName = 'org.jbox2d.common.Mat22';
	$org_jbox2d_common_Mat22.$ctor1 = function(c1, c2) {
		this.ex = null;
		this.ey = null;
		this.ex = c1.clone();
		this.ey = c2.clone();
	};
	$org_jbox2d_common_Mat22.$ctor2 = function(exx, col2x, exy, col2y) {
		this.ex = null;
		this.ey = null;
		this.ex = new $org_jbox2d_common_Vec2.$ctor2(exx, exy);
		this.ey = new $org_jbox2d_common_Vec2.$ctor2(col2x, col2y);
	};
	$org_jbox2d_common_Mat22.abs = function(R) {
		return R.abs();
	};
	$org_jbox2d_common_Mat22.absToOut = function(R, out_) {
		out_.ex.x = $org_jbox2d_common_MathUtils.abs(R.ex.x);
		out_.ex.y = $org_jbox2d_common_MathUtils.abs(R.ex.y);
		out_.ey.x = $org_jbox2d_common_MathUtils.abs(R.ey.x);
		out_.ey.y = $org_jbox2d_common_MathUtils.abs(R.ey.y);
	};
	$org_jbox2d_common_Mat22.mul$1 = function(R, v) {
		// return R.mul(v);
		return new $org_jbox2d_common_Vec2.$ctor2(R.ex.x * v.x + R.ey.x * v.y, R.ex.y * v.x + R.ey.y * v.y);
	};
	$org_jbox2d_common_Mat22.mulToOut$1 = function(R, v, out_) {
		var tempy = R.ex.y * v.x + R.ey.y * v.y;
		out_.x = R.ex.x * v.x + R.ey.x * v.y;
		out_.y = tempy;
	};
	$org_jbox2d_common_Mat22.mulToOutUnsafe$1 = function(R, v, out_) {
		out_.x = R.ex.x * v.x + R.ey.x * v.y;
		out_.y = R.ex.y * v.x + R.ey.y * v.y;
	};
	$org_jbox2d_common_Mat22.mul = function(A, B) {
		// return A.mul(B);
		var C = new $org_jbox2d_common_Mat22();
		C.ex.x = A.ex.x * B.ex.x + A.ey.x * B.ex.y;
		C.ex.y = A.ex.y * B.ex.x + A.ey.y * B.ex.y;
		C.ey.x = A.ex.x * B.ey.x + A.ey.x * B.ey.y;
		C.ey.y = A.ex.y * B.ey.x + A.ey.y * B.ey.y;
		return C;
	};
	$org_jbox2d_common_Mat22.mulToOut = function(A, B, out_) {
		var tempy1 = A.ex.y * B.ex.x + A.ey.y * B.ex.y;
		var tempx1 = A.ex.x * B.ex.x + A.ey.x * B.ex.y;
		var tempy2 = A.ex.y * B.ey.x + A.ey.y * B.ey.y;
		var tempx2 = A.ex.x * B.ey.x + A.ey.x * B.ey.y;
		out_.ex.x = tempx1;
		out_.ex.y = tempy1;
		out_.ey.x = tempx2;
		out_.ey.y = tempy2;
	};
	$org_jbox2d_common_Mat22.mulToOutUnsafe = function(A, B, out_) {
		out_.ex.x = A.ex.x * B.ex.x + A.ey.x * B.ex.y;
		out_.ex.y = A.ex.y * B.ex.x + A.ey.y * B.ex.y;
		out_.ey.x = A.ex.x * B.ey.x + A.ey.x * B.ey.y;
		out_.ey.y = A.ex.y * B.ey.x + A.ey.y * B.ey.y;
	};
	$org_jbox2d_common_Mat22.mulTrans$1 = function(R, v) {
		return new $org_jbox2d_common_Vec2.$ctor2(v.x * R.ex.x + v.y * R.ex.y, v.x * R.ey.x + v.y * R.ey.y);
	};
	$org_jbox2d_common_Mat22.mulTransToOut$1 = function(R, v, out_) {
		var out_x = v.x * R.ex.x + v.y * R.ex.y;
		out_.y = v.x * R.ey.x + v.y * R.ey.y;
		out_.x = out_x;
	};
	$org_jbox2d_common_Mat22.mulTransToOutUnsafe$1 = function(R, v, out_) {
		out_.y = v.x * R.ey.x + v.y * R.ey.y;
		out_.x = v.x * R.ex.x + v.y * R.ex.y;
	};
	$org_jbox2d_common_Mat22.mulTrans = function(A, B) {
		var C = new $org_jbox2d_common_Mat22();
		C.ex.x = A.ex.x * B.ex.x + A.ex.y * B.ex.y;
		C.ex.y = A.ey.x * B.ex.x + A.ey.y * B.ex.y;
		C.ey.x = A.ex.x * B.ey.x + A.ex.y * B.ey.y;
		C.ey.y = A.ey.x * B.ey.x + A.ey.y * B.ey.y;
		return C;
	};
	$org_jbox2d_common_Mat22.mulTransToOut = function(A, B, out_) {
		var x1 = A.ex.x * B.ex.x + A.ex.y * B.ex.y;
		var y1 = A.ey.x * B.ex.x + A.ey.y * B.ex.y;
		var x2 = A.ex.x * B.ey.x + A.ex.y * B.ey.y;
		var y2 = A.ey.x * B.ey.x + A.ey.y * B.ey.y;
		out_.ex.x = x1;
		out_.ex.y = y1;
		out_.ey.x = x2;
		out_.ey.y = y2;
	};
	$org_jbox2d_common_Mat22.mulTransToOutUnsafe = function(A, B, out_) {
		out_.ex.x = A.ex.x * B.ex.x + A.ex.y * B.ex.y;
		out_.ex.y = A.ey.x * B.ex.x + A.ey.y * B.ex.y;
		out_.ey.x = A.ex.x * B.ey.x + A.ex.y * B.ey.y;
		out_.ey.y = A.ey.x * B.ey.x + A.ey.y * B.ey.y;
	};
	$org_jbox2d_common_Mat22.createRotationalTransform = function(angle) {
		var mat = new $org_jbox2d_common_Mat22();
		var c = $org_jbox2d_common_MathUtils.cos(angle);
		var s = $org_jbox2d_common_MathUtils.sin(angle);
		mat.ex.x = c;
		mat.ey.x = -s;
		mat.ex.y = s;
		mat.ey.y = c;
		return mat;
	};
	$org_jbox2d_common_Mat22.createRotationalTransform$1 = function(angle, out_) {
		var c = $org_jbox2d_common_MathUtils.cos(angle);
		var s = $org_jbox2d_common_MathUtils.sin(angle);
		out_.ex.x = c;
		out_.ey.x = -s;
		out_.ex.y = s;
		out_.ey.y = c;
	};
	$org_jbox2d_common_Mat22.createScaleTransform = function(scale) {
		var mat = new $org_jbox2d_common_Mat22();
		mat.ex.x = scale;
		mat.ey.y = scale;
		return mat;
	};
	$org_jbox2d_common_Mat22.createScaleTransform$1 = function(scale, out_) {
		out_.ex.x = scale;
		out_.ey.y = scale;
	};
	global.org.jbox2d.common.Mat22 = $org_jbox2d_common_Mat22;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Mat33
	var $org_jbox2d_common_Mat33 = function() {
		this.ex = null;
		this.ey = null;
		this.ez = null;
		this.ex = new $org_jbox2d_common_Vec3();
		this.ey = new $org_jbox2d_common_Vec3();
		this.ez = new $org_jbox2d_common_Vec3();
	};
	$org_jbox2d_common_Mat33.__typeName = 'org.jbox2d.common.Mat33';
	$org_jbox2d_common_Mat33.$ctor1 = function(argCol1, argCol2, argCol3) {
		this.ex = null;
		this.ey = null;
		this.ez = null;
		this.ex = argCol1.clone();
		this.ey = argCol2.clone();
		this.ez = argCol3.clone();
	};
	$org_jbox2d_common_Mat33.mul = function(A, v) {
		return new $org_jbox2d_common_Vec3.$ctor2(v.x * A.ex.x + v.y * A.ey.x + v.z + A.ez.x, v.x * A.ex.y + v.y * A.ey.y + v.z * A.ez.y, v.x * A.ex.z + v.y * A.ey.z + v.z * A.ez.z);
	};
	$org_jbox2d_common_Mat33.mul22 = function(A, v) {
		return new $org_jbox2d_common_Vec2.$ctor2(A.ex.x * v.x + A.ey.x * v.y, A.ex.y * v.x + A.ey.y * v.y);
	};
	$org_jbox2d_common_Mat33.mul22ToOut = function(A, v, out_) {
		var tempx = A.ex.x * v.x + A.ey.x * v.y;
		out_.y = A.ex.y * v.x + A.ey.y * v.y;
		out_.x = tempx;
	};
	$org_jbox2d_common_Mat33.mul22ToOutUnsafe = function(A, v, out_) {
		out_.y = A.ex.y * v.x + A.ey.y * v.y;
		out_.x = A.ex.x * v.x + A.ey.x * v.y;
	};
	$org_jbox2d_common_Mat33.mulToOut = function(A, v, out_) {
		var tempy = v.x * A.ex.y + v.y * A.ey.y + v.z * A.ez.y;
		var tempz = v.x * A.ex.z + v.y * A.ey.z + v.z * A.ez.z;
		out_.x = v.x * A.ex.x + v.y * A.ey.x + v.z * A.ez.x;
		out_.y = tempy;
		out_.z = tempz;
	};
	$org_jbox2d_common_Mat33.mulToOutUnsafe = function(A, v, out_) {
		out_.x = v.x * A.ex.x + v.y * A.ey.x + v.z * A.ez.x;
		out_.y = v.x * A.ex.y + v.y * A.ey.y + v.z * A.ez.y;
		out_.z = v.x * A.ex.z + v.y * A.ey.z + v.z * A.ez.z;
	};
	global.org.jbox2d.common.Mat33 = $org_jbox2d_common_Mat33;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.MathUtils
	var $org_jbox2d_common_MathUtils = function() {
		$org_jbox2d_common_PlatformMathUtils.call(this);
	};
	$org_jbox2d_common_MathUtils.__typeName = 'org.jbox2d.common.MathUtils';
	$org_jbox2d_common_MathUtils.sin = function(x) {
		if ($org_jbox2d_common_Settings.sincoS_LUT_ENABLED) {
			return $org_jbox2d_common_MathUtils.sinLUT(x);
		}
		return $java_lang_StrictMath.sin(x);
	};
	$org_jbox2d_common_MathUtils.sinLUT = function(x) {
		x %= $org_jbox2d_common_MathUtils.TWOPI;
		if (x < 0) {
			x += $org_jbox2d_common_MathUtils.TWOPI;
		}
		if ($org_jbox2d_common_Settings.sincoS_LUT_LERP) {
			x /= $org_jbox2d_common_Settings.sincoS_LUT_PRECISION;
			var index = ss.Int32.trunc(x);
			if (index !== 0) {
				x %= index;
			}
			// the next index is 0
			if (index === $org_jbox2d_common_Settings.sincoS_LUT_LENGTH - 1) {
				return (1 - x) * $org_jbox2d_common_MathUtils.sinLUT2[index] + x * $org_jbox2d_common_MathUtils.sinLUT2[0];
			}
			return (1 - x) * $org_jbox2d_common_MathUtils.sinLUT2[index] + x * $org_jbox2d_common_MathUtils.sinLUT2[index + 1];
		}
		return $org_jbox2d_common_MathUtils.sinLUT2[$org_jbox2d_common_MathUtils.round(x / $org_jbox2d_common_Settings.sincoS_LUT_PRECISION) % $org_jbox2d_common_Settings.sincoS_LUT_LENGTH];
	};
	$org_jbox2d_common_MathUtils.cos = function(x) {
		if ($org_jbox2d_common_Settings.sincoS_LUT_ENABLED) {
			return $org_jbox2d_common_MathUtils.sinLUT($org_jbox2d_common_MathUtils.halF_PI - x);
		}
		return $java_lang_StrictMath.cos(x);
	};
	$org_jbox2d_common_MathUtils.abs = function(x) {
		if ($org_jbox2d_common_Settings.fasT_ABS) {
			return ((x > 0) ? x : -x);
		}
		return Math.abs(x);
	};
	$org_jbox2d_common_MathUtils.abs$1 = function(x) {
		var y = x >> 31;
		return (x ^ y) - y;
	};
	$org_jbox2d_common_MathUtils.floor = function(x) {
		if ($org_jbox2d_common_Settings.fasT_FLOOR) {
			var y = ss.Int32.trunc(x);
			if (x < 0 && x !== y) {
				return y - 1;
			}
			return y;
		}
		return ss.Int32.trunc(Math.floor(x));
	};
	$org_jbox2d_common_MathUtils.ceil = function(x) {
		if ($org_jbox2d_common_Settings.fasT_CEIL) {
			var y = ss.Int32.trunc(x);
			if (x > 0 && x !== y) {
				return y + 1;
			}
			return y;
		}
		return ss.Int32.trunc(Math.ceil(x));
	};
	$org_jbox2d_common_MathUtils.round = function(x) {
		if ($org_jbox2d_common_Settings.fasT_ROUND) {
			return $org_jbox2d_common_MathUtils.floor(x + 0.5);
		}
		return $java_lang_StrictMath.round(x);
	};
	$org_jbox2d_common_MathUtils.ceilPowerOf2 = function(x) {
		var pow2 = 1;
		while (pow2 < x) {
			pow2 <<= 1;
		}
		return pow2;
	};
	$org_jbox2d_common_MathUtils.max = function(a, b) {
		return ((a > b) ? a : b);
	};
	$org_jbox2d_common_MathUtils.max$1 = function(a, b) {
		return ((a > b) ? a : b);
	};
	$org_jbox2d_common_MathUtils.min = function(a, b) {
		return ((a < b) ? a : b);
	};
	$org_jbox2d_common_MathUtils.min$1 = function(a, b) {
		return ((a < b) ? a : b);
	};
	$org_jbox2d_common_MathUtils.map = function(val, fromMin, fromMax, toMin, toMax) {
		var mult = (val - fromMin) / (fromMax - fromMin);
		var res = toMin + mult * (toMax - toMin);
		return res;
	};
	$org_jbox2d_common_MathUtils.clamp = function(a, low, high) {
		return $org_jbox2d_common_MathUtils.max(low, $org_jbox2d_common_MathUtils.min(a, high));
	};
	$org_jbox2d_common_MathUtils.clamp$1 = function(a, low, high) {
		var min = new $org_jbox2d_common_Vec2();
		min.x = ((a.x < high.x) ? a.x : high.x);
		min.y = ((a.y < high.y) ? a.y : high.y);
		min.x = ((low.x > min.x) ? low.x : min.x);
		min.y = ((low.y > min.y) ? low.y : min.y);
		return min;
	};
	$org_jbox2d_common_MathUtils.clampToOut = function(a, low, high, dest) {
		dest.x = ((a.x < high.x) ? a.x : high.x);
		dest.y = ((a.y < high.y) ? a.y : high.y);
		dest.x = ((low.x > dest.x) ? low.x : dest.x);
		dest.y = ((low.y > dest.y) ? low.y : dest.y);
	};
	$org_jbox2d_common_MathUtils.nextPowerOfTwo = function(x) {
		x |= x >> 1;
		x |= x >> 2;
		x |= x >> 4;
		x |= x >> 8;
		x |= x >> 16;
		return x + 1;
	};
	$org_jbox2d_common_MathUtils.isPowerOfTwo = function(x) {
		return x > 0 && (x & x - 1) === 0;
	};
	$org_jbox2d_common_MathUtils.atan2 = function(y, x) {
		if ($org_jbox2d_common_Settings.fasT_ATAN2) {
			return $org_jbox2d_common_MathUtils.fastAtan2(y, x);
		}
		return $java_lang_StrictMath.atan2(y, x);
	};
	$org_jbox2d_common_MathUtils.fastAtan2 = function(y, x) {
		if (x === 0) {
			if (y > 0) {
				return $org_jbox2d_common_MathUtils.halF_PI;
			}
			if (y === 0) {
				return 0;
			}
			return -$org_jbox2d_common_MathUtils.halF_PI;
		}
		var atan;
		var z = y / x;
		if ($org_jbox2d_common_MathUtils.abs(z) < 1) {
			atan = z / (1 + 0.28 * z * z);
			if (x < 0) {
				if (y < 0) {
					return atan - $org_jbox2d_common_MathUtils.PI;
				}
				return atan + $org_jbox2d_common_MathUtils.PI;
			}
		}
		else {
			atan = $org_jbox2d_common_MathUtils.halF_PI - z / (z * z + 0.28);
			if (y < 0) {
				return atan - $org_jbox2d_common_MathUtils.PI;
			}
		}
		return atan;
	};
	$org_jbox2d_common_MathUtils.reduceAngle = function(theta) {
		theta %= $org_jbox2d_common_MathUtils.TWOPI;
		if ($org_jbox2d_common_MathUtils.abs(theta) > $org_jbox2d_common_MathUtils.PI) {
			theta = theta - $org_jbox2d_common_MathUtils.TWOPI;
		}
		if ($org_jbox2d_common_MathUtils.abs(theta) > $org_jbox2d_common_MathUtils.halF_PI) {
			theta = $org_jbox2d_common_MathUtils.PI - theta;
		}
		return theta;
	};
	$org_jbox2d_common_MathUtils.randomDouble = function(argLow, argHigh) {
		return $org_jbox2d_common_MathUtils.random.next() * (argHigh - argLow) + argLow;
	};
	$org_jbox2d_common_MathUtils.randomDouble$1 = function(r, argLow, argHigh) {
		return r.next() * (argHigh - argLow) + argLow;
	};
	$org_jbox2d_common_MathUtils.sqrt = function(x) {
		return $java_lang_StrictMath.sqrt(x);
	};
	$org_jbox2d_common_MathUtils.distanceSquared = function(v1, v2) {
		var dx = v1.x - v2.x;
		var dy = v1.y - v2.y;
		return dx * dx + dy * dy;
	};
	$org_jbox2d_common_MathUtils.distance = function(v1, v2) {
		return $org_jbox2d_common_MathUtils.sqrt($org_jbox2d_common_MathUtils.distanceSquared(v1, v2));
	};
	global.org.jbox2d.common.MathUtils = $org_jbox2d_common_MathUtils;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.NumberHelper
	var $org_jbox2d_common_NumberHelper = function() {
	};
	$org_jbox2d_common_NumberHelper.__typeName = 'org.jbox2d.common.NumberHelper';
	$org_jbox2d_common_NumberHelper.compareDoubles = function(f, f1) {
		return Math.abs(f - f1) < $org_jbox2d_common_Settings.EPSILON;
	};
	global.org.jbox2d.common.NumberHelper = $org_jbox2d_common_NumberHelper;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.OBBViewportTransform
	var $org_jbox2d_common_OBBViewportTransform = function() {
		this.box = new $org_jbox2d_common_OBBViewportTransform$OBB();
		this.$inv = new $org_jbox2d_common_Mat22();
		this.$inv2 = new $org_jbox2d_common_Mat22();
		this.$yFlipMat = new $org_jbox2d_common_Mat22.$ctor2(1, 0, 0, -1);
		this.$yFlipMatInv = null;
		this.$yFlip = false;
		this.box.r.setIdentity();
		this.$yFlipMatInv = this.$yFlipMat.invert();
	};
	$org_jbox2d_common_OBBViewportTransform.__typeName = 'org.jbox2d.common.OBBViewportTransform';
	global.org.jbox2d.common.OBBViewportTransform = $org_jbox2d_common_OBBViewportTransform;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.OBBViewportTransform.OBB
	var $org_jbox2d_common_OBBViewportTransform$OBB = function() {
		this.r = new $org_jbox2d_common_Mat22();
		this.center = new $org_jbox2d_common_Vec2();
		this.extents = new $org_jbox2d_common_Vec2();
	};
	$org_jbox2d_common_OBBViewportTransform$OBB.__typeName = 'org.jbox2d.common.OBBViewportTransform$OBB';
	global.org.jbox2d.common.OBBViewportTransform$OBB = $org_jbox2d_common_OBBViewportTransform$OBB;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.PlatformMathUtils
	var $org_jbox2d_common_PlatformMathUtils = function() {
	};
	$org_jbox2d_common_PlatformMathUtils.__typeName = 'org.jbox2d.common.PlatformMathUtils';
	global.org.jbox2d.common.PlatformMathUtils = $org_jbox2d_common_PlatformMathUtils;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.RaycastResult
	var $org_jbox2d_common_RaycastResult = function() {
		this.normal = new $org_jbox2d_common_Vec2();
		this.lambda = 0;
	};
	$org_jbox2d_common_RaycastResult.__typeName = 'org.jbox2d.common.RaycastResult';
	global.org.jbox2d.common.RaycastResult = $org_jbox2d_common_RaycastResult;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Rot
	var $org_jbox2d_common_Rot = function() {
		this.c = 0;
		this.s = 0;
		this.setIdentity();
	};
	$org_jbox2d_common_Rot.__typeName = 'org.jbox2d.common.Rot';
	$org_jbox2d_common_Rot.$ctor1 = function(angle) {
		this.c = 0;
		this.s = 0;
		this.set(angle);
	};
	$org_jbox2d_common_Rot.mul = function(q, r, out_) {
		var tempc = q.c * r.c - q.s * r.s;
		out_.s = q.s * r.c + q.c * r.s;
		out_.c = tempc;
	};
	$org_jbox2d_common_Rot.mulUnsafe = function(q, r, out_) {
		// [qc -qs] * [rc -rs] = [qc*rc-qs*rs -qc*rs-qs*rc]
		// [qs qc] [rs rc] [qs*rc+qc*rs -qs*rs+qc*rc]
		// s = qs * rc + qc * rs
		// c = qc * rc - qs * rs
		out_.s = q.s * r.c + q.c * r.s;
		out_.c = q.c * r.c - q.s * r.s;
	};
	$org_jbox2d_common_Rot.mulTrans = function(q, r, out_) {
		var tempc = q.c * r.c + q.s * r.s;
		out_.s = q.c * r.s - q.s * r.c;
		out_.c = tempc;
	};
	$org_jbox2d_common_Rot.mulTransUnsafe = function(q, r, out_) {
		// [ qc qs] * [rc -rs] = [qc*rc+qs*rs -qc*rs+qs*rc]
		// [-qs qc] [rs rc] [-qs*rc+qc*rs qs*rs+qc*rc]
		// s = qc * rs - qs * rc
		// c = qc * rc + qs * rs
		out_.s = q.c * r.s - q.s * r.c;
		out_.c = q.c * r.c + q.s * r.s;
	};
	$org_jbox2d_common_Rot.mulToOut = function(q, v, out_) {
		var tempy = q.s * v.x + q.c * v.y;
		out_.x = q.c * v.x - q.s * v.y;
		out_.y = tempy;
	};
	$org_jbox2d_common_Rot.mulToOutUnsafe = function(q, v, out_) {
		out_.x = q.c * v.x - q.s * v.y;
		out_.y = q.s * v.x + q.c * v.y;
	};
	$org_jbox2d_common_Rot.mulTrans$1 = function(q, v, out_) {
		var tempy = -q.s * v.x + q.c * v.y;
		out_.x = q.c * v.x + q.s * v.y;
		out_.y = tempy;
	};
	$org_jbox2d_common_Rot.mulTransUnsafe$1 = function(q, v, out_) {
		out_.x = q.c * v.x + q.s * v.y;
		out_.y = -q.s * v.x + q.c * v.y;
	};
	global.org.jbox2d.common.Rot = $org_jbox2d_common_Rot;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Settings
	var $org_jbox2d_common_Settings = function() {
	};
	$org_jbox2d_common_Settings.__typeName = 'org.jbox2d.common.Settings';
	$org_jbox2d_common_Settings.mixFriction = function(friction1, friction2) {
		return $org_jbox2d_common_MathUtils.sqrt(friction1 * friction2);
	};
	$org_jbox2d_common_Settings.mixRestitution = function(restitution1, restitution2) {
		return ((restitution1 > restitution2) ? restitution1 : restitution2);
	};
	global.org.jbox2d.common.Settings = $org_jbox2d_common_Settings;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Sweep
	var $org_jbox2d_common_Sweep = function() {
		this.c = null;
		this.c0 = null;
		this.localCenter = null;
		this.a = 0;
		this.a0 = 0;
		this.alpha0 = 0;
		this.localCenter = new $org_jbox2d_common_Vec2();
		this.c0 = new $org_jbox2d_common_Vec2();
		this.c = new $org_jbox2d_common_Vec2();
	};
	$org_jbox2d_common_Sweep.__typeName = 'org.jbox2d.common.Sweep';
	global.org.jbox2d.common.Sweep = $org_jbox2d_common_Sweep;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Timer
	var $org_jbox2d_common_Timer = function() {
		this.$resetNanos = new Date(0);
		this.reset();
	};
	$org_jbox2d_common_Timer.__typeName = 'org.jbox2d.common.Timer';
	global.org.jbox2d.common.Timer = $org_jbox2d_common_Timer;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Transform
	var $org_jbox2d_common_Transform = function() {
		this.p = null;
		this.q = null;
		this.p = new $org_jbox2d_common_Vec2();
		this.q = new $org_jbox2d_common_Rot();
	};
	$org_jbox2d_common_Transform.__typeName = 'org.jbox2d.common.Transform';
	$org_jbox2d_common_Transform.$ctor1 = function(xf) {
		this.p = null;
		this.q = null;
		this.p = xf.p.clone();
		this.q = xf.q.clone();
	};
	$org_jbox2d_common_Transform.$ctor2 = function(_position, _R) {
		this.p = null;
		this.q = null;
		this.p = _position.clone();
		this.q = _R.clone();
	};
	$org_jbox2d_common_Transform.mul$1 = function(T, v) {
		return new $org_jbox2d_common_Vec2.$ctor2(T.q.c * v.x - T.q.s * v.y + T.p.x, T.q.s * v.x + T.q.c * v.y + T.p.y);
	};
	$org_jbox2d_common_Transform.mulToOut$1 = function(T, v, out_) {
		var tempy = T.q.s * v.x + T.q.c * v.y + T.p.y;
		out_.x = T.q.c * v.x - T.q.s * v.y + T.p.x;
		out_.y = tempy;
	};
	$org_jbox2d_common_Transform.mulToOutUnsafe$1 = function(T, v, out_) {
		out_.x = T.q.c * v.x - T.q.s * v.y + T.p.x;
		out_.y = T.q.s * v.x + T.q.c * v.y + T.p.y;
	};
	$org_jbox2d_common_Transform.mulTrans$1 = function(T, v) {
		var px = v.x - T.p.x;
		var py = v.y - T.p.y;
		return new $org_jbox2d_common_Vec2.$ctor2(T.q.c * px + T.q.s * py, -T.q.s * px + T.q.c * py);
	};
	$org_jbox2d_common_Transform.mulTransToOut$1 = function(T, v, out_) {
		var px = v.x - T.p.x;
		var py = v.y - T.p.y;
		var tempy = -T.q.s * px + T.q.c * py;
		out_.x = T.q.c * px + T.q.s * py;
		out_.y = tempy;
	};
	$org_jbox2d_common_Transform.mulTransToOutUnsafe$1 = function(T, v, out_) {
		var px = v.x - T.p.x;
		var py = v.y - T.p.y;
		out_.x = T.q.c * px + T.q.s * py;
		out_.y = -T.q.s * px + T.q.c * py;
	};
	$org_jbox2d_common_Transform.mul = function(A, B) {
		var C = new $org_jbox2d_common_Transform();
		$org_jbox2d_common_Rot.mulUnsafe(A.q, B.q, C.q);
		$org_jbox2d_common_Rot.mulToOutUnsafe(A.q, B.p, C.p);
		C.p.addLocal(A.p);
		return C;
	};
	$org_jbox2d_common_Transform.mulToOut = function(A, B, out_) {
		$org_jbox2d_common_Rot.mul(A.q, B.q, out_.q);
		$org_jbox2d_common_Rot.mulToOut(A.q, B.p, out_.p);
		out_.p.addLocal(A.p);
	};
	$org_jbox2d_common_Transform.mulToOutUnsafe = function(A, B, out_) {
		$org_jbox2d_common_Rot.mulUnsafe(A.q, B.q, out_.q);
		$org_jbox2d_common_Rot.mulToOutUnsafe(A.q, B.p, out_.p);
		out_.p.addLocal(A.p);
	};
	$org_jbox2d_common_Transform.mulTrans = function(A, B) {
		var C = new $org_jbox2d_common_Transform();
		$org_jbox2d_common_Rot.mulTransUnsafe(A.q, B.q, C.q);
		$org_jbox2d_common_Transform.$pool.set(B.p).subLocal(A.p);
		$org_jbox2d_common_Rot.mulTransUnsafe$1(A.q, $org_jbox2d_common_Transform.$pool, C.p);
		return C;
	};
	$org_jbox2d_common_Transform.mulTransToOut = function(A, B, out_) {
		$org_jbox2d_common_Rot.mulTrans(A.q, B.q, out_.q);
		$org_jbox2d_common_Transform.$pool.set(B.p).subLocal(A.p);
		$org_jbox2d_common_Rot.mulTrans$1(A.q, $org_jbox2d_common_Transform.$pool, out_.p);
	};
	$org_jbox2d_common_Transform.mulTransToOutUnsafe = function(A, B, out_) {
		$org_jbox2d_common_Rot.mulTransUnsafe(A.q, B.q, out_.q);
		$org_jbox2d_common_Transform.$pool.set(B.p).subLocal(A.p);
		$org_jbox2d_common_Rot.mulTransUnsafe$1(A.q, $org_jbox2d_common_Transform.$pool, out_.p);
	};
	global.org.jbox2d.common.Transform = $org_jbox2d_common_Transform;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Vec2
	var $org_jbox2d_common_Vec2 = function() {
		$org_jbox2d_common_Vec2.$ctor2.call(this, 0, 0);
	};
	$org_jbox2d_common_Vec2.__typeName = 'org.jbox2d.common.Vec2';
	$org_jbox2d_common_Vec2.$ctor2 = function(x, y) {
		this.x = 0;
		this.y = 0;
		this.x = x;
		this.y = y;
	};
	$org_jbox2d_common_Vec2.$ctor1 = function(toCopy) {
		$org_jbox2d_common_Vec2.$ctor2.call(this, toCopy.x, toCopy.y);
	};
	$org_jbox2d_common_Vec2.abs = function(a) {
		return new $org_jbox2d_common_Vec2.$ctor2($org_jbox2d_common_MathUtils.abs(a.x), $org_jbox2d_common_MathUtils.abs(a.y));
	};
	$org_jbox2d_common_Vec2.absToOut = function(a, out_) {
		out_.x = $org_jbox2d_common_MathUtils.abs(a.x);
		out_.y = $org_jbox2d_common_MathUtils.abs(a.y);
	};
	$org_jbox2d_common_Vec2.dot = function(a, b) {
		return a.x * b.x + a.y * b.y;
	};
	$org_jbox2d_common_Vec2.cross$2 = function(a, b) {
		return a.x * b.y - a.y * b.x;
	};
	$org_jbox2d_common_Vec2.cross$1 = function(a, s) {
		return new $org_jbox2d_common_Vec2.$ctor2(s * a.y, -s * a.x);
	};
	$org_jbox2d_common_Vec2.crossToOut$1 = function(a, s, out_) {
		var tempy = -s * a.x;
		out_.x = s * a.y;
		out_.y = tempy;
	};
	$org_jbox2d_common_Vec2.crossToOutUnsafe$1 = function(a, s, out_) {
		out_.x = s * a.y;
		out_.y = -s * a.x;
	};
	$org_jbox2d_common_Vec2.cross = function(s, a) {
		return new $org_jbox2d_common_Vec2.$ctor2(-s * a.y, s * a.x);
	};
	$org_jbox2d_common_Vec2.crossToOut = function(s, a, out_) {
		var tempY = s * a.x;
		out_.x = -s * a.y;
		out_.y = tempY;
	};
	$org_jbox2d_common_Vec2.crossToOutUnsafe = function(s, a, out_) {
		out_.x = -s * a.y;
		out_.y = s * a.x;
	};
	$org_jbox2d_common_Vec2.negateToOut = function(a, out_) {
		out_.x = -a.x;
		out_.y = -a.y;
	};
	$org_jbox2d_common_Vec2.min = function(a, b) {
		return new $org_jbox2d_common_Vec2.$ctor2(((a.x < b.x) ? a.x : b.x), ((a.y < b.y) ? a.y : b.y));
	};
	$org_jbox2d_common_Vec2.max = function(a, b) {
		return new $org_jbox2d_common_Vec2.$ctor2(((a.x > b.x) ? a.x : b.x), ((a.y > b.y) ? a.y : b.y));
	};
	$org_jbox2d_common_Vec2.minToOut = function(a, b, out_) {
		out_.x = ((a.x < b.x) ? a.x : b.x);
		out_.y = ((a.y < b.y) ? a.y : b.y);
	};
	$org_jbox2d_common_Vec2.maxToOut = function(a, b, out_) {
		out_.x = ((a.x > b.x) ? a.x : b.x);
		out_.y = ((a.y > b.y) ? a.y : b.y);
	};
	global.org.jbox2d.common.Vec2 = $org_jbox2d_common_Vec2;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.common.Vec3
	var $org_jbox2d_common_Vec3 = function() {
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.x = this.y = this.z = 0;
	};
	$org_jbox2d_common_Vec3.__typeName = 'org.jbox2d.common.Vec3';
	$org_jbox2d_common_Vec3.$ctor2 = function(argX, argY, argZ) {
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.x = argX;
		this.y = argY;
		this.z = argZ;
	};
	$org_jbox2d_common_Vec3.$ctor1 = function(argCopy) {
		this.x = 0;
		this.y = 0;
		this.z = 0;
		this.x = argCopy.x;
		this.y = argCopy.y;
		this.z = argCopy.z;
	};
	$org_jbox2d_common_Vec3.dot = function(a, b) {
		return a.x * b.x + a.y * b.y + a.z * b.z;
	};
	$org_jbox2d_common_Vec3.cross = function(a, b) {
		return new $org_jbox2d_common_Vec3.$ctor2(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
	};
	$org_jbox2d_common_Vec3.crossToOut = function(a, b, out_) {
		var tempy = a.z * b.x - a.x * b.z;
		var tempz = a.x * b.y - a.y * b.x;
		out_.x = a.y * b.z - a.z * b.y;
		out_.y = tempy;
		out_.z = tempz;
	};
	$org_jbox2d_common_Vec3.crossToOutUnsafe = function(a, b, out_) {
		out_.x = a.y * b.z - a.z * b.y;
		out_.y = a.z * b.x - a.x * b.z;
		out_.z = a.x * b.y - a.y * b.x;
	};
	global.org.jbox2d.common.Vec3 = $org_jbox2d_common_Vec3;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.WorldQueryWrapper
	var $org_jbox2d_dynamics_$WorldQueryWrapper = function() {
		this.$broadPhase = null;
		this.$callback = null;
	};
	$org_jbox2d_dynamics_$WorldQueryWrapper.__typeName = 'org.jbox2d.dynamics.$WorldQueryWrapper';
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.WorldRayCastWrapper
	var $org_jbox2d_dynamics_$WorldRayCastWrapper = function() {
		this.$output = new $org_jbox2d_collision_RayCastOutput();
		this.$point = new $org_jbox2d_common_Vec2();
		this.$temp = new $org_jbox2d_common_Vec2();
		this.$broadPhase = null;
		this.$callback = null;
	};
	$org_jbox2d_dynamics_$WorldRayCastWrapper.__typeName = 'org.jbox2d.dynamics.$WorldRayCastWrapper';
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.ArrayHelper
	var $org_jbox2d_dynamics_ArrayHelper = function() {
	};
	$org_jbox2d_dynamics_ArrayHelper.__typeName = 'org.jbox2d.dynamics.ArrayHelper';
	$org_jbox2d_dynamics_ArrayHelper.copy = function(old, start, new1, start2, length) {
		for (var i = 0; i < length; i++) {
			new1[i + start2] = old[i + start];
		}
	};
	$org_jbox2d_dynamics_ArrayHelper.sort = function(mPairBuffer, start, length) {
		var js = mPairBuffer.slice(start, length + start);
		js.sort(function(a, b) {
			return ss.compare(a, b);
		});
		for (var i = start; i < length; i++) {
			mPairBuffer[i] = js[i];
		}
	};
	global.org.jbox2d.dynamics.ArrayHelper = $org_jbox2d_dynamics_ArrayHelper;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.Body
	var $org_jbox2d_dynamics_Body = function(bd, world) {
		this.$fixDef = new $org_jbox2d_dynamics_FixtureDef();
		this.m_force = new $org_jbox2d_common_Vec2();
		this.m_linearVelocity = new $org_jbox2d_common_Vec2();
		this.m_sweep = new $org_jbox2d_common_Sweep();
		this.m_xf = new $org_jbox2d_common_Transform();
		this.$pmd = new $org_jbox2d_collision_shapes_MassData();
		this.$pxf = new $org_jbox2d_common_Transform();
		this.m_I = 0;
		this.m_angularDamping = 0;
		this.m_angularVelocity = 0;
		this.m_contactList = null;
		this.m_fixtureCount = 0;
		this.m_fixtureList = null;
		this.m_flags = 0;
		this.m_gravityScale = 0;
		this.m_invI = 0;
		this.m_invMass = 0;
		this.m_islandIndex = 0;
		this.m_jointList = null;
		this.m_linearDamping = 0;
		this.m_mass = 0;
		this.m_next = null;
		this.m_prev = null;
		this.m_sleepTime = 0;
		this.m_torque = 0;
		this.m_type = 0;
		this.m_userData = null;
		this.m_world = null;
		this.m_flags = 0;
		if (bd.bullet) {
			this.m_flags |= $org_jbox2d_dynamics_Body.e_bulletFlag;
		}
		if (bd.fixedRotation) {
			this.m_flags |= $org_jbox2d_dynamics_Body.e_fixedRotationFlag;
		}
		if (bd.allowSleep) {
			this.m_flags |= $org_jbox2d_dynamics_Body.e_autoSleepFlag;
		}
		if (bd.awake) {
			this.m_flags |= $org_jbox2d_dynamics_Body.e_awakeFlag;
		}
		if (bd.active) {
			this.m_flags |= $org_jbox2d_dynamics_Body.e_activeFlag;
		}
		this.m_world = world;
		this.m_xf.p.set(bd.position);
		this.m_xf.q.set(bd.angle);
		this.m_sweep.localCenter.setZero();
		this.m_sweep.c0.set(this.m_xf.p);
		this.m_sweep.c.set(this.m_xf.p);
		this.m_sweep.a0 = bd.angle;
		this.m_sweep.a = bd.angle;
		this.m_sweep.alpha0 = 0;
		this.m_jointList = null;
		this.m_contactList = null;
		this.m_prev = null;
		this.m_next = null;
		this.m_linearVelocity.set(bd.linearVelocity);
		this.m_angularVelocity = bd.angularVelocity;
		this.m_linearDamping = bd.linearDamping;
		this.m_angularDamping = bd.angularDamping;
		this.m_gravityScale = bd.gravityScale;
		this.m_force.setZero();
		this.m_torque = 0;
		this.m_sleepTime = 0;
		this.m_type = bd.type;
		if (this.m_type === 2) {
			this.m_mass = 1;
			this.m_invMass = 1;
		}
		else {
			this.m_mass = 0;
			this.m_invMass = 0;
		}
		this.m_I = 0;
		this.m_invI = 0;
		this.m_userData = bd.userData;
		this.m_fixtureList = null;
		this.m_fixtureCount = 0;
	};
	$org_jbox2d_dynamics_Body.__typeName = 'org.jbox2d.dynamics.Body';
	global.org.jbox2d.dynamics.Body = $org_jbox2d_dynamics_Body;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.BodyDef
	var $org_jbox2d_dynamics_BodyDef = function() {
		this.active = false;
		this.allowSleep = false;
		this.angle = 0;
		this.angularDamping = 0;
		this.angularVelocity = 0;
		this.awake = false;
		this.bullet = false;
		this.fixedRotation = false;
		this.gravityScale = 0;
		this.linearDamping = 0;
		this.linearVelocity = null;
		this.position = null;
		this.type = 0;
		this.userData = null;
		this.userData = null;
		this.position = new $org_jbox2d_common_Vec2();
		this.angle = 0;
		this.linearVelocity = new $org_jbox2d_common_Vec2();
		this.angularVelocity = 0;
		this.linearDamping = 0;
		this.angularDamping = 0;
		this.allowSleep = true;
		this.awake = true;
		this.fixedRotation = false;
		this.bullet = false;
		this.type = 0;
		this.active = true;
		this.gravityScale = 1;
	};
	$org_jbox2d_dynamics_BodyDef.__typeName = 'org.jbox2d.dynamics.BodyDef';
	global.org.jbox2d.dynamics.BodyDef = $org_jbox2d_dynamics_BodyDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.BodyType
	var $org_jbox2d_dynamics_BodyType = function() {
	};
	$org_jbox2d_dynamics_BodyType.__typeName = 'org.jbox2d.dynamics.BodyType';
	global.org.jbox2d.dynamics.BodyType = $org_jbox2d_dynamics_BodyType;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.ContactManager
	var $org_jbox2d_dynamics_ContactManager = function(argPool, strategy) {
		this.$pool = null;
		this.m_broadPhase = null;
		this.m_contactCount = 0;
		this.m_contactFilter = null;
		this.m_contactList = null;
		this.m_contactListener = null;
		this.m_contactList = null;
		this.m_contactCount = 0;
		this.m_contactFilter = new $org_jbox2d_callbacks_ContactFilter();
		this.m_contactListener = null;
		this.m_broadPhase = new $org_jbox2d_collision_broadphase_BroadPhase(strategy);
		this.$pool = argPool;
	};
	$org_jbox2d_dynamics_ContactManager.__typeName = 'org.jbox2d.dynamics.ContactManager';
	global.org.jbox2d.dynamics.ContactManager = $org_jbox2d_dynamics_ContactManager;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.Filter
	var $org_jbox2d_dynamics_Filter = function() {
		this.categoryBits = 0;
		this.groupIndex = 0;
		this.maskBits = 0;
		this.categoryBits = 1;
		this.maskBits = 65535;
		this.groupIndex = 0;
	};
	$org_jbox2d_dynamics_Filter.__typeName = 'org.jbox2d.dynamics.Filter';
	global.org.jbox2d.dynamics.Filter = $org_jbox2d_dynamics_Filter;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.Fixture
	var $org_jbox2d_dynamics_Fixture = function() {
		this.$displacement = new $org_jbox2d_common_Vec2();
		this.m_filter = null;
		this.$pool1 = new $org_jbox2d_collision_AABB();
		this.$pool2 = new $org_jbox2d_collision_AABB();
		this.m_body = null;
		this.m_density = 0;
		this.m_friction = 0;
		this.m_isSensor = false;
		this.m_next = null;
		this.m_proxies = null;
		this.m_proxyCount = 0;
		this.m_restitution = 0;
		this.m_shape = null;
		this.m_userData = null;
		this.m_userData = null;
		this.m_body = null;
		this.m_next = null;
		this.m_proxies = null;
		this.m_proxyCount = 0;
		this.m_shape = null;
		this.m_filter = new $org_jbox2d_dynamics_Filter();
	};
	$org_jbox2d_dynamics_Fixture.__typeName = 'org.jbox2d.dynamics.Fixture';
	global.org.jbox2d.dynamics.Fixture = $org_jbox2d_dynamics_Fixture;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.FixtureDef
	var $org_jbox2d_dynamics_FixtureDef = function() {
		this.density = 0;
		this.filter = null;
		this.friction = 0;
		this.isSensor = false;
		this.restitution = 0;
		this.shape = null;
		this.userData = null;
		this.shape = null;
		this.userData = null;
		this.friction = 0.2;
		this.restitution = 0;
		this.density = 0;
		this.filter = new $org_jbox2d_dynamics_Filter();
		this.isSensor = false;
	};
	$org_jbox2d_dynamics_FixtureDef.__typeName = 'org.jbox2d.dynamics.FixtureDef';
	global.org.jbox2d.dynamics.FixtureDef = $org_jbox2d_dynamics_FixtureDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.FixtureProxy
	var $org_jbox2d_dynamics_FixtureProxy = function() {
		this.aabb = new $org_jbox2d_collision_AABB();
		this.childIndex = 0;
		this.fixture = null;
		this.proxyId = 0;
	};
	$org_jbox2d_dynamics_FixtureProxy.__typeName = 'org.jbox2d.dynamics.FixtureProxy';
	global.org.jbox2d.dynamics.FixtureProxy = $org_jbox2d_dynamics_FixtureProxy;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.Island
	var $org_jbox2d_dynamics_Island = function() {
		this.$contactSolver = new $org_jbox2d_dynamics_contacts_ContactSolver();
		this.$impulse = new $org_jbox2d_callbacks_ContactImpulse();
		this.$solverData = new $org_jbox2d_dynamics_SolverData();
		this.$solverDef = new $org_jbox2d_dynamics_contacts_ContactSolverDef();
		this.$timer = new $org_jbox2d_common_Timer();
		this.$toiContactSolver = new $org_jbox2d_dynamics_contacts_ContactSolver();
		this.$toiSolverDef = new $org_jbox2d_dynamics_contacts_ContactSolverDef();
		this.m_bodies = null;
		this.m_bodyCapacity = 0;
		this.m_bodyCount = 0;
		this.m_contactCapacity = 0;
		this.m_contactCount = 0;
		this.m_contacts = null;
		this.m_jointCapacity = 0;
		this.m_jointCount = 0;
		this.m_joints = null;
		this.m_listener = null;
		this.m_positions = null;
		this.m_velocities = null;
	};
	$org_jbox2d_dynamics_Island.__typeName = 'org.jbox2d.dynamics.Island';
	global.org.jbox2d.dynamics.Island = $org_jbox2d_dynamics_Island;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.Profile
	var $org_jbox2d_dynamics_Profile = function() {
		this.broadphase = 0;
		this.collide = 0;
		this.solve = 0;
		this.solveInit = 0;
		this.solvePosition = 0;
		this.solveTOI = 0;
		this.solveVelocity = 0;
		this.step = 0;
	};
	$org_jbox2d_dynamics_Profile.__typeName = 'org.jbox2d.dynamics.Profile';
	global.org.jbox2d.dynamics.Profile = $org_jbox2d_dynamics_Profile;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.SolverData
	var $org_jbox2d_dynamics_SolverData = function() {
		this.positions = null;
		this.step = null;
		this.velocities = null;
	};
	$org_jbox2d_dynamics_SolverData.__typeName = 'org.jbox2d.dynamics.SolverData';
	global.org.jbox2d.dynamics.SolverData = $org_jbox2d_dynamics_SolverData;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.TimeStep
	var $org_jbox2d_dynamics_TimeStep = function() {
		this.dt = 0;
		this.dtRatio = 0;
		this.inv_dt = 0;
		this.positionIterations = 0;
		this.velocityIterations = 0;
		this.warmStarting = false;
	};
	$org_jbox2d_dynamics_TimeStep.__typeName = 'org.jbox2d.dynamics.TimeStep';
	global.org.jbox2d.dynamics.TimeStep = $org_jbox2d_dynamics_TimeStep;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.World
	var $org_jbox2d_dynamics_World = function(gravity) {
		$org_jbox2d_dynamics_World.$ctor1.call(this, gravity, new $org_jbox2d_pooling_normal_DefaultWorldPool($org_jbox2d_dynamics_World.worlD_POOL_SIZE, $org_jbox2d_dynamics_World.worlD_POOL_CONTAINER_SIZE));
	};
	$org_jbox2d_dynamics_World.__typeName = 'org.jbox2d.dynamics.World';
	$org_jbox2d_dynamics_World.$ctor1 = function(gravity, pool) {
		$org_jbox2d_dynamics_World.$ctor2.call(this, gravity, pool, new $org_jbox2d_collision_broadphase_DynamicTree());
	};
	$org_jbox2d_dynamics_World.$ctor2 = function(gravity, argPool, broadPhaseStrategy) {
		this.$avs = new $org_jbox2d_pooling_arrays_Vec2Array();
		this.$axis = new $org_jbox2d_common_Vec2();
		this.$backup1 = new $org_jbox2d_common_Sweep();
		this.$backup2 = new $org_jbox2d_common_Sweep();
		this.$broadphaseTimer = new $org_jbox2d_common_Timer();
		this.$cA = new $org_jbox2d_common_Vec2();
		this.$cB = new $org_jbox2d_common_Vec2();
		this.$center = new $org_jbox2d_common_Vec2();
		this.$circCenterMoved = new $org_jbox2d_common_Vec2();
		this.$color = new $org_jbox2d_common_Color3f();
		this.$contactStacks = ss.multidimArray(null, 4, 4);
		this.$input = new $org_jbox2d_collision_RayCastInput();
		this.$island = new $org_jbox2d_dynamics_Island();
		this.$islandProfile = new $org_jbox2d_dynamics_Profile();
		this.$liquidColor = new $org_jbox2d_common_Color3f.$ctor1(0.4, 0.4, 1);
		this.$liquidOffset = new $org_jbox2d_common_Vec2();
		this.$m_gravity = new $org_jbox2d_common_Vec2();
		this.$m_profile = null;
		this.$pool = null;
		this.$stepTimer = new $org_jbox2d_common_Timer();
		this.$subStep = new $org_jbox2d_dynamics_TimeStep();
		this.$tempBodies = new Array(2);
		this.$tempTimer = new $org_jbox2d_common_Timer();
		this.$timeStep = new $org_jbox2d_dynamics_TimeStep();
		this.$tlvertices = new $org_jbox2d_pooling_arrays_Vec2Array();
		this.$toiInput = new $org_jbox2d_collision_TOIInput();
		this.$toiIsland = new $org_jbox2d_dynamics_Island();
		this.$toiOutput = new $org_jbox2d_collision_TOIOutput();
		this.$v1 = new $org_jbox2d_common_Vec2();
		this.$v2 = new $org_jbox2d_common_Vec2();
		this.$wqwrapper = new $org_jbox2d_dynamics_$WorldQueryWrapper();
		this.$wrcwrapper = new $org_jbox2d_dynamics_$WorldRayCastWrapper();
		this.$xf = new $org_jbox2d_common_Transform();
		this.activeContacts = 0;
		this.$averageLinearVel = -1;
		this.contactPoolCount = 0;
		this.$liquidLength = 0.12;
		this.$m_allowSleep = false;
		this.$m_bodyCount = 0;
		this.$m_bodyList = null;
		this.m_contactManager = null;
		this.$m_continuousPhysics = false;
		this.$m_debugDraw = null;
		this.$m_destructionListener = null;
		this.m_flags = 0;
		this.$m_inv_dt0 = 0;
		this.$m_jointCount = 0;
		this.$m_jointList = null;
		this.$m_stepComplete = false;
		this.$m_subStepping = false;
		this.$m_warmStarting = false;
		this.$stack = new Array(10);
		this.$pool = argPool;
		this.$m_destructionListener = null;
		this.$m_debugDraw = null;
		this.$m_bodyList = null;
		this.$m_jointList = null;
		this.$m_bodyCount = 0;
		this.$m_jointCount = 0;
		this.$m_warmStarting = true;
		this.$m_continuousPhysics = true;
		this.$m_subStepping = false;
		this.$m_stepComplete = true;
		this.$m_allowSleep = true;
		this.$m_gravity.set(gravity);
		this.m_flags = $org_jbox2d_dynamics_World.cleaR_FORCES;
		this.$m_inv_dt0 = 0;
		this.m_contactManager = new $org_jbox2d_dynamics_ContactManager(this, broadPhaseStrategy);
		this.$m_profile = new $org_jbox2d_dynamics_Profile();
		this.$initializeRegisters();
	};
	global.org.jbox2d.dynamics.World = $org_jbox2d_dynamics_World;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.PositionSolverManifold
	var $org_jbox2d_dynamics_contacts_$PositionSolverManifold = function() {
		this.$normal = new $org_jbox2d_common_Vec2();
		this.$point = new $org_jbox2d_common_Vec2();
		this.$separation = 0;
	};
	$org_jbox2d_dynamics_contacts_$PositionSolverManifold.__typeName = 'org.jbox2d.dynamics.contacts.$PositionSolverManifold';
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ChainAndCircleContact
	var $org_jbox2d_dynamics_contacts_ChainAndCircleContact = function(argPool) {
		this.$edge = new $org_jbox2d_collision_shapes_EdgeShape();
		$org_jbox2d_dynamics_contacts_Contact.call(this, argPool);
	};
	$org_jbox2d_dynamics_contacts_ChainAndCircleContact.__typeName = 'org.jbox2d.dynamics.contacts.ChainAndCircleContact';
	global.org.jbox2d.dynamics.contacts.ChainAndCircleContact = $org_jbox2d_dynamics_contacts_ChainAndCircleContact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ChainAndPolygonContact
	var $org_jbox2d_dynamics_contacts_ChainAndPolygonContact = function(argPool) {
		this.$edge = new $org_jbox2d_collision_shapes_EdgeShape();
		$org_jbox2d_dynamics_contacts_Contact.call(this, argPool);
	};
	$org_jbox2d_dynamics_contacts_ChainAndPolygonContact.__typeName = 'org.jbox2d.dynamics.contacts.ChainAndPolygonContact';
	global.org.jbox2d.dynamics.contacts.ChainAndPolygonContact = $org_jbox2d_dynamics_contacts_ChainAndPolygonContact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.CircleContact
	var $org_jbox2d_dynamics_contacts_CircleContact = function(argPool) {
		$org_jbox2d_dynamics_contacts_Contact.call(this, argPool);
	};
	$org_jbox2d_dynamics_contacts_CircleContact.__typeName = 'org.jbox2d.dynamics.contacts.CircleContact';
	global.org.jbox2d.dynamics.contacts.CircleContact = $org_jbox2d_dynamics_contacts_CircleContact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.Contact
	var $org_jbox2d_dynamics_contacts_Contact = function(argPool) {
		this.m_manifold = null;
		this.$oldManifold = new $org_jbox2d_collision_Manifold();
		this.pool = null;
		this.m_fixtureA = null;
		this.m_fixtureB = null;
		this.m_flags = 0;
		this.m_friction = 0;
		this.m_indexA = 0;
		this.m_indexB = 0;
		this.m_next = null;
		this.m_nodeA = null;
		this.m_nodeB = null;
		this.m_prev = null;
		this.m_restitution = 0;
		this.m_tangentSpeed = 0;
		this.m_toi = 0;
		this.m_toiCount = 0;
		this.m_fixtureA = null;
		this.m_fixtureB = null;
		this.m_nodeA = new $org_jbox2d_dynamics_contacts_ContactEdge();
		this.m_nodeB = new $org_jbox2d_dynamics_contacts_ContactEdge();
		this.m_manifold = new $org_jbox2d_collision_Manifold();
		this.pool = argPool;
	};
	$org_jbox2d_dynamics_contacts_Contact.__typeName = 'org.jbox2d.dynamics.contacts.Contact';
	$org_jbox2d_dynamics_contacts_Contact.mixFriction = function(friction1, friction2) {
		return $org_jbox2d_common_MathUtils.sqrt(friction1 * friction2);
	};
	$org_jbox2d_dynamics_contacts_Contact.mixRestitution = function(restitution1, restitution2) {
		return ((restitution1 > restitution2) ? restitution1 : restitution2);
	};
	global.org.jbox2d.dynamics.contacts.Contact = $org_jbox2d_dynamics_contacts_Contact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ContactCreator
	var $org_jbox2d_dynamics_contacts_ContactCreator = function() {
	};
	$org_jbox2d_dynamics_contacts_ContactCreator.__typeName = 'org.jbox2d.dynamics.contacts.ContactCreator';
	global.org.jbox2d.dynamics.contacts.ContactCreator = $org_jbox2d_dynamics_contacts_ContactCreator;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ContactEdge
	var $org_jbox2d_dynamics_contacts_ContactEdge = function() {
		this.contact = null;
		this.next = null;
		this.other = null;
		this.prev = null;
	};
	$org_jbox2d_dynamics_contacts_ContactEdge.__typeName = 'org.jbox2d.dynamics.contacts.ContactEdge';
	global.org.jbox2d.dynamics.contacts.ContactEdge = $org_jbox2d_dynamics_contacts_ContactEdge;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ContactPositionConstraint
	var $org_jbox2d_dynamics_contacts_ContactPositionConstraint = function() {
		this.localCenterA = new $org_jbox2d_common_Vec2();
		this.localCenterB = new $org_jbox2d_common_Vec2();
		this.localNormal = new $org_jbox2d_common_Vec2();
		this.localPoint = new $org_jbox2d_common_Vec2();
		this.indexA = 0;
		this.indexB = 0;
		this.invIA = 0;
		this.invIB = 0;
		this.invMassA = 0;
		this.invMassB = 0;
		this.localPoints = new Array($org_jbox2d_common_Settings.maxManifoldPoints);
		this.pointCount = 0;
		this.radiusA = 0;
		this.radiusB = 0;
		this.type = 0;
		for (var i = 0; i < this.localPoints.length; i++) {
			this.localPoints[i] = new $org_jbox2d_common_Vec2();
		}
	};
	$org_jbox2d_dynamics_contacts_ContactPositionConstraint.__typeName = 'org.jbox2d.dynamics.contacts.ContactPositionConstraint';
	global.org.jbox2d.dynamics.contacts.ContactPositionConstraint = $org_jbox2d_dynamics_contacts_ContactPositionConstraint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ContactRegister
	var $org_jbox2d_dynamics_contacts_ContactRegister = function() {
		this.creator = null;
		this.primary = false;
	};
	$org_jbox2d_dynamics_contacts_ContactRegister.__typeName = 'org.jbox2d.dynamics.contacts.ContactRegister';
	global.org.jbox2d.dynamics.contacts.ContactRegister = $org_jbox2d_dynamics_contacts_ContactRegister;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ContactSolver
	var $org_jbox2d_dynamics_contacts_ContactSolver = function() {
		this.$p = new $org_jbox2d_common_Vec2();
		this.$p1 = new $org_jbox2d_common_Vec2();
		this.$p2 = new $org_jbox2d_common_Vec2();
		this.$a = new $org_jbox2d_common_Vec2();
		this.$b = new $org_jbox2d_common_Vec2();
		this.$d = new $org_jbox2d_common_Vec2();
		this.$dv1 = new $org_jbox2d_common_Vec2();
		this.$dv2 = new $org_jbox2d_common_Vec2();
		this.$psolver = new $org_jbox2d_dynamics_contacts_$PositionSolverManifold();
		this.$rA = new $org_jbox2d_common_Vec2();
		this.$rB = new $org_jbox2d_common_Vec2();
		this.$tangent = new $org_jbox2d_common_Vec2();
		this.$temp = new $org_jbox2d_common_Vec2();
		this.$temp1 = new $org_jbox2d_common_Vec2();
		this.$temp2 = new $org_jbox2d_common_Vec2();
		this.$worldManifold = new $org_jbox2d_collision_WorldManifold();
		this.$x = new $org_jbox2d_common_Vec2();
		this.$xfA = new $org_jbox2d_common_Transform();
		this.$xfB = new $org_jbox2d_common_Transform();
		this.m_contacts = null;
		this.m_count = 0;
		this.m_positionConstraints = null;
		this.m_positions = null;
		this.m_step = null;
		this.m_velocities = null;
		this.m_velocityConstraints = null;
		this.m_positionConstraints = new Array($org_jbox2d_dynamics_contacts_ContactSolver.initiaL_NUM_CONSTRAINTS);
		this.m_velocityConstraints = new Array($org_jbox2d_dynamics_contacts_ContactSolver.initiaL_NUM_CONSTRAINTS);
		for (var i = 0; i < $org_jbox2d_dynamics_contacts_ContactSolver.initiaL_NUM_CONSTRAINTS; i++) {
			this.m_positionConstraints[i] = new $org_jbox2d_dynamics_contacts_ContactPositionConstraint();
			this.m_velocityConstraints[i] = new $org_jbox2d_dynamics_contacts_ContactVelocityConstraint();
		}
	};
	$org_jbox2d_dynamics_contacts_ContactSolver.__typeName = 'org.jbox2d.dynamics.contacts.ContactSolver';
	global.org.jbox2d.dynamics.contacts.ContactSolver = $org_jbox2d_dynamics_contacts_ContactSolver;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ContactSolverDef
	var $org_jbox2d_dynamics_contacts_ContactSolverDef = function() {
		this.contacts = null;
		this.count = 0;
		this.positions = null;
		this.step = null;
		this.velocities = null;
	};
	$org_jbox2d_dynamics_contacts_ContactSolverDef.__typeName = 'org.jbox2d.dynamics.contacts.ContactSolverDef';
	global.org.jbox2d.dynamics.contacts.ContactSolverDef = $org_jbox2d_dynamics_contacts_ContactSolverDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.ContactVelocityConstraint
	var $org_jbox2d_dynamics_contacts_ContactVelocityConstraint = function() {
		this.k = new $org_jbox2d_common_Mat22();
		this.normal = new $org_jbox2d_common_Vec2();
		this.normalMass = new $org_jbox2d_common_Mat22();
		this.contactIndex = 0;
		this.friction = 0;
		this.indexA = 0;
		this.indexB = 0;
		this.invIA = 0;
		this.invIB = 0;
		this.invMassA = 0;
		this.invMassB = 0;
		this.pointCount = 0;
		this.points = new Array($org_jbox2d_common_Settings.maxManifoldPoints);
		this.restitution = 0;
		this.tangentSpeed = 0;
		for (var i = 0; i < this.points.length; i++) {
			this.points[i] = new $org_jbox2d_dynamics_contacts_VelocityConstraintPoint();
		}
	};
	$org_jbox2d_dynamics_contacts_ContactVelocityConstraint.__typeName = 'org.jbox2d.dynamics.contacts.ContactVelocityConstraint';
	global.org.jbox2d.dynamics.contacts.ContactVelocityConstraint = $org_jbox2d_dynamics_contacts_ContactVelocityConstraint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.EdgeAndCircleContact
	var $org_jbox2d_dynamics_contacts_EdgeAndCircleContact = function(argPool) {
		$org_jbox2d_dynamics_contacts_Contact.call(this, argPool);
	};
	$org_jbox2d_dynamics_contacts_EdgeAndCircleContact.__typeName = 'org.jbox2d.dynamics.contacts.EdgeAndCircleContact';
	global.org.jbox2d.dynamics.contacts.EdgeAndCircleContact = $org_jbox2d_dynamics_contacts_EdgeAndCircleContact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.EdgeAndPolygonContact
	var $org_jbox2d_dynamics_contacts_EdgeAndPolygonContact = function(argPool) {
		$org_jbox2d_dynamics_contacts_Contact.call(this, argPool);
	};
	$org_jbox2d_dynamics_contacts_EdgeAndPolygonContact.__typeName = 'org.jbox2d.dynamics.contacts.EdgeAndPolygonContact';
	global.org.jbox2d.dynamics.contacts.EdgeAndPolygonContact = $org_jbox2d_dynamics_contacts_EdgeAndPolygonContact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.PolygonAndCircleContact
	var $org_jbox2d_dynamics_contacts_PolygonAndCircleContact = function(argPool) {
		$org_jbox2d_dynamics_contacts_Contact.call(this, argPool);
	};
	$org_jbox2d_dynamics_contacts_PolygonAndCircleContact.__typeName = 'org.jbox2d.dynamics.contacts.PolygonAndCircleContact';
	global.org.jbox2d.dynamics.contacts.PolygonAndCircleContact = $org_jbox2d_dynamics_contacts_PolygonAndCircleContact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.PolygonContact
	var $org_jbox2d_dynamics_contacts_PolygonContact = function(argPool) {
		$org_jbox2d_dynamics_contacts_Contact.call(this, argPool);
	};
	$org_jbox2d_dynamics_contacts_PolygonContact.__typeName = 'org.jbox2d.dynamics.contacts.PolygonContact';
	global.org.jbox2d.dynamics.contacts.PolygonContact = $org_jbox2d_dynamics_contacts_PolygonContact;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.Position
	var $org_jbox2d_dynamics_contacts_Position = function() {
		this.c = new $org_jbox2d_common_Vec2();
		this.a = 0;
	};
	$org_jbox2d_dynamics_contacts_Position.__typeName = 'org.jbox2d.dynamics.contacts.Position';
	global.org.jbox2d.dynamics.contacts.Position = $org_jbox2d_dynamics_contacts_Position;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.Velocity
	var $org_jbox2d_dynamics_contacts_Velocity = function() {
		this.v = new $org_jbox2d_common_Vec2();
		this.w = 0;
	};
	$org_jbox2d_dynamics_contacts_Velocity.__typeName = 'org.jbox2d.dynamics.contacts.Velocity';
	global.org.jbox2d.dynamics.contacts.Velocity = $org_jbox2d_dynamics_contacts_Velocity;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.contacts.VelocityConstraintPoint
	var $org_jbox2d_dynamics_contacts_VelocityConstraintPoint = function() {
		this.rA = new $org_jbox2d_common_Vec2();
		this.rB = new $org_jbox2d_common_Vec2();
		this.normalImpulse = 0;
		this.normalMass = 0;
		this.tangentImpulse = 0;
		this.tangentMass = 0;
		this.velocityBias = 0;
	};
	$org_jbox2d_dynamics_contacts_VelocityConstraintPoint.__typeName = 'org.jbox2d.dynamics.contacts.VelocityConstraintPoint';
	global.org.jbox2d.dynamics.contacts.VelocityConstraintPoint = $org_jbox2d_dynamics_contacts_VelocityConstraintPoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.ConstantVolumeJoint
	var $org_jbox2d_dynamics_joints_ConstantVolumeJoint = function(argWorld, def) {
		this.$bodies = null;
		this.$distanceJoints = null;
		this.$normals = null;
		this.$world = null;
		this.$m_impulse = 0;
		this.$targetLengths = null;
		this.$targetVolume = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorld.getPool(), def);
		this.$world = argWorld;
		if (def.bodies.length <= 2) {
			throw new ss.ArgumentException('You cannot create a constant volume joint with less than three bodies.');
		}
		this.$bodies = Array.prototype.slice.call(def.bodies);
		this.$targetLengths = new Array(this.$bodies.length);
		for (var i = 0; i < this.$targetLengths.length; ++i) {
			var next = ((i === this.$targetLengths.length - 1) ? 0 : (i + 1));
			var dist = this.$bodies[i].getWorldCenter().sub(this.$bodies[next].getWorldCenter()).length();
			this.$targetLengths[i] = dist;
		}
		this.$targetVolume = this.$getBodyArea();
		if (ss.isValue(def.joints) && def.joints.length !== def.bodies.length) {
			throw new ss.ArgumentException('Incorrect joint definition.  Joints have to correspond to the bodies');
		}
		if (ss.isNullOrUndefined(def.joints)) {
			var djd = new $org_jbox2d_dynamics_joints_DistanceJointDef();
			this.$distanceJoints = new Array(this.$bodies.length);
			for (var i1 = 0; i1 < this.$targetLengths.length; ++i1) {
				var next1 = ((i1 === this.$targetLengths.length - 1) ? 0 : (i1 + 1));
				djd.frequencyHz = def.frequencyHz;
				// 20.0d;
				djd.dampingRatio = def.dampingRatio;
				// 50.0d;
				djd.collideConnected = def.collideConnected;
				djd.initialize(this.$bodies[i1], this.$bodies[next1], this.$bodies[i1].getWorldCenter(), this.$bodies[next1].getWorldCenter());
				this.$distanceJoints[i1] = ss.cast(this.$world.createJoint(djd), $org_jbox2d_dynamics_joints_DistanceJoint);
			}
		}
		else {
			this.$distanceJoints = Array.prototype.slice.call(def.joints);
		}
		this.$normals = new Array(this.$bodies.length);
		for (var i2 = 0; i2 < this.$normals.length; ++i2) {
			this.$normals[i2] = new $org_jbox2d_common_Vec2();
		}
	};
	$org_jbox2d_dynamics_joints_ConstantVolumeJoint.__typeName = 'org.jbox2d.dynamics.joints.ConstantVolumeJoint';
	global.org.jbox2d.dynamics.joints.ConstantVolumeJoint = $org_jbox2d_dynamics_joints_ConstantVolumeJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.ConstantVolumeJointDef
	var $org_jbox2d_dynamics_joints_ConstantVolumeJointDef = function() {
		this.bodies = null;
		this.dampingRatio = 0;
		this.frequencyHz = 0;
		this.joints = null;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 11;
		this.bodies = [];
		this.joints = null;
		this.collideConnected = false;
		this.frequencyHz = 0;
		this.dampingRatio = 0;
	};
	$org_jbox2d_dynamics_joints_ConstantVolumeJointDef.__typeName = 'org.jbox2d.dynamics.joints.ConstantVolumeJointDef';
	global.org.jbox2d.dynamics.joints.ConstantVolumeJointDef = $org_jbox2d_dynamics_joints_ConstantVolumeJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.DistanceJoint
	var $org_jbox2d_dynamics_joints_DistanceJoint = function(argWorld, def) {
		this.$m_localAnchorA = null;
		this.$m_localAnchorB = null;
		this.$m_localCenterA = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.$m_rA = new $org_jbox2d_common_Vec2();
		this.$m_rB = new $org_jbox2d_common_Vec2();
		this.$m_u = new $org_jbox2d_common_Vec2();
		this.$m_bias = 0;
		this.$m_dampingRatio = 0;
		this.$m_frequencyHz = 0;
		this.$m_gamma = 0;
		this.$m_impulse = 0;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_invIA = 0;
		this.$m_invIB = 0;
		this.$m_invMassA = 0;
		this.$m_invMassB = 0;
		this.$m_length = 0;
		this.$m_mass = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorld, def);
		this.$m_localAnchorA = def.localAnchorA.clone();
		this.$m_localAnchorB = def.localAnchorB.clone();
		this.$m_length = def.length;
		this.$m_impulse = 0;
		this.$m_frequencyHz = def.frequencyHz;
		this.$m_dampingRatio = def.dampingRatio;
		this.$m_gamma = 0;
		this.$m_bias = 0;
	};
	$org_jbox2d_dynamics_joints_DistanceJoint.__typeName = 'org.jbox2d.dynamics.joints.DistanceJoint';
	global.org.jbox2d.dynamics.joints.DistanceJoint = $org_jbox2d_dynamics_joints_DistanceJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.DistanceJointDef
	var $org_jbox2d_dynamics_joints_DistanceJointDef = function() {
		this.localAnchorA = null;
		this.localAnchorB = null;
		this.dampingRatio = 0;
		this.frequencyHz = 0;
		this.length = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 3;
		this.localAnchorA = new $org_jbox2d_common_Vec2.$ctor2(0, 0);
		this.localAnchorB = new $org_jbox2d_common_Vec2.$ctor2(0, 0);
		this.length = 1;
		this.frequencyHz = 0;
		this.dampingRatio = 0;
	};
	$org_jbox2d_dynamics_joints_DistanceJointDef.__typeName = 'org.jbox2d.dynamics.joints.DistanceJointDef';
	global.org.jbox2d.dynamics.joints.DistanceJointDef = $org_jbox2d_dynamics_joints_DistanceJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.FrictionJoint
	var $org_jbox2d_dynamics_joints_FrictionJoint = function(argWorldPool, def) {
		this.$m_linearImpulse = null;
		this.$m_linearMass = new $org_jbox2d_common_Mat22();
		this.$m_localAnchorA = null;
		this.$m_localAnchorB = null;
		this.$m_localCenterA = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.$m_rA = new $org_jbox2d_common_Vec2();
		this.$m_rB = new $org_jbox2d_common_Vec2();
		this.$m_angularImpulse = 0;
		this.$m_angularMass = 0;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_invIA = 0;
		this.$m_invIB = 0;
		this.$m_invMassA = 0;
		this.$m_invMassB = 0;
		this.$m_maxForce = 0;
		this.$m_maxTorque = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorldPool, def);
		this.$m_localAnchorA = new $org_jbox2d_common_Vec2.$ctor1(def.localAnchorA);
		this.$m_localAnchorB = new $org_jbox2d_common_Vec2.$ctor1(def.localAnchorB);
		this.$m_linearImpulse = new $org_jbox2d_common_Vec2();
		this.$m_angularImpulse = 0;
		this.$m_maxForce = def.maxForce;
		this.$m_maxTorque = def.maxTorque;
	};
	$org_jbox2d_dynamics_joints_FrictionJoint.__typeName = 'org.jbox2d.dynamics.joints.FrictionJoint';
	global.org.jbox2d.dynamics.joints.FrictionJoint = $org_jbox2d_dynamics_joints_FrictionJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.FrictionJointDef
	var $org_jbox2d_dynamics_joints_FrictionJointDef = function() {
		this.localAnchorA = null;
		this.localAnchorB = null;
		this.maxForce = 0;
		this.maxTorque = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 9;
		this.localAnchorA = new $org_jbox2d_common_Vec2();
		this.localAnchorB = new $org_jbox2d_common_Vec2();
		this.maxForce = 0;
		this.maxTorque = 0;
	};
	$org_jbox2d_dynamics_joints_FrictionJointDef.__typeName = 'org.jbox2d.dynamics.joints.FrictionJointDef';
	global.org.jbox2d.dynamics.joints.FrictionJointDef = $org_jbox2d_dynamics_joints_FrictionJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.GearJoint
	var $org_jbox2d_dynamics_joints_GearJoint = function(argWorldPool, def) {
		this.$m_JvAC = new $org_jbox2d_common_Vec2();
		this.$m_JvBD = new $org_jbox2d_common_Vec2();
		this.$m_bodyC = null;
		this.$m_bodyD = null;
		this.$m_constant = 0;
		this.$m_joint1 = null;
		this.$m_joint2 = null;
		this.$m_lcA = new $org_jbox2d_common_Vec2();
		this.$m_lcB = new $org_jbox2d_common_Vec2();
		this.$m_lcC = new $org_jbox2d_common_Vec2();
		this.$m_lcD = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorA = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorB = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorC = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorD = new $org_jbox2d_common_Vec2();
		this.$m_localAxisC = new $org_jbox2d_common_Vec2();
		this.$m_localAxisD = new $org_jbox2d_common_Vec2();
		this.$m_referenceAngleA = 0;
		this.$m_referenceAngleB = 0;
		this.$m_typeA = 0;
		this.$m_typeB = 0;
		this.$m_JwA = 0;
		this.$m_JwB = 0;
		this.$m_JwC = 0;
		this.$m_JwD = 0;
		this.$m_iA = 0;
		this.$m_iB = 0;
		this.$m_iC = 0;
		this.$m_iD = 0;
		this.$m_impulse = 0;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_indexC = 0;
		this.$m_indexD = 0;
		this.$m_mA = 0;
		this.$m_mB = 0;
		this.$m_mC = 0;
		this.$m_mD = 0;
		this.$m_mass = 0;
		this.$m_ratio = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorldPool, def);
		this.$m_joint1 = def.joint1;
		this.$m_joint2 = def.joint2;
		this.$m_typeA = this.$m_joint1.getType();
		this.$m_typeB = this.$m_joint2.getType();
		var coordinateA, coordinateB;
		// TODO_ERIN there might be some problem with the joint edges in Joint.
		this.$m_bodyC = this.$m_joint1.getBodyA();
		this.m_bodyA = this.$m_joint1.getBodyB();
		// Get geometry of joint1
		var xfA = this.m_bodyA.m_xf;
		var aA = this.m_bodyA.m_sweep.a;
		var xfC = this.$m_bodyC.m_xf;
		var aC = this.$m_bodyC.m_sweep.a;
		if (this.$m_typeA === 1) {
			var revolute = ss.cast(def.joint1, $org_jbox2d_dynamics_joints_RevoluteJoint);
			this.$m_localAnchorC.set(revolute.m_localAnchorA);
			this.$m_localAnchorA.set(revolute.m_localAnchorB);
			this.$m_referenceAngleA = revolute.m_referenceAngle;
			this.$m_localAxisC.setZero();
			coordinateA = aA - aC - this.$m_referenceAngleA;
		}
		else {
			var pA = this.pool.popVec2();
			var temp = this.pool.popVec2();
			var prismatic = ss.cast(def.joint1, $org_jbox2d_dynamics_joints_PrismaticJoint);
			this.$m_localAnchorC.set(prismatic.m_localAnchorA);
			this.$m_localAnchorA.set(prismatic.m_localAnchorB);
			this.$m_referenceAngleA = prismatic.m_referenceAngle;
			this.$m_localAxisC.set(prismatic.m_localXAxisA);
			var pC = this.$m_localAnchorC;
			$org_jbox2d_common_Rot.mulToOutUnsafe(xfA.q, this.$m_localAnchorA, temp);
			temp.addLocal(xfA.p).subLocal(xfC.p);
			$org_jbox2d_common_Rot.mulTransUnsafe$1(xfC.q, temp, pA);
			coordinateA = $org_jbox2d_common_Vec2.dot(pA.subLocal(pC), this.$m_localAxisC);
			this.pool.pushVec2(2);
		}
		this.$m_bodyD = this.$m_joint2.getBodyA();
		this.m_bodyB = this.$m_joint2.getBodyB();
		// Get geometry of joint2
		var xfB = this.m_bodyB.m_xf;
		var aB = this.m_bodyB.m_sweep.a;
		var xfD = this.$m_bodyD.m_xf;
		var aD = this.$m_bodyD.m_sweep.a;
		if (this.$m_typeB === 1) {
			var revolute1 = ss.cast(def.joint2, $org_jbox2d_dynamics_joints_RevoluteJoint);
			this.$m_localAnchorD.set(revolute1.m_localAnchorA);
			this.$m_localAnchorB.set(revolute1.m_localAnchorB);
			this.$m_referenceAngleB = revolute1.m_referenceAngle;
			this.$m_localAxisD.setZero();
			coordinateB = aB - aD - this.$m_referenceAngleB;
		}
		else {
			var pB = this.pool.popVec2();
			var temp1 = this.pool.popVec2();
			var prismatic1 = ss.cast(def.joint2, $org_jbox2d_dynamics_joints_PrismaticJoint);
			this.$m_localAnchorD.set(prismatic1.m_localAnchorA);
			this.$m_localAnchorB.set(prismatic1.m_localAnchorB);
			this.$m_referenceAngleB = prismatic1.m_referenceAngle;
			this.$m_localAxisD.set(prismatic1.m_localXAxisA);
			var pD = this.$m_localAnchorD;
			$org_jbox2d_common_Rot.mulToOutUnsafe(xfB.q, this.$m_localAnchorB, temp1);
			temp1.addLocal(xfB.p).subLocal(xfD.p);
			$org_jbox2d_common_Rot.mulTransUnsafe$1(xfD.q, temp1, pB);
			coordinateB = $org_jbox2d_common_Vec2.dot(pB.subLocal(pD), this.$m_localAxisD);
			this.pool.pushVec2(2);
		}
		this.$m_ratio = def.ratio;
		this.$m_constant = coordinateA + this.$m_ratio * coordinateB;
		this.$m_impulse = 0;
	};
	$org_jbox2d_dynamics_joints_GearJoint.__typeName = 'org.jbox2d.dynamics.joints.GearJoint';
	global.org.jbox2d.dynamics.joints.GearJoint = $org_jbox2d_dynamics_joints_GearJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.GearJointDef
	var $org_jbox2d_dynamics_joints_GearJointDef = function() {
		this.joint1 = null;
		this.joint2 = null;
		this.ratio = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 6;
		this.joint1 = null;
		this.joint2 = null;
	};
	$org_jbox2d_dynamics_joints_GearJointDef.__typeName = 'org.jbox2d.dynamics.joints.GearJointDef';
	global.org.jbox2d.dynamics.joints.GearJointDef = $org_jbox2d_dynamics_joints_GearJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.Jacobian
	var $org_jbox2d_dynamics_joints_Jacobian = function() {
		this.linearA = new $org_jbox2d_common_Vec2();
		this.angularA = 0;
		this.angularB = 0;
	};
	$org_jbox2d_dynamics_joints_Jacobian.__typeName = 'org.jbox2d.dynamics.joints.Jacobian';
	global.org.jbox2d.dynamics.joints.Jacobian = $org_jbox2d_dynamics_joints_Jacobian;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.Joint
	var $org_jbox2d_dynamics_joints_Joint = function(worldPool, def) {
		this.$m_collideConnected = false;
		this.$m_type = 0;
		this.m_bodyA = null;
		this.m_bodyB = null;
		this.m_edgeA = null;
		this.m_edgeB = null;
		this.m_islandFlag = false;
		this.m_next = null;
		this.m_prev = null;
		this.m_userData = null;
		this.pool = null;
		this.pool = worldPool;
		this.$m_type = def.type;
		this.m_prev = null;
		this.m_next = null;
		this.m_bodyA = def.bodyA;
		this.m_bodyB = def.bodyB;
		this.$m_collideConnected = def.collideConnected;
		this.m_islandFlag = false;
		this.m_userData = def.userData;
		this.m_edgeA = new $org_jbox2d_dynamics_joints_JointEdge();
		this.m_edgeA.joint = null;
		this.m_edgeA.other = null;
		this.m_edgeA.prev = null;
		this.m_edgeA.next = null;
		this.m_edgeB = new $org_jbox2d_dynamics_joints_JointEdge();
		this.m_edgeB.joint = null;
		this.m_edgeB.other = null;
		this.m_edgeB.prev = null;
		this.m_edgeB.next = null;
		// m_localCenterA = new Vec2();
		// m_localCenterB = new Vec2();
	};
	$org_jbox2d_dynamics_joints_Joint.__typeName = 'org.jbox2d.dynamics.joints.Joint';
	$org_jbox2d_dynamics_joints_Joint.create = function(world, def) {
		// Joint joint = null;
		switch (def.type) {
			case 5: {
				return new $org_jbox2d_dynamics_joints_MouseJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_MouseJointDef));
			}
			case 3: {
				return new $org_jbox2d_dynamics_joints_DistanceJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_DistanceJointDef));
			}
			case 2: {
				return new $org_jbox2d_dynamics_joints_PrismaticJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_PrismaticJointDef));
			}
			case 1: {
				return new $org_jbox2d_dynamics_joints_RevoluteJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_RevoluteJointDef));
			}
			case 8: {
				return new $org_jbox2d_dynamics_joints_WeldJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_WeldJointDef));
			}
			case 9: {
				return new $org_jbox2d_dynamics_joints_FrictionJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_FrictionJointDef));
			}
			case 7: {
				return new $org_jbox2d_dynamics_joints_WheelJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_WheelJointDef));
			}
			case 6: {
				return new $org_jbox2d_dynamics_joints_GearJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_GearJointDef));
			}
			case 4: {
				return new $org_jbox2d_dynamics_joints_PulleyJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_PulleyJointDef));
			}
			case 11: {
				return new $org_jbox2d_dynamics_joints_ConstantVolumeJoint(world, ss.cast(def, $org_jbox2d_dynamics_joints_ConstantVolumeJointDef));
			}
			case 10: {
				return new $org_jbox2d_dynamics_joints_RopeJoint(world.getPool(), ss.cast(def, $org_jbox2d_dynamics_joints_RopeJointDef));
			}
			case 0:
			default: {
				return null;
			}
		}
	};
	$org_jbox2d_dynamics_joints_Joint.destroy = function(joint) {
		joint.destructor();
	};
	global.org.jbox2d.dynamics.joints.Joint = $org_jbox2d_dynamics_joints_Joint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.JointDef
	var $org_jbox2d_dynamics_joints_JointDef = function() {
		this.bodyA = null;
		this.bodyB = null;
		this.collideConnected = false;
		this.type = 0;
		this.userData = null;
		this.type = 0;
		this.userData = null;
		this.bodyA = null;
		this.bodyB = null;
		this.collideConnected = false;
	};
	$org_jbox2d_dynamics_joints_JointDef.__typeName = 'org.jbox2d.dynamics.joints.JointDef';
	global.org.jbox2d.dynamics.joints.JointDef = $org_jbox2d_dynamics_joints_JointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.JointEdge
	var $org_jbox2d_dynamics_joints_JointEdge = function() {
		this.joint = null;
		this.next = null;
		this.other = null;
		this.prev = null;
	};
	$org_jbox2d_dynamics_joints_JointEdge.__typeName = 'org.jbox2d.dynamics.joints.JointEdge';
	global.org.jbox2d.dynamics.joints.JointEdge = $org_jbox2d_dynamics_joints_JointEdge;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.JointType
	var $org_jbox2d_dynamics_joints_JointType = function() {
	};
	$org_jbox2d_dynamics_joints_JointType.__typeName = 'org.jbox2d.dynamics.joints.JointType';
	global.org.jbox2d.dynamics.joints.JointType = $org_jbox2d_dynamics_joints_JointType;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.LimitState
	var $org_jbox2d_dynamics_joints_LimitState = function() {
	};
	$org_jbox2d_dynamics_joints_LimitState.__typeName = 'org.jbox2d.dynamics.joints.LimitState';
	global.org.jbox2d.dynamics.joints.LimitState = $org_jbox2d_dynamics_joints_LimitState;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.MouseJoint
	var $org_jbox2d_dynamics_joints_MouseJoint = function(argWorld, def) {
		this.$m_C = new $org_jbox2d_common_Vec2();
		this.$m_impulse = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorB = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.$m_mass = new $org_jbox2d_common_Mat22();
		this.$m_rB = new $org_jbox2d_common_Vec2();
		this.$m_targetA = new $org_jbox2d_common_Vec2();
		this.$m_beta = 0;
		this.$m_dampingRatio = 0;
		this.$m_frequencyHz = 0;
		this.$m_gamma = 0;
		this.$m_indexB = 0;
		this.$m_invIB = 0;
		this.$m_invMassB = 0;
		this.$m_maxForce = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorld, def);
		this.$m_targetA.set(def.target);
		$org_jbox2d_common_Transform.mulTransToOutUnsafe$1(this.m_bodyB.getTransform(), this.$m_targetA, this.$m_localAnchorB);
		this.$m_maxForce = def.maxForce;
		this.$m_impulse.setZero();
		this.$m_frequencyHz = def.frequencyHz;
		this.$m_dampingRatio = def.dampingRatio;
		this.$m_beta = 0;
		this.$m_gamma = 0;
	};
	$org_jbox2d_dynamics_joints_MouseJoint.__typeName = 'org.jbox2d.dynamics.joints.MouseJoint';
	global.org.jbox2d.dynamics.joints.MouseJoint = $org_jbox2d_dynamics_joints_MouseJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.MouseJointDef
	var $org_jbox2d_dynamics_joints_MouseJointDef = function() {
		this.target = new $org_jbox2d_common_Vec2();
		this.dampingRatio = 0;
		this.frequencyHz = 0;
		this.maxForce = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 5;
		this.target.set$1(0, 0);
		this.maxForce = 0;
		this.frequencyHz = 5;
		this.dampingRatio = 0.7;
	};
	$org_jbox2d_dynamics_joints_MouseJointDef.__typeName = 'org.jbox2d.dynamics.joints.MouseJointDef';
	global.org.jbox2d.dynamics.joints.MouseJointDef = $org_jbox2d_dynamics_joints_MouseJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.PrismaticJoint
	var $org_jbox2d_dynamics_joints_PrismaticJoint = function(argWorld, def) {
		this.$m_K = null;
		this.$m_axis = null;
		this.$m_impulse = null;
		this.m_localAnchorA = null;
		this.m_localAnchorB = null;
		this.$m_localCenterA = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.m_localXAxisA = null;
		this.m_localYAxisA = null;
		this.$m_perp = null;
		this.$m_a1 = 0;
		this.$m_a2 = 0;
		this.$m_enableLimit = false;
		this.$m_enableMotor = false;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_invIA = 0;
		this.$m_invIB = 0;
		this.$m_invMassA = 0;
		this.$m_invMassB = 0;
		this.$m_limitState = 0;
		this.$m_lowerTranslation = 0;
		this.$m_maxMotorForce = 0;
		this.$m_motorImpulse = 0;
		this.$m_motorMass = 0;
		this.$m_motorSpeed = 0;
		this.m_referenceAngle = 0;
		this.$m_s1 = 0;
		this.$m_s2 = 0;
		this.$m_upperTranslation = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorld, def);
		this.m_localAnchorA = new $org_jbox2d_common_Vec2.$ctor1(def.localAnchorA);
		this.m_localAnchorB = new $org_jbox2d_common_Vec2.$ctor1(def.localAnchorB);
		this.m_localXAxisA = new $org_jbox2d_common_Vec2.$ctor1(def.localAxisA);
		this.m_localXAxisA.normalize();
		this.m_localYAxisA = new $org_jbox2d_common_Vec2();
		$org_jbox2d_common_Vec2.crossToOutUnsafe(1, this.m_localXAxisA, this.m_localYAxisA);
		this.m_referenceAngle = def.referenceAngle;
		this.$m_impulse = new $org_jbox2d_common_Vec3();
		this.$m_motorMass = 0;
		this.$m_motorImpulse = 0;
		this.$m_lowerTranslation = def.lowerTranslation;
		this.$m_upperTranslation = def.upperTranslation;
		this.$m_maxMotorForce = def.maxMotorForce;
		this.$m_motorSpeed = def.motorSpeed;
		this.$m_enableLimit = def.enableLimit;
		this.$m_enableMotor = def.enableMotor;
		this.$m_limitState = 0;
		this.$m_K = new $org_jbox2d_common_Mat33();
		this.$m_axis = new $org_jbox2d_common_Vec2();
		this.$m_perp = new $org_jbox2d_common_Vec2();
	};
	$org_jbox2d_dynamics_joints_PrismaticJoint.__typeName = 'org.jbox2d.dynamics.joints.PrismaticJoint';
	global.org.jbox2d.dynamics.joints.PrismaticJoint = $org_jbox2d_dynamics_joints_PrismaticJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.PrismaticJointDef
	var $org_jbox2d_dynamics_joints_PrismaticJointDef = function() {
		this.localAnchorA = null;
		this.localAnchorB = null;
		this.localAxisA = null;
		this.enableLimit = false;
		this.enableMotor = false;
		this.lowerTranslation = 0;
		this.maxMotorForce = 0;
		this.motorSpeed = 0;
		this.referenceAngle = 0;
		this.upperTranslation = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 2;
		this.localAnchorA = new $org_jbox2d_common_Vec2();
		this.localAnchorB = new $org_jbox2d_common_Vec2();
		this.localAxisA = new $org_jbox2d_common_Vec2.$ctor2(1, 0);
		this.referenceAngle = 0;
		this.enableLimit = false;
		this.lowerTranslation = 0;
		this.upperTranslation = 0;
		this.enableMotor = false;
		this.maxMotorForce = 0;
		this.motorSpeed = 0;
	};
	$org_jbox2d_dynamics_joints_PrismaticJointDef.__typeName = 'org.jbox2d.dynamics.joints.PrismaticJointDef';
	global.org.jbox2d.dynamics.joints.PrismaticJointDef = $org_jbox2d_dynamics_joints_PrismaticJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.PulleyJoint
	var $org_jbox2d_dynamics_joints_PulleyJoint = function(argWorldPool, def) {
		this.$m_constant = 0;
		this.$m_groundAnchorA = new $org_jbox2d_common_Vec2();
		this.$m_groundAnchorB = new $org_jbox2d_common_Vec2();
		this.$m_lengthA = 0;
		this.$m_lengthB = 0;
		this.$m_localAnchorA = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorB = new $org_jbox2d_common_Vec2();
		this.$m_localCenterA = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.$m_rA = new $org_jbox2d_common_Vec2();
		this.$m_rB = new $org_jbox2d_common_Vec2();
		this.$m_ratio = 0;
		this.$m_uA = new $org_jbox2d_common_Vec2();
		this.$m_uB = new $org_jbox2d_common_Vec2();
		this.$m_impulse = 0;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_invIA = 0;
		this.$m_invIB = 0;
		this.$m_invMassA = 0;
		this.$m_invMassB = 0;
		this.$m_mass = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorldPool, def);
		this.$m_groundAnchorA.set(def.groundAnchorA);
		this.$m_groundAnchorB.set(def.groundAnchorB);
		this.$m_localAnchorA.set(def.localAnchorA);
		this.$m_localAnchorB.set(def.localAnchorB);
		this.$m_ratio = def.ratio;
		this.$m_lengthA = def.lengthA;
		this.$m_lengthB = def.lengthB;
		this.$m_constant = def.lengthA + this.$m_ratio * def.lengthB;
		this.$m_impulse = 0;
	};
	$org_jbox2d_dynamics_joints_PulleyJoint.__typeName = 'org.jbox2d.dynamics.joints.PulleyJoint';
	global.org.jbox2d.dynamics.joints.PulleyJoint = $org_jbox2d_dynamics_joints_PulleyJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.PulleyJointDef
	var $org_jbox2d_dynamics_joints_PulleyJointDef = function() {
		this.groundAnchorA = null;
		this.groundAnchorB = null;
		this.lengthA = 0;
		this.lengthB = 0;
		this.localAnchorA = null;
		this.localAnchorB = null;
		this.ratio = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 4;
		this.groundAnchorA = new $org_jbox2d_common_Vec2.$ctor2(-1, 1);
		this.groundAnchorB = new $org_jbox2d_common_Vec2.$ctor2(1, 1);
		this.localAnchorA = new $org_jbox2d_common_Vec2.$ctor2(-1, 0);
		this.localAnchorB = new $org_jbox2d_common_Vec2.$ctor2(1, 0);
		this.lengthA = 0;
		this.lengthB = 0;
		this.ratio = 1;
		this.collideConnected = true;
	};
	$org_jbox2d_dynamics_joints_PulleyJointDef.__typeName = 'org.jbox2d.dynamics.joints.PulleyJointDef';
	global.org.jbox2d.dynamics.joints.PulleyJointDef = $org_jbox2d_dynamics_joints_PulleyJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.RevoluteJoint
	var $org_jbox2d_dynamics_joints_RevoluteJoint = function(argWorld, def) {
		this.$m_impulse = new $org_jbox2d_common_Vec3();
		this.m_localAnchorA = new $org_jbox2d_common_Vec2();
		this.m_localAnchorB = new $org_jbox2d_common_Vec2();
		this.$m_localCenterA = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.$m_mass = new $org_jbox2d_common_Mat33();
		this.$m_rA = new $org_jbox2d_common_Vec2();
		this.$m_rB = new $org_jbox2d_common_Vec2();
		this.$m_enableLimit = false;
		this.$m_enableMotor = false;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_invIA = 0;
		this.$m_invIB = 0;
		this.$m_invMassA = 0;
		this.$m_invMassB = 0;
		this.$m_limitState = 0;
		this.$m_lowerAngle = 0;
		this.$m_maxMotorTorque = 0;
		this.$m_motorImpulse = 0;
		this.$m_motorMass = 0;
		this.$m_motorSpeed = 0;
		this.m_referenceAngle = 0;
		this.$m_upperAngle = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorld, def);
		this.m_localAnchorA.set(def.localAnchorA);
		this.m_localAnchorB.set(def.localAnchorB);
		this.m_referenceAngle = def.referenceAngle;
		this.$m_motorImpulse = 0;
		this.$m_lowerAngle = def.lowerAngle;
		this.$m_upperAngle = def.upperAngle;
		this.$m_maxMotorTorque = def.maxMotorTorque;
		this.$m_motorSpeed = def.motorSpeed;
		this.$m_enableLimit = def.enableLimit;
		this.$m_enableMotor = def.enableMotor;
		this.$m_limitState = 0;
	};
	$org_jbox2d_dynamics_joints_RevoluteJoint.__typeName = 'org.jbox2d.dynamics.joints.RevoluteJoint';
	global.org.jbox2d.dynamics.joints.RevoluteJoint = $org_jbox2d_dynamics_joints_RevoluteJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.RevoluteJointDef
	var $org_jbox2d_dynamics_joints_RevoluteJointDef = function() {
		this.enableLimit = false;
		this.enableMotor = false;
		this.localAnchorA = null;
		this.localAnchorB = null;
		this.lowerAngle = 0;
		this.maxMotorTorque = 0;
		this.motorSpeed = 0;
		this.referenceAngle = 0;
		this.upperAngle = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 1;
		this.localAnchorA = new $org_jbox2d_common_Vec2.$ctor2(0, 0);
		this.localAnchorB = new $org_jbox2d_common_Vec2.$ctor2(0, 0);
		this.referenceAngle = 0;
		this.lowerAngle = 0;
		this.upperAngle = 0;
		this.maxMotorTorque = 0;
		this.motorSpeed = 0;
		this.enableLimit = false;
		this.enableMotor = false;
	};
	$org_jbox2d_dynamics_joints_RevoluteJointDef.__typeName = 'org.jbox2d.dynamics.joints.RevoluteJointDef';
	global.org.jbox2d.dynamics.joints.RevoluteJointDef = $org_jbox2d_dynamics_joints_RevoluteJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.RopeJoint
	var $org_jbox2d_dynamics_joints_RopeJoint = function(worldPool, def) {
		this.$m_localAnchorA = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorB = new $org_jbox2d_common_Vec2();
		this.$m_localCenterA = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.$m_rA = new $org_jbox2d_common_Vec2();
		this.$m_rB = new $org_jbox2d_common_Vec2();
		this.$m_u = new $org_jbox2d_common_Vec2();
		this.$m_impulse = 0;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_invIA = 0;
		this.$m_invIB = 0;
		this.$m_invMassA = 0;
		this.$m_invMassB = 0;
		this.$m_length = 0;
		this.$m_mass = 0;
		this.$m_maxLength = 0;
		this.$m_state = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, worldPool, def);
		this.$m_localAnchorA.set(def.localAnchorA);
		this.$m_localAnchorB.set(def.localAnchorB);
		this.$m_maxLength = def.maxLength;
		this.$m_mass = 0;
		this.$m_impulse = 0;
		this.$m_state = 0;
		this.$m_length = 0;
	};
	$org_jbox2d_dynamics_joints_RopeJoint.__typeName = 'org.jbox2d.dynamics.joints.RopeJoint';
	global.org.jbox2d.dynamics.joints.RopeJoint = $org_jbox2d_dynamics_joints_RopeJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.RopeJointDef
	var $org_jbox2d_dynamics_joints_RopeJointDef = function() {
		this.localAnchorA = new $org_jbox2d_common_Vec2();
		this.localAnchorB = new $org_jbox2d_common_Vec2();
		this.maxLength = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 10;
		this.localAnchorA.set$1(-1, 0);
		this.localAnchorB.set$1(1, 0);
	};
	$org_jbox2d_dynamics_joints_RopeJointDef.__typeName = 'org.jbox2d.dynamics.joints.RopeJointDef';
	global.org.jbox2d.dynamics.joints.RopeJointDef = $org_jbox2d_dynamics_joints_RopeJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.WeldJoint
	var $org_jbox2d_dynamics_joints_WeldJoint = function(argWorld, def) {
		this.$m_impulse = null;
		this.$m_localAnchorA = null;
		this.$m_localAnchorB = null;
		this.$m_localCenterA = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.$m_mass = new $org_jbox2d_common_Mat33();
		this.$m_rA = new $org_jbox2d_common_Vec2();
		this.$m_rB = new $org_jbox2d_common_Vec2();
		this.$m_referenceAngle = 0;
		this.$m_bias = 0;
		this.$m_dampingRatio = 0;
		this.$m_frequencyHz = 0;
		this.$m_gamma = 0;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_invIA = 0;
		this.$m_invIB = 0;
		this.$m_invMassA = 0;
		this.$m_invMassB = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argWorld, def);
		this.$m_localAnchorA = new $org_jbox2d_common_Vec2.$ctor1(def.localAnchorA);
		this.$m_localAnchorB = new $org_jbox2d_common_Vec2.$ctor1(def.localAnchorB);
		this.$m_referenceAngle = def.referenceAngle;
		this.$m_frequencyHz = def.frequencyHz;
		this.$m_dampingRatio = def.dampingRatio;
		this.$m_impulse = new $org_jbox2d_common_Vec3();
		this.$m_impulse.setZero();
	};
	$org_jbox2d_dynamics_joints_WeldJoint.__typeName = 'org.jbox2d.dynamics.joints.WeldJoint';
	global.org.jbox2d.dynamics.joints.WeldJoint = $org_jbox2d_dynamics_joints_WeldJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.WeldJointDef
	var $org_jbox2d_dynamics_joints_WeldJointDef = function() {
		this.localAnchorA = null;
		this.localAnchorB = null;
		this.dampingRatio = 0;
		this.frequencyHz = 0;
		this.referenceAngle = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 8;
		this.localAnchorA = new $org_jbox2d_common_Vec2();
		this.localAnchorB = new $org_jbox2d_common_Vec2();
		this.referenceAngle = 0;
	};
	$org_jbox2d_dynamics_joints_WeldJointDef.__typeName = 'org.jbox2d.dynamics.joints.WeldJointDef';
	global.org.jbox2d.dynamics.joints.WeldJointDef = $org_jbox2d_dynamics_joints_WeldJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.WheelJoint
	var $org_jbox2d_dynamics_joints_WheelJoint = function(argPool, def) {
		this.$d2 = new $org_jbox2d_common_Vec2();
		this.$m_ax = new $org_jbox2d_common_Vec2();
		this.$m_ay = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorA = new $org_jbox2d_common_Vec2();
		this.$m_localAnchorB = new $org_jbox2d_common_Vec2();
		this.$m_localCenterA = new $org_jbox2d_common_Vec2();
		this.$m_localCenterB = new $org_jbox2d_common_Vec2();
		this.$m_localXAxisA = new $org_jbox2d_common_Vec2();
		this.$m_localYAxisA = new $org_jbox2d_common_Vec2();
		this.$rA = new $org_jbox2d_common_Vec2();
		this.$rB = new $org_jbox2d_common_Vec2();
		this.$m_bias = 0;
		this.$m_dampingRatio = 0;
		this.$m_enableMotor = false;
		this.$m_frequencyHz = 0;
		this.$m_gamma = 0;
		this.$m_impulse = 0;
		this.$m_indexA = 0;
		this.$m_indexB = 0;
		this.$m_invIA = 0;
		this.$m_invIB = 0;
		this.$m_invMassA = 0;
		this.$m_invMassB = 0;
		this.$m_mass = 0;
		this.$m_maxMotorTorque = 0;
		this.$m_motorImpulse = 0;
		this.$m_motorMass = 0;
		this.$m_motorSpeed = 0;
		this.$m_sAx = 0;
		this.$m_sAy = 0;
		this.$m_sBx = 0;
		this.$m_sBy = 0;
		this.$m_springImpulse = 0;
		this.$m_springMass = 0;
		$org_jbox2d_dynamics_joints_Joint.call(this, argPool, def);
		this.$m_localAnchorA.set(def.localAnchorA);
		this.$m_localAnchorB.set(def.localAnchorB);
		this.$m_localXAxisA.set(def.localAxisA);
		$org_jbox2d_common_Vec2.crossToOutUnsafe(1, this.$m_localXAxisA, this.$m_localYAxisA);
		this.$m_motorMass = 0;
		this.$m_motorImpulse = 0;
		this.$m_maxMotorTorque = def.maxMotorTorque;
		this.$m_motorSpeed = def.motorSpeed;
		this.$m_enableMotor = def.enableMotor;
		this.$m_frequencyHz = def.frequencyHz;
		this.$m_dampingRatio = def.dampingRatio;
	};
	$org_jbox2d_dynamics_joints_WheelJoint.__typeName = 'org.jbox2d.dynamics.joints.WheelJoint';
	global.org.jbox2d.dynamics.joints.WheelJoint = $org_jbox2d_dynamics_joints_WheelJoint;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.dynamics.joints.WheelJointDef
	var $org_jbox2d_dynamics_joints_WheelJointDef = function() {
		this.localAnchorA = new $org_jbox2d_common_Vec2();
		this.localAnchorB = new $org_jbox2d_common_Vec2();
		this.localAxisA = new $org_jbox2d_common_Vec2();
		this.dampingRatio = 0;
		this.enableMotor = false;
		this.frequencyHz = 0;
		this.maxMotorTorque = 0;
		this.motorSpeed = 0;
		$org_jbox2d_dynamics_joints_JointDef.call(this);
		this.type = 7;
		this.localAxisA.set$1(1, 0);
		this.enableMotor = false;
		this.maxMotorTorque = 0;
		this.motorSpeed = 0;
	};
	$org_jbox2d_dynamics_joints_WheelJointDef.__typeName = 'org.jbox2d.dynamics.joints.WheelJointDef';
	global.org.jbox2d.dynamics.joints.WheelJointDef = $org_jbox2d_dynamics_joints_WheelJointDef;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.IDynamicStack
	var $org_jbox2d_pooling_IDynamicStack$1 = function(E) {
		var $type = function() {
		};
		ss.registerGenericInterfaceInstance($type, $org_jbox2d_pooling_IDynamicStack$1, [E], { pop: null, push: null }, function() {
			return [];
		});
		return $type;
	};
	$org_jbox2d_pooling_IDynamicStack$1.__typeName = 'org.jbox2d.pooling.IDynamicStack$1';
	ss.initGenericInterface($org_jbox2d_pooling_IDynamicStack$1, 1);
	global.org.jbox2d.pooling.IDynamicStack$1 = $org_jbox2d_pooling_IDynamicStack$1;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.IOrderedStack
	var $org_jbox2d_pooling_IOrderedStack$1 = function(E) {
		var $type = function() {
		};
		ss.registerGenericInterfaceInstance($type, $org_jbox2d_pooling_IOrderedStack$1, [E], { pop: null, pop$1: null, push: null }, function() {
			return [];
		});
		return $type;
	};
	$org_jbox2d_pooling_IOrderedStack$1.__typeName = 'org.jbox2d.pooling.IOrderedStack$1';
	ss.initGenericInterface($org_jbox2d_pooling_IOrderedStack$1, 1);
	global.org.jbox2d.pooling.IOrderedStack$1 = $org_jbox2d_pooling_IOrderedStack$1;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.IWorldPool
	var $org_jbox2d_pooling_IWorldPool = function() {
	};
	$org_jbox2d_pooling_IWorldPool.__typeName = 'org.jbox2d.pooling.IWorldPool';
	global.org.jbox2d.pooling.IWorldPool = $org_jbox2d_pooling_IWorldPool;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.arrays.DoubleArray
	var $org_jbox2d_pooling_arrays_DoubleArray = function() {
		this.$map = new (ss.makeGenericType(ss.Dictionary$2, [ss.Int32, Array]))();
	};
	$org_jbox2d_pooling_arrays_DoubleArray.__typeName = 'org.jbox2d.pooling.arrays.DoubleArray';
	global.org.jbox2d.pooling.arrays.DoubleArray = $org_jbox2d_pooling_arrays_DoubleArray;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.arrays.IntArray
	var $org_jbox2d_pooling_arrays_IntArray = function() {
		this.$map = new (ss.makeGenericType(ss.Dictionary$2, [ss.Int32, Array]))();
	};
	$org_jbox2d_pooling_arrays_IntArray.__typeName = 'org.jbox2d.pooling.arrays.IntArray';
	global.org.jbox2d.pooling.arrays.IntArray = $org_jbox2d_pooling_arrays_IntArray;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.arrays.Vec2Array
	var $org_jbox2d_pooling_arrays_Vec2Array = function() {
		this.$map = new (ss.makeGenericType(ss.Dictionary$2, [ss.Int32, Array]))();
	};
	$org_jbox2d_pooling_arrays_Vec2Array.__typeName = 'org.jbox2d.pooling.arrays.Vec2Array';
	global.org.jbox2d.pooling.arrays.Vec2Array = $org_jbox2d_pooling_arrays_Vec2Array;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.normal.CircleStack
	var $org_jbox2d_pooling_normal_CircleStack$1 = function(E) {
		var $type = function(argStackSize, argContainerSize) {
			this.$container = null;
			this.$pool = null;
			this.$size = 0;
			this.$index = 0;
			this.$size = argStackSize;
			this.$pool = new Array(argStackSize);
			for (var i = 0; i < argStackSize; i++) {
				this.$pool[i] = this.newInstance();
			}
			this.$index = 0;
			this.$container = new Array(argContainerSize);
		};
		ss.registerGenericClassInstance($type, $org_jbox2d_pooling_normal_CircleStack$1, [E], {
			pop: function() {
				this.$index++;
				if (this.$index >= this.$size) {
					this.$index = 0;
				}
				return this.$pool[this.$index];
			},
			pop$1: function(argNum) {
				if (this.$index + argNum < this.$size) {
					$org_jbox2d_dynamics_ArrayHelper.copy(this.$pool, this.$index, this.$container, 0, argNum);
					this.$index += argNum;
				}
				else {
					var overlap = this.$index + argNum - this.$size;
					$org_jbox2d_dynamics_ArrayHelper.copy(this.$pool, this.$index, this.$container, 0, argNum - overlap);
					$org_jbox2d_dynamics_ArrayHelper.copy(this.$pool, 0, this.$container, argNum - overlap, overlap);
					this.$index = overlap;
				}
				return this.$container;
			},
			push: function(argNum) {
			},
			newInstance: null
		}, function() {
			return null;
		}, function() {
			return [ss.makeGenericType($org_jbox2d_pooling_IOrderedStack$1, [E])];
		});
		return $type;
	};
	$org_jbox2d_pooling_normal_CircleStack$1.__typeName = 'org.jbox2d.pooling.normal.CircleStack$1';
	ss.initGenericClass($org_jbox2d_pooling_normal_CircleStack$1, 1);
	global.org.jbox2d.pooling.normal.CircleStack$1 = $org_jbox2d_pooling_normal_CircleStack$1;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.normal.DefaultWorldPool
	var $org_jbox2d_pooling_normal_DefaultWorldPool = function(argSize, argContainerSize) {
		this.$aabbs = null;
		this.$adoubles = new (ss.makeGenericType(ss.Dictionary$2, [ss.Int32, Array]))();
		this.$aints = new (ss.makeGenericType(ss.Dictionary$2, [ss.Int32, Array]))();
		this.$avecs = new (ss.makeGenericType(ss.Dictionary$2, [ss.Int32, Array]))();
		this.$ccstack = null;
		this.$chcstack = null;
		this.$chpstack = null;
		this.$collision = null;
		this.$cpstack = null;
		this.$dist = null;
		this.$ecstack = null;
		this.$epstack = null;
		this.$mat33s = null;
		this.$mats = null;
		this.$pcstack = null;
		this.$rots = null;
		this.$toi = null;
		this.$vec3s = null;
		this.$vecs = null;
		this.$world = null;
		this.$world = this;
		var $t1 = new (ss.makeGenericType($org_jbox2d_pooling_normal_MutableStack$1, [$org_jbox2d_dynamics_contacts_Contact]))($org_jbox2d_common_Settings.contacT_STACK_INIT_SIZE);
		$t1.set_newInstance(ss.mkdel(this, function() {
			return new $org_jbox2d_dynamics_contacts_PolygonContact(this.$world);
		}));
		this.$pcstack = $t1;
		var $t2 = new (ss.makeGenericType($org_jbox2d_pooling_normal_MutableStack$1, [$org_jbox2d_dynamics_contacts_Contact]))($org_jbox2d_common_Settings.contacT_STACK_INIT_SIZE);
		$t2.set_newInstance(ss.mkdel(this, function() {
			return new $org_jbox2d_dynamics_contacts_CircleContact(this.$world);
		}));
		this.$ccstack = $t2;
		var $t3 = new (ss.makeGenericType($org_jbox2d_pooling_normal_MutableStack$1, [$org_jbox2d_dynamics_contacts_Contact]))($org_jbox2d_common_Settings.contacT_STACK_INIT_SIZE);
		$t3.set_newInstance(ss.mkdel(this, function() {
			return new $org_jbox2d_dynamics_contacts_PolygonAndCircleContact(this.$world);
		}));
		this.$cpstack = $t3;
		var $t4 = new (ss.makeGenericType($org_jbox2d_pooling_normal_MutableStack$1, [$org_jbox2d_dynamics_contacts_Contact]))($org_jbox2d_common_Settings.contacT_STACK_INIT_SIZE);
		$t4.set_newInstance(ss.mkdel(this, function() {
			return new $org_jbox2d_dynamics_contacts_EdgeAndCircleContact(this.$world);
		}));
		this.$ecstack = $t4;
		var $t5 = new (ss.makeGenericType($org_jbox2d_pooling_normal_MutableStack$1, [$org_jbox2d_dynamics_contacts_Contact]))($org_jbox2d_common_Settings.contacT_STACK_INIT_SIZE);
		$t5.set_newInstance(ss.mkdel(this, function() {
			return new $org_jbox2d_dynamics_contacts_EdgeAndPolygonContact(this.$world);
		}));
		this.$epstack = $t5;
		var $t6 = new (ss.makeGenericType($org_jbox2d_pooling_normal_MutableStack$1, [$org_jbox2d_dynamics_contacts_Contact]))($org_jbox2d_common_Settings.contacT_STACK_INIT_SIZE);
		$t6.set_newInstance(ss.mkdel(this, function() {
			return new $org_jbox2d_dynamics_contacts_ChainAndCircleContact(this.$world);
		}));
		this.$chcstack = $t6;
		var $t7 = new (ss.makeGenericType($org_jbox2d_pooling_normal_MutableStack$1, [$org_jbox2d_dynamics_contacts_Contact]))($org_jbox2d_common_Settings.contacT_STACK_INIT_SIZE);
		$t7.set_newInstance(ss.mkdel(this, function() {
			return new $org_jbox2d_dynamics_contacts_ChainAndPolygonContact(this.$world);
		}));
		this.$chpstack = $t7;
		var $t8 = new (ss.makeGenericType($org_jbox2d_pooling_normal_OrderedStack$1, [$org_jbox2d_common_Vec2]))(argSize, argContainerSize);
		$t8.set_newInstance(function() {
			return new $org_jbox2d_common_Vec2();
		});
		this.$vecs = $t8;
		var $t9 = new (ss.makeGenericType($org_jbox2d_pooling_normal_OrderedStack$1, [$org_jbox2d_common_Vec3]))(argSize, argContainerSize);
		$t9.set_newInstance(function() {
			return new $org_jbox2d_common_Vec3();
		});
		this.$vec3s = $t9;
		var $t10 = new (ss.makeGenericType($org_jbox2d_pooling_normal_OrderedStack$1, [$org_jbox2d_common_Mat22]))(argSize, argContainerSize);
		$t10.set_newInstance(function() {
			return new $org_jbox2d_common_Mat22();
		});
		this.$mats = $t10;
		var $t11 = new (ss.makeGenericType($org_jbox2d_pooling_normal_OrderedStack$1, [$org_jbox2d_collision_AABB]))(argSize, argContainerSize);
		$t11.set_newInstance(function() {
			return new $org_jbox2d_collision_AABB();
		});
		this.$aabbs = $t11;
		var $t12 = new (ss.makeGenericType($org_jbox2d_pooling_normal_OrderedStack$1, [$org_jbox2d_common_Rot]))(argSize, argContainerSize);
		$t12.set_newInstance(function() {
			return new $org_jbox2d_common_Rot();
		});
		this.$rots = $t12;
		var $t13 = new (ss.makeGenericType($org_jbox2d_pooling_normal_OrderedStack$1, [$org_jbox2d_common_Mat33]))(argSize, argContainerSize);
		$t13.set_newInstance(function() {
			return new $org_jbox2d_common_Mat33();
		});
		this.$mat33s = $t13;
		this.$dist = new $org_jbox2d_collision_Distance();
		this.$collision = new $org_jbox2d_collision_Collision(this);
		this.$toi = new $org_jbox2d_collision_TimeOfImpact(this);
	};
	$org_jbox2d_pooling_normal_DefaultWorldPool.__typeName = 'org.jbox2d.pooling.normal.DefaultWorldPool';
	global.org.jbox2d.pooling.normal.DefaultWorldPool = $org_jbox2d_pooling_normal_DefaultWorldPool;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.normal.MutableStack
	var $org_jbox2d_pooling_normal_MutableStack$1 = function(E) {
		var $type = function(argInitSize) {
			this.$index = 0;
			this.$_argInitSize = 0;
			this.$_newInstance = null;
			this.$size = 0;
			this.$stack = null;
			this.$_argInitSize = argInitSize;
			this.$index = 0;
			this.$stack = null;
			this.$index = 0;
		};
		ss.registerGenericClassInstance($type, $org_jbox2d_pooling_normal_MutableStack$1, [E], {
			get_newInstance: function() {
				return this.$_newInstance;
			},
			set_newInstance: function(value) {
				this.$_newInstance = value;
				this.$extendStack(this.$_argInitSize);
			},
			pop: function() {
				if (this.$index >= this.$size) {
					this.$extendStack(this.$size * 2);
				}
				return ss.cast(this.$stack[this.$index++], E);
			},
			push: function(argObject) {
				this.$stack[--this.$index] = argObject;
			},
			$extendStack: function(argSize) {
				var newStack = new Array(argSize);
				if (ss.isValue(this.$stack)) {
					$org_jbox2d_dynamics_ArrayHelper.copy(this.$stack, 0, newStack, 0, this.$size);
				}
				for (var i = 0; i < newStack.length; i++) {
					newStack[i] = this.get_newInstance()();
				}
				this.$stack = newStack;
				this.$size = newStack.length;
			}
		}, function() {
			return null;
		}, function() {
			return [ss.makeGenericType($org_jbox2d_pooling_IDynamicStack$1, [E])];
		});
		return $type;
	};
	$org_jbox2d_pooling_normal_MutableStack$1.__typeName = 'org.jbox2d.pooling.normal.MutableStack$1';
	ss.initGenericClass($org_jbox2d_pooling_normal_MutableStack$1, 1);
	global.org.jbox2d.pooling.normal.MutableStack$1 = $org_jbox2d_pooling_normal_MutableStack$1;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.normal.OrderedStack
	var $org_jbox2d_pooling_normal_OrderedStack$1 = function(E) {
		var $type = function(argStackSize, argContainerSize) {
			this.$container = null;
			this.$pool = null;
			this.$size = 0;
			this.$_argContainerSize = 0;
			this.$index = 0;
			this.$_newInstance = null;
			this.$size = argStackSize;
			this.$_argContainerSize = argContainerSize;
			this.$pool = new Array(argStackSize);
		};
		ss.registerGenericClassInstance($type, $org_jbox2d_pooling_normal_OrderedStack$1, [E], {
			get_newInstance: function() {
				return this.$_newInstance;
			},
			set_newInstance: function(value) {
				this.$_newInstance = value;
				for (var i = 0; i < this.$size; i++) {
					this.$pool[i] = this.get_newInstance()();
				}
				this.$index = 0;
				this.$container = new Array(this.$_argContainerSize);
			},
			pop: function() {
				return this.$pool[this.$index++];
			},
			pop$1: function(argNum) {
				$org_jbox2d_dynamics_ArrayHelper.copy(this.$pool, this.$index, this.$container, 0, argNum);
				this.$index += argNum;
				return this.$container;
			},
			push: function(argNum) {
				this.$index -= argNum;
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$org_jbox2d_pooling_normal_OrderedStack$1.__typeName = 'org.jbox2d.pooling.normal.OrderedStack$1';
	ss.initGenericClass($org_jbox2d_pooling_normal_OrderedStack$1, 1);
	global.org.jbox2d.pooling.normal.OrderedStack$1 = $org_jbox2d_pooling_normal_OrderedStack$1;
	////////////////////////////////////////////////////////////////////////////////
	// org.jbox2d.pooling.stacks.DynamicIntStack
	var $org_jbox2d_pooling_stacks_DynamicIntStack = function(initialSize) {
		this.$position = 0;
		this.$size = 0;
		this.$stack = null;
		this.$stack = new Array(initialSize);
		this.$position = 0;
		this.$size = initialSize;
	};
	$org_jbox2d_pooling_stacks_DynamicIntStack.__typeName = 'org.jbox2d.pooling.stacks.DynamicIntStack';
	global.org.jbox2d.pooling.stacks.DynamicIntStack = $org_jbox2d_pooling_stacks_DynamicIntStack;
	ss.initClass($java_lang_StrictMath, {});
	ss.initClass($org_jbox2d_callbacks_ContactFilter, {
		shouldCollide: function(fixtureA, fixtureB) {
			var filterA = fixtureA.getFilterData();
			var filterB = fixtureB.getFilterData();
			if (filterA.groupIndex === filterB.groupIndex && filterA.groupIndex !== 0) {
				return filterA.groupIndex > 0;
			}
			var collide = (filterA.maskBits & filterB.categoryBits) !== 0 && (filterA.categoryBits & filterB.maskBits) !== 0;
			return collide;
		}
	});
	ss.initClass($org_jbox2d_callbacks_ContactImpulse, {});
	ss.initClass($org_jbox2d_callbacks_ContactListener, {});
	ss.initClass($org_jbox2d_callbacks_DebugDraw, {
		setFlags: function(flags) {
			this.m_drawFlags = flags;
		},
		getFlags: function() {
			return this.m_drawFlags;
		},
		appendFlags: function(flags) {
			this.m_drawFlags |= flags;
		},
		clearFlags: function(flags) {
			this.m_drawFlags &= ~flags;
		},
		drawPolygon: function(vertices, vertexCount, color) {
			if (vertexCount === 1) {
				this.drawSegment(vertices[0], vertices[0], color);
				return;
			}
			for (var i = 0; i < vertexCount - 1; i += 1) {
				this.drawSegment(vertices[i], vertices[i + 1], color);
			}
			if (vertexCount > 2) {
				this.drawSegment(vertices[vertexCount - 1], vertices[0], color);
			}
		},
		drawPoint: null,
		drawSolidPolygon: null,
		drawCircle: null,
		drawSolidCircle: null,
		drawSegment: null,
		drawTransform: null,
		drawString$1: null,
		drawString: function(pos, s, color) {
			this.drawString$1(pos.x, pos.y, s, color);
		},
		getViewportTranform: function() {
			return this.viewportTransform;
		},
		setCamera: function(x, y, scale) {
			this.viewportTransform.setCamera(x, y, scale);
		},
		getScreenToWorldToOut: function(argScreen, argWorld) {
			this.viewportTransform.getScreenToWorld(argScreen, argWorld);
		},
		getWorldToScreenToOut: function(argWorld, argScreen) {
			this.viewportTransform.getWorldToScreen(argWorld, argScreen);
		},
		getWorldToScreenToOut$1: function(worldX, worldY, argScreen) {
			argScreen.set$1(worldX, worldY);
			this.viewportTransform.getWorldToScreen(argScreen, argScreen);
		},
		getWorldToScreen: function(argWorld) {
			var screen = new $org_jbox2d_common_Vec2();
			this.viewportTransform.getWorldToScreen(argWorld, screen);
			return screen;
		},
		getWorldToScreen$1: function(worldX, worldY) {
			var argScreen = new $org_jbox2d_common_Vec2.$ctor2(worldX, worldY);
			this.viewportTransform.getWorldToScreen(argScreen, argScreen);
			return argScreen;
		},
		getScreenToWorldToOut$1: function(screenX, screenY, argWorld) {
			argWorld.set$1(screenX, screenY);
			this.viewportTransform.getScreenToWorld(argWorld, argWorld);
		},
		getScreenToWorld: function(argScreen) {
			var world = new $org_jbox2d_common_Vec2();
			this.viewportTransform.getScreenToWorld(argScreen, world);
			return world;
		},
		getScreenToWorld$1: function(screenX, screenY) {
			var screen = new $org_jbox2d_common_Vec2.$ctor2(screenX, screenY);
			this.viewportTransform.getScreenToWorld(screen, screen);
			return screen;
		}
	});
	ss.initInterface($org_jbox2d_callbacks_DestructionListener, { sayGoodbye$1: null, sayGoodbye: null });
	ss.initInterface($org_jbox2d_callbacks_PairCallback, { addPair: null });
	ss.initInterface($org_jbox2d_callbacks_QueryCallback, { reportFixture: null });
	ss.initInterface($org_jbox2d_callbacks_RayCastCallback, { reportFixture: null });
	ss.initInterface($org_jbox2d_callbacks_TreeCallback, { treeCallback: null });
	ss.initInterface($org_jbox2d_callbacks_TreeRayCastCallback, { raycastCallback: null });
	ss.initClass($org_jbox2d_collision_$SeparationFunction, {
		$initialize: function(cache, proxyA, sweepA, proxyB, sweepB, t1) {
			this.$m_proxyA = proxyA;
			this.$m_proxyB = proxyB;
			var count = cache.count;
			this.$m_sweepA = sweepA;
			this.$m_sweepB = sweepB;
			this.$m_sweepA.getTransform(this.$xfa, t1);
			this.$m_sweepB.getTransform(this.$xfb, t1);
			// log.debug("initializing separation." +
			// "cache: "+cache.count+"-"+cache.metric+"-"+cache.indexA+"-"+cache.indexB+""
			// "distance: "+proxyA.
			if (count === 1) {
				this.$m_type = 0;
				//
				//       * Vec2 localPointA = m_proxyA.GetVertex(cache.indexA[0]); Vec2 localPointB =
				//
				//       * m_proxyB.GetVertex(cache.indexB[0]); Vec2 pointA = Mul(transformA, localPointA); Vec2
				//
				//       * pointB = Mul(transformB, localPointB); m_axis = pointB - pointA; m_axis.Normalize();
				this.$localPointA.set(this.$m_proxyA.getVertex(cache.indexA[0]));
				this.$localPointB.set(this.$m_proxyB.getVertex(cache.indexB[0]));
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$localPointA, this.$pointA);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$localPointB, this.$pointB);
				this.$m_axis.set(this.$pointB).subLocal(this.$pointA);
				var s = this.$m_axis.normalize();
				return s;
			}
			if (cache.indexA[0] === cache.indexA[1]) {
				// Two points on B and one on A.
				this.$m_type = 2;
				this.$localPointB1.set(this.$m_proxyB.getVertex(cache.indexB[0]));
				this.$localPointB2.set(this.$m_proxyB.getVertex(cache.indexB[1]));
				this.$temp.set(this.$localPointB2).subLocal(this.$localPointB1);
				$org_jbox2d_common_Vec2.crossToOutUnsafe$1(this.$temp, 1, this.$m_axis);
				this.$m_axis.normalize();
				$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfb.q, this.$m_axis, this.$normal);
				this.$m_localPoint.set(this.$localPointB1).addLocal(this.$localPointB2).mulLocal(0.5);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$m_localPoint, this.$pointB);
				this.$localPointA.set(proxyA.getVertex(cache.indexA[0]));
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$localPointA, this.$pointA);
				this.$temp.set(this.$pointA).subLocal(this.$pointB);
				var s1 = $org_jbox2d_common_Vec2.dot(this.$temp, this.$normal);
				if (s1 < 0) {
					this.$m_axis.negateLocal();
					s1 = -s1;
				}
				return s1;
			}
			else {
				// Two points on A and one or two points on B.
				this.$m_type = 1;
				this.$localPointA1.set(this.$m_proxyA.getVertex(cache.indexA[0]));
				this.$localPointA2.set(this.$m_proxyA.getVertex(cache.indexA[1]));
				this.$temp.set(this.$localPointA2).subLocal(this.$localPointA1);
				$org_jbox2d_common_Vec2.crossToOutUnsafe$1(this.$temp, 1, this.$m_axis);
				this.$m_axis.normalize();
				$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfa.q, this.$m_axis, this.$normal);
				this.$m_localPoint.set(this.$localPointA1).addLocal(this.$localPointA2).mulLocal(0.5);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$m_localPoint, this.$pointA);
				this.$localPointB.set(this.$m_proxyB.getVertex(cache.indexB[0]));
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$localPointB, this.$pointB);
				this.$temp.set(this.$pointB).subLocal(this.$pointA);
				var s2 = $org_jbox2d_common_Vec2.dot(this.$temp, this.$normal);
				if (s2 < 0) {
					this.$m_axis.negateLocal();
					s2 = -s2;
				}
				return s2;
			}
		},
		$findMinSeparation: function(indexes, t) {
			this.$m_sweepA.getTransform(this.$xfa, t);
			this.$m_sweepB.getTransform(this.$xfb, t);
			switch (this.$m_type) {
				case 0: {
					$org_jbox2d_common_Rot.mulTransUnsafe$1(this.$xfa.q, this.$m_axis, this.$axisA);
					$org_jbox2d_common_Rot.mulTransUnsafe$1(this.$xfb.q, this.$m_axis.negateLocal(), this.$axisB);
					this.$m_axis.negateLocal();
					indexes[0] = this.$m_proxyA.getSupport(this.$axisA);
					indexes[1] = this.$m_proxyB.getSupport(this.$axisB);
					this.$localPointA.set(this.$m_proxyA.getVertex(indexes[0]));
					this.$localPointB.set(this.$m_proxyB.getVertex(indexes[1]));
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$localPointA, this.$pointA);
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$localPointB, this.$pointB);
					var separation = $org_jbox2d_common_Vec2.dot(this.$pointB.subLocal(this.$pointA), this.$m_axis);
					return separation;
				}
				case 1: {
					$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfa.q, this.$m_axis, this.$normal);
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$m_localPoint, this.$pointA);
					$org_jbox2d_common_Rot.mulTransUnsafe$1(this.$xfb.q, this.$normal.negateLocal(), this.$axisB);
					this.$normal.negateLocal();
					indexes[0] = -1;
					indexes[1] = this.$m_proxyB.getSupport(this.$axisB);
					this.$localPointB.set(this.$m_proxyB.getVertex(indexes[1]));
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$localPointB, this.$pointB);
					var separation1 = $org_jbox2d_common_Vec2.dot(this.$pointB.subLocal(this.$pointA), this.$normal);
					return separation1;
				}
				case 2: {
					$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfb.q, this.$m_axis, this.$normal);
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$m_localPoint, this.$pointB);
					$org_jbox2d_common_Rot.mulTransUnsafe$1(this.$xfa.q, this.$normal.negateLocal(), this.$axisA);
					this.$normal.negateLocal();
					indexes[1] = -1;
					indexes[0] = this.$m_proxyA.getSupport(this.$axisA);
					this.$localPointA.set(this.$m_proxyA.getVertex(indexes[0]));
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$localPointA, this.$pointA);
					var separation2 = $org_jbox2d_common_Vec2.dot(this.$pointA.subLocal(this.$pointB), this.$normal);
					return separation2;
				}
				default: {
					indexes[0] = -1;
					indexes[1] = -1;
					return 0;
				}
			}
		},
		$evaluate: function(indexA, indexB, t) {
			this.$m_sweepA.getTransform(this.$xfa, t);
			this.$m_sweepB.getTransform(this.$xfb, t);
			switch (this.$m_type) {
				case 0: {
					$org_jbox2d_common_Rot.mulTransUnsafe$1(this.$xfa.q, this.$m_axis, this.$axisA);
					$org_jbox2d_common_Rot.mulTransUnsafe$1(this.$xfb.q, this.$m_axis.negateLocal(), this.$axisB);
					this.$m_axis.negateLocal();
					this.$localPointA.set(this.$m_proxyA.getVertex(indexA));
					this.$localPointB.set(this.$m_proxyB.getVertex(indexB));
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$localPointA, this.$pointA);
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$localPointB, this.$pointB);
					var separation = $org_jbox2d_common_Vec2.dot(this.$pointB.subLocal(this.$pointA), this.$m_axis);
					return separation;
				}
				case 1: {
					// System.out.printf("We're faceA");
					$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfa.q, this.$m_axis, this.$normal);
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$m_localPoint, this.$pointA);
					$org_jbox2d_common_Rot.mulTransUnsafe$1(this.$xfb.q, this.$normal.negateLocal(), this.$axisB);
					this.$normal.negateLocal();
					this.$localPointB.set(this.$m_proxyB.getVertex(indexB));
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$localPointB, this.$pointB);
					var separation1 = $org_jbox2d_common_Vec2.dot(this.$pointB.subLocal(this.$pointA), this.$normal);
					return separation1;
				}
				case 2: {
					// System.out.printf("We're faceB");
					$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfb.q, this.$m_axis, this.$normal);
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfb, this.$m_localPoint, this.$pointB);
					$org_jbox2d_common_Rot.mulTransUnsafe$1(this.$xfa.q, this.$normal.negateLocal(), this.$axisA);
					this.$normal.negateLocal();
					this.$localPointA.set(this.$m_proxyA.getVertex(indexA));
					$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.$xfa, this.$localPointA, this.$pointA);
					var separation2 = $org_jbox2d_common_Vec2.dot(this.$pointA.subLocal(this.$pointB), this.$normal);
					return separation2;
				}
				default: {
					return 0;
				}
			}
		}
	});
	ss.initEnum($org_jbox2d_collision_$Type, { $POINTS: 0, $facE_A: 1, $facE_B: 2 });
	ss.initClass($org_jbox2d_collision_AABB, {
		set: function(aabb) {
			var v = aabb.lowerBound;
			this.lowerBound.x = v.x;
			this.lowerBound.y = v.y;
			var v1 = aabb.upperBound;
			this.upperBound.x = v1.x;
			this.upperBound.y = v1.y;
		},
		isValid: function() {
			var dx = this.upperBound.x - this.lowerBound.x;
			if (dx < 0) {
				return false;
			}
			var dy = this.upperBound.y - this.lowerBound.y;
			if (dy < 0) {
				return false;
			}
			return this.lowerBound.isValid() && this.upperBound.isValid();
		},
		getCenter: function() {
			var center = new $org_jbox2d_common_Vec2.$ctor1(this.lowerBound);
			center.addLocal(this.upperBound);
			center.mulLocal(0.5);
			return center;
		},
		getCenterToOut: function(out_) {
			out_.x = (this.lowerBound.x + this.upperBound.x) * 0.5;
			out_.y = (this.lowerBound.y + this.upperBound.y) * 0.5;
		},
		getExtents: function() {
			var center = new $org_jbox2d_common_Vec2.$ctor1(this.upperBound);
			center.subLocal(this.lowerBound);
			center.mulLocal(0.5);
			return center;
		},
		getExtentsToOut: function(out_) {
			out_.x = (this.upperBound.x - this.lowerBound.x) * 0.5;
			out_.y = (this.upperBound.y - this.lowerBound.y) * 0.5;
			// thanks FDN1
		},
		getVertices: function(argRay) {
			argRay[0].set(this.lowerBound);
			argRay[1].set(this.lowerBound);
			argRay[1].x += this.upperBound.x - this.lowerBound.x;
			argRay[2].set(this.upperBound);
			argRay[3].set(this.upperBound);
			argRay[3].x -= this.upperBound.x - this.lowerBound.x;
		},
		combine$1: function(aabb1, aab) {
			this.lowerBound.x = ((aabb1.lowerBound.x < aab.lowerBound.x) ? aabb1.lowerBound.x : aab.lowerBound.x);
			this.lowerBound.y = ((aabb1.lowerBound.y < aab.lowerBound.y) ? aabb1.lowerBound.y : aab.lowerBound.y);
			this.upperBound.x = ((aabb1.upperBound.x > aab.upperBound.x) ? aabb1.upperBound.x : aab.upperBound.x);
			this.upperBound.y = ((aabb1.upperBound.y > aab.upperBound.y) ? aabb1.upperBound.y : aab.upperBound.y);
		},
		getPerimeter: function() {
			return 2 * (this.upperBound.x - this.lowerBound.x + this.upperBound.y - this.lowerBound.y);
		},
		combine: function(aabb) {
			this.lowerBound.x = ((this.lowerBound.x < aabb.lowerBound.x) ? this.lowerBound.x : aabb.lowerBound.x);
			this.lowerBound.y = ((this.lowerBound.y < aabb.lowerBound.y) ? this.lowerBound.y : aabb.lowerBound.y);
			this.upperBound.x = ((this.upperBound.x > aabb.upperBound.x) ? this.upperBound.x : aabb.upperBound.x);
			this.upperBound.y = ((this.upperBound.y > aabb.upperBound.y) ? this.upperBound.y : aabb.upperBound.y);
		},
		contains: function(aabb) {
			//
			//     * bool result = true; result = result && lowerBound.x <= aabb.lowerBound.x; result = result
			//
			//     * && lowerBound.y <= aabb.lowerBound.y; result = result && aabb.upperBound.x <= upperBound.x;
			//
			//     * result = result && aabb.upperBound.y <= upperBound.y; return result;
			// djm: faster putting all of them together, as if one is false we leave the logic
			// early
			return this.lowerBound.x > aabb.lowerBound.x && this.lowerBound.y > aabb.lowerBound.y && aabb.upperBound.x > this.upperBound.x && aabb.upperBound.y > this.upperBound.y;
		},
		raycast: function(output, input) {
			return this.raycast$1(output, input, new $org_jbox2d_pooling_normal_DefaultWorldPool(4, 4));
		},
		raycast$1: function(output, input, argPool) {
			var tmin = 0;
			var tmax = Number.MAX_VALUE;
			var p = argPool.popVec2();
			var d = argPool.popVec2();
			var absD = argPool.popVec2();
			var normal = argPool.popVec2();
			p.set(input.p1);
			d.set(input.p2).subLocal(input.p1);
			$org_jbox2d_common_Vec2.absToOut(d, absD);
			// x then y
			if (absD.x < $org_jbox2d_common_Settings.EPSILON) {
				// Parallel.
				if (p.x < this.lowerBound.x || this.upperBound.x < p.x) {
					argPool.pushVec2(4);
					return false;
				}
			}
			else {
				var inv_d = 1 / d.x;
				var t1 = (this.lowerBound.x - p.x) * inv_d;
				var t2 = (this.upperBound.x - p.x) * inv_d;
				// Sign of the normal vector.
				var s = -1;
				if (t1 > t2) {
					var temp = t1;
					t1 = t2;
					t2 = temp;
					s = 1;
				}
				// Push the min up
				if (t1 > tmin) {
					normal.setZero();
					normal.x = s;
					tmin = t1;
				}
				// Pull the max down
				tmax = $org_jbox2d_common_MathUtils.min(tmax, t2);
				if (tmin > tmax) {
					argPool.pushVec2(4);
					return false;
				}
			}
			if (absD.y < $org_jbox2d_common_Settings.EPSILON) {
				// Parallel.
				if (p.y < this.lowerBound.y || this.upperBound.y < p.y) {
					argPool.pushVec2(4);
					return false;
				}
			}
			else {
				var inv_d1 = 1 / d.y;
				var t11 = (this.lowerBound.y - p.y) * inv_d1;
				var t21 = (this.upperBound.y - p.y) * inv_d1;
				// Sign of the normal vector.
				var s1 = -1;
				if (t11 > t21) {
					var temp1 = t11;
					t11 = t21;
					t21 = temp1;
					s1 = 1;
				}
				// Push the min up
				if (t11 > tmin) {
					normal.setZero();
					normal.y = s1;
					tmin = t11;
				}
				// Pull the max down
				tmax = $org_jbox2d_common_MathUtils.min(tmax, t21);
				if (tmin > tmax) {
					argPool.pushVec2(4);
					return false;
				}
			}
			// Does the ray start inside the box?
			// Does the ray intersect beyond the max fraction?
			if (tmin < 0 || input.maxFraction < tmin) {
				argPool.pushVec2(4);
				return false;
			}
			// Intersection.
			output.fraction = tmin;
			output.normal.x = normal.x;
			output.normal.y = normal.y;
			argPool.pushVec2(4);
			return true;
		},
		toString: function() {
			var s = 'AABB[' + this.lowerBound + ' . ' + this.upperBound + ']';
			return s;
		}
	});
	$org_jbox2d_collision_AABB.$ctor1.prototype = $org_jbox2d_collision_AABB.$ctor2.prototype = $org_jbox2d_collision_AABB.prototype;
	ss.initClass($org_jbox2d_collision_Collision, {
		testOverlap: function(shapeA, indexA, shapeB, indexB, xfA, xfB) {
			this.$input.proxyA.set(shapeA, indexA);
			this.$input.proxyB.set(shapeB, indexB);
			this.$input.transformA.set(xfA);
			this.$input.transformB.set(xfB);
			this.$input.useRadii = true;
			this.$cache.count = 0;
			this.$pool.getDistance().distance(this.$output, this.$cache, this.$input);
			// djm note: anything significant about 10.0d?
			return this.$output.distance < 10 * $org_jbox2d_common_Settings.EPSILON;
		},
		collideCircles: function(manifold, circle1, xfA, circle2, xfB) {
			manifold.pointCount = 0;
			// before inline:
			// Transform.mulToOut(xfA, circle1.m_p, pA);
			// Transform.mulToOut(xfB, circle2.m_p, pB);
			// d.set(pB).subLocal(pA);
			// double distSqr = d.x * d.x + d.y * d.y;
			// after inline:
			var circle1p = circle1.m_p;
			var circle2p = circle2.m_p;
			var pAx = xfA.q.c * circle1p.x - xfA.q.s * circle1p.y + xfA.p.x;
			var pAy = xfA.q.s * circle1p.x + xfA.q.c * circle1p.y + xfA.p.y;
			var pBx = xfB.q.c * circle2p.x - xfB.q.s * circle2p.y + xfB.p.x;
			var pBy = xfB.q.s * circle2p.x + xfB.q.c * circle2p.y + xfB.p.y;
			var dx = pBx - pAx;
			var dy = pBy - pAy;
			var distSqr = dx * dx + dy * dy;
			// end inline
			var radius = circle1.m_radius + circle2.m_radius;
			if (distSqr > radius * radius) {
				return;
			}
			manifold.type = 0;
			manifold.localPoint.set(circle1p);
			manifold.localNormal.setZero();
			manifold.pointCount = 1;
			manifold.points[0].localPoint.set(circle2p);
			manifold.points[0].id.zero();
		},
		collidePolygonAndCircle: function(manifold, polygon, xfA, circle, xfB) {
			manifold.pointCount = 0;
			// Vec2 v = circle.m_p;
			// Compute circle position in the frame of the polygon.
			// before inline:
			// Transform.mulToOutUnsafe(xfB, circle.m_p, c);
			// Transform.mulTransToOut(xfA, c, cLocal);
			// double cLocalx = cLocal.x;
			// double cLocaly = cLocal.y;
			// after inline:
			var circlep = circle.m_p;
			var xfBq = xfB.q;
			var xfAq = xfA.q;
			var cx = xfBq.c * circlep.x - xfBq.s * circlep.y + xfB.p.x;
			var cy = xfBq.s * circlep.x + xfBq.c * circlep.y + xfB.p.y;
			var px = cx - xfA.p.x;
			var py = cy - xfA.p.y;
			var cLocalx = xfAq.c * px + xfAq.s * py;
			var cLocaly = -xfAq.s * px + xfAq.c * py;
			// end inline
			// Find the min separating edge.
			var normalIndex = 0;
			var separation = 0;
			var radius = polygon.m_radius + circle.m_radius;
			var vertexCount = polygon.m_count;
			var s;
			var vertices = polygon.m_vertices;
			var normals = polygon.m_normals;
			for (var i = 0; i < vertexCount; i++) {
				// before inline
				// temp.set(cLocal).subLocal(vertices[i]);
				// double s = Vec2.dot(normals[i], temp);
				// after inline
				var vertex = vertices[i];
				var tempx = cLocalx - vertex.x;
				var tempy = cLocaly - vertex.y;
				s = normals[i].x * tempx + normals[i].y * tempy;
				if (s > radius) {
					// early out_
					return;
				}
				if (s > separation) {
					separation = s;
					normalIndex = i;
				}
			}
			// Vertices that subtend the incident face.
			var vertIndex1 = normalIndex;
			var vertIndex2 = ((vertIndex1 + 1 < vertexCount) ? (vertIndex1 + 1) : 0);
			var v1 = vertices[vertIndex1];
			var v2 = vertices[vertIndex2];
			// If the center is inside the polygon ...
			if (separation < $org_jbox2d_common_Settings.EPSILON) {
				manifold.pointCount = 1;
				manifold.type = 1;
				// before inline:
				// manifold.localNormal.set(normals[normalIndex]);
				// manifold.localPoint.set(v1).addLocal(v2).mulLocal(.5d);
				// manifold.points[0].localPoint.set(circle.m_p);
				// after inline:
				var normal = normals[normalIndex];
				manifold.localNormal.x = normal.x;
				manifold.localNormal.y = normal.y;
				manifold.localPoint.x = (v1.x + v2.x) * 0.5;
				manifold.localPoint.y = (v1.y + v2.y) * 0.5;
				var mpoint = manifold.points[0];
				mpoint.localPoint.x = circlep.x;
				mpoint.localPoint.y = circlep.y;
				mpoint.id.zero();
				// end inline
				return;
			}
			// Compute barycentric coordinates
			// before inline:
			// temp.set(cLocal).subLocal(v1);
			// temp2.set(v2).subLocal(v1);
			// double u1 = Vec2.dot(temp, temp2);
			// temp.set(cLocal).subLocal(v2);
			// temp2.set(v1).subLocal(v2);
			// double u2 = Vec2.dot(temp, temp2);
			// after inline:
			var tempX = cLocalx - v1.x;
			var tempY = cLocaly - v1.y;
			var temp2X = v2.x - v1.x;
			var temp2Y = v2.y - v1.y;
			var u1 = tempX * temp2X + tempY * temp2Y;
			var temp3X = cLocalx - v2.x;
			var temp3Y = cLocaly - v2.y;
			var temp4X = v1.x - v2.x;
			var temp4Y = v1.y - v2.y;
			var u2 = temp3X * temp4X + temp3Y * temp4Y;
			// end inline
			if (u1 <= 0) {
				// inlined
				var dx = cLocalx - v1.x;
				var dy = cLocaly - v1.y;
				if (dx * dx + dy * dy > radius * radius) {
					return;
				}
				manifold.pointCount = 1;
				manifold.type = 1;
				// before inline:
				// manifold.localNormal.set(cLocal).subLocal(v1);
				// after inline:
				manifold.localNormal.x = cLocalx - v1.x;
				manifold.localNormal.y = cLocaly - v1.y;
				// end inline
				manifold.localNormal.normalize();
				manifold.localPoint.set(v1);
				manifold.points[0].localPoint.set(circlep);
				manifold.points[0].id.zero();
			}
			else if (u2 <= 0) {
				// inlined
				var dx1 = cLocalx - v2.x;
				var dy1 = cLocaly - v2.y;
				if (dx1 * dx1 + dy1 * dy1 > radius * radius) {
					return;
				}
				manifold.pointCount = 1;
				manifold.type = 1;
				// before inline:
				// manifold.localNormal.set(cLocal).subLocal(v2);
				// after inline:
				manifold.localNormal.x = cLocalx - v2.x;
				manifold.localNormal.y = cLocaly - v2.y;
				// end inline
				manifold.localNormal.normalize();
				manifold.localPoint.set(v2);
				manifold.points[0].localPoint.set(circlep);
				manifold.points[0].id.zero();
			}
			else {
				// Vec2 faceCenter = 0.5d * (v1 + v2);
				// (temp is faceCenter)
				// before inline:
				// temp.set(v1).addLocal(v2).mulLocal(.5d);
				//
				// temp2.set(cLocal).subLocal(temp);
				// separation = Vec2.dot(temp2, normals[vertIndex1]);
				// if (separation > radius) {
				// return;
				// }
				// after inline:
				var fcx = (v1.x + v2.x) * 0.5;
				var fcy = (v1.y + v2.y) * 0.5;
				var tx = cLocalx - fcx;
				var ty = cLocaly - fcy;
				var normal1 = normals[vertIndex1];
				separation = tx * normal1.x + ty * normal1.y;
				if (separation > radius) {
					return;
				}
				// end inline
				manifold.pointCount = 1;
				manifold.type = 1;
				manifold.localNormal.set(normals[vertIndex1]);
				manifold.localPoint.x = fcx;
				// (faceCenter)
				manifold.localPoint.y = fcy;
				manifold.points[0].localPoint.set(circlep);
				manifold.points[0].id.zero();
			}
		},
		edgeSeparation: function(poly1, xf1, edge1, poly2, xf2) {
			var count1 = poly1.m_count;
			var vertices1 = poly1.m_vertices;
			var normals1 = poly1.m_normals;
			var count2 = poly2.m_count;
			var vertices2 = poly2.m_vertices;
			// Convert normal from poly1's frame into poly2's frame.
			// before inline:
			// // Vec2 normal1World = Mul(xf1.R, normals1[edge1]);
			// Rot.mulToOutUnsafe(xf1.q, normals1[edge1], normal1World);
			// // Vec2 normal1 = MulT(xf2.R, normal1World);
			// Rot.mulTransUnsafe(xf2.q, normal1World, normal1);
			// double normal1x = normal1.x;
			// double normal1y = normal1.y;
			// double normal1Worldx = normal1World.x;
			// double normal1Worldy = normal1World.y;
			// after inline:
			var xf1q = xf1.q;
			var xf2q = xf2.q;
			var q = xf1q;
			var v = normals1[edge1];
			var normal1Worldx = q.c * v.x - q.s * v.y;
			var normal1Worldy = q.s * v.x + q.c * v.y;
			var q1 = xf2q;
			var normal1x = q1.c * normal1Worldx + q1.s * normal1Worldy;
			var normal1y = -q1.s * normal1Worldx + q1.c * normal1Worldy;
			// end inline
			// Find support vertex on poly2 for -normal.
			var index = 0;
			var minDot = Number.MAX_VALUE;
			for (var i = 0; i < count2; ++i) {
				var a = vertices2[i];
				var dot = a.x * normal1x + a.y * normal1y;
				if (dot < minDot) {
					minDot = dot;
					index = i;
				}
			}
			// Vec2 v1 = Mul(xf1, vertices1[edge1]);
			// Vec2 v2 = Mul(xf2, vertices2[index]);
			// before inline:
			// Transform.mulToOut(xf1, vertices1[edge1], v1);
			// Transform.mulToOut(xf2, vertices2[index], v2);
			//
			// double separation = Vec2.dot(v2.subLocal(v1), normal1World);
			// return separation;
			// after inline:
			var v3 = vertices1[edge1];
			var v1x = xf1q.c * v3.x - xf1q.s * v3.y + xf1.p.x;
			var v1y = xf1q.s * v3.x + xf1q.c * v3.y + xf1.p.y;
			var v4 = vertices2[index];
			var v2x = xf2q.c * v4.x - xf2q.s * v4.y + xf2.p.x - v1x;
			var v2y = xf2q.s * v4.x + xf2q.c * v4.y + xf2.p.y - v1y;
			var separation = v2x * normal1Worldx + v2y * normal1Worldy;
			return separation;
			// end inline
		},
		findMaxSeparation: function(results, poly1, xf1, poly2, xf2) {
			var count1 = poly1.m_count;
			var normals1 = poly1.m_normals;
			var poly1centroid = poly1.m_centroid;
			var poly2centroid = poly2.m_centroid;
			var xf2q = xf2.q;
			var xf1q = xf1.q;
			// Vector pointing from the centroid of poly1 to the centroid of poly2.
			// before inline:
			// Transform.mulToOutUnsafe(xf2, poly2centroid, d);
			// Transform.mulToOutUnsafe(xf1, poly1centroid, temp);
			// d.subLocal(temp);
			//
			// Rot.mulTransUnsafe(xf1q, d, dLocal1);
			// after inline:
			var dx = xf2q.c * poly2centroid.x - xf2q.s * poly2centroid.y + xf2.p.x;
			var dy = xf2q.s * poly2centroid.x + xf2q.c * poly2centroid.y + xf2.p.y;
			dx -= xf1q.c * poly1centroid.x - xf1q.s * poly1centroid.y + xf1.p.x;
			dy -= xf1q.s * poly1centroid.x + xf1q.c * poly1centroid.y + xf1.p.y;
			var dLocal1x = xf1q.c * dx + xf1q.s * dy;
			var dLocal1y = -xf1q.s * dx + xf1q.c * dy;
			// end inline
			// Find edge normal on poly1 that has the largest projection onto d.
			var edge = 0;
			var dot;
			var maxDot = 0;
			for (var i = 0; i < count1; i++) {
				var normal = normals1[i];
				dot = normal.x * dLocal1x + normal.y * dLocal1y;
				if (dot > maxDot) {
					maxDot = dot;
					edge = i;
				}
			}
			// Get the separation for the edge normal.
			var s = this.edgeSeparation(poly1, xf1, edge, poly2, xf2);
			// Check the separation for the previous edge normal.
			var prevEdge = ((edge - 1 >= 0) ? (edge - 1) : (count1 - 1));
			var sPrev = this.edgeSeparation(poly1, xf1, prevEdge, poly2, xf2);
			// Check the separation for the next edge normal.
			var nextEdge = ((edge + 1 < count1) ? (edge + 1) : 0);
			var sNext = this.edgeSeparation(poly1, xf1, nextEdge, poly2, xf2);
			// Find the best edge and the search direction.
			var bestEdge;
			var bestSeparation;
			var increment;
			if (sPrev > s && sPrev > sNext) {
				increment = -1;
				bestEdge = prevEdge;
				bestSeparation = sPrev;
			}
			else if (sNext > s) {
				increment = 1;
				bestEdge = nextEdge;
				bestSeparation = sNext;
			}
			else {
				results.edgeIndex = edge;
				results.separation = s;
				return;
			}
			// Perform a local search for the best edge normal.
			for (;;) {
				if (increment === -1) {
					edge = ((bestEdge - 1 >= 0) ? (bestEdge - 1) : (count1 - 1));
				}
				else {
					edge = ((bestEdge + 1 < count1) ? (bestEdge + 1) : 0);
				}
				s = this.edgeSeparation(poly1, xf1, edge, poly2, xf2);
				if (s > bestSeparation) {
					bestEdge = edge;
					bestSeparation = s;
				}
				else {
					break;
				}
			}
			results.edgeIndex = bestEdge;
			results.separation = bestSeparation;
		},
		findIncidentEdge: function(c, poly1, xf1, edge1, poly2, xf2) {
			var count1 = poly1.m_count;
			var normals1 = poly1.m_normals;
			var count2 = poly2.m_count;
			var vertices2 = poly2.m_vertices;
			var normals2 = poly2.m_normals;
			var c0 = c[0];
			var c1 = c[1];
			var xf1q = xf1.q;
			var xf2q = xf2.q;
			// Get the normal of the reference edge in poly2's frame.
			// Vec2 normal1 = MulT(xf2.R, Mul(xf1.R, normals1[edge1]));
			// before inline:
			// Rot.mulToOutUnsafe(xf1.q, normals1[edge1], normal1); // temporary
			// Rot.mulTrans(xf2.q, normal1, normal1);
			// after inline:
			var v = normals1[edge1];
			var tempx = xf1q.c * v.x - xf1q.s * v.y;
			var tempy = xf1q.s * v.x + xf1q.c * v.y;
			var normal1x = xf2q.c * tempx + xf2q.s * tempy;
			var normal1y = -xf2q.s * tempx + xf2q.c * tempy;
			// end inline
			// Find the incident edge on poly2.
			var index = 0;
			var minDot = Number.MAX_VALUE;
			for (var i = 0; i < count2; ++i) {
				var b = normals2[i];
				var dot = normal1x * b.x + normal1y * b.y;
				if (dot < minDot) {
					minDot = dot;
					index = i;
				}
			}
			// Build the clip vertices for the incident edge.
			var i1 = index;
			var i2 = ((i1 + 1 < count2) ? (i1 + 1) : 0);
			// c0.v = Mul(xf2, vertices2[i1]);
			var v1 = vertices2[i1];
			var out_ = c0.v;
			out_.x = xf2q.c * v1.x - xf2q.s * v1.y + xf2.p.x;
			out_.y = xf2q.s * v1.x + xf2q.c * v1.y + xf2.p.y;
			c0.id.indexA = edge1;
			c0.id.indexB = i1;
			c0.id.typeA = 1;
			c0.id.typeB = 0;
			// c1.v = Mul(xf2, vertices2[i2]);
			var v2 = vertices2[i2];
			var out_1 = c1.v;
			out_1.x = xf2q.c * v2.x - xf2q.s * v2.y + xf2.p.x;
			out_1.y = xf2q.s * v2.x + xf2q.c * v2.y + xf2.p.y;
			c1.id.indexA = edge1;
			c1.id.indexB = i2;
			c1.id.typeA = 1;
			c1.id.typeB = 0;
		},
		collidePolygons: function(manifold, polyA, xfA, polyB, xfB) {
			// Find edge normal of max separation on A - return if separating axis is found
			// Find edge normal of max separation on B - return if separation axis is found
			// Choose reference edge as min(minA, minB)
			// Find incident edge
			// Clip
			// The normal points from 1 to 2
			manifold.pointCount = 0;
			var totalRadius = polyA.m_radius + polyB.m_radius;
			this.findMaxSeparation(this.$results1, polyA, xfA, polyB, xfB);
			if (this.$results1.separation > totalRadius) {
				return;
			}
			this.findMaxSeparation(this.$results2, polyB, xfB, polyA, xfA);
			if (this.$results2.separation > totalRadius) {
				return;
			}
			var poly1;
			// reference polygon
			var poly2;
			// incident polygon
			var xf1, xf2;
			var edge1;
			// reference edge
			var flip;
			var k_relativeTol = 0.98;
			var k_absoluteTol = 0.001;
			if (this.$results2.separation > k_relativeTol * this.$results1.separation + k_absoluteTol) {
				poly1 = polyB;
				poly2 = polyA;
				xf1 = xfB;
				xf2 = xfA;
				edge1 = this.$results2.edgeIndex;
				manifold.type = 2;
				flip = true;
			}
			else {
				poly1 = polyA;
				poly2 = polyB;
				xf1 = xfA;
				xf2 = xfB;
				edge1 = this.$results1.edgeIndex;
				manifold.type = 1;
				flip = false;
			}
			var xf1q = xf1.q;
			this.findIncidentEdge(this.$incidentEdge, poly1, xf1, edge1, poly2, xf2);
			var count1 = poly1.m_count;
			var vertices1 = poly1.m_vertices;
			var iv1 = edge1;
			var iv2 = ((edge1 + 1 < count1) ? (edge1 + 1) : 0);
			this.$v11.set(vertices1[iv1]);
			this.$v12.set(vertices1[iv2]);
			this.$localTangent.x = this.$v12.x - this.$v11.x;
			this.$localTangent.y = this.$v12.y - this.$v11.y;
			this.$localTangent.normalize();
			// Vec2 localNormal = Vec2.cross(dv, 1.0d);
			this.$localNormal.x = 1 * this.$localTangent.y;
			this.$localNormal.y = -1 * this.$localTangent.x;
			// Vec2 planePoint = 0.5d * (v11+ v12);
			this.$planePoint.x = (this.$v11.x + this.$v12.x) * 0.5;
			this.$planePoint.y = (this.$v11.y + this.$v12.y) * 0.5;
			// Rot.mulToOutUnsafe(xf1.q, localTangent, tangent);
			this.$tangent.x = xf1q.c * this.$localTangent.x - xf1q.s * this.$localTangent.y;
			this.$tangent.y = xf1q.s * this.$localTangent.x + xf1q.c * this.$localTangent.y;
			// Vec2.crossToOutUnsafe(tangent, 1d, normal);
			var normalx = 1 * this.$tangent.y;
			var normaly = -1 * this.$tangent.x;
			$org_jbox2d_common_Transform.mulToOut$1(xf1, this.$v11, this.$v11);
			$org_jbox2d_common_Transform.mulToOut$1(xf1, this.$v12, this.$v12);
			// v11 = Mul(xf1, v11);
			// v12 = Mul(xf1, v12);
			// Face offset
			// double frontOffset = Vec2.dot(normal, v11);
			var frontOffset = normalx * this.$v11.x + normaly * this.$v11.y;
			// Side offsets, extended by polytope skin thickness.
			// double sideOffset1 = -Vec2.dot(tangent, v11) + totalRadius;
			// double sideOffset2 = Vec2.dot(tangent, v12) + totalRadius;
			var sideOffset1 = -(this.$tangent.x * this.$v11.x + this.$tangent.y * this.$v11.y) + totalRadius;
			var sideOffset2 = this.$tangent.x * this.$v12.x + this.$tangent.y * this.$v12.y + totalRadius;
			// Clip incident edge against extruded edge1 side edges.
			// ClipVertex clipPoints1[2];
			// ClipVertex clipPoints2[2];
			var np;
			// Clip to box side 1
			// np = ClipSegmentToLine(clipPoints1, incidentEdge, -sideNormal, sideOffset1);
			this.$tangent.negateLocal();
			np = $org_jbox2d_collision_Collision.clipSegmentToLine(this.$clipPoints1, this.$incidentEdge, this.$tangent, sideOffset1, iv1);
			this.$tangent.negateLocal();
			if (np < 2) {
				return;
			}
			// Clip to negative box side 1
			np = $org_jbox2d_collision_Collision.clipSegmentToLine(this.$clipPoints2, this.$clipPoints1, this.$tangent, sideOffset2, iv2);
			if (np < 2) {
				return;
			}
			// Now clipPoints2 contains the clipped points.
			manifold.localNormal.set(this.$localNormal);
			manifold.localPoint.set(this.$planePoint);
			var pointCount = 0;
			for (var i = 0; i < $org_jbox2d_common_Settings.maxManifoldPoints; ++i) {
				// double separation = Vec2.dot(normal, clipPoints2[i].v) - frontOffset;
				var separation = normalx * this.$clipPoints2[i].v.x + normaly * this.$clipPoints2[i].v.y - frontOffset;
				if (separation <= totalRadius) {
					var cp = manifold.points[pointCount];
					// cp.m_localPoint = MulT(xf2, clipPoints2[i].v);
					var out_ = cp.localPoint;
					var px = this.$clipPoints2[i].v.x - xf2.p.x;
					var py = this.$clipPoints2[i].v.y - xf2.p.y;
					out_.x = xf2.q.c * px + xf2.q.s * py;
					out_.y = -xf2.q.s * px + xf2.q.c * py;
					cp.id.set(this.$clipPoints2[i].id);
					if (flip) {
						// Swap features
						cp.id.flip();
					}
					++pointCount;
				}
			}
			manifold.pointCount = pointCount;
		},
		collideEdgeAndCircle: function(manifold, edgeA, xfA, circleB, xfB) {
			manifold.pointCount = 0;
			// Compute circle in frame of edge
			// Vec2 Q = MulT(xfA, Mul(xfB, circleB.m_p));
			$org_jbox2d_common_Transform.mulToOutUnsafe$1(xfB, circleB.m_p, this.$temp);
			$org_jbox2d_common_Transform.mulTransToOutUnsafe$1(xfA, this.$temp, this.$q);
			var A = edgeA.m_vertex1;
			var B = edgeA.m_vertex2;
			this.$e.set(B).subLocal(A);
			// Barycentric coordinates
			var u = $org_jbox2d_common_Vec2.dot(this.$e, this.$temp.set(B).subLocal(this.$q));
			var v = $org_jbox2d_common_Vec2.dot(this.$e, this.$temp.set(this.$q).subLocal(A));
			var radius = edgeA.m_radius + circleB.m_radius;
			// ContactFeature cf;
			this.$cf.indexB = 0;
			this.$cf.typeB = 0;
			// Region A
			if (v <= 0) {
				var P = A;
				$org_jbox2d_collision_Collision.$d.set(this.$q).subLocal(P);
				var dd = $org_jbox2d_common_Vec2.dot($org_jbox2d_collision_Collision.$d, $org_jbox2d_collision_Collision.$d);
				if (dd > radius * radius) {
					return;
				}
				// Is there an edge connected to A?
				if (edgeA.m_hasVertex0) {
					var A1 = edgeA.m_vertex0;
					var B1 = A;
					this.$e1.set(B1).subLocal(A1);
					var u1 = $org_jbox2d_common_Vec2.dot(this.$e1, this.$temp.set(B1).subLocal(this.$q));
					// Is the circle in Region AB of the previous edge?
					if (u1 > 0) {
						return;
					}
				}
				this.$cf.indexA = 0;
				this.$cf.typeA = 0;
				manifold.pointCount = 1;
				manifold.type = 0;
				manifold.localNormal.setZero();
				manifold.localPoint.set(P);
				// manifold.points[0].id.key = 0;
				manifold.points[0].id.set(this.$cf);
				manifold.points[0].localPoint.set(circleB.m_p);
				return;
			}
			// Region B
			if (u <= 0) {
				var P1 = B;
				$org_jbox2d_collision_Collision.$d.set(this.$q).subLocal(P1);
				var dd1 = $org_jbox2d_common_Vec2.dot($org_jbox2d_collision_Collision.$d, $org_jbox2d_collision_Collision.$d);
				if (dd1 > radius * radius) {
					return;
				}
				// Is there an edge connected to B?
				if (edgeA.m_hasVertex3) {
					var B2 = edgeA.m_vertex3;
					var A2 = B;
					var e2 = this.$e1;
					e2.set(B2).subLocal(A2);
					var v2 = $org_jbox2d_common_Vec2.dot(e2, this.$temp.set(this.$q).subLocal(A2));
					// Is the circle in Region AB of the next edge?
					if (v2 > 0) {
						return;
					}
				}
				this.$cf.indexA = 1;
				this.$cf.typeA = 0;
				manifold.pointCount = 1;
				manifold.type = 0;
				manifold.localNormal.setZero();
				manifold.localPoint.set(P1);
				// manifold.points[0].id.key = 0;
				manifold.points[0].id.set(this.$cf);
				manifold.points[0].localPoint.set(circleB.m_p);
				return;
			}
			// Region AB
			var den = $org_jbox2d_common_Vec2.dot(this.$e, this.$e);
			// Vec2 P = (1.0d / den) * (u * A + v * B);
			this.$p2.set(A).mulLocal(u).addLocal(this.$temp.set(B).mulLocal(v));
			this.$p2.mulLocal(1 / den);
			$org_jbox2d_collision_Collision.$d.set(this.$q).subLocal(this.$p2);
			var dd2 = $org_jbox2d_common_Vec2.dot($org_jbox2d_collision_Collision.$d, $org_jbox2d_collision_Collision.$d);
			if (dd2 > radius * radius) {
				return;
			}
			this.$n.x = -this.$e.y;
			this.$n.y = this.$e.x;
			if ($org_jbox2d_common_Vec2.dot(this.$n, this.$temp.set(this.$q).subLocal(A)) < 0) {
				this.$n.set$1(-this.$n.x, -this.$n.y);
			}
			this.$n.normalize();
			this.$cf.indexA = 0;
			this.$cf.typeA = 1;
			manifold.pointCount = 1;
			manifold.type = 1;
			manifold.localNormal.set(this.$n);
			manifold.localPoint.set(A);
			// manifold.points[0].id.key = 0;
			manifold.points[0].id.set(this.$cf);
			manifold.points[0].localPoint.set(circleB.m_p);
		},
		collideEdgeAndPolygon: function(manifold, edgeA, xfA, polygonB, xfB) {
			this.$collider.collide(manifold, edgeA, xfA, polygonB, xfB);
		}
	});
	ss.initClass($org_jbox2d_collision_Collision$ClipVertex, {
		set: function(cv) {
			var v1 = cv.v;
			this.v.x = v1.x;
			this.v.y = v1.y;
			var c = cv.id;
			this.id.indexA = c.indexA;
			this.id.indexB = c.indexB;
			this.id.typeA = c.typeA;
			this.id.typeB = c.typeB;
		}
	});
	ss.initClass($org_jbox2d_collision_Collision$EdgeResults, {});
	ss.initClass($org_jbox2d_collision_Collision$EPAxis, {});
	ss.initEnum($org_jbox2d_collision_Collision$EPAxis$Type, { UNKNOWN: 0, edgE_A: 1, edgE_B: 2 });
	ss.initClass($org_jbox2d_collision_Collision$EPCollider, {
		collide: function(manifold, edgeA, xfA, polygonB, xfB) {
			$org_jbox2d_common_Transform.mulTransToOutUnsafe(xfA, xfB, this.m_xf);
			$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.m_xf, polygonB.m_centroid, this.m_centroidB);
			this.m_v0 = edgeA.m_vertex0;
			this.m_v1 = edgeA.m_vertex1;
			this.m_v2 = edgeA.m_vertex2;
			this.m_v3 = edgeA.m_vertex3;
			var hasVertex0 = edgeA.m_hasVertex0;
			var hasVertex3 = edgeA.m_hasVertex3;
			this.$edge1.set(this.m_v2).subLocal(this.m_v1);
			this.$edge1.normalize();
			this.m_normal1.set$1(this.$edge1.y, -this.$edge1.x);
			var offset1 = $org_jbox2d_common_Vec2.dot(this.m_normal1, this.$temp.set(this.m_centroidB).subLocal(this.m_v1));
			var offset0 = 0, offset2 = 0;
			var convex1 = false, convex2 = false;
			// Is there a preceding edge?
			if (hasVertex0) {
				this.$edge0.set(this.m_v1).subLocal(this.m_v0);
				this.$edge0.normalize();
				this.m_normal0.set$1(this.$edge0.y, -this.$edge0.x);
				convex1 = $org_jbox2d_common_Vec2.cross$2(this.$edge0, this.$edge1) >= 0;
				offset0 = $org_jbox2d_common_Vec2.dot(this.m_normal0, this.$temp.set(this.m_centroidB).subLocal(this.m_v0));
			}
			// Is there a following edge?
			if (hasVertex3) {
				this.$edge2.set(this.m_v3).subLocal(this.m_v2);
				this.$edge2.normalize();
				this.m_normal2.set$1(this.$edge2.y, -this.$edge2.x);
				convex2 = $org_jbox2d_common_Vec2.cross$2(this.$edge1, this.$edge2) > 0;
				offset2 = $org_jbox2d_common_Vec2.dot(this.m_normal2, this.$temp.set(this.m_centroidB).subLocal(this.m_v2));
			}
			// Determine front or back collision. Determine collision normal limits.
			if (hasVertex0 && hasVertex3) {
				if (convex1 && convex2) {
					this.m_front = offset0 >= 0 || offset1 >= 0 || offset2 >= 0;
					if (this.m_front) {
						this.m_normal.x = this.m_normal1.x;
						this.m_normal.y = this.m_normal1.y;
						this.m_lowerLimit.x = this.m_normal0.x;
						this.m_lowerLimit.y = this.m_normal0.y;
						this.m_upperLimit.x = this.m_normal2.x;
						this.m_upperLimit.y = this.m_normal2.y;
					}
					else {
						this.m_normal.x = -this.m_normal1.x;
						this.m_normal.y = -this.m_normal1.y;
						this.m_lowerLimit.x = -this.m_normal1.x;
						this.m_lowerLimit.y = -this.m_normal1.y;
						this.m_upperLimit.x = -this.m_normal1.x;
						this.m_upperLimit.y = -this.m_normal1.y;
					}
				}
				else if (convex1) {
					this.m_front = offset0 >= 0 || offset1 >= 0 && offset2 >= 0;
					if (this.m_front) {
						this.m_normal.x = this.m_normal1.x;
						this.m_normal.y = this.m_normal1.y;
						this.m_lowerLimit.x = this.m_normal0.x;
						this.m_lowerLimit.y = this.m_normal0.y;
						this.m_upperLimit.x = this.m_normal1.x;
						this.m_upperLimit.y = this.m_normal1.y;
					}
					else {
						this.m_normal.x = -this.m_normal1.x;
						this.m_normal.y = -this.m_normal1.y;
						this.m_lowerLimit.x = -this.m_normal2.x;
						this.m_lowerLimit.y = -this.m_normal2.y;
						this.m_upperLimit.x = -this.m_normal1.x;
						this.m_upperLimit.y = -this.m_normal1.y;
					}
				}
				else if (convex2) {
					this.m_front = offset2 >= 0 || offset0 >= 0 && offset1 >= 0;
					if (this.m_front) {
						this.m_normal.x = this.m_normal1.x;
						this.m_normal.y = this.m_normal1.y;
						this.m_lowerLimit.x = this.m_normal1.x;
						this.m_lowerLimit.y = this.m_normal1.y;
						this.m_upperLimit.x = this.m_normal2.x;
						this.m_upperLimit.y = this.m_normal2.y;
					}
					else {
						this.m_normal.x = -this.m_normal1.x;
						this.m_normal.y = -this.m_normal1.y;
						this.m_lowerLimit.x = -this.m_normal1.x;
						this.m_lowerLimit.y = -this.m_normal1.y;
						this.m_upperLimit.x = -this.m_normal0.x;
						this.m_upperLimit.y = -this.m_normal0.y;
					}
				}
				else {
					this.m_front = offset0 >= 0 && offset1 >= 0 && offset2 >= 0;
					if (this.m_front) {
						this.m_normal.x = this.m_normal1.x;
						this.m_normal.y = this.m_normal1.y;
						this.m_lowerLimit.x = this.m_normal1.x;
						this.m_lowerLimit.y = this.m_normal1.y;
						this.m_upperLimit.x = this.m_normal1.x;
						this.m_upperLimit.y = this.m_normal1.y;
					}
					else {
						this.m_normal.x = -this.m_normal1.x;
						this.m_normal.y = -this.m_normal1.y;
						this.m_lowerLimit.x = -this.m_normal2.x;
						this.m_lowerLimit.y = -this.m_normal2.y;
						this.m_upperLimit.x = -this.m_normal0.x;
						this.m_upperLimit.y = -this.m_normal0.y;
					}
				}
			}
			else if (hasVertex0) {
				if (convex1) {
					this.m_front = offset0 >= 0 || offset1 >= 0;
					if (this.m_front) {
						this.m_normal.x = this.m_normal1.x;
						this.m_normal.y = this.m_normal1.y;
						this.m_lowerLimit.x = this.m_normal0.x;
						this.m_lowerLimit.y = this.m_normal0.y;
						this.m_upperLimit.x = -this.m_normal1.x;
						this.m_upperLimit.y = -this.m_normal1.y;
					}
					else {
						this.m_normal.x = -this.m_normal1.x;
						this.m_normal.y = -this.m_normal1.y;
						this.m_lowerLimit.x = this.m_normal1.x;
						this.m_lowerLimit.y = this.m_normal1.y;
						this.m_upperLimit.x = -this.m_normal1.x;
						this.m_upperLimit.y = -this.m_normal1.y;
					}
				}
				else {
					this.m_front = offset0 >= 0 && offset1 >= 0;
					if (this.m_front) {
						this.m_normal.x = this.m_normal1.x;
						this.m_normal.y = this.m_normal1.y;
						this.m_lowerLimit.x = this.m_normal1.x;
						this.m_lowerLimit.y = this.m_normal1.y;
						this.m_upperLimit.x = -this.m_normal1.x;
						this.m_upperLimit.y = -this.m_normal1.y;
					}
					else {
						this.m_normal.x = -this.m_normal1.x;
						this.m_normal.y = -this.m_normal1.y;
						this.m_lowerLimit.x = this.m_normal1.x;
						this.m_lowerLimit.y = this.m_normal1.y;
						this.m_upperLimit.x = -this.m_normal0.x;
						this.m_upperLimit.y = -this.m_normal0.y;
					}
				}
			}
			else if (hasVertex3) {
				if (convex2) {
					this.m_front = offset1 >= 0 || offset2 >= 0;
					if (this.m_front) {
						this.m_normal.x = this.m_normal1.x;
						this.m_normal.y = this.m_normal1.y;
						this.m_lowerLimit.x = -this.m_normal1.x;
						this.m_lowerLimit.y = -this.m_normal1.y;
						this.m_upperLimit.x = this.m_normal2.x;
						this.m_upperLimit.y = this.m_normal2.y;
					}
					else {
						this.m_normal.x = -this.m_normal1.x;
						this.m_normal.y = -this.m_normal1.y;
						this.m_lowerLimit.x = -this.m_normal1.x;
						this.m_lowerLimit.y = -this.m_normal1.y;
						this.m_upperLimit.x = this.m_normal1.x;
						this.m_upperLimit.y = this.m_normal1.y;
					}
				}
				else {
					this.m_front = offset1 >= 0 && offset2 >= 0;
					if (this.m_front) {
						this.m_normal.x = this.m_normal1.x;
						this.m_normal.y = this.m_normal1.y;
						this.m_lowerLimit.x = -this.m_normal1.x;
						this.m_lowerLimit.y = -this.m_normal1.y;
						this.m_upperLimit.x = this.m_normal1.x;
						this.m_upperLimit.y = this.m_normal1.y;
					}
					else {
						this.m_normal.x = -this.m_normal1.x;
						this.m_normal.y = -this.m_normal1.y;
						this.m_lowerLimit.x = -this.m_normal2.x;
						this.m_lowerLimit.y = -this.m_normal2.y;
						this.m_upperLimit.x = this.m_normal1.x;
						this.m_upperLimit.y = this.m_normal1.y;
					}
				}
			}
			else {
				this.m_front = offset1 >= 0;
				if (this.m_front) {
					this.m_normal.x = this.m_normal1.x;
					this.m_normal.y = this.m_normal1.y;
					this.m_lowerLimit.x = -this.m_normal1.x;
					this.m_lowerLimit.y = -this.m_normal1.y;
					this.m_upperLimit.x = -this.m_normal1.x;
					this.m_upperLimit.y = -this.m_normal1.y;
				}
				else {
					this.m_normal.x = -this.m_normal1.x;
					this.m_normal.y = -this.m_normal1.y;
					this.m_lowerLimit.x = this.m_normal1.x;
					this.m_lowerLimit.y = this.m_normal1.y;
					this.m_upperLimit.x = this.m_normal1.x;
					this.m_upperLimit.y = this.m_normal1.y;
				}
			}
			// Get polygonB in frameA
			this.m_polygonB.count = polygonB.m_count;
			for (var i = 0; i < polygonB.m_count; ++i) {
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.m_xf, polygonB.m_vertices[i], this.m_polygonB.vertices[i]);
				$org_jbox2d_common_Rot.mulToOutUnsafe(this.m_xf.q, polygonB.m_normals[i], this.m_polygonB.normals[i]);
			}
			this.m_radius = 2 * $org_jbox2d_common_Settings.polygonRadius;
			manifold.pointCount = 0;
			this.computeEdgeSeparation(this.$edgeAxis);
			// If no valid normal can be found than this edge should not collide.
			if (this.$edgeAxis.type === 0) {
				return;
			}
			if (this.$edgeAxis.separation > this.m_radius) {
				return;
			}
			this.computePolygonSeparation(this.$polygonAxis);
			if (this.$polygonAxis.type !== 0 && this.$polygonAxis.separation > this.m_radius) {
				return;
			}
			// Use hysteresis for jitter reduction.
			var k_relativeTol = 0.98;
			var k_absoluteTol = 0.001;
			var primaryAxis;
			if (this.$polygonAxis.type === 0) {
				primaryAxis = this.$edgeAxis;
			}
			else if (this.$polygonAxis.separation > k_relativeTol * this.$edgeAxis.separation + k_absoluteTol) {
				primaryAxis = this.$polygonAxis;
			}
			else {
				primaryAxis = this.$edgeAxis;
			}
			var ie0 = this.$ie[0];
			var ie1 = this.$ie[1];
			if (primaryAxis.type === 1) {
				manifold.type = 1;
				// Search for the polygon normal that is most anti-parallel to the edge normal.
				var bestIndex = 0;
				var bestValue = $org_jbox2d_common_Vec2.dot(this.m_normal, this.m_polygonB.normals[0]);
				for (var i1 = 1; i1 < this.m_polygonB.count; ++i1) {
					var value = $org_jbox2d_common_Vec2.dot(this.m_normal, this.m_polygonB.normals[i1]);
					if (value < bestValue) {
						bestValue = value;
						bestIndex = i1;
					}
				}
				var i11 = bestIndex;
				var i2 = ((i11 + 1 < this.m_polygonB.count) ? (i11 + 1) : 0);
				ie0.v.set(this.m_polygonB.vertices[i11]);
				ie0.id.indexA = 0;
				ie0.id.indexB = i11;
				ie0.id.typeA = 1;
				ie0.id.typeB = 0;
				ie1.v.set(this.m_polygonB.vertices[i2]);
				ie1.id.indexA = 0;
				ie1.id.indexB = i2;
				ie1.id.typeA = 1;
				ie1.id.typeB = 0;
				if (this.m_front) {
					this.$rf.i1 = 0;
					this.$rf.i2 = 1;
					this.$rf.v1.set(this.m_v1);
					this.$rf.v2.set(this.m_v2);
					this.$rf.normal.set(this.m_normal1);
				}
				else {
					this.$rf.i1 = 1;
					this.$rf.i2 = 0;
					this.$rf.v1.set(this.m_v2);
					this.$rf.v2.set(this.m_v1);
					this.$rf.normal.set(this.m_normal1).negateLocal();
				}
			}
			else {
				manifold.type = 2;
				ie0.v.set(this.m_v1);
				ie0.id.indexA = 0;
				ie0.id.indexB = primaryAxis.index;
				ie0.id.typeA = 0;
				ie0.id.typeB = 1;
				ie1.v.set(this.m_v2);
				ie1.id.indexA = 0;
				ie1.id.indexB = primaryAxis.index;
				ie1.id.typeA = 0;
				ie1.id.typeB = 1;
				this.$rf.i1 = primaryAxis.index;
				this.$rf.i2 = ((this.$rf.i1 + 1 < this.m_polygonB.count) ? (this.$rf.i1 + 1) : 0);
				this.$rf.v1.set(this.m_polygonB.vertices[this.$rf.i1]);
				this.$rf.v2.set(this.m_polygonB.vertices[this.$rf.i2]);
				this.$rf.normal.set(this.m_polygonB.normals[this.$rf.i1]);
			}
			this.$rf.sideNormal1.set$1(this.$rf.normal.y, -this.$rf.normal.x);
			this.$rf.sideNormal2.set(this.$rf.sideNormal1).negateLocal();
			this.$rf.sideOffset1 = $org_jbox2d_common_Vec2.dot(this.$rf.sideNormal1, this.$rf.v1);
			this.$rf.sideOffset2 = $org_jbox2d_common_Vec2.dot(this.$rf.sideNormal2, this.$rf.v2);
			// Clip incident edge against extruded edge1 side edges.
			var np;
			// Clip to box side 1
			np = $org_jbox2d_collision_Collision.clipSegmentToLine(this.$clipPoints1, this.$ie, this.$rf.sideNormal1, this.$rf.sideOffset1, this.$rf.i1);
			if (np < $org_jbox2d_common_Settings.maxManifoldPoints) {
				return;
			}
			// Clip to negative box side 1
			np = $org_jbox2d_collision_Collision.clipSegmentToLine(this.$clipPoints2, this.$clipPoints1, this.$rf.sideNormal2, this.$rf.sideOffset2, this.$rf.i2);
			if (np < $org_jbox2d_common_Settings.maxManifoldPoints) {
				return;
			}
			// Now clipPoints2 contains the clipped points.
			if (primaryAxis.type === 1) {
				manifold.localNormal.set(this.$rf.normal);
				manifold.localPoint.set(this.$rf.v1);
			}
			else {
				manifold.localNormal.set(polygonB.m_normals[this.$rf.i1]);
				manifold.localPoint.set(polygonB.m_vertices[this.$rf.i1]);
			}
			var pointCount = 0;
			for (var i3 = 0; i3 < $org_jbox2d_common_Settings.maxManifoldPoints; ++i3) {
				var separation;
				separation = $org_jbox2d_common_Vec2.dot(this.$rf.normal, this.$temp.set(this.$clipPoints2[i3].v).subLocal(this.$rf.v1));
				if (separation <= this.m_radius) {
					var cp = manifold.points[pointCount];
					if (primaryAxis.type === 1) {
						// cp.localPoint = MulT(m_xf, clipPoints2[i].v);
						$org_jbox2d_common_Transform.mulTransToOutUnsafe$1(this.m_xf, this.$clipPoints2[i3].v, cp.localPoint);
						cp.id.set(this.$clipPoints2[i3].id);
					}
					else {
						cp.localPoint.set(this.$clipPoints2[i3].v);
						cp.id.typeA = this.$clipPoints2[i3].id.typeB;
						cp.id.typeB = this.$clipPoints2[i3].id.typeA;
						cp.id.indexA = this.$clipPoints2[i3].id.indexB;
						cp.id.indexB = this.$clipPoints2[i3].id.indexA;
					}
					++pointCount;
				}
			}
			manifold.pointCount = pointCount;
		},
		computeEdgeSeparation: function(axis) {
			axis.type = 1;
			axis.index = (this.m_front ? 0 : 1);
			axis.separation = Number.MAX_VALUE;
			var nx = this.m_normal.x;
			var ny = this.m_normal.y;
			for (var i = 0; i < this.m_polygonB.count; ++i) {
				var v = this.m_polygonB.vertices[i];
				var tempx = v.x - this.m_v1.x;
				var tempy = v.y - this.m_v1.y;
				var s = nx * tempx + ny * tempy;
				if (s < axis.separation) {
					axis.separation = s;
				}
			}
		},
		computePolygonSeparation: function(axis) {
			axis.type = 0;
			axis.index = -1;
			axis.separation = 0;
			this.$perp.x = -this.m_normal.y;
			this.$perp.y = this.m_normal.x;
			for (var i = 0; i < this.m_polygonB.count; ++i) {
				var normalB = this.m_polygonB.normals[i];
				var vB = this.m_polygonB.vertices[i];
				this.$n.x = -normalB.x;
				this.$n.y = -normalB.y;
				// double s1 = Vec2.dot(n, temp.set(vB).subLocal(m_v1));
				// double s2 = Vec2.dot(n, temp.set(vB).subLocal(m_v2));
				var tempx = vB.x - this.m_v1.x;
				var tempy = vB.y - this.m_v1.y;
				var s1 = this.$n.x * tempx + this.$n.y * tempy;
				tempx = vB.x - this.m_v2.x;
				tempy = vB.y - this.m_v2.y;
				var s2 = this.$n.x * tempx + this.$n.y * tempy;
				var s = $org_jbox2d_common_MathUtils.min(s1, s2);
				if (s > this.m_radius) {
					// No collision
					axis.type = 2;
					axis.index = i;
					axis.separation = s;
					return;
				}
				// Adjacency
				if (this.$n.x * this.$perp.x + this.$n.y * this.$perp.y >= 0) {
					if ($org_jbox2d_common_Vec2.dot(this.$temp.set(this.$n).subLocal(this.m_upperLimit), this.m_normal) < -$org_jbox2d_common_Settings.angularSlop) {
						continue;
					}
				}
				else if ($org_jbox2d_common_Vec2.dot(this.$temp.set(this.$n).subLocal(this.m_lowerLimit), this.m_normal) < -$org_jbox2d_common_Settings.angularSlop) {
					continue;
				}
				if (s > axis.separation) {
					axis.type = 2;
					axis.index = i;
					axis.separation = s;
				}
			}
		}
	});
	ss.initEnum($org_jbox2d_collision_Collision$EPCollider$VertexType, { ISOLATED: 0, CONCAVE: 1, CONVEX: 2 });
	ss.initEnum($org_jbox2d_collision_Collision$PointState, { nulL_STATE: 0, adD_STATE: 1, persisT_STATE: 2, removE_STATE: 3 });
	ss.initClass($org_jbox2d_collision_Collision$ReferenceFace, {});
	ss.initClass($org_jbox2d_collision_Collision$TempPolygon, {});
	ss.initClass($org_jbox2d_collision_ContactID, {
		compareTo: function(o) {
			return this.getKey() - o.getKey();
		},
		getKey: function() {
			return this.indexA << 24 | this.indexB << 16 | this.typeA << 8 | this.typeB;
		},
		isEqual: function(cid) {
			return this.getKey() === cid.getKey();
		},
		set: function(c) {
			this.indexA = c.indexA;
			this.indexB = c.indexB;
			this.typeA = c.typeA;
			this.typeB = c.typeB;
		},
		flip: function() {
			var tempA = this.indexA;
			this.indexA = this.indexB;
			this.indexB = tempA;
			tempA = this.typeA;
			this.typeA = this.typeB;
			this.typeB = tempA;
		},
		zero: function() {
			this.indexA = 0;
			this.indexB = 0;
			this.typeA = 0;
			this.typeB = 0;
		}
	}, null, [ss.IComparable]);
	$org_jbox2d_collision_ContactID.$ctor1.prototype = $org_jbox2d_collision_ContactID.prototype;
	ss.initEnum($org_jbox2d_collision_ContactID$Type, { VERTEX: 0, FACE: 1 });
	ss.initClass($org_jbox2d_collision_Distance, {
		distance: function(output, cache, input) {
			$org_jbox2d_collision_Distance.gjK_CALLS++;
			var proxyA = input.proxyA;
			var proxyB = input.proxyB;
			var transformA = input.transformA;
			var transformB = input.transformB;
			// Initialize the simplex.
			this.$simplex.readCache(cache, proxyA, transformA, proxyB, transformB);
			// Get simplex vertices as an array.
			var vertices = this.$simplex.vertices;
			// These store the vertices of the last simplex so that we
			// can check for duplicates and prevent cycling.
			// (pooled above)
			var saveCount = 0;
			this.$simplex.getClosestPoint(this.$closestPoint);
			var distanceSqr1 = this.$closestPoint.lengthSquared();
			var distanceSqr2 = distanceSqr1;
			// Main iteration loop
			var iter = 0;
			while (iter < $org_jbox2d_collision_Distance.gjK_MAX_ITERS) {
				// Copy simplex so we can identify duplicates.
				saveCount = this.$simplex.m_count;
				for (var i = 0; i < saveCount; i++) {
					this.$saveA[i] = vertices[i].indexA;
					this.$saveB[i] = vertices[i].indexB;
				}
				switch (this.$simplex.m_count) {
					case 1: {
						break;
					}
					case 2: {
						this.$simplex.solve2();
						break;
					}
					case 3: {
						this.$simplex.solve3();
						break;
					}
				}
				// If we have 3 points, then the origin is in the corresponding triangle.
				if (this.$simplex.m_count === 3) {
					break;
				}
				// Compute closest point.
				this.$simplex.getClosestPoint(this.$closestPoint);
				distanceSqr2 = this.$closestPoint.lengthSquared();
				// ensure progress
				if (distanceSqr2 >= distanceSqr1) {
					// break;
				}
				distanceSqr1 = distanceSqr2;
				// get search direction;
				this.$simplex.getSearchDirection(this.$d);
				// Ensure the search direction is numerically fit.
				if (this.$d.lengthSquared() < $org_jbox2d_common_Settings.EPSILON * $org_jbox2d_common_Settings.EPSILON) {
					// The origin is probably contained by a line segment
					// or triangle. Thus the shapes are overlapped.
					// We can't return zero here even though there may be overlap.
					// In case the simplex is a point, segment, or triangle it is difficult
					// to determine if the origin is contained in the CSO or very close to it.
					break;
				}
				//
				//       * SimplexVertex* vertex = vertices + simplex.m_count; vertex.indexA =
				//
				//       * proxyA.GetSupport(MulT(transformA.R, -d)); vertex.wA = Mul(transformA,
				//
				//       * proxyA.GetVertex(vertex.indexA)); Vec2 wBLocal; vertex.indexB =
				//
				//       * proxyB.GetSupport(MulT(transformB.R, d)); vertex.wB = Mul(transformB,
				//
				//       * proxyB.GetVertex(vertex.indexB)); vertex.w = vertex.wB - vertex.wA;
				// Compute a tentative new simplex vertex using support points.
				var vertex = vertices[this.$simplex.m_count];
				$org_jbox2d_common_Rot.mulTransUnsafe$1(transformA.q, this.$d.negateLocal(), this.$temp);
				vertex.indexA = proxyA.getSupport(this.$temp);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(transformA, proxyA.getVertex(vertex.indexA), vertex.wA);
				// Vec2 wBLocal;
				$org_jbox2d_common_Rot.mulTransUnsafe$1(transformB.q, this.$d.negateLocal(), this.$temp);
				vertex.indexB = proxyB.getSupport(this.$temp);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(transformB, proxyB.getVertex(vertex.indexB), vertex.wB);
				vertex.w.set(vertex.wB).subLocal(vertex.wA);
				// Iteration count is equated to the number of support point calls.
				++iter;
				++$org_jbox2d_collision_Distance.gjK_ITERS;
				// Check for duplicate support points. This is the main termination criteria.
				var duplicate = false;
				for (var i1 = 0; i1 < saveCount; ++i1) {
					if (vertex.indexA === this.$saveA[i1] && vertex.indexB === this.$saveB[i1]) {
						duplicate = true;
						break;
					}
				}
				// If we found a duplicate support point we must exit to avoid cycling.
				if (duplicate) {
					break;
				}
				// New vertex is ok and needed.
				++this.$simplex.m_count;
			}
			$org_jbox2d_collision_Distance.gjK_MAX_ITERS = $org_jbox2d_common_MathUtils.max$1($org_jbox2d_collision_Distance.gjK_MAX_ITERS, iter);
			// Prepare output.
			this.$simplex.getWitnessPoints(output.pointA, output.pointB);
			output.distance = $org_jbox2d_common_MathUtils.distance(output.pointA, output.pointB);
			output.iterations = iter;
			// Cache the simplex.
			this.$simplex.writeCache(cache);
			// Apply radii if requested.
			if (input.useRadii) {
				var rA = proxyA.m_radius;
				var rB = proxyB.m_radius;
				if (output.distance > rA + rB && output.distance > $org_jbox2d_common_Settings.EPSILON) {
					// Shapes are still no overlapped.
					// Move the witness points to the out_er surface.
					output.distance -= rA + rB;
					this.$normal.set(output.pointB).subLocal(output.pointA);
					this.$normal.normalize();
					this.$temp.set(this.$normal).mulLocal(rA);
					output.pointA.addLocal(this.$temp);
					this.$temp.set(this.$normal).mulLocal(rB);
					output.pointB.subLocal(this.$temp);
				}
				else {
					// Shapes are overlapped when radii are considered.
					// Move the witness points to the middle.
					// Vec2 p = 0.5d * (output.pointA + output.pointB);
					output.pointA.addLocal(output.pointB).mulLocal(0.5);
					output.pointB.set(output.pointA);
					output.distance = 0;
				}
			}
		}
	});
	ss.initClass($org_jbox2d_collision_DistanceInput, {});
	ss.initClass($org_jbox2d_collision_DistanceOutput, {});
	ss.initClass($org_jbox2d_collision_DistanceProxy, {
		set: function(shape, index) {
			switch (shape.getType()) {
				case 0: {
					var circle = ss.cast(shape, $org_jbox2d_collision_shapes_CircleShape);
					this.m_vertices[0].set(circle.m_p);
					this.m_count = 1;
					this.m_radius = circle.m_radius;
					break;
				}
				case 2: {
					var poly = ss.cast(shape, $org_jbox2d_collision_shapes_PolygonShape);
					this.m_count = poly.m_count;
					this.m_radius = poly.m_radius;
					for (var i = 0; i < this.m_count; i++) {
						this.m_vertices[i].set(poly.m_vertices[i]);
					}
					break;
				}
				case 3: {
					var chain = ss.cast(shape, $org_jbox2d_collision_shapes_ChainShape);
					this.m_buffer[0] = chain.m_vertices[index];
					if (index + 1 < chain.m_count) {
						this.m_buffer[1] = chain.m_vertices[index + 1];
					}
					else {
						this.m_buffer[1] = chain.m_vertices[0];
					}
					this.m_vertices[0].set(this.m_buffer[0]);
					this.m_vertices[1].set(this.m_buffer[1]);
					this.m_count = 2;
					this.m_radius = chain.m_radius;
					break;
				}
				case 1: {
					var edge = ss.cast(shape, $org_jbox2d_collision_shapes_EdgeShape);
					this.m_vertices[0].set(edge.m_vertex1);
					this.m_vertices[1].set(edge.m_vertex2);
					this.m_count = 2;
					this.m_radius = edge.m_radius;
					break;
				}
			}
		},
		getSupport: function(d) {
			var bestIndex = 0;
			var bestValue = $org_jbox2d_common_Vec2.dot(this.m_vertices[0], d);
			for (var i = 1; i < this.m_count; i++) {
				var value = $org_jbox2d_common_Vec2.dot(this.m_vertices[i], d);
				if (value > bestValue) {
					bestIndex = i;
					bestValue = value;
				}
			}
			return bestIndex;
		},
		getSupportVertex: function(d) {
			var bestIndex = 0;
			var bestValue = $org_jbox2d_common_Vec2.dot(this.m_vertices[0], d);
			for (var i = 1; i < this.m_count; i++) {
				var value = $org_jbox2d_common_Vec2.dot(this.m_vertices[i], d);
				if (value > bestValue) {
					bestIndex = i;
					bestValue = value;
				}
			}
			return this.m_vertices[bestIndex];
		},
		getVertexCount: function() {
			return this.m_count;
		},
		getVertex: function(index) {
			return this.m_vertices[index];
		}
	});
	ss.initClass($org_jbox2d_collision_Manifold, {
		set: function(cp) {
			for (var i = 0; i < cp.pointCount; i++) {
				this.points[i].set(cp.points[i]);
			}
			this.type = cp.type;
			this.localNormal.set(cp.localNormal);
			this.localPoint.set(cp.localPoint);
			this.pointCount = cp.pointCount;
		}
	});
	$org_jbox2d_collision_Manifold.$ctor1.prototype = $org_jbox2d_collision_Manifold.prototype;
	ss.initClass($org_jbox2d_collision_ManifoldPoint, {
		set: function(cp) {
			this.localPoint.set(cp.localPoint);
			this.normalImpulse = cp.normalImpulse;
			this.tangentImpulse = cp.tangentImpulse;
			this.id.set(cp.id);
		}
	});
	$org_jbox2d_collision_ManifoldPoint.$ctor1.prototype = $org_jbox2d_collision_ManifoldPoint.prototype;
	ss.initEnum($org_jbox2d_collision_ManifoldType, { CIRCLES: 0, facE_A: 1, facE_B: 2 });
	ss.initClass($org_jbox2d_collision_RayCastInput, {
		set: function(rci) {
			this.p1.set(rci.p1);
			this.p2.set(rci.p2);
			this.maxFraction = rci.maxFraction;
		}
	});
	ss.initClass($org_jbox2d_collision_RayCastOutput, {
		set: function(rco) {
			this.normal.set(rco.normal);
			this.fraction = rco.fraction;
		}
	});
	ss.initClass($org_jbox2d_collision_Simplex, {
		readCache: function(cache, proxyA, transformA, proxyB, transformB) {
			// Copy data from cache.
			this.m_count = cache.count;
			for (var i = 0; i < this.m_count; ++i) {
				var v = this.vertices[i];
				v.indexA = cache.indexA[i];
				v.indexB = cache.indexB[i];
				var wALocal = proxyA.getVertex(v.indexA);
				var wBLocal = proxyB.getVertex(v.indexB);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(transformA, wALocal, v.wA);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(transformB, wBLocal, v.wB);
				v.w.set(v.wB).subLocal(v.wA);
				v.a = 0;
			}
			// Compute the new simplex metric, if it is substantially different than
			// old metric then flush the simplex.
			if (this.m_count > 1) {
				var metric1 = cache.metric;
				var metric2 = this.getMetric();
				if (metric2 < 0.5 * metric1 || 2 * metric1 < metric2 || metric2 < $org_jbox2d_common_Settings.EPSILON) {
					// Reset the simplex.
					this.m_count = 0;
				}
			}
			// If the cache is empty or invalid ...
			if (this.m_count === 0) {
				var v1 = this.vertices[0];
				v1.indexA = 0;
				v1.indexB = 0;
				var wALocal1 = proxyA.getVertex(0);
				var wBLocal1 = proxyB.getVertex(0);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(transformA, wALocal1, v1.wA);
				$org_jbox2d_common_Transform.mulToOutUnsafe$1(transformB, wBLocal1, v1.wB);
				v1.w.set(v1.wB).subLocal(v1.wA);
				this.m_count = 1;
			}
		},
		writeCache: function(cache) {
			cache.metric = this.getMetric();
			cache.count = this.m_count;
			for (var i = 0; i < this.m_count; ++i) {
				cache.indexA[i] = this.vertices[i].indexA;
				cache.indexB[i] = this.vertices[i].indexB;
			}
		},
		getSearchDirection: function(out_) {
			switch (this.m_count) {
				case 1: {
					out_.set(this.m_v1.w).negateLocal();
					return;
				}
				case 2: {
					this.$e12.set(this.m_v2.w).subLocal(this.m_v1.w);
					// use out_ for a temp variable real quick
					out_.set(this.m_v1.w).negateLocal();
					var sgn = $org_jbox2d_common_Vec2.cross$2(this.$e12, out_);
					if (sgn > 0) {
						// Origin is left of e12.
						$org_jbox2d_common_Vec2.crossToOutUnsafe(1, this.$e12, out_);
						return;
					}
					// Origin is right of e12.
					$org_jbox2d_common_Vec2.crossToOutUnsafe$1(this.$e12, 1, out_);
					return;
				}
				default: {
					out_.setZero();
					return;
				}
			}
		},
		getClosestPoint: function(out_) {
			switch (this.m_count) {
				case 0: {
					out_.setZero();
					return;
				}
				case 1: {
					out_.set(this.m_v1.w);
					return;
				}
				case 2: {
					this.$case22.set(this.m_v2.w).mulLocal(this.m_v2.a);
					this.$case2.set(this.m_v1.w).mulLocal(this.m_v1.a).addLocal(this.$case22);
					out_.set(this.$case2);
					return;
				}
				case 3: {
					out_.setZero();
					return;
				}
				default: {
					out_.setZero();
					return;
				}
			}
		},
		getWitnessPoints: function(pA, pB) {
			switch (this.m_count) {
				case 0: {
					break;
				}
				case 1: {
					pA.set(this.m_v1.wA);
					pB.set(this.m_v1.wB);
					break;
				}
				case 2: {
					this.$case2.set(this.m_v1.wA).mulLocal(this.m_v1.a);
					pA.set(this.m_v2.wA).mulLocal(this.m_v2.a).addLocal(this.$case2);
					// m_v1.a * m_v1.wA + m_v2.a * m_v2.wA;
					// *pB = m_v1.a * m_v1.wB + m_v2.a * m_v2.wB;
					this.$case2.set(this.m_v1.wB).mulLocal(this.m_v1.a);
					pB.set(this.m_v2.wB).mulLocal(this.m_v2.a).addLocal(this.$case2);
					break;
				}
				case 3: {
					pA.set(this.m_v1.wA).mulLocal(this.m_v1.a);
					this.$case3.set(this.m_v2.wA).mulLocal(this.m_v2.a);
					this.$case33.set(this.m_v3.wA).mulLocal(this.m_v3.a);
					pA.addLocal(this.$case3).addLocal(this.$case33);
					pB.set(pA);
					// *pA = m_v1.a * m_v1.wA + m_v2.a * m_v2.wA + m_v3.a * m_v3.wA;
					// *pB = *pA;
					break;
				}
				default: {
					break;
				}
			}
		},
		getMetric: function() {
			switch (this.m_count) {
				case 0: {
					return 0;
				}
				case 1: {
					return 0;
				}
				case 2: {
					return $org_jbox2d_common_MathUtils.distance(this.m_v1.w, this.m_v2.w);
				}
				case 3: {
					this.$case3.set(this.m_v2.w).subLocal(this.m_v1.w);
					this.$case33.set(this.m_v3.w).subLocal(this.m_v1.w);
					// return Vec2.cross(m_v2.w - m_v1.w, m_v3.w - m_v1.w);
					return $org_jbox2d_common_Vec2.cross$2(this.$case3, this.$case33);
				}
				default: {
					return 0;
				}
			}
		},
		solve2: function() {
			// Solve a line segment using barycentric coordinates.
			//
			// p = a1 * w1 + a2 * w2
			// a1 + a2 = 1
			//
			// The vector from the origin to the closest point on the line is
			// perpendicular to the line.
			// e12 = w2 - w1
			// dot(p, e) = 0
			// a1 * dot(w1, e) + a2 * dot(w2, e) = 0
			//
			// 2-by-2 linear system
			// [1 1 ][a1] = [1]
			// [w1.e12 w2.e12][a2] = [0]
			//
			// Define
			// d12_1 = dot(w2, e12)
			// d12_2 = -dot(w1, e12)
			// d12 = d12_1 + d12_2
			//
			// Solution
			// a1 = d12_1 / d12
			// a2 = d12_2 / d12
			var w1 = this.m_v1.w;
			var w2 = this.m_v2.w;
			this.$e12.set(w2).subLocal(w1);
			// w1 region
			var d12_2 = -$org_jbox2d_common_Vec2.dot(w1, this.$e12);
			if (d12_2 <= 0) {
				// a2 <= 0, so we clamp it to 0
				this.m_v1.a = 1;
				this.m_count = 1;
				return;
			}
			// w2 region
			var d12_1 = $org_jbox2d_common_Vec2.dot(w2, this.$e12);
			if (d12_1 <= 0) {
				// a1 <= 0, so we clamp it to 0
				this.m_v2.a = 1;
				this.m_count = 1;
				this.m_v1.set(this.m_v2);
				return;
			}
			// Must be in e12 region.
			var inv_d12 = 1 / (d12_1 + d12_2);
			this.m_v1.a = d12_1 * inv_d12;
			this.m_v2.a = d12_2 * inv_d12;
			this.m_count = 2;
		},
		solve3: function() {
			this.$w1.set(this.m_v1.w);
			this.$w2.set(this.m_v2.w);
			this.$w3.set(this.m_v3.w);
			// Edge12
			// [1 1 ][a1] = [1]
			// [w1.e12 w2.e12][a2] = [0]
			// a3 = 0
			this.$e12.set(this.$w2).subLocal(this.$w1);
			var w1e12 = $org_jbox2d_common_Vec2.dot(this.$w1, this.$e12);
			var w2e12 = $org_jbox2d_common_Vec2.dot(this.$w2, this.$e12);
			var d12_1 = w2e12;
			var d12_2 = -w1e12;
			// Edge13
			// [1 1 ][a1] = [1]
			// [w1.e13 w3.e13][a3] = [0]
			// a2 = 0
			this.$e13.set(this.$w3).subLocal(this.$w1);
			var w1e13 = $org_jbox2d_common_Vec2.dot(this.$w1, this.$e13);
			var w3e13 = $org_jbox2d_common_Vec2.dot(this.$w3, this.$e13);
			var d13_1 = w3e13;
			var d13_2 = -w1e13;
			// Edge23
			// [1 1 ][a2] = [1]
			// [w2.e23 w3.e23][a3] = [0]
			// a1 = 0
			this.$e23.set(this.$w3).subLocal(this.$w2);
			var w2e23 = $org_jbox2d_common_Vec2.dot(this.$w2, this.$e23);
			var w3e23 = $org_jbox2d_common_Vec2.dot(this.$w3, this.$e23);
			var d23_1 = w3e23;
			var d23_2 = -w2e23;
			// Triangle123
			var n123 = $org_jbox2d_common_Vec2.cross$2(this.$e12, this.$e13);
			var d123_1 = n123 * $org_jbox2d_common_Vec2.cross$2(this.$w2, this.$w3);
			var d123_2 = n123 * $org_jbox2d_common_Vec2.cross$2(this.$w3, this.$w1);
			var d123_3 = n123 * $org_jbox2d_common_Vec2.cross$2(this.$w1, this.$w2);
			// w1 region
			if (d12_2 <= 0 && d13_2 <= 0) {
				this.m_v1.a = 1;
				this.m_count = 1;
				return;
			}
			// e12
			if (d12_1 > 0 && d12_2 > 0 && d123_3 <= 0) {
				var inv_d12 = 1 / (d12_1 + d12_2);
				this.m_v1.a = d12_1 * inv_d12;
				this.m_v2.a = d12_2 * inv_d12;
				this.m_count = 2;
				return;
			}
			// e13
			if (d13_1 > 0 && d13_2 > 0 && d123_2 <= 0) {
				var inv_d13 = 1 / (d13_1 + d13_2);
				this.m_v1.a = d13_1 * inv_d13;
				this.m_v3.a = d13_2 * inv_d13;
				this.m_count = 2;
				this.m_v2.set(this.m_v3);
				return;
			}
			// w2 region
			if (d12_1 <= 0 && d23_2 <= 0) {
				this.m_v2.a = 1;
				this.m_count = 1;
				this.m_v1.set(this.m_v2);
				return;
			}
			// w3 region
			if (d13_1 <= 0 && d23_1 <= 0) {
				this.m_v3.a = 1;
				this.m_count = 1;
				this.m_v1.set(this.m_v3);
				return;
			}
			// e23
			if (d23_1 > 0 && d23_2 > 0 && d123_1 <= 0) {
				var inv_d23 = 1 / (d23_1 + d23_2);
				this.m_v2.a = d23_1 * inv_d23;
				this.m_v3.a = d23_2 * inv_d23;
				this.m_count = 2;
				this.m_v1.set(this.m_v3);
				return;
			}
			// Must be in triangle123
			var inv_d123 = 1 / (d123_1 + d123_2 + d123_3);
			this.m_v1.a = d123_1 * inv_d123;
			this.m_v2.a = d123_2 * inv_d123;
			this.m_v3.a = d123_3 * inv_d123;
			this.m_count = 3;
		}
	});
	ss.initClass($org_jbox2d_collision_SimplexCache, {
		set: function(sc) {
			$org_jbox2d_dynamics_ArrayHelper.copy(sc.indexA, 0, this.indexA, 0, this.indexA.length);
			$org_jbox2d_dynamics_ArrayHelper.copy(sc.indexB, 0, this.indexB, 0, this.indexB.length);
			this.metric = sc.metric;
			this.count = sc.count;
		}
	});
	ss.initClass($org_jbox2d_collision_SimplexVertex, {
		set: function(sv) {
			this.wA.set(sv.wA);
			this.wB.set(sv.wB);
			this.w.set(sv.w);
			this.a = sv.a;
			this.indexA = sv.indexA;
			this.indexB = sv.indexB;
		}
	});
	ss.initClass($org_jbox2d_collision_TimeOfImpact, {
		timeOfImpact: function(output, input) {
			// CCD via the local separating axis method. This seeks progression
			// by computing the largest time at which separation is maintained.
			++$org_jbox2d_collision_TimeOfImpact.toiCalls;
			output.state = 0;
			output.t = input.tMax;
			var proxyA = input.proxyA;
			var proxyB = input.proxyB;
			this.$sweepA.set(input.sweepA);
			this.$sweepB.set(input.sweepB);
			// Large rotations can make the root finder fail, so we normalize the
			// sweep angles.
			this.$sweepA.normalize();
			this.$sweepB.normalize();
			var tMax = input.tMax;
			var totalRadius = proxyA.m_radius + proxyB.m_radius;
			// djm: whats with all these constants?
			var target = $org_jbox2d_common_MathUtils.max($org_jbox2d_common_Settings.linearSlop, totalRadius - 3 * $org_jbox2d_common_Settings.linearSlop);
			var tolerance = 0.25 * $org_jbox2d_common_Settings.linearSlop;
			var t1 = 0;
			var iter = 0;
			this.$cache.count = 0;
			this.$distanceInput.proxyA = input.proxyA;
			this.$distanceInput.proxyB = input.proxyB;
			this.$distanceInput.useRadii = false;
			// The outer loop progressively attempts to compute new separating axes.
			// This loop terminates when an axis is repeated (no progress is made).
			for (;;) {
				this.$sweepA.getTransform(this.$xfA, t1);
				this.$sweepB.getTransform(this.$xfB, t1);
				// System.out.printf("sweepA: %f, %f, sweepB: %f, %f",
				// sweepA.c.x, sweepA.c.y, sweepB.c.x, sweepB.c.y);
				// Get the distance between shapes. We can also use the results
				// to get a separating axis
				this.$distanceInput.transformA = this.$xfA;
				this.$distanceInput.transformB = this.$xfB;
				this.$pool.getDistance().distance(this.$distanceOutput, this.$cache, this.$distanceInput);
				// System.out.printf("Dist: %f at points %f, %f and %f, %f.  %d iterations",
				// distanceOutput.distance, distanceOutput.pointA.x, distanceOutput.pointA.y,
				// distanceOutput.pointB.x, distanceOutput.pointB.y,
				// distanceOutput.iterations);
				// If the shapes are overlapped, we give up on continuous collision.
				if (this.$distanceOutput.distance <= 0) {
					// System.out.println("failure, overlapped");
					// Failure!
					output.state = 2;
					output.t = 0;
					break;
				}
				if (this.$distanceOutput.distance < target + tolerance) {
					// System.out.println("touching, victory");
					// Victory!
					output.state = 3;
					output.t = t1;
					break;
				}
				// Initialize the separating axis.
				this.$fcn.$initialize(this.$cache, proxyA, this.$sweepA, proxyB, this.$sweepB, t1);
				// Compute the TOI on the separating axis. We do this by successively
				// resolving the deepest point. This loop is bounded by the number of
				// vertices.
				var done = false;
				var t2 = tMax;
				var pushBackIter = 0;
				for (;;) {
					// Find the deepest point at t2. Store the witness point indices.
					var s2 = this.$fcn.$findMinSeparation(this.$indexes, t2);
					// System.out.printf("s2: %f", s2);
					// Is the configuration separated?
					if (s2 > target + tolerance) {
						// Victory!
						// System.out.println("separated");
						output.state = 4;
						output.t = tMax;
						done = true;
						break;
					}
					// Has the separation reached tolerance?
					if (s2 > target - tolerance) {
						// System.out.println("advancing");
						// Advance the sweeps
						t1 = t2;
						break;
					}
					// Compute the initial separation of the witness points.
					var s1 = this.$fcn.$evaluate(this.$indexes[0], this.$indexes[1], t1);
					// Check for initial overlap. This might happen if the root finder
					// runs out of iterations.
					// System.out.printf("s1: %f, target: %f, tolerance: %f", s1, target,
					// tolerance);
					if (s1 < target - tolerance) {
						// System.out.println("failed?");
						output.state = 1;
						output.t = t1;
						done = true;
						break;
					}
					// Check for touching
					if (s1 <= target + tolerance) {
						// System.out.println("touching?");
						// Victory! t1 should hold the TOI (could be 0.0).
						output.state = 3;
						output.t = t1;
						done = true;
						break;
					}
					// Compute 1D root of: f(x) - target = 0
					var rootIterCount = 0;
					var a1 = t1, a2 = t2;
					for (;;) {
						// Use a mix of the secant rule and bisection.
						var t;
						if ((rootIterCount & 1) === 1) {
							// Secant rule to improve convergence.
							t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);
						}
						else {
							// Bisection to guarantee progress.
							t = 0.5 * (a1 + a2);
						}
						var s = this.$fcn.$evaluate(this.$indexes[0], this.$indexes[1], t);
						if ($org_jbox2d_common_MathUtils.abs(s - target) < tolerance) {
							// t2 holds a tentative value for t1
							t2 = t;
							break;
						}
						// Ensure we continue to bracket the root.
						if (s > target) {
							a1 = t;
							s1 = s;
						}
						else {
							a2 = t;
							s2 = s;
						}
						++rootIterCount;
						++$org_jbox2d_collision_TimeOfImpact.toiRootIters;
						// djm: whats with this? put in settings?
						if (rootIterCount === 50) {
							break;
						}
					}
					$org_jbox2d_collision_TimeOfImpact.toiMaxRootIters = $org_jbox2d_common_MathUtils.max$1($org_jbox2d_collision_TimeOfImpact.toiMaxRootIters, rootIterCount);
					++pushBackIter;
					if (pushBackIter === $org_jbox2d_common_Settings.maxPolygonVertices) {
						break;
					}
				}
				++iter;
				++$org_jbox2d_collision_TimeOfImpact.toiIters;
				if (done) {
					// System.out.println("done");
					break;
				}
				if (iter === $org_jbox2d_collision_TimeOfImpact.maX_ITERATIONS) {
					// System.out.println("failed, root finder stuck");
					// Root finder got stuck. Semi-victory.
					output.state = 1;
					output.t = t1;
					break;
				}
			}
			// System.out.printf("sweeps: %f, %f, %f; %f, %f, %f", input.s)
			$org_jbox2d_collision_TimeOfImpact.toiMaxIters = $org_jbox2d_common_MathUtils.max$1($org_jbox2d_collision_TimeOfImpact.toiMaxIters, iter);
		}
	});
	ss.initClass($org_jbox2d_collision_TOIInput, {});
	ss.initClass($org_jbox2d_collision_TOIOutput, {});
	ss.initEnum($org_jbox2d_collision_TOIOutputState, { UNKNOWN: 0, FAILED: 1, OVERLAPPED: 2, TOUCHING: 3, SEPARATED: 4 });
	ss.initClass($org_jbox2d_collision_WorldManifold, {
		initialize: function(manifold, xfA, radiusA, xfB, radiusB) {
			if (manifold.pointCount === 0) {
				return;
			}
			switch (manifold.type) {
				case 0: {
					{
						// Vec2 pointA = pool3;
						// Vec2 pointB = pool4;
						//
						// normal.set(1, 0);
						// Transform.mulToOut(xfA, manifold.localPoint, pointA);
						// Transform.mulToOut(xfB, manifold.points[0].localPoint, pointB);
						//
						// if (MathUtils.distanceSquared(pointA, pointB) > Settings.EPSILON * Settings.EPSILON) {
						// normal.set(pointB).subLocal(pointA);
						// normal.normalize();
						// }
						//
						// cA.set(normal).mulLocal(radiusA).addLocal(pointA);
						// cB.set(normal).mulLocal(radiusB).subLocal(pointB).negateLocal();
						// points[0].set(cA).addLocal(cB).mulLocal(0.5d);
						var pointA = this.$pool3;
						var pointB = this.$pool4;
						this.normal.x = 1;
						this.normal.y = 0;
						// pointA.x = xfA.p.x + xfA.q.ex.x * manifold.localPoint.x + xfA.q.ey.x *
						// manifold.localPoint.y;
						// pointA.y = xfA.p.y + xfA.q.ex.y * manifold.localPoint.x + xfA.q.ey.y *
						// manifold.localPoint.y;
						// pointB.x = xfB.p.x + xfB.q.ex.x * manifold.points[0].localPoint.x + xfB.q.ey.x *
						// manifold.points[0].localPoint.y;
						// pointB.y = xfB.p.y + xfB.q.ex.y * manifold.points[0].localPoint.x + xfB.q.ey.y *
						// manifold.points[0].localPoint.y;
						$org_jbox2d_common_Transform.mulToOut$1(xfA, manifold.localPoint, pointA);
						$org_jbox2d_common_Transform.mulToOut$1(xfB, manifold.points[0].localPoint, pointB);
						if ($org_jbox2d_common_MathUtils.distanceSquared(pointA, pointB) > $org_jbox2d_common_Settings.EPSILON * $org_jbox2d_common_Settings.EPSILON) {
							this.normal.x = pointB.x - pointA.x;
							this.normal.y = pointB.y - pointA.y;
							this.normal.normalize();
						}
						var cAx = this.normal.x * radiusA + pointA.x;
						var cAy = this.normal.y * radiusA + pointA.y;
						var cBx = -this.normal.x * radiusB + pointB.x;
						var cBy = -this.normal.y * radiusB + pointB.y;
						this.points[0].x = (cAx + cBx) * 0.5;
						this.points[0].y = (cAy + cBy) * 0.5;
					}
					break;
				}
				case 1: {
					{
						var planePoint = this.$pool3;
						$org_jbox2d_common_Rot.mulToOutUnsafe(xfA.q, manifold.localNormal, this.normal);
						$org_jbox2d_common_Transform.mulToOut$1(xfA, manifold.localPoint, planePoint);
						var clipPoint = this.$pool4;
						for (var i = 0; i < manifold.pointCount; i++) {
							// b2Vec2 clipPoint = b2Mul(xfB, manifold->points[i].localPoint);
							// b2Vec2 cA = clipPoint + (radiusA - b2Dot(clipPoint - planePoint,
							// normal)) * normal;
							// b2Vec2 cB = clipPoint - radiusB * normal;
							// points[i] = 0.5d * (cA + cB);
							$org_jbox2d_common_Transform.mulToOut$1(xfB, manifold.points[i].localPoint, clipPoint);
							// use cA as temporary for now
							// cA.set(clipPoint).subLocal(planePoint);
							// double scalar = radiusA - Vec2.dot(cA, normal);
							// cA.set(normal).mulLocal(scalar).addLocal(clipPoint);
							// cB.set(normal).mulLocal(radiusB).subLocal(clipPoint).negateLocal();
							// points[i].set(cA).addLocal(cB).mulLocal(0.5d);
							var scalar = radiusA - ((clipPoint.x - planePoint.x) * this.normal.x + (clipPoint.y - planePoint.y) * this.normal.y);
							var cAx1 = this.normal.x * scalar + clipPoint.x;
							var cAy1 = this.normal.y * scalar + clipPoint.y;
							var cBx1 = -this.normal.x * radiusB + clipPoint.x;
							var cBy1 = -this.normal.y * radiusB + clipPoint.y;
							this.points[i].x = (cAx1 + cBx1) * 0.5;
							this.points[i].y = (cAy1 + cBy1) * 0.5;
						}
					}
					break;
				}
				case 2: {
					var planePoint2 = this.$pool3;
					$org_jbox2d_common_Rot.mulToOutUnsafe(xfB.q, manifold.localNormal, this.normal);
					$org_jbox2d_common_Transform.mulToOut$1(xfB, manifold.localPoint, planePoint2);
					// Mat22 R = xfB.q;
					// normal.x = R.ex.x * manifold.localNormal.x + R.ey.x * manifold.localNormal.y;
					// normal.y = R.ex.y * manifold.localNormal.x + R.ey.y * manifold.localNormal.y;
					// Vec2 v = manifold.localPoint;
					// planePoint.x = xfB.p.x + xfB.q.ex.x * v.x + xfB.q.ey.x * v.y;
					// planePoint.y = xfB.p.y + xfB.q.ex.y * v.x + xfB.q.ey.y * v.y;
					var clipPoint2 = this.$pool4;
					for (var i1 = 0; i1 < manifold.pointCount; i1++) {
						// b2Vec2 clipPoint = b2Mul(xfA, manifold->points[i].localPoint);
						// b2Vec2 cB = clipPoint + (radiusB - b2Dot(clipPoint - planePoint,
						// normal)) * normal;
						// b2Vec2 cA = clipPoint - radiusA * normal;
						// points[i] = 0.5d * (cA + cB);
						$org_jbox2d_common_Transform.mulToOut$1(xfA, manifold.points[i1].localPoint, clipPoint2);
						// cB.set(clipPoint).subLocal(planePoint);
						// double scalar = radiusB - Vec2.dot(cB, normal);
						// cB.set(normal).mulLocal(scalar).addLocal(clipPoint);
						// cA.set(normal).mulLocal(radiusA).subLocal(clipPoint).negateLocal();
						// points[i].set(cA).addLocal(cB).mulLocal(0.5d);
						// points[i] = 0.5d * (cA + cB);
						//
						// clipPoint.x = xfA.p.x + xfA.q.ex.x * manifold.points[i].localPoint.x + xfA.q.ey.x *
						// manifold.points[i].localPoint.y;
						// clipPoint.y = xfA.p.y + xfA.q.ex.y * manifold.points[i].localPoint.x + xfA.q.ey.y *
						// manifold.points[i].localPoint.y;
						var scalar1 = radiusB - ((clipPoint2.x - planePoint2.x) * this.normal.x + (clipPoint2.y - planePoint2.y) * this.normal.y);
						var cBx2 = this.normal.x * scalar1 + clipPoint2.x;
						var cBy2 = this.normal.y * scalar1 + clipPoint2.y;
						var cAx2 = -this.normal.x * radiusA + clipPoint2.x;
						var cAy2 = -this.normal.y * radiusA + clipPoint2.y;
						this.points[i1].x = (cAx2 + cBx2) * 0.5;
						this.points[i1].y = (cAy2 + cBy2) * 0.5;
					}
					// Ensure normal points from A to B.
					this.normal.x = -this.normal.x;
					this.normal.y = -this.normal.y;
					break;
				}
			}
		}
	});
	ss.initClass($org_jbox2d_collision_broadphase_BroadPhase, {
		treeCallback: function(proxyId) {
			// A proxy cannot form a pair with itself.
			if (proxyId === this.$m_queryProxyId) {
				// log.debug("It was us...");
				return true;
			}
			// Grow the pair buffer as needed.
			if (this.$m_pairCount === this.$m_pairCapacity) {
				var oldBuffer = this.$m_pairBuffer;
				this.$m_pairCapacity *= 2;
				this.$m_pairBuffer = new Array(this.$m_pairCapacity);
				$org_jbox2d_dynamics_ArrayHelper.copy(oldBuffer, 0, this.$m_pairBuffer, 0, oldBuffer.length);
				for (var i = oldBuffer.length; i < this.$m_pairCapacity; i++) {
					this.$m_pairBuffer[i] = new $org_jbox2d_collision_broadphase_Pair();
				}
			}
			if (proxyId < this.$m_queryProxyId) {
				// log.debug("new proxy is first");
				this.$m_pairBuffer[this.$m_pairCount].proxyIdA = proxyId;
				this.$m_pairBuffer[this.$m_pairCount].proxyIdB = this.$m_queryProxyId;
			}
			else {
				// log.debug("new proxy is second");
				this.$m_pairBuffer[this.$m_pairCount].proxyIdA = this.$m_queryProxyId;
				this.$m_pairBuffer[this.$m_pairCount].proxyIdB = proxyId;
			}
			++this.$m_pairCount;
			return true;
		},
		createProxy: function(aabb, userData) {
			var proxyId = this.$m_tree.createProxy(aabb, userData);
			++this.$m_proxyCount;
			this.bufferMove(proxyId);
			return proxyId;
		},
		destroyProxy: function(proxyId) {
			this.unbufferMove(proxyId);
			--this.$m_proxyCount;
			this.$m_tree.destroyProxy(proxyId);
		},
		moveProxy: function(proxyId, aabb, displacement) {
			var buffer = this.$m_tree.moveProxy(proxyId, aabb, displacement);
			if (buffer) {
				this.bufferMove(proxyId);
			}
		},
		touchProxy: function(proxyId) {
			this.bufferMove(proxyId);
		},
		getUserData: function(proxyId) {
			return this.$m_tree.getUserData(proxyId);
		},
		getFatAABB: function(proxyId) {
			return this.$m_tree.getFatAABB(proxyId);
		},
		testOverlap: function(proxyIdA, proxyIdB) {
			// return AABB.testOverlap(proxyA.aabb, proxyB.aabb);
			var a = this.$m_tree.getFatAABB(proxyIdA);
			var b = this.$m_tree.getFatAABB(proxyIdB);
			if (b.lowerBound.x - a.upperBound.x > 0 || b.lowerBound.y - a.upperBound.y > 0) {
				return false;
			}
			if (a.lowerBound.x - b.upperBound.x > 0 || a.lowerBound.y - b.upperBound.y > 0) {
				return false;
			}
			return true;
		},
		getProxyCount: function() {
			return this.$m_proxyCount;
		},
		drawTree: function(argDraw) {
			this.$m_tree.drawTree(argDraw);
		},
		updatePairs: function(callback) {
			// log.debug("beginning to update pairs");
			// Reset pair buffer
			this.$m_pairCount = 0;
			// Perform tree queries for all moving proxies.
			for (var i = 0; i < this.$m_moveCount; ++i) {
				this.$m_queryProxyId = this.$m_moveBuffer[i];
				if (this.$m_queryProxyId === $org_jbox2d_collision_broadphase_BroadPhase.nulL_PROXY) {
					continue;
				}
				// We have to query the tree with the fat AABB so that
				// we don't fail to create a pair that may touch later.
				var fatAABB = this.$m_tree.getFatAABB(this.$m_queryProxyId);
				// Query tree, create pairs and add them pair buffer.
				// log.debug("quering aabb: "+m_queryProxy.aabb);
				this.$m_tree.query(this, fatAABB);
			}
			// log.debug("Number of pairs found: "+m_pairCount);
			// Reset move buffer
			this.$m_moveCount = 0;
			// Sort the pair buffer to expose duplicates.
			$org_jbox2d_dynamics_ArrayHelper.sort(this.$m_pairBuffer, 0, this.$m_pairCount);
			// Send the pairs back to the client.
			var index0 = 0;
			while (index0 < this.$m_pairCount) {
				var primaryPair = this.$m_pairBuffer[index0];
				var userDataA = this.$m_tree.getUserData(primaryPair.proxyIdA);
				var userDataB = this.$m_tree.getUserData(primaryPair.proxyIdB);
				// log.debug("returning pair: "+userDataA+", "+userDataB);
				callback.addPair(userDataA, userDataB);
				++index0;
				// Skip any duplicate pairs.
				while (index0 < this.$m_pairCount) {
					var pair = this.$m_pairBuffer[index0];
					if (pair.proxyIdA !== primaryPair.proxyIdA || pair.proxyIdB !== primaryPair.proxyIdB) {
						break;
					}
					// log.debug("skipping duplicate");
					++index0;
				}
			}
			// Try to keep the tree balanced.
			// m_tree.rebalance(Settings.TREE_REBALANCE_STEPS);
		},
		query: function(callback, aabb) {
			this.$m_tree.query(callback, aabb);
		},
		raycast: function(callback, input) {
			this.$m_tree.raycast(callback, input);
		},
		getTreeHeight: function() {
			return this.$m_tree.computeHeight();
		},
		getTreeBalance: function() {
			return this.$m_tree.getMaxBalance();
		},
		getTreeQuality: function() {
			return this.$m_tree.getAreaRatio();
		},
		bufferMove: function(proxyId) {
			if (this.$m_moveCount === this.$m_moveCapacity) {
				var old = this.$m_moveBuffer;
				this.$m_moveCapacity *= 2;
				this.$m_moveBuffer = new Array(this.$m_moveCapacity);
				$org_jbox2d_dynamics_ArrayHelper.copy(old, 0, this.$m_moveBuffer, 0, old.length);
			}
			this.$m_moveBuffer[this.$m_moveCount] = proxyId;
			++this.$m_moveCount;
		},
		unbufferMove: function(proxyId) {
			for (var i = 0; i < this.$m_moveCount; i++) {
				if (this.$m_moveBuffer[i] === proxyId) {
					this.$m_moveBuffer[i] = $org_jbox2d_collision_broadphase_BroadPhase.nulL_PROXY;
				}
			}
		}
	}, null, [$org_jbox2d_callbacks_TreeCallback]);
	ss.initInterface($org_jbox2d_collision_broadphase_BroadPhaseStrategy, { createProxy: null, destroyProxy: null, moveProxy: null, getUserData: null, getFatAABB: null, query: null, raycast: null, computeHeight: null, getHeight: null, getMaxBalance: null, getAreaRatio: null, getInsertionCount: null, drawTree: null });
	ss.initClass($org_jbox2d_collision_broadphase_DynamicTree, {
		createProxy: function(aabb, userData) {
			var node = this.$allocateNode();
			var proxyId = node.id;
			// Fatten the aabb
			var nodeAABB = node.aabb;
			nodeAABB.lowerBound.x = aabb.lowerBound.x - $org_jbox2d_common_Settings.aabbExtension;
			nodeAABB.lowerBound.y = aabb.lowerBound.y - $org_jbox2d_common_Settings.aabbExtension;
			nodeAABB.upperBound.x = aabb.upperBound.x + $org_jbox2d_common_Settings.aabbExtension;
			nodeAABB.upperBound.y = aabb.upperBound.y + $org_jbox2d_common_Settings.aabbExtension;
			node.userData = userData;
			this.$insertLeaf(proxyId);
			return proxyId;
		},
		destroyProxy: function(proxyId) {
			var node = this.$m_nodes[proxyId];
			this.$removeLeaf(node);
			this.$freeNode(node);
		},
		moveProxy: function(proxyId, aabb, displacement) {
			var node = this.$m_nodes[proxyId];
			var nodeAABB = node.aabb;
			// if (nodeAABB.contains(aabb)) {
			if (nodeAABB.lowerBound.x > aabb.lowerBound.x && nodeAABB.lowerBound.y > aabb.lowerBound.y && aabb.upperBound.x > nodeAABB.upperBound.x && aabb.upperBound.y > nodeAABB.upperBound.y) {
				return false;
			}
			this.$removeLeaf(node);
			// Extend AABB
			var lowerBound = nodeAABB.lowerBound;
			var upperBound = nodeAABB.upperBound;
			lowerBound.x = aabb.lowerBound.x - $org_jbox2d_common_Settings.aabbExtension;
			lowerBound.y = aabb.lowerBound.y - $org_jbox2d_common_Settings.aabbExtension;
			upperBound.x = aabb.upperBound.x + $org_jbox2d_common_Settings.aabbExtension;
			upperBound.y = aabb.upperBound.y + $org_jbox2d_common_Settings.aabbExtension;
			// Predict AABB displacement.
			var dx = displacement.x * $org_jbox2d_common_Settings.aabbMultiplier;
			var dy = displacement.y * $org_jbox2d_common_Settings.aabbMultiplier;
			if (dx < 0) {
				lowerBound.x += dx;
			}
			else {
				upperBound.x += dx;
			}
			if (dy < 0) {
				lowerBound.y += dy;
			}
			else {
				upperBound.y += dy;
			}
			this.$insertLeaf(proxyId);
			return true;
		},
		getUserData: function(proxyId) {
			return this.$m_nodes[proxyId].userData;
		},
		getFatAABB: function(proxyId) {
			return this.$m_nodes[proxyId].aabb;
		},
		query: function(callback, aabb) {
			this.$nodeStack.reset();
			this.$nodeStack.push(this.$m_root);
			while (this.$nodeStack.getCount() > 0) {
				var node = this.$nodeStack.pop();
				if (ss.isNullOrUndefined(node)) {
					continue;
				}
				if ($org_jbox2d_collision_AABB.testOverlap(node.aabb, aabb)) {
					if (ss.isNullOrUndefined(node.child1)) {
						var proceed = callback.treeCallback(node.id);
						if (!proceed) {
							return;
						}
					}
					else {
						this.$nodeStack.push(node.child1);
						this.$nodeStack.push(node.child2);
					}
				}
			}
		},
		raycast: function(callback, input) {
			var p1 = input.p1;
			var p2 = input.p2;
			var p1x = p1.x, p2x = p2.x, p1y = p1.y, p2y = p2.y;
			var vx, vy;
			var rx, ry;
			var absVx, absVy;
			var cx, cy;
			var hx, hy;
			var tempx, tempy;
			this.$r.x = p2x - p1x;
			this.$r.y = p2y - p1y;
			this.$r.normalize();
			rx = this.$r.x;
			ry = this.$r.y;
			// v is perpendicular to the segment.
			vx = -1 * ry;
			vy = 1 * rx;
			absVx = $org_jbox2d_common_MathUtils.abs(vx);
			absVy = $org_jbox2d_common_MathUtils.abs(vy);
			// Separating axis for segment (Gino, p80).
			// |dot(v, p1 - c)| > dot(|v|, h)
			var maxFraction = input.maxFraction;
			// Build a bounding box for the segment.
			var segAABB = this.$aabb;
			// Vec2 t = p1 + maxFraction * (p2 - p1);
			// before inline
			// temp.set(p2).subLocal(p1).mulLocal(maxFraction).addLocal(p1);
			// Vec2.minToOut(p1, temp, segAABB.lowerBound);
			// Vec2.maxToOut(p1, temp, segAABB.upperBound);
			tempx = (p2x - p1x) * maxFraction + p1x;
			tempy = (p2y - p1y) * maxFraction + p1y;
			segAABB.lowerBound.x = ((p1x < tempx) ? p1x : tempx);
			segAABB.lowerBound.y = ((p1y < tempy) ? p1y : tempy);
			segAABB.upperBound.x = ((p1x > tempx) ? p1x : tempx);
			segAABB.upperBound.y = ((p1y > tempy) ? p1y : tempy);
			// end inline
			this.$nodeStack.reset();
			this.$nodeStack.push(this.$m_root);
			while (this.$nodeStack.getCount() > 0) {
				var node = this.$nodeStack.pop();
				if (ss.isNullOrUndefined(node)) {
					continue;
				}
				var nodeAABB = node.aabb;
				if (!$org_jbox2d_collision_AABB.testOverlap(nodeAABB, segAABB)) {
					continue;
				}
				// Separating axis for segment (Gino, p80).
				// |dot(v, p1 - c)| > dot(|v|, h)
				// node.aabb.getCenterToOut(c);
				// node.aabb.getExtentsToOut(h);
				cx = (nodeAABB.lowerBound.x + nodeAABB.upperBound.x) * 0.5;
				cy = (nodeAABB.lowerBound.y + nodeAABB.upperBound.y) * 0.5;
				hx = (nodeAABB.upperBound.x - nodeAABB.lowerBound.x) * 0.5;
				hy = (nodeAABB.upperBound.y - nodeAABB.lowerBound.y) * 0.5;
				tempx = p1x - cx;
				tempy = p1y - cy;
				var separation = $org_jbox2d_common_MathUtils.abs(vx * tempx + vy * tempy) - (absVx * hx + absVy * hy);
				if (separation > 0) {
					continue;
				}
				if (node.isLeaf()) {
					this.$subInput.p1.x = p1x;
					this.$subInput.p1.y = p1y;
					this.$subInput.p2.x = p2x;
					this.$subInput.p2.y = p2y;
					this.$subInput.maxFraction = maxFraction;
					var value = callback.raycastCallback(this.$subInput, node.id);
					if (value === 0) {
						// The client has terminated the ray cast.
						return;
					}
					if (value > 0) {
						// Update segment bounding box.
						maxFraction = value;
						// temp.set(p2).subLocal(p1).mulLocal(maxFraction).addLocal(p1);
						// Vec2.minToOut(p1, temp, segAABB.lowerBound);
						// Vec2.maxToOut(p1, temp, segAABB.upperBound);
						tempx = (p2x - p1x) * maxFraction + p1x;
						tempy = (p2y - p1y) * maxFraction + p1y;
						segAABB.lowerBound.x = ((p1x < tempx) ? p1x : tempx);
						segAABB.lowerBound.y = ((p1y < tempy) ? p1y : tempy);
						segAABB.upperBound.x = ((p1x > tempx) ? p1x : tempx);
						segAABB.upperBound.y = ((p1y > tempy) ? p1y : tempy);
					}
				}
				else {
					this.$nodeStack.push(node.child1);
					this.$nodeStack.push(node.child2);
				}
			}
		},
		computeHeight: function() {
			return this.$computeHeight(this.$m_root);
		},
		getHeight: function() {
			if (ss.isNullOrUndefined(this.$m_root)) {
				return 0;
			}
			return this.$m_root.height;
		},
		getMaxBalance: function() {
			var maxBalance = 0;
			for (var i = 0; i < this.$m_nodeCapacity; ++i) {
				var node = this.$m_nodes[i];
				if (node.height <= 1) {
					continue;
				}
				var child1 = node.child1;
				var child2 = node.child2;
				var balance = $org_jbox2d_common_MathUtils.abs$1(child2.height - child1.height);
				maxBalance = $org_jbox2d_common_MathUtils.max$1(maxBalance, balance);
			}
			return maxBalance;
		},
		getAreaRatio: function() {
			if (ss.isNullOrUndefined(this.$m_root)) {
				return 0;
			}
			var root = this.$m_root;
			var rootArea = root.aabb.getPerimeter();
			var totalArea = 0;
			for (var i = 0; i < this.$m_nodeCapacity; ++i) {
				var node = this.$m_nodes[i];
				if (node.height < 0) {
					// Free node in pool
					continue;
				}
				totalArea += node.aabb.getPerimeter();
			}
			return totalArea / rootArea;
		},
		getInsertionCount: function() {
			return this.$m_insertionCount;
		},
		drawTree: function(argDraw) {
			if (ss.isNullOrUndefined(this.$m_root)) {
				return;
			}
			var height = this.computeHeight();
			this.drawTree$1(argDraw, this.$m_root, 0, height);
		},
		$computeHeight: function(node) {
			if (node.isLeaf()) {
				return 0;
			}
			var height1 = this.$computeHeight(node.child1);
			var height2 = this.$computeHeight(node.child2);
			return 1 + $org_jbox2d_common_MathUtils.max$1(height1, height2);
		},
		validate: function() {
			this.$validateStructure(this.$m_root);
			this.$validateMetrics(this.$m_root);
			var freeCount = 0;
			var freeNode = ((this.$m_freeList !== $org_jbox2d_collision_broadphase_DynamicTree.nulL_NODE) ? this.$m_nodes[this.$m_freeList] : null);
			while (ss.isValue(freeNode)) {
				freeNode = freeNode.parent;
				++freeCount;
			}
		},
		rebuildBottomUp: function() {
			var nodes = new Array(this.$m_nodeCount);
			var count = 0;
			// Build array of leaves. Free the rest.
			for (var i = 0; i < this.$m_nodeCapacity; ++i) {
				if (this.$m_nodes[i].height < 0) {
					// free node in pool
					continue;
				}
				var node = this.$m_nodes[i];
				if (node.isLeaf()) {
					node.parent = null;
					nodes[count] = i;
					++count;
				}
				else {
					this.$freeNode(node);
				}
			}
			var b = new $org_jbox2d_collision_AABB();
			while (count > 1) {
				var minCost = Number.MAX_VALUE;
				var iMin = -1, jMin = -1;
				for (var i1 = 0; i1 < count; ++i1) {
					var aabbi = this.$m_nodes[nodes[i1]].aabb;
					for (var j = i1 + 1; j < count; ++j) {
						var aabbj = this.$m_nodes[nodes[j]].aabb;
						b.combine$1(aabbi, aabbj);
						var cost = b.getPerimeter();
						if (cost < minCost) {
							iMin = i1;
							jMin = j;
							minCost = cost;
						}
					}
				}
				var index1 = nodes[iMin];
				var index2 = nodes[jMin];
				var child1 = this.$m_nodes[index1];
				var child2 = this.$m_nodes[index2];
				var parent = this.$allocateNode();
				parent.child1 = child1;
				parent.child2 = child2;
				parent.height = 1 + $org_jbox2d_common_MathUtils.max$1(child1.height, child2.height);
				parent.aabb.combine$1(child1.aabb, child2.aabb);
				parent.parent = null;
				child1.parent = parent;
				child2.parent = parent;
				nodes[jMin] = nodes[count - 1];
				nodes[iMin] = parent.id;
				--count;
			}
			this.$m_root = this.$m_nodes[nodes[0]];
			this.validate();
		},
		$allocateNode: function() {
			if (this.$m_freeList === $org_jbox2d_collision_broadphase_DynamicTree.nulL_NODE) {
				var old = this.$m_nodes;
				this.$m_nodeCapacity *= 2;
				this.$m_nodes = new Array(this.$m_nodeCapacity);
				$org_jbox2d_dynamics_ArrayHelper.copy(old, 0, this.$m_nodes, 0, old.length);
				// Build a linked list for the free list.
				for (var i = this.$m_nodeCapacity - 1; i >= this.$m_nodeCount; i--) {
					this.$m_nodes[i] = new $org_jbox2d_collision_broadphase_DynamicTreeNode(i);
					this.$m_nodes[i].parent = ((i === this.$m_nodeCapacity - 1) ? null : this.$m_nodes[i + 1]);
					this.$m_nodes[i].height = -1;
				}
				this.$m_freeList = this.$m_nodeCount;
			}
			var nodeId = this.$m_freeList;
			var treeNode = this.$m_nodes[nodeId];
			this.$m_freeList = (ss.isValue(treeNode.parent) ? treeNode.parent.id : $org_jbox2d_collision_broadphase_DynamicTree.nulL_NODE);
			treeNode.parent = null;
			treeNode.child1 = null;
			treeNode.child2 = null;
			treeNode.height = 0;
			treeNode.userData = null;
			++this.$m_nodeCount;
			return treeNode;
		},
		$freeNode: function(node) {
			node.parent = ((this.$m_freeList !== $org_jbox2d_collision_broadphase_DynamicTree.nulL_NODE) ? this.$m_nodes[this.$m_freeList] : null);
			node.height = -1;
			this.$m_freeList = node.id;
			this.$m_nodeCount--;
		},
		$insertLeaf: function(leaf_index) {
			this.$m_insertionCount++;
			var leaf = this.$m_nodes[leaf_index];
			if (ss.isNullOrUndefined(this.$m_root)) {
				this.$m_root = leaf;
				this.$m_root.parent = null;
				return;
			}
			// find the best sibling
			var leafAABB = leaf.aabb;
			var index = this.$m_root;
			while (ss.isValue(index.child1)) {
				var node = index;
				var child1 = node.child1;
				var child2 = node.child2;
				var area = node.aabb.getPerimeter();
				this.$combinedAABB.combine$1(node.aabb, leafAABB);
				var combinedArea = this.$combinedAABB.getPerimeter();
				// Cost of creating a new parent for this node and the new leaf
				var cost = 2 * combinedArea;
				// Minimum cost of pushing the leaf further down the tree
				var inheritanceCost = 2 * (combinedArea - area);
				// Cost of descending into child1
				var cost1;
				if (child1.isLeaf()) {
					this.$combinedAABB.combine$1(leafAABB, child1.aabb);
					cost1 = this.$combinedAABB.getPerimeter() + inheritanceCost;
				}
				else {
					this.$combinedAABB.combine$1(leafAABB, child1.aabb);
					var oldArea = child1.aabb.getPerimeter();
					var newArea = this.$combinedAABB.getPerimeter();
					cost1 = newArea - oldArea + inheritanceCost;
				}
				// Cost of descending into child2
				var cost2;
				if (child2.isLeaf()) {
					this.$combinedAABB.combine$1(leafAABB, child2.aabb);
					cost2 = this.$combinedAABB.getPerimeter() + inheritanceCost;
				}
				else {
					this.$combinedAABB.combine$1(leafAABB, child2.aabb);
					var oldArea1 = child2.aabb.getPerimeter();
					var newArea1 = this.$combinedAABB.getPerimeter();
					cost2 = newArea1 - oldArea1 + inheritanceCost;
				}
				// Descend according to the minimum cost.
				if (cost < cost1 && cost < cost2) {
					break;
				}
				// Descend
				if (cost1 < cost2) {
					index = child1;
				}
				else {
					index = child2;
				}
			}
			var sibling = index;
			var oldParent = this.$m_nodes[sibling.id].parent;
			var newParent = this.$allocateNode();
			newParent.parent = oldParent;
			newParent.userData = null;
			newParent.aabb.combine$1(leafAABB, sibling.aabb);
			newParent.height = sibling.height + 1;
			if (ss.isValue(oldParent)) {
				// The sibling was not the root.
				if (ss.referenceEquals(oldParent.child1, sibling)) {
					oldParent.child1 = newParent;
				}
				else {
					oldParent.child2 = newParent;
				}
				newParent.child1 = sibling;
				newParent.child2 = leaf;
				sibling.parent = newParent;
				leaf.parent = newParent;
			}
			else {
				// The sibling was the root.
				newParent.child1 = sibling;
				newParent.child2 = leaf;
				sibling.parent = newParent;
				leaf.parent = newParent;
				this.$m_root = newParent;
			}
			// Walk back up the tree fixing heights and AABBs
			index = leaf.parent;
			while (ss.isValue(index)) {
				index = this.$balance(index);
				var child11 = index.child1;
				var child21 = index.child2;
				index.height = 1 + $org_jbox2d_common_MathUtils.max$1(child11.height, child21.height);
				index.aabb.combine$1(child11.aabb, child21.aabb);
				index = index.parent;
			}
			// validate();
		},
		$removeLeaf: function(leaf) {
			if (ss.referenceEquals(leaf, this.$m_root)) {
				this.$m_root = null;
				return;
			}
			var parent = leaf.parent;
			var grandParent = parent.parent;
			var sibling;
			if (ss.referenceEquals(parent.child1, leaf)) {
				sibling = parent.child2;
			}
			else {
				sibling = parent.child1;
			}
			if (ss.isValue(grandParent)) {
				// Destroy parent and connect sibling to grandParent.
				if (ss.referenceEquals(grandParent.child1, parent)) {
					grandParent.child1 = sibling;
				}
				else {
					grandParent.child2 = sibling;
				}
				sibling.parent = grandParent;
				this.$freeNode(parent);
				// Adjust ancestor bounds.
				var index = grandParent;
				while (ss.isValue(index)) {
					index = this.$balance(index);
					var child1 = index.child1;
					var child2 = index.child2;
					index.aabb.combine$1(child1.aabb, child2.aabb);
					index.height = 1 + $org_jbox2d_common_MathUtils.max$1(child1.height, child2.height);
					index = index.parent;
				}
			}
			else {
				this.$m_root = sibling;
				sibling.parent = null;
				this.$freeNode(parent);
			}
			// validate();
		},
		$balance: function(iA) {
			var A = iA;
			if (A.isLeaf() || A.height < 2) {
				return iA;
			}
			var iB = A.child1;
			var iC = A.child2;
			var B = iB;
			var C = iC;
			var balance = C.height - B.height;
			// Rotate C up
			if (balance > 1) {
				var iF = C.child1;
				var iG = C.child2;
				var F = iF;
				var G = iG;
				// Swap A and C
				C.child1 = iA;
				C.parent = A.parent;
				A.parent = iC;
				// A's old parent should point to C
				if (ss.isValue(C.parent)) {
					if (ss.referenceEquals(C.parent.child1, iA)) {
						C.parent.child1 = iC;
					}
					else {
						C.parent.child2 = iC;
					}
				}
				else {
					this.$m_root = iC;
				}
				// Rotate
				if (F.height > G.height) {
					C.child2 = iF;
					A.child2 = iG;
					G.parent = iA;
					A.aabb.combine$1(B.aabb, G.aabb);
					C.aabb.combine$1(A.aabb, F.aabb);
					A.height = 1 + $org_jbox2d_common_MathUtils.max$1(B.height, G.height);
					C.height = 1 + $org_jbox2d_common_MathUtils.max$1(A.height, F.height);
				}
				else {
					C.child2 = iG;
					A.child2 = iF;
					F.parent = iA;
					A.aabb.combine$1(B.aabb, F.aabb);
					C.aabb.combine$1(A.aabb, G.aabb);
					A.height = 1 + $org_jbox2d_common_MathUtils.max$1(B.height, F.height);
					C.height = 1 + $org_jbox2d_common_MathUtils.max$1(A.height, G.height);
				}
				return iC;
			}
			// Rotate B up
			if (balance < -1) {
				var iD = B.child1;
				var iE = B.child2;
				var D = iD;
				var E = iE;
				// Swap A and B
				B.child1 = iA;
				B.parent = A.parent;
				A.parent = iB;
				// A's old parent should point to B
				if (ss.isValue(B.parent)) {
					if (ss.referenceEquals(B.parent.child1, iA)) {
						B.parent.child1 = iB;
					}
					else {
						B.parent.child2 = iB;
					}
				}
				else {
					this.$m_root = iB;
				}
				// Rotate
				if (D.height > E.height) {
					B.child2 = iD;
					A.child1 = iE;
					E.parent = iA;
					A.aabb.combine$1(C.aabb, E.aabb);
					B.aabb.combine$1(A.aabb, D.aabb);
					A.height = 1 + $org_jbox2d_common_MathUtils.max$1(C.height, E.height);
					B.height = 1 + $org_jbox2d_common_MathUtils.max$1(A.height, D.height);
				}
				else {
					B.child2 = iE;
					A.child1 = iD;
					D.parent = iA;
					A.aabb.combine$1(C.aabb, D.aabb);
					B.aabb.combine$1(A.aabb, E.aabb);
					A.height = 1 + $org_jbox2d_common_MathUtils.max$1(C.height, D.height);
					B.height = 1 + $org_jbox2d_common_MathUtils.max$1(A.height, E.height);
				}
				return iB;
			}
			return iA;
		},
		$validateStructure: function(node) {
			if (ss.isNullOrUndefined(node)) {
				return;
			}
			if (ss.referenceEquals(node, this.$m_root)) {
			}
			var child1 = node.child1;
			var child2 = node.child2;
			if (node.isLeaf()) {
				return;
			}
			this.$validateStructure(child1);
			this.$validateStructure(child2);
		},
		$validateMetrics: function(node) {
			if (ss.isNullOrUndefined(node)) {
				return;
			}
			var child1 = node.child1;
			var child2 = node.child2;
			if (node.isLeaf()) {
				return;
			}
			var height1 = child1.height;
			var height2 = child2.height;
			var height;
			height = 1 + $org_jbox2d_common_MathUtils.max$1(height1, height2);
			var aabb = new $org_jbox2d_collision_AABB();
			aabb.combine$1(child1.aabb, child2.aabb);
			this.$validateMetrics(child1);
			this.$validateMetrics(child2);
		},
		drawTree$1: function(argDraw, node, spot, height) {
			node.aabb.getVertices(this.$drawVecs);
			this.$color.set$1(1, (height - spot) * 1 / height, (height - spot) * 1 / height);
			argDraw.drawPolygon(this.$drawVecs, 4, this.$color);
			argDraw.getViewportTranform().getWorldToScreen(node.aabb.upperBound, this.$textVec);
			argDraw.drawString$1(this.$textVec.x, this.$textVec.y, node.id + '-' + (spot + 1) + '/' + height, this.$color);
			if (ss.isValue(node.child1)) {
				this.drawTree$1(argDraw, node.child1, spot + 1, height);
			}
			if (ss.isValue(node.child2)) {
				this.drawTree$1(argDraw, node.child2, spot + 1, height);
			}
		}
	}, null, [$org_jbox2d_collision_broadphase_BroadPhaseStrategy]);
	ss.initClass($org_jbox2d_collision_broadphase_DynamicTree$TreeNodeStack, {
		reset: function() {
			this.$position = 0;
		},
		pop: function() {
			return this.$stack[--this.$position];
		},
		push: function(i) {
			if (this.$position === this.$size) {
				var old = this.$stack;
				this.$stack = new Array(this.$size * 2);
				this.$size = this.$stack.length;
				$org_jbox2d_dynamics_ArrayHelper.copy(old, 0, this.$stack, 0, old.length);
			}
			this.$stack[this.$position++] = i;
		},
		getCount: function() {
			return this.$position;
		}
	});
	ss.initClass($org_jbox2d_collision_broadphase_DynamicTreeNode, {
		isLeaf: function() {
			return ss.isNullOrUndefined(this.child1);
		},
		getUserData: function() {
			return this.userData;
		},
		setUserData: function(argData) {
			this.userData = argData;
		}
	});
	ss.initClass($org_jbox2d_collision_broadphase_Pair, {
		compareTo: function(pair2) {
			if (this.proxyIdA < pair2.proxyIdA) {
				return -1;
			}
			if (this.proxyIdA === pair2.proxyIdA) {
				return ((this.proxyIdB < pair2.proxyIdB) ? -1 : ((this.proxyIdB === pair2.proxyIdB) ? 0 : 1));
			}
			return 1;
		}
	}, null, [ss.IComparable]);
	ss.initClass($org_jbox2d_collision_shapes_Shape, {
		getType: function() {
			return this.m_type;
		},
		getRadius: function() {
			return this.m_radius;
		},
		setRadius: function(radius) {
			this.m_radius = radius;
		},
		getChildCount: null,
		testPoint: null,
		raycast: null,
		computeAABB: null,
		computeMass: null,
		clone: null
	});
	ss.initClass($org_jbox2d_collision_shapes_ChainShape, {
		getChildCount: function() {
			return this.m_count - 1;
		},
		getChildEdge: function(edge, index) {
			edge.m_radius = this.m_radius;
			var v0 = this.m_vertices[index + 0];
			var v1 = this.m_vertices[index + 1];
			edge.m_vertex1.x = v0.x;
			edge.m_vertex1.y = v0.y;
			edge.m_vertex2.x = v1.x;
			edge.m_vertex2.y = v1.y;
			if (index > 0) {
				var v = this.m_vertices[index - 1];
				edge.m_vertex0.x = v.x;
				edge.m_vertex0.y = v.y;
				edge.m_hasVertex0 = true;
			}
			else {
				edge.m_vertex0.x = this.m_prevVertex.x;
				edge.m_vertex0.y = this.m_prevVertex.y;
				edge.m_hasVertex0 = this.m_hasPrevVertex;
			}
			if (index < this.m_count - 2) {
				var v2 = this.m_vertices[index + 2];
				edge.m_vertex3.x = v2.x;
				edge.m_vertex3.y = v2.y;
				edge.m_hasVertex3 = true;
			}
			else {
				edge.m_vertex3.x = this.m_nextVertex.x;
				edge.m_vertex3.y = this.m_nextVertex.y;
				edge.m_hasVertex3 = this.m_hasNextVertex;
			}
		},
		testPoint: function(xf, p) {
			return false;
		},
		raycast: function(output, input, xf, childIndex) {
			var edgeShape = this.$pool0;
			var i1 = childIndex;
			var i2 = childIndex + 1;
			if (i2 === this.m_count) {
				i2 = 0;
			}
			var v = this.m_vertices[i1];
			edgeShape.m_vertex1.x = v.x;
			edgeShape.m_vertex1.y = v.y;
			var v1 = this.m_vertices[i2];
			edgeShape.m_vertex2.x = v1.x;
			edgeShape.m_vertex2.y = v1.y;
			return edgeShape.raycast(output, input, xf, 0);
		},
		computeAABB: function(aabb, xf, childIndex) {
			var lower = aabb.lowerBound;
			var upper = aabb.upperBound;
			var i1 = childIndex;
			var i2 = childIndex + 1;
			if (i2 === this.m_count) {
				i2 = 0;
			}
			var vi1 = this.m_vertices[i1];
			var vi2 = this.m_vertices[i2];
			var xfq = xf.q;
			var xfp = xf.p;
			var v1x = xfq.c * vi1.x - xfq.s * vi1.y + xfp.x;
			var v1y = xfq.s * vi1.x + xfq.c * vi1.y + xfp.y;
			var v2x = xfq.c * vi2.x - xfq.s * vi2.y + xfp.x;
			var v2y = xfq.s * vi2.x + xfq.c * vi2.y + xfp.y;
			lower.x = ((v1x < v2x) ? v1x : v2x);
			lower.y = ((v1y < v2y) ? v1y : v2y);
			upper.x = ((v1x > v2x) ? v1x : v2x);
			upper.y = ((v1y > v2y) ? v1y : v2y);
		},
		computeMass: function(massData, density) {
			massData.mass = 0;
			massData.center.setZero();
			massData.i = 0;
		},
		clone: function() {
			var clone = new $org_jbox2d_collision_shapes_ChainShape();
			clone.createChain(this.m_vertices, this.m_count);
			clone.m_prevVertex.set(this.m_prevVertex);
			clone.m_nextVertex.set(this.m_nextVertex);
			clone.m_hasPrevVertex = this.m_hasPrevVertex;
			clone.m_hasNextVertex = this.m_hasNextVertex;
			return clone;
		},
		createLoop: function(vertices, count) {
			this.m_count = count + 1;
			this.m_vertices = new Array(this.m_count);
			for (var i = 1; i < count; i++) {
				var v1 = vertices[i - 1];
				var v2 = vertices[i];
				// If the code crashes here, it means your vertices are too close together.
				if ($org_jbox2d_common_MathUtils.distanceSquared(v1, v2) < $org_jbox2d_common_Settings.linearSlop * $org_jbox2d_common_Settings.linearSlop) {
					throw new ss.Exception('Vertices of chain shape are too close together');
				}
			}
			for (var i1 = 0; i1 < count; i1++) {
				this.m_vertices[i1] = new $org_jbox2d_common_Vec2.$ctor1(vertices[i1]);
			}
			this.m_vertices[count] = new $org_jbox2d_common_Vec2.$ctor1(this.m_vertices[0]);
			this.m_prevVertex.set(this.m_vertices[this.m_count - 2]);
			this.m_nextVertex.set(this.m_vertices[1]);
			this.m_hasPrevVertex = true;
			this.m_hasNextVertex = true;
		},
		createChain: function(vertices, count) {
			this.m_count = count;
			this.m_vertices = new Array(this.m_count);
			for (var i = 1; i < this.m_count; i++) {
				var v1 = vertices[i - 1];
				var v2 = vertices[i];
				// If the code crashes here, it means your vertices are too close together.
				if ($org_jbox2d_common_MathUtils.distanceSquared(v1, v2) < $org_jbox2d_common_Settings.linearSlop * $org_jbox2d_common_Settings.linearSlop) {
					throw new ss.Exception('Vertices of chain shape are too close together');
				}
			}
			for (var i1 = 0; i1 < this.m_count; i1++) {
				this.m_vertices[i1] = new $org_jbox2d_common_Vec2.$ctor1(vertices[i1]);
			}
			this.m_hasPrevVertex = false;
			this.m_hasNextVertex = false;
		},
		setPrevVertex: function(prevVertex) {
			this.m_prevVertex.set(prevVertex);
			this.m_hasPrevVertex = true;
		},
		setNextVertex: function(nextVertex) {
			this.m_nextVertex.set(nextVertex);
			this.m_hasNextVertex = true;
		}
	}, $org_jbox2d_collision_shapes_Shape);
	ss.initClass($org_jbox2d_collision_shapes_CircleShape, {
		clone: function() {
			var shape = new $org_jbox2d_collision_shapes_CircleShape();
			shape.m_p.x = this.m_p.x;
			shape.m_p.y = this.m_p.y;
			shape.m_radius = this.m_radius;
			return shape;
		},
		getChildCount: function() {
			return 1;
		},
		getSupport: function(d) {
			return 0;
		},
		getSupportVertex: function(d) {
			return this.m_p;
		},
		getVertexCount: function() {
			return 1;
		},
		getVertex: function(index) {
			return this.m_p;
		},
		testPoint: function(transform, p) {
			// Rot.mulToOutUnsafe(transform.q, m_p, center);
			// center.addLocal(transform.p);
			//
			// Vec2 d = center.subLocal(p).negateLocal();
			// return Vec2.dot(d, d) <= m_radius * m_radius;
			var q = transform.q;
			var tp = transform.p;
			var centerx = -(q.c * this.m_p.x - q.s * this.m_p.y + tp.x - p.x);
			var centery = -(q.s * this.m_p.x + q.c * this.m_p.y + tp.y - p.y);
			return centerx * centerx + centery * centery <= this.m_radius * this.m_radius;
		},
		raycast: function(output, input, transform, childIndex) {
			var inputp1 = input.p1;
			var inputp2 = input.p2;
			var tq = transform.q;
			var tp = transform.p;
			// Rot.mulToOutUnsafe(transform.q, m_p, position);
			// position.addLocal(transform.p);
			var positionx = tq.c * this.m_p.x - tq.s * this.m_p.y + tp.x;
			var positiony = tq.s * this.m_p.x + tq.c * this.m_p.y + tp.y;
			var sx = inputp1.x - positionx;
			var sy = inputp1.y - positiony;
			// double b = Vec2.dot(s, s) - m_radius * m_radius;
			var b = sx * sx + sy * sy - this.m_radius * this.m_radius;
			// Solve quadratic equation.
			var rx = inputp2.x - inputp1.x;
			var ry = inputp2.y - inputp1.y;
			// double c = Vec2.dot(s, r);
			// double rr = Vec2.dot(r, r);
			var c = sx * rx + sy * ry;
			var rr = rx * rx + ry * ry;
			var sigma = c * c - rr * b;
			// Check for negative discriminant and short segment.
			if (sigma < 0 || rr < $org_jbox2d_common_Settings.EPSILON) {
				return false;
			}
			// Find the point of intersection of the line with the circle.
			var a = -(c + $org_jbox2d_common_MathUtils.sqrt(sigma));
			// Is the intersection point on the segment?
			if (0 <= a && a <= input.maxFraction * rr) {
				a /= rr;
				output.fraction = a;
				output.normal.x = rx * a + sx;
				output.normal.y = ry * a + sy;
				output.normal.normalize();
				return true;
			}
			return false;
		},
		computeAABB: function(aabb, transform, childIndex) {
			var tq = transform.q;
			var tp = transform.p;
			var px = tq.c * this.m_p.x - tq.s * this.m_p.y + tp.x;
			var py = tq.s * this.m_p.x + tq.c * this.m_p.y + tp.y;
			aabb.lowerBound.x = px - this.m_radius;
			aabb.lowerBound.y = py - this.m_radius;
			aabb.upperBound.x = px + this.m_radius;
			aabb.upperBound.y = py + this.m_radius;
		},
		computeMass: function(massData, density) {
			massData.mass = density * $org_jbox2d_common_Settings.PI * this.m_radius * this.m_radius;
			massData.center.x = this.m_p.x;
			massData.center.y = this.m_p.y;
			// inertia about the local origin
			// massData.I = massData.mass * (0.5d * m_radius * m_radius + Vec2.dot(m_p, m_p));
			massData.i = massData.mass * (0.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
		}
	}, $org_jbox2d_collision_shapes_Shape);
	ss.initClass($org_jbox2d_collision_shapes_EdgeShape, {
		getChildCount: function() {
			return 1;
		},
		set: function(v1, v2) {
			this.m_vertex1.set(v1);
			this.m_vertex2.set(v2);
			this.m_hasVertex0 = this.m_hasVertex3 = false;
		},
		testPoint: function(xf, p) {
			return false;
		},
		raycast: function(output, input, xf, childIndex) {
			var tempx, tempy;
			var v1 = this.m_vertex1;
			var v2 = this.m_vertex2;
			var xfq = xf.q;
			var xfp = xf.p;
			// Put the ray into the edge's frame of reference.
			//b2Vec2 p1 = b2MulT(xf.q, input.p1 - xf.p);
			//b2Vec2 p2 = b2MulT(xf.q, input.p2 - xf.p);
			tempx = input.p1.x - xfp.x;
			tempy = input.p1.y - xfp.y;
			var p1x = xfq.c * tempx + xfq.s * tempy;
			var p1y = -xfq.s * tempx + xfq.c * tempy;
			tempx = input.p2.x - xfp.x;
			tempy = input.p2.y - xfp.y;
			var p2x = xfq.c * tempx + xfq.s * tempy;
			var p2y = -xfq.s * tempx + xfq.c * tempy;
			var dx = p2x - p1x;
			var dy = p2y - p1y;
			// Vec2 normal = pool2.set(v2).subLocal(v1);
			// normal.set(normal.y, -normal.x);
			this.$normal.x = v2.y - v1.y;
			this.$normal.y = v1.x - v2.x;
			this.$normal.normalize();
			var normalx = this.$normal.x;
			var normaly = this.$normal.y;
			// q = p1 + t * d
			// dot(normal, q - v1) = 0
			// dot(normal, p1 - v1) + t * dot(normal, d) = 0
			tempx = v1.x - p1x;
			tempy = v1.y - p1y;
			var numerator = normalx * tempx + normaly * tempy;
			var denominator = normalx * dx + normaly * dy;
			if (denominator === 0) {
				return false;
			}
			var t = numerator / denominator;
			if (t < 0 || 1 < t) {
				return false;
			}
			// Vec2 q = p1 + t * d;
			var qx = p1x + t * dx;
			var qy = p1y + t * dy;
			// q = v1 + s * r
			// s = dot(q - v1, r) / dot(r, r)
			// Vec2 r = v2 - v1;
			var rx = v2.x - v1.x;
			var ry = v2.y - v1.y;
			var rr = rx * rx + ry * ry;
			if (rr === 0) {
				return false;
			}
			tempx = qx - v1.x;
			tempy = qy - v1.y;
			// double s = Vec2.dot(pool5, r) / rr;
			var s = (tempx * rx + tempy * ry) / rr;
			if (s < 0 || 1 < s) {
				return false;
			}
			output.fraction = t;
			if (numerator > 0) {
				// argOutput.normal = -normal;
				output.normal.x = -normalx;
				output.normal.y = -normaly;
			}
			else {
				// output.normal = normal;
				output.normal.x = normalx;
				output.normal.y = normaly;
			}
			return true;
		},
		computeAABB: function(aabb, xf, childIndex) {
			var lowerBound = aabb.lowerBound;
			var upperBound = aabb.upperBound;
			var xfq = xf.q;
			var v1x = xfq.c * this.m_vertex1.x - xfq.s * this.m_vertex1.y + xf.p.x;
			var v1y = xfq.s * this.m_vertex1.x + xfq.c * this.m_vertex1.y + xf.p.y;
			var v2x = xfq.c * this.m_vertex2.x - xfq.s * this.m_vertex2.y + xf.p.x;
			var v2y = xfq.s * this.m_vertex2.x + xfq.c * this.m_vertex2.y + xf.p.y;
			lowerBound.x = ((v1x < v2x) ? v1x : v2x);
			lowerBound.y = ((v1y < v2y) ? v1y : v2y);
			upperBound.x = ((v1x > v2x) ? v1x : v2x);
			upperBound.y = ((v1y > v2y) ? v1y : v2y);
			lowerBound.x -= this.m_radius;
			lowerBound.y -= this.m_radius;
			upperBound.x += this.m_radius;
			upperBound.y += this.m_radius;
		},
		computeMass: function(massData, density) {
			massData.mass = 0;
			massData.center.set(this.m_vertex1).addLocal(this.m_vertex2).mulLocal(0.5);
			massData.i = 0;
		},
		clone: function() {
			var edge = new $org_jbox2d_collision_shapes_EdgeShape();
			edge.m_radius = this.m_radius;
			edge.m_hasVertex0 = this.m_hasVertex0;
			edge.m_hasVertex3 = this.m_hasVertex3;
			edge.m_vertex0.set(this.m_vertex0);
			edge.m_vertex1.set(this.m_vertex1);
			edge.m_vertex2.set(this.m_vertex2);
			edge.m_vertex3.set(this.m_vertex3);
			return edge;
		}
	}, $org_jbox2d_collision_shapes_Shape);
	ss.initClass($org_jbox2d_collision_shapes_MassData, {
		set: function(md) {
			this.mass = md.mass;
			this.i = md.i;
			this.center.set(md.center);
		},
		clone: function() {
			return new $org_jbox2d_collision_shapes_MassData.$ctor1(this);
		}
	});
	$org_jbox2d_collision_shapes_MassData.$ctor1.prototype = $org_jbox2d_collision_shapes_MassData.prototype;
	ss.initClass($org_jbox2d_collision_shapes_PolygonShape, {
		clone: function() {
			var shape = new $org_jbox2d_collision_shapes_PolygonShape();
			shape.m_centroid.set(this.m_centroid);
			for (var i = 0; i < shape.m_normals.length; i++) {
				shape.m_normals[i].set(this.m_normals[i]);
				shape.m_vertices[i].set(this.m_vertices[i]);
			}
			shape.setRadius(this.getRadius());
			shape.m_count = this.m_count;
			return shape;
		},
		set: function(vertices, count) {
			this.set$1(vertices, count, null, null);
		},
		set$1: function(verts, num, vecPool, intPool) {
			if (num < 3) {
				this.setAsBox(1, 1);
				return;
			}
			var n = $org_jbox2d_common_MathUtils.min$1(num, $org_jbox2d_common_Settings.maxPolygonVertices);
			// Copy the vertices into a local buffer
			var ps = (ss.isValue(vecPool) ? vecPool.get(n) : new Array(n));
			for (var i = 0; i < n; ++i) {
				ps[i] = verts[i];
			}
			// Create the convex hull using the Gift wrapping algorithm
			// http://en.wikipedia.org/wiki/Gift_wrapping_algorithm
			// Find the right most point on the hull
			var i0 = 0;
			var x0 = ps[0].x;
			for (var i1 = 1; i1 < num; ++i1) {
				var x = ps[i1].x;
				if (x > x0 || x === x0 && ps[i1].y < ps[i0].y) {
					i0 = i1;
					x0 = x;
				}
			}
			var hull = (ss.isValue(intPool) ? intPool.get($org_jbox2d_common_Settings.maxPolygonVertices) : new Array($org_jbox2d_common_Settings.maxPolygonVertices));
			var m = 0;
			var ih = i0;
			while (true) {
				hull[m] = ih;
				var ie = 0;
				for (var j = 1; j < n; ++j) {
					if (ie === ih) {
						ie = j;
						continue;
					}
					var r = this.$pool1.set(ps[ie]).subLocal(ps[hull[m]]);
					var v = this.$pool2.set(ps[j]).subLocal(ps[hull[m]]);
					var c = $org_jbox2d_common_Vec2.cross$2(r, v);
					if (c < 0) {
						ie = j;
					}
					// Collinearity check
					if (c === 0 && v.lengthSquared() > r.lengthSquared()) {
						ie = j;
					}
				}
				++m;
				ih = ie;
				if (ie === i0) {
					break;
				}
			}
			this.m_count = m;
			// Copy vertices.
			for (var i2 = 0; i2 < this.m_count; ++i2) {
				if (ss.isNullOrUndefined(this.m_vertices[i2])) {
					this.m_vertices[i2] = new $org_jbox2d_common_Vec2();
				}
				this.m_vertices[i2].set(ps[hull[i2]]);
			}
			var edge = this.$pool1;
			// Compute normals. Ensure the edges have non-zero length.
			for (var i3 = 0; i3 < this.m_count; ++i3) {
				var i11 = i3;
				var i21 = ((i3 + 1 < this.m_count) ? (i3 + 1) : 0);
				edge.set(this.m_vertices[i21]).subLocal(this.m_vertices[i11]);
				$org_jbox2d_common_Vec2.crossToOutUnsafe$1(edge, 1, this.m_normals[i3]);
				this.m_normals[i3].normalize();
			}
			// Compute the polygon centroid.
			this.computeCentroidToOut(this.m_vertices, this.m_count, this.m_centroid);
		},
		setAsBox: function(hx, hy) {
			this.m_count = 4;
			this.m_vertices[0].set$1(-hx, -hy);
			this.m_vertices[1].set$1(hx, -hy);
			this.m_vertices[2].set$1(hx, hy);
			this.m_vertices[3].set$1(-hx, hy);
			this.m_normals[0].set$1(0, -1);
			this.m_normals[1].set$1(1, 0);
			this.m_normals[2].set$1(0, 1);
			this.m_normals[3].set$1(-1, 0);
			this.m_centroid.setZero();
		},
		setAsBox$1: function(hx, hy, center, angle) {
			this.m_count = 4;
			this.m_vertices[0].set$1(-hx, -hy);
			this.m_vertices[1].set$1(hx, -hy);
			this.m_vertices[2].set$1(hx, hy);
			this.m_vertices[3].set$1(-hx, hy);
			this.m_normals[0].set$1(0, -1);
			this.m_normals[1].set$1(1, 0);
			this.m_normals[2].set$1(0, 1);
			this.m_normals[3].set$1(-1, 0);
			this.m_centroid.set(center);
			var xf = this.$poolt1;
			xf.p.set(center);
			xf.q.set(angle);
			// Transform vertices and normals.
			for (var i = 0; i < this.m_count; ++i) {
				$org_jbox2d_common_Transform.mulToOut$1(xf, this.m_vertices[i], this.m_vertices[i]);
				$org_jbox2d_common_Rot.mulToOut(xf.q, this.m_normals[i], this.m_normals[i]);
			}
		},
		getChildCount: function() {
			return 1;
		},
		testPoint: function(xf, p) {
			var tempx, tempy;
			var xfq = xf.q;
			tempx = p.x - xf.p.x;
			tempy = p.y - xf.p.y;
			var pLocalx = xfq.c * tempx + xfq.s * tempy;
			var pLocaly = -xfq.s * tempx + xfq.c * tempy;
			if ($org_jbox2d_collision_shapes_PolygonShape.$m_debug) {
				$org_jbox2d_common_Console.writeLine('--testPoint debug--');
				$org_jbox2d_common_Console.writeLine('Vertices: ');
				for (var i = 0; i < this.m_count; ++i) {
					$org_jbox2d_common_Console.writeLine(this.m_vertices[i].toString());
				}
				$org_jbox2d_common_Console.writeLine('pLocal: ' + pLocalx + ', ' + pLocaly);
			}
			for (var i1 = 0; i1 < this.m_count; ++i1) {
				var vertex = this.m_vertices[i1];
				var normal = this.m_normals[i1];
				tempx = pLocalx - vertex.x;
				tempy = pLocaly - vertex.y;
				var dot = normal.x * tempx + normal.y * tempy;
				if (dot > 0) {
					return false;
				}
			}
			return true;
		},
		computeAABB: function(aabb, xf, childIndex) {
			var lower = aabb.lowerBound;
			var upper = aabb.upperBound;
			var v1 = this.m_vertices[0];
			var xfq = xf.q;
			var xfp = xf.p;
			var vx, vy;
			lower.x = xfq.c * v1.x - xfq.s * v1.y + xfp.x;
			lower.y = xfq.s * v1.x + xfq.c * v1.y + xfp.y;
			upper.x = lower.x;
			upper.y = lower.y;
			for (var i = 1; i < this.m_count; ++i) {
				var v2 = this.m_vertices[i];
				// Vec2 v = Mul(xf, m_vertices[i]);
				vx = xfq.c * v2.x - xfq.s * v2.y + xfp.x;
				vy = xfq.s * v2.x + xfq.c * v2.y + xfp.y;
				lower.x = ((lower.x < vx) ? lower.x : vx);
				lower.y = ((lower.y < vy) ? lower.y : vy);
				upper.x = ((upper.x > vx) ? upper.x : vx);
				upper.y = ((upper.y > vy) ? upper.y : vy);
			}
			lower.x -= this.m_radius;
			lower.y -= this.m_radius;
			upper.x += this.m_radius;
			upper.y += this.m_radius;
		},
		getVertexCount: function() {
			return this.m_count;
		},
		getVertex: function(index) {
			return this.m_vertices[index];
		},
		raycast: function(output, input, xf, childIndex) {
			var xfq = xf.q;
			var xfp = xf.p;
			var tempx, tempy;
			// b2Vec2 p1 = b2MulT(xf.q, input.p1 - xf.p);
			// b2Vec2 p2 = b2MulT(xf.q, input.p2 - xf.p);
			tempx = input.p1.x - xfp.x;
			tempy = input.p1.y - xfp.y;
			var p1x = xfq.c * tempx + xfq.s * tempy;
			var p1y = -xfq.s * tempx + xfq.c * tempy;
			tempx = input.p2.x - xfp.x;
			tempy = input.p2.y - xfp.y;
			var p2x = xfq.c * tempx + xfq.s * tempy;
			var p2y = -xfq.s * tempx + xfq.c * tempy;
			var dx = p2x - p1x;
			var dy = p2y - p1y;
			var lower = 0, upper = input.maxFraction;
			var index = -1;
			for (var i = 0; i < this.m_count; ++i) {
				var normal = this.m_normals[i];
				var vertex = this.m_vertices[i];
				// p = p1 + a * d
				// dot(normal, p - v) = 0
				// dot(normal, p1 - v) + a * dot(normal, d) = 0
				var tempxn = vertex.x - p1x;
				var tempyn = vertex.y - p1y;
				var numerator = normal.x * tempxn + normal.y * tempyn;
				var denominator = normal.x * dx + normal.y * dy;
				if (denominator === 0) {
					if (numerator < 0) {
						return false;
					}
				}
				else {
					// Note: we want this predicate without division:
					// lower < numerator / denominator, where denominator < 0
					// Since denominator < 0, we have to flip the inequality:
					// lower < numerator / denominator <==> denominator * lower >
					// numerator.
					if (denominator < 0 && numerator < lower * denominator) {
						// Increase lower.
						// The segment enters this half-space.
						lower = numerator / denominator;
						index = i;
					}
					else if (denominator > 0 && numerator < upper * denominator) {
						// Decrease upper.
						// The segment exits this half-space.
						upper = numerator / denominator;
					}
				}
				if (upper < lower) {
					return false;
				}
			}
			if (index >= 0) {
				output.fraction = lower;
				// normal = Mul(xf.R, m_normals[index]);
				var normal1 = this.m_normals[index];
				var out_ = output.normal;
				out_.x = xfq.c * normal1.x - xfq.s * normal1.y;
				out_.y = xfq.s * normal1.x + xfq.c * normal1.y;
				return true;
			}
			return false;
		},
		computeCentroidToOut: function(vs, count, out_) {
			out_.set$1(0, 0);
			var area = 0;
			// pRef is the reference point for forming triangles.
			// It's location doesn't change the result (except for rounding error).
			var pRef = this.$pool1;
			pRef.setZero();
			var e1 = this.$pool2;
			var e2 = this.$pool3;
			var inv3 = 0.333333333333333;
			for (var i = 0; i < count; ++i) {
				// Triangle vertices.
				var p1 = pRef;
				var p2 = vs[i];
				var p3 = ((i + 1 < count) ? vs[i + 1] : vs[0]);
				e1.set(p2).subLocal(p1);
				e2.set(p3).subLocal(p1);
				var D = $org_jbox2d_common_Vec2.cross$2(e1, e2);
				var triangleArea = 0.5 * D;
				area += triangleArea;
				// Area weighted centroid
				e1.set(p1).addLocal(p2).addLocal(p3).mulLocal(triangleArea * inv3);
				out_.addLocal(e1);
			}
			// Centroid 
			out_.mulLocal(1 / area);
		},
		computeMass: function(massData, density) {
			// Polygon mass, centroid, and inertia.
			// Let rho be the polygon density in mass per unit area.
			// Then:
			// mass = rho * int(dA)
			// centroid.x = (1/mass) * rho * int(x * dA)
			// centroid.y = (1/mass) * rho * int(y * dA)
			// I = rho * int((x*x + y*y) * dA)
			//
			// We can compute these integrals by summing all the integrals
			// for each triangle of the polygon. To evaluate the integral
			// for a single triangle, we make a change of variables to
			// the (u,v) coordinates of the triangle:
			// x = x0 + e1x * u + e2x * v
			// y = y0 + e1y * u + e2y * v
			// where 0 <= u && 0 <= v && u + v <= 1.
			//
			// We integrate u from [0,1-v] and then v from [0,1].
			// We also need to use the Jacobian of the transformation:
			// D = cross(e1, e2)
			//
			// Simplification: triangle centroid = (1/3) * (p1 + p2 + p3)
			//
			// The rest of the derivation is handled by computer algebra.
			var center = this.$pool1;
			center.setZero();
			var area = 0;
			var I = 0;
			// pRef is the reference point for forming triangles.
			// It's location doesn't change the result (except for rounding error).
			var s = this.$pool2;
			s.setZero();
			// This code would put the reference point inside the polygon.
			for (var i = 0; i < this.m_count; ++i) {
				s.addLocal(this.m_vertices[i]);
			}
			s.mulLocal(1 / this.m_count);
			var k_inv3 = 0.333333333333333;
			var e1 = this.$pool3;
			var e2 = this.$pool4;
			for (var i1 = 0; i1 < this.m_count; ++i1) {
				// Triangle vertices.
				e1.set(this.m_vertices[i1]).subLocal(s);
				e2.set(s).negateLocal().addLocal(((i1 + 1 < this.m_count) ? this.m_vertices[i1 + 1] : this.m_vertices[0]));
				var D = $org_jbox2d_common_Vec2.cross$2(e1, e2);
				var triangleArea = 0.5 * D;
				area += triangleArea;
				// Area weighted centroid
				center.x += triangleArea * k_inv3 * (e1.x + e2.x);
				center.y += triangleArea * k_inv3 * (e1.y + e2.y);
				var ex1 = e1.x, ey1 = e1.y;
				var ex2 = e2.x, ey2 = e2.y;
				var intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
				var inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;
				I += 0.25 * k_inv3 * D * (intx2 + inty2);
			}
			// Total mass
			massData.mass = density * area;
			// Center of mass 
			center.mulLocal(1 / area);
			massData.center.set(center).addLocal(s);
			// Inertia tensor relative to the local origin (point s)
			massData.i = I * density;
			// Shift to center of mass then to original body origin.
			massData.i += massData.mass * $org_jbox2d_common_Vec2.dot(massData.center, massData.center);
		},
		validate: function() {
			for (var i = 0; i < this.m_count; ++i) {
				var i1 = i;
				var i2 = ((i < this.m_count - 1) ? (i1 + 1) : 0);
				var p = this.m_vertices[i1];
				var e = this.$pool1.set(this.m_vertices[i2]).subLocal(p);
				for (var j = 0; j < this.m_count; ++j) {
					if (j === i1 || j === i2) {
						continue;
					}
					var v = this.$pool2.set(this.m_vertices[j]).subLocal(p);
					var c = $org_jbox2d_common_Vec2.cross$2(e, v);
					if (c < 0) {
						return false;
					}
				}
			}
			return true;
		},
		getVertices: function() {
			return this.m_vertices;
		},
		getNormals: function() {
			return this.m_normals;
		},
		centroid: function(xf) {
			return $org_jbox2d_common_Transform.mul$1(xf, this.m_centroid);
		},
		centroidToOut: function(xf, out_) {
			$org_jbox2d_common_Transform.mulToOutUnsafe$1(xf, this.m_centroid, out_);
			return out_;
		}
	}, $org_jbox2d_collision_shapes_Shape);
	ss.initEnum($org_jbox2d_collision_shapes_ShapeType, { CIRCLE: 0, EDGE: 1, POLYGON: 2, CHAIN: 3 });
	ss.initClass($org_jbox2d_common_Color3f, {
		set$1: function(r, g, b) {
			this.x = r;
			this.y = g;
			this.z = b;
		},
		set: function(argColor) {
			this.x = argColor.x;
			this.y = argColor.y;
			this.z = argColor.z;
		}
	});
	$org_jbox2d_common_Color3f.$ctor1.prototype = $org_jbox2d_common_Color3f.prototype;
	ss.initClass($org_jbox2d_common_Console, {});
	ss.initInterface($org_jbox2d_common_IViewportTransform, { isYFlip: null, setYFlip: null, getExtents: null, setExtents: null, setExtents$1: null, getCenter: null, setCenter: null, setCenter$1: null, setCamera: null, getWorldVectorToScreen: null, getScreenVectorToWorld: null, getWorldToScreen: null, getScreenToWorld: null });
	ss.initClass($org_jbox2d_common_Mat22, {
		toString: function() {
			var s = '';
			s += '[' + this.ex.x + ',' + this.ey.x + ']';
			s += '[' + this.ex.y + ',' + this.ey.y + ']';
			return s;
		},
		set$1: function(m) {
			this.ex.x = m.ex.x;
			this.ex.y = m.ex.y;
			this.ey.x = m.ey.x;
			this.ey.y = m.ey.y;
			return this;
		},
		set$3: function(exx, col2x, exy, col2y) {
			this.ex.x = exx;
			this.ex.y = exy;
			this.ey.x = col2x;
			this.ey.y = col2y;
			return this;
		},
		clone: function() {
			return new $org_jbox2d_common_Mat22.$ctor1(this.ex, this.ey);
		},
		set: function(angle) {
			var c = $org_jbox2d_common_MathUtils.cos(angle), s = $org_jbox2d_common_MathUtils.sin(angle);
			this.ex.x = c;
			this.ey.x = -s;
			this.ex.y = s;
			this.ey.y = c;
		},
		setIdentity: function() {
			this.ex.x = 1;
			this.ey.x = 0;
			this.ex.y = 0;
			this.ey.y = 1;
		},
		setZero: function() {
			this.ex.x = 0;
			this.ey.x = 0;
			this.ex.y = 0;
			this.ey.y = 0;
		},
		getAngle: function() {
			return $org_jbox2d_common_MathUtils.atan2(this.ex.y, this.ex.x);
		},
		set$2: function(c1, c2) {
			this.ex.x = c1.x;
			this.ey.x = c2.x;
			this.ex.y = c1.y;
			this.ey.y = c2.y;
		},
		invert: function() {
			var a = this.ex.x, b = this.ey.x, c = this.ex.y, d = this.ey.y;
			var B = new $org_jbox2d_common_Mat22();
			var det = a * d - b * c;
			if (det !== 0) {
				det = 1 / det;
			}
			B.ex.x = det * d;
			B.ey.x = -det * b;
			B.ex.y = -det * c;
			B.ey.y = det * a;
			return B;
		},
		invertLocal: function() {
			var a = this.ex.x, b = this.ey.x, c = this.ex.y, d = this.ey.y;
			var det = a * d - b * c;
			if (det !== 0) {
				det = 1 / det;
			}
			this.ex.x = det * d;
			this.ey.x = -det * b;
			this.ex.y = -det * c;
			this.ey.y = det * a;
			return this;
		},
		invertToOut: function(out_) {
			var a = this.ex.x, b = this.ey.x, c = this.ex.y, d = this.ey.y;
			var det = a * d - b * c;
			// b2Assert(det != 0.0d);
			det = 1 / det;
			out_.ex.x = det * d;
			out_.ey.x = -det * b;
			out_.ex.y = -det * c;
			out_.ey.y = det * a;
		},
		abs: function() {
			return new $org_jbox2d_common_Mat22.$ctor2($org_jbox2d_common_MathUtils.abs(this.ex.x), $org_jbox2d_common_MathUtils.abs(this.ey.x), $org_jbox2d_common_MathUtils.abs(this.ex.y), $org_jbox2d_common_MathUtils.abs(this.ey.y));
		},
		absLocal: function() {
			this.ex.absLocal();
			this.ey.absLocal();
		},
		mul$1: function(v) {
			return new $org_jbox2d_common_Vec2.$ctor2(this.ex.x * v.x + this.ey.x * v.y, this.ex.y * v.x + this.ey.y * v.y);
		},
		mulToOut$1: function(v, out_) {
			var tempy = this.ex.y * v.x + this.ey.y * v.y;
			out_.x = this.ex.x * v.x + this.ey.x * v.y;
			out_.y = tempy;
		},
		mulToOutUnsafe$1: function(v, out_) {
			out_.x = this.ex.x * v.x + this.ey.x * v.y;
			out_.y = this.ex.y * v.x + this.ey.y * v.y;
		},
		mul: function(R) {
			//
			//     * Mat22 C = new Mat22();C.set(this.mul(R.ex), this.mul(R.ey));return C;
			var C = new $org_jbox2d_common_Mat22();
			C.ex.x = this.ex.x * R.ex.x + this.ey.x * R.ex.y;
			C.ex.y = this.ex.y * R.ex.x + this.ey.y * R.ex.y;
			C.ey.x = this.ex.x * R.ey.x + this.ey.x * R.ey.y;
			C.ey.y = this.ex.y * R.ey.x + this.ey.y * R.ey.y;
			// C.set(ex,col2);
			return C;
		},
		mulLocal: function(R) {
			this.mulToOut(R, this);
			return this;
		},
		mulToOut: function(R, out_) {
			var tempy1 = this.ex.y * R.ex.x + this.ey.y * R.ex.y;
			var tempx1 = this.ex.x * R.ex.x + this.ey.x * R.ex.y;
			out_.ex.x = tempx1;
			out_.ex.y = tempy1;
			var tempy2 = this.ex.y * R.ey.x + this.ey.y * R.ey.y;
			var tempx2 = this.ex.x * R.ey.x + this.ey.x * R.ey.y;
			out_.ey.x = tempx2;
			out_.ey.y = tempy2;
		},
		mulToOutUnsafe: function(R, out_) {
			out_.ex.x = this.ex.x * R.ex.x + this.ey.x * R.ex.y;
			out_.ex.y = this.ex.y * R.ex.x + this.ey.y * R.ex.y;
			out_.ey.x = this.ex.x * R.ey.x + this.ey.x * R.ey.y;
			out_.ey.y = this.ex.y * R.ey.x + this.ey.y * R.ey.y;
		},
		mulTrans: function(B) {
			//
			//     * Vec2 c1 = new Vec2(Vec2.dot(this.ex, B.ex), Vec2.dot(this.ey, B.ex)); Vec2 c2 = new
			//
			//     * Vec2(Vec2.dot(this.ex, B.ey), Vec2.dot(this.ey, B.ey)); Mat22 C = new Mat22(); C.set(c1, c2);
			//
			//     * return C;
			var C = new $org_jbox2d_common_Mat22();
			C.ex.x = $org_jbox2d_common_Vec2.dot(this.ex, B.ex);
			C.ex.y = $org_jbox2d_common_Vec2.dot(this.ey, B.ex);
			C.ey.x = $org_jbox2d_common_Vec2.dot(this.ex, B.ey);
			C.ey.y = $org_jbox2d_common_Vec2.dot(this.ey, B.ey);
			return C;
		},
		mulTransLocal: function(B) {
			this.mulTransToOut(B, this);
			return this;
		},
		mulTransToOut: function(B, out_) {
			//
			//     * out_.ex.x = Vec2.dot(this.ex, B.ex); out_.ex.y = Vec2.dot(this.ey, B.ex); out_.ey.x =
			//
			//     * Vec2.dot(this.ex, B.ey); out_.ey.y = Vec2.dot(this.ey, B.ey);
			var x1 = this.ex.x * B.ex.x + this.ex.y * B.ex.y;
			var y1 = this.ey.x * B.ex.x + this.ey.y * B.ex.y;
			var x2 = this.ex.x * B.ey.x + this.ex.y * B.ey.y;
			var y2 = this.ey.x * B.ey.x + this.ey.y * B.ey.y;
			out_.ex.x = x1;
			out_.ey.x = x2;
			out_.ex.y = y1;
			out_.ey.y = y2;
		},
		mulTransToOutUnsafe: function(B, out_) {
			out_.ex.x = this.ex.x * B.ex.x + this.ex.y * B.ex.y;
			out_.ey.x = this.ex.x * B.ey.x + this.ex.y * B.ey.y;
			out_.ex.y = this.ey.x * B.ex.x + this.ey.y * B.ex.y;
			out_.ey.y = this.ey.x * B.ey.x + this.ey.y * B.ey.y;
		},
		mulTrans$1: function(v) {
			// return new Vec2(Vec2.dot(v, ex), Vec2.dot(v, col2));
			return new $org_jbox2d_common_Vec2.$ctor2(v.x * this.ex.x + v.y * this.ex.y, v.x * this.ey.x + v.y * this.ey.y);
		},
		mulTransToOut$1: function(v, out_) {
			//
			//     * out_.x = Vec2.dot(v, ex); out_.y = Vec2.dot(v, col2);
			var tempx = v.x * this.ex.x + v.y * this.ex.y;
			out_.y = v.x * this.ey.x + v.y * this.ey.y;
			out_.x = tempx;
		},
		add: function(B) {
			// return new Mat22(ex.add(B.ex), col2.add(B.ey));
			var m = new $org_jbox2d_common_Mat22();
			m.ex.x = this.ex.x + B.ex.x;
			m.ex.y = this.ex.y + B.ex.y;
			m.ey.x = this.ey.x + B.ey.x;
			m.ey.y = this.ey.y + B.ey.y;
			return m;
		},
		addLocal: function(B) {
			// ex.addLocal(B.ex);
			// col2.addLocal(B.ey);
			this.ex.x += B.ex.x;
			this.ex.y += B.ex.y;
			this.ey.x += B.ey.x;
			this.ey.y += B.ey.y;
			return this;
		},
		solve: function(b) {
			var a11 = this.ex.x, a12 = this.ey.x, a21 = this.ex.y, a22 = this.ey.y;
			var det = a11 * a22 - a12 * a21;
			if (det !== 0) {
				det = 1 / det;
			}
			var x = new $org_jbox2d_common_Vec2.$ctor2(det * (a22 * b.x - a12 * b.y), det * (a11 * b.y - a21 * b.x));
			return x;
		},
		solveToOut: function(b, out_) {
			var a11 = this.ex.x, a12 = this.ey.x, a21 = this.ex.y, a22 = this.ey.y;
			var det = a11 * a22 - a12 * a21;
			if (det !== 0) {
				det = 1 / det;
			}
			var tempy = det * (a11 * b.y - a21 * b.x);
			out_.x = det * (a22 * b.x - a12 * b.y);
			out_.y = tempy;
		},
		getHashCode: function() {
			var prime = 31;
			var result = 1;
			result = prime * result + (ss.isNullOrUndefined(this.ex) ? 0 : this.ex.getHashCode());
			result = prime * result + (ss.isNullOrUndefined(this.ey) ? 0 : this.ey.getHashCode());
			return result;
		},
		equals: function(obj) {
			if (ss.referenceEquals(this, obj)) {
				return true;
			}
			if (ss.isNullOrUndefined(obj)) {
				return false;
			}
			if (!ss.referenceEquals(ss.getInstanceType(this), ss.getInstanceType(obj))) {
				return false;
			}
			var other = ss.cast(obj, $org_jbox2d_common_Mat22);
			if (ss.isNullOrUndefined(this.ex)) {
				if (ss.isValue(other.ex)) {
					return false;
				}
			}
			else if (!this.ex.equals(other.ex)) {
				return false;
			}
			if (ss.isNullOrUndefined(this.ey)) {
				if (ss.isValue(other.ey)) {
					return false;
				}
			}
			else if (!this.ey.equals(other.ey)) {
				return false;
			}
			return true;
		}
	});
	$org_jbox2d_common_Mat22.$ctor1.prototype = $org_jbox2d_common_Mat22.$ctor2.prototype = $org_jbox2d_common_Mat22.prototype;
	ss.initClass($org_jbox2d_common_Mat33, {
		setZero: function() {
			this.ex.setZero();
			this.ey.setZero();
			this.ez.setZero();
		},
		solve22: function(b) {
			var x = new $org_jbox2d_common_Vec2();
			this.solve22ToOut(b, x);
			return x;
		},
		solve22ToOut: function(b, out_) {
			var a11 = this.ex.x, a12 = this.ey.x, a21 = this.ex.y, a22 = this.ey.y;
			var det = a11 * a22 - a12 * a21;
			if (det !== 0) {
				det = 1 / det;
			}
			out_.x = det * (a22 * b.x - a12 * b.y);
			out_.y = det * (a11 * b.y - a21 * b.x);
		},
		solve33: function(b) {
			var x = new $org_jbox2d_common_Vec3();
			this.solve33ToOut(b, x);
			return x;
		},
		solve33ToOut: function(b, out_) {
			$org_jbox2d_common_Vec3.crossToOutUnsafe(this.ey, this.ez, out_);
			var det = $org_jbox2d_common_Vec3.dot(this.ex, out_);
			if (det !== 0) {
				det = 1 / det;
			}
			$org_jbox2d_common_Vec3.crossToOutUnsafe(this.ey, this.ez, out_);
			var x = det * $org_jbox2d_common_Vec3.dot(b, out_);
			$org_jbox2d_common_Vec3.crossToOutUnsafe(b, this.ez, out_);
			var y = det * $org_jbox2d_common_Vec3.dot(this.ex, out_);
			$org_jbox2d_common_Vec3.crossToOutUnsafe(this.ey, b, out_);
			var z = det * $org_jbox2d_common_Vec3.dot(this.ex, out_);
			out_.x = x;
			out_.y = y;
			out_.z = z;
		},
		getInverse22: function(M) {
			var a = this.ex.x, b = this.ey.x, c = this.ex.y, d = this.ey.y;
			var det = a * d - b * c;
			if (det !== 0) {
				det = 1 / det;
			}
			M.ex.x = det * d;
			M.ey.x = -det * b;
			M.ex.z = 0;
			M.ex.y = -det * c;
			M.ey.y = det * a;
			M.ey.z = 0;
			M.ez.x = 0;
			M.ez.y = 0;
			M.ez.z = 0;
		},
		getSymInverse33: function(M) {
			var bx = this.ey.y * this.ez.z - this.ey.z * this.ez.y;
			var by = this.ey.z * this.ez.x - this.ey.x * this.ez.z;
			var bz = this.ey.x * this.ez.y - this.ey.y * this.ez.x;
			var det = this.ex.x * bx + this.ex.y * by + this.ex.z * bz;
			if (det !== 0) {
				det = 1 / det;
			}
			var a11 = this.ex.x, a12 = this.ey.x, a13 = this.ez.x;
			var a22 = this.ey.y, a23 = this.ez.y;
			var a33 = this.ez.z;
			M.ex.x = det * (a22 * a33 - a23 * a23);
			M.ex.y = det * (a13 * a23 - a12 * a33);
			M.ex.z = det * (a12 * a23 - a13 * a22);
			M.ey.x = M.ex.y;
			M.ey.y = det * (a11 * a33 - a13 * a13);
			M.ey.z = det * (a13 * a12 - a11 * a23);
			M.ez.x = M.ex.z;
			M.ez.y = M.ey.z;
			M.ez.z = det * (a11 * a22 - a12 * a12);
		},
		getHashCode: function() {
			var prime = 31;
			var result = 1;
			result = prime * result + (ss.isNullOrUndefined(this.ex) ? 0 : this.ex.getHashCode());
			result = prime * result + (ss.isNullOrUndefined(this.ey) ? 0 : this.ey.getHashCode());
			result = prime * result + (ss.isNullOrUndefined(this.ez) ? 0 : this.ez.getHashCode());
			return result;
		},
		equals: function(obj) {
			if (ss.referenceEquals(this, obj)) {
				return true;
			}
			if (ss.isNullOrUndefined(obj)) {
				return false;
			}
			if (!ss.referenceEquals(ss.getInstanceType(this), ss.getInstanceType(obj))) {
				return false;
			}
			var other = ss.cast(obj, $org_jbox2d_common_Mat33);
			if (ss.isNullOrUndefined(this.ex)) {
				if (ss.isValue(other.ex)) {
					return false;
				}
			}
			else if (!this.ex.equals(other.ex)) {
				return false;
			}
			if (ss.isNullOrUndefined(this.ey)) {
				if (ss.isValue(other.ey)) {
					return false;
				}
			}
			else if (!this.ey.equals(other.ey)) {
				return false;
			}
			if (ss.isNullOrUndefined(this.ez)) {
				if (ss.isValue(other.ez)) {
					return false;
				}
			}
			else if (!this.ez.equals(other.ez)) {
				return false;
			}
			return true;
		}
	});
	$org_jbox2d_common_Mat33.$ctor1.prototype = $org_jbox2d_common_Mat33.prototype;
	ss.initClass($org_jbox2d_common_PlatformMathUtils, {});
	ss.initClass($org_jbox2d_common_MathUtils, {}, $org_jbox2d_common_PlatformMathUtils);
	ss.initClass($org_jbox2d_common_NumberHelper, {});
	ss.initClass($org_jbox2d_common_OBBViewportTransform, {
		setCamera: function(x, y, scale) {
			this.box.center.set$1(x, y);
			$org_jbox2d_common_Mat22.createScaleTransform$1(scale, this.box.r);
		},
		getExtents: function() {
			return this.box.extents;
		},
		setExtents: function(argExtents) {
			this.box.extents.set(argExtents);
		},
		setExtents$1: function(argHalfWidth, argHalfHeight) {
			this.box.extents.set$1(argHalfWidth, argHalfHeight);
		},
		getCenter: function() {
			return this.box.center;
		},
		setCenter: function(argPos) {
			this.box.center.set(argPos);
		},
		setCenter$1: function(x, y) {
			this.box.center.set$1(x, y);
		},
		isYFlip: function() {
			return this.$yFlip;
		},
		setYFlip: function(yFlip) {
			this.$yFlip = yFlip;
		},
		getScreenVectorToWorld: function(argScreen, argWorld) {
			this.$inv.set$1(this.box.r);
			this.$inv.invertLocal();
			this.$inv.mulToOut$1(argScreen, argWorld);
			if (this.$yFlip) {
				this.$yFlipMatInv.mulToOut$1(argWorld, argWorld);
			}
		},
		getWorldVectorToScreen: function(argWorld, argScreen) {
			this.box.r.mulToOut$1(argWorld, argScreen);
			if (this.$yFlip) {
				this.$yFlipMatInv.mulToOut$1(argScreen, argScreen);
			}
		},
		getWorldToScreen: function(argWorld, argScreen) {
			argScreen.x = argWorld.x - this.box.center.x;
			argScreen.y = argWorld.y - this.box.center.y;
			this.box.r.mulToOut$1(argScreen, argScreen);
			if (this.$yFlip) {
				this.$yFlipMat.mulToOut$1(argScreen, argScreen);
			}
			argScreen.x += this.box.extents.x;
			argScreen.y += this.box.extents.y;
		},
		getScreenToWorld: function(argScreen, argWorld) {
			argWorld.set(argScreen);
			argWorld.subLocal(this.box.extents);
			this.box.r.invertToOut(this.$inv2);
			this.$inv2.mulToOut$1(argWorld, argWorld);
			if (this.$yFlip) {
				this.$yFlipMatInv.mulToOut$1(argWorld, argWorld);
			}
			argWorld.addLocal(this.box.center);
		},
		set: function(vpt) {
			this.box.center.set(vpt.box.center);
			this.box.extents.set(vpt.box.extents);
			this.box.r.set$1(vpt.box.r);
			this.$yFlip = vpt.$yFlip;
		},
		getTransform: function() {
			return this.box.r;
		},
		setTransform: function(transform) {
			this.box.r.set$1(transform);
		},
		mulByTransform: function(argTransform) {
			this.box.r.mulLocal(argTransform);
		}
	}, null, [$org_jbox2d_common_IViewportTransform]);
	ss.initClass($org_jbox2d_common_OBBViewportTransform$OBB, {});
	ss.initClass($org_jbox2d_common_RaycastResult, {
		set: function(argOther) {
			this.lambda = argOther.lambda;
			this.normal.set(argOther.normal);
			return this;
		}
	});
	ss.initClass($org_jbox2d_common_Rot, {
		getSin: function() {
			return this.s;
		},
		toString: function() {
			return 'Rot(s:' + this.s + ', c:' + this.c + ')';
		},
		getCos: function() {
			return this.c;
		},
		set: function(angle) {
			this.s = $org_jbox2d_common_MathUtils.sin(angle);
			this.c = $org_jbox2d_common_MathUtils.cos(angle);
			return this;
		},
		set$1: function(other) {
			this.s = other.s;
			this.c = other.c;
			return this;
		},
		setIdentity: function() {
			this.s = 0;
			this.c = 1;
			return this;
		},
		getAngle: function() {
			return $org_jbox2d_common_MathUtils.atan2(this.s, this.c);
		},
		getXAxis: function(xAxis) {
			xAxis.set$1(this.c, this.s);
		},
		getYAxis: function(yAxis) {
			yAxis.set$1(-this.s, this.c);
		},
		clone: function() {
			var copy = new $org_jbox2d_common_Rot();
			copy.s = this.s;
			copy.c = this.c;
			return copy;
		}
	});
	$org_jbox2d_common_Rot.$ctor1.prototype = $org_jbox2d_common_Rot.prototype;
	ss.initClass($org_jbox2d_common_Settings, {});
	ss.initClass($org_jbox2d_common_Sweep, {
		toString$1: function() {
			var s = 'Sweep:localCenter: ' + this.localCenter + '';
			s += 'c0: ' + this.c0 + ', c: ' + this.c + '';
			s += 'a0: ' + this.a0 + ', a: ' + this.a + '';
			return s;
		},
		normalize: function() {
			var d = $org_jbox2d_common_MathUtils.TWOPI * $org_jbox2d_common_MathUtils.floor(this.a0 / $org_jbox2d_common_MathUtils.TWOPI);
			this.a0 -= d;
			this.a -= d;
		},
		set: function(argCloneFrom) {
			this.localCenter.set(argCloneFrom.localCenter);
			this.c0.set(argCloneFrom.c0);
			this.c.set(argCloneFrom.c);
			this.a0 = argCloneFrom.a0;
			this.a = argCloneFrom.a;
			return this;
		},
		getTransform: function(xf, beta) {
			// if (xf == null)
			// xf = new XForm();
			// center = p + R * localCenter
			//
			//     * if (1.0d - t0 > Settings.EPSILON) { double alpha = (t - t0) / (1.0d - t0); xf.position.x =
			//
			//     * (1.0d - alpha) * c0.x + alpha * c.x; xf.position.y = (1.0d - alpha) * c0.y + alpha * c.y;
			//
			//     * double angle = (1.0d - alpha) * a0 + alpha * a; xf.R.set(angle); } else { xf.position.set(c);
			//
			//     * xf.R.set(a); }
			xf.p.x = (1 - beta) * this.c0.x + beta * this.c.x;
			xf.p.y = (1 - beta) * this.c0.y + beta * this.c.y;
			// double angle = (1.0d - alpha) * a0 + alpha * a;
			// xf.R.set(angle);
			xf.q.set((1 - beta) * this.a0 + beta * this.a);
			// Shift to origin
			//xf->p -= b2Mul(xf->q, localCenter);
			var q = xf.q;
			xf.p.x -= q.c * this.localCenter.x - q.s * this.localCenter.y;
			xf.p.y -= q.s * this.localCenter.x + q.c * this.localCenter.y;
		},
		advance: function(alpha) {
			//    // c0 = (1.0d - t) * c0 + t*c;
			//    double beta = (alpha - alpha0) / (1.0d - alpha0);
			//    c0.x = (1.0d - beta) * c0.x + beta * c.x;
			//    c0.y = (1.0d - beta) * c0.y + beta * c.y;
			//    a0 = (1.0d - beta) * a0 + beta * a;
			//    alpha0 = alpha;
			this.c0.x = (1 - alpha) * this.c0.x + alpha * this.c.x;
			this.c0.y = (1 - alpha) * this.c0.y + alpha * this.c.y;
			this.a0 = (1 - alpha) * this.a0 + alpha * this.a;
		}
	});
	ss.initClass($org_jbox2d_common_Timer, {
		reset: function() {
			this.$resetNanos = new Date();
		},
		getMilliseconds: function() {
			var i = new Date() - this.$resetNanos;
			return i;
		}
	});
	ss.initClass($org_jbox2d_common_Transform, {
		set: function(xf) {
			this.p.set(xf.p);
			this.q.set$1(xf.q);
			return this;
		},
		set$1: function(p, angle) {
			this.p.set(p);
			this.q.set(angle);
		},
		setIdentity: function() {
			this.p.setZero();
			this.q.setIdentity();
		}
	});
	$org_jbox2d_common_Transform.$ctor1.prototype = $org_jbox2d_common_Transform.$ctor2.prototype = $org_jbox2d_common_Transform.prototype;
	ss.initClass($org_jbox2d_common_Vec2, {
		setZero: function() {
			this.x = 0;
			this.y = 0;
		},
		set$1: function(x, y) {
			this.x = x;
			this.y = y;
			return this;
		},
		set: function(v) {
			this.x = v.x;
			this.y = v.y;
			return this;
		},
		add: function(v) {
			return new $org_jbox2d_common_Vec2.$ctor2(this.x + v.x, this.y + v.y);
		},
		sub: function(v) {
			return new $org_jbox2d_common_Vec2.$ctor2(this.x - v.x, this.y - v.y);
		},
		mul: function(a) {
			return new $org_jbox2d_common_Vec2.$ctor2(this.x * a, this.y * a);
		},
		negate: function() {
			return new $org_jbox2d_common_Vec2.$ctor2(-this.x, -this.y);
		},
		negateLocal: function() {
			this.x = -this.x;
			this.y = -this.y;
			return this;
		},
		addLocal: function(v) {
			this.x += v.x;
			this.y += v.y;
			return this;
		},
		addLocal$1: function(x, y) {
			this.x += x;
			this.y += y;
			return this;
		},
		subLocal: function(v) {
			this.x -= v.x;
			this.y -= v.y;
			return this;
		},
		mulLocal: function(a) {
			this.x *= a;
			this.y *= a;
			return this;
		},
		skew: function() {
			return new $org_jbox2d_common_Vec2.$ctor2(-this.y, this.x);
		},
		skew$1: function(out_) {
			out_.x = -this.y;
			out_.y = this.x;
		},
		length: function() {
			return $org_jbox2d_common_MathUtils.sqrt(this.x * this.x + this.y * this.y);
		},
		lengthSquared: function() {
			return this.x * this.x + this.y * this.y;
		},
		normalize: function() {
			var _length = this.length();
			if (_length < $org_jbox2d_common_Settings.EPSILON) {
				return 0;
			}
			var invLength = 1 / _length;
			this.x *= invLength;
			this.y *= invLength;
			return _length;
		},
		isValid: function() {
			var valid = !isNaN(this.x) && !isNaN(this.y) && isFinite(this.x) && isFinite(this.y);
			return valid;
		},
		abs: function() {
			return new $org_jbox2d_common_Vec2.$ctor2($org_jbox2d_common_MathUtils.abs(this.x), $org_jbox2d_common_MathUtils.abs(this.y));
		},
		absLocal: function() {
			this.x = $org_jbox2d_common_MathUtils.abs(this.x);
			this.y = $org_jbox2d_common_MathUtils.abs(this.y);
		},
		clone: function() {
			return new $org_jbox2d_common_Vec2.$ctor2(this.x, this.y);
		},
		toString: function() {
			return '(' + this.x + ',' + this.y + ')';
		},
		getHashCode: function() {
			// automatically generated by Eclipse
			var prime = 31;
			var result = 1;
			result = prime * result + ss.getHashCode(this.x);
			result = prime * result + ss.getHashCode(this.y);
			return result;
		},
		equals: function(obj) {
			// automatically generated by Eclipse
			if (ss.referenceEquals(this, obj)) {
				return true;
			}
			if (ss.isNullOrUndefined(obj)) {
				return false;
			}
			if (!ss.referenceEquals(ss.getInstanceType(this), ss.getInstanceType(obj))) {
				return false;
			}
			var other = ss.cast(obj, $org_jbox2d_common_Vec2);
			if (!$org_jbox2d_common_NumberHelper.compareDoubles(this.x, other.x)) {
				return false;
			}
			if (!$org_jbox2d_common_NumberHelper.compareDoubles(this.y, other.y)) {
				return false;
			}
			return true;
		}
	});
	$org_jbox2d_common_Vec2.$ctor2.prototype = $org_jbox2d_common_Vec2.$ctor1.prototype = $org_jbox2d_common_Vec2.prototype;
	ss.initClass($org_jbox2d_common_Vec3, {
		set: function(argVec) {
			this.x = argVec.x;
			this.y = argVec.y;
			this.z = argVec.z;
			return this;
		},
		set$1: function(argX, argY, argZ) {
			this.x = argX;
			this.y = argY;
			this.z = argZ;
			return this;
		},
		addLocal: function(argVec) {
			this.x += argVec.x;
			this.y += argVec.y;
			this.z += argVec.z;
			return this;
		},
		add: function(argVec) {
			return new $org_jbox2d_common_Vec3.$ctor2(this.x + argVec.x, this.y + argVec.y, this.z + argVec.z);
		},
		subLocal: function(argVec) {
			this.x -= argVec.x;
			this.y -= argVec.y;
			this.z -= argVec.z;
			return this;
		},
		sub: function(argVec) {
			return new $org_jbox2d_common_Vec3.$ctor2(this.x - argVec.x, this.y - argVec.y, this.z - argVec.z);
		},
		mulLocal: function(argScalar) {
			this.x *= argScalar;
			this.y *= argScalar;
			this.z *= argScalar;
			return this;
		},
		mul: function(argScalar) {
			return new $org_jbox2d_common_Vec3.$ctor2(this.x * argScalar, this.y * argScalar, this.z * argScalar);
		},
		negate: function() {
			return new $org_jbox2d_common_Vec3.$ctor2(-this.x, -this.y, -this.z);
		},
		negateLocal: function() {
			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;
			return this;
		},
		setZero: function() {
			this.x = 0;
			this.y = 0;
			this.z = 0;
		},
		clone: function() {
			return new $org_jbox2d_common_Vec3.$ctor1(this);
		},
		toString$1: function() {
			return '(' + this.x + ',' + this.y + ',' + this.z + ')';
		},
		getHashCode: function() {
			var prime = 31;
			var result = 1;
			result = prime * result + ss.getHashCode(this.x);
			result = prime * result + ss.getHashCode(this.y);
			result = prime * result + ss.getHashCode(this.z);
			return result;
		},
		equals: function(obj) {
			if (ss.referenceEquals(this, obj)) {
				return true;
			}
			if (ss.isNullOrUndefined(obj)) {
				return false;
			}
			if (!ss.referenceEquals(ss.getInstanceType(this), ss.getInstanceType(obj))) {
				return false;
			}
			var other = ss.cast(obj, $org_jbox2d_common_Vec3);
			if (!$org_jbox2d_common_NumberHelper.compareDoubles(this.x, other.x)) {
				return false;
			}
			if (!$org_jbox2d_common_NumberHelper.compareDoubles(this.y, other.y)) {
				return false;
			}
			if (!$org_jbox2d_common_NumberHelper.compareDoubles(this.z, other.z)) {
				return false;
			}
			return true;
		}
	});
	$org_jbox2d_common_Vec3.$ctor2.prototype = $org_jbox2d_common_Vec3.$ctor1.prototype = $org_jbox2d_common_Vec3.prototype;
	ss.initClass($org_jbox2d_dynamics_$WorldQueryWrapper, {
		treeCallback: function(nodeId) {
			var proxy = ss.cast(this.$broadPhase.getUserData(nodeId), $org_jbox2d_dynamics_FixtureProxy);
			return this.$callback.reportFixture(proxy.fixture);
		}
	}, null, [$org_jbox2d_callbacks_TreeCallback]);
	ss.initClass($org_jbox2d_dynamics_$WorldRayCastWrapper, {
		raycastCallback: function(input, nodeId) {
			var userData = this.$broadPhase.getUserData(nodeId);
			var proxy = ss.cast(userData, $org_jbox2d_dynamics_FixtureProxy);
			var fixture = proxy.fixture;
			var index = proxy.childIndex;
			var hit = fixture.raycast(this.$output, input, index);
			if (hit) {
				var fraction = this.$output.fraction;
				// Vec2 point = (1.0d - fraction) * input.p1 + fraction * input.p2;
				this.$temp.set(input.p2).mulLocal(fraction);
				this.$point.set(input.p1).mulLocal(1 - fraction).addLocal(this.$temp);
				return this.$callback.reportFixture(fixture, this.$point, this.$output.normal, fraction);
			}
			return input.maxFraction;
		}
	}, null, [$org_jbox2d_callbacks_TreeRayCastCallback]);
	ss.initClass($org_jbox2d_dynamics_ArrayHelper, {});
	ss.initClass($org_jbox2d_dynamics_Body, {
		createFixture: function(def) {
			if (this.m_world.isLocked()) {
				return null;
			}
			var fixture = new $org_jbox2d_dynamics_Fixture();
			fixture.create(this, def);
			if ((this.m_flags & $org_jbox2d_dynamics_Body.e_activeFlag) === $org_jbox2d_dynamics_Body.e_activeFlag) {
				var broadPhase = this.m_world.m_contactManager.m_broadPhase;
				fixture.createProxies(broadPhase, this.m_xf);
			}
			fixture.m_next = this.m_fixtureList;
			this.m_fixtureList = fixture;
			++this.m_fixtureCount;
			fixture.m_body = this;
			// Adjust mass properties if needed.
			if (fixture.m_density > 0) {
				this.resetMassData();
			}
			// Let the world know we have a new fixture. This will cause new contacts
			// to be created at the beginning of the next time step.
			this.m_world.m_flags |= $org_jbox2d_dynamics_World.neW_FIXTURE;
			return fixture;
		},
		createFixture$1: function(shape, density) {
			this.$fixDef.shape = shape;
			this.$fixDef.density = density;
			return this.createFixture(this.$fixDef);
		},
		destroyFixture: function(fixture) {
			if (this.m_world.isLocked()) {
				return;
			}
			// Remove the fixture from this body's singly linked list.
			var node = this.m_fixtureList;
			var last = null;
			// java change
			var found = false;
			while (ss.isValue(node)) {
				if (ss.referenceEquals(node, fixture)) {
					node = fixture.m_next;
					found = true;
					break;
				}
				last = node;
				node = node.m_next;
			}
			// You tried to remove a shape that is not attached to this body.
			// java change, remove it from the list
			if (ss.isNullOrUndefined(last)) {
				this.m_fixtureList = fixture.m_next;
			}
			else {
				last.m_next = fixture.m_next;
			}
			// Destroy any contacts associated with the fixture.
			var edge = this.m_contactList;
			while (ss.isValue(edge)) {
				var c = edge.contact;
				edge = edge.next;
				var fixtureA = c.getFixtureA();
				var fixtureB = c.getFixtureB();
				if (ss.referenceEquals(fixture, fixtureA) || ss.referenceEquals(fixture, fixtureB)) {
					// This destroys the contact and removes it from
					// this body's contact list.
					this.m_world.m_contactManager.destroy(c);
				}
			}
			if ((this.m_flags & $org_jbox2d_dynamics_Body.e_activeFlag) === $org_jbox2d_dynamics_Body.e_activeFlag) {
				var broadPhase = this.m_world.m_contactManager.m_broadPhase;
				fixture.destroyProxies(broadPhase);
			}
			fixture.destroy();
			fixture.m_body = null;
			fixture.m_next = null;
			fixture = null;
			--this.m_fixtureCount;
			// Reset the mass data.
			this.resetMassData();
		},
		setTransform: function(position, angle) {
			if (this.m_world.isLocked()) {
				return;
			}
			this.m_xf.q.set(angle);
			this.m_xf.p.set(position);
			// m_sweep.c0 = m_sweep.c = Mul(m_xf, m_sweep.localCenter);
			$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
			this.m_sweep.a = angle;
			this.m_sweep.c0.set(this.m_sweep.c);
			this.m_sweep.a0 = this.m_sweep.a;
			var broadPhase = this.m_world.m_contactManager.m_broadPhase;
			for (var f = this.m_fixtureList; ss.isValue(f); f = f.m_next) {
				f.synchronize(broadPhase, this.m_xf, this.m_xf);
			}
			this.m_world.m_contactManager.findNewContacts();
		},
		getTransform: function() {
			return this.m_xf;
		},
		getPosition: function() {
			return this.m_xf.p;
		},
		getAngle: function() {
			return this.m_sweep.a;
		},
		getWorldCenter: function() {
			return this.m_sweep.c;
		},
		getLocalCenter: function() {
			return this.m_sweep.localCenter;
		},
		setLinearVelocity: function(v) {
			if (this.m_type === 0) {
				return;
			}
			if ($org_jbox2d_common_Vec2.dot(v, v) > 0) {
				this.setAwake(true);
			}
			this.m_linearVelocity.set(v);
		},
		getLinearVelocity: function() {
			return this.m_linearVelocity;
		},
		setAngularVelocity: function(w) {
			if (this.m_type === 0) {
				return;
			}
			if (w * w > 0) {
				this.setAwake(true);
			}
			this.m_angularVelocity = w;
		},
		getAngularVelocity: function() {
			return this.m_angularVelocity;
		},
		getGravityScale: function() {
			return this.m_gravityScale;
		},
		setGravityScale: function(gravityScale) {
			this.m_gravityScale = gravityScale;
		},
		applyForce: function(force, point) {
			if (this.m_type !== 2) {
				return;
			}
			if (this.isAwake() === false) {
				this.setAwake(true);
			}
			// m_force.addLocal(force);
			// Vec2 temp = tltemp.get();
			// temp.set(point).subLocal(m_sweep.c);
			// m_torque += Vec2.cross(temp, force);
			this.m_force.x += force.x;
			this.m_force.y += force.y;
			this.m_torque += (point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x;
		},
		applyForceToCenter: function(force) {
			if (this.m_type !== 2) {
				return;
			}
			if (this.isAwake() === false) {
				this.setAwake(true);
			}
			this.m_force.x += force.x;
			this.m_force.y += force.y;
		},
		applyTorque: function(torque) {
			if (this.m_type !== 2) {
				return;
			}
			if (this.isAwake() === false) {
				this.setAwake(true);
			}
			this.m_torque += torque;
		},
		applyLinearImpulse: function(impulse, point) {
			if (this.m_type !== 2) {
				return;
			}
			if (this.isAwake() === false) {
				this.setAwake(true);
			}
			// Vec2 temp = tltemp.get();
			// temp.set(impulse).mulLocal(m_invMass);
			// m_linearVelocity.addLocal(temp);
			//
			// temp.set(point).subLocal(m_sweep.c);
			// m_angularVelocity += m_invI * Vec2.cross(temp, impulse);
			this.m_linearVelocity.x += impulse.x * this.m_invMass;
			this.m_linearVelocity.y += impulse.y * this.m_invMass;
			this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
		},
		applyAngularImpulse: function(impulse) {
			if (this.m_type !== 2) {
				return;
			}
			if (this.isAwake() === false) {
				this.setAwake(true);
			}
			this.m_angularVelocity += this.m_invI * impulse;
		},
		getMass: function() {
			return this.m_mass;
		},
		getInertia: function() {
			return this.m_I + this.m_mass * (this.m_sweep.localCenter.x * this.m_sweep.localCenter.x + this.m_sweep.localCenter.y * this.m_sweep.localCenter.y);
		},
		getMassData: function(data) {
			// data.mass = m_mass;
			// data.I = m_I + m_mass * Vec2.dot(m_sweep.localCenter, m_sweep.localCenter);
			// data.center.set(m_sweep.localCenter);
			data.mass = this.m_mass;
			data.i = this.m_I + this.m_mass * (this.m_sweep.localCenter.x * this.m_sweep.localCenter.x + this.m_sweep.localCenter.y * this.m_sweep.localCenter.y);
			data.center.x = this.m_sweep.localCenter.x;
			data.center.y = this.m_sweep.localCenter.y;
		},
		setMassData: function(massData) {
			// TODO_ERIN adjust linear velocity and torque to account for movement of center.
			if (this.m_world.isLocked()) {
				return;
			}
			if (this.m_type !== 2) {
				return;
			}
			this.m_invMass = 0;
			this.m_I = 0;
			this.m_invI = 0;
			this.m_mass = massData.mass;
			if (this.m_mass <= 0) {
				this.m_mass = 1;
			}
			this.m_invMass = 1 / this.m_mass;
			if (massData.i > 0 && (this.m_flags & $org_jbox2d_dynamics_Body.e_fixedRotationFlag) === 0) {
				this.m_I = massData.i - this.m_mass * $org_jbox2d_common_Vec2.dot(massData.center, massData.center);
				this.m_invI = 1 / this.m_I;
			}
			var oldCenter = this.m_world.getPool().popVec2();
			// Move center of mass.
			oldCenter.set(this.m_sweep.c);
			this.m_sweep.localCenter.set(massData.center);
			// m_sweep.c0 = m_sweep.c = Mul(m_xf, m_sweep.localCenter);
			$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c0);
			this.m_sweep.c.set(this.m_sweep.c0);
			// Update center of mass velocity.
			// m_linearVelocity += Cross(m_angularVelocity, m_sweep.c - oldCenter);
			var temp = this.m_world.getPool().popVec2();
			temp.set(this.m_sweep.c).subLocal(oldCenter);
			$org_jbox2d_common_Vec2.crossToOut(this.m_angularVelocity, temp, temp);
			this.m_linearVelocity.addLocal(temp);
			this.m_world.getPool().pushVec2(2);
		},
		resetMassData: function() {
			// Compute mass data from shapes. Each shape has its own density.
			this.m_mass = 0;
			this.m_invMass = 0;
			this.m_I = 0;
			this.m_invI = 0;
			this.m_sweep.localCenter.setZero();
			// Static and kinematic bodies have zero mass.
			if (this.m_type === 0 || this.m_type === 1) {
				// m_sweep.c0 = m_sweep.c = m_xf.position;
				this.m_sweep.c0.set(this.m_xf.p);
				this.m_sweep.c.set(this.m_xf.p);
				this.m_sweep.a0 = this.m_sweep.a;
				return;
			}
			// Accumulate mass over all fixtures.
			var localCenter = this.m_world.getPool().popVec2();
			localCenter.setZero();
			var temp = this.m_world.getPool().popVec2();
			var massData = this.$pmd;
			for (var f = this.m_fixtureList; ss.isValue(f); f = f.m_next) {
				if (f.m_density === 0) {
					continue;
				}
				f.getMassData(massData);
				this.m_mass += massData.mass;
				// center += massData.mass * massData.center;
				temp.set(massData.center).mulLocal(massData.mass);
				localCenter.addLocal(temp);
				this.m_I += massData.i;
			}
			// Compute center of mass.
			if (this.m_mass > 0) {
				this.m_invMass = 1 / this.m_mass;
				localCenter.mulLocal(this.m_invMass);
			}
			else {
				// Force all dynamic bodies to have a positive mass.
				this.m_mass = 1;
				this.m_invMass = 1;
			}
			if (this.m_I > 0 && (this.m_flags & $org_jbox2d_dynamics_Body.e_fixedRotationFlag) === 0) {
				// Center the inertia about the center of mass.
				this.m_I -= this.m_mass * $org_jbox2d_common_Vec2.dot(localCenter, localCenter);
				this.m_invI = 1 / this.m_I;
			}
			else {
				this.m_I = 0;
				this.m_invI = 0;
			}
			var oldCenter = this.m_world.getPool().popVec2();
			// Move center of mass.
			oldCenter.set(this.m_sweep.c);
			this.m_sweep.localCenter.set(localCenter);
			// m_sweep.c0 = m_sweep.c = Mul(m_xf, m_sweep.localCenter);
			$org_jbox2d_common_Transform.mulToOutUnsafe$1(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c0);
			this.m_sweep.c.set(this.m_sweep.c0);
			// Update center of mass velocity.
			// m_linearVelocity += Cross(m_angularVelocity, m_sweep.c - oldCenter);
			temp.set(this.m_sweep.c).subLocal(oldCenter);
			var temp2 = oldCenter;
			$org_jbox2d_common_Vec2.crossToOutUnsafe(this.m_angularVelocity, temp, temp2);
			this.m_linearVelocity.addLocal(temp2);
			this.m_world.getPool().pushVec2(3);
		},
		getWorldPoint: function(localPoint) {
			var v = new $org_jbox2d_common_Vec2();
			this.getWorldPointToOut(localPoint, v);
			return v;
		},
		getWorldPointToOut: function(localPoint, out_) {
			$org_jbox2d_common_Transform.mulToOut$1(this.m_xf, localPoint, out_);
		},
		getWorldVector: function(localVector) {
			var out_ = new $org_jbox2d_common_Vec2();
			this.getWorldVectorToOut(localVector, out_);
			return out_;
		},
		getWorldVectorToOut: function(localVector, out_) {
			$org_jbox2d_common_Rot.mulToOut(this.m_xf.q, localVector, out_);
		},
		getWorldVectorToOutUnsafe: function(localVector, out_) {
			$org_jbox2d_common_Rot.mulToOutUnsafe(this.m_xf.q, localVector, out_);
		},
		getLocalPoint: function(worldPoint) {
			var out_ = new $org_jbox2d_common_Vec2();
			this.getLocalPointToOut(worldPoint, out_);
			return out_;
		},
		getLocalPointToOut: function(worldPoint, out_) {
			$org_jbox2d_common_Transform.mulTransToOut$1(this.m_xf, worldPoint, out_);
		},
		getLocalVector: function(worldVector) {
			var out_ = new $org_jbox2d_common_Vec2();
			this.getLocalVectorToOut(worldVector, out_);
			return out_;
		},
		getLocalVectorToOut: function(worldVector, out_) {
			$org_jbox2d_common_Rot.mulTrans$1(this.m_xf.q, worldVector, out_);
		},
		getLocalVectorToOutUnsafe: function(worldVector, out_) {
			$org_jbox2d_common_Rot.mulTransUnsafe$1(this.m_xf.q, worldVector, out_);
		},
		getLinearVelocityFromWorldPoint: function(worldPoint) {
			var out_ = new $org_jbox2d_common_Vec2();
			this.getLinearVelocityFromWorldPointToOut(worldPoint, out_);
			return out_;
		},
		getLinearVelocityFromWorldPointToOut: function(worldPoint, out_) {
			out_.set(worldPoint).subLocal(this.m_sweep.c);
			$org_jbox2d_common_Vec2.crossToOut(this.m_angularVelocity, out_, out_);
			out_.addLocal(this.m_linearVelocity);
		},
		getLinearVelocityFromLocalPoint: function(localPoint) {
			var out_ = new $org_jbox2d_common_Vec2();
			this.getLinearVelocityFromLocalPointToOut(localPoint, out_);
			return out_;
		},
		getLinearVelocityFromLocalPointToOut: function(localPoint, out_) {
			this.getWorldPointToOut(localPoint, out_);
			this.getLinearVelocityFromWorldPointToOut(out_, out_);
		},
		getLinearDamping: function() {
			return this.m_linearDamping;
		},
		setLinearDamping: function(linearDamping) {
			this.m_linearDamping = linearDamping;
		},
		getAngularDamping: function() {
			return this.m_angularDamping;
		},
		setAngularDamping: function(angularDamping) {
			this.m_angularDamping = angularDamping;
		},
		getType: function() {
			return this.m_type;
		},
		setType: function(type) {
			if (this.m_world.isLocked()) {
				return;
			}
			if (this.m_type === type) {
				return;
			}
			this.m_type = type;
			this.resetMassData();
			if (this.m_type === 0) {
				this.m_linearVelocity.setZero();
				this.m_angularVelocity = 0;
				this.m_sweep.a0 = this.m_sweep.a;
				this.m_sweep.c0.set(this.m_sweep.c);
				this.synchronizeFixtures();
			}
			this.setAwake(true);
			this.m_force.setZero();
			this.m_torque = 0;
			// Delete the attached contacts.
			var ce = this.m_contactList;
			while (ss.isValue(ce)) {
				var ce0 = ce;
				ce = ce.next;
				this.m_world.m_contactManager.destroy(ce0.contact);
			}
			this.m_contactList = null;
			// Touch the proxies so that new contacts will be created (when appropriate)
			var broadPhase = this.m_world.m_contactManager.m_broadPhase;
			for (var f = this.m_fixtureList; ss.isValue(f); f = f.m_next) {
				var proxyCount = f.m_proxyCount;
				for (var i = 0; i < proxyCount; ++i) {
					broadPhase.touchProxy(f.m_proxies[i].proxyId);
				}
			}
		},
		isBullet: function() {
			return (this.m_flags & $org_jbox2d_dynamics_Body.e_bulletFlag) === $org_jbox2d_dynamics_Body.e_bulletFlag;
		},
		setBullet: function(flag) {
			if (flag) {
				this.m_flags |= $org_jbox2d_dynamics_Body.e_bulletFlag;
			}
			else {
				this.m_flags &= ~$org_jbox2d_dynamics_Body.e_bulletFlag;
			}
		},
		setSleepingAllowed: function(flag) {
			if (flag) {
				this.m_flags |= $org_jbox2d_dynamics_Body.e_autoSleepFlag;
			}
			else {
				this.m_flags &= ~$org_jbox2d_dynamics_Body.e_autoSleepFlag;
				this.setAwake(true);
			}
		},
		isSleepingAllowed: function() {
			return (this.m_flags & $org_jbox2d_dynamics_Body.e_autoSleepFlag) === $org_jbox2d_dynamics_Body.e_autoSleepFlag;
		},
		setAwake: function(flag) {
			if (flag) {
				if ((this.m_flags & $org_jbox2d_dynamics_Body.e_awakeFlag) === 0) {
					this.m_flags |= $org_jbox2d_dynamics_Body.e_awakeFlag;
					this.m_sleepTime = 0;
				}
			}
			else {
				this.m_flags &= ~$org_jbox2d_dynamics_Body.e_awakeFlag;
				this.m_sleepTime = 0;
				this.m_linearVelocity.setZero();
				this.m_angularVelocity = 0;
				this.m_force.setZero();
				this.m_torque = 0;
			}
		},
		isAwake: function() {
			return (this.m_flags & $org_jbox2d_dynamics_Body.e_awakeFlag) === $org_jbox2d_dynamics_Body.e_awakeFlag;
		},
		setActive: function(flag) {
			if (flag === this.isActive()) {
				return;
			}
			if (flag) {
				this.m_flags |= $org_jbox2d_dynamics_Body.e_activeFlag;
				// Create all proxies.
				var broadPhase = this.m_world.m_contactManager.m_broadPhase;
				for (var f = this.m_fixtureList; ss.isValue(f); f = f.m_next) {
					f.createProxies(broadPhase, this.m_xf);
				}
				// Contacts are created the next time step.
			}
			else {
				this.m_flags &= ~$org_jbox2d_dynamics_Body.e_activeFlag;
				// Destroy all proxies.
				var broadPhase1 = this.m_world.m_contactManager.m_broadPhase;
				for (var f1 = this.m_fixtureList; ss.isValue(f1); f1 = f1.m_next) {
					f1.destroyProxies(broadPhase1);
				}
				// Destroy the attached contacts.
				var ce = this.m_contactList;
				while (ss.isValue(ce)) {
					var ce0 = ce;
					ce = ce.next;
					this.m_world.m_contactManager.destroy(ce0.contact);
				}
				this.m_contactList = null;
			}
		},
		isActive: function() {
			return (this.m_flags & $org_jbox2d_dynamics_Body.e_activeFlag) === $org_jbox2d_dynamics_Body.e_activeFlag;
		},
		setFixedRotation: function(flag) {
			if (flag) {
				this.m_flags |= $org_jbox2d_dynamics_Body.e_fixedRotationFlag;
			}
			else {
				this.m_flags &= ~$org_jbox2d_dynamics_Body.e_fixedRotationFlag;
			}
			this.resetMassData();
		},
		isFixedRotation: function() {
			return (this.m_flags & $org_jbox2d_dynamics_Body.e_fixedRotationFlag) === $org_jbox2d_dynamics_Body.e_fixedRotationFlag;
		},
		getFixtureList: function() {
			return this.m_fixtureList;
		},
		getJointList: function() {
			return this.m_jointList;
		},
		getContactList: function() {
			return this.m_contactList;
		},
		getNext: function() {
			return this.m_next;
		},
		getUserData: function() {
			return this.m_userData;
		},
		setUserData: function(data) {
			this.m_userData = data;
		},
		getWorld: function() {
			return this.m_world;
		},
		synchronizeFixtures: function() {
			var xf1 = this.$pxf;
			// xf1.position = m_sweep.c0 - Mul(xf1.R, m_sweep.localCenter);
			// xf1.q.set(m_sweep.a0);
			// Rot.mulToOutUnsafe(xf1.q, m_sweep.localCenter, xf1.p);
			// xf1.p.mulLocal(-1).addLocal(m_sweep.c0);
			// inlined:
			xf1.q.s = $org_jbox2d_common_MathUtils.sin(this.m_sweep.a0);
			xf1.q.c = $org_jbox2d_common_MathUtils.cos(this.m_sweep.a0);
			xf1.p.x = this.m_sweep.c0.x - xf1.q.c * this.m_sweep.localCenter.x + xf1.q.s * this.m_sweep.localCenter.y;
			xf1.p.y = this.m_sweep.c0.y - xf1.q.s * this.m_sweep.localCenter.x - xf1.q.c * this.m_sweep.localCenter.y;
			// end inline
			for (var f = this.m_fixtureList; ss.isValue(f); f = f.m_next) {
				f.synchronize(this.m_world.m_contactManager.m_broadPhase, xf1, this.m_xf);
			}
		},
		synchronizeTransform: function() {
			// m_xf.q.set(m_sweep.a);
			//
			// // m_xf.position = m_sweep.c - Mul(m_xf.R, m_sweep.localCenter);
			// Rot.mulToOutUnsafe(m_xf.q, m_sweep.localCenter, m_xf.p);
			// m_xf.p.mulLocal(-1).addLocal(m_sweep.c);
			//
			this.m_xf.q.s = $org_jbox2d_common_MathUtils.sin(this.m_sweep.a);
			this.m_xf.q.c = $org_jbox2d_common_MathUtils.cos(this.m_sweep.a);
			var q = this.m_xf.q;
			var v = this.m_sweep.localCenter;
			this.m_xf.p.x = this.m_sweep.c.x - q.c * v.x + q.s * v.y;
			this.m_xf.p.y = this.m_sweep.c.y - q.s * v.x - q.c * v.y;
		},
		shouldCollide: function(other) {
			// At least one body should be dynamic.
			if (this.m_type !== 2 && other.m_type !== 2) {
				return false;
			}
			// Does a joint prevent collision?
			for (var jn = this.m_jointList; ss.isValue(jn); jn = jn.next) {
				if (ss.referenceEquals(jn.other, other)) {
					if (jn.joint.getCollideConnected() === false) {
						return false;
					}
				}
			}
			return true;
		},
		advance: function(t) {
			// Advance to the new safe time. This doesn't sync the broad-phase.
			this.m_sweep.advance(t);
			this.m_sweep.c.set(this.m_sweep.c0);
			this.m_sweep.a = this.m_sweep.a0;
			this.m_xf.q.set(this.m_sweep.a);
			// m_xf.position = m_sweep.c - Mul(m_xf.R, m_sweep.localCenter);
			$org_jbox2d_common_Rot.mulToOutUnsafe(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
			this.m_xf.p.mulLocal(-1).addLocal(this.m_sweep.c);
		}
	});
	ss.initClass($org_jbox2d_dynamics_BodyDef, {});
	ss.initEnum($org_jbox2d_dynamics_BodyType, { STATIC: 0, KINEMATIC: 1, DYNAMIC: 2 });
	ss.initClass($org_jbox2d_dynamics_ContactManager, {
		addPair: function(proxyUserDataA, proxyUserDataB) {
			var proxyA = ss.cast(proxyUserDataA, $org_jbox2d_dynamics_FixtureProxy);
			var proxyB = ss.cast(proxyUserDataB, $org_jbox2d_dynamics_FixtureProxy);
			var fixtureA = proxyA.fixture;
			var fixtureB = proxyB.fixture;
			var indexA = proxyA.childIndex;
			var indexB = proxyB.childIndex;
			var bodyA = fixtureA.getBody();
			var bodyB = fixtureB.getBody();
			// Are the fixtures on the same body?
			if (ss.referenceEquals(bodyA, bodyB)) {
				return;
			}
			// TODO_ERIN use a hash table to remove a potential bottleneck when both
			// bodies have a lot of contacts.
			// Does a contact already exist?
			var edge = bodyB.getContactList();
			while (ss.isValue(edge)) {
				if (ss.referenceEquals(edge.other, bodyA)) {
					var fA = edge.contact.getFixtureA();
					var fB = edge.contact.getFixtureB();
					var iA = edge.contact.getChildIndexA();
					var iB = edge.contact.getChildIndexB();
					if (ss.referenceEquals(fA, fixtureA) && iA === indexA && ss.referenceEquals(fB, fixtureB) && iB === indexB) {
						// A contact already exists.
						return;
					}
					if (ss.referenceEquals(fA, fixtureB) && iA === indexB && ss.referenceEquals(fB, fixtureA) && iB === indexA) {
						// A contact already exists.
						return;
					}
				}
				edge = edge.next;
			}
			// Does a joint override collision? is at least one body dynamic?
			if (bodyB.shouldCollide(bodyA) === false) {
				return;
			}
			// Check user filtering.
			if (ss.isValue(this.m_contactFilter) && this.m_contactFilter.shouldCollide(fixtureA, fixtureB) === false) {
				return;
			}
			// Call the factory.
			var c = this.$pool.popContact(fixtureA, indexA, fixtureB, indexB);
			if (ss.isNullOrUndefined(c)) {
				return;
			}
			// Contact creation may swap fixtures.
			fixtureA = c.getFixtureA();
			fixtureB = c.getFixtureB();
			indexA = c.getChildIndexA();
			indexB = c.getChildIndexB();
			bodyA = fixtureA.getBody();
			bodyB = fixtureB.getBody();
			// Insert into the world.
			c.m_prev = null;
			c.m_next = this.m_contactList;
			if (ss.isValue(this.m_contactList)) {
				this.m_contactList.m_prev = c;
			}
			this.m_contactList = c;
			// Connect to island graph.
			// Connect to body A
			c.m_nodeA.contact = c;
			c.m_nodeA.other = bodyB;
			c.m_nodeA.prev = null;
			c.m_nodeA.next = bodyA.m_contactList;
			if (ss.isValue(bodyA.m_contactList)) {
				bodyA.m_contactList.prev = c.m_nodeA;
			}
			bodyA.m_contactList = c.m_nodeA;
			// Connect to body B
			c.m_nodeB.contact = c;
			c.m_nodeB.other = bodyA;
			c.m_nodeB.prev = null;
			c.m_nodeB.next = bodyB.m_contactList;
			if (ss.isValue(bodyB.m_contactList)) {
				bodyB.m_contactList.prev = c.m_nodeB;
			}
			bodyB.m_contactList = c.m_nodeB;
			// wake up the bodies
			if (!fixtureA.isSensor() && !fixtureB.isSensor()) {
				bodyA.setAwake(true);
				bodyB.setAwake(true);
			}
			++this.m_contactCount;
		},
		findNewContacts: function() {
			this.m_broadPhase.updatePairs(this);
		},
		destroy: function(c) {
			var fixtureA = c.getFixtureA();
			var fixtureB = c.getFixtureB();
			var bodyA = fixtureA.getBody();
			var bodyB = fixtureB.getBody();
			if (ss.isValue(this.m_contactListener) && c.isTouching()) {
				this.m_contactListener.endContact(c);
			}
			// Remove from the world.
			if (ss.isValue(c.m_prev)) {
				c.m_prev.m_next = c.m_next;
			}
			if (ss.isValue(c.m_next)) {
				c.m_next.m_prev = c.m_prev;
			}
			if (ss.referenceEquals(c, this.m_contactList)) {
				this.m_contactList = c.m_next;
			}
			// Remove from body 1
			if (ss.isValue(c.m_nodeA.prev)) {
				c.m_nodeA.prev.next = c.m_nodeA.next;
			}
			if (ss.isValue(c.m_nodeA.next)) {
				c.m_nodeA.next.prev = c.m_nodeA.prev;
			}
			if (ss.referenceEquals(c.m_nodeA, bodyA.m_contactList)) {
				bodyA.m_contactList = c.m_nodeA.next;
			}
			// Remove from body 2
			if (ss.isValue(c.m_nodeB.prev)) {
				c.m_nodeB.prev.next = c.m_nodeB.next;
			}
			if (ss.isValue(c.m_nodeB.next)) {
				c.m_nodeB.next.prev = c.m_nodeB.prev;
			}
			if (ss.referenceEquals(c.m_nodeB, bodyB.m_contactList)) {
				bodyB.m_contactList = c.m_nodeB.next;
			}
			// Call the factory.
			this.$pool.pushContact(c);
			--this.m_contactCount;
		},
		collide: function() {
			// Update awake contacts.
			var c = this.m_contactList;
			while (ss.isValue(c)) {
				var fixtureA = c.getFixtureA();
				var fixtureB = c.getFixtureB();
				var indexA = c.getChildIndexA();
				var indexB = c.getChildIndexB();
				var bodyA = fixtureA.getBody();
				var bodyB = fixtureB.getBody();
				// is this contact flagged for filtering?
				if ((c.m_flags & $org_jbox2d_dynamics_contacts_Contact.filteR_FLAG) === $org_jbox2d_dynamics_contacts_Contact.filteR_FLAG) {
					// Should these bodies collide?
					if (bodyB.shouldCollide(bodyA) === false) {
						var cNuke = c;
						c = cNuke.getNext();
						this.destroy(cNuke);
						continue;
					}
					// Check user filtering.
					if (ss.isValue(this.m_contactFilter) && this.m_contactFilter.shouldCollide(fixtureA, fixtureB) === false) {
						var cNuke1 = c;
						c = cNuke1.getNext();
						this.destroy(cNuke1);
						continue;
					}
					// Clear the filtering flag.
					c.m_flags &= ~$org_jbox2d_dynamics_contacts_Contact.filteR_FLAG;
				}
				var activeA = bodyA.isAwake() && bodyA.m_type !== 0;
				var activeB = bodyB.isAwake() && bodyB.m_type !== 0;
				// At least one body must be awake and it must be dynamic or kinematic.
				if (activeA === false && activeB === false) {
					c = c.getNext();
					continue;
				}
				var proxyIdA = fixtureA.m_proxies[indexA].proxyId;
				var proxyIdB = fixtureB.m_proxies[indexB].proxyId;
				var overlap = this.m_broadPhase.testOverlap(proxyIdA, proxyIdB);
				// Here we destroy contacts that cease to overlap in the broad-phase.
				if (overlap === false) {
					var cNuke2 = c;
					c = cNuke2.getNext();
					this.destroy(cNuke2);
					continue;
				}
				// The contact persists.
				c.update(this.m_contactListener);
				c = c.getNext();
			}
		}
	}, null, [$org_jbox2d_callbacks_PairCallback]);
	ss.initClass($org_jbox2d_dynamics_Filter, {
		set: function(argOther) {
			this.categoryBits = argOther.categoryBits;
			this.maskBits = argOther.maskBits;
			this.groupIndex = argOther.groupIndex;
		}
	});
	ss.initClass($org_jbox2d_dynamics_Fixture, {
		getType: function() {
			return this.m_shape.getType();
		},
		getShape: function() {
			return this.m_shape;
		},
		isSensor: function() {
			return this.m_isSensor;
		},
		setSensor: function(sensor) {
			if (sensor !== this.m_isSensor) {
				this.m_body.setAwake(true);
				this.m_isSensor = sensor;
			}
		},
		setFilterData: function(filter) {
			this.m_filter.set(filter);
			this.refilter();
		},
		getFilterData: function() {
			return this.m_filter;
		},
		refilter: function() {
			if (ss.isNullOrUndefined(this.m_body)) {
				return;
			}
			// Flag associated contacts for filtering.
			var edge = this.m_body.getContactList();
			while (ss.isValue(edge)) {
				var contact = edge.contact;
				var fixtureA = contact.getFixtureA();
				var fixtureB = contact.getFixtureB();
				if (ss.referenceEquals(fixtureA, this) || ss.referenceEquals(fixtureB, this)) {
					contact.flagForFiltering();
				}
				edge = edge.next;
			}
			var world = this.m_body.getWorld();
			if (ss.isNullOrUndefined(world)) {
				return;
			}
			// Touch each proxy so that new pairs may be created
			var broadPhase = world.m_contactManager.m_broadPhase;
			for (var i = 0; i < this.m_proxyCount; ++i) {
				broadPhase.touchProxy(this.m_proxies[i].proxyId);
			}
		},
		getBody: function() {
			return this.m_body;
		},
		getNext: function() {
			return this.m_next;
		},
		setDensity: function(density) {
			this.m_density = density;
		},
		getDensity: function() {
			return this.m_density;
		},
		getUserData: function() {
			return this.m_userData;
		},
		setUserData: function(data) {
			this.m_userData = data;
		},
		testPoint: function(p) {
			return this.m_shape.testPoint(this.m_body.m_xf, p);
		},
		raycast: function(output, input, childIndex) {
			return this.m_shape.raycast(output, input, this.m_body.m_xf, childIndex);
		},
		getMassData: function(massData) {
			this.m_shape.computeMass(massData, this.m_density);
		},
		getFriction: function() {
			return this.m_friction;
		},
		setFriction: function(friction) {
			this.m_friction = friction;
		},
		getRestitution: function() {
			return this.m_restitution;
		},
		setRestitution: function(restitution) {
			this.m_restitution = restitution;
		},
		getAABB: function(childIndex) {
			return this.m_proxies[childIndex].aabb;
		},
		dump: function(bodyIndex) {
		},
		create: function(body, def) {
			this.m_userData = def.userData;
			this.m_friction = def.friction;
			this.m_restitution = def.restitution;
			this.m_body = body;
			this.m_next = null;
			this.m_filter.set(def.filter);
			this.m_isSensor = def.isSensor;
			this.m_shape = def.shape.clone();
			// Reserve proxy space
			var childCount = this.m_shape.getChildCount();
			if (ss.isNullOrUndefined(this.m_proxies)) {
				this.m_proxies = new Array(childCount);
				for (var i = 0; i < childCount; i++) {
					this.m_proxies[i] = new $org_jbox2d_dynamics_FixtureProxy();
					this.m_proxies[i].fixture = null;
					this.m_proxies[i].proxyId = $org_jbox2d_collision_broadphase_BroadPhase.nulL_PROXY;
				}
			}
			if (this.m_proxies.length < childCount) {
				var old = this.m_proxies;
				var newLen = $org_jbox2d_common_MathUtils.max$1(old.length * 2, childCount);
				this.m_proxies = new Array(newLen);
				$org_jbox2d_dynamics_ArrayHelper.copy(old, 0, this.m_proxies, 0, old.length);
				for (var i1 = 0; i1 < newLen; i1++) {
					if (i1 >= old.length) {
						this.m_proxies[i1] = new $org_jbox2d_dynamics_FixtureProxy();
					}
					this.m_proxies[i1].fixture = null;
					this.m_proxies[i1].proxyId = $org_jbox2d_collision_broadphase_BroadPhase.nulL_PROXY;
				}
			}
			this.m_proxyCount = 0;
			this.m_density = def.density;
		},
		destroy: function() {
			// The proxies must be destroyed before calling this.
			// Free the child shape.
			this.m_shape = null;
			this.m_proxies = null;
			this.m_next = null;
			// TODO pool shapes
			// TODO pool fixtures
		},
		createProxies: function(broadPhase, xf) {
			// Create proxies in the broad-phase.
			this.m_proxyCount = this.m_shape.getChildCount();
			for (var i = 0; i < this.m_proxyCount; ++i) {
				var proxy = this.m_proxies[i];
				this.m_shape.computeAABB(proxy.aabb, xf, i);
				proxy.proxyId = broadPhase.createProxy(proxy.aabb, proxy);
				proxy.fixture = this;
				proxy.childIndex = i;
			}
		},
		destroyProxies: function(broadPhase) {
			// Destroy proxies in the broad-phase.
			for (var i = 0; i < this.m_proxyCount; ++i) {
				var proxy = this.m_proxies[i];
				broadPhase.destroyProxy(proxy.proxyId);
				proxy.proxyId = $org_jbox2d_collision_broadphase_BroadPhase.nulL_PROXY;
			}
			this.m_proxyCount = 0;
		},
		synchronize: function(broadPhase, transform1, transform2) {
			if (this.m_proxyCount === 0) {
				return;
			}
			for (var i = 0; i < this.m_proxyCount; ++i) {
				var proxy = this.m_proxies[i];
				// Compute an AABB that covers the swept shape (may miss some rotation effect).
				var aabb1 = this.$pool1;
				var aab = this.$pool2;
				this.m_shape.computeAABB(aabb1, transform1, proxy.childIndex);
				this.m_shape.computeAABB(aab, transform2, proxy.childIndex);
				proxy.aabb.lowerBound.x = ((aabb1.lowerBound.x < aab.lowerBound.x) ? aabb1.lowerBound.x : aab.lowerBound.x);
				proxy.aabb.lowerBound.y = ((aabb1.lowerBound.y < aab.lowerBound.y) ? aabb1.lowerBound.y : aab.lowerBound.y);
				proxy.aabb.upperBound.x = ((aabb1.upperBound.x > aab.upperBound.x) ? aabb1.upperBound.x : aab.upperBound.x);
				proxy.aabb.upperBound.y = ((aabb1.upperBound.y > aab.upperBound.y) ? aabb1.upperBound.y : aab.upperBound.y);
				this.$displacement.x = transform2.p.x - transform1.p.x;
				this.$displacement.y = transform2.p.y - transform1.p.y;
				broadPhase.moveProxy(proxy.proxyId, proxy.aabb, this.$displacement);
			}
		}
	});
	ss.initClass($org_jbox2d_dynamics_FixtureDef, {});
	ss.initClass($org_jbox2d_dynamics_FixtureProxy, {});
	ss.initClass($org_jbox2d_dynamics_Island, {
		init: function(bodyCapacity, contactCapacity, jointCapacity, listener) {
			// System.out.println("Initializing Island");
			this.m_bodyCapacity = bodyCapacity;
			this.m_contactCapacity = contactCapacity;
			this.m_jointCapacity = jointCapacity;
			this.m_bodyCount = 0;
			this.m_contactCount = 0;
			this.m_jointCount = 0;
			this.m_listener = listener;
			if (ss.isNullOrUndefined(this.m_bodies) || this.m_bodyCapacity > this.m_bodies.length) {
				this.m_bodies = new Array(this.m_bodyCapacity);
			}
			if (ss.isNullOrUndefined(this.m_joints) || this.m_jointCapacity > this.m_joints.length) {
				this.m_joints = new Array(this.m_jointCapacity);
			}
			if (ss.isNullOrUndefined(this.m_contacts) || this.m_contactCapacity > this.m_contacts.length) {
				this.m_contacts = new Array(this.m_contactCapacity);
			}
			// dynamic array
			if (ss.isNullOrUndefined(this.m_velocities) || this.m_bodyCapacity > this.m_velocities.length) {
				var old = (ss.isNullOrUndefined(this.m_velocities) ? [] : this.m_velocities);
				this.m_velocities = new Array(this.m_bodyCapacity);
				$org_jbox2d_dynamics_ArrayHelper.copy(old, 0, this.m_velocities, 0, old.length);
				for (var i = old.length; i < this.m_velocities.length; i++) {
					this.m_velocities[i] = new $org_jbox2d_dynamics_contacts_Velocity();
				}
			}
			// dynamic array
			if (ss.isNullOrUndefined(this.m_positions) || this.m_bodyCapacity > this.m_positions.length) {
				var old1 = (ss.isNullOrUndefined(this.m_positions) ? [] : this.m_positions);
				this.m_positions = new Array(this.m_bodyCapacity);
				$org_jbox2d_dynamics_ArrayHelper.copy(old1, 0, this.m_positions, 0, old1.length);
				for (var i1 = old1.length; i1 < this.m_positions.length; i1++) {
					this.m_positions[i1] = new $org_jbox2d_dynamics_contacts_Position();
				}
			}
		},
		clear: function() {
			this.m_bodyCount = 0;
			this.m_contactCount = 0;
			this.m_jointCount = 0;
		},
		solve: function(profile, step, gravity, allowSleep) {
			// System.out.println("Solving Island");
			var h = step.dt;
			// Integrate velocities and apply damping. Initialize the body state.
			for (var i = 0; i < this.m_bodyCount; ++i) {
				var b = this.m_bodies[i];
				var c = b.m_sweep.c;
				var a = b.m_sweep.a;
				var v = b.m_linearVelocity;
				var w = b.m_angularVelocity;
				// Store positions for continuous collision.
				b.m_sweep.c0.set(b.m_sweep.c);
				b.m_sweep.a0 = b.m_sweep.a;
				if (b.m_type === 2) {
					// Integrate velocities.
					// v += h * (b.m_gravityScale * gravity + b.m_invMass * b.m_force);
					v.x += h * (b.m_gravityScale * gravity.x + b.m_invMass * b.m_force.x);
					v.y += h * (b.m_gravityScale * gravity.y + b.m_invMass * b.m_force.y);
					w += h * b.m_invI * b.m_torque;
					// Apply damping.
					// ODE: dv/dt + c * v = 0
					// Solution: v(t) = v0 * exp(-c * t)
					// Time step: v(t + dt) = v0 * exp(-c * (t + dt)) = v0 * exp(-c * t) * exp(-c * dt) = v *
					// exp(-c * dt)
					// v2 = exp(-c * dt) * v1
					// Taylor expansion:
					// v2 = (1.0d - c * dt) * v1
					var a1 = $org_jbox2d_common_MathUtils.clamp(1 - h * b.m_linearDamping, 0, 1);
					v.x *= a1;
					v.y *= a1;
					w *= $org_jbox2d_common_MathUtils.clamp(1 - h * b.m_angularDamping, 0, 1);
				}
				this.m_positions[i].c.x = c.x;
				this.m_positions[i].c.y = c.y;
				this.m_positions[i].a = a;
				this.m_velocities[i].v.x = v.x;
				this.m_velocities[i].v.y = v.y;
				this.m_velocities[i].w = w;
			}
			this.$timer.reset();
			// Solver data
			this.$solverData.step = step;
			this.$solverData.positions = this.m_positions;
			this.$solverData.velocities = this.m_velocities;
			// Initialize velocity constraints.
			this.$solverDef.step = step;
			this.$solverDef.contacts = this.m_contacts;
			this.$solverDef.count = this.m_contactCount;
			this.$solverDef.positions = this.m_positions;
			this.$solverDef.velocities = this.m_velocities;
			this.$contactSolver.init(this.$solverDef);
			// System.out.println("island init vel");
			this.$contactSolver.initializeVelocityConstraints();
			if (step.warmStarting) {
				// System.out.println("island warm start");
				this.$contactSolver.warmStart();
			}
			for (var i1 = 0; i1 < this.m_jointCount; ++i1) {
				this.m_joints[i1].initVelocityConstraints(this.$solverData);
			}
			profile.solveInit = this.$timer.getMilliseconds();
			// Solve velocity constraints
			this.$timer.reset();
			// System.out.println("island solving velocities");
			for (var i2 = 0; i2 < step.velocityIterations; ++i2) {
				for (var j = 0; j < this.m_jointCount; ++j) {
					this.m_joints[j].solveVelocityConstraints(this.$solverData);
				}
				this.$contactSolver.solveVelocityConstraints();
			}
			// Store impulses for warm starting
			this.$contactSolver.storeImpulses();
			profile.solveVelocity = this.$timer.getMilliseconds();
			// Integrate positions
			for (var i3 = 0; i3 < this.m_bodyCount; ++i3) {
				var c1 = this.m_positions[i3].c;
				var a2 = this.m_positions[i3].a;
				var v1 = this.m_velocities[i3].v;
				var w1 = this.m_velocities[i3].w;
				// Check for large velocities
				var translationx = v1.x * h;
				var translationy = v1.y * h;
				if (translationx * translationx + translationy * translationy > $org_jbox2d_common_Settings.maxTranslationSquared) {
					var ratio = $org_jbox2d_common_Settings.maxTranslation / $org_jbox2d_common_MathUtils.sqrt(translationx * translationx + translationy * translationy);
					v1.x *= ratio;
					v1.y *= ratio;
				}
				var rotation = h * w1;
				if (rotation * rotation > $org_jbox2d_common_Settings.maxRotationSquared) {
					var ratio1 = $org_jbox2d_common_Settings.maxRotation / $org_jbox2d_common_MathUtils.abs(rotation);
					w1 *= ratio1;
				}
				// Integrate
				c1.x += h * v1.x;
				c1.y += h * v1.y;
				a2 += h * w1;
				this.m_positions[i3].a = a2;
				this.m_velocities[i3].w = w1;
			}
			// Solve position constraints
			this.$timer.reset();
			var positionSolved = false;
			for (var i4 = 0; i4 < step.positionIterations; ++i4) {
				var contactsOkay = this.$contactSolver.solvePositionConstraints();
				var jointsOkay = true;
				for (var j1 = 0; j1 < this.m_jointCount; ++j1) {
					var jointOkay = this.m_joints[j1].solvePositionConstraints(this.$solverData);
					jointsOkay = jointsOkay && jointOkay;
				}
				if (contactsOkay && jointsOkay) {
					// Exit early if the position errors are small.
					positionSolved = true;
					break;
				}
			}
			// Copy state buffers back to the bodies
			for (var i5 = 0; i5 < this.m_bodyCount; ++i5) {
				var body = this.m_bodies[i5];
				body.m_sweep.c.x = this.m_positions[i5].c.x;
				body.m_sweep.c.y = this.m_positions[i5].c.y;
				body.m_sweep.a = this.m_positions[i5].a;
				body.m_linearVelocity.x = this.m_velocities[i5].v.x;
				body.m_linearVelocity.y = this.m_velocities[i5].v.y;
				body.m_angularVelocity = this.m_velocities[i5].w;
				body.synchronizeTransform();
			}
			profile.solvePosition = this.$timer.getMilliseconds();
			this.report(this.$contactSolver.m_velocityConstraints);
			if (allowSleep) {
				var minSleepTime = Number.MAX_VALUE;
				var linTolSqr = $org_jbox2d_common_Settings.linearSleepTolerance * $org_jbox2d_common_Settings.linearSleepTolerance;
				var angTolSqr = $org_jbox2d_common_Settings.angularSleepTolerance * $org_jbox2d_common_Settings.angularSleepTolerance;
				for (var i6 = 0; i6 < this.m_bodyCount; ++i6) {
					var b1 = this.m_bodies[i6];
					if (b1.getType() === 0) {
						continue;
					}
					if ((b1.m_flags & $org_jbox2d_dynamics_Body.e_autoSleepFlag) === 0 || b1.m_angularVelocity * b1.m_angularVelocity > angTolSqr || $org_jbox2d_common_Vec2.dot(b1.m_linearVelocity, b1.m_linearVelocity) > linTolSqr) {
						b1.m_sleepTime = 0;
						minSleepTime = 0;
					}
					else {
						b1.m_sleepTime += h;
						minSleepTime = $org_jbox2d_common_MathUtils.min(minSleepTime, b1.m_sleepTime);
					}
				}
				if (minSleepTime >= $org_jbox2d_common_Settings.timeToSleep && positionSolved) {
					for (var i7 = 0; i7 < this.m_bodyCount; ++i7) {
						var b2 = this.m_bodies[i7];
						b2.setAwake(false);
					}
				}
			}
		},
		solveTOI: function(subStep, toiIndexA, toiIndexB) {
			// Initialize the body state.
			for (var i = 0; i < this.m_bodyCount; ++i) {
				this.m_positions[i].c.x = this.m_bodies[i].m_sweep.c.x;
				this.m_positions[i].c.y = this.m_bodies[i].m_sweep.c.y;
				this.m_positions[i].a = this.m_bodies[i].m_sweep.a;
				this.m_velocities[i].v.x = this.m_bodies[i].m_linearVelocity.x;
				this.m_velocities[i].v.y = this.m_bodies[i].m_linearVelocity.y;
				this.m_velocities[i].w = this.m_bodies[i].m_angularVelocity;
			}
			this.$toiSolverDef.contacts = this.m_contacts;
			this.$toiSolverDef.count = this.m_contactCount;
			this.$toiSolverDef.step = subStep;
			this.$toiSolverDef.positions = this.m_positions;
			this.$toiSolverDef.velocities = this.m_velocities;
			this.$toiContactSolver.init(this.$toiSolverDef);
			// Solve position constraints.
			for (var i1 = 0; i1 < subStep.positionIterations; ++i1) {
				var contactsOkay = this.$toiContactSolver.solveTOIPositionConstraints(toiIndexA, toiIndexB);
				if (contactsOkay) {
					break;
				}
			}
			// #if 0
			// // Is the new position really safe?
			// for (int i = 0; i < m_contactCount; ++i)
			// {
			// Contact* c = m_contacts[i];
			// Fixture* fA = c.GetFixtureA();
			// Fixture* fB = c.GetFixtureB();
			//
			// Body bA = fA.GetBody();
			// Body bB = fB.GetBody();
			//
			// int indexA = c.GetChildIndexA();
			// int indexB = c.GetChildIndexB();
			//
			// DistanceInput input;
			// input.proxyA.Set(fA.GetShape(), indexA);
			// input.proxyB.Set(fB.GetShape(), indexB);
			// input.transformA = bA.GetTransform();
			// input.transformB = bB.GetTransform();
			// input.useRadii = false;
			//
			// DistanceOutput output;
			// SimplexCache cache;
			// cache.count = 0;
			// Distance(&output, &cache, &input);
			//
			// if (output.distance == 0 || cache.count == 3)
			// {
			// cache.count += 0;
			// }
			// }
			// #endif
			// Leap of faith to new safe state.
			this.m_bodies[toiIndexA].m_sweep.c0.x = this.m_positions[toiIndexA].c.x;
			this.m_bodies[toiIndexA].m_sweep.c0.y = this.m_positions[toiIndexA].c.y;
			this.m_bodies[toiIndexA].m_sweep.a0 = this.m_positions[toiIndexA].a;
			this.m_bodies[toiIndexB].m_sweep.c0.set(this.m_positions[toiIndexB].c);
			this.m_bodies[toiIndexB].m_sweep.a0 = this.m_positions[toiIndexB].a;
			// No warm starting is needed for TOI events because warm
			// starting impulses were applied in the discrete solver.
			this.$toiContactSolver.initializeVelocityConstraints();
			// Solve velocity constraints.
			for (var i2 = 0; i2 < subStep.velocityIterations; ++i2) {
				this.$toiContactSolver.solveVelocityConstraints();
			}
			// Don't store the TOI contact forces for warm starting
			// because they can be quite large.
			var h = subStep.dt;
			// Integrate positions
			for (var i3 = 0; i3 < this.m_bodyCount; ++i3) {
				var c = this.m_positions[i3].c;
				var a = this.m_positions[i3].a;
				var v = this.m_velocities[i3].v;
				var w = this.m_velocities[i3].w;
				// Check for large velocities
				var translationx = v.x * h;
				var translationy = v.y * h;
				if (translationx * translationx + translationy * translationy > $org_jbox2d_common_Settings.maxTranslationSquared) {
					var ratio = $org_jbox2d_common_Settings.maxTranslation / $org_jbox2d_common_MathUtils.sqrt(translationx * translationx + translationy * translationy);
					v.mulLocal(ratio);
				}
				var rotation = h * w;
				if (rotation * rotation > $org_jbox2d_common_Settings.maxRotationSquared) {
					var ratio1 = $org_jbox2d_common_Settings.maxRotation / $org_jbox2d_common_MathUtils.abs(rotation);
					w *= ratio1;
				}
				// Integrate
				c.x += v.x * h;
				c.y += v.y * h;
				a += h * w;
				this.m_positions[i3].c.x = c.x;
				this.m_positions[i3].c.y = c.y;
				this.m_positions[i3].a = a;
				this.m_velocities[i3].v.x = v.x;
				this.m_velocities[i3].v.y = v.y;
				this.m_velocities[i3].w = w;
				// Sync bodies
				var body = this.m_bodies[i3];
				body.m_sweep.c.x = c.x;
				body.m_sweep.c.y = c.y;
				body.m_sweep.a = a;
				body.m_linearVelocity.x = v.x;
				body.m_linearVelocity.y = v.y;
				body.m_angularVelocity = w;
				body.synchronizeTransform();
			}
			this.report(this.$toiContactSolver.m_velocityConstraints);
		},
		add: function(body) {
			body.m_islandIndex = this.m_bodyCount;
			this.m_bodies[this.m_bodyCount] = body;
			++this.m_bodyCount;
		},
		add$1: function(contact) {
			this.m_contacts[this.m_contactCount++] = contact;
		},
		add$2: function(joint) {
			this.m_joints[this.m_jointCount++] = joint;
		},
		report: function(constraints) {
			if (ss.isNullOrUndefined(this.m_listener)) {
				return;
			}
			for (var i = 0; i < this.m_contactCount; ++i) {
				var c = this.m_contacts[i];
				var vc = constraints[i];
				this.$impulse.count = vc.pointCount;
				for (var j = 0; j < vc.pointCount; ++j) {
					this.$impulse.normalImpulses[j] = vc.points[j].normalImpulse;
					this.$impulse.tangentImpulses[j] = vc.points[j].tangentImpulse;
				}
				this.m_listener.postSolve(c, this.$impulse);
			}
		}
	});
	ss.initClass($org_jbox2d_dynamics_Profile, {
		toDebugStrings: function(strings) {
			ss.add(strings, 'Profile:');
			ss.add(strings, ' step: ' + this.step);
			ss.add(strings, '  collide: ' + this.collide);
			ss.add(strings, '  solve: ' + this.solve);
			ss.add(strings, '   solveInit: ' + this.solveInit);
			ss.add(strings, '   solveVelocity: ' + this.solveVelocity);
			ss.add(strings, '   solvePosition: ' + this.solvePosition);
			ss.add(strings, '   broadphase: ' + this.broadphase);
			ss.add(strings, '  solveTOI: ' + this.solveTOI);
		}
	});
	ss.initClass($org_jbox2d_dynamics_SolverData, {});
	ss.initClass($org_jbox2d_dynamics_TimeStep, {});
	ss.initClass($org_jbox2d_dynamics_World, {
		setAllowSleep: function(flag) {
			if (flag === this.$m_allowSleep) {
				return;
			}
			this.$m_allowSleep = flag;
			if (this.$m_allowSleep === false) {
				for (var b = this.$m_bodyList; ss.isValue(b); b = b.m_next) {
					b.setAwake(true);
				}
			}
		},
		setSubStepping: function(subStepping) {
			this.$m_subStepping = subStepping;
		},
		isSubStepping: function() {
			return this.$m_subStepping;
		},
		isAllowSleep: function() {
			return this.$m_allowSleep;
		},
		$addType: function(creator, type1, type2) {
			var register = new $org_jbox2d_dynamics_contacts_ContactRegister();
			register.creator = creator;
			register.primary = true;
			ss.arraySet(this.$contactStacks, type1, type2, register);
			if (type1 !== type2) {
				var register2 = new $org_jbox2d_dynamics_contacts_ContactRegister();
				register2.creator = creator;
				register2.primary = false;
				ss.arraySet(this.$contactStacks, type2, type1, register2);
			}
		},
		$initializeRegisters: function() {
			this.$addType(this.$pool.getCircleContactStack(), 0, 0);
			this.$addType(this.$pool.getPolyCircleContactStack(), 2, 0);
			this.$addType(this.$pool.getPolyContactStack(), 2, 2);
			this.$addType(this.$pool.getEdgeCircleContactStack(), 1, 0);
			this.$addType(this.$pool.getEdgePolyContactStack(), 1, 2);
			this.$addType(this.$pool.getChainCircleContactStack(), 3, 0);
			this.$addType(this.$pool.getChainPolyContactStack(), 3, 2);
		},
		popContact: function(fixtureA, indexA, fixtureB, indexB) {
			var type1 = fixtureA.getType();
			var type2 = fixtureB.getType();
			var reg = ss.arrayGet(this.$contactStacks, type1, type2);
			var creator = reg.creator;
			if (ss.isValue(creator)) {
				if (reg.primary) {
					var c = creator.pop();
					c.init(fixtureA, indexA, fixtureB, indexB);
					return c;
				}
				else {
					var c1 = creator.pop();
					c1.init(fixtureB, indexB, fixtureA, indexA);
					return c1;
				}
			}
			return null;
		},
		pushContact: function(contact) {
			var fixtureA = contact.getFixtureA();
			var fixtureB = contact.getFixtureB();
			if (contact.m_manifold.pointCount > 0 && !fixtureA.isSensor() && !fixtureB.isSensor()) {
				fixtureA.getBody().setAwake(true);
				fixtureB.getBody().setAwake(true);
			}
			var type1 = fixtureA.getType();
			var type2 = fixtureB.getType();
			var creator = ss.arrayGet(this.$contactStacks, type1, type2).creator;
			creator.push(contact);
		},
		getPool: function() {
			return this.$pool;
		},
		setDestructionListener: function(listener) {
			this.$m_destructionListener = listener;
		},
		setContactFilter: function(filter) {
			this.m_contactManager.m_contactFilter = filter;
		},
		setContactListener: function(listener) {
			this.m_contactManager.m_contactListener = listener;
		},
		setDebugDraw: function(debugDraw) {
			this.$m_debugDraw = debugDraw;
		},
		createBody: function(def) {
			if (this.isLocked()) {
				return null;
			}
			// TODO djm pooling
			var b = new $org_jbox2d_dynamics_Body(def, this);
			// add to world doubly linked list
			b.m_prev = null;
			b.m_next = this.$m_bodyList;
			if (ss.isValue(this.$m_bodyList)) {
				this.$m_bodyList.m_prev = b;
			}
			this.$m_bodyList = b;
			++this.$m_bodyCount;
			return b;
		},
		destroyBody: function(body) {
			if (this.isLocked()) {
				return;
			}
			// Delete the attached joints.
			var je = body.m_jointList;
			while (ss.isValue(je)) {
				var je0 = je;
				je = je.next;
				if (ss.isValue(this.$m_destructionListener)) {
					this.$m_destructionListener.sayGoodbye$1(je0.joint);
				}
				this.destroyJoint(je0.joint);
				body.m_jointList = je;
			}
			body.m_jointList = null;
			// Delete the attached contacts.
			var ce = body.m_contactList;
			while (ss.isValue(ce)) {
				var ce0 = ce;
				ce = ce.next;
				this.m_contactManager.destroy(ce0.contact);
			}
			body.m_contactList = null;
			var f = body.m_fixtureList;
			while (ss.isValue(f)) {
				var f0 = f;
				f = f.m_next;
				if (ss.isValue(this.$m_destructionListener)) {
					this.$m_destructionListener.sayGoodbye(f0);
				}
				f0.destroyProxies(this.m_contactManager.m_broadPhase);
				f0.destroy();
				// TODO djm recycle fixtures (here or in that destroy method)
				body.m_fixtureList = f;
				body.m_fixtureCount -= 1;
			}
			body.m_fixtureList = null;
			body.m_fixtureCount = 0;
			// Remove world body list.
			if (ss.isValue(body.m_prev)) {
				body.m_prev.m_next = body.m_next;
			}
			if (ss.isValue(body.m_next)) {
				body.m_next.m_prev = body.m_prev;
			}
			if (ss.referenceEquals(body, this.$m_bodyList)) {
				this.$m_bodyList = body.m_next;
			}
			--this.$m_bodyCount;
			// TODO djm recycle body
		},
		createJoint: function(def) {
			if (this.isLocked()) {
				return null;
			}
			var j = $org_jbox2d_dynamics_joints_Joint.create(this, def);
			// Connect to the world list.
			j.m_prev = null;
			j.m_next = this.$m_jointList;
			if (ss.isValue(this.$m_jointList)) {
				this.$m_jointList.m_prev = j;
			}
			this.$m_jointList = j;
			++this.$m_jointCount;
			// Connect to the bodies' doubly linked lists.
			j.m_edgeA.joint = j;
			j.m_edgeA.other = j.getBodyB();
			j.m_edgeA.prev = null;
			j.m_edgeA.next = j.getBodyA().m_jointList;
			if (ss.isValue(j.getBodyA().m_jointList)) {
				j.getBodyA().m_jointList.prev = j.m_edgeA;
			}
			j.getBodyA().m_jointList = j.m_edgeA;
			j.m_edgeB.joint = j;
			j.m_edgeB.other = j.getBodyA();
			j.m_edgeB.prev = null;
			j.m_edgeB.next = j.getBodyB().m_jointList;
			if (ss.isValue(j.getBodyB().m_jointList)) {
				j.getBodyB().m_jointList.prev = j.m_edgeB;
			}
			j.getBodyB().m_jointList = j.m_edgeB;
			var bodyA = def.bodyA;
			var bodyB = def.bodyB;
			// If the joint prevents collisions, then flag any contacts for filtering.
			if (def.collideConnected === false) {
				var edge = bodyB.getContactList();
				while (ss.isValue(edge)) {
					if (ss.referenceEquals(edge.other, bodyA)) {
						// Flag the contact for filtering at the next time step (where either
						// body is awake).
						edge.contact.flagForFiltering();
					}
					edge = edge.next;
				}
			}
			// Note: creating a joint doesn't wake the bodies.
			return j;
		},
		destroyJoint: function(j) {
			if (this.isLocked()) {
				return;
			}
			var collideConnected = j.getCollideConnected();
			// Remove from the doubly linked list.
			if (ss.isValue(j.m_prev)) {
				j.m_prev.m_next = j.m_next;
			}
			if (ss.isValue(j.m_next)) {
				j.m_next.m_prev = j.m_prev;
			}
			if (ss.referenceEquals(j, this.$m_jointList)) {
				this.$m_jointList = j.m_next;
			}
			// Disconnect from island graph.
			var bodyA = j.getBodyA();
			var bodyB = j.getBodyB();
			// Wake up connected bodies.
			bodyA.setAwake(true);
			bodyB.setAwake(true);
			// Remove from body 1.
			if (ss.isValue(j.m_edgeA.prev)) {
				j.m_edgeA.prev.next = j.m_edgeA.next;
			}
			if (ss.isValue(j.m_edgeA.next)) {
				j.m_edgeA.next.prev = j.m_edgeA.prev;
			}
			if (ss.referenceEquals(j.m_edgeA, bodyA.m_jointList)) {
				bodyA.m_jointList = j.m_edgeA.next;
			}
			j.m_edgeA.prev = null;
			j.m_edgeA.next = null;
			// Remove from body 2
			if (ss.isValue(j.m_edgeB.prev)) {
				j.m_edgeB.prev.next = j.m_edgeB.next;
			}
			if (ss.isValue(j.m_edgeB.next)) {
				j.m_edgeB.next.prev = j.m_edgeB.prev;
			}
			if (ss.referenceEquals(j.m_edgeB, bodyB.m_jointList)) {
				bodyB.m_jointList = j.m_edgeB.next;
			}
			j.m_edgeB.prev = null;
			j.m_edgeB.next = null;
			$org_jbox2d_dynamics_joints_Joint.destroy(j);
			--this.$m_jointCount;
			// If the joint prevents collisions, then flag any contacts for filtering.
			if (collideConnected === false) {
				var edge = bodyB.getContactList();
				while (ss.isValue(edge)) {
					if (ss.referenceEquals(edge.other, bodyA)) {
						// Flag the contact for filtering at the next time step (where either
						// body is awake).
						edge.contact.flagForFiltering();
					}
					edge = edge.next;
				}
			}
		},
		step: function(dt, velocityIterations, positionIterations) {
			this.$stepTimer.reset();
			// log.debug("Starting step");
			// If new fixtures were added, we need to find the new contacts.
			if ((this.m_flags & $org_jbox2d_dynamics_World.neW_FIXTURE) === $org_jbox2d_dynamics_World.neW_FIXTURE) {
				// log.debug("There's a new fixture, lets look for new contacts");
				this.m_contactManager.findNewContacts();
				this.m_flags &= ~$org_jbox2d_dynamics_World.neW_FIXTURE;
			}
			this.m_flags |= $org_jbox2d_dynamics_World.LOCKED;
			this.$timeStep.dt = dt;
			this.$timeStep.velocityIterations = velocityIterations;
			this.$timeStep.positionIterations = positionIterations;
			if (dt > 0) {
				this.$timeStep.inv_dt = 1 / dt;
			}
			else {
				this.$timeStep.inv_dt = 0;
			}
			this.$timeStep.dtRatio = this.$m_inv_dt0 * dt;
			this.$timeStep.warmStarting = this.$m_warmStarting;
			// Update contacts. This is where some contacts are destroyed.
			this.$tempTimer.reset();
			this.m_contactManager.collide();
			this.$m_profile.collide = this.$tempTimer.getMilliseconds();
			// Integrate velocities, solve velocity constraints, and integrate positions.
			if (this.$m_stepComplete && this.$timeStep.dt > 0) {
				this.$tempTimer.reset();
				this.$solve(this.$timeStep);
				this.$m_profile.solve = this.$tempTimer.getMilliseconds();
			}
			// Handle TOI events.
			if (this.$m_continuousPhysics && this.$timeStep.dt > 0) {
				this.$tempTimer.reset();
				this.$solveTOI(this.$timeStep);
				this.$m_profile.solveTOI = this.$tempTimer.getMilliseconds();
			}
			if (this.$timeStep.dt > 0) {
				this.$m_inv_dt0 = this.$timeStep.inv_dt;
			}
			if ((this.m_flags & $org_jbox2d_dynamics_World.cleaR_FORCES) === $org_jbox2d_dynamics_World.cleaR_FORCES) {
				this.clearForces();
			}
			this.m_flags &= ~$org_jbox2d_dynamics_World.LOCKED;
			// log.debug("ending step");
			this.$m_profile.step = this.$stepTimer.getMilliseconds();
		},
		clearForces: function() {
			for (var body = this.$m_bodyList; ss.isValue(body); body = body.getNext()) {
				body.m_force.setZero();
				body.m_torque = 0;
			}
		},
		drawDebugData: function() {
			if (ss.isNullOrUndefined(this.$m_debugDraw)) {
				return;
			}
			var flags = this.$m_debugDraw.getFlags();
			if ((flags & $org_jbox2d_callbacks_DebugDraw.e_shapeBit) === $org_jbox2d_callbacks_DebugDraw.e_shapeBit) {
				for (var b = this.$m_bodyList; ss.isValue(b); b = b.getNext()) {
					this.$xf.set(b.getTransform());
					for (var f = b.getFixtureList(); ss.isValue(f); f = f.getNext()) {
						if (b.isActive() === false) {
							this.$color.set$1(0.5, 0.5, 0.3);
							this.$drawShape(f, this.$xf, this.$color);
						}
						else if (b.getType() === 0) {
							this.$color.set$1(0.5, 0.9, 0.3);
							this.$drawShape(f, this.$xf, this.$color);
						}
						else if (b.getType() === 1) {
							this.$color.set$1(0.5, 0.5, 0.9);
							this.$drawShape(f, this.$xf, this.$color);
						}
						else if (b.isAwake() === false) {
							this.$color.set$1(0.5, 0.5, 0.5);
							this.$drawShape(f, this.$xf, this.$color);
						}
						else {
							this.$color.set$1(0.9, 0.7, 0.7);
							this.$drawShape(f, this.$xf, this.$color);
						}
					}
				}
			}
			if ((flags & $org_jbox2d_callbacks_DebugDraw.e_jointBit) === $org_jbox2d_callbacks_DebugDraw.e_jointBit) {
				for (var j = this.$m_jointList; ss.isValue(j); j = j.getNext()) {
					this.$drawJoint(j);
				}
			}
			if ((flags & $org_jbox2d_callbacks_DebugDraw.e_pairBit) === $org_jbox2d_callbacks_DebugDraw.e_pairBit) {
				this.$color.set$1(0.3, 0.9, 0.9);
				for (var c = this.m_contactManager.m_contactList; ss.isValue(c); c = c.getNext()) {
					var fixtureA = c.getFixtureA();
					var fixtureB = c.getFixtureB();
					fixtureA.getAABB(c.getChildIndexA()).getCenterToOut(this.$cA);
					fixtureB.getAABB(c.getChildIndexB()).getCenterToOut(this.$cB);
					this.$m_debugDraw.drawSegment(this.$cA, this.$cB, this.$color);
				}
			}
			if ((flags & $org_jbox2d_callbacks_DebugDraw.e_aabbBit) === $org_jbox2d_callbacks_DebugDraw.e_aabbBit) {
				this.$color.set$1(0.9, 0.3, 0.9);
				for (var b1 = this.$m_bodyList; ss.isValue(b1); b1 = b1.getNext()) {
					if (b1.isActive() === false) {
						continue;
					}
					for (var f1 = b1.getFixtureList(); ss.isValue(f1); f1 = f1.getNext()) {
						for (var i = 0; i < f1.m_proxyCount; ++i) {
							var proxy = f1.m_proxies[i];
							var aabb = this.m_contactManager.m_broadPhase.getFatAABB(proxy.proxyId);
							var vs = this.$avs.get(4);
							vs[0].set$1(aabb.lowerBound.x, aabb.lowerBound.y);
							vs[1].set$1(aabb.upperBound.x, aabb.lowerBound.y);
							vs[2].set$1(aabb.upperBound.x, aabb.upperBound.y);
							vs[3].set$1(aabb.lowerBound.x, aabb.upperBound.y);
							this.$m_debugDraw.drawPolygon(vs, 4, this.$color);
						}
					}
				}
			}
			if ((flags & $org_jbox2d_callbacks_DebugDraw.e_centerOfMassBit) === $org_jbox2d_callbacks_DebugDraw.e_centerOfMassBit) {
				for (var b2 = this.$m_bodyList; ss.isValue(b2); b2 = b2.getNext()) {
					this.$xf.set(b2.getTransform());
					this.$xf.p.set(b2.getWorldCenter());
					this.$m_debugDraw.drawTransform(this.$xf);
				}
			}
			if ((flags & $org_jbox2d_callbacks_DebugDraw.e_dynamicTreeBit) === $org_jbox2d_callbacks_DebugDraw.e_dynamicTreeBit) {
				this.m_contactManager.m_broadPhase.drawTree(this.$m_debugDraw);
			}
		},
		queryAABB: function(callback, aabb) {
			this.$wqwrapper.$broadPhase = this.m_contactManager.m_broadPhase;
			this.$wqwrapper.$callback = callback;
			this.m_contactManager.m_broadPhase.query(this.$wqwrapper, aabb);
		},
		raycast: function(callback, point1, point2) {
			this.$wrcwrapper.$broadPhase = this.m_contactManager.m_broadPhase;
			this.$wrcwrapper.$callback = callback;
			this.$input.maxFraction = 1;
			this.$input.p1.set(point1);
			this.$input.p2.set(point2);
			this.m_contactManager.m_broadPhase.raycast(this.$wrcwrapper, this.$input);
		},
		getBodyList: function() {
			return this.$m_bodyList;
		},
		getJointList: function() {
			return this.$m_jointList;
		},
		getContactList: function() {
			return this.m_contactManager.m_contactList;
		},
		isSleepingAllowed: function() {
			return this.$m_allowSleep;
		},
		setSleepingAllowed: function(sleepingAllowed) {
			this.$m_allowSleep = sleepingAllowed;
		},
		setWarmStarting: function(flag) {
			this.$m_warmStarting = flag;
		},
		isWarmStarting: function() {
			return this.$m_warmStarting;
		},
		setContinuousPhysics: function(flag) {
			this.$m_continuousPhysics = flag;
		},
		isContinuousPhysics: function() {
			return this.$m_continuousPhysics;
		},
		getProxyCount: function() {
			return this.m_contactManager.m_broadPhase.getProxyCount();
		},
		getBodyCount: function() {
			return this.$m_bodyCount;
		},
		getJointCount: function() {
			return this.$m_jointCount;
		},
		getContactCount: function() {
			return this.m_contactManager.m_contactCount;
		},
		getTreeHeight: function() {
			return this.m_contactManager.m_broadPhase.getTreeHeight();
		},
		getTreeBalance: function() {
			return this.m_contactManager.m_broadPhase.getTreeBalance();
		},
		getTreeQuality: function() {
			return this.m_contactManager.m_broadPhase.getTreeQuality();
		},
		setGravity: function(gravity) {
			this.$m_gravity.set(gravity);
		},
		getGravity: function() {
			return this.$m_gravity;
		},
		isLocked: function() {
			return (this.m_flags & $org_jbox2d_dynamics_World.LOCKED) === $org_jbox2d_dynamics_World.LOCKED;
		},
		setAutoClearForces: function(flag) {
			if (flag) {
				this.m_flags |= $org_jbox2d_dynamics_World.cleaR_FORCES;
			}
			else {
				this.m_flags &= ~$org_jbox2d_dynamics_World.cleaR_FORCES;
			}
		},
		getAutoClearForces: function() {
			return (this.m_flags & $org_jbox2d_dynamics_World.cleaR_FORCES) === $org_jbox2d_dynamics_World.cleaR_FORCES;
		},
		getContactManager: function() {
			return this.m_contactManager;
		},
		getProfile: function() {
			return this.$m_profile;
		},
		$solve: function(step) {
			this.$m_profile.solveInit = 0;
			this.$m_profile.solveVelocity = 0;
			this.$m_profile.solvePosition = 0;
			// Size the island for the worst case.
			this.$island.init(this.$m_bodyCount, this.m_contactManager.m_contactCount, this.$m_jointCount, this.m_contactManager.m_contactListener);
			// Clear all the island flags.
			for (var b = this.$m_bodyList; ss.isValue(b); b = b.m_next) {
				b.m_flags &= ~$org_jbox2d_dynamics_Body.e_islandFlag;
			}
			for (var c = this.m_contactManager.m_contactList; ss.isValue(c); c = c.m_next) {
				c.m_flags &= ~$org_jbox2d_dynamics_contacts_Contact.islanD_FLAG;
			}
			for (var j = this.$m_jointList; ss.isValue(j); j = j.m_next) {
				j.m_islandFlag = false;
			}
			// Build and simulate all awake islands.
			var stackSize = this.$m_bodyCount;
			if (this.$stack.length < stackSize) {
				this.$stack = new Array(stackSize);
			}
			for (var seed = this.$m_bodyList; ss.isValue(seed); seed = seed.m_next) {
				if ((seed.m_flags & $org_jbox2d_dynamics_Body.e_islandFlag) === $org_jbox2d_dynamics_Body.e_islandFlag) {
					continue;
				}
				if (seed.isAwake() === false || seed.isActive() === false) {
					continue;
				}
				// The seed can be dynamic or kinematic.
				if (seed.getType() === 0) {
					continue;
				}
				// Reset island and stack.
				this.$island.clear();
				var stackCount = 0;
				this.$stack[stackCount++] = seed;
				seed.m_flags |= $org_jbox2d_dynamics_Body.e_islandFlag;
				// Perform a depth first search (DFS) on the constraint graph.
				while (stackCount > 0) {
					// Grab the next body off the stack and add it to the island.
					var b1 = this.$stack[--stackCount];
					this.$island.add(b1);
					// Make sure the body is awake.
					b1.setAwake(true);
					// To keep islands as small as possible, we don't
					// propagate islands across static bodies.
					if (b1.getType() === 0) {
						continue;
					}
					// Search all contacts connected to this body.
					for (var ce = b1.m_contactList; ss.isValue(ce); ce = ce.next) {
						var contact = ce.contact;
						// Has this contact already been added to an island?
						if ((contact.m_flags & $org_jbox2d_dynamics_contacts_Contact.islanD_FLAG) === $org_jbox2d_dynamics_contacts_Contact.islanD_FLAG) {
							continue;
						}
						// Is this contact solid and touching?
						if (contact.isEnabled() === false || contact.isTouching() === false) {
							continue;
						}
						// Skip sensors.
						var sensorA = contact.m_fixtureA.m_isSensor;
						var sensorB = contact.m_fixtureB.m_isSensor;
						if (sensorA || sensorB) {
							continue;
						}
						this.$island.add$1(contact);
						contact.m_flags |= $org_jbox2d_dynamics_contacts_Contact.islanD_FLAG;
						var other = ce.other;
						// Was the other body already added to this island?
						if ((other.m_flags & $org_jbox2d_dynamics_Body.e_islandFlag) === $org_jbox2d_dynamics_Body.e_islandFlag) {
							continue;
						}
						this.$stack[stackCount++] = other;
						other.m_flags |= $org_jbox2d_dynamics_Body.e_islandFlag;
					}
					// Search all joints connect to this body.
					for (var je = b1.m_jointList; ss.isValue(je); je = je.next) {
						if (je.joint.m_islandFlag) {
							continue;
						}
						var other1 = je.other;
						// Don't simulate joints connected to inactive bodies.
						if (other1.isActive() === false) {
							continue;
						}
						this.$island.add$2(je.joint);
						je.joint.m_islandFlag = true;
						if ((other1.m_flags & $org_jbox2d_dynamics_Body.e_islandFlag) === $org_jbox2d_dynamics_Body.e_islandFlag) {
							continue;
						}
						this.$stack[stackCount++] = other1;
						other1.m_flags |= $org_jbox2d_dynamics_Body.e_islandFlag;
					}
				}
				this.$island.solve(this.$islandProfile, step, this.$m_gravity, this.$m_allowSleep);
				this.$m_profile.solveInit += this.$islandProfile.solveInit;
				this.$m_profile.solveVelocity += this.$islandProfile.solveVelocity;
				this.$m_profile.solvePosition += this.$islandProfile.solvePosition;
				// Post solve cleanup.
				for (var i = 0; i < this.$island.m_bodyCount; ++i) {
					// Allow static bodies to participate in other islands.
					var b2 = this.$island.m_bodies[i];
					if (b2.getType() === 0) {
						b2.m_flags &= ~$org_jbox2d_dynamics_Body.e_islandFlag;
					}
				}
			}
			this.$broadphaseTimer.reset();
			// Synchronize fixtures, check for out of range bodies.
			for (var b3 = this.$m_bodyList; ss.isValue(b3); b3 = b3.getNext()) {
				// If a body was not in an island then it did not move.
				if ((b3.m_flags & $org_jbox2d_dynamics_Body.e_islandFlag) === 0) {
					continue;
				}
				if (b3.getType() === 0) {
					continue;
				}
				// Update fixtures (for broad-phase).
				b3.synchronizeFixtures();
			}
			// Look for new contacts.
			this.m_contactManager.findNewContacts();
			this.$m_profile.broadphase = this.$broadphaseTimer.getMilliseconds();
		},
		$solveTOI: function(step) {
			var island = this.$toiIsland;
			island.init(2 * $org_jbox2d_common_Settings.maxTOIContacts, $org_jbox2d_common_Settings.maxTOIContacts, 0, this.m_contactManager.m_contactListener);
			if (this.$m_stepComplete) {
				for (var b = this.$m_bodyList; ss.isValue(b); b = b.m_next) {
					b.m_flags &= ~$org_jbox2d_dynamics_Body.e_islandFlag;
					b.m_sweep.alpha0 = 0;
				}
				for (var c = this.m_contactManager.m_contactList; ss.isValue(c); c = c.m_next) {
					// Invalidate TOI
					c.m_flags &= ~($org_jbox2d_dynamics_contacts_Contact.toI_FLAG | $org_jbox2d_dynamics_contacts_Contact.islanD_FLAG);
					c.m_toiCount = 0;
					c.m_toi = 1;
				}
			}
			// Find TOI events and solve them.
			for (;;) {
				// Find the first TOI.
				var minContact = null;
				var minAlpha = 1;
				for (var c1 = this.m_contactManager.m_contactList; ss.isValue(c1); c1 = c1.m_next) {
					// Is this contact disabled?
					if (c1.isEnabled() === false) {
						continue;
					}
					// Prevent excessive sub-stepping.
					if (c1.m_toiCount > $org_jbox2d_common_Settings.maxSubSteps) {
						continue;
					}
					var alpha = 1;
					if ((c1.m_flags & $org_jbox2d_dynamics_contacts_Contact.toI_FLAG) !== 0) {
						// This contact has a valid cached TOI.
						alpha = c1.m_toi;
					}
					else {
						var fA = c1.getFixtureA();
						var fB = c1.getFixtureB();
						// Is there a sensor?
						if (fA.isSensor() || fB.isSensor()) {
							continue;
						}
						var bA = fA.getBody();
						var bB = fB.getBody();
						var typeA = bA.m_type;
						var typeB = bB.m_type;
						var activeA = bA.isAwake() && typeA !== 0;
						var activeB = bB.isAwake() && typeB !== 0;
						// Is at least one body active (awake and dynamic or kinematic)?
						if (activeA === false && activeB === false) {
							continue;
						}
						var collideA = bA.isBullet() || typeA !== 2;
						var collideB = bB.isBullet() || typeB !== 2;
						// Are these two non-bullet dynamic bodies?
						if (collideA === false && collideB === false) {
							continue;
						}
						// Compute the TOI for this contact.
						// Put the sweeps onto the same time interval.
						var alpha0 = bA.m_sweep.alpha0;
						if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {
							alpha0 = bB.m_sweep.alpha0;
							bA.m_sweep.advance(alpha0);
						}
						else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {
							alpha0 = bA.m_sweep.alpha0;
							bB.m_sweep.advance(alpha0);
						}
						var indexA = c1.getChildIndexA();
						var indexB = c1.getChildIndexB();
						// Compute the time of impact in interval [0, minTOI]
						var input = this.$toiInput;
						input.proxyA.set(fA.getShape(), indexA);
						input.proxyB.set(fB.getShape(), indexB);
						input.sweepA.set(bA.m_sweep);
						input.sweepB.set(bB.m_sweep);
						input.tMax = 1;
						this.$pool.getTimeOfImpact().timeOfImpact(this.$toiOutput, input);
						// Beta is the fraction of the remaining portion of the .
						var beta = this.$toiOutput.t;
						if (this.$toiOutput.state === 3) {
							alpha = $org_jbox2d_common_MathUtils.min(alpha0 + (1 - alpha0) * beta, 1);
						}
						else {
							alpha = 1;
						}
						c1.m_toi = alpha;
						c1.m_flags |= $org_jbox2d_dynamics_contacts_Contact.toI_FLAG;
					}
					if (alpha < minAlpha) {
						// This is the minimum TOI found so far.
						minContact = c1;
						minAlpha = alpha;
					}
				}
				if (ss.isNullOrUndefined(minContact) || 1 - 10 * $org_jbox2d_common_Settings.EPSILON < minAlpha) {
					// No more TOI events. Done!
					this.$m_stepComplete = true;
					break;
				}
				// Advance the bodies to the TOI.
				var fA2 = minContact.getFixtureA();
				var fB2 = minContact.getFixtureB();
				var bA2 = fA2.getBody();
				var bB2 = fB2.getBody();
				this.$backup1.set(bA2.m_sweep);
				this.$backup2.set(bB2.m_sweep);
				bA2.advance(minAlpha);
				bB2.advance(minAlpha);
				// The TOI contact likely has some new contact points.
				minContact.update(this.m_contactManager.m_contactListener);
				minContact.m_flags &= ~$org_jbox2d_dynamics_contacts_Contact.toI_FLAG;
				++minContact.m_toiCount;
				// Is the contact solid?
				if (minContact.isEnabled() === false || minContact.isTouching() === false) {
					// Restore the sweeps.
					minContact.setEnabled(false);
					bA2.m_sweep.set(this.$backup1);
					bB2.m_sweep.set(this.$backup2);
					bA2.synchronizeTransform();
					bB2.synchronizeTransform();
					continue;
				}
				bA2.setAwake(true);
				bB2.setAwake(true);
				// Build the island
				island.clear();
				island.add(bA2);
				island.add(bB2);
				island.add$1(minContact);
				bA2.m_flags |= $org_jbox2d_dynamics_Body.e_islandFlag;
				bB2.m_flags |= $org_jbox2d_dynamics_Body.e_islandFlag;
				minContact.m_flags |= $org_jbox2d_dynamics_contacts_Contact.islanD_FLAG;
				// Get contacts on bodyA and bodyB.
				this.$tempBodies[0] = bA2;
				this.$tempBodies[1] = bB2;
				for (var i = 0; i < 2; ++i) {
					var body = this.$tempBodies[i];
					if (body.m_type === 2) {
						for (var ce = body.m_contactList; ss.isValue(ce); ce = ce.next) {
							if (island.m_bodyCount === island.m_bodyCapacity) {
								break;
							}
							if (island.m_contactCount === island.m_contactCapacity) {
								break;
							}
							var contact = ce.contact;
							// Has this contact already been added to the island?
							if ((contact.m_flags & $org_jbox2d_dynamics_contacts_Contact.islanD_FLAG) !== 0) {
								continue;
							}
							// Only add static, kinematic, or bullet bodies.
							var other = ce.other;
							if (other.m_type === 2 && body.isBullet() === false && other.isBullet() === false) {
								continue;
							}
							// Skip sensors.
							var sensorA = contact.m_fixtureA.m_isSensor;
							var sensorB = contact.m_fixtureB.m_isSensor;
							if (sensorA || sensorB) {
								continue;
							}
							// Tentatively advance the body to the TOI.
							this.$backup1.set(other.m_sweep);
							if ((other.m_flags & $org_jbox2d_dynamics_Body.e_islandFlag) === 0) {
								other.advance(minAlpha);
							}
							// Update the contact points
							contact.update(this.m_contactManager.m_contactListener);
							// Was the contact disabled by the user?
							if (contact.isEnabled() === false) {
								other.m_sweep.set(this.$backup1);
								other.synchronizeTransform();
								continue;
							}
							// Are there contact points?
							if (contact.isTouching() === false) {
								other.m_sweep.set(this.$backup1);
								other.synchronizeTransform();
								continue;
							}
							// Add the contact to the island
							contact.m_flags |= $org_jbox2d_dynamics_contacts_Contact.islanD_FLAG;
							island.add$1(contact);
							// Has the other body already been added to the island?
							if ((other.m_flags & $org_jbox2d_dynamics_Body.e_islandFlag) !== 0) {
								continue;
							}
							// Add the other body to the island.
							other.m_flags |= $org_jbox2d_dynamics_Body.e_islandFlag;
							if (other.m_type !== 0) {
								other.setAwake(true);
							}
							island.add(other);
						}
					}
				}
				this.$subStep.dt = (1 - minAlpha) * step.dt;
				this.$subStep.inv_dt = 1 / this.$subStep.dt;
				this.$subStep.dtRatio = 1;
				this.$subStep.positionIterations = 20;
				this.$subStep.velocityIterations = step.velocityIterations;
				this.$subStep.warmStarting = false;
				island.solveTOI(this.$subStep, bA2.m_islandIndex, bB2.m_islandIndex);
				// Reset island flags and synchronize broad-phase proxies.
				for (var i1 = 0; i1 < island.m_bodyCount; ++i1) {
					var body1 = island.m_bodies[i1];
					body1.m_flags &= ~$org_jbox2d_dynamics_Body.e_islandFlag;
					if (body1.m_type !== 2) {
						continue;
					}
					body1.synchronizeFixtures();
					// Invalidate all contact TOIs on this displaced body.
					for (var ce1 = body1.m_contactList; ss.isValue(ce1); ce1 = ce1.next) {
						ce1.contact.m_flags &= ~($org_jbox2d_dynamics_contacts_Contact.toI_FLAG | $org_jbox2d_dynamics_contacts_Contact.islanD_FLAG);
					}
				}
				// Commit fixture proxy movements to the broad-phase so that new contacts are created.
				// Also, some contacts can be destroyed.
				this.m_contactManager.findNewContacts();
				if (this.$m_subStepping) {
					this.$m_stepComplete = false;
					break;
				}
			}
		},
		$drawJoint: function(joint) {
			var bodyA = joint.getBodyA();
			var bodyB = joint.getBodyB();
			var xf1 = bodyA.getTransform();
			var xf2 = bodyB.getTransform();
			var x1 = xf1.p;
			var x2 = xf2.p;
			var p1 = this.$pool.popVec2();
			var p2 = this.$pool.popVec2();
			joint.getAnchorA(p1);
			joint.getAnchorB(p2);
			this.$color.set$1(0.5, 0.8, 0.8);
			switch (joint.getType()) {
				case 3: {
					this.$m_debugDraw.drawSegment(p1, p2, this.$color);
					break;
				}
				case 4: {
					{
						var pulley = ss.cast(joint, $org_jbox2d_dynamics_joints_PulleyJoint);
						var s1 = pulley.getGroundAnchorA();
						var s2 = pulley.getGroundAnchorB();
						this.$m_debugDraw.drawSegment(s1, p1, this.$color);
						this.$m_debugDraw.drawSegment(s2, p2, this.$color);
						this.$m_debugDraw.drawSegment(s1, s2, this.$color);
					}
					break;
				}
				case 11:
				case 5: {
					// don't draw this
					break;
				}
				default: {
					this.$m_debugDraw.drawSegment(x1, p1, this.$color);
					this.$m_debugDraw.drawSegment(p1, p2, this.$color);
					this.$m_debugDraw.drawSegment(x2, p2, this.$color);
					break;
				}
			}
			this.$pool.pushVec2(2);
		},
		$drawShape: function(fixture, xf, color) {
			switch (fixture.getType()) {
				case 0: {
					{
						var circle = ss.cast(fixture.getShape(), $org_jbox2d_collision_shapes_CircleShape);
						// Vec2 center = Mul(xf, circle.m_p);
						$org_jbox2d_common_Transform.mulToOutUnsafe$1(xf, circle.m_p, this.$center);
						var radius = circle.m_radius;
						xf.q.getXAxis(this.$axis);
						if (ss.isValue(fixture.getUserData()) && ss.equals(fixture.getUserData(), $org_jbox2d_dynamics_World.$liquiD_INT)) {
							var b = fixture.getBody();
							this.$liquidOffset.set(b.m_linearVelocity);
							var linVelLength = b.m_linearVelocity.length();
							if (this.$averageLinearVel === -1) {
								this.$averageLinearVel = linVelLength;
							}
							else {
								this.$averageLinearVel = 0.98 * this.$averageLinearVel + 0.02 * linVelLength;
							}
							this.$liquidOffset.mulLocal(this.$liquidLength / this.$averageLinearVel / 2);
							this.$circCenterMoved.set(this.$center).addLocal(this.$liquidOffset);
							this.$center.subLocal(this.$liquidOffset);
							this.$m_debugDraw.drawSegment(this.$center, this.$circCenterMoved, this.$liquidColor);
							return;
						}
						this.$m_debugDraw.drawSolidCircle(this.$center, radius, this.$axis, color);
					}
					break;
				}
				case 2: {
					{
						var poly = ss.cast(fixture.getShape(), $org_jbox2d_collision_shapes_PolygonShape);
						var vertexCount = poly.m_count;
						var vertices = this.$tlvertices.get($org_jbox2d_common_Settings.maxPolygonVertices);
						for (var i = 0; i < vertexCount; ++i) {
							// vertices[i] = Mul(xf, poly.m_vertices[i]);
							$org_jbox2d_common_Transform.mulToOutUnsafe$1(xf, poly.m_vertices[i], vertices[i]);
						}
						this.$m_debugDraw.drawSolidPolygon(vertices, vertexCount, color);
					}
					break;
				}
				case 1: {
					{
						var edge = ss.cast(fixture.getShape(), $org_jbox2d_collision_shapes_EdgeShape);
						$org_jbox2d_common_Transform.mulToOutUnsafe$1(xf, edge.m_vertex1, this.$v1);
						$org_jbox2d_common_Transform.mulToOutUnsafe$1(xf, edge.m_vertex2, this.$v2);
						this.$m_debugDraw.drawSegment(this.$v1, this.$v2, color);
					}
					break;
				}
				case 3: {
					{
						var chain = ss.cast(fixture.getShape(), $org_jbox2d_collision_shapes_ChainShape);
						var count = chain.m_count;
						var vertices1 = chain.m_vertices;
						$org_jbox2d_common_Transform.mulToOutUnsafe$1(xf, vertices1[0], this.$v1);
						for (var i1 = 1; i1 < count; ++i1) {
							$org_jbox2d_common_Transform.mulToOutUnsafe$1(xf, vertices1[i1], this.$v2);
							this.$m_debugDraw.drawSegment(this.$v1, this.$v2, color);
							this.$m_debugDraw.drawCircle(this.$v1, 0.05, color);
							this.$v1.set(this.$v2);
						}
					}
					break;
				}
				default: {
					break;
				}
			}
		}
	});
	$org_jbox2d_dynamics_World.$ctor1.prototype = $org_jbox2d_dynamics_World.$ctor2.prototype = $org_jbox2d_dynamics_World.prototype;
	ss.initClass($org_jbox2d_dynamics_contacts_$PositionSolverManifold, {
		$initialize: function(pc, xfA, xfB, index) {
			var xfAq = xfA.q;
			var xfBq = xfB.q;
			var pcLocalPointsI = pc.localPoints[index];
			switch (pc.type) {
				case 0: {
					// Transform.mulToOutUnsafe(xfA, pc.localPoint, pointA);
					// Transform.mulToOutUnsafe(xfB, pc.localPoints[0], pointB);
					// normal.set(pointB).subLocal(pointA);
					// normal.normalize();
					//
					// point.set(pointA).addLocal(pointB).mulLocal(.5d);
					// temp.set(pointB).subLocal(pointA);
					// separation = Vec2.dot(temp, normal) - pc.radiusA - pc.radiusB;
					var plocalPoint = pc.localPoint;
					var pLocalPoints0 = pc.localPoints[0];
					var pointAx = xfAq.c * plocalPoint.x - xfAq.s * plocalPoint.y + xfA.p.x;
					var pointAy = xfAq.s * plocalPoint.x + xfAq.c * plocalPoint.y + xfA.p.y;
					var pointBx = xfBq.c * pLocalPoints0.x - xfBq.s * pLocalPoints0.y + xfB.p.x;
					var pointBy = xfBq.s * pLocalPoints0.x + xfBq.c * pLocalPoints0.y + xfB.p.y;
					this.$normal.x = pointBx - pointAx;
					this.$normal.y = pointBy - pointAy;
					this.$normal.normalize();
					this.$point.x = (pointAx + pointBx) * 0.5;
					this.$point.y = (pointAy + pointBy) * 0.5;
					var tempx = pointBx - pointAx;
					var tempy = pointBy - pointAy;
					this.$separation = tempx * this.$normal.x + tempy * this.$normal.y - pc.radiusA - pc.radiusB;
					break;
				}
				case 1: {
					// Rot.mulToOutUnsafe(xfAq, pc.localNormal, normal);
					// Transform.mulToOutUnsafe(xfA, pc.localPoint, planePoint);
					//
					// Transform.mulToOutUnsafe(xfB, pc.localPoints[index], clipPoint);
					// temp.set(clipPoint).subLocal(planePoint);
					// separation = Vec2.dot(temp, normal) - pc.radiusA - pc.radiusB;
					// point.set(clipPoint);
					var pcLocalNormal = pc.localNormal;
					var pcLocalPoint = pc.localPoint;
					this.$normal.x = xfAq.c * pcLocalNormal.x - xfAq.s * pcLocalNormal.y;
					this.$normal.y = xfAq.s * pcLocalNormal.x + xfAq.c * pcLocalNormal.y;
					var planePointx = xfAq.c * pcLocalPoint.x - xfAq.s * pcLocalPoint.y + xfA.p.x;
					var planePointy = xfAq.s * pcLocalPoint.x + xfAq.c * pcLocalPoint.y + xfA.p.y;
					var clipPointx = xfBq.c * pcLocalPointsI.x - xfBq.s * pcLocalPointsI.y + xfB.p.x;
					var clipPointy = xfBq.s * pcLocalPointsI.x + xfBq.c * pcLocalPointsI.y + xfB.p.y;
					var tempx1 = clipPointx - planePointx;
					var tempy1 = clipPointy - planePointy;
					this.$separation = tempx1 * this.$normal.x + tempy1 * this.$normal.y - pc.radiusA - pc.radiusB;
					this.$point.x = clipPointx;
					this.$point.y = clipPointy;
					break;
				}
				case 2: {
					{
						// Rot.mulToOutUnsafe(xfBq, pc.localNormal, normal);
						// Transform.mulToOutUnsafe(xfB, pc.localPoint, planePoint);
						//
						// Transform.mulToOutUnsafe(xfA, pcLocalPointsI, clipPoint);
						// temp.set(clipPoint).subLocal(planePoint);
						// separation = Vec2.dot(temp, normal) - pc.radiusA - pc.radiusB;
						// point.set(clipPoint);
						//
						// // Ensure normal points from A to B
						// normal.negateLocal();
						var pcLocalNormal1 = pc.localNormal;
						var pcLocalPoint1 = pc.localPoint;
						this.$normal.x = xfBq.c * pcLocalNormal1.x - xfBq.s * pcLocalNormal1.y;
						this.$normal.y = xfBq.s * pcLocalNormal1.x + xfBq.c * pcLocalNormal1.y;
						var planePointx1 = xfBq.c * pcLocalPoint1.x - xfBq.s * pcLocalPoint1.y + xfB.p.x;
						var planePointy1 = xfBq.s * pcLocalPoint1.x + xfBq.c * pcLocalPoint1.y + xfB.p.y;
						var clipPointx1 = xfAq.c * pcLocalPointsI.x - xfAq.s * pcLocalPointsI.y + xfA.p.x;
						var clipPointy1 = xfAq.s * pcLocalPointsI.x + xfAq.c * pcLocalPointsI.y + xfA.p.y;
						var tempx2 = clipPointx1 - planePointx1;
						var tempy2 = clipPointy1 - planePointy1;
						this.$separation = tempx2 * this.$normal.x + tempy2 * this.$normal.y - pc.radiusA - pc.radiusB;
						this.$point.x = clipPointx1;
						this.$point.y = clipPointy1;
						this.$normal.x *= -1;
						this.$normal.y *= -1;
					}
					break;
				}
			}
		}
	});
	ss.initClass($org_jbox2d_dynamics_contacts_Contact, {
		init: function(fA, indexA, fB, indexB) {
			this.m_flags = 0;
			this.m_fixtureA = fA;
			this.m_fixtureB = fB;
			this.m_indexA = indexA;
			this.m_indexB = indexB;
			this.m_manifold.pointCount = 0;
			this.m_prev = null;
			this.m_next = null;
			this.m_nodeA.contact = null;
			this.m_nodeA.prev = null;
			this.m_nodeA.next = null;
			this.m_nodeA.other = null;
			this.m_nodeB.contact = null;
			this.m_nodeB.prev = null;
			this.m_nodeB.next = null;
			this.m_nodeB.other = null;
			this.m_toiCount = 0;
			this.m_friction = $org_jbox2d_dynamics_contacts_Contact.mixFriction(fA.m_friction, fB.m_friction);
			this.m_restitution = $org_jbox2d_dynamics_contacts_Contact.mixRestitution(fA.m_restitution, fB.m_restitution);
			this.m_tangentSpeed = 0;
		},
		getManifold: function() {
			return this.m_manifold;
		},
		getWorldManifold: function(worldManifold) {
			var bodyA = this.m_fixtureA.getBody();
			var bodyB = this.m_fixtureB.getBody();
			var shapeA = this.m_fixtureA.getShape();
			var shapeB = this.m_fixtureB.getShape();
			worldManifold.initialize(this.m_manifold, bodyA.getTransform(), shapeA.m_radius, bodyB.getTransform(), shapeB.m_radius);
		},
		isTouching: function() {
			return (this.m_flags & $org_jbox2d_dynamics_contacts_Contact.touchinG_FLAG) === $org_jbox2d_dynamics_contacts_Contact.touchinG_FLAG;
		},
		setEnabled: function(flag) {
			if (flag) {
				this.m_flags |= $org_jbox2d_dynamics_contacts_Contact.enableD_FLAG;
			}
			else {
				this.m_flags &= ~$org_jbox2d_dynamics_contacts_Contact.enableD_FLAG;
			}
		},
		isEnabled: function() {
			return (this.m_flags & $org_jbox2d_dynamics_contacts_Contact.enableD_FLAG) === $org_jbox2d_dynamics_contacts_Contact.enableD_FLAG;
		},
		getNext: function() {
			return this.m_next;
		},
		getFixtureA: function() {
			return this.m_fixtureA;
		},
		getChildIndexA: function() {
			return this.m_indexA;
		},
		getFixtureB: function() {
			return this.m_fixtureB;
		},
		getChildIndexB: function() {
			return this.m_indexB;
		},
		setFriction: function(friction) {
			this.m_friction = friction;
		},
		getFriction: function() {
			return this.m_friction;
		},
		resetFriction: function() {
			this.m_friction = $org_jbox2d_dynamics_contacts_Contact.mixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
		},
		setRestitution: function(restitution) {
			this.m_restitution = restitution;
		},
		getRestitution: function() {
			return this.m_restitution;
		},
		resetRestitution: function() {
			this.m_restitution = $org_jbox2d_dynamics_contacts_Contact.mixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
		},
		setTangentSpeed: function(speed) {
			this.m_tangentSpeed = speed;
		},
		getTangentSpeed: function() {
			return this.m_tangentSpeed;
		},
		evaluate: null,
		flagForFiltering: function() {
			this.m_flags |= $org_jbox2d_dynamics_contacts_Contact.filteR_FLAG;
		},
		update: function(listener) {
			this.$oldManifold.set(this.m_manifold);
			// Re-enable this contact.
			this.m_flags |= $org_jbox2d_dynamics_contacts_Contact.enableD_FLAG;
			var touching = false;
			var wasTouching = (this.m_flags & $org_jbox2d_dynamics_contacts_Contact.touchinG_FLAG) === $org_jbox2d_dynamics_contacts_Contact.touchinG_FLAG;
			var sensorA = this.m_fixtureA.isSensor();
			var sensorB = this.m_fixtureB.isSensor();
			var sensor = sensorA || sensorB;
			var bodyA = this.m_fixtureA.getBody();
			var bodyB = this.m_fixtureB.getBody();
			var xfA = bodyA.getTransform();
			var xfB = bodyB.getTransform();
			// log.debug("TransformA: "+xfA);
			// log.debug("TransformB: "+xfB);
			if (sensor) {
				var shapeA = this.m_fixtureA.getShape();
				var shapeB = this.m_fixtureB.getShape();
				touching = this.pool.getCollision().testOverlap(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA, xfB);
				// Sensors don't generate manifolds.
				this.m_manifold.pointCount = 0;
			}
			else {
				this.evaluate(this.m_manifold, xfA, xfB);
				touching = this.m_manifold.pointCount > 0;
				// Match old contact ids to new contact ids and copy the
				// stored impulses to warm start the solver.
				for (var i = 0; i < this.m_manifold.pointCount; ++i) {
					var mp2 = this.m_manifold.points[i];
					mp2.normalImpulse = 0;
					mp2.tangentImpulse = 0;
					var id2 = mp2.id;
					for (var j = 0; j < this.$oldManifold.pointCount; ++j) {
						var mp1 = this.$oldManifold.points[j];
						if (mp1.id.isEqual(id2)) {
							mp2.normalImpulse = mp1.normalImpulse;
							mp2.tangentImpulse = mp1.tangentImpulse;
							break;
						}
					}
				}
				if (touching !== wasTouching) {
					bodyA.setAwake(true);
					bodyB.setAwake(true);
				}
			}
			if (touching) {
				this.m_flags |= $org_jbox2d_dynamics_contacts_Contact.touchinG_FLAG;
			}
			else {
				this.m_flags &= ~$org_jbox2d_dynamics_contacts_Contact.touchinG_FLAG;
			}
			if (ss.isNullOrUndefined(listener)) {
				return;
			}
			if (wasTouching === false && touching) {
				listener.beginContact(this);
			}
			if (wasTouching && touching === false) {
				listener.endContact(this);
			}
			if (sensor === false && touching) {
				listener.preSolve(this, this.$oldManifold);
			}
		}
	});
	ss.initClass($org_jbox2d_dynamics_contacts_ChainAndCircleContact, {
		init$1: function(fA, indexA, fB, indexB) {
			this.init(fA, indexA, fB, indexB);
		},
		evaluate: function(manifold, xfA, xfB) {
			var chain = ss.cast(this.m_fixtureA.getShape(), $org_jbox2d_collision_shapes_ChainShape);
			chain.getChildEdge(this.$edge, this.m_indexA);
			this.pool.getCollision().collideEdgeAndCircle(manifold, this.$edge, xfA, ss.cast(this.m_fixtureB.getShape(), $org_jbox2d_collision_shapes_CircleShape), xfB);
		}
	}, $org_jbox2d_dynamics_contacts_Contact);
	ss.initClass($org_jbox2d_dynamics_contacts_ChainAndPolygonContact, {
		init$1: function(fA, indexA, fB, indexB) {
			this.init(fA, indexA, fB, indexB);
		},
		evaluate: function(manifold, xfA, xfB) {
			var chain = ss.cast(this.m_fixtureA.getShape(), $org_jbox2d_collision_shapes_ChainShape);
			chain.getChildEdge(this.$edge, this.m_indexA);
			this.pool.getCollision().collideEdgeAndPolygon(manifold, this.$edge, xfA, ss.cast(this.m_fixtureB.getShape(), $org_jbox2d_collision_shapes_PolygonShape), xfB);
		}
	}, $org_jbox2d_dynamics_contacts_Contact);
	ss.initClass($org_jbox2d_dynamics_contacts_CircleContact, {
		init$1: function(fixtureA, fixtureB) {
			this.init(fixtureA, 0, fixtureB, 0);
		},
		evaluate: function(manifold, xfA, xfB) {
			this.pool.getCollision().collideCircles(manifold, ss.cast(this.m_fixtureA.getShape(), $org_jbox2d_collision_shapes_CircleShape), xfA, ss.cast(this.m_fixtureB.getShape(), $org_jbox2d_collision_shapes_CircleShape), xfB);
		}
	}, $org_jbox2d_dynamics_contacts_Contact);
	ss.initInterface($org_jbox2d_dynamics_contacts_ContactCreator, { contactCreateFcn: null, contactDestroyFcn: null });
	ss.initClass($org_jbox2d_dynamics_contacts_ContactEdge, {});
	ss.initClass($org_jbox2d_dynamics_contacts_ContactPositionConstraint, {});
	ss.initClass($org_jbox2d_dynamics_contacts_ContactRegister, {});
	ss.initClass($org_jbox2d_dynamics_contacts_ContactSolver, {
		init: function(def) {
			// System.out.println("Initializing contact solver");
			this.m_step = def.step;
			this.m_count = def.count;
			if (this.m_positionConstraints.length < this.m_count) {
				var old = this.m_positionConstraints;
				this.m_positionConstraints = new Array($org_jbox2d_common_MathUtils.max$1(old.length * 2, this.m_count));
				$org_jbox2d_dynamics_ArrayHelper.copy(old, 0, this.m_positionConstraints, 0, old.length);
				for (var i = old.length; i < this.m_positionConstraints.length; i++) {
					this.m_positionConstraints[i] = new $org_jbox2d_dynamics_contacts_ContactPositionConstraint();
				}
			}
			if (this.m_velocityConstraints.length < this.m_count) {
				var old1 = this.m_velocityConstraints;
				this.m_velocityConstraints = new Array($org_jbox2d_common_MathUtils.max$1(old1.length * 2, this.m_count));
				$org_jbox2d_dynamics_ArrayHelper.copy(old1, 0, this.m_velocityConstraints, 0, old1.length);
				for (var i1 = old1.length; i1 < this.m_velocityConstraints.length; i1++) {
					this.m_velocityConstraints[i1] = new $org_jbox2d_dynamics_contacts_ContactVelocityConstraint();
				}
			}
			this.m_positions = def.positions;
			this.m_velocities = def.velocities;
			this.m_contacts = def.contacts;
			for (var i2 = 0; i2 < this.m_count; ++i2) {
				// System.out.println("contacts: " + m_count);
				var contact = this.m_contacts[i2];
				var fixtureA = contact.m_fixtureA;
				var fixtureB = contact.m_fixtureB;
				var shapeA = fixtureA.getShape();
				var shapeB = fixtureB.getShape();
				var radiusA = shapeA.m_radius;
				var radiusB = shapeB.m_radius;
				var bodyA = fixtureA.getBody();
				var bodyB = fixtureB.getBody();
				var manifold = contact.getManifold();
				var pointCount = manifold.pointCount;
				var vc = this.m_velocityConstraints[i2];
				vc.friction = contact.m_friction;
				vc.restitution = contact.m_restitution;
				vc.tangentSpeed = contact.m_tangentSpeed;
				vc.indexA = bodyA.m_islandIndex;
				vc.indexB = bodyB.m_islandIndex;
				vc.invMassA = bodyA.m_invMass;
				vc.invMassB = bodyB.m_invMass;
				vc.invIA = bodyA.m_invI;
				vc.invIB = bodyB.m_invI;
				vc.contactIndex = i2;
				vc.pointCount = pointCount;
				vc.k.setZero();
				vc.normalMass.setZero();
				var pc = this.m_positionConstraints[i2];
				pc.indexA = bodyA.m_islandIndex;
				pc.indexB = bodyB.m_islandIndex;
				pc.invMassA = bodyA.m_invMass;
				pc.invMassB = bodyB.m_invMass;
				pc.localCenterA.set(bodyA.m_sweep.localCenter);
				pc.localCenterB.set(bodyB.m_sweep.localCenter);
				pc.invIA = bodyA.m_invI;
				pc.invIB = bodyB.m_invI;
				pc.localNormal.set(manifold.localNormal);
				pc.localPoint.set(manifold.localPoint);
				pc.pointCount = pointCount;
				pc.radiusA = radiusA;
				pc.radiusB = radiusB;
				pc.type = manifold.type;
				// System.out.println("contact point count: " + pointCount);
				for (var j = 0; j < pointCount; j++) {
					var cp = manifold.points[j];
					var vcp = vc.points[j];
					if (this.m_step.warmStarting) {
						// assert(cp.normalImpulse == 0);
						// System.out.println("contact normal impulse: " + cp.normalImpulse);
						vcp.normalImpulse = this.m_step.dtRatio * cp.normalImpulse;
						vcp.tangentImpulse = this.m_step.dtRatio * cp.tangentImpulse;
					}
					else {
						vcp.normalImpulse = 0;
						vcp.tangentImpulse = 0;
					}
					vcp.rA.setZero();
					vcp.rB.setZero();
					vcp.normalMass = 0;
					vcp.tangentMass = 0;
					vcp.velocityBias = 0;
					pc.localPoints[j].x = cp.localPoint.x;
					pc.localPoints[j].y = cp.localPoint.y;
				}
			}
		},
		warmStart: function() {
			// Warm start.
			for (var i = 0; i < this.m_count; ++i) {
				var vc = this.m_velocityConstraints[i];
				var indexA = vc.indexA;
				var indexB = vc.indexB;
				var mA = vc.invMassA;
				var iA = vc.invIA;
				var mB = vc.invMassB;
				var iB = vc.invIB;
				var pointCount = vc.pointCount;
				var vA = this.m_velocities[indexA].v;
				var wA = this.m_velocities[indexA].w;
				var vB = this.m_velocities[indexB].v;
				var wB = this.m_velocities[indexB].w;
				var normal = vc.normal;
				var tangentx = 1 * normal.y;
				var tangenty = -1 * normal.x;
				for (var j = 0; j < pointCount; ++j) {
					var vcp = vc.points[j];
					var Px = tangentx * vcp.tangentImpulse + normal.x * vcp.normalImpulse;
					var Py = tangenty * vcp.tangentImpulse + normal.y * vcp.normalImpulse;
					wA -= iA * (vcp.rA.x * Py - vcp.rA.y * Px);
					vA.x -= Px * mA;
					vA.y -= Py * mA;
					wB += iB * (vcp.rB.x * Py - vcp.rB.y * Px);
					vB.x += Px * mB;
					vB.y += Py * mB;
				}
				this.m_velocities[indexA].w = wA;
				this.m_velocities[indexB].w = wB;
			}
		},
		initializeVelocityConstraints: function() {
			// Warm start.
			for (var i = 0; i < this.m_count; ++i) {
				var vc = this.m_velocityConstraints[i];
				var pc = this.m_positionConstraints[i];
				var radiusA = pc.radiusA;
				var radiusB = pc.radiusB;
				var manifold = this.m_contacts[vc.contactIndex].getManifold();
				var indexA = vc.indexA;
				var indexB = vc.indexB;
				var mA = vc.invMassA;
				var mB = vc.invMassB;
				var iA = vc.invIA;
				var iB = vc.invIB;
				var localCenterA = pc.localCenterA;
				var localCenterB = pc.localCenterB;
				var cA = this.m_positions[indexA].c;
				var aA = this.m_positions[indexA].a;
				var vA = this.m_velocities[indexA].v;
				var wA = this.m_velocities[indexA].w;
				var cB = this.m_positions[indexB].c;
				var aB = this.m_positions[indexB].a;
				var vB = this.m_velocities[indexB].v;
				var wB = this.m_velocities[indexB].w;
				this.$xfA.q.set(aA);
				this.$xfB.q.set(aB);
				this.$xfA.p.x = cA.x - (this.$xfA.q.c * localCenterA.x - this.$xfA.q.s * localCenterA.y);
				this.$xfA.p.y = cA.y - (this.$xfA.q.s * localCenterA.x + this.$xfA.q.c * localCenterA.y);
				this.$xfB.p.x = cB.x - (this.$xfB.q.c * localCenterB.x - this.$xfB.q.s * localCenterB.y);
				this.$xfB.p.y = cB.y - (this.$xfB.q.s * localCenterB.x + this.$xfB.q.c * localCenterB.y);
				this.$worldManifold.initialize(manifold, this.$xfA, radiusA, this.$xfB, radiusB);
				vc.normal.set(this.$worldManifold.normal);
				var pointCount = vc.pointCount;
				for (var j = 0; j < pointCount; ++j) {
					var vcp = vc.points[j];
					vcp.rA.set(this.$worldManifold.points[j]).subLocal(cA);
					vcp.rB.set(this.$worldManifold.points[j]).subLocal(cB);
					var rnA = vcp.rA.x * vc.normal.y - vcp.rA.y * vc.normal.x;
					var rnB = vcp.rB.x * vc.normal.y - vcp.rB.y * vc.normal.x;
					var kNormal = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
					vcp.normalMass = ((kNormal > 0) ? (1 / kNormal) : 0);
					var tangentx = 1 * vc.normal.y;
					var tangenty = -1 * vc.normal.x;
					var rtA = vcp.rA.x * tangenty - vcp.rA.y * tangentx;
					var rtB = vcp.rB.x * tangenty - vcp.rB.y * tangentx;
					var kTangent = mA + mB + iA * rtA * rtA + iB * rtB * rtB;
					vcp.tangentMass = ((kTangent > 0) ? (1 / kTangent) : 0);
					// Setup a velocity bias for restitution.
					vcp.velocityBias = 0;
					var tempx = vB.x + -wB * vcp.rB.y - vA.x - -wA * vcp.rA.y;
					var tempy = vB.y + wB * vcp.rB.x - vA.y - wA * vcp.rA.x;
					var vRel = vc.normal.x * tempx + vc.normal.y * tempy;
					if (vRel < -$org_jbox2d_common_Settings.velocityThreshold) {
						vcp.velocityBias = -vc.restitution * vRel;
					}
				}
				// If we have two points, then prepare the block solver.
				if (vc.pointCount === 2) {
					var vcp1 = vc.points[0];
					var vcp2 = vc.points[1];
					var rn1A = $org_jbox2d_common_Vec2.cross$2(vcp1.rA, vc.normal);
					var rn1B = $org_jbox2d_common_Vec2.cross$2(vcp1.rB, vc.normal);
					var rn2A = $org_jbox2d_common_Vec2.cross$2(vcp2.rA, vc.normal);
					var rn2B = $org_jbox2d_common_Vec2.cross$2(vcp2.rB, vc.normal);
					var k11 = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;
					var k22 = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;
					var k12 = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;
					if (k11 * k11 < $org_jbox2d_dynamics_contacts_ContactSolver.k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
						// K is safe to invert.
						vc.k.ex.set$1(k11, k12);
						vc.k.ey.set$1(k12, k22);
						vc.k.invertToOut(vc.normalMass);
					}
					else {
						// The constraints are redundant, just use one.
						// TODO_ERIN use deepest?
						vc.pointCount = 1;
					}
				}
			}
		},
		solveVelocityConstraints: function() {
			for (var i = 0; i < this.m_count; ++i) {
				var vc = this.m_velocityConstraints[i];
				var indexA = vc.indexA;
				var indexB = vc.indexB;
				var mA = vc.invMassA;
				var mB = vc.invMassB;
				var iA = vc.invIA;
				var iB = vc.invIB;
				var pointCount = vc.pointCount;
				var vA = this.m_velocities[indexA].v;
				var wA = this.m_velocities[indexA].w;
				var vB = this.m_velocities[indexB].v;
				var wB = this.m_velocities[indexB].w;
				var normal = vc.normal;
				this.$tangent.x = 1 * vc.normal.y;
				this.$tangent.y = -1 * vc.normal.x;
				var friction = vc.friction;
				// Solve tangent constraints
				for (var j = 0; j < pointCount; ++j) {
					var vcp = vc.points[j];
					var a = vcp.rA;
					var dvx = -wB * vcp.rB.y + vB.x - vA.x + wA * a.y;
					var dvy = wB * vcp.rB.x + vB.y - vA.y - wA * a.x;
					// Compute tangent force
					var vt = dvx * this.$tangent.x + dvy * this.$tangent.y - vc.tangentSpeed;
					var lambda = vcp.tangentMass * -vt;
					// Clamp the accumulated force
					var maxFriction = friction * vcp.normalImpulse;
					var newImpulse = $org_jbox2d_common_MathUtils.clamp(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);
					lambda = newImpulse - vcp.tangentImpulse;
					vcp.tangentImpulse = newImpulse;
					// Apply contact impulse
					// Vec2 P = lambda * tangent;
					var Px = this.$tangent.x * lambda;
					var Py = this.$tangent.y * lambda;
					// vA -= invMassA * P;
					vA.x -= Px * mA;
					vA.y -= Py * mA;
					wA -= iA * (vcp.rA.x * Py - vcp.rA.y * Px);
					// vB += invMassB * P;
					vB.x += Px * mB;
					vB.y += Py * mB;
					wB += iB * (vcp.rB.x * Py - vcp.rB.y * Px);
				}
				// Solve normal constraints
				if (vc.pointCount === 1) {
					var vcp1 = vc.points[0];
					// Relative velocity at contact
					// Vec2 dv = vB + Cross(wB, vcp.rB) - vA - Cross(wA, vcp.rA);
					var dvx1 = -wB * vcp1.rB.y + vB.x - vA.x + wA * vcp1.rA.y;
					var dvy1 = wB * vcp1.rB.x + vB.y - vA.y - wA * vcp1.rA.x;
					// Compute normal impulse
					var vn = dvx1 * normal.x + dvy1 * normal.y;
					var lambda1 = -vcp1.normalMass * (vn - vcp1.velocityBias);
					// Clamp the accumulated impulse
					var a1 = vcp1.normalImpulse + lambda1;
					var newImpulse1 = ((a1 > 0) ? a1 : 0);
					lambda1 = newImpulse1 - vcp1.normalImpulse;
					vcp1.normalImpulse = newImpulse1;
					// Apply contact impulse
					var Px1 = normal.x * lambda1;
					var Py1 = normal.y * lambda1;
					// vA -= invMassA * P;
					vA.x -= Px1 * mA;
					vA.y -= Py1 * mA;
					wA -= iA * (vcp1.rA.x * Py1 - vcp1.rA.y * Px1);
					// vB += invMassB * P;
					vB.x += Px1 * mB;
					vB.y += Py1 * mB;
					wB += iB * (vcp1.rB.x * Py1 - vcp1.rB.y * Px1);
				}
				else {
					// Block solver developed in collaboration with Dirk Gregorius (back in 01/07 on
					// Box2D_Lite).
					// Build the mini LCP for this contact patch
					//
					// vn = A * x + b, vn >= 0, , vn >= 0, x >= 0 and vn_i * x_i = 0 with i = 1..2
					//
					// A = J * W * JT and J = ( -n, -r1 x n, n, r2 x n )
					// b = vn_0 - velocityBias
					//
					// The system is solved using the "Total enumeration method" (s. Murty). The complementary
					// constraint vn_i * x_i
					// implies that we must have in any solution either vn_i = 0 or x_i = 0. So for the 2D
					// contact problem the cases
					// vn1 = 0 and vn2 = 0, x1 = 0 and x2 = 0, x1 = 0 and vn2 = 0, x2 = 0 and vn1 = 0 need to be
					// tested. The first valid
					// solution that satisfies the problem is chosen.
					//
					// In order to account of the accumulated impulse 'a' (because of the iterative nature of
					// the solver which only requires
					// that the accumulated impulse is clamped and not the incremental impulse) we change the
					// impulse variable (x_i).
					//
					// Substitute:
					//
					// x = a + d
					//
					// a := old total impulse
					// x := new total impulse
					// d := incremental impulse
					//
					// For the current iteration we extend the formula for the incremental impulse
					// to compute the new total impulse:
					//
					// vn = A * d + b
					// = A * (x - a) + b
					// = A * x + b - A * a
					// = A * x + b'
					// b' = b - A * a;
					var cp1 = vc.points[0];
					var cp2 = vc.points[1];
					this.$a.x = cp1.normalImpulse;
					this.$a.y = cp2.normalImpulse;
					// Relative velocity at contact
					// Vec2 dv1 = vB + Cross(wB, cp1.rB) - vA - Cross(wA, cp1.rA);
					this.$dv1.x = -wB * cp1.rB.y + vB.x - vA.x + wA * cp1.rA.y;
					this.$dv1.y = wB * cp1.rB.x + vB.y - vA.y - wA * cp1.rA.x;
					// Vec2 dv2 = vB + Cross(wB, cp2.rB) - vA - Cross(wA, cp2.rA);
					this.$dv2.x = -wB * cp2.rB.y + vB.x - vA.x + wA * cp2.rA.y;
					this.$dv2.y = wB * cp2.rB.x + vB.y - vA.y - wA * cp2.rA.x;
					// Compute normal velocity
					var vn1 = this.$dv1.x * normal.x + this.$dv1.y * normal.y;
					var vn2 = this.$dv2.x * normal.x + this.$dv2.y * normal.y;
					this.$b.x = vn1 - cp1.velocityBias;
					this.$b.y = vn2 - cp2.velocityBias;
					// System.out.println("b is " + b.x + "," + b.y);
					// Compute b'
					var R = vc.k;
					this.$b.x -= R.ex.x * this.$a.x + R.ey.x * this.$a.y;
					this.$b.y -= R.ex.y * this.$a.x + R.ey.y * this.$a.y;
					// System.out.println("b' is " + b.x + "," + b.y);
					// double k_errorTol = 1e-3d;
					// B2_NOT_USED(k_errorTol);
					for (;;) {
						//
						// Case 1: vn = 0
						//
						// 0 = A * x' + b'
						//
						// Solve for x':
						//
						// x' = - inv(A) * b'
						//
						// Vec2 x = - Mul(c.normalMass, b);
						$org_jbox2d_common_Mat22.mulToOutUnsafe$1(vc.normalMass, this.$b, this.$x);
						this.$x.x *= -1;
						this.$x.y *= -1;
						if (this.$x.x >= 0 && this.$x.y >= 0) {
							// System.out.println("case 1");
							// Get the incremental impulse
							// Vec2 d = x - a;
							this.$d.set(this.$x).subLocal(this.$a);
							// Apply incremental impulse
							// Vec2 P1 = d.x * normal;
							// Vec2 P2 = d.y * normal;
							this.$p1.set(normal).mulLocal(this.$d.x);
							this.$p2.set(normal).mulLocal(this.$d.y);
							//
							//             * vA -= invMassA * (P1 + P2); wA -= invIA * (Cross(cp1.rA, P1) + Cross(cp2.rA, P2));
							//
							//             *
							//
							//             * vB += invMassB * (P1 + P2); wB += invIB * (Cross(cp1.rB, P1) + Cross(cp2.rB, P2));
							this.$temp1.set(this.$p1).addLocal(this.$p2);
							this.$temp2.set(this.$temp1).mulLocal(mA);
							vA.subLocal(this.$temp2);
							this.$temp2.set(this.$temp1).mulLocal(mB);
							vB.addLocal(this.$temp2);
							wA -= iA * ($org_jbox2d_common_Vec2.cross$2(cp1.rA, this.$p1) + $org_jbox2d_common_Vec2.cross$2(cp2.rA, this.$p2));
							wB += iB * ($org_jbox2d_common_Vec2.cross$2(cp1.rB, this.$p1) + $org_jbox2d_common_Vec2.cross$2(cp2.rB, this.$p2));
							// Accumulate
							cp1.normalImpulse = this.$x.x;
							cp2.normalImpulse = this.$x.y;
							//
							//             * #if B2_DEBUG_SOLVER == 1 // Postconditions dv1 = vB + Cross(wB, cp1.rB) - vA -
							//
							//             * Cross(wA, cp1.rA); dv2 = vB + Cross(wB, cp2.rB) - vA - Cross(wA, cp2.rA);
							//
							//             *
							//
							//             * // Compute normal velocity vn1 = Dot(dv1, normal); vn2 = Dot(dv2, normal);
							//
							//             *
							//
							//             * assert(Abs(vn1 - cp1.velocityBias) < k_errorTol); assert(Abs(vn2 - cp2.velocityBias)
							//
							//             * < k_errorTol); #endif
							if ($org_jbox2d_dynamics_contacts_ContactSolver.debuG_SOLVER) {
								// Postconditions
								var dv1c = vB.add($org_jbox2d_common_Vec2.cross(wB, cp1.rB).subLocal(vA).subLocal($org_jbox2d_common_Vec2.cross(wA, cp1.rA)));
								var dv2c = vB.add($org_jbox2d_common_Vec2.cross(wB, cp2.rB).subLocal(vA).subLocal($org_jbox2d_common_Vec2.cross(wA, cp2.rA)));
								// Compute normal velocity
								vn1 = $org_jbox2d_common_Vec2.dot(dv1c, normal);
								vn2 = $org_jbox2d_common_Vec2.dot(dv2c, normal);
							}
							break;
						}
						//
						// Case 2: vn1 = 0 and x2 = 0
						//
						// 0 = a11 * x1' + a12 * 0 + b1'
						// vn2 = a21 * x1' + a22 * 0 + '
						//
						this.$x.x = -cp1.normalMass * this.$b.x;
						this.$x.y = 0;
						vn1 = 0;
						vn2 = vc.k.ex.y * this.$x.x + this.$b.y;
						if (this.$x.x >= 0 && vn2 >= 0) {
							// System.out.println("case 2");
							// Get the incremental impulse
							this.$d.set(this.$x).subLocal(this.$a);
							// Apply incremental impulse
							// Vec2 P1 = d.x * normal;
							// Vec2 P2 = d.y * normal;
							this.$p1.set(normal).mulLocal(this.$d.x);
							this.$p2.set(normal).mulLocal(this.$d.y);
							//
							//             * Vec2 P1 = d.x * normal; Vec2 P2 = d.y * normal; vA -= invMassA * (P1 + P2); wA -=
							//
							//             * invIA * (Cross(cp1.rA, P1) + Cross(cp2.rA, P2));
							//
							//             *
							//
							//             * vB += invMassB * (P1 + P2); wB += invIB * (Cross(cp1.rB, P1) + Cross(cp2.rB, P2));
							this.$temp1.set(this.$p1).addLocal(this.$p2);
							this.$temp2.set(this.$temp1).mulLocal(mA);
							vA.subLocal(this.$temp2);
							this.$temp2.set(this.$temp1).mulLocal(mB);
							vB.addLocal(this.$temp2);
							wA -= iA * ($org_jbox2d_common_Vec2.cross$2(cp1.rA, this.$p1) + $org_jbox2d_common_Vec2.cross$2(cp2.rA, this.$p2));
							wB += iB * ($org_jbox2d_common_Vec2.cross$2(cp1.rB, this.$p1) + $org_jbox2d_common_Vec2.cross$2(cp2.rB, this.$p2));
							// Accumulate
							cp1.normalImpulse = this.$x.x;
							cp2.normalImpulse = this.$x.y;
							//
							//             * #if B2_DEBUG_SOLVER == 1 // Postconditions dv1 = vB + Cross(wB, cp1.rB) - vA -
							//
							//             * Cross(wA, cp1.rA);
							//
							//             *
							//
							//             * // Compute normal velocity vn1 = Dot(dv1, normal);
							//
							//             *
							//
							//             * assert(Abs(vn1 - cp1.velocityBias) < k_errorTol); #endif
							if ($org_jbox2d_dynamics_contacts_ContactSolver.debuG_SOLVER) {
								// Postconditions
								var dv1c1 = vB.add($org_jbox2d_common_Vec2.cross(wB, cp1.rB).subLocal(vA).subLocal($org_jbox2d_common_Vec2.cross(wA, cp1.rA)));
								// Compute normal velocity
								vn1 = $org_jbox2d_common_Vec2.dot(dv1c1, normal);
							}
							break;
						}
						//
						// Case 3: wB = 0 and x1 = 0
						//
						// vn1 = a11 * 0 + a12 * x2' + b1'
						// 0 = a21 * 0 + a22 * x2' + '
						//
						this.$x.x = 0;
						this.$x.y = -cp2.normalMass * this.$b.y;
						vn1 = vc.k.ey.x * this.$x.y + this.$b.x;
						vn2 = 0;
						if (this.$x.y >= 0 && vn1 >= 0) {
							// System.out.println("case 3");
							// Resubstitute for the incremental impulse
							this.$d.set(this.$x).subLocal(this.$a);
							// Apply incremental impulse
							//
							//             * Vec2 P1 = d.x * normal; Vec2 P2 = d.y * normal; vA -= invMassA * (P1 + P2); wA -=
							//
							//             * invIA * (Cross(cp1.rA, P1) + Cross(cp2.rA, P2));
							//
							//             *
							//
							//             * vB += invMassB * (P1 + P2); wB += invIB * (Cross(cp1.rB, P1) + Cross(cp2.rB, P2));
							this.$p1.set(normal).mulLocal(this.$d.x);
							this.$p2.set(normal).mulLocal(this.$d.y);
							this.$temp1.set(this.$p1).addLocal(this.$p2);
							this.$temp2.set(this.$temp1).mulLocal(mA);
							vA.subLocal(this.$temp2);
							this.$temp2.set(this.$temp1).mulLocal(mB);
							vB.addLocal(this.$temp2);
							wA -= iA * ($org_jbox2d_common_Vec2.cross$2(cp1.rA, this.$p1) + $org_jbox2d_common_Vec2.cross$2(cp2.rA, this.$p2));
							wB += iB * ($org_jbox2d_common_Vec2.cross$2(cp1.rB, this.$p1) + $org_jbox2d_common_Vec2.cross$2(cp2.rB, this.$p2));
							// Accumulate
							cp1.normalImpulse = this.$x.x;
							cp2.normalImpulse = this.$x.y;
							//
							//             * #if B2_DEBUG_SOLVER == 1 // Postconditions dv2 = vB + Cross(wB, cp2.rB) - vA -
							//
							//             * Cross(wA, cp2.rA);
							//
							//             *
							//
							//             * // Compute normal velocity vn2 = Dot(dv2, normal);
							//
							//             *
							//
							//             * assert(Abs(vn2 - cp2.velocityBias) < k_errorTol); #endif
							if ($org_jbox2d_dynamics_contacts_ContactSolver.debuG_SOLVER) {
								// Postconditions
								var dv2c1 = vB.add($org_jbox2d_common_Vec2.cross(wB, cp2.rB).subLocal(vA).subLocal($org_jbox2d_common_Vec2.cross(wA, cp2.rA)));
								// Compute normal velocity
								vn2 = $org_jbox2d_common_Vec2.dot(dv2c1, normal);
							}
							break;
						}
						//
						// Case 4: x1 = 0 and x2 = 0
						//
						// vn1 = b1
						// vn2 = ;
						this.$x.x = 0;
						this.$x.y = 0;
						vn1 = this.$b.x;
						vn2 = this.$b.y;
						if (vn1 >= 0 && vn2 >= 0) {
							// System.out.println("case 4");
							// Resubstitute for the incremental impulse
							this.$d.set(this.$x).subLocal(this.$a);
							// Apply incremental impulse
							//
							//             * Vec2 P1 = d.x * normal; Vec2 P2 = d.y * normal; vA -= invMassA * (P1 + P2); wA -=
							//
							//             * invIA * (Cross(cp1.rA, P1) + Cross(cp2.rA, P2));
							//
							//             *
							//
							//             * vB += invMassB * (P1 + P2); wB += invIB * (Cross(cp1.rB, P1) + Cross(cp2.rB, P2));
							this.$p1.set(normal).mulLocal(this.$d.x);
							this.$p2.set(normal).mulLocal(this.$d.y);
							this.$temp1.set(this.$p1).addLocal(this.$p2);
							this.$temp2.set(this.$temp1).mulLocal(mA);
							vA.subLocal(this.$temp2);
							this.$temp2.set(this.$temp1).mulLocal(mB);
							vB.addLocal(this.$temp2);
							wA -= iA * ($org_jbox2d_common_Vec2.cross$2(cp1.rA, this.$p1) + $org_jbox2d_common_Vec2.cross$2(cp2.rA, this.$p2));
							wB += iB * ($org_jbox2d_common_Vec2.cross$2(cp1.rB, this.$p1) + $org_jbox2d_common_Vec2.cross$2(cp2.rB, this.$p2));
							// Accumulate
							cp1.normalImpulse = this.$x.x;
							cp2.normalImpulse = this.$x.y;
						}
						// No solution, give up. This is hit sometimes, but it doesn't seem to matter.
						break;
					}
				}
				// m_velocities[indexA].v.set(vA);
				this.m_velocities[indexA].w = wA;
				// m_velocities[indexB].v.set(vB);
				this.m_velocities[indexB].w = wB;
			}
		},
		storeImpulses: function() {
			for (var i = 0; i < this.m_count; i++) {
				var vc = this.m_velocityConstraints[i];
				var manifold = this.m_contacts[vc.contactIndex].getManifold();
				for (var j = 0; j < vc.pointCount; j++) {
					manifold.points[j].normalImpulse = vc.points[j].normalImpulse;
					manifold.points[j].tangentImpulse = vc.points[j].tangentImpulse;
				}
			}
		},
		solvePositionConstraints: function() {
			var minSeparation = 0;
			for (var i = 0; i < this.m_count; ++i) {
				var pc = this.m_positionConstraints[i];
				var indexA = pc.indexA;
				var indexB = pc.indexB;
				var mA = pc.invMassA;
				var iA = pc.invIA;
				var localCenterA = pc.localCenterA;
				var mB = pc.invMassB;
				var iB = pc.invIB;
				var localCenterB = pc.localCenterB;
				var pointCount = pc.pointCount;
				var cA = this.m_positions[indexA].c;
				var aA = this.m_positions[indexA].a;
				var cB = this.m_positions[indexB].c;
				var aB = this.m_positions[indexB].a;
				// Solve normal constraints
				for (var j = 0; j < pointCount; ++j) {
					this.$xfA.q.set(aA);
					this.$xfB.q.set(aB);
					$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfA.q, localCenterA, this.$xfA.p);
					this.$xfA.p.negateLocal().addLocal(cA);
					$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfB.q, localCenterB, this.$xfB.p);
					this.$xfB.p.negateLocal().addLocal(cB);
					var psm = this.$psolver;
					psm.$initialize(pc, this.$xfA, this.$xfB, j);
					var normal = psm.$normal;
					var point = psm.$point;
					var separation = psm.$separation;
					this.$rA.set(point).subLocal(cA);
					this.$rB.set(point).subLocal(cB);
					// Track max constraint error.
					minSeparation = $org_jbox2d_common_MathUtils.min(minSeparation, separation);
					// Prevent large corrections and allow slop.
					var C = $org_jbox2d_common_MathUtils.clamp($org_jbox2d_common_Settings.baumgarte * (separation + $org_jbox2d_common_Settings.linearSlop), -$org_jbox2d_common_Settings.maxLinearCorrection, 0);
					// Compute the effective mass.
					var rnA = $org_jbox2d_common_Vec2.cross$2(this.$rA, normal);
					var rnB = $org_jbox2d_common_Vec2.cross$2(this.$rB, normal);
					var K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
					// Compute normal impulse
					var impulse = ((K > 0) ? (-C / K) : 0);
					this.$p.set(normal).mulLocal(impulse);
					cA.subLocal(this.$temp.set(this.$p).mulLocal(mA));
					aA -= iA * $org_jbox2d_common_Vec2.cross$2(this.$rA, this.$p);
					cB.addLocal(this.$temp.set(this.$p).mulLocal(mB));
					aB += iB * $org_jbox2d_common_Vec2.cross$2(this.$rB, this.$p);
				}
				// m_positions[indexA].c.set(cA);
				this.m_positions[indexA].a = aA;
				// m_positions[indexB].c.set(cB);
				this.m_positions[indexB].a = aB;
			}
			// We can't expect minSpeparation >= -linearSlop because we don't
			// push the separation above -linearSlop.
			return minSeparation >= -3 * $org_jbox2d_common_Settings.linearSlop;
		},
		solveTOIPositionConstraints: function(toiIndexA, toiIndexB) {
			var minSeparation = 0;
			for (var i = 0; i < this.m_count; ++i) {
				var pc = this.m_positionConstraints[i];
				var indexA = pc.indexA;
				var indexB = pc.indexB;
				var localCenterA = pc.localCenterA;
				var localCenterB = pc.localCenterB;
				var pointCount = pc.pointCount;
				var mA = 0;
				var iA = 0;
				if (indexA === toiIndexA || indexA === toiIndexB) {
					mA = pc.invMassA;
					iA = pc.invIA;
				}
				var mB = 0;
				var iB = 0;
				if (indexB === toiIndexA || indexB === toiIndexB) {
					mB = pc.invMassB;
					iB = pc.invIB;
				}
				var cA = this.m_positions[indexA].c;
				var aA = this.m_positions[indexA].a;
				var cB = this.m_positions[indexB].c;
				var aB = this.m_positions[indexB].a;
				// Solve normal constraints
				for (var j = 0; j < pointCount; ++j) {
					this.$xfA.q.set(aA);
					this.$xfB.q.set(aB);
					$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfA.q, localCenterA, this.$xfA.p);
					this.$xfA.p.negateLocal().addLocal(cA);
					$org_jbox2d_common_Rot.mulToOutUnsafe(this.$xfB.q, localCenterB, this.$xfB.p);
					this.$xfB.p.negateLocal().addLocal(cB);
					var psm = this.$psolver;
					psm.$initialize(pc, this.$xfA, this.$xfB, j);
					var normal = psm.$normal;
					var point = psm.$point;
					var separation = psm.$separation;
					this.$rA.set(point).subLocal(cA);
					this.$rB.set(point).subLocal(cB);
					// Track max constraint error.
					minSeparation = $org_jbox2d_common_MathUtils.min(minSeparation, separation);
					// Prevent large corrections and allow slop.
					var C = $org_jbox2d_common_MathUtils.clamp($org_jbox2d_common_Settings.toiBaugarte * (separation + $org_jbox2d_common_Settings.linearSlop), -$org_jbox2d_common_Settings.maxLinearCorrection, 0);
					// Compute the effective mass.
					var rnA = $org_jbox2d_common_Vec2.cross$2(this.$rA, normal);
					var rnB = $org_jbox2d_common_Vec2.cross$2(this.$rB, normal);
					var K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
					// Compute normal impulse
					var impulse = ((K > 0) ? (-C / K) : 0);
					this.$p.set(normal).mulLocal(impulse);
					cA.subLocal(this.$temp.set(this.$p).mulLocal(mA));
					aA -= iA * $org_jbox2d_common_Vec2.cross$2(this.$rA, this.$p);
					cB.addLocal(this.$temp.set(this.$p).mulLocal(mB));
					aB += iB * $org_jbox2d_common_Vec2.cross$2(this.$rB, this.$p);
				}
				// m_positions[indexA].c.set(cA);
				this.m_positions[indexA].a = aA;
				// m_positions[indexB].c.set(cB);
				this.m_positions[indexB].a = aB;
			}
			// We can't expect minSpeparation >= -_linearSlop because we don't
			// push the separation above -_linearSlop.
			return minSeparation >= -1.5 * $org_jbox2d_common_Settings.linearSlop;
		}
	});
	ss.initClass($org_jbox2d_dynamics_contacts_ContactSolverDef, {});
	ss.initClass($org_jbox2d_dynamics_contacts_ContactVelocityConstraint, {});
	ss.initClass($org_jbox2d_dynamics_contacts_EdgeAndCircleContact, {
		init$1: function(fA, indexA, fB, indexB) {
			this.init(fA, indexA, fB, indexB);
		},
		evaluate: function(manifold, xfA, xfB) {
			this.pool.getCollision().collideEdgeAndCircle(manifold, ss.cast(this.m_fixtureA.getShape(), $org_jbox2d_collision_shapes_EdgeShape), xfA, ss.cast(this.m_fixtureB.getShape(), $org_jbox2d_collision_shapes_CircleShape), xfB);
		}
	}, $org_jbox2d_dynamics_contacts_Contact);
	ss.initClass($org_jbox2d_dynamics_contacts_EdgeAndPolygonContact, {
		init$1: function(fA, indexA, fB, indexB) {
			this.init(fA, indexA, fB, indexB);
		},
		evaluate: function(manifold, xfA, xfB) {
			this.pool.getCollision().collideEdgeAndPolygon(manifold, ss.cast(this.m_fixtureA.getShape(), $org_jbox2d_collision_shapes_EdgeShape), xfA, ss.cast(this.m_fixtureB.getShape(), $org_jbox2d_collision_shapes_PolygonShape), xfB);
		}
	}, $org_jbox2d_dynamics_contacts_Contact);
	ss.initClass($org_jbox2d_dynamics_contacts_PolygonAndCircleContact, {
		init$1: function(fixtureA, fixtureB) {
			this.init(fixtureA, 0, fixtureB, 0);
		},
		evaluate: function(manifold, xfA, xfB) {
			this.pool.getCollision().collidePolygonAndCircle(manifold, ss.cast(this.m_fixtureA.getShape(), $org_jbox2d_collision_shapes_PolygonShape), xfA, ss.cast(this.m_fixtureB.getShape(), $org_jbox2d_collision_shapes_CircleShape), xfB);
		}
	}, $org_jbox2d_dynamics_contacts_Contact);
	ss.initClass($org_jbox2d_dynamics_contacts_PolygonContact, {
		init$1: function(fixtureA, fixtureB) {
			this.init(fixtureA, 0, fixtureB, 0);
		},
		evaluate: function(manifold, xfA, xfB) {
			this.pool.getCollision().collidePolygons(manifold, ss.cast(this.m_fixtureA.getShape(), $org_jbox2d_collision_shapes_PolygonShape), xfA, ss.cast(this.m_fixtureB.getShape(), $org_jbox2d_collision_shapes_PolygonShape), xfB);
		}
	}, $org_jbox2d_dynamics_contacts_Contact);
	ss.initClass($org_jbox2d_dynamics_contacts_Position, {});
	ss.initClass($org_jbox2d_dynamics_contacts_Velocity, {});
	ss.initClass($org_jbox2d_dynamics_contacts_VelocityConstraintPoint, {});
	ss.initClass($org_jbox2d_dynamics_joints_Joint, {
		getType: function() {
			return this.$m_type;
		},
		getBodyA: function() {
			return this.m_bodyA;
		},
		getBodyB: function() {
			return this.m_bodyB;
		},
		getAnchorA: null,
		getAnchorB: null,
		getReactionForce: null,
		getReactionTorque: null,
		getNext: function() {
			return this.m_next;
		},
		getUserData: function() {
			return this.m_userData;
		},
		setUserData: function(data) {
			this.m_userData = data;
		},
		getCollideConnected: function() {
			return this.$m_collideConnected;
		},
		isActive: function() {
			return this.m_bodyA.isActive() && this.m_bodyB.isActive();
		},
		initVelocityConstraints: null,
		solveVelocityConstraints: null,
		solvePositionConstraints: null,
		destructor: function() {
		}
	});
	ss.initClass($org_jbox2d_dynamics_joints_ConstantVolumeJoint, {
		getBodies: function() {
			return this.$bodies;
		},
		getJoints: function() {
			return this.$distanceJoints;
		},
		inflate: function(factor) {
			this.$targetVolume *= factor;
		},
		destructor$1: function() {
			for (var i = 0; i < this.$distanceJoints.length; ++i) {
				this.$world.destroyJoint(this.$distanceJoints[i]);
			}
		},
		$getBodyArea: function() {
			var area = 0;
			for (var i = 0; i < this.$bodies.length - 1; ++i) {
				var next = ((i === this.$bodies.length - 1) ? 0 : (i + 1));
				area += this.$bodies[i].getWorldCenter().x * this.$bodies[next].getWorldCenter().y - this.$bodies[next].getWorldCenter().x * this.$bodies[i].getWorldCenter().y;
			}
			area *= 0.5;
			return area;
		},
		$getSolverArea: function(positions) {
			var area = 0;
			for (var i = 0; i < this.$bodies.length; ++i) {
				var next = ((i === this.$bodies.length - 1) ? 0 : (i + 1));
				area += positions[this.$bodies[i].m_islandIndex].c.x * positions[this.$bodies[next].m_islandIndex].c.y - positions[this.$bodies[next].m_islandIndex].c.x * positions[this.$bodies[i].m_islandIndex].c.y;
			}
			area *= 0.5;
			return area;
		},
		$constrainEdges: function(positions) {
			var perimeter = 0;
			for (var i = 0; i < this.$bodies.length; ++i) {
				var next = ((i === this.$bodies.length - 1) ? 0 : (i + 1));
				var dx = positions[this.$bodies[next].m_islandIndex].c.x - positions[this.$bodies[i].m_islandIndex].c.x;
				var dy = positions[this.$bodies[next].m_islandIndex].c.y - positions[this.$bodies[i].m_islandIndex].c.y;
				var dist = $org_jbox2d_common_MathUtils.sqrt(dx * dx + dy * dy);
				if (dist < $org_jbox2d_common_Settings.EPSILON) {
					dist = 1;
				}
				this.$normals[i].x = dy / dist;
				this.$normals[i].y = -dx / dist;
				perimeter += dist;
			}
			var delta = this.pool.popVec2();
			var deltaArea = this.$targetVolume - this.$getSolverArea(positions);
			var toExtrude = 0.5 * deltaArea / perimeter;
			// *relaxationFactor
			// double sumdeltax = 0.0d;
			var done = true;
			for (var i1 = 0; i1 < this.$bodies.length; ++i1) {
				var next1 = ((i1 === this.$bodies.length - 1) ? 0 : (i1 + 1));
				delta.set$1(toExtrude * (this.$normals[i1].x + this.$normals[next1].x), toExtrude * (this.$normals[i1].y + this.$normals[next1].y));
				// sumdeltax += dx;
				var normSqrd = delta.lengthSquared();
				if (normSqrd > $org_jbox2d_common_Settings.maxLinearCorrection * $org_jbox2d_common_Settings.maxLinearCorrection) {
					delta.mulLocal($org_jbox2d_common_Settings.maxLinearCorrection / $org_jbox2d_common_MathUtils.sqrt(normSqrd));
				}
				if (normSqrd > $org_jbox2d_common_Settings.linearSlop * $org_jbox2d_common_Settings.linearSlop) {
					done = false;
				}
				positions[this.$bodies[next1].m_islandIndex].c.x += delta.x;
				positions[this.$bodies[next1].m_islandIndex].c.y += delta.y;
				// bodies[next].m_linearVelocity.x += delta.x * step.inv_dt;
				// bodies[next].m_linearVelocity.y += delta.y * step.inv_dt;
			}
			this.pool.pushVec2(1);
			// System.out.println(sumdeltax);
			return done;
		},
		initVelocityConstraints: function(step) {
			var velocities = step.velocities;
			var positions = step.positions;
			var d = this.pool.getVec2Array(this.$bodies.length);
			for (var i = 0; i < this.$bodies.length; ++i) {
				var prev = ((i === 0) ? (this.$bodies.length - 1) : (i - 1));
				var next = ((i === this.$bodies.length - 1) ? 0 : (i + 1));
				d[i].set(positions[this.$bodies[next].m_islandIndex].c);
				d[i].subLocal(positions[this.$bodies[prev].m_islandIndex].c);
			}
			if (step.step.warmStarting) {
				this.$m_impulse *= step.step.dtRatio;
				// double lambda = -2.0d * crossMassSum / dotMassSum;
				// System.out.println(crossMassSum + " " +dotMassSum);
				// lambda = MathUtils.clamp(lambda, -Settings.maxLinearCorrection,
				// Settings.maxLinearCorrection);
				// m_impulse = lambda;
				for (var i1 = 0; i1 < this.$bodies.length; ++i1) {
					velocities[this.$bodies[i1].m_islandIndex].v.x += this.$bodies[i1].m_invMass * d[i1].y * 0.5 * this.$m_impulse;
					velocities[this.$bodies[i1].m_islandIndex].v.y += this.$bodies[i1].m_invMass * -d[i1].x * 0.5 * this.$m_impulse;
				}
			}
			else {
				this.$m_impulse = 0;
			}
		},
		solvePositionConstraints: function(step) {
			return this.$constrainEdges(step.positions);
		},
		solveVelocityConstraints: function(step) {
			var crossMassSum = 0;
			var dotMassSum = 0;
			var velocities = step.velocities;
			var positions = step.positions;
			var d = this.pool.getVec2Array(this.$bodies.length);
			for (var i = 0; i < this.$bodies.length; ++i) {
				var prev = ((i === 0) ? (this.$bodies.length - 1) : (i - 1));
				var next = ((i === this.$bodies.length - 1) ? 0 : (i + 1));
				d[i].set(positions[this.$bodies[next].m_islandIndex].c);
				d[i].subLocal(positions[this.$bodies[prev].m_islandIndex].c);
				dotMassSum += d[i].lengthSquared() / this.$bodies[i].getMass();
				crossMassSum += $org_jbox2d_common_Vec2.cross$2(velocities[this.$bodies[i].m_islandIndex].v, d[i]);
			}
			var lambda = -2 * crossMassSum / dotMassSum;
			// System.out.println(crossMassSum + " " +dotMassSum);
			// lambda = MathUtils.clamp(lambda, -Settings.maxLinearCorrection,
			// Settings.maxLinearCorrection);
			this.$m_impulse += lambda;
			// System.out.println(m_impulse);
			for (var i1 = 0; i1 < this.$bodies.length; ++i1) {
				velocities[this.$bodies[i1].m_islandIndex].v.x += this.$bodies[i1].m_invMass * d[i1].y * 0.5 * lambda;
				velocities[this.$bodies[i1].m_islandIndex].v.y += this.$bodies[i1].m_invMass * -d[i1].x * 0.5 * lambda;
			}
		},
		getAnchorA: function(argOut) {
		},
		getAnchorB: function(argOut) {
		},
		getReactionForce: function(inv_dt, argOut) {
		},
		getReactionTorque: function(inv_dt) {
			return 0;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_JointDef, {});
	ss.initClass($org_jbox2d_dynamics_joints_ConstantVolumeJointDef, {
		addBody: function(argBody) {
			ss.add(this.bodies, argBody);
			if (this.bodies.length === 1) {
				this.bodyA = argBody;
			}
			if (this.bodies.length === 2) {
				this.bodyB = argBody;
			}
		},
		addBodyAndJoint: function(argBody, argJoint) {
			this.addBody(argBody);
			if (ss.isNullOrUndefined(this.joints)) {
				this.joints = [];
			}
			ss.add(this.joints, argJoint);
		}
	}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_DistanceJoint, {
		setFrequency: function(hz) {
			this.$m_frequencyHz = hz;
		},
		getFrequency: function() {
			return this.$m_frequencyHz;
		},
		getLength: function() {
			return this.$m_length;
		},
		setLength: function(argLength) {
			this.$m_length = argLength;
		},
		setDampingRatio: function(damp) {
			this.$m_dampingRatio = damp;
		},
		getDampingRatio: function() {
			return this.$m_dampingRatio;
		},
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, argOut);
		},
		getLocalAnchorA: function() {
			return this.$m_localAnchorA;
		},
		getLocalAnchorB: function() {
			return this.$m_localAnchorB;
		},
		getReactionForce: function(inv_dt, argOut) {
			argOut.x = this.$m_impulse * this.$m_u.x * inv_dt;
			argOut.y = this.$m_impulse * this.$m_u.y * inv_dt;
		},
		getReactionTorque: function(inv_dt) {
			return 0;
		},
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassA = this.m_bodyA.m_invMass;
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIA = this.m_bodyA.m_invI;
			this.$m_invIB = this.m_bodyB.m_invI;
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			qA.set(aA);
			qB.set(aB);
			// use m_u as temporary variable
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, this.$m_u.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), this.$m_rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, this.$m_u.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), this.$m_rB);
			this.$m_u.set(cB).addLocal(this.$m_rB).subLocal(cA).subLocal(this.$m_rA);
			this.pool.pushRot(2);
			// Handle singularity.
			var length = this.$m_u.length();
			if (length > $org_jbox2d_common_Settings.linearSlop) {
				this.$m_u.x *= 1 / length;
				this.$m_u.y *= 1 / length;
			}
			else {
				this.$m_u.set$1(0, 0);
			}
			var crAu = $org_jbox2d_common_Vec2.cross$2(this.$m_rA, this.$m_u);
			var crBu = $org_jbox2d_common_Vec2.cross$2(this.$m_rB, this.$m_u);
			var invMass = this.$m_invMassA + this.$m_invIA * crAu * crAu + this.$m_invMassB + this.$m_invIB * crBu * crBu;
			// Compute the effective mass matrix.
			this.$m_mass = ((invMass !== 0) ? (1 / invMass) : 0);
			if (this.$m_frequencyHz > 0) {
				var C = length - this.$m_length;
				// Frequency
				var omega = 2 * $org_jbox2d_common_MathUtils.PI * this.$m_frequencyHz;
				// Damping coefficient
				var d = 2 * this.$m_mass * this.$m_dampingRatio * omega;
				// Spring stiffness
				var k = this.$m_mass * omega * omega;
				// magic formulas
				var h = data.step.dt;
				this.$m_gamma = h * (d + h * k);
				this.$m_gamma = ((this.$m_gamma !== 0) ? (1 / this.$m_gamma) : 0);
				this.$m_bias = C * h * k * this.$m_gamma;
				invMass += this.$m_gamma;
				this.$m_mass = ((invMass !== 0) ? (1 / invMass) : 0);
			}
			else {
				this.$m_gamma = 0;
				this.$m_bias = 0;
			}
			if (data.step.warmStarting) {
				// Scale the impulse to support a variable time step.
				this.$m_impulse *= data.step.dtRatio;
				var P = this.pool.popVec2();
				P.set(this.$m_u).mulLocal(this.$m_impulse);
				vA.x -= this.$m_invMassA * P.x;
				vA.y -= this.$m_invMassA * P.y;
				wA -= this.$m_invIA * $org_jbox2d_common_Vec2.cross$2(this.$m_rA, P);
				vB.x += this.$m_invMassB * P.x;
				vB.y += this.$m_invMassB * P.y;
				wB += this.$m_invIB * $org_jbox2d_common_Vec2.cross$2(this.$m_rB, P);
				this.pool.pushVec2(1);
			}
			else {
				this.$m_impulse = 0;
			}
			//    data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
		},
		solveVelocityConstraints: function(data) {
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var vpA = this.pool.popVec2();
			var vpB = this.pool.popVec2();
			// Cdot = dot(u, v + cross(w, r))
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, this.$m_rA, vpA);
			vpA.addLocal(vA);
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, vpB);
			vpB.addLocal(vB);
			var Cdot = $org_jbox2d_common_Vec2.dot(this.$m_u, vpB.subLocal(vpA));
			var impulse = -this.$m_mass * (Cdot + this.$m_bias + this.$m_gamma * this.$m_impulse);
			this.$m_impulse += impulse;
			var Px = impulse * this.$m_u.x;
			var Py = impulse * this.$m_u.y;
			vA.x -= this.$m_invMassA * Px;
			vA.y -= this.$m_invMassA * Py;
			wA -= this.$m_invIA * (this.$m_rA.x * Py - this.$m_rA.y * Px);
			vB.x += this.$m_invMassB * Px;
			vB.y += this.$m_invMassB * Py;
			wB += this.$m_invIB * (this.$m_rB.x * Py - this.$m_rB.y * Px);
			//    data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(2);
		},
		solvePositionConstraints: function(data) {
			if (this.$m_frequencyHz > 0) {
				return true;
			}
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var rA = this.pool.popVec2();
			var rB = this.pool.popVec2();
			var u = this.pool.popVec2();
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			qA.set(aA);
			qB.set(aB);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, u.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, u.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), rB);
			u.set(cB).addLocal(rB).subLocal(cA).subLocal(rA);
			var length = u.normalize();
			var C = length - this.$m_length;
			C = $org_jbox2d_common_MathUtils.clamp(C, -$org_jbox2d_common_Settings.maxLinearCorrection, $org_jbox2d_common_Settings.maxLinearCorrection);
			var impulse = -this.$m_mass * C;
			var Px = impulse * u.x;
			var Py = impulse * u.y;
			cA.x -= this.$m_invMassA * Px;
			cA.y -= this.$m_invMassA * Py;
			aA -= this.$m_invIA * (rA.x * Py - rA.y * Px);
			cB.x += this.$m_invMassB * Px;
			cB.y += this.$m_invMassB * Py;
			aB += this.$m_invIB * (rB.x * Py - rB.y * Px);
			//    data.positions[m_indexA].c.set(cA);
			data.positions[this.$m_indexA].a = aA;
			//    data.positions[m_indexB].c.set(cB);
			data.positions[this.$m_indexB].a = aB;
			this.pool.pushVec2(3);
			this.pool.pushRot(2);
			return $org_jbox2d_common_MathUtils.abs(C) < $org_jbox2d_common_Settings.linearSlop;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_DistanceJointDef, {
		initialize: function(b1, b2, anchor1, anchor2) {
			this.bodyA = b1;
			this.bodyB = b2;
			this.localAnchorA.set(this.bodyA.getLocalPoint(anchor1));
			this.localAnchorB.set(this.bodyB.getLocalPoint(anchor2));
			var d = anchor2.sub(anchor1);
			this.length = d.length();
		}
	}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_FrictionJoint, {
		getLocalAnchorA: function() {
			return this.$m_localAnchorA;
		},
		getLocalAnchorB: function() {
			return this.$m_localAnchorB;
		},
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, argOut);
		},
		getReactionForce: function(inv_dt, argOut) {
			argOut.set(this.$m_linearImpulse).mulLocal(inv_dt);
		},
		getReactionTorque: function(inv_dt) {
			return inv_dt * this.$m_angularImpulse;
		},
		setMaxForce: function(force) {
			this.$m_maxForce = force;
		},
		getMaxForce: function() {
			return this.$m_maxForce;
		},
		setMaxTorque: function(torque) {
			this.$m_maxTorque = torque;
		},
		getMaxTorque: function() {
			return this.$m_maxTorque;
		},
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassA = this.m_bodyA.m_invMass;
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIA = this.m_bodyA.m_invI;
			this.$m_invIB = this.m_bodyB.m_invI;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var temp = this.pool.popVec2();
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			qA.set(aA);
			qB.set(aB);
			// Compute the effective mass matrix.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), this.$m_rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), this.$m_rB);
			// J = [-I -r1_skew I r2_skew]
			// [ 0 -1 0 1]
			// r_skew = [-ry; rx]
			// Matlab
			// K = [ mA+r1y^2*iA+mB+r2y^2*iB, -r1y*iA*r1x-r2y*iB*r2x, -r1y*iA-r2y*iB]
			// [ -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB, r1x*iA+r2x*iB]
			// [ -r1y*iA-r2y*iB, r1x*iA+r2x*iB, iA+iB]
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var K = this.pool.popMat22();
			K.ex.x = mA + mB + iA * this.$m_rA.y * this.$m_rA.y + iB * this.$m_rB.y * this.$m_rB.y;
			K.ex.y = -iA * this.$m_rA.x * this.$m_rA.y - iB * this.$m_rB.x * this.$m_rB.y;
			K.ey.x = K.ex.y;
			K.ey.y = mA + mB + iA * this.$m_rA.x * this.$m_rA.x + iB * this.$m_rB.x * this.$m_rB.x;
			K.invertToOut(this.$m_linearMass);
			this.$m_angularMass = iA + iB;
			if (this.$m_angularMass > 0) {
				this.$m_angularMass = 1 / this.$m_angularMass;
			}
			if (data.step.warmStarting) {
				// Scale impulses to support a variable time step.
				this.$m_linearImpulse.mulLocal(data.step.dtRatio);
				this.$m_angularImpulse *= data.step.dtRatio;
				var P = this.pool.popVec2();
				P.set(this.$m_linearImpulse);
				temp.set(P).mulLocal(mA);
				vA.subLocal(temp);
				wA -= iA * ($org_jbox2d_common_Vec2.cross$2(this.$m_rA, P) + this.$m_angularImpulse);
				temp.set(P).mulLocal(mB);
				vB.addLocal(temp);
				wB += iB * ($org_jbox2d_common_Vec2.cross$2(this.$m_rB, P) + this.$m_angularImpulse);
				this.pool.pushVec2(1);
			}
			else {
				this.$m_linearImpulse.setZero();
				this.$m_angularImpulse = 0;
			}
			//    data.velocities[m_indexA].v.set(vA);
			if (data.velocities[this.$m_indexA].w !== wA) {
			}
			data.velocities[this.$m_indexA].w = wA;
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushRot(2);
			this.pool.pushVec2(1);
			this.pool.pushMat22(1);
		},
		solveVelocityConstraints: function(data) {
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var h = data.step.dt;
			// Solve angular friction
			{
				var Cdot = wB - wA;
				var impulse = -this.$m_angularMass * Cdot;
				var oldImpulse = this.$m_angularImpulse;
				var maxImpulse = h * this.$m_maxTorque;
				this.$m_angularImpulse = $org_jbox2d_common_MathUtils.clamp(this.$m_angularImpulse + impulse, -maxImpulse, maxImpulse);
				impulse = this.$m_angularImpulse - oldImpulse;
				wA -= iA * impulse;
				wB += iB * impulse;
			}
			// Solve linear friction
			{
				var Cdot1 = this.pool.popVec2();
				var temp = this.pool.popVec2();
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, this.$m_rA, temp);
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, Cdot1);
				Cdot1.addLocal(vB).subLocal(vA).subLocal(temp);
				var impulse1 = this.pool.popVec2();
				$org_jbox2d_common_Mat22.mulToOutUnsafe$1(this.$m_linearMass, Cdot1, impulse1);
				impulse1.negateLocal();
				var oldImpulse1 = this.pool.popVec2();
				oldImpulse1.set(this.$m_linearImpulse);
				this.$m_linearImpulse.addLocal(impulse1);
				var maxImpulse1 = h * this.$m_maxForce;
				if (this.$m_linearImpulse.lengthSquared() > maxImpulse1 * maxImpulse1) {
					this.$m_linearImpulse.normalize();
					this.$m_linearImpulse.mulLocal(maxImpulse1);
				}
				impulse1.set(this.$m_linearImpulse).subLocal(oldImpulse1);
				temp.set(impulse1).mulLocal(mA);
				vA.subLocal(temp);
				wA -= iA * $org_jbox2d_common_Vec2.cross$2(this.$m_rA, impulse1);
				temp.set(impulse1).mulLocal(mB);
				vB.addLocal(temp);
				wB += iB * $org_jbox2d_common_Vec2.cross$2(this.$m_rB, impulse1);
			}
			//    data.velocities[m_indexA].v.set(vA);
			if (data.velocities[this.$m_indexA].w !== wA) {
			}
			data.velocities[this.$m_indexA].w = wA;
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(4);
		},
		solvePositionConstraints: function(data) {
			return true;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_FrictionJointDef, {
		initialize: function(bA, bB, anchor) {
			this.bodyA = bA;
			this.bodyB = bB;
			bA.getLocalPointToOut(anchor, this.localAnchorA);
			bB.getLocalPointToOut(anchor, this.localAnchorB);
		}
	}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_GearJoint, {
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, argOut);
		},
		getReactionForce: function(inv_dt, argOut) {
			argOut.set(this.$m_JvAC).mulLocal(this.$m_impulse);
			argOut.mulLocal(inv_dt);
		},
		getReactionTorque: function(inv_dt) {
			var L = this.$m_impulse * this.$m_JwA;
			return inv_dt * L;
		},
		setRatio: function(argRatio) {
			this.$m_ratio = argRatio;
		},
		getRatio: function() {
			return this.$m_ratio;
		},
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_indexC = this.$m_bodyC.m_islandIndex;
			this.$m_indexD = this.$m_bodyD.m_islandIndex;
			this.$m_lcA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_lcB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_lcC.set(this.$m_bodyC.m_sweep.localCenter);
			this.$m_lcD.set(this.$m_bodyD.m_sweep.localCenter);
			this.$m_mA = this.m_bodyA.m_invMass;
			this.$m_mB = this.m_bodyB.m_invMass;
			this.$m_mC = this.$m_bodyC.m_invMass;
			this.$m_mD = this.$m_bodyD.m_invMass;
			this.$m_iA = this.m_bodyA.m_invI;
			this.$m_iB = this.m_bodyB.m_invI;
			this.$m_iC = this.$m_bodyC.m_invI;
			this.$m_iD = this.$m_bodyD.m_invI;
			// Vec2 cA = data.positions[m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			// Vec2 cB = data.positions[m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			// Vec2 cC = data.positions[m_indexC].c;
			var aC = data.positions[this.$m_indexC].a;
			var vC = data.velocities[this.$m_indexC].v;
			var wC = data.velocities[this.$m_indexC].w;
			// Vec2 cD = data.positions[m_indexD].c;
			var aD = data.positions[this.$m_indexD].a;
			var vD = data.velocities[this.$m_indexD].v;
			var wD = data.velocities[this.$m_indexD].w;
			var qA = this.pool.popRot(), qB = this.pool.popRot(), qC = this.pool.popRot(), qD = this.pool.popRot();
			qA.set(aA);
			qB.set(aB);
			qC.set(aC);
			qD.set(aD);
			this.$m_mass = 0;
			var temp = this.pool.popVec2();
			if (this.$m_typeA === 1) {
				this.$m_JvAC.setZero();
				this.$m_JwA = 1;
				this.$m_JwC = 1;
				this.$m_mass += this.$m_iA + this.$m_iC;
			}
			else {
				var rC = this.pool.popVec2();
				var rA = this.pool.popVec2();
				$org_jbox2d_common_Rot.mulToOutUnsafe(qC, this.$m_localAxisC, this.$m_JvAC);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qC, temp.set(this.$m_localAnchorC).subLocal(this.$m_lcC), rC);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_lcA), rA);
				this.$m_JwC = $org_jbox2d_common_Vec2.cross$2(rC, this.$m_JvAC);
				this.$m_JwA = $org_jbox2d_common_Vec2.cross$2(rA, this.$m_JvAC);
				this.$m_mass += this.$m_mC + this.$m_mA + this.$m_iC * this.$m_JwC * this.$m_JwC + this.$m_iA * this.$m_JwA * this.$m_JwA;
				this.pool.pushVec2(2);
			}
			if (this.$m_typeB === 1) {
				this.$m_JvBD.setZero();
				this.$m_JwB = this.$m_ratio;
				this.$m_JwD = this.$m_ratio;
				this.$m_mass += this.$m_ratio * this.$m_ratio * (this.$m_iB + this.$m_iD);
			}
			else {
				var u = this.pool.popVec2();
				var rD = this.pool.popVec2();
				var rB = this.pool.popVec2();
				$org_jbox2d_common_Rot.mulToOutUnsafe(qD, this.$m_localAxisD, u);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qD, temp.set(this.$m_localAnchorD).subLocal(this.$m_lcD), rD);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_lcB), rB);
				this.$m_JvBD.set(u).mulLocal(this.$m_ratio);
				this.$m_JwD = this.$m_ratio * $org_jbox2d_common_Vec2.cross$2(rD, u);
				this.$m_JwB = this.$m_ratio * $org_jbox2d_common_Vec2.cross$2(rB, u);
				this.$m_mass += this.$m_ratio * this.$m_ratio * (this.$m_mD + this.$m_mB) + this.$m_iD * this.$m_JwD * this.$m_JwD + this.$m_iB * this.$m_JwB * this.$m_JwB;
				this.pool.pushVec2(3);
			}
			// Compute effective mass.
			this.$m_mass = ((this.$m_mass > 0) ? (1 / this.$m_mass) : 0);
			if (data.step.warmStarting) {
				vA.x += this.$m_mA * this.$m_impulse * this.$m_JvAC.x;
				vA.y += this.$m_mA * this.$m_impulse * this.$m_JvAC.y;
				wA += this.$m_iA * this.$m_impulse * this.$m_JwA;
				vB.x += this.$m_mB * this.$m_impulse * this.$m_JvBD.x;
				vB.y += this.$m_mB * this.$m_impulse * this.$m_JvBD.y;
				wB += this.$m_iB * this.$m_impulse * this.$m_JwB;
				vC.x -= this.$m_mC * this.$m_impulse * this.$m_JvAC.x;
				vC.y -= this.$m_mC * this.$m_impulse * this.$m_JvAC.y;
				wC -= this.$m_iC * this.$m_impulse * this.$m_JwC;
				vD.x -= this.$m_mD * this.$m_impulse * this.$m_JvBD.x;
				vD.y -= this.$m_mD * this.$m_impulse * this.$m_JvBD.y;
				wD -= this.$m_iD * this.$m_impulse * this.$m_JwD;
			}
			else {
				this.$m_impulse = 0;
			}
			this.pool.pushVec2(1);
			this.pool.pushRot(4);
			// data.velocities[m_indexA].v = vA;
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v = vB;
			data.velocities[this.$m_indexB].w = wB;
			// data.velocities[m_indexC].v = vC;
			data.velocities[this.$m_indexC].w = wC;
			// data.velocities[m_indexD].v = vD;
			data.velocities[this.$m_indexD].w = wD;
		},
		solveVelocityConstraints: function(data) {
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var vC = data.velocities[this.$m_indexC].v;
			var wC = data.velocities[this.$m_indexC].w;
			var vD = data.velocities[this.$m_indexD].v;
			var wD = data.velocities[this.$m_indexD].w;
			var temp1 = this.pool.popVec2();
			var temp2 = this.pool.popVec2();
			var Cdot = $org_jbox2d_common_Vec2.dot(this.$m_JvAC, temp1.set(vA).subLocal(vC)) + $org_jbox2d_common_Vec2.dot(this.$m_JvBD, temp2.set(vB).subLocal(vD));
			Cdot += this.$m_JwA * wA - this.$m_JwC * wC + (this.$m_JwB * wB - this.$m_JwD * wD);
			this.pool.pushVec2(2);
			var impulse = -this.$m_mass * Cdot;
			this.$m_impulse += impulse;
			vA.x += this.$m_mA * impulse * this.$m_JvAC.x;
			vA.y += this.$m_mA * impulse * this.$m_JvAC.y;
			wA += this.$m_iA * impulse * this.$m_JwA;
			vB.x += this.$m_mB * impulse * this.$m_JvBD.x;
			vB.y += this.$m_mB * impulse * this.$m_JvBD.y;
			wB += this.$m_iB * impulse * this.$m_JwB;
			vC.x -= this.$m_mC * impulse * this.$m_JvAC.x;
			vC.y -= this.$m_mC * impulse * this.$m_JvAC.y;
			wC -= this.$m_iC * impulse * this.$m_JwC;
			vD.x -= this.$m_mD * impulse * this.$m_JvBD.x;
			vD.y -= this.$m_mD * impulse * this.$m_JvBD.y;
			wD -= this.$m_iD * impulse * this.$m_JwD;
			// data.velocities[m_indexA].v = vA;
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v = vB;
			data.velocities[this.$m_indexB].w = wB;
			// data.velocities[m_indexC].v = vC;
			data.velocities[this.$m_indexC].w = wC;
			// data.velocities[m_indexD].v = vD;
			data.velocities[this.$m_indexD].w = wD;
		},
		getJoint1: function() {
			return this.$m_joint1;
		},
		getJoint2: function() {
			return this.$m_joint2;
		},
		solvePositionConstraints: function(data) {
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var cC = data.positions[this.$m_indexC].c;
			var aC = data.positions[this.$m_indexC].a;
			var cD = data.positions[this.$m_indexD].c;
			var aD = data.positions[this.$m_indexD].a;
			var qA = this.pool.popRot(), qB = this.pool.popRot(), qC = this.pool.popRot(), qD = this.pool.popRot();
			qA.set(aA);
			qB.set(aB);
			qC.set(aC);
			qD.set(aD);
			var linearError = 0;
			var coordinateA, coordinateB;
			var temp = this.pool.popVec2();
			var JvAC = this.pool.popVec2();
			var JvBD = this.pool.popVec2();
			var JwA, JwB, JwC, JwD;
			var mass = 0;
			if (this.$m_typeA === 1) {
				JvAC.setZero();
				JwA = 1;
				JwC = 1;
				mass += this.$m_iA + this.$m_iC;
				coordinateA = aA - aC - this.$m_referenceAngleA;
			}
			else {
				var rC = this.pool.popVec2();
				var rA = this.pool.popVec2();
				var pC = this.pool.popVec2();
				var pA = this.pool.popVec2();
				$org_jbox2d_common_Rot.mulToOutUnsafe(qC, this.$m_localAxisC, JvAC);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qC, temp.set(this.$m_localAnchorC).subLocal(this.$m_lcC), rC);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_lcA), rA);
				JwC = $org_jbox2d_common_Vec2.cross$2(rC, JvAC);
				JwA = $org_jbox2d_common_Vec2.cross$2(rA, JvAC);
				mass += this.$m_mC + this.$m_mA + this.$m_iC * JwC * JwC + this.$m_iA * JwA * JwA;
				pC.set(this.$m_localAnchorC).subLocal(this.$m_lcC);
				$org_jbox2d_common_Rot.mulTransUnsafe$1(qC, temp.set(rA).addLocal(cA).subLocal(cC), pA);
				coordinateA = $org_jbox2d_common_Vec2.dot(pA.subLocal(pC), this.$m_localAxisC);
				this.pool.pushVec2(4);
			}
			if (this.$m_typeB === 1) {
				JvBD.setZero();
				JwB = this.$m_ratio;
				JwD = this.$m_ratio;
				mass += this.$m_ratio * this.$m_ratio * (this.$m_iB + this.$m_iD);
				coordinateB = aB - aD - this.$m_referenceAngleB;
			}
			else {
				var u = this.pool.popVec2();
				var rD = this.pool.popVec2();
				var rB = this.pool.popVec2();
				var pD = this.pool.popVec2();
				var pB = this.pool.popVec2();
				$org_jbox2d_common_Rot.mulToOutUnsafe(qD, this.$m_localAxisD, u);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qD, temp.set(this.$m_localAnchorD).subLocal(this.$m_lcD), rD);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_lcB), rB);
				JvBD.set(u).mulLocal(this.$m_ratio);
				JwD = $org_jbox2d_common_Vec2.cross$2(rD, u);
				JwB = $org_jbox2d_common_Vec2.cross$2(rB, u);
				mass += this.$m_ratio * this.$m_ratio * (this.$m_mD + this.$m_mB) + this.$m_iD * JwD * JwD + this.$m_iB * JwB * JwB;
				pD.set(this.$m_localAnchorD).subLocal(this.$m_lcD);
				$org_jbox2d_common_Rot.mulTransUnsafe$1(qD, temp.set(rB).addLocal(cB).subLocal(cD), pB);
				coordinateB = $org_jbox2d_common_Vec2.dot(pB.subLocal(pD), this.$m_localAxisD);
				this.pool.pushVec2(5);
			}
			var C = coordinateA + this.$m_ratio * coordinateB - this.$m_constant;
			var impulse = 0;
			if (mass > 0) {
				impulse = -C / mass;
			}
			this.pool.pushVec2(3);
			this.pool.pushRot(4);
			cA.x += this.$m_mA * impulse * JvAC.x;
			cA.y += this.$m_mA * impulse * JvAC.y;
			aA += this.$m_iA * impulse * JwA;
			cB.x += this.$m_mB * impulse * JvBD.x;
			cB.y += this.$m_mB * impulse * JvBD.y;
			aB += this.$m_iB * impulse * JwB;
			cC.x -= this.$m_mC * impulse * JvAC.x;
			cC.y -= this.$m_mC * impulse * JvAC.y;
			aC -= this.$m_iC * impulse * JwC;
			cD.x -= this.$m_mD * impulse * JvBD.x;
			cD.y -= this.$m_mD * impulse * JvBD.y;
			aD -= this.$m_iD * impulse * JwD;
			// data.positions[m_indexA].c = cA;
			data.positions[this.$m_indexA].a = aA;
			// data.positions[m_indexB].c = cB;
			data.positions[this.$m_indexB].a = aB;
			// data.positions[m_indexC].c = cC;
			data.positions[this.$m_indexC].a = aC;
			// data.positions[m_indexD].c = cD;
			data.positions[this.$m_indexD].a = aD;
			// TODO_ERIN not implemented
			return linearError < $org_jbox2d_common_Settings.linearSlop;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_GearJointDef, {}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_Jacobian, {});
	ss.initClass($org_jbox2d_dynamics_joints_JointEdge, {});
	ss.initEnum($org_jbox2d_dynamics_joints_JointType, { UNKNOWN: 0, REVOLUTE: 1, PRISMATIC: 2, DISTANCE: 3, PULLEY: 4, MOUSE: 5, GEAR: 6, WHEEL: 7, WELD: 8, FRICTION: 9, ROPE: 10, constanT_VOLUME: 11 });
	ss.initEnum($org_jbox2d_dynamics_joints_LimitState, { INACTIVE: 0, aT_LOWER: 1, aT_UPPER: 2, EQUAL: 3 });
	ss.initClass($org_jbox2d_dynamics_joints_MouseJoint, {
		getAnchorA: function(argOut) {
			argOut.set(this.$m_targetA);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, argOut);
		},
		getReactionForce: function(invDt, argOut) {
			argOut.set(this.$m_impulse).mulLocal(invDt);
		},
		getReactionTorque: function(invDt) {
			return invDt * 0;
		},
		setTarget: function(target) {
			if (this.m_bodyB.isAwake() === false) {
				this.m_bodyB.setAwake(true);
			}
			this.$m_targetA.set(target);
		},
		getTarget: function() {
			return this.$m_targetA;
		},
		setMaxForce: function(force) {
			this.$m_maxForce = force;
		},
		getMaxForce: function() {
			return this.$m_maxForce;
		},
		setFrequency: function(hz) {
			this.$m_frequencyHz = hz;
		},
		getFrequency: function() {
			return this.$m_frequencyHz;
		},
		setDampingRatio: function(ratio) {
			this.$m_dampingRatio = ratio;
		},
		getDampingRatio: function() {
			return this.$m_dampingRatio;
		},
		initVelocityConstraints: function(data) {
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIB = this.m_bodyB.m_invI;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var qB = this.pool.popRot();
			qB.set(aB);
			var mass = this.m_bodyB.getMass();
			// Frequency
			var omega = 2 * $org_jbox2d_common_MathUtils.PI * this.$m_frequencyHz;
			// Damping coefficient
			var d = 2 * mass * this.$m_dampingRatio * omega;
			// Spring stiffness
			var k = mass * (omega * omega);
			// magic formulas
			// gamma has units of inverse mass.
			// beta has units of inverse time.
			var h = data.step.dt;
			this.$m_gamma = h * (d + h * k);
			if (this.$m_gamma !== 0) {
				this.$m_gamma = 1 / this.$m_gamma;
			}
			this.$m_beta = h * k * this.$m_gamma;
			var temp = this.pool.popVec2();
			// Compute the effective mass matrix.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), this.$m_rB);
			// K = [(1/m1 + 1/m2) * eye(2) - skew(r1) * invI1 * skew(r1) - skew(r2) * invI2 * skew(r2)]
			// = [1/m1+1/m2 0 ] + invI1 * [r1.y*r1.y -r1.x*r1.y] + invI2 * [r1.y*r1.y -r1.x*r1.y]
			// [ 0 1/m1+1/m2] [-r1.x*r1.y r1.x*r1.x] [-r1.x*r1.y r1.x*r1.x]
			var K = this.pool.popMat22();
			K.ex.x = this.$m_invMassB + this.$m_invIB * this.$m_rB.y * this.$m_rB.y + this.$m_gamma;
			K.ex.y = -this.$m_invIB * this.$m_rB.x * this.$m_rB.y;
			K.ey.x = K.ex.y;
			K.ey.y = this.$m_invMassB + this.$m_invIB * this.$m_rB.x * this.$m_rB.x + this.$m_gamma;
			K.invertToOut(this.$m_mass);
			this.$m_C.set(cB).addLocal(this.$m_rB).subLocal(this.$m_targetA);
			this.$m_C.mulLocal(this.$m_beta);
			// Cheat with some damping
			wB *= 0.98;
			if (data.step.warmStarting) {
				this.$m_impulse.mulLocal(data.step.dtRatio);
				vB.x += this.$m_invMassB * this.$m_impulse.x;
				vB.y += this.$m_invMassB * this.$m_impulse.y;
				wB += this.$m_invIB * $org_jbox2d_common_Vec2.cross$2(this.$m_rB, this.$m_impulse);
			}
			else {
				this.$m_impulse.setZero();
			}
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(1);
			this.pool.pushMat22(1);
			this.pool.pushRot(1);
		},
		solvePositionConstraints: function(data) {
			return true;
		},
		solveVelocityConstraints: function(data) {
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			// Cdot = v + cross(w, r)
			var Cdot = this.pool.popVec2();
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, Cdot);
			Cdot.addLocal(vB);
			var impulse = this.pool.popVec2();
			var temp = this.pool.popVec2();
			temp.set(this.$m_impulse).mulLocal(this.$m_gamma).addLocal(this.$m_C).addLocal(Cdot).negateLocal();
			$org_jbox2d_common_Mat22.mulToOutUnsafe$1(this.$m_mass, temp, impulse);
			var oldImpulse = temp;
			oldImpulse.set(this.$m_impulse);
			this.$m_impulse.addLocal(impulse);
			var maxImpulse = data.step.dt * this.$m_maxForce;
			if (this.$m_impulse.lengthSquared() > maxImpulse * maxImpulse) {
				this.$m_impulse.mulLocal(maxImpulse / this.$m_impulse.length());
			}
			impulse.set(this.$m_impulse).subLocal(oldImpulse);
			vB.x += this.$m_invMassB * impulse.x;
			vB.y += this.$m_invMassB * impulse.y;
			wB += this.$m_invIB * $org_jbox2d_common_Vec2.cross$2(this.$m_rB, impulse);
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(3);
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_MouseJointDef, {}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_PrismaticJoint, {
		getLocalAnchorA: function() {
			return this.m_localAnchorA;
		},
		getLocalAnchorB: function() {
			return this.m_localAnchorB;
		},
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.m_localAnchorB, argOut);
		},
		getReactionForce: function(inv_dt, argOut) {
			var temp = this.pool.popVec2();
			temp.set(this.$m_axis).mulLocal(this.$m_motorImpulse + this.$m_impulse.z);
			argOut.set(this.$m_perp).mulLocal(this.$m_impulse.x).addLocal(temp).mulLocal(inv_dt);
			this.pool.pushVec2(1);
		},
		getReactionTorque: function(inv_dt) {
			return inv_dt * this.$m_impulse.y;
		},
		getJointSpeed: function() {
			var bA = this.m_bodyA;
			var bB = this.m_bodyB;
			var temp = this.pool.popVec2();
			var rA = this.pool.popVec2();
			var rB = this.pool.popVec2();
			var p1 = this.pool.popVec2();
			var p2 = this.pool.popVec2();
			var d = this.pool.popVec2();
			var axis = this.pool.popVec2();
			var temp2 = this.pool.popVec2();
			var temp3 = this.pool.popVec2();
			temp.set(this.m_localAnchorA).subLocal(bA.m_sweep.localCenter);
			$org_jbox2d_common_Rot.mulToOutUnsafe(bA.m_xf.q, temp, rA);
			temp.set(this.m_localAnchorB).subLocal(bB.m_sweep.localCenter);
			$org_jbox2d_common_Rot.mulToOutUnsafe(bB.m_xf.q, temp, rB);
			p1.set(bA.m_sweep.c).addLocal(rA);
			p2.set(bB.m_sweep.c).addLocal(rB);
			d.set(p2).subLocal(p1);
			$org_jbox2d_common_Rot.mulToOutUnsafe(bA.m_xf.q, this.m_localXAxisA, axis);
			var vA = bA.m_linearVelocity;
			var vB = bB.m_linearVelocity;
			var wA = bA.m_angularVelocity;
			var wB = bB.m_angularVelocity;
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, axis, temp);
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, rB, temp2);
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, rA, temp3);
			temp2.addLocal(vB).subLocal(vA).subLocal(temp3);
			var speed = $org_jbox2d_common_Vec2.dot(d, temp) + $org_jbox2d_common_Vec2.dot(axis, temp2);
			this.pool.pushVec2(9);
			return speed;
		},
		getJointTranslation: function() {
			var pA = this.pool.popVec2(), pB = this.pool.popVec2(), axis = this.pool.popVec2();
			this.m_bodyA.getWorldPointToOut(this.m_localAnchorA, pA);
			this.m_bodyB.getWorldPointToOut(this.m_localAnchorB, pB);
			this.m_bodyA.getWorldVectorToOutUnsafe(this.m_localXAxisA, axis);
			pB.subLocal(pA);
			var translation = $org_jbox2d_common_Vec2.dot(pB, axis);
			this.pool.pushVec2(3);
			return translation;
		},
		isLimitEnabled: function() {
			return this.$m_enableLimit;
		},
		enableLimit: function(flag) {
			if (flag !== this.$m_enableLimit) {
				this.m_bodyA.setAwake(true);
				this.m_bodyB.setAwake(true);
				this.$m_enableLimit = flag;
				this.$m_impulse.z = 0;
			}
		},
		getLowerLimit: function() {
			return this.$m_lowerTranslation;
		},
		getUpperLimit: function() {
			return this.$m_upperTranslation;
		},
		setLimits: function(lower, upper) {
			if (lower !== this.$m_lowerTranslation || upper !== this.$m_upperTranslation) {
				this.m_bodyA.setAwake(true);
				this.m_bodyB.setAwake(true);
				this.$m_lowerTranslation = lower;
				this.$m_upperTranslation = upper;
				this.$m_impulse.z = 0;
			}
		},
		isMotorEnabled: function() {
			return this.$m_enableMotor;
		},
		enableMotor: function(flag) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_enableMotor = flag;
		},
		setMotorSpeed: function(speed) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_motorSpeed = speed;
		},
		getMotorSpeed: function() {
			return this.$m_motorSpeed;
		},
		setMaxMotorForce: function(force) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_maxMotorForce = force;
		},
		getMotorForce: function(inv_dt) {
			return this.$m_motorImpulse * inv_dt;
		},
		getMaxMotorForce: function() {
			return this.$m_maxMotorForce;
		},
		getReferenceAngle: function() {
			return this.m_referenceAngle;
		},
		getLocalAxisA: function() {
			return this.m_localXAxisA;
		},
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassA = this.m_bodyA.m_invMass;
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIA = this.m_bodyA.m_invI;
			this.$m_invIB = this.m_bodyB.m_invI;
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var d = this.pool.popVec2();
			var temp = this.pool.popVec2();
			var rA = this.pool.popVec2();
			var rB = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			// Compute the effective masses.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, d.set(this.m_localAnchorA).subLocal(this.$m_localCenterA), rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, d.set(this.m_localAnchorB).subLocal(this.$m_localCenterB), rB);
			d.set(cB).subLocal(cA).addLocal(rB).subLocal(rA);
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			// Compute motor Jacobian and effective mass.
			{
				$org_jbox2d_common_Rot.mulToOutUnsafe(qA, this.m_localXAxisA, this.$m_axis);
				temp.set(d).addLocal(rA);
				this.$m_a1 = $org_jbox2d_common_Vec2.cross$2(temp, this.$m_axis);
				this.$m_a2 = $org_jbox2d_common_Vec2.cross$2(rB, this.$m_axis);
				this.$m_motorMass = mA + mB + iA * this.$m_a1 * this.$m_a1 + iB * this.$m_a2 * this.$m_a2;
				if (this.$m_motorMass > 0) {
					this.$m_motorMass = 1 / this.$m_motorMass;
				}
			}
			// Prismatic constraint.
			{
				$org_jbox2d_common_Rot.mulToOutUnsafe(qA, this.m_localYAxisA, this.$m_perp);
				temp.set(d).addLocal(rA);
				this.$m_s1 = $org_jbox2d_common_Vec2.cross$2(temp, this.$m_perp);
				this.$m_s2 = $org_jbox2d_common_Vec2.cross$2(rB, this.$m_perp);
				var k11 = mA + mB + iA * this.$m_s1 * this.$m_s1 + iB * this.$m_s2 * this.$m_s2;
				var k12 = iA * this.$m_s1 + iB * this.$m_s2;
				var k13 = iA * this.$m_s1 * this.$m_a1 + iB * this.$m_s2 * this.$m_a2;
				var k22 = iA + iB;
				if (k22 === 0) {
					// For bodies with fixed rotation.
					k22 = 1;
				}
				var k23 = iA * this.$m_a1 + iB * this.$m_a2;
				var k33 = mA + mB + iA * this.$m_a1 * this.$m_a1 + iB * this.$m_a2 * this.$m_a2;
				this.$m_K.ex.set$1(k11, k12, k13);
				this.$m_K.ey.set$1(k12, k22, k23);
				this.$m_K.ez.set$1(k13, k23, k33);
			}
			// Compute motor and limit terms.
			if (this.$m_enableLimit) {
				var jointTranslation = $org_jbox2d_common_Vec2.dot(this.$m_axis, d);
				if ($org_jbox2d_common_MathUtils.abs(this.$m_upperTranslation - this.$m_lowerTranslation) < 2 * $org_jbox2d_common_Settings.linearSlop) {
					this.$m_limitState = 3;
				}
				else if (jointTranslation <= this.$m_lowerTranslation) {
					if (this.$m_limitState !== 1) {
						this.$m_limitState = 1;
						this.$m_impulse.z = 0;
					}
				}
				else if (jointTranslation >= this.$m_upperTranslation) {
					if (this.$m_limitState !== 2) {
						this.$m_limitState = 2;
						this.$m_impulse.z = 0;
					}
				}
				else {
					this.$m_limitState = 0;
					this.$m_impulse.z = 0;
				}
			}
			else {
				this.$m_limitState = 0;
				this.$m_impulse.z = 0;
			}
			if (this.$m_enableMotor === false) {
				this.$m_motorImpulse = 0;
			}
			if (data.step.warmStarting) {
				// Account for variable time step.
				this.$m_impulse.mulLocal(data.step.dtRatio);
				this.$m_motorImpulse *= data.step.dtRatio;
				var P = this.pool.popVec2();
				temp.set(this.$m_axis).mulLocal(this.$m_motorImpulse + this.$m_impulse.z);
				P.set(this.$m_perp).mulLocal(this.$m_impulse.x).addLocal(temp);
				var LA = this.$m_impulse.x * this.$m_s1 + this.$m_impulse.y + (this.$m_motorImpulse + this.$m_impulse.z) * this.$m_a1;
				var LB = this.$m_impulse.x * this.$m_s2 + this.$m_impulse.y + (this.$m_motorImpulse + this.$m_impulse.z) * this.$m_a2;
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * LA;
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * LB;
				this.pool.pushVec2(1);
			}
			else {
				this.$m_impulse.setZero();
				this.$m_motorImpulse = 0;
			}
			// data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushRot(2);
			this.pool.pushVec2(4);
		},
		solveVelocityConstraints: function(data) {
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var temp = this.pool.popVec2();
			// Solve linear motor constraint.
			if (this.$m_enableMotor && this.$m_limitState !== 3) {
				temp.set(vB).subLocal(vA);
				var Cdot = $org_jbox2d_common_Vec2.dot(this.$m_axis, temp) + this.$m_a2 * wB - this.$m_a1 * wA;
				var impulse = this.$m_motorMass * (this.$m_motorSpeed - Cdot);
				var oldImpulse = this.$m_motorImpulse;
				var maxImpulse = data.step.dt * this.$m_maxMotorForce;
				this.$m_motorImpulse = $org_jbox2d_common_MathUtils.clamp(this.$m_motorImpulse + impulse, -maxImpulse, maxImpulse);
				impulse = this.$m_motorImpulse - oldImpulse;
				var P = this.pool.popVec2();
				P.set(this.$m_axis).mulLocal(impulse);
				var LA = impulse * this.$m_a1;
				var LB = impulse * this.$m_a2;
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * LA;
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * LB;
				this.pool.pushVec2(1);
			}
			var Cdot1 = this.pool.popVec2();
			temp.set(vB).subLocal(vA);
			Cdot1.x = $org_jbox2d_common_Vec2.dot(this.$m_perp, temp) + this.$m_s2 * wB - this.$m_s1 * wA;
			Cdot1.y = wB - wA;
			// System.out.println(Cdot1);
			if (this.$m_enableLimit && this.$m_limitState !== 0) {
				// Solve prismatic and limit constraint in block form.
				var Cdot2;
				temp.set(vB).subLocal(vA);
				Cdot2 = $org_jbox2d_common_Vec2.dot(this.$m_axis, temp) + this.$m_a2 * wB - this.$m_a1 * wA;
				var Cdot3 = this.pool.popVec3();
				Cdot3.set$1(Cdot1.x, Cdot1.y, Cdot2);
				var f1 = this.pool.popVec3();
				var df = this.pool.popVec3();
				f1.set(this.$m_impulse);
				this.$m_K.solve33ToOut(Cdot3.negateLocal(), df);
				// Cdot.negateLocal(); not used anymore
				this.$m_impulse.addLocal(df);
				if (this.$m_limitState === 1) {
					this.$m_impulse.z = $org_jbox2d_common_MathUtils.max(this.$m_impulse.z, 0);
				}
				else if (this.$m_limitState === 2) {
					this.$m_impulse.z = $org_jbox2d_common_MathUtils.min(this.$m_impulse.z, 0);
				}
				// f2(1:2) = invK(1:2,1:2) * (-Cdot(1:2) - K(1:2,3) * (f2(3) - f1(3))) +
				// f1(1:2)
				var b = this.pool.popVec2();
				var f2r = this.pool.popVec2();
				temp.set$1(this.$m_K.ez.x, this.$m_K.ez.y).mulLocal(this.$m_impulse.z - f1.z);
				b.set(Cdot1).negateLocal().subLocal(temp);
				this.$m_K.solve22ToOut(b, f2r);
				f2r.addLocal$1(f1.x, f1.y);
				this.$m_impulse.x = f2r.x;
				this.$m_impulse.y = f2r.y;
				df.set(this.$m_impulse).subLocal(f1);
				var P1 = this.pool.popVec2();
				temp.set(this.$m_axis).mulLocal(df.z);
				P1.set(this.$m_perp).mulLocal(df.x).addLocal(temp);
				var LA1 = df.x * this.$m_s1 + df.y + df.z * this.$m_a1;
				var LB1 = df.x * this.$m_s2 + df.y + df.z * this.$m_a2;
				vA.x -= mA * P1.x;
				vA.y -= mA * P1.y;
				wA -= iA * LA1;
				vB.x += mB * P1.x;
				vB.y += mB * P1.y;
				wB += iB * LB1;
				this.pool.pushVec2(3);
				this.pool.pushVec3(3);
			}
			else {
				// Limit is inactive, just solve the prismatic constraint in block form.
				var df1 = this.pool.popVec2();
				this.$m_K.solve22ToOut(Cdot1.negateLocal(), df1);
				Cdot1.negateLocal();
				this.$m_impulse.x += df1.x;
				this.$m_impulse.y += df1.y;
				var P2 = this.pool.popVec2();
				P2.set(this.$m_perp).mulLocal(df1.x);
				var LA2 = df1.x * this.$m_s1 + df1.y;
				var LB2 = df1.x * this.$m_s2 + df1.y;
				vA.x -= mA * P2.x;
				vA.y -= mA * P2.y;
				wA -= iA * LA2;
				vB.x += mB * P2.x;
				vB.y += mB * P2.y;
				wB += iB * LB2;
				this.pool.pushVec2(2);
			}
			// data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(2);
		},
		solvePositionConstraints: function(data) {
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var rA = this.pool.popVec2();
			var rB = this.pool.popVec2();
			var d = this.pool.popVec2();
			var axis = this.pool.popVec2();
			var perp = this.pool.popVec2();
			var temp = this.pool.popVec2();
			var C1 = this.pool.popVec2();
			var impulse = this.pool.popVec3();
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			qA.set(aA);
			qB.set(aB);
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			// Compute fresh Jacobians
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.m_localAnchorA).subLocal(this.$m_localCenterA), rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.m_localAnchorB).subLocal(this.$m_localCenterB), rB);
			d.set(cB).addLocal(rB).subLocal(cA).subLocal(rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, this.m_localXAxisA, axis);
			var a1 = $org_jbox2d_common_Vec2.cross$2(temp.set(d).addLocal(rA), axis);
			var a2 = $org_jbox2d_common_Vec2.cross$2(rB, axis);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, this.m_localYAxisA, perp);
			var s1 = $org_jbox2d_common_Vec2.cross$2(temp.set(d).addLocal(rA), perp);
			var s2 = $org_jbox2d_common_Vec2.cross$2(rB, perp);
			C1.x = $org_jbox2d_common_Vec2.dot(perp, d);
			C1.y = aB - aA - this.m_referenceAngle;
			var linearError = $org_jbox2d_common_MathUtils.abs(C1.x);
			var angularError = $org_jbox2d_common_MathUtils.abs(C1.y);
			var active = false;
			var C2 = 0;
			if (this.$m_enableLimit) {
				var translation = $org_jbox2d_common_Vec2.dot(axis, d);
				if ($org_jbox2d_common_MathUtils.abs(this.$m_upperTranslation - this.$m_lowerTranslation) < 2 * $org_jbox2d_common_Settings.linearSlop) {
					// Prevent large angular corrections
					C2 = $org_jbox2d_common_MathUtils.clamp(translation, -$org_jbox2d_common_Settings.maxLinearCorrection, $org_jbox2d_common_Settings.maxLinearCorrection);
					linearError = $org_jbox2d_common_MathUtils.max(linearError, $org_jbox2d_common_MathUtils.abs(translation));
					active = true;
				}
				else if (translation <= this.$m_lowerTranslation) {
					// Prevent large linear corrections and allow some slop.
					C2 = $org_jbox2d_common_MathUtils.clamp(translation - this.$m_lowerTranslation + $org_jbox2d_common_Settings.linearSlop, -$org_jbox2d_common_Settings.maxLinearCorrection, 0);
					linearError = $org_jbox2d_common_MathUtils.max(linearError, this.$m_lowerTranslation - translation);
					active = true;
				}
				else if (translation >= this.$m_upperTranslation) {
					// Prevent large linear corrections and allow some slop.
					C2 = $org_jbox2d_common_MathUtils.clamp(translation - this.$m_upperTranslation - $org_jbox2d_common_Settings.linearSlop, 0, $org_jbox2d_common_Settings.maxLinearCorrection);
					linearError = $org_jbox2d_common_MathUtils.max(linearError, translation - this.$m_upperTranslation);
					active = true;
				}
			}
			if (active) {
				var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
				var k12 = iA * s1 + iB * s2;
				var k13 = iA * s1 * a1 + iB * s2 * a2;
				var k22 = iA + iB;
				if (k22 === 0) {
					// For fixed rotation
					k22 = 1;
				}
				var k23 = iA * a1 + iB * a2;
				var k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;
				var K = this.pool.popMat33();
				K.ex.set$1(k11, k12, k13);
				K.ey.set$1(k12, k22, k23);
				K.ez.set$1(k13, k23, k33);
				var C = this.pool.popVec3();
				C.x = C1.x;
				C.y = C1.y;
				C.z = C2;
				K.solve33ToOut(C.negateLocal(), impulse);
				this.pool.pushVec3(1);
				this.pool.pushMat33(1);
			}
			else {
				var k111 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
				var k121 = iA * s1 + iB * s2;
				var k221 = iA + iB;
				if (k221 === 0) {
					k221 = 1;
				}
				var K1 = this.pool.popMat22();
				K1.ex.set$1(k111, k121);
				K1.ey.set$1(k121, k221);
				// temp is impulse1
				K1.solveToOut(C1.negateLocal(), temp);
				C1.negateLocal();
				impulse.x = temp.x;
				impulse.y = temp.y;
				impulse.z = 0;
				this.pool.pushMat22(1);
			}
			var Px = impulse.x * perp.x + impulse.z * axis.x;
			var Py = impulse.x * perp.y + impulse.z * axis.y;
			var LA = impulse.x * s1 + impulse.y + impulse.z * a1;
			var LB = impulse.x * s2 + impulse.y + impulse.z * a2;
			cA.x -= mA * Px;
			cA.y -= mA * Py;
			aA -= iA * LA;
			cB.x += mB * Px;
			cB.y += mB * Py;
			aB += iB * LB;
			// data.positions[m_indexA].c.set(cA);
			data.positions[this.$m_indexA].a = aA;
			// data.positions[m_indexB].c.set(cB);
			data.positions[this.$m_indexB].a = aB;
			this.pool.pushVec2(7);
			this.pool.pushVec3(1);
			this.pool.pushRot(2);
			return linearError <= $org_jbox2d_common_Settings.linearSlop && angularError <= $org_jbox2d_common_Settings.angularSlop;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_PrismaticJointDef, {
		initialize: function(b1, b2, anchor, axis) {
			this.bodyA = b1;
			this.bodyB = b2;
			this.bodyA.getLocalPointToOut(anchor, this.localAnchorA);
			this.bodyB.getLocalPointToOut(anchor, this.localAnchorB);
			this.bodyA.getLocalVectorToOut(axis, this.localAxisA);
			this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
		}
	}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_PulleyJoint, {
		getLengthA: function() {
			return this.$m_lengthA;
		},
		getLengthB: function() {
			return this.$m_lengthB;
		},
		getCurrentLengthA: function() {
			var p = this.pool.popVec2();
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, p);
			p.subLocal(this.$m_groundAnchorA);
			var length = p.length();
			this.pool.pushVec2(1);
			return length;
		},
		getCurrentLengthB: function() {
			var p = this.pool.popVec2();
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, p);
			p.subLocal(this.$m_groundAnchorB);
			var length = p.length();
			this.pool.pushVec2(1);
			return length;
		},
		getLocalAnchorA: function() {
			return this.$m_localAnchorA;
		},
		getLocalAnchorB: function() {
			return this.$m_localAnchorB;
		},
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, argOut);
		},
		getReactionForce: function(inv_dt, argOut) {
			argOut.set(this.$m_uB).mulLocal(this.$m_impulse).mulLocal(inv_dt);
		},
		getReactionTorque: function(inv_dt) {
			return 0;
		},
		getGroundAnchorA: function() {
			return this.$m_groundAnchorA;
		},
		getGroundAnchorB: function() {
			return this.$m_groundAnchorB;
		},
		getLength1: function() {
			var p = this.pool.popVec2();
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, p);
			p.subLocal(this.$m_groundAnchorA);
			var len = p.length();
			this.pool.pushVec2(1);
			return len;
		},
		getLength2: function() {
			var p = this.pool.popVec2();
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, p);
			p.subLocal(this.$m_groundAnchorB);
			var len = p.length();
			this.pool.pushVec2(1);
			return len;
		},
		getRatio: function() {
			return this.$m_ratio;
		},
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassA = this.m_bodyA.m_invMass;
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIA = this.m_bodyA.m_invI;
			this.$m_invIB = this.m_bodyB.m_invI;
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var temp = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			// Compute the effective masses.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), this.$m_rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), this.$m_rB);
			this.$m_uA.set(cA).addLocal(this.$m_rA).subLocal(this.$m_groundAnchorA);
			this.$m_uB.set(cB).addLocal(this.$m_rB).subLocal(this.$m_groundAnchorB);
			var lengthA = this.$m_uA.length();
			var lengthB = this.$m_uB.length();
			if (lengthA > 10 * $org_jbox2d_common_Settings.linearSlop) {
				this.$m_uA.mulLocal(1 / lengthA);
			}
			else {
				this.$m_uA.setZero();
			}
			if (lengthB > 10 * $org_jbox2d_common_Settings.linearSlop) {
				this.$m_uB.mulLocal(1 / lengthB);
			}
			else {
				this.$m_uB.setZero();
			}
			// Compute effective mass.
			var ruA = $org_jbox2d_common_Vec2.cross$2(this.$m_rA, this.$m_uA);
			var ruB = $org_jbox2d_common_Vec2.cross$2(this.$m_rB, this.$m_uB);
			var mA = this.$m_invMassA + this.$m_invIA * ruA * ruA;
			var mB = this.$m_invMassB + this.$m_invIB * ruB * ruB;
			this.$m_mass = mA + this.$m_ratio * this.$m_ratio * mB;
			if (this.$m_mass > 0) {
				this.$m_mass = 1 / this.$m_mass;
			}
			if (data.step.warmStarting) {
				// Scale impulses to support variable time steps.
				this.$m_impulse *= data.step.dtRatio;
				// Warm starting.
				var PA = this.pool.popVec2();
				var PB = this.pool.popVec2();
				PA.set(this.$m_uA).mulLocal(-this.$m_impulse);
				PB.set(this.$m_uB).mulLocal(-this.$m_ratio * this.$m_impulse);
				vA.x += this.$m_invMassA * PA.x;
				vA.y += this.$m_invMassA * PA.y;
				wA += this.$m_invIA * $org_jbox2d_common_Vec2.cross$2(this.$m_rA, PA);
				vB.x += this.$m_invMassB * PB.x;
				vB.y += this.$m_invMassB * PB.y;
				wB += this.$m_invIB * $org_jbox2d_common_Vec2.cross$2(this.$m_rB, PB);
				this.pool.pushVec2(2);
			}
			else {
				this.$m_impulse = 0;
			}
			//    data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(1);
			this.pool.pushRot(2);
		},
		solveVelocityConstraints: function(data) {
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var vpA = this.pool.popVec2();
			var vpB = this.pool.popVec2();
			var PA = this.pool.popVec2();
			var PB = this.pool.popVec2();
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, this.$m_rA, vpA);
			vpA.addLocal(vA);
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, vpB);
			vpB.addLocal(vB);
			var Cdot = -$org_jbox2d_common_Vec2.dot(this.$m_uA, vpA) - this.$m_ratio * $org_jbox2d_common_Vec2.dot(this.$m_uB, vpB);
			var impulse = -this.$m_mass * Cdot;
			this.$m_impulse += impulse;
			PA.set(this.$m_uA).mulLocal(-impulse);
			PB.set(this.$m_uB).mulLocal(-this.$m_ratio * impulse);
			vA.x += this.$m_invMassA * PA.x;
			vA.y += this.$m_invMassA * PA.y;
			wA += this.$m_invIA * $org_jbox2d_common_Vec2.cross$2(this.$m_rA, PA);
			vB.x += this.$m_invMassB * PB.x;
			vB.y += this.$m_invMassB * PB.y;
			wB += this.$m_invIB * $org_jbox2d_common_Vec2.cross$2(this.$m_rB, PB);
			//    data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(4);
		},
		solvePositionConstraints: function(data) {
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var rA = this.pool.popVec2();
			var rB = this.pool.popVec2();
			var uA = this.pool.popVec2();
			var uB = this.pool.popVec2();
			var temp = this.pool.popVec2();
			var PA = this.pool.popVec2();
			var PB = this.pool.popVec2();
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			qA.set(aA);
			qB.set(aB);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), rB);
			uA.set(cA).addLocal(rA).subLocal(this.$m_groundAnchorA);
			uB.set(cB).addLocal(rB).subLocal(this.$m_groundAnchorB);
			var lengthA = uA.length();
			var lengthB = uB.length();
			if (lengthA > 10 * $org_jbox2d_common_Settings.linearSlop) {
				uA.mulLocal(1 / lengthA);
			}
			else {
				uA.setZero();
			}
			if (lengthB > 10 * $org_jbox2d_common_Settings.linearSlop) {
				uB.mulLocal(1 / lengthB);
			}
			else {
				uB.setZero();
			}
			// Compute effective mass.
			var ruA = $org_jbox2d_common_Vec2.cross$2(rA, uA);
			var ruB = $org_jbox2d_common_Vec2.cross$2(rB, uB);
			var mA = this.$m_invMassA + this.$m_invIA * ruA * ruA;
			var mB = this.$m_invMassB + this.$m_invIB * ruB * ruB;
			var mass = mA + this.$m_ratio * this.$m_ratio * mB;
			if (mass > 0) {
				mass = 1 / mass;
			}
			var C = this.$m_constant - lengthA - this.$m_ratio * lengthB;
			var linearError = $org_jbox2d_common_MathUtils.abs(C);
			var impulse = -mass * C;
			PA.set(uA).mulLocal(-impulse);
			PB.set(uB).mulLocal(-this.$m_ratio * impulse);
			cA.x += this.$m_invMassA * PA.x;
			cA.y += this.$m_invMassA * PA.y;
			aA += this.$m_invIA * $org_jbox2d_common_Vec2.cross$2(rA, PA);
			cB.x += this.$m_invMassB * PB.x;
			cB.y += this.$m_invMassB * PB.y;
			aB += this.$m_invIB * $org_jbox2d_common_Vec2.cross$2(rB, PB);
			//    data.positions[m_indexA].c.set(cA);
			data.positions[this.$m_indexA].a = aA;
			//    data.positions[m_indexB].c.set(cB);
			data.positions[this.$m_indexB].a = aB;
			this.pool.pushRot(2);
			this.pool.pushVec2(7);
			return linearError < $org_jbox2d_common_Settings.linearSlop;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_PulleyJointDef, {
		initialize: function(b1, b2, ga1, ga2, anchor1, anchor2, r) {
			this.bodyA = b1;
			this.bodyB = b2;
			this.groundAnchorA = ga1;
			this.groundAnchorB = ga2;
			this.localAnchorA = this.bodyA.getLocalPoint(anchor1);
			this.localAnchorB = this.bodyB.getLocalPoint(anchor2);
			var d1 = anchor1.sub(ga1);
			this.lengthA = d1.length();
			var d2 = anchor2.sub(ga2);
			this.lengthB = d2.length();
			this.ratio = r;
		}
	}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_RevoluteJoint, {
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassA = this.m_bodyA.m_invMass;
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIA = this.m_bodyA.m_invI;
			this.$m_invIB = this.m_bodyB.m_invI;
			// Vec2 cA = data.positions[m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			// Vec2 cB = data.positions[m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var temp = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			// Compute the effective masses.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.m_localAnchorA).subLocal(this.$m_localCenterA), this.$m_rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.m_localAnchorB).subLocal(this.$m_localCenterB), this.$m_rB);
			// J = [-I -r1_skew I r2_skew]
			// [ 0 -1 0 1]
			// r_skew = [-ry; rx]
			// Matlab
			// K = [ mA+r1y^2*iA+mB+r2y^2*iB, -r1y*iA*r1x-r2y*iB*r2x, -r1y*iA-r2y*iB]
			// [ -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB, r1x*iA+r2x*iB]
			// [ -r1y*iA-r2y*iB, r1x*iA+r2x*iB, iA+iB]
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var fixedRotation = iA + iB === 0;
			this.$m_mass.ex.x = mA + mB + this.$m_rA.y * this.$m_rA.y * iA + this.$m_rB.y * this.$m_rB.y * iB;
			this.$m_mass.ey.x = -this.$m_rA.y * this.$m_rA.x * iA - this.$m_rB.y * this.$m_rB.x * iB;
			this.$m_mass.ez.x = -this.$m_rA.y * iA - this.$m_rB.y * iB;
			this.$m_mass.ex.y = this.$m_mass.ey.x;
			this.$m_mass.ey.y = mA + mB + this.$m_rA.x * this.$m_rA.x * iA + this.$m_rB.x * this.$m_rB.x * iB;
			this.$m_mass.ez.y = this.$m_rA.x * iA + this.$m_rB.x * iB;
			this.$m_mass.ex.z = this.$m_mass.ez.x;
			this.$m_mass.ey.z = this.$m_mass.ez.y;
			this.$m_mass.ez.z = iA + iB;
			this.$m_motorMass = iA + iB;
			if (this.$m_motorMass > 0) {
				this.$m_motorMass = 1 / this.$m_motorMass;
			}
			if (this.$m_enableMotor === false || fixedRotation) {
				this.$m_motorImpulse = 0;
			}
			if (this.$m_enableLimit && fixedRotation === false) {
				var jointAngle = aB - aA - this.m_referenceAngle;
				if ($org_jbox2d_common_MathUtils.abs(this.$m_upperAngle - this.$m_lowerAngle) < 2 * $org_jbox2d_common_Settings.angularSlop) {
					this.$m_limitState = 3;
				}
				else if (jointAngle <= this.$m_lowerAngle) {
					if (this.$m_limitState !== 1) {
						this.$m_impulse.z = 0;
					}
					this.$m_limitState = 1;
				}
				else if (jointAngle >= this.$m_upperAngle) {
					if (this.$m_limitState !== 2) {
						this.$m_impulse.z = 0;
					}
					this.$m_limitState = 2;
				}
				else {
					this.$m_limitState = 0;
					this.$m_impulse.z = 0;
				}
			}
			else {
				this.$m_limitState = 0;
			}
			if (data.step.warmStarting) {
				var P = this.pool.popVec2();
				// Scale impulses to support a variable time step.
				this.$m_impulse.x *= data.step.dtRatio;
				this.$m_impulse.y *= data.step.dtRatio;
				this.$m_motorImpulse *= data.step.dtRatio;
				P.x = this.$m_impulse.x;
				P.y = this.$m_impulse.y;
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * ($org_jbox2d_common_Vec2.cross$2(this.$m_rA, P) + this.$m_motorImpulse + this.$m_impulse.z);
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * ($org_jbox2d_common_Vec2.cross$2(this.$m_rB, P) + this.$m_motorImpulse + this.$m_impulse.z);
				this.pool.pushVec2(1);
			}
			else {
				this.$m_impulse.setZero();
				this.$m_motorImpulse = 0;
			}
			// data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(1);
			this.pool.pushRot(2);
		},
		solveVelocityConstraints: function(data) {
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var fixedRotation = iA + iB === 0;
			// Solve motor constraint.
			if (this.$m_enableMotor && this.$m_limitState !== 3 && fixedRotation === false) {
				var Cdot = wB - wA - this.$m_motorSpeed;
				var impulse = -this.$m_motorMass * Cdot;
				var oldImpulse = this.$m_motorImpulse;
				var maxImpulse = data.step.dt * this.$m_maxMotorTorque;
				this.$m_motorImpulse = $org_jbox2d_common_MathUtils.clamp(this.$m_motorImpulse + impulse, -maxImpulse, maxImpulse);
				impulse = this.$m_motorImpulse - oldImpulse;
				wA -= iA * impulse;
				wB += iB * impulse;
			}
			var temp = this.pool.popVec2();
			// Solve limit constraint.
			if (this.$m_enableLimit && this.$m_limitState !== 0 && fixedRotation === false) {
				var Cdot1 = this.pool.popVec2();
				var Cdot2 = this.pool.popVec3();
				// Solve point-to-point constraint
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, this.$m_rA, temp);
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, Cdot1);
				Cdot1.addLocal(vB).subLocal(vA).subLocal(temp);
				var Cdot21 = wB - wA;
				Cdot2.set$1(Cdot1.x, Cdot1.y, Cdot21);
				var impulse1 = this.pool.popVec3();
				this.$m_mass.solve33ToOut(Cdot2, impulse1);
				impulse1.negateLocal();
				if (this.$m_limitState === 3) {
					this.$m_impulse.addLocal(impulse1);
				}
				else if (this.$m_limitState === 1) {
					var newImpulse = this.$m_impulse.z + impulse1.z;
					if (newImpulse < 0) {
						var rhs = this.pool.popVec2();
						rhs.set$1(this.$m_mass.ez.x, this.$m_mass.ez.y).mulLocal(this.$m_impulse.z).subLocal(Cdot1);
						this.$m_mass.solve22ToOut(rhs, temp);
						impulse1.x = temp.x;
						impulse1.y = temp.y;
						impulse1.z = -this.$m_impulse.z;
						this.$m_impulse.x += temp.x;
						this.$m_impulse.y += temp.y;
						this.$m_impulse.z = 0;
						this.pool.pushVec2(1);
					}
					else {
						this.$m_impulse.addLocal(impulse1);
					}
				}
				else if (this.$m_limitState === 2) {
					var newImpulse1 = this.$m_impulse.z + impulse1.z;
					if (newImpulse1 > 0) {
						var rhs1 = this.pool.popVec2();
						rhs1.set$1(this.$m_mass.ez.x, this.$m_mass.ez.y).mulLocal(this.$m_impulse.z).subLocal(Cdot1);
						this.$m_mass.solve22ToOut(rhs1, temp);
						impulse1.x = temp.x;
						impulse1.y = temp.y;
						impulse1.z = -this.$m_impulse.z;
						this.$m_impulse.x += temp.x;
						this.$m_impulse.y += temp.y;
						this.$m_impulse.z = 0;
						this.pool.pushVec2(1);
					}
					else {
						this.$m_impulse.addLocal(impulse1);
					}
				}
				var P = this.pool.popVec2();
				P.set$1(impulse1.x, impulse1.y);
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * ($org_jbox2d_common_Vec2.cross$2(this.$m_rA, P) + impulse1.z);
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * ($org_jbox2d_common_Vec2.cross$2(this.$m_rB, P) + impulse1.z);
				this.pool.pushVec2(2);
				this.pool.pushVec3(2);
			}
			else {
				// Solve point-to-point constraint
				var Cdot3 = this.pool.popVec2();
				var impulse2 = this.pool.popVec2();
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, this.$m_rA, temp);
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, Cdot3);
				Cdot3.addLocal(vB).subLocal(vA).subLocal(temp);
				this.$m_mass.solve22ToOut(Cdot3.negateLocal(), impulse2);
				// just leave negated
				this.$m_impulse.x += impulse2.x;
				this.$m_impulse.y += impulse2.y;
				vA.x -= mA * impulse2.x;
				vA.y -= mA * impulse2.y;
				wA -= iA * $org_jbox2d_common_Vec2.cross$2(this.$m_rA, impulse2);
				vB.x += mB * impulse2.x;
				vB.y += mB * impulse2.y;
				wB += iB * $org_jbox2d_common_Vec2.cross$2(this.$m_rB, impulse2);
				this.pool.pushVec2(2);
			}
			// data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(1);
		},
		solvePositionConstraints: function(data) {
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			qA.set(aA);
			qB.set(aB);
			var angularError = 0;
			var positionError = 0;
			var fixedRotation = this.$m_invIA + this.$m_invIB === 0;
			// Solve angular limit constraint.
			if (this.$m_enableLimit && this.$m_limitState !== 0 && fixedRotation === false) {
				var angle = aB - aA - this.m_referenceAngle;
				var limitImpulse = 0;
				if (this.$m_limitState === 3) {
					// Prevent large angular corrections
					var C = $org_jbox2d_common_MathUtils.clamp(angle - this.$m_lowerAngle, -$org_jbox2d_common_Settings.maxAngularCorrection, $org_jbox2d_common_Settings.maxAngularCorrection);
					limitImpulse = -this.$m_motorMass * C;
					angularError = $org_jbox2d_common_MathUtils.abs(C);
				}
				else if (this.$m_limitState === 1) {
					var C1 = angle - this.$m_lowerAngle;
					angularError = -C1;
					// Prevent large angular corrections and allow some slop.
					C1 = $org_jbox2d_common_MathUtils.clamp(C1 + $org_jbox2d_common_Settings.angularSlop, -$org_jbox2d_common_Settings.maxAngularCorrection, 0);
					limitImpulse = -this.$m_motorMass * C1;
				}
				else if (this.$m_limitState === 2) {
					var C2 = angle - this.$m_upperAngle;
					angularError = C2;
					// Prevent large angular corrections and allow some slop.
					C2 = $org_jbox2d_common_MathUtils.clamp(C2 - $org_jbox2d_common_Settings.angularSlop, 0, $org_jbox2d_common_Settings.maxAngularCorrection);
					limitImpulse = -this.$m_motorMass * C2;
				}
				aA -= this.$m_invIA * limitImpulse;
				aB += this.$m_invIB * limitImpulse;
			}
			// Solve point-to-point constraint.
			{
				qA.set(aA);
				qB.set(aB);
				var rA = this.pool.popVec2();
				var rB = this.pool.popVec2();
				var C3 = this.pool.popVec2();
				var impulse = this.pool.popVec2();
				$org_jbox2d_common_Rot.mulToOutUnsafe(qA, C3.set(this.m_localAnchorA).subLocal(this.$m_localCenterA), rA);
				$org_jbox2d_common_Rot.mulToOutUnsafe(qB, C3.set(this.m_localAnchorB).subLocal(this.$m_localCenterB), rB);
				C3.set(cB).addLocal(rB).subLocal(cA).subLocal(rA);
				positionError = C3.length();
				var mA = this.$m_invMassA, mB = this.$m_invMassB;
				var iA = this.$m_invIA, iB = this.$m_invIB;
				var K = this.pool.popMat22();
				K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
				K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
				K.ey.x = K.ex.y;
				K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;
				K.solveToOut(C3, impulse);
				impulse.negateLocal();
				cA.x -= mA * impulse.x;
				cA.y -= mA * impulse.y;
				aA -= iA * $org_jbox2d_common_Vec2.cross$2(rA, impulse);
				cB.x += mB * impulse.x;
				cB.y += mB * impulse.y;
				aB += iB * $org_jbox2d_common_Vec2.cross$2(rB, impulse);
				this.pool.pushVec2(4);
				this.pool.pushMat22(1);
			}
			// data.positions[m_indexA].c.set(cA);
			data.positions[this.$m_indexA].a = aA;
			// data.positions[m_indexB].c.set(cB);
			data.positions[this.$m_indexB].a = aB;
			this.pool.pushRot(2);
			return positionError <= $org_jbox2d_common_Settings.linearSlop && angularError <= $org_jbox2d_common_Settings.angularSlop;
		},
		getLocalAnchorA: function() {
			return this.m_localAnchorA;
		},
		getLocalAnchorB: function() {
			return this.m_localAnchorB;
		},
		getReferenceAngle: function() {
			return this.m_referenceAngle;
		},
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.m_localAnchorB, argOut);
		},
		getReactionForce: function(inv_dt, argOut) {
			argOut.set$1(this.$m_impulse.x, this.$m_impulse.y).mulLocal(inv_dt);
		},
		getReactionTorque: function(inv_dt) {
			return inv_dt * this.$m_impulse.z;
		},
		getJointAngle: function() {
			var b1 = this.m_bodyA;
			var b2 = this.m_bodyB;
			return b2.m_sweep.a - b1.m_sweep.a - this.m_referenceAngle;
		},
		getJointSpeed: function() {
			var b1 = this.m_bodyA;
			var b2 = this.m_bodyB;
			return b2.m_angularVelocity - b1.m_angularVelocity;
		},
		isMotorEnabled: function() {
			return this.$m_enableMotor;
		},
		enableMotor: function(flag) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_enableMotor = flag;
		},
		getMotorTorque: function(inv_dt) {
			return this.$m_motorImpulse * inv_dt;
		},
		setMotorSpeed: function(speed) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_motorSpeed = speed;
		},
		setMaxMotorTorque: function(torque) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_maxMotorTorque = torque;
		},
		getMotorSpeed: function() {
			return this.$m_motorSpeed;
		},
		getMaxMotorTorque: function() {
			return this.$m_maxMotorTorque;
		},
		isLimitEnabled: function() {
			return this.$m_enableLimit;
		},
		enableLimit: function(flag) {
			if (flag !== this.$m_enableLimit) {
				this.m_bodyA.setAwake(true);
				this.m_bodyB.setAwake(true);
				this.$m_enableLimit = flag;
				this.$m_impulse.z = 0;
			}
		},
		getLowerLimit: function() {
			return this.$m_lowerAngle;
		},
		getUpperLimit: function() {
			return this.$m_upperAngle;
		},
		setLimits: function(lower, upper) {
			if (lower !== this.$m_lowerAngle || upper !== this.$m_upperAngle) {
				this.m_bodyA.setAwake(true);
				this.m_bodyB.setAwake(true);
				this.$m_impulse.z = 0;
				this.$m_lowerAngle = lower;
				this.$m_upperAngle = upper;
			}
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_RevoluteJointDef, {
		initialize: function(b1, b2, anchor) {
			this.bodyA = b1;
			this.bodyB = b2;
			this.bodyA.getLocalPointToOut(anchor, this.localAnchorA);
			this.bodyB.getLocalPointToOut(anchor, this.localAnchorB);
			this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
		}
	}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_RopeJoint, {
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassA = this.m_bodyA.m_invMass;
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIA = this.m_bodyA.m_invI;
			this.$m_invIB = this.m_bodyB.m_invI;
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var temp = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			// Compute the effective masses.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), this.$m_rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), this.$m_rB);
			this.$m_u.set(cB).addLocal(this.$m_rB).subLocal(cA).subLocal(this.$m_rA);
			this.$m_length = this.$m_u.length();
			var C = this.$m_length - this.$m_maxLength;
			if (C > 0) {
				this.$m_state = 2;
			}
			else {
				this.$m_state = 0;
			}
			if (this.$m_length > $org_jbox2d_common_Settings.linearSlop) {
				this.$m_u.mulLocal(1 / this.$m_length);
			}
			else {
				this.$m_u.setZero();
				this.$m_mass = 0;
				this.$m_impulse = 0;
				return;
			}
			// Compute effective mass.
			var crA = $org_jbox2d_common_Vec2.cross$2(this.$m_rA, this.$m_u);
			var crB = $org_jbox2d_common_Vec2.cross$2(this.$m_rB, this.$m_u);
			var invMass = this.$m_invMassA + this.$m_invIA * crA * crA + this.$m_invMassB + this.$m_invIB * crB * crB;
			this.$m_mass = ((invMass !== 0) ? (1 / invMass) : 0);
			if (data.step.warmStarting) {
				// Scale the impulse to support a variable time step.
				this.$m_impulse *= data.step.dtRatio;
				var Px = this.$m_impulse * this.$m_u.x;
				var Py = this.$m_impulse * this.$m_u.y;
				vA.x -= this.$m_invMassA * Px;
				vA.y -= this.$m_invMassA * Py;
				wA -= this.$m_invIA * (this.$m_rA.x * Py - this.$m_rA.y * Px);
				vB.x += this.$m_invMassB * Px;
				vB.y += this.$m_invMassB * Py;
				wB += this.$m_invIB * (this.$m_rB.x * Py - this.$m_rB.y * Px);
			}
			else {
				this.$m_impulse = 0;
			}
			this.pool.pushRot(2);
			this.pool.pushVec2(1);
			// data.velocities[m_indexA].v = vA;
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v = vB;
			data.velocities[this.$m_indexB].w = wB;
		},
		solveVelocityConstraints: function(data) {
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			// Cdot = dot(u, v + cross(w, r))
			var vpA = this.pool.popVec2();
			var vpB = this.pool.popVec2();
			var temp = this.pool.popVec2();
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, this.$m_rA, vpA);
			vpA.addLocal(vA);
			$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, vpB);
			vpB.addLocal(vB);
			var C = this.$m_length - this.$m_maxLength;
			var Cdot = $org_jbox2d_common_Vec2.dot(this.$m_u, temp.set(vpB).subLocal(vpA));
			// Predictive constraint.
			if (C < 0) {
				Cdot += data.step.inv_dt * C;
			}
			var impulse = -this.$m_mass * Cdot;
			var oldImpulse = this.$m_impulse;
			this.$m_impulse = $org_jbox2d_common_MathUtils.min(0, this.$m_impulse + impulse);
			impulse = this.$m_impulse - oldImpulse;
			var Px = impulse * this.$m_u.x;
			var Py = impulse * this.$m_u.y;
			vA.x -= this.$m_invMassA * Px;
			vA.y -= this.$m_invMassA * Py;
			wA -= this.$m_invIA * (this.$m_rA.x * Py - this.$m_rA.y * Px);
			vB.x += this.$m_invMassB * Px;
			vB.y += this.$m_invMassB * Py;
			wB += this.$m_invIB * (this.$m_rB.x * Py - this.$m_rB.y * Px);
			this.pool.pushVec2(3);
			// data.velocities[m_indexA].v = vA;
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v = vB;
			data.velocities[this.$m_indexB].w = wB;
		},
		solvePositionConstraints: function(data) {
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var u = this.pool.popVec2();
			var rA = this.pool.popVec2();
			var rB = this.pool.popVec2();
			var temp = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			// Compute the effective masses.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), rB);
			u.set(cB).addLocal(rB).subLocal(cA).subLocal(rA);
			var length = u.normalize();
			var C = length - this.$m_maxLength;
			C = $org_jbox2d_common_MathUtils.clamp(C, 0, $org_jbox2d_common_Settings.maxLinearCorrection);
			var impulse = -this.$m_mass * C;
			var Px = impulse * u.x;
			var Py = impulse * u.y;
			cA.x -= this.$m_invMassA * Px;
			cA.y -= this.$m_invMassA * Py;
			aA -= this.$m_invIA * (rA.x * Py - rA.y * Px);
			cB.x += this.$m_invMassB * Px;
			cB.y += this.$m_invMassB * Py;
			aB += this.$m_invIB * (rB.x * Py - rB.y * Px);
			this.pool.pushRot(2);
			this.pool.pushVec2(4);
			// data.positions[m_indexA].c = cA;
			data.positions[this.$m_indexA].a = aA;
			// data.positions[m_indexB].c = cB;
			data.positions[this.$m_indexB].a = aB;
			return length - this.$m_maxLength < $org_jbox2d_common_Settings.linearSlop;
		},
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, argOut);
		},
		getReactionForce: function(inv_dt, argOut) {
			argOut.set(this.$m_u).mulLocal(inv_dt).mulLocal(this.$m_impulse);
		},
		getReactionTorque: function(inv_dt) {
			return 0;
		},
		getLocalAnchorA: function() {
			return this.$m_localAnchorA;
		},
		getLocalAnchorB: function() {
			return this.$m_localAnchorB;
		},
		getMaxLength: function() {
			return this.$m_maxLength;
		},
		setMaxLength: function(maxLength) {
			this.$m_maxLength = maxLength;
		},
		getLimitState: function() {
			return this.$m_state;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_RopeJointDef, {}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_WeldJoint, {
		getReferenceAngle: function() {
			return this.$m_referenceAngle;
		},
		getLocalAnchorA: function() {
			return this.$m_localAnchorA;
		},
		getLocalAnchorB: function() {
			return this.$m_localAnchorB;
		},
		getFrequency: function() {
			return this.$m_frequencyHz;
		},
		setFrequency: function(frequencyHz) {
			this.$m_frequencyHz = frequencyHz;
		},
		getDampingRatio: function() {
			return this.$m_dampingRatio;
		},
		setDampingRatio: function(dampingRatio) {
			this.$m_dampingRatio = dampingRatio;
		},
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, argOut);
		},
		getReactionForce: function(inv_dt, argOut) {
			argOut.set$1(this.$m_impulse.x, this.$m_impulse.y);
			argOut.mulLocal(inv_dt);
		},
		getReactionTorque: function(inv_dt) {
			return inv_dt * this.$m_impulse.z;
		},
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassA = this.m_bodyA.m_invMass;
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIA = this.m_bodyA.m_invI;
			this.$m_invIB = this.m_bodyB.m_invI;
			// Vec2 cA = data.positions[m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			// Vec2 cB = data.positions[m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var temp = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			// Compute the effective masses.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), this.$m_rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), this.$m_rB);
			// J = [-I -r1_skew I r2_skew]
			// [ 0 -1 0 1]
			// r_skew = [-ry; rx]
			// Matlab
			// K = [ mA+r1y^2*iA+mB+r2y^2*iB, -r1y*iA*r1x-r2y*iB*r2x, -r1y*iA-r2y*iB]
			// [ -r1y*iA*r1x-r2y*iB*r2x, mA+r1x^2*iA+mB+r2x^2*iB, r1x*iA+r2x*iB]
			// [ -r1y*iA-r2y*iB, r1x*iA+r2x*iB, iA+iB]
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var K = this.pool.popMat33();
			K.ex.x = mA + mB + this.$m_rA.y * this.$m_rA.y * iA + this.$m_rB.y * this.$m_rB.y * iB;
			K.ey.x = -this.$m_rA.y * this.$m_rA.x * iA - this.$m_rB.y * this.$m_rB.x * iB;
			K.ez.x = -this.$m_rA.y * iA - this.$m_rB.y * iB;
			K.ex.y = K.ey.x;
			K.ey.y = mA + mB + this.$m_rA.x * this.$m_rA.x * iA + this.$m_rB.x * this.$m_rB.x * iB;
			K.ez.y = this.$m_rA.x * iA + this.$m_rB.x * iB;
			K.ex.z = K.ez.x;
			K.ey.z = K.ez.y;
			K.ez.z = iA + iB;
			if (this.$m_frequencyHz > 0) {
				K.getInverse22(this.$m_mass);
				var invM = iA + iB;
				var m = ((invM > 0) ? (1 / invM) : 0);
				var C = aB - aA - this.$m_referenceAngle;
				// Frequency
				var omega = 2 * $org_jbox2d_common_MathUtils.PI * this.$m_frequencyHz;
				// Damping coefficient
				var d = 2 * m * this.$m_dampingRatio * omega;
				// Spring stiffness
				var k = m * omega * omega;
				// magic formulas
				var h = data.step.dt;
				this.$m_gamma = h * (d + h * k);
				this.$m_gamma = ((this.$m_gamma !== 0) ? (1 / this.$m_gamma) : 0);
				this.$m_bias = C * h * k * this.$m_gamma;
				invM += this.$m_gamma;
				this.$m_mass.ez.z = ((invM !== 0) ? (1 / invM) : 0);
			}
			else {
				K.getSymInverse33(this.$m_mass);
				this.$m_gamma = 0;
				this.$m_bias = 0;
			}
			if (data.step.warmStarting) {
				var P = this.pool.popVec2();
				// Scale impulses to support a variable time step.
				this.$m_impulse.mulLocal(data.step.dtRatio);
				P.set$1(this.$m_impulse.x, this.$m_impulse.y);
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * ($org_jbox2d_common_Vec2.cross$2(this.$m_rA, P) + this.$m_impulse.z);
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * ($org_jbox2d_common_Vec2.cross$2(this.$m_rB, P) + this.$m_impulse.z);
				this.pool.pushVec2(1);
			}
			else {
				this.$m_impulse.setZero();
			}
			//    data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(1);
			this.pool.pushRot(2);
			this.pool.pushMat33(1);
		},
		solveVelocityConstraints: function(data) {
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var Cdot1 = this.pool.popVec2();
			var P = this.pool.popVec2();
			var temp = this.pool.popVec2();
			if (this.$m_frequencyHz > 0) {
				var Cdot2 = wB - wA;
				var impulse2 = -this.$m_mass.ez.z * (Cdot2 + this.$m_bias + this.$m_gamma * this.$m_impulse.z);
				this.$m_impulse.z += impulse2;
				wA -= iA * impulse2;
				wB += iB * impulse2;
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, Cdot1);
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, this.$m_rA, temp);
				Cdot1.addLocal(vB).subLocal(vA).subLocal(temp);
				var impulse1 = P;
				$org_jbox2d_common_Mat33.mul22ToOutUnsafe(this.$m_mass, Cdot1, impulse1);
				impulse1.negateLocal();
				this.$m_impulse.x += impulse1.x;
				this.$m_impulse.y += impulse1.y;
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * $org_jbox2d_common_Vec2.cross$2(this.$m_rA, P);
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * $org_jbox2d_common_Vec2.cross$2(this.$m_rB, P);
			}
			else {
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wA, this.$m_rA, temp);
				$org_jbox2d_common_Vec2.crossToOutUnsafe(wB, this.$m_rB, Cdot1);
				Cdot1.addLocal(vB).subLocal(vA).subLocal(temp);
				var Cdot21 = wB - wA;
				var Cdot = this.pool.popVec3();
				Cdot.set$1(Cdot1.x, Cdot1.y, Cdot21);
				var impulse = this.pool.popVec3();
				$org_jbox2d_common_Mat33.mulToOutUnsafe(this.$m_mass, Cdot, impulse);
				impulse.negateLocal();
				this.$m_impulse.addLocal(impulse);
				P.set$1(impulse.x, impulse.y);
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * ($org_jbox2d_common_Vec2.cross$2(this.$m_rA, P) + impulse.z);
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * ($org_jbox2d_common_Vec2.cross$2(this.$m_rB, P) + impulse.z);
				this.pool.pushVec3(2);
			}
			//    data.velocities[m_indexA].v.set(vA);
			data.velocities[this.$m_indexA].w = wA;
			//    data.velocities[m_indexB].v.set(vB);
			data.velocities[this.$m_indexB].w = wB;
			this.pool.pushVec2(3);
		},
		solvePositionConstraints: function(data) {
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var temp = this.pool.popVec2();
			var rA = this.pool.popVec2();
			var rB = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), rB);
			var positionError, angularError;
			var K = this.pool.popMat33();
			var C1 = this.pool.popVec2();
			var P = this.pool.popVec2();
			K.ex.x = mA + mB + rA.y * rA.y * iA + rB.y * rB.y * iB;
			K.ey.x = -rA.y * rA.x * iA - rB.y * rB.x * iB;
			K.ez.x = -rA.y * iA - rB.y * iB;
			K.ex.y = K.ey.x;
			K.ey.y = mA + mB + rA.x * rA.x * iA + rB.x * rB.x * iB;
			K.ez.y = rA.x * iA + rB.x * iB;
			K.ex.z = K.ez.x;
			K.ey.z = K.ez.y;
			K.ez.z = iA + iB;
			if (this.$m_frequencyHz > 0) {
				C1.set(cB).addLocal(rB).subLocal(cA).subLocal(rA);
				positionError = C1.length();
				angularError = 0;
				K.solve22ToOut(C1, P);
				P.negateLocal();
				cA.x -= mA * P.x;
				cA.y -= mA * P.y;
				aA -= iA * $org_jbox2d_common_Vec2.cross$2(rA, P);
				cB.x += mB * P.x;
				cB.y += mB * P.y;
				aB += iB * $org_jbox2d_common_Vec2.cross$2(rB, P);
			}
			else {
				C1.set(cB).addLocal(rB).subLocal(cA).subLocal(rA);
				var C2 = aB - aA - this.$m_referenceAngle;
				positionError = C1.length();
				angularError = $org_jbox2d_common_MathUtils.abs(C2);
				var C = this.pool.popVec3();
				var impulse = this.pool.popVec3();
				C.set$1(C1.x, C1.y, C2);
				K.solve33ToOut(C, impulse);
				impulse.negateLocal();
				P.set$1(impulse.x, impulse.y);
				cA.x -= mA * P.x;
				cA.y -= mA * P.y;
				aA -= iA * ($org_jbox2d_common_Vec2.cross$2(rA, P) + impulse.z);
				cB.x += mB * P.x;
				cB.y += mB * P.y;
				aB += iB * ($org_jbox2d_common_Vec2.cross$2(rB, P) + impulse.z);
				this.pool.pushVec3(2);
			}
			//    data.positions[m_indexA].c.set(cA);
			data.positions[this.$m_indexA].a = aA;
			//    data.positions[m_indexB].c.set(cB);
			data.positions[this.$m_indexB].a = aB;
			this.pool.pushVec2(5);
			this.pool.pushRot(2);
			this.pool.pushMat33(1);
			return positionError <= $org_jbox2d_common_Settings.linearSlop && angularError <= $org_jbox2d_common_Settings.angularSlop;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_WeldJointDef, {
		initialize: function(bA, bB, anchor) {
			this.bodyA = bA;
			this.bodyB = bB;
			this.bodyA.getLocalPointToOut(anchor, this.localAnchorA);
			this.bodyB.getLocalPointToOut(anchor, this.localAnchorB);
			this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
		}
	}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initClass($org_jbox2d_dynamics_joints_WheelJoint, {
		getLocalAnchorA: function() {
			return this.$m_localAnchorA;
		},
		getLocalAnchorB: function() {
			return this.$m_localAnchorB;
		},
		getAnchorA: function(argOut) {
			this.m_bodyA.getWorldPointToOut(this.$m_localAnchorA, argOut);
		},
		getAnchorB: function(argOut) {
			this.m_bodyB.getWorldPointToOut(this.$m_localAnchorB, argOut);
		},
		getReactionForce: function(inv_dt, argOut) {
			var temp = this.pool.popVec2();
			temp.set(this.$m_ay).mulLocal(this.$m_impulse);
			argOut.set(this.$m_ax).mulLocal(this.$m_springImpulse).addLocal(temp).mulLocal(inv_dt);
			this.pool.pushVec2(1);
		},
		getReactionTorque: function(inv_dt) {
			return inv_dt * this.$m_motorImpulse;
		},
		getJointTranslation: function() {
			var b1 = this.m_bodyA;
			var b2 = this.m_bodyB;
			var p1 = this.pool.popVec2();
			var p2 = this.pool.popVec2();
			var axis = this.pool.popVec2();
			b1.getWorldPointToOut(this.$m_localAnchorA, p1);
			b2.getWorldPointToOut(this.$m_localAnchorA, p2);
			p2.subLocal(p1);
			b1.getWorldVectorToOut(this.$m_localXAxisA, axis);
			var translation = $org_jbox2d_common_Vec2.dot(p2, axis);
			this.pool.pushVec2(3);
			return translation;
		},
		getLocalAxisA: function() {
			return this.$m_localXAxisA;
		},
		getJointSpeed: function() {
			return this.m_bodyA.m_angularVelocity - this.m_bodyB.m_angularVelocity;
		},
		isMotorEnabled: function() {
			return this.$m_enableMotor;
		},
		enableMotor: function(flag) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_enableMotor = flag;
		},
		setMotorSpeed: function(speed) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_motorSpeed = speed;
		},
		getMotorSpeed: function() {
			return this.$m_motorSpeed;
		},
		getMaxMotorTorque: function() {
			return this.$m_maxMotorTorque;
		},
		setMaxMotorTorque: function(torque) {
			this.m_bodyA.setAwake(true);
			this.m_bodyB.setAwake(true);
			this.$m_maxMotorTorque = torque;
		},
		getMotorTorque: function(inv_dt) {
			return this.$m_motorImpulse * inv_dt;
		},
		setSpringFrequencyHz: function(hz) {
			this.$m_frequencyHz = hz;
		},
		getSpringFrequencyHz: function() {
			return this.$m_frequencyHz;
		},
		setSpringDampingRatio: function(ratio) {
			this.$m_dampingRatio = ratio;
		},
		getSpringDampingRatio: function() {
			return this.$m_dampingRatio;
		},
		initVelocityConstraints: function(data) {
			this.$m_indexA = this.m_bodyA.m_islandIndex;
			this.$m_indexB = this.m_bodyB.m_islandIndex;
			this.$m_localCenterA.set(this.m_bodyA.m_sweep.localCenter);
			this.$m_localCenterB.set(this.m_bodyB.m_sweep.localCenter);
			this.$m_invMassA = this.m_bodyA.m_invMass;
			this.$m_invMassB = this.m_bodyB.m_invMass;
			this.$m_invIA = this.m_bodyA.m_invI;
			this.$m_invIB = this.m_bodyB.m_invI;
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var temp = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			// Compute the effective masses.
			$org_jbox2d_common_Rot.mulToOutUnsafe(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), this.$rA);
			$org_jbox2d_common_Rot.mulToOutUnsafe(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), this.$rB);
			this.$d2.set(cB).addLocal(this.$rB).subLocal(cA).subLocal(this.$rA);
			// Point to line constraint
			{
				$org_jbox2d_common_Rot.mulToOut(qA, this.$m_localYAxisA, this.$m_ay);
				this.$m_sAy = $org_jbox2d_common_Vec2.cross$2(temp.set(this.$d2).addLocal(this.$rA), this.$m_ay);
				this.$m_sBy = $org_jbox2d_common_Vec2.cross$2(this.$rB, this.$m_ay);
				this.$m_mass = mA + mB + iA * this.$m_sAy * this.$m_sAy + iB * this.$m_sBy * this.$m_sBy;
				if (this.$m_mass > 0) {
					this.$m_mass = 1 / this.$m_mass;
				}
			}
			// Spring constraint
			this.$m_springMass = 0;
			this.$m_bias = 0;
			this.$m_gamma = 0;
			if (this.$m_frequencyHz > 0) {
				$org_jbox2d_common_Rot.mulToOut(qA, this.$m_localXAxisA, this.$m_ax);
				this.$m_sAx = $org_jbox2d_common_Vec2.cross$2(temp.set(this.$d2).addLocal(this.$rA), this.$m_ax);
				this.$m_sBx = $org_jbox2d_common_Vec2.cross$2(this.$rB, this.$m_ax);
				var invMass = mA + mB + iA * this.$m_sAx * this.$m_sAx + iB * this.$m_sBx * this.$m_sBx;
				if (invMass > 0) {
					this.$m_springMass = 1 / invMass;
					var C = $org_jbox2d_common_Vec2.dot(this.$d2, this.$m_ax);
					// Frequency
					var omega = 2 * $org_jbox2d_common_MathUtils.PI * this.$m_frequencyHz;
					// Damping coefficient
					var d = 2 * this.$m_springMass * this.$m_dampingRatio * omega;
					// Spring stiffness
					var k = this.$m_springMass * omega * omega;
					// magic formulas
					var h = data.step.dt;
					this.$m_gamma = h * (d + h * k);
					if (this.$m_gamma > 0) {
						this.$m_gamma = 1 / this.$m_gamma;
					}
					this.$m_bias = C * h * k * this.$m_gamma;
					this.$m_springMass = invMass + this.$m_gamma;
					if (this.$m_springMass > 0) {
						this.$m_springMass = 1 / this.$m_springMass;
					}
				}
			}
			else {
				this.$m_springImpulse = 0;
			}
			// Rotational motor
			if (this.$m_enableMotor) {
				this.$m_motorMass = iA + iB;
				if (this.$m_motorMass > 0) {
					this.$m_motorMass = 1 / this.$m_motorMass;
				}
			}
			else {
				this.$m_motorMass = 0;
				this.$m_motorImpulse = 0;
			}
			if (data.step.warmStarting) {
				var P = this.pool.popVec2();
				// Account for variable time step.
				this.$m_impulse *= data.step.dtRatio;
				this.$m_springImpulse *= data.step.dtRatio;
				this.$m_motorImpulse *= data.step.dtRatio;
				P.x = this.$m_impulse * this.$m_ay.x + this.$m_springImpulse * this.$m_ax.x;
				P.y = this.$m_impulse * this.$m_ay.y + this.$m_springImpulse * this.$m_ax.y;
				var LA = this.$m_impulse * this.$m_sAy + this.$m_springImpulse * this.$m_sAx + this.$m_motorImpulse;
				var LB = this.$m_impulse * this.$m_sBy + this.$m_springImpulse * this.$m_sBx + this.$m_motorImpulse;
				vA.x -= this.$m_invMassA * P.x;
				vA.y -= this.$m_invMassA * P.y;
				wA -= this.$m_invIA * LA;
				vB.x += this.$m_invMassB * P.x;
				vB.y += this.$m_invMassB * P.y;
				wB += this.$m_invIB * LB;
				this.pool.pushVec2(1);
			}
			else {
				this.$m_impulse = 0;
				this.$m_springImpulse = 0;
				this.$m_motorImpulse = 0;
			}
			this.pool.pushRot(2);
			this.pool.pushVec2(1);
			// data.velocities[m_indexA].v = vA;
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v = vB;
			data.velocities[this.$m_indexB].w = wB;
		},
		solveVelocityConstraints: function(data) {
			var mA = this.$m_invMassA, mB = this.$m_invMassB;
			var iA = this.$m_invIA, iB = this.$m_invIB;
			var vA = data.velocities[this.$m_indexA].v;
			var wA = data.velocities[this.$m_indexA].w;
			var vB = data.velocities[this.$m_indexB].v;
			var wB = data.velocities[this.$m_indexB].w;
			var temp = this.pool.popVec2();
			var P = this.pool.popVec2();
			// Solve spring constraint
			{
				var Cdot = $org_jbox2d_common_Vec2.dot(this.$m_ax, temp.set(vB).subLocal(vA)) + this.$m_sBx * wB - this.$m_sAx * wA;
				var impulse = -this.$m_springMass * (Cdot + this.$m_bias + this.$m_gamma * this.$m_springImpulse);
				this.$m_springImpulse += impulse;
				P.x = impulse * this.$m_ax.x;
				P.y = impulse * this.$m_ax.y;
				var LA = impulse * this.$m_sAx;
				var LB = impulse * this.$m_sBx;
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * LA;
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * LB;
			}
			// Solve rotational motor constraint
			{
				var Cdot1 = wB - wA - this.$m_motorSpeed;
				var impulse1 = -this.$m_motorMass * Cdot1;
				var oldImpulse = this.$m_motorImpulse;
				var maxImpulse = data.step.dt * this.$m_maxMotorTorque;
				this.$m_motorImpulse = $org_jbox2d_common_MathUtils.clamp(this.$m_motorImpulse + impulse1, -maxImpulse, maxImpulse);
				impulse1 = this.$m_motorImpulse - oldImpulse;
				wA -= iA * impulse1;
				wB += iB * impulse1;
			}
			// Solve point to line constraint
			{
				var Cdot2 = $org_jbox2d_common_Vec2.dot(this.$m_ay, temp.set(vB).subLocal(vA)) + this.$m_sBy * wB - this.$m_sAy * wA;
				var impulse2 = -this.$m_mass * Cdot2;
				this.$m_impulse += impulse2;
				P.x = impulse2 * this.$m_ay.x;
				P.y = impulse2 * this.$m_ay.y;
				var LA1 = impulse2 * this.$m_sAy;
				var LB1 = impulse2 * this.$m_sBy;
				vA.x -= mA * P.x;
				vA.y -= mA * P.y;
				wA -= iA * LA1;
				vB.x += mB * P.x;
				vB.y += mB * P.y;
				wB += iB * LB1;
			}
			this.pool.pushVec2(2);
			// data.velocities[m_indexA].v = vA;
			data.velocities[this.$m_indexA].w = wA;
			// data.velocities[m_indexB].v = vB;
			data.velocities[this.$m_indexB].w = wB;
		},
		solvePositionConstraints: function(data) {
			var cA = data.positions[this.$m_indexA].c;
			var aA = data.positions[this.$m_indexA].a;
			var cB = data.positions[this.$m_indexB].c;
			var aB = data.positions[this.$m_indexB].a;
			var qA = this.pool.popRot();
			var qB = this.pool.popRot();
			var temp = this.pool.popVec2();
			qA.set(aA);
			qB.set(aB);
			$org_jbox2d_common_Rot.mulToOut(qA, temp.set(this.$m_localAnchorA).subLocal(this.$m_localCenterA), this.$rA);
			$org_jbox2d_common_Rot.mulToOut(qB, temp.set(this.$m_localAnchorB).subLocal(this.$m_localCenterB), this.$rB);
			this.$d2.set(cB).subLocal(cA).addLocal(this.$rB).subLocal(this.$rA);
			var ay = this.pool.popVec2();
			$org_jbox2d_common_Rot.mulToOut(qA, this.$m_localYAxisA, ay);
			var sAy = $org_jbox2d_common_Vec2.cross$2(temp.set(this.$d2).addLocal(this.$rA), ay);
			var sBy = $org_jbox2d_common_Vec2.cross$2(this.$rB, ay);
			var C = $org_jbox2d_common_Vec2.dot(this.$d2, ay);
			var k = this.$m_invMassA + this.$m_invMassB + this.$m_invIA * this.$m_sAy * this.$m_sAy + this.$m_invIB * this.$m_sBy * this.$m_sBy;
			var impulse;
			if (k !== 0) {
				impulse = -C / k;
			}
			else {
				impulse = 0;
			}
			var P = this.pool.popVec2();
			P.x = impulse * ay.x;
			P.y = impulse * ay.y;
			var LA = impulse * sAy;
			var LB = impulse * sBy;
			cA.x -= this.$m_invMassA * P.x;
			cA.y -= this.$m_invMassA * P.y;
			aA -= this.$m_invIA * LA;
			cB.x += this.$m_invMassB * P.x;
			cB.y += this.$m_invMassB * P.y;
			aB += this.$m_invIB * LB;
			this.pool.pushVec2(3);
			this.pool.pushRot(2);
			// data.positions[m_indexA].c = cA;
			data.positions[this.$m_indexA].a = aA;
			// data.positions[m_indexB].c = cB;
			data.positions[this.$m_indexB].a = aB;
			return $org_jbox2d_common_MathUtils.abs(C) <= $org_jbox2d_common_Settings.linearSlop;
		}
	}, $org_jbox2d_dynamics_joints_Joint);
	ss.initClass($org_jbox2d_dynamics_joints_WheelJointDef, {
		initialize: function(b1, b2, anchor, axis) {
			this.bodyA = b1;
			this.bodyB = b2;
			b1.getLocalPointToOut(anchor, this.localAnchorA);
			b2.getLocalPointToOut(anchor, this.localAnchorB);
			this.bodyA.getLocalVectorToOut(axis, this.localAxisA);
		}
	}, $org_jbox2d_dynamics_joints_JointDef);
	ss.initInterface($org_jbox2d_pooling_IWorldPool, { getPolyContactStack: null, getCircleContactStack: null, getPolyCircleContactStack: null, getEdgeCircleContactStack: null, getEdgePolyContactStack: null, getChainCircleContactStack: null, getChainPolyContactStack: null, popVec2: null, popVec2$1: null, pushVec2: null, popVec3: null, popVec3$1: null, pushVec3: null, popMat22: null, popMat22$1: null, pushMat22: null, popMat33: null, pushMat33: null, popAABB: null, popAABB$1: null, pushAABB: null, popRot: null, pushRot: null, getCollision: null, getTimeOfImpact: null, getDistance: null, getDoubleArray: null, getIntArray: null, getVec2Array: null });
	ss.initClass($org_jbox2d_pooling_arrays_DoubleArray, {
		get: function(argLength) {
			if (!this.$map.containsKey(argLength)) {
				this.$map.set_item(argLength, this.getInitializedArray(argLength));
			}
			return this.$map.get_item(argLength);
		},
		getInitializedArray: function(argLength) {
			return new Array(argLength);
		}
	});
	ss.initClass($org_jbox2d_pooling_arrays_IntArray, {
		get: function(argLength) {
			if (!this.$map.containsKey(argLength)) {
				this.$map.set_item(argLength, this.getInitializedArray(argLength));
			}
			return this.$map.get_item(argLength);
		},
		getInitializedArray: function(argLength) {
			return new Array(argLength);
		}
	});
	ss.initClass($org_jbox2d_pooling_arrays_Vec2Array, {
		get: function(argLength) {
			if (!this.$map.containsKey(argLength)) {
				this.$map.set_item(argLength, this.getInitializedArray(argLength));
			}
			return this.$map.get_item(argLength);
		},
		getInitializedArray: function(argLength) {
			var ray = new Array(argLength);
			for (var i = 0; i < ray.length; i++) {
				ray[i] = new $org_jbox2d_common_Vec2();
			}
			return ray;
		}
	});
	ss.initClass($org_jbox2d_pooling_normal_DefaultWorldPool, {
		getPolyContactStack: function() {
			return this.$pcstack;
		},
		getCircleContactStack: function() {
			return this.$ccstack;
		},
		getPolyCircleContactStack: function() {
			return this.$cpstack;
		},
		getEdgeCircleContactStack: function() {
			return this.$ecstack;
		},
		getEdgePolyContactStack: function() {
			return this.$epstack;
		},
		getChainCircleContactStack: function() {
			return this.$chcstack;
		},
		getChainPolyContactStack: function() {
			return this.$chpstack;
		},
		popVec2: function() {
			return this.$vecs.pop();
		},
		popVec2$1: function(argNum) {
			return this.$vecs.pop$1(argNum);
		},
		pushVec2: function(argNum) {
			this.$vecs.push(argNum);
		},
		popVec3: function() {
			return this.$vec3s.pop();
		},
		popVec3$1: function(argNum) {
			return this.$vec3s.pop$1(argNum);
		},
		pushVec3: function(argNum) {
			this.$vec3s.push(argNum);
		},
		popMat22: function() {
			return this.$mats.pop();
		},
		popMat22$1: function(argNum) {
			return this.$mats.pop$1(argNum);
		},
		pushMat22: function(argNum) {
			this.$mats.push(argNum);
		},
		popMat33: function() {
			return this.$mat33s.pop();
		},
		pushMat33: function(argNum) {
			this.$mat33s.push(argNum);
		},
		popAABB: function() {
			return this.$aabbs.pop();
		},
		popAABB$1: function(argNum) {
			return this.$aabbs.pop$1(argNum);
		},
		pushAABB: function(argNum) {
			this.$aabbs.push(argNum);
		},
		popRot: function() {
			return this.$rots.pop();
		},
		pushRot: function(num) {
			this.$rots.push(num);
		},
		getCollision: function() {
			return this.$collision;
		},
		getTimeOfImpact: function() {
			return this.$toi;
		},
		getDistance: function() {
			return this.$dist;
		},
		getDoubleArray: function(argLength) {
			if (!this.$adoubles.containsKey(argLength)) {
				this.$adoubles.set_item(argLength, new Array(argLength));
			}
			return this.$adoubles.get_item(argLength);
		},
		getIntArray: function(argLength) {
			if (!this.$aints.containsKey(argLength)) {
				this.$aints.set_item(argLength, new Array(argLength));
			}
			return this.$aints.get_item(argLength);
		},
		getVec2Array: function(argLength) {
			if (!this.$avecs.containsKey(argLength)) {
				var ray = new Array(argLength);
				for (var i = 0; i < argLength; i++) {
					ray[i] = new $org_jbox2d_common_Vec2();
				}
				this.$avecs.set_item(argLength, ray);
			}
			return this.$avecs.get_item(argLength);
		}
	}, null, [$org_jbox2d_pooling_IWorldPool]);
	ss.initClass($org_jbox2d_pooling_stacks_DynamicIntStack, {
		reset: function() {
			this.$position = 0;
		},
		pop: function() {
			return this.$stack[--this.$position];
		},
		push: function(i) {
			if (this.$position === this.$size) {
				var old = this.$stack;
				this.$stack = new Array(this.$size * 2);
				this.$size = this.$stack.length;
				$org_jbox2d_dynamics_ArrayHelper.copy(old, 0, this.$stack, 0, old.length);
			}
			this.$stack[this.$position++] = i;
		},
		getCount: function() {
			return this.$position;
		}
	});
	$org_jbox2d_common_Vec2.$serialVersionUID = 1;
	$org_jbox2d_common_Settings.EPSILON = 1.19209289550781E-07;
	$org_jbox2d_common_Settings.PI = Math.PI;
	$org_jbox2d_common_Settings.fasT_ABS = true;
	$org_jbox2d_common_Settings.fasT_FLOOR = true;
	$org_jbox2d_common_Settings.fasT_CEIL = true;
	$org_jbox2d_common_Settings.fasT_ROUND = true;
	$org_jbox2d_common_Settings.fasT_ATAN2 = true;
	$org_jbox2d_common_Settings.contacT_STACK_INIT_SIZE = 10;
	$org_jbox2d_common_Settings.sincoS_LUT_ENABLED = true;
	$org_jbox2d_common_Settings.sincoS_LUT_PRECISION = 0.00011;
	$org_jbox2d_common_Settings.sincoS_LUT_LENGTH = ss.Int32.trunc(Math.ceil(Math.PI * 2 / $org_jbox2d_common_Settings.sincoS_LUT_PRECISION));
	$org_jbox2d_common_Settings.sincoS_LUT_LERP = false;
	$org_jbox2d_common_Settings.maxManifoldPoints = 2;
	$org_jbox2d_common_Settings.maxPolygonVertices = 8;
	$org_jbox2d_common_Settings.aabbExtension = 0.1;
	$org_jbox2d_common_Settings.aabbMultiplier = 2;
	$org_jbox2d_common_Settings.linearSlop = 0.005;
	$org_jbox2d_common_Settings.angularSlop = 0.0111111111111111 * $org_jbox2d_common_Settings.PI;
	$org_jbox2d_common_Settings.polygonRadius = 2 * $org_jbox2d_common_Settings.linearSlop;
	$org_jbox2d_common_Settings.maxSubSteps = 8;
	$org_jbox2d_common_Settings.maxTOIContacts = 32;
	$org_jbox2d_common_Settings.velocityThreshold = 1;
	$org_jbox2d_common_Settings.maxLinearCorrection = 0.2;
	$org_jbox2d_common_Settings.maxAngularCorrection = 0.0444444444444444 * $org_jbox2d_common_Settings.PI;
	$org_jbox2d_common_Settings.maxTranslation = 2;
	$org_jbox2d_common_Settings.maxTranslationSquared = $org_jbox2d_common_Settings.maxTranslation * $org_jbox2d_common_Settings.maxTranslation;
	$org_jbox2d_common_Settings.maxRotation = 0.5 * $org_jbox2d_common_Settings.PI;
	$org_jbox2d_common_Settings.maxRotationSquared = $org_jbox2d_common_Settings.maxRotation * $org_jbox2d_common_Settings.maxRotation;
	$org_jbox2d_common_Settings.baumgarte = 0.2;
	$org_jbox2d_common_Settings.toiBaugarte = 0.75;
	$org_jbox2d_common_Settings.timeToSleep = 0.5;
	$org_jbox2d_common_Settings.linearSleepTolerance = 0.01;
	$org_jbox2d_common_Settings.angularSleepTolerance = 0.0111111111111111 * $org_jbox2d_common_Settings.PI;
	$org_jbox2d_common_MathUtils.PI = Math.PI;
	$org_jbox2d_common_MathUtils.TWOPI = Math.PI * 2;
	$org_jbox2d_common_MathUtils.inV_PI = 1 / $org_jbox2d_common_MathUtils.PI;
	$org_jbox2d_common_MathUtils.halF_PI = $org_jbox2d_common_MathUtils.PI / 2;
	$org_jbox2d_common_MathUtils.quarteR_PI = $org_jbox2d_common_MathUtils.PI / 4;
	$org_jbox2d_common_MathUtils.threE_HALVES_PI = $org_jbox2d_common_MathUtils.TWOPI - $org_jbox2d_common_MathUtils.halF_PI;
	$org_jbox2d_common_MathUtils.deG2RAD = $org_jbox2d_common_MathUtils.PI / 180;
	$org_jbox2d_common_MathUtils.raD2DEG = 180 / $org_jbox2d_common_MathUtils.PI;
	$org_jbox2d_common_MathUtils.sinLUT2 = new Array($org_jbox2d_common_Settings.sincoS_LUT_LENGTH);
	$org_jbox2d_common_MathUtils.random = new ss.Random();
	for (var i = 0; i < $org_jbox2d_common_Settings.sincoS_LUT_LENGTH; i++) {
		$org_jbox2d_common_MathUtils.sinLUT2[i] = Math.sin(i * $org_jbox2d_common_Settings.sincoS_LUT_PRECISION);
	}
	$org_jbox2d_callbacks_DebugDraw.e_shapeBit = 1;
	$org_jbox2d_callbacks_DebugDraw.e_jointBit = 2;
	$org_jbox2d_callbacks_DebugDraw.e_aabbBit = 4;
	$org_jbox2d_callbacks_DebugDraw.e_pairBit = 8;
	$org_jbox2d_callbacks_DebugDraw.e_centerOfMassBit = 16;
	$org_jbox2d_callbacks_DebugDraw.e_dynamicTreeBit = 32;
	$org_jbox2d_common_Rot.$serialVersionUID = 1;
	$org_jbox2d_common_Transform.$serialVersionUID = 1;
	$org_jbox2d_common_Transform.$pool = new $org_jbox2d_common_Vec2();
	$org_jbox2d_dynamics_contacts_Contact.islanD_FLAG = 1;
	$org_jbox2d_dynamics_contacts_Contact.touchinG_FLAG = 2;
	$org_jbox2d_dynamics_contacts_Contact.enableD_FLAG = 4;
	$org_jbox2d_dynamics_contacts_Contact.filteR_FLAG = 8;
	$org_jbox2d_dynamics_contacts_Contact.bulleT_HIT_FLAG = 16;
	$org_jbox2d_dynamics_contacts_Contact.toI_FLAG = 32;
	$org_jbox2d_collision_shapes_PolygonShape.$m_debug = false;
	$org_jbox2d_common_Vec3.$serialVersionUID = 1;
	$org_jbox2d_common_Mat22.$serialVersionUID = 2;
	$org_jbox2d_common_Mat33.$serialVersionUID = 2;
	$org_jbox2d_common_Mat33.IDENTITY = new $org_jbox2d_common_Mat33.$ctor1(new $org_jbox2d_common_Vec3.$ctor2(1, 0, 0), new $org_jbox2d_common_Vec3.$ctor2(0, 1, 0), new $org_jbox2d_common_Vec3.$ctor2(0, 0, 1));
	$org_jbox2d_collision_Distance.gjK_CALLS = 0;
	$org_jbox2d_collision_Distance.gjK_ITERS = 0;
	$org_jbox2d_collision_Distance.gjK_MAX_ITERS = 20;
	$org_jbox2d_collision_Collision.nulL_FEATURE = 2147483647;
	$org_jbox2d_collision_Collision.$d = new $org_jbox2d_common_Vec2();
	$org_jbox2d_common_Sweep.$serialVersionUID = 1;
	$org_jbox2d_collision_TimeOfImpact.maX_ITERATIONS = 1000;
	$org_jbox2d_collision_TimeOfImpact.toiCalls = 0;
	$org_jbox2d_collision_TimeOfImpact.toiIters = 0;
	$org_jbox2d_collision_TimeOfImpact.toiMaxIters = 0;
	$org_jbox2d_collision_TimeOfImpact.toiRootIters = 0;
	$org_jbox2d_collision_TimeOfImpact.toiMaxRootIters = 0;
	$org_jbox2d_collision_broadphase_BroadPhase.nulL_PROXY = -1;
	$org_jbox2d_common_Color3f.WHITE = new $org_jbox2d_common_Color3f.$ctor1(1, 1, 1);
	$org_jbox2d_common_Color3f.BLACK = new $org_jbox2d_common_Color3f.$ctor1(0, 0, 0);
	$org_jbox2d_common_Color3f.BLUE = new $org_jbox2d_common_Color3f.$ctor1(0, 0, 1);
	$org_jbox2d_common_Color3f.GREEN = new $org_jbox2d_common_Color3f.$ctor1(0, 1, 0);
	$org_jbox2d_common_Color3f.RED = new $org_jbox2d_common_Color3f.$ctor1(1, 0, 0);
	$org_jbox2d_collision_broadphase_DynamicTree.maX_STACK_SIZE = 64;
	$org_jbox2d_collision_broadphase_DynamicTree.nulL_NODE = -1;
	$org_jbox2d_dynamics_joints_PulleyJoint.miN_PULLEY_LENGTH = 2;
	$org_jbox2d_dynamics_contacts_ContactSolver.debuG_SOLVER = false;
	$org_jbox2d_dynamics_contacts_ContactSolver.k_errorTol = 0.001;
	$org_jbox2d_dynamics_contacts_ContactSolver.initiaL_NUM_CONSTRAINTS = 256;
	$org_jbox2d_dynamics_contacts_ContactSolver.k_maxConditionNumber = 100;
	$org_jbox2d_dynamics_World.worlD_POOL_SIZE = 100;
	$org_jbox2d_dynamics_World.worlD_POOL_CONTAINER_SIZE = 10;
	$org_jbox2d_dynamics_World.neW_FIXTURE = 1;
	$org_jbox2d_dynamics_World.LOCKED = 2;
	$org_jbox2d_dynamics_World.cleaR_FORCES = 4;
	$org_jbox2d_dynamics_World.$liquiD_INT = 1234598372;
	$org_jbox2d_dynamics_Body.e_islandFlag = 1;
	$org_jbox2d_dynamics_Body.e_awakeFlag = 2;
	$org_jbox2d_dynamics_Body.e_autoSleepFlag = 4;
	$org_jbox2d_dynamics_Body.e_bulletFlag = 8;
	$org_jbox2d_dynamics_Body.e_fixedRotationFlag = 16;
	$org_jbox2d_dynamics_Body.e_activeFlag = 32;
	$org_jbox2d_dynamics_Body.e_toiFlag = 64;
})();
