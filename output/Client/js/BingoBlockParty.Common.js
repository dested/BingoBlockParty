(function() {
	'use strict';
	global.BingoBlockParty = global.BingoBlockParty || {};
	global.BingoBlockParty.Common = global.BingoBlockParty.Common || {};
	global.BingoBlockParty.Common.BallGame = global.BingoBlockParty.Common.BallGame || {};
	global.BingoBlockParty.Common.BallGame.Models = global.BingoBlockParty.Common.BallGame.Models || {};
	global.BingoBlockParty.Common.BallGame.Pieces = global.BingoBlockParty.Common.BallGame.Pieces || {};
	global.BingoBlockParty.Common.BallGame.Planes = global.BingoBlockParty.Common.BallGame.Planes || {};
	global.OurSonicModels = global.OurSonicModels || {};
	global.OurSonicModels.Common = global.OurSonicModels.Common || {};
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Planes.ChutesPlane.wallLocation
	var $BingoBlockParty_$Common_BallGame_Planes_ChutesPlane$wallLocation = function() {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.$1$CircleXField = 0;
	};
	$BingoBlockParty_$Common_BallGame_Planes_ChutesPlane$wallLocation.__typeName = 'BingoBlockParty.$Common.BallGame.Planes.ChutesPlane$wallLocation';
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.CollisionObject
	var $BingoBlockParty_Common_BallGame_CollisionObject = function(objA, objB) {
		this.$1$ObjAField = null;
		this.$1$ObjBField = null;
		this.set_objA(objA);
		this.set_objB(objB);
	};
	$BingoBlockParty_Common_BallGame_CollisionObject.__typeName = 'BingoBlockParty.Common.BallGame.CollisionObject';
	global.BingoBlockParty.Common.BallGame.CollisionObject = $BingoBlockParty_Common_BallGame_CollisionObject;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.GameBoard
	var $BingoBlockParty_Common_BallGame_GameBoard = function(boardWidth, boardHeight) {
		this.boardWidth = 0;
		this.boardHeight = 0;
		this.$1$GameModelField = null;
		this.$1$PegsPlaneField = null;
		this.$1$CannonBallPlaneField = null;
		this.$1$CannonPlaneField = null;
		this.$1$ChutesPlaneField = null;
		this.$1$PegPhysicsManagerField = null;
		this.onRoundOver = null;
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
	};
	$BingoBlockParty_Common_BallGame_GameBoard.__typeName = 'BingoBlockParty.Common.BallGame.GameBoard';
	global.BingoBlockParty.Common.BallGame.GameBoard = $BingoBlockParty_Common_BallGame_GameBoard;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.GameModel
	var $BingoBlockParty_Common_BallGame_GameModel = function(boardWidth, boardHeight) {
		this.$1$BoardWidthField = 0;
		this.$1$BoardHeightField = 0;
		this.$1$PegsField = null;
		this.$1$CannonLocationField = null;
		this.$1$CannonAngleField = 0;
		this.$1$JackpotScoreField = 0;
		this.$1$NumberOfCoinsField = 0;
		this.$1$NumberOfPullsField = 0;
		this.$1$InterRoundBonusField = 0;
		this.set_boardWidth(boardWidth);
		this.set_boardHeight(boardHeight);
		this.set_pegs([]);
		this.set_cannonLocation(new Engine.Point(ss.Int32.div(this.get_boardWidth(), 2), 14));
		this.set_cannonAngle(0);
		this.set_jackpotScore(0);
		this.set_numberOfCoins(2567);
		this.set_numberOfPulls(15);
		this.set_interRoundBonus(0);
	};
	$BingoBlockParty_Common_BallGame_GameModel.__typeName = 'BingoBlockParty.Common.BallGame.GameModel';
	global.BingoBlockParty.Common.BallGame.GameModel = $BingoBlockParty_Common_BallGame_GameModel;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.ICollider
	var $BingoBlockParty_Common_BallGame_ICollider = function() {
	};
	$BingoBlockParty_Common_BallGame_ICollider.__typeName = 'BingoBlockParty.Common.BallGame.ICollider';
	global.BingoBlockParty.Common.BallGame.ICollider = $BingoBlockParty_Common_BallGame_ICollider;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.IPhysicsBody
	var $BingoBlockParty_Common_BallGame_IPhysicsBody = function() {
	};
	$BingoBlockParty_Common_BallGame_IPhysicsBody.__typeName = 'BingoBlockParty.Common.BallGame.IPhysicsBody';
	global.BingoBlockParty.Common.BallGame.IPhysicsBody = $BingoBlockParty_Common_BallGame_IPhysicsBody;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.PegPhysicsManager
	var $BingoBlockParty_Common_BallGame_PegPhysicsManager = function(gameBoard) {
		this.$1$WorldField = null;
		this.$1$GameBoardField = null;
		this.$1$CollisionsField = null;
		this.set_gameBoard(gameBoard);
	};
	$BingoBlockParty_Common_BallGame_PegPhysicsManager.__typeName = 'BingoBlockParty.Common.BallGame.PegPhysicsManager';
	global.BingoBlockParty.Common.BallGame.PegPhysicsManager = $BingoBlockParty_Common_BallGame_PegPhysicsManager;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.PhysicsBody
	var $BingoBlockParty_Common_BallGame_PhysicsBody = function(body) {
		this.$1$BodyField = null;
		this.set_body(body);
	};
	$BingoBlockParty_Common_BallGame_PhysicsBody.__typeName = 'BingoBlockParty.Common.BallGame.PhysicsBody';
	global.BingoBlockParty.Common.BallGame.PhysicsBody = $BingoBlockParty_Common_BallGame_PhysicsBody;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Models.IPlane
	var $BingoBlockParty_Common_BallGame_Models_IPlane = function() {
	};
	$BingoBlockParty_Common_BallGame_Models_IPlane.__typeName = 'BingoBlockParty.Common.BallGame.Models.IPlane';
	global.BingoBlockParty.Common.BallGame.Models.IPlane = $BingoBlockParty_Common_BallGame_Models_IPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Models.PegData
	var $BingoBlockParty_Common_BallGame_Models_PegData = function(x, y, pegType) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$PegTypeField = 0;
		this.set_x(x);
		this.set_y(y);
		this.set_pegType(pegType);
	};
	$BingoBlockParty_Common_BallGame_Models_PegData.__typeName = 'BingoBlockParty.Common.BallGame.Models.PegData';
	global.BingoBlockParty.Common.BallGame.Models.PegData = $BingoBlockParty_Common_BallGame_Models_PegData;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Models.PegType
	var $BingoBlockParty_Common_BallGame_Models_PegType = function() {
	};
	$BingoBlockParty_Common_BallGame_Models_PegType.__typeName = 'BingoBlockParty.Common.BallGame.Models.PegType';
	global.BingoBlockParty.Common.BallGame.Models.PegType = $BingoBlockParty_Common_BallGame_Models_PegType;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Models.RoundOverState
	var $BingoBlockParty_Common_BallGame_Models_RoundOverState = function() {
	};
	$BingoBlockParty_Common_BallGame_Models_RoundOverState.__typeName = 'BingoBlockParty.Common.BallGame.Models.RoundOverState';
	global.BingoBlockParty.Common.BallGame.Models.RoundOverState = $BingoBlockParty_Common_BallGame_Models_RoundOverState;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Pieces.Cannon
	var $BingoBlockParty_Common_BallGame_Pieces_Cannon = function(gameBoard, cannonPlane) {
		this.$1$GameBoardField = null;
		this.$1$CannonPlaneField = null;
		this.$1$MovingCannonField = false;
		this.set_gameBoard(gameBoard);
		this.set_cannonPlane(cannonPlane);
		this.set_movingCannon(false);
	};
	$BingoBlockParty_Common_BallGame_Pieces_Cannon.__typeName = 'BingoBlockParty.Common.BallGame.Pieces.Cannon';
	global.BingoBlockParty.Common.BallGame.Pieces.Cannon = $BingoBlockParty_Common_BallGame_Pieces_Cannon;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Pieces.CannonBall
	var $BingoBlockParty_Common_BallGame_Pieces_CannonBall = function(gameBoard, x, y, angle) {
		this.$1$GameBoardField = null;
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$AngleField = 0;
		this.$1$VelocityField = 0;
		this.$1$BallDeadField = false;
		this.$1$BodyField = null;
		this.set_gameBoard(gameBoard);
		this.set_x(x);
		this.set_y(y);
		this.set_angle(angle);
		this.set_velocity(25);
		this.set_ballDead(false);
	};
	$BingoBlockParty_Common_BallGame_Pieces_CannonBall.__typeName = 'BingoBlockParty.Common.BallGame.Pieces.CannonBall';
	global.BingoBlockParty.Common.BallGame.Pieces.CannonBall = $BingoBlockParty_Common_BallGame_Pieces_CannonBall;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Pieces.Chute
	var $BingoBlockParty_Common_BallGame_Pieces_Chute = function(gameBoard, chutesPlane, chuteIndex, chuteLocation) {
		this.$1$GameBoardField = null;
		this.$1$ChutesPlaneField = null;
		this.$1$ChuteIndexField = 0;
		this.$1$ChuteNumberField = 0;
		this.$1$ChuteLocationField = null;
		this.$1$TriggeredField = false;
		this.set_gameBoard(gameBoard);
		this.set_chutesPlane(chutesPlane);
		this.set_chuteIndex(chuteIndex);
		this.set_chuteLocation(chuteLocation);
		this.set_triggered(false);
		this.set_chuteNumber(20);
		//todo random
	};
	$BingoBlockParty_Common_BallGame_Pieces_Chute.__typeName = 'BingoBlockParty.Common.BallGame.Pieces.Chute';
	global.BingoBlockParty.Common.BallGame.Pieces.Chute = $BingoBlockParty_Common_BallGame_Pieces_Chute;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Pieces.Peg
	var $BingoBlockParty_Common_BallGame_Pieces_Peg = function(gameBoard, x, y, pegType) {
		this.$1$GameBoardField = null;
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$PegTypeField = 0;
		this.$1$HitField = false;
		this.$1$BodyField = null;
		this.$1$BonusField = 0;
		this.set_gameBoard(gameBoard);
		this.set_x(x);
		this.set_y(y);
		this.set_pegType(pegType);
		this.set_hit(false);
		this.set_bonus(30);
	};
	$BingoBlockParty_Common_BallGame_Pieces_Peg.__typeName = 'BingoBlockParty.Common.BallGame.Pieces.Peg';
	global.BingoBlockParty.Common.BallGame.Pieces.Peg = $BingoBlockParty_Common_BallGame_Pieces_Peg;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Planes.CannonBallPlane
	var $BingoBlockParty_Common_BallGame_Planes_CannonBallPlane = function(gameBoard) {
		this.$1$CannonBallField = null;
		this.$1$GameBoardField = null;
		this.set_gameBoard(gameBoard);
	};
	$BingoBlockParty_Common_BallGame_Planes_CannonBallPlane.__typeName = 'BingoBlockParty.Common.BallGame.Planes.CannonBallPlane';
	global.BingoBlockParty.Common.BallGame.Planes.CannonBallPlane = $BingoBlockParty_Common_BallGame_Planes_CannonBallPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Planes.CannonPlane
	var $BingoBlockParty_Common_BallGame_Planes_CannonPlane = function(gameBoard) {
		this.$1$CannonField = null;
		this.$1$GameBoardField = null;
		this.set_gameBoard(gameBoard);
	};
	$BingoBlockParty_Common_BallGame_Planes_CannonPlane.__typeName = 'BingoBlockParty.Common.BallGame.Planes.CannonPlane';
	global.BingoBlockParty.Common.BallGame.Planes.CannonPlane = $BingoBlockParty_Common_BallGame_Planes_CannonPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Planes.ChutesPlane
	var $BingoBlockParty_Common_BallGame_Planes_ChutesPlane = function(gameBoard) {
		this.$1$GameBoardField = null;
		this.$1$BucketsSizeField = null;
		this.$1$BumpersSizeField = null;
		this.$1$ChutesField = null;
		this.set_gameBoard(gameBoard);
		this.set_chutes([]);
	};
	$BingoBlockParty_Common_BallGame_Planes_ChutesPlane.__typeName = 'BingoBlockParty.Common.BallGame.Planes.ChutesPlane';
	global.BingoBlockParty.Common.BallGame.Planes.ChutesPlane = $BingoBlockParty_Common_BallGame_Planes_ChutesPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Common.BallGame.Planes.PegsPlane
	var $BingoBlockParty_Common_BallGame_Planes_PegsPlane = function(gameBoard) {
		this.$1$GameBoardField = null;
		this.$1$PegsField = null;
		this.set_gameBoard(gameBoard);
		this.set_pegs([]);
	};
	$BingoBlockParty_Common_BallGame_Planes_PegsPlane.__typeName = 'BingoBlockParty.Common.BallGame.Planes.PegsPlane';
	global.BingoBlockParty.Common.BallGame.Planes.PegsPlane = $BingoBlockParty_Common_BallGame_Planes_PegsPlane;
	////////////////////////////////////////////////////////////////////////////////
	// OurSonicModels.Common.DataObject
	var $OurSonicModels_Common_DataObject$1 = function(T) {
		var $type = function(data) {
			this.Data = ss.getDefaultValue(T);
			this.Data = data;
		};
		ss.registerGenericClassInstance($type, $OurSonicModels_Common_DataObject$1, [T], {}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$OurSonicModels_Common_DataObject$1.__typeName = 'OurSonicModels.Common.DataObject$1';
	ss.initGenericClass($OurSonicModels_Common_DataObject$1, 1);
	global.OurSonicModels.Common.DataObject$1 = $OurSonicModels_Common_DataObject$1;
	////////////////////////////////////////////////////////////////////////////////
	// OurSonicModels.Common.EnumerableExtensions
	var $OurSonicModels_Common_EnumerableExtensions = function() {
	};
	$OurSonicModels_Common_EnumerableExtensions.__typeName = 'OurSonicModels.Common.EnumerableExtensions';
	$OurSonicModels_Common_EnumerableExtensions.indexOfFast = function(items, ind) {
		for (var index = 0; index < items.length; index++) {
			var item = items[index];
			if (item === ind) {
				return index;
			}
		}
		return -1;
	};
	$OurSonicModels_Common_EnumerableExtensions.indexOfFast$1 = function(items, ind) {
		for (var index = 0; index < items.length; index++) {
			var item = items[index];
			if (item === ind) {
				return index;
			}
		}
		return -1;
	};
	$OurSonicModels_Common_EnumerableExtensions.where$1 = function(T) {
		return function(items, clause) {
			var items2 = [];
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (clause(item)) {
					ss.add(items2, item);
				}
			}
			return Array.prototype.slice.call(items2);
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.first$1 = function(T) {
		return function(items, clause) {
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (clause(item)) {
					return item;
				}
			}
			return ss.getDefaultValue(T);
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.all$1 = function(T) {
		return function(items, clause) {
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (!clause(item)) {
					return false;
				}
			}
			return true;
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.first = function(T) {
		return function(items, clause) {
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (clause(item)) {
						return item;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return ss.getDefaultValue(T);
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.all = function(T) {
		return function(items, clause) {
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (!clause(item)) {
					return false;
				}
			}
			return true;
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.any = function(T) {
		return function(items, clause) {
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (clause(item)) {
						return true;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return false;
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.any$1 = function(T) {
		return function(items, clause) {
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				if (clause(item)) {
					return true;
				}
			}
			return false;
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.orderBy = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone(items);
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.orderBy$1 = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone(items);
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.orderBy$2 = function(T) {
		return function(items, clause) {
			var j = ss.arrayClone(items);
			j.sort(function(a, b) {
				return ss.compare(clause(a), clause(b));
			});
			return j;
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.select$1 = function(T, T2) {
		return function(items, clause) {
			var items2 = [];
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				ss.add(items2, clause(item));
			}
			return Array.prototype.slice.call(items2);
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.where = function(T) {
		return function(items, clause) {
			var items2 = [];
			var $t1 = ss.getEnumerator(items);
			try {
				while ($t1.moveNext()) {
					var item = $t1.current();
					if (clause(item)) {
						ss.add(items2, item);
					}
				}
			}
			finally {
				$t1.dispose();
			}
			return Array.prototype.slice.call(items2);
		};
	};
	$OurSonicModels_Common_EnumerableExtensions.select = function(T, T2) {
		return function(items, clause) {
			var items2 = [];
			for (var $t1 = 0; $t1 < items.length; $t1++) {
				var item = items[$t1];
				ss.add(items2, clause(item));
			}
			return Array.prototype.slice.call(items2);
		};
	};
	global.OurSonicModels.Common.EnumerableExtensions = $OurSonicModels_Common_EnumerableExtensions;
	ss.initClass($BingoBlockParty_$Common_BallGame_Planes_ChutesPlane$wallLocation, {
		get_$x: function() {
			return this.$1$XField;
		},
		set_$x: function(value) {
			this.$1$XField = value;
		},
		get_$y: function() {
			return this.$1$YField;
		},
		set_$y: function(value) {
			this.$1$YField = value;
		},
		get_$width: function() {
			return this.$1$WidthField;
		},
		set_$width: function(value) {
			this.$1$WidthField = value;
		},
		get_$height: function() {
			return this.$1$HeightField;
		},
		set_$height: function(value) {
			this.$1$HeightField = value;
		},
		get_$circleX: function() {
			return this.$1$CircleXField;
		},
		set_$circleX: function(value) {
			this.$1$CircleXField = value;
		}
	});
	ss.initClass($BingoBlockParty_Common_BallGame_CollisionObject, {
		get_objA: function() {
			return this.$1$ObjAField;
		},
		set_objA: function(value) {
			this.$1$ObjAField = value;
		},
		get_objB: function() {
			return this.$1$ObjBField;
		},
		set_objB: function(value) {
			this.$1$ObjBField = value;
		}
	});
	ss.initClass($BingoBlockParty_Common_BallGame_GameBoard, {
		get_gameModel: function() {
			return this.$1$GameModelField;
		},
		set_gameModel: function(value) {
			this.$1$GameModelField = value;
		},
		get_pegsPlane: function() {
			return this.$1$PegsPlaneField;
		},
		set_pegsPlane: function(value) {
			this.$1$PegsPlaneField = value;
		},
		get_cannonBallPlane: function() {
			return this.$1$CannonBallPlaneField;
		},
		set_cannonBallPlane: function(value) {
			this.$1$CannonBallPlaneField = value;
		},
		get_cannonPlane: function() {
			return this.$1$CannonPlaneField;
		},
		set_cannonPlane: function(value) {
			this.$1$CannonPlaneField = value;
		},
		get_chutesPlane: function() {
			return this.$1$ChutesPlaneField;
		},
		set_chutesPlane: function(value) {
			this.$1$ChutesPlaneField = value;
		},
		get_pegPhysicsManager: function() {
			return this.$1$PegPhysicsManagerField;
		},
		set_pegPhysicsManager: function(value) {
			this.$1$PegPhysicsManagerField = value;
		},
		createObjects: function() {
			this.set_gameModel(new $BingoBlockParty_Common_BallGame_GameModel(this.boardWidth, this.boardHeight));
			this.set_pegsPlane(new $BingoBlockParty_Common_BallGame_Planes_PegsPlane(this));
			this.set_cannonBallPlane(new $BingoBlockParty_Common_BallGame_Planes_CannonBallPlane(this));
			this.set_cannonPlane(new $BingoBlockParty_Common_BallGame_Planes_CannonPlane(this));
			this.set_chutesPlane(new $BingoBlockParty_Common_BallGame_Planes_ChutesPlane(this));
			this.set_pegPhysicsManager(new $BingoBlockParty_Common_BallGame_PegPhysicsManager(this));
		},
		init: function() {
			this.get_pegPhysicsManager().init();
			this.get_chutesPlane().init();
			this.get_cannonBallPlane().init();
			this.get_cannonPlane().init();
			this.get_pegsPlane().init();
			var type = 0;
			var pegLocs = [];
			for (var i = 0; i < 800; i += 50) {
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(62, 201 + i, 0));
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(101, 178 + i, 0));
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(145, 173 + i, 0));
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(188, 184 + i, type + 1));
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(226, 207 + i, 0));
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(262, 224 + i, 0));
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(301, 235 + i, (type + 3) % 5));
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(345, 231 + i, 0));
				ss.add(pegLocs, new $BingoBlockParty_Common_BallGame_Models_PegData(380, 213 + i, 0));
				type = (type + 1) % 5;
			}
			this.get_pegsPlane().loadPegs(pegLocs);
		},
		fireCannon: function() {
			this.get_cannonBallPlane().fireCannonBall();
		},
		roundOver: function() {
			this.get_pegPhysicsManager().roundOver(0);
			this.get_cannonPlane().roundOver(0);
			this.get_chutesPlane().roundOver(0);
			this.get_pegsPlane().roundOver(0);
			this.get_cannonBallPlane().roundOver(0);
			this.get_pegPhysicsManager().roundOver(1);
			this.get_cannonPlane().roundOver(1);
			this.get_chutesPlane().roundOver(1);
			this.get_pegsPlane().roundOver(1);
			this.get_cannonBallPlane().roundOver(1);
			if (!ss.staticEquals(this.onRoundOver, null)) {
				this.onRoundOver();
			}
		},
		tick: function(elapsedGameTime) {
			this.get_pegPhysicsManager().tick();
			this.get_cannonPlane().tick();
			this.get_chutesPlane().tick();
			this.get_pegsPlane().tick();
			this.get_cannonBallPlane().tick();
		}
	});
	ss.initClass($BingoBlockParty_Common_BallGame_GameModel, {
		get_boardWidth: function() {
			return this.$1$BoardWidthField;
		},
		set_boardWidth: function(value) {
			this.$1$BoardWidthField = value;
		},
		get_boardHeight: function() {
			return this.$1$BoardHeightField;
		},
		set_boardHeight: function(value) {
			this.$1$BoardHeightField = value;
		},
		get_pegs: function() {
			return this.$1$PegsField;
		},
		set_pegs: function(value) {
			this.$1$PegsField = value;
		},
		get_cannonLocation: function() {
			return this.$1$CannonLocationField;
		},
		set_cannonLocation: function(value) {
			this.$1$CannonLocationField = value;
		},
		get_cannonAngle: function() {
			return this.$1$CannonAngleField;
		},
		set_cannonAngle: function(value) {
			this.$1$CannonAngleField = value;
		},
		get_jackpotScore: function() {
			return this.$1$JackpotScoreField;
		},
		set_jackpotScore: function(value) {
			this.$1$JackpotScoreField = value;
		},
		get_numberOfCoins: function() {
			return this.$1$NumberOfCoinsField;
		},
		set_numberOfCoins: function(value) {
			this.$1$NumberOfCoinsField = value;
		},
		get_numberOfPulls: function() {
			return this.$1$NumberOfPullsField;
		},
		set_numberOfPulls: function(value) {
			this.$1$NumberOfPullsField = value;
		},
		get_interRoundBonus: function() {
			return this.$1$InterRoundBonusField;
		},
		set_interRoundBonus: function(value) {
			this.$1$InterRoundBonusField = value;
		}
	});
	ss.initInterface($BingoBlockParty_Common_BallGame_ICollider, { collide: null, trigger: null });
	ss.initInterface($BingoBlockParty_Common_BallGame_IPhysicsBody, { get_body: null, set_body: null, get_awake: null, get_position: null, get_rotation: null });
	ss.initClass($BingoBlockParty_Common_BallGame_PegPhysicsManager, {
		get_world: function() {
			return this.$1$WorldField;
		},
		set_world: function(value) {
			this.$1$WorldField = value;
		},
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		get_collisions: function() {
			return this.$1$CollisionsField;
		},
		set_collisions: function(value) {
			this.$1$CollisionsField = value;
		},
		init: function() {
			this.set_world(new org.jbox2d.dynamics.World(new org.jbox2d.common.Vec2.$ctor2(0, 35)));
			this.createRectangleWall(0, -this.get_gameBoard().get_gameModel().get_boardHeight(), 1, this.get_gameBoard().get_gameModel().get_boardHeight() * 2, null);
			this.createRectangleWall(this.get_gameBoard().get_gameModel().get_boardWidth(), -this.get_gameBoard().get_gameModel().get_boardHeight(), 1, this.get_gameBoard().get_gameModel().get_boardHeight() * 2, null);
			this.createRectangleWall(0, this.get_gameBoard().get_gameModel().get_boardHeight(), this.get_gameBoard().get_gameModel().get_boardWidth(), 1, null);
			this.set_collisions([]);
			var myListener = new org.jbox2d.callbacks.ContactListener();
			myListener.beginContact = ss.mkdel(this, function(fixture) {
				if (ss.isValue(fixture.getFixtureA().getBody().getUserData())) {
					if (ss.isInstanceOfType(fixture.getFixtureA().getBody().getUserData(), $BingoBlockParty_Common_BallGame_ICollider)) {
						ss.add(this.get_collisions(), new $BingoBlockParty_Common_BallGame_CollisionObject(ss.cast(fixture.getFixtureA().getBody().getUserData(), $BingoBlockParty_Common_BallGame_ICollider), ss.cast(fixture.getFixtureB().getBody().getUserData(), $BingoBlockParty_Common_BallGame_ICollider)));
					}
				}
				if (ss.isValue(fixture.getFixtureB().getBody().getUserData())) {
					if (ss.isInstanceOfType(fixture.getFixtureB().getBody().getUserData(), $BingoBlockParty_Common_BallGame_ICollider)) {
						ss.add(this.get_collisions(), new $BingoBlockParty_Common_BallGame_CollisionObject(ss.cast(fixture.getFixtureB().getBody().getUserData(), $BingoBlockParty_Common_BallGame_ICollider), ss.cast(fixture.getFixtureA().getBody().getUserData(), $BingoBlockParty_Common_BallGame_ICollider)));
					}
				}
			});
			this.get_world().setContactListener(myListener);
		},
		createRectangleWall: function(x, y, width, height, userData) {
			var fixDef = new org.jbox2d.dynamics.FixtureDef();
			fixDef.density = 1;
			fixDef.friction = 1;
			fixDef.restitution = 0.6;
			var bodyDef = new org.jbox2d.dynamics.BodyDef();
			bodyDef.type = 0;
			bodyDef.position.x = this.pixelToMeter(x) + this.pixelToMeter(width) / 2;
			bodyDef.position.y = this.pixelToMeter(y) + this.pixelToMeter(height) / 2;
			var polyShape;
			fixDef.shape = polyShape = new org.jbox2d.collision.shapes.PolygonShape();
			polyShape.setAsBox(this.pixelToMeter(width) / 2, this.pixelToMeter(height) / 2);
			var body = this.get_world().createBody(bodyDef);
			body.createFixture(fixDef);
			body.setUserData(userData);
			return new $BingoBlockParty_Common_BallGame_PhysicsBody(body);
		},
		createRectangleSensor: function(x, y, width, height, userData) {
			var fixDef = new org.jbox2d.dynamics.FixtureDef();
			fixDef.density = 1;
			fixDef.friction = 1;
			fixDef.restitution = 0.6;
			var bodyDef = new org.jbox2d.dynamics.BodyDef();
			bodyDef.type = 0;
			bodyDef.position.x = this.pixelToMeter(x) + this.pixelToMeter(width) / 2;
			bodyDef.position.y = this.pixelToMeter(y) + this.pixelToMeter(height) / 2;
			var polyShape;
			fixDef.shape = polyShape = new org.jbox2d.collision.shapes.PolygonShape();
			polyShape.setAsBox(this.pixelToMeter(width) / 2, this.pixelToMeter(height) / 2);
			var body = this.get_world().createBody(bodyDef);
			var fixture = body.createFixture(fixDef);
			fixture.setSensor(true);
			body.setUserData(userData);
			return new $BingoBlockParty_Common_BallGame_PhysicsBody(body);
		},
		createCircleWall: function(x, y, rad, userData) {
			var fixDef = new org.jbox2d.dynamics.FixtureDef();
			fixDef.density = 1;
			fixDef.friction = 1;
			fixDef.restitution = 0.6;
			var bodyDef = new org.jbox2d.dynamics.BodyDef();
			bodyDef.type = 0;
			bodyDef.position.x = this.pixelToMeter(x);
			bodyDef.position.y = this.pixelToMeter(y);
			var circleShape = new org.jbox2d.collision.shapes.CircleShape();
			circleShape.m_radius = this.pixelToMeter(rad);
			fixDef.shape = circleShape;
			var body = this.get_world().createBody(bodyDef);
			var fixture = body.createFixture(fixDef);
			body.setUserData(userData);
			return new $BingoBlockParty_Common_BallGame_PhysicsBody(body);
		},
		destroyBody: function(body) {
			this.get_world().destroyBody(body.get_body());
		},
		createPeg: function(x, y, peg) {
			var fixDef = new org.jbox2d.dynamics.FixtureDef();
			fixDef.density = 1;
			fixDef.friction = 1;
			fixDef.restitution = 0.6;
			var bodyDef = new org.jbox2d.dynamics.BodyDef();
			bodyDef.type = 0;
			bodyDef.position.x = this.pixelToMeter(x);
			bodyDef.position.y = this.pixelToMeter(y);
			var circleShape = new org.jbox2d.collision.shapes.CircleShape();
			circleShape.m_radius = 0.5;
			fixDef.shape = circleShape;
			var body = this.get_world().createBody(bodyDef);
			var fixture = body.createFixture(fixDef);
			body.setUserData(peg);
			return new $BingoBlockParty_Common_BallGame_PhysicsBody(body);
		},
		createCannonBall: function(x, y, angle, velocity, cannonBall) {
			var vx = Math.cos(angle * Math.PI / 180) * velocity;
			var vy = Math.sin(angle * Math.PI / 180) * velocity;
			var offvx = Math.cos(angle * Math.PI / 180) * 4 * 16;
			var offvy = Math.sin(angle * Math.PI / 180) * 3 * 16;
			var fixDef = new org.jbox2d.dynamics.FixtureDef();
			fixDef.density = 1;
			fixDef.friction = 1;
			fixDef.restitution = 0.6;
			var bodyDef = new org.jbox2d.dynamics.BodyDef();
			bodyDef.type = 2;
			bodyDef.position.x = this.pixelToMeter(x + offvx);
			bodyDef.position.y = this.pixelToMeter(y + offvy);
			var circleShape = new org.jbox2d.collision.shapes.CircleShape();
			circleShape.m_radius = 0.625;
			fixDef.shape = circleShape;
			var body = this.get_world().createBody(bodyDef);
			var fixture = body.createFixture(fixDef);
			body.setUserData(cannonBall);
			body.applyLinearImpulse(new org.jbox2d.common.Vec2.$ctor2(vx, vy), body.getWorldCenter());
			return new $BingoBlockParty_Common_BallGame_PhysicsBody(body);
		},
		get_meterPixelSize: function() {
			return 16;
		},
		meterToPixel: function(meter) {
			return meter * this.get_meterPixelSize();
		},
		pixelToMeter: function(pixel) {
			return pixel / this.get_meterPixelSize();
		},
		roundOver: function(post) {
		},
		tick: function() {
			ss.clear(this.get_collisions());
			this.get_world().step(0.0166, 2, 2);
			this.get_world().clearForces();
			for (var i = 0; i < this.get_collisions().length; i++) {
				var collision = this.get_collisions()[i];
				collision.get_objA().collide(collision.get_objB());
			}
		}
	});
	ss.initClass($BingoBlockParty_Common_BallGame_PhysicsBody, {
		get_awake: function() {
			return this.get_body().isAwake();
		},
		get_position: function() {
			var position = this.get_body().getPosition();
			return new Engine.PointF(position.x, position.y);
		},
		get_rotation: function() {
			return this.get_body().getAngle();
		},
		get_body: function() {
			return this.$1$BodyField;
		},
		set_body: function(value) {
			this.$1$BodyField = value;
		}
	}, null, [$BingoBlockParty_Common_BallGame_IPhysicsBody]);
	ss.initInterface($BingoBlockParty_Common_BallGame_Models_IPlane, { init: null, roundOver: null, tick: null });
	ss.initClass($BingoBlockParty_Common_BallGame_Models_PegData, {
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
		get_pegType: function() {
			return this.$1$PegTypeField;
		},
		set_pegType: function(value) {
			this.$1$PegTypeField = value;
		}
	});
	ss.initEnum($BingoBlockParty_Common_BallGame_Models_PegType, { none: 0, blue: 1, yellow: 2, red: 3, green: 4, purple: 5 });
	ss.initEnum($BingoBlockParty_Common_BallGame_Models_RoundOverState, { pre: 0, post: 1 });
	ss.initClass($BingoBlockParty_Common_BallGame_Pieces_Cannon, {
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		get_cannonPlane: function() {
			return this.$1$CannonPlaneField;
		},
		set_cannonPlane: function(value) {
			this.$1$CannonPlaneField = value;
		},
		get_movingCannon: function() {
			return this.$1$MovingCannonField;
		},
		set_movingCannon: function(value) {
			this.$1$MovingCannonField = value;
		},
		rotateCannon: function(angle) {
			this.get_gameBoard().get_gameModel().set_cannonAngle(angle);
			if (this.get_gameBoard().get_gameModel().get_cannonAngle() < -30) {
				this.get_gameBoard().get_gameModel().set_cannonAngle(-30);
			}
			if (this.get_gameBoard().get_gameModel().get_cannonAngle() > 30) {
				this.get_gameBoard().get_gameModel().set_cannonAngle(30);
			}
		},
		init: function() {
		},
		tick: function() {
		}
	});
	ss.initClass($BingoBlockParty_Common_BallGame_Pieces_CannonBall, {
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
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
		get_angle: function() {
			return this.$1$AngleField;
		},
		set_angle: function(value) {
			this.$1$AngleField = value;
		},
		get_velocity: function() {
			return this.$1$VelocityField;
		},
		set_velocity: function(value) {
			this.$1$VelocityField = value;
		},
		get_ballDead: function() {
			return this.$1$BallDeadField;
		},
		set_ballDead: function(value) {
			this.$1$BallDeadField = value;
		},
		get_body: function() {
			return this.$1$BodyField;
		},
		set_body: function(value) {
			this.$1$BodyField = value;
		},
		init: function() {
			this.set_body(this.get_gameBoard().get_pegPhysicsManager().createCannonBall(this.get_x(), this.get_y(), this.get_angle(), this.get_velocity(), this));
		},
		collide: function(other) {
			if (ss.isInstanceOfType(other, $BingoBlockParty_Common_BallGame_Pieces_Peg)) {
				other.trigger();
			}
			if (ss.isInstanceOfType(other, $BingoBlockParty_Common_BallGame_Pieces_Chute)) {
				this.get_gameBoard().get_pegPhysicsManager().destroyBody(this.get_body());
				this.set_ballDead(true);
				other.trigger();
				this.get_gameBoard().roundOver();
			}
		},
		trigger: function() {
		},
		tick: function() {
			if (!this.get_body().get_awake()) {
				this.set_ballDead(true);
				this.get_gameBoard().get_pegPhysicsManager().destroyBody(this.get_body());
				this.get_gameBoard().roundOver();
			}
		}
	}, null, [$BingoBlockParty_Common_BallGame_ICollider]);
	ss.initClass($BingoBlockParty_Common_BallGame_Pieces_Chute, {
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		get_chutesPlane: function() {
			return this.$1$ChutesPlaneField;
		},
		set_chutesPlane: function(value) {
			this.$1$ChutesPlaneField = value;
		},
		get_chuteIndex: function() {
			return this.$1$ChuteIndexField;
		},
		set_chuteIndex: function(value) {
			this.$1$ChuteIndexField = value;
		},
		get_chuteNumber: function() {
			return this.$1$ChuteNumberField;
		},
		set_chuteNumber: function(value) {
			this.$1$ChuteNumberField = value;
		},
		get_chuteLocation: function() {
			return this.$1$ChuteLocationField;
		},
		set_chuteLocation: function(value) {
			this.$1$ChuteLocationField = value;
		},
		get_triggered: function() {
			return this.$1$TriggeredField;
		},
		set_triggered: function(value) {
			this.$1$TriggeredField = value;
		},
		init: function() {
		},
		tick: function() {
		},
		roundOver: function(state) {
			switch (state) {
				case 0: {
					break;
				}
				case 1: {
					this.set_triggered(false);
					this.set_chuteNumber(50);
					break;
				}
			}
		},
		collide: function(collider) {
			this.set_triggered(true);
		},
		trigger: function() {
		}
	}, null, [$BingoBlockParty_Common_BallGame_ICollider]);
	ss.initClass($BingoBlockParty_Common_BallGame_Pieces_Peg, {
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
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
		get_pegType: function() {
			return this.$1$PegTypeField;
		},
		set_pegType: function(value) {
			this.$1$PegTypeField = value;
		},
		get_hit: function() {
			return this.$1$HitField;
		},
		set_hit: function(value) {
			this.$1$HitField = value;
		},
		get_body: function() {
			return this.$1$BodyField;
		},
		set_body: function(value) {
			this.$1$BodyField = value;
		},
		get_bonus: function() {
			return this.$1$BonusField;
		},
		set_bonus: function(value) {
			this.$1$BonusField = value;
		},
		init: function() {
			this.set_body(this.get_gameBoard().get_pegPhysicsManager().createPeg(this.get_x(), this.get_y(), this));
		},
		tick: function() {
		},
		get_pegName: function() {
			switch (this.get_pegType()) {
				case 0: {
					return 'white';
				}
				case 1: {
					return 'blue';
				}
				case 2: {
					return 'yellow';
				}
				case 3: {
					return 'red';
				}
				case 4: {
					return 'green';
				}
				case 5: {
					return 'purple';
				}
			}
			return null;
		},
		destroy: function() {
			this.get_gameBoard().get_pegPhysicsManager().destroyBody(this.get_body());
		},
		roundOver: function(state) {
			if (this.get_hit()) {
				switch (state) {
					case 1: {
						this.destroy();
						break;
					}
				}
			}
		},
		collide: function(collider) {
		},
		trigger: function() {
			if (!this.get_hit()) {
				var $t1 = this.get_gameBoard().get_gameModel();
				$t1.set_interRoundBonus($t1.get_interRoundBonus() + this.get_bonus());
				this.set_hit(true);
			}
		}
	}, null, [$BingoBlockParty_Common_BallGame_ICollider]);
	ss.initClass($BingoBlockParty_Common_BallGame_Planes_CannonBallPlane, {
		get_cannonBall: function() {
			return this.$1$CannonBallField;
		},
		set_cannonBall: function(value) {
			this.$1$CannonBallField = value;
		},
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		init: function() {
		},
		fireCannonBall: function() {
			if (ss.isNullOrUndefined(this.get_cannonBall())) {
				this.set_cannonBall(this.createCannonBall(this.get_gameBoard().get_gameModel().get_cannonLocation().get_x(), this.get_gameBoard().get_gameModel().get_cannonLocation().get_y(), this.get_gameBoard().get_gameModel().get_cannonAngle() + 90));
				this.get_cannonBall().init();
			}
		},
		createCannonBall: function(x, y, angle) {
			return new $BingoBlockParty_Common_BallGame_Pieces_CannonBall(this.get_gameBoard(), x, y, angle);
		},
		roundOver: function(state) {
			switch (state) {
				case 0: {
					break;
				}
				case 1: {
					this.set_cannonBall(null);
					break;
				}
			}
		},
		tick: function() {
			if (ss.isValue(this.get_cannonBall())) {
				this.get_cannonBall().tick();
			}
		}
	}, null, [$BingoBlockParty_Common_BallGame_Models_IPlane]);
	ss.initClass($BingoBlockParty_Common_BallGame_Planes_CannonPlane, {
		get_cannon: function() {
			return this.$1$CannonField;
		},
		set_cannon: function(value) {
			this.$1$CannonField = value;
		},
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		shootBall: function() {
			this.get_gameBoard().fireCannon();
		},
		init: function() {
			this.set_cannon(this.createCannon(this));
			this.get_cannon().init();
		},
		createCannon: function(cannonPlane) {
			return new $BingoBlockParty_Common_BallGame_Pieces_Cannon(this.get_gameBoard(), cannonPlane);
		},
		roundOver: function(state) {
			switch (state) {
				case 0: {
					break;
				}
				case 1: {
					this.get_gameBoard().get_gameModel().set_cannonAngle(0);
					break;
				}
			}
		},
		tick: function() {
			this.get_cannon().tick();
		}
	}, null, [$BingoBlockParty_Common_BallGame_Models_IPlane]);
	ss.initClass($BingoBlockParty_Common_BallGame_Planes_ChutesPlane, {
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		get_bucketsSize: function() {
			return this.$1$BucketsSizeField;
		},
		set_bucketsSize: function(value) {
			this.$1$BucketsSizeField = value;
		},
		get_bumpersSize: function() {
			return this.$1$BumpersSizeField;
		},
		set_bumpersSize: function(value) {
			this.$1$BumpersSizeField = value;
		},
		get_chutes: function() {
			return this.$1$ChutesField;
		},
		set_chutes: function(value) {
			this.$1$ChutesField = value;
		},
		init: function() {
			this.set_bumpersSize(new Engine.Size.$ctor1(434, 65));
			this.set_bucketsSize(new Engine.Size.$ctor1(399, 47));
			var chuteLocations = [];
			var roundBumperOffset = 14;
			var bucketWidth = 55;
			var bucketHeight = this.get_bucketsSize().get_height();
			var bumperWidth = 31;
			var halfBumperWidth = 18;
			for (var i = 0; i < 5; i++) {
				var x = halfBumperWidth + i * (bucketWidth + bumperWidth);
				ss.add(chuteLocations, new Engine.Point(x, this.get_gameBoard().get_gameModel().get_boardHeight() - this.get_bucketsSize().get_height()));
			}
			var wallLocations = [];
			var $t1 = new $BingoBlockParty_$Common_BallGame_Planes_ChutesPlane$wallLocation();
			$t1.set_$x(0);
			$t1.set_$y(this.get_gameBoard().get_gameModel().get_boardHeight() - (this.get_bumpersSize().get_height() - roundBumperOffset));
			$t1.set_$width(halfBumperWidth);
			$t1.set_$height(this.get_bumpersSize().get_height() - roundBumperOffset);
			$t1.set_$circleX(0);
			ss.add(wallLocations, $t1);
			for (var i1 = 1; i1 < 5; i1++) {
				var x1 = halfBumperWidth + bucketWidth * i1 + bumperWidth * (i1 - 1);
				var $t2 = new $BingoBlockParty_$Common_BallGame_Planes_ChutesPlane$wallLocation();
				$t2.set_$x(x1);
				$t2.set_$y(this.get_gameBoard().get_gameModel().get_boardHeight() - (this.get_bumpersSize().get_height() - roundBumperOffset));
				$t2.set_$width(bumperWidth);
				$t2.set_$height(this.get_bumpersSize().get_height() - roundBumperOffset);
				$t2.set_$circleX(x1 + ss.Int32.div(bumperWidth, 2));
				ss.add(wallLocations, $t2);
			}
			var $t3 = new $BingoBlockParty_$Common_BallGame_Planes_ChutesPlane$wallLocation();
			$t3.set_$x(halfBumperWidth + bucketWidth * 5 + bumperWidth * 4);
			$t3.set_$y(this.get_gameBoard().get_gameModel().get_boardHeight() - (this.get_bumpersSize().get_height() - roundBumperOffset));
			$t3.set_$width(halfBumperWidth);
			$t3.set_$height(this.get_bumpersSize().get_height() - roundBumperOffset);
			$t3.set_$circleX(this.get_gameBoard().get_gameModel().get_boardWidth());
			ss.add(wallLocations, $t3);
			for (var i2 = 0; i2 < chuteLocations.length; i2++) {
				var chuteLocation = chuteLocations[i2];
				var chute = this.createChute(this, i2, chuteLocation);
				chute.init();
				this.get_gameBoard().get_pegPhysicsManager().createRectangleSensor(chuteLocation.get_x(), chuteLocation.get_y(), bucketWidth, bucketHeight, chute);
				ss.add(this.get_chutes(), chute);
			}
			for (var $t4 = 0; $t4 < wallLocations.length; $t4++) {
				var wallLocation = wallLocations[$t4];
				this.get_gameBoard().get_pegPhysicsManager().createRectangleWall(wallLocation.get_$x(), wallLocation.get_$y(), wallLocation.get_$width(), wallLocation.get_$height(), null);
				this.get_gameBoard().get_pegPhysicsManager().createCircleWall(wallLocation.get_$circleX(), wallLocation.get_$y(), roundBumperOffset, null);
			}
		},
		createChute: function(chutesPlane, chuteNumber, chuteLocation) {
			return new $BingoBlockParty_Common_BallGame_Pieces_Chute(this.get_gameBoard(), chutesPlane, chuteNumber, chuteLocation);
		},
		roundOver: function(state) {
			var $t1 = this.get_chutes();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var chute = $t1[$t2];
				chute.roundOver(state);
			}
		},
		tick: function() {
		}
	}, null, [$BingoBlockParty_Common_BallGame_Models_IPlane]);
	ss.initClass($BingoBlockParty_Common_BallGame_Planes_PegsPlane, {
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		get_pegs: function() {
			return this.$1$PegsField;
		},
		set_pegs: function(value) {
			this.$1$PegsField = value;
		},
		init: function() {
		},
		loadPegs: function(pegLocs) {
			this.set_pegs([]);
			for (var $t1 = 0; $t1 < pegLocs.length; $t1++) {
				var pegData = pegLocs[$t1];
				var peg = this.createPeg(pegData.get_x(), pegData.get_y(), pegData.get_pegType());
				ss.add(this.get_pegs(), peg);
				peg.init();
			}
		},
		createPeg: function(x, y, pegType) {
			return new $BingoBlockParty_Common_BallGame_Pieces_Peg(this.get_gameBoard(), x, y, pegType);
		},
		roundOver: function(state) {
			for (var i = this.get_pegs().length - 1; i >= 0; i--) {
				var peg = this.get_pegs()[i];
				peg.roundOver(state);
				if (state === 1 && peg.get_hit()) {
					ss.removeAt(this.get_pegs(), i);
				}
			}
		},
		tick: function() {
		}
	}, null, [$BingoBlockParty_Common_BallGame_Models_IPlane]);
	ss.initClass($OurSonicModels_Common_EnumerableExtensions, {});
})();
