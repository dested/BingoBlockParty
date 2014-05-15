(function() {
	'use strict';
	global.BingoBlockParty = global.BingoBlockParty || {};
	global.BingoBlockParty.Client = global.BingoBlockParty.Client || {};
	global.BingoBlockParty.Client.BallGame = global.BingoBlockParty.Client.BallGame || {};
	global.BingoBlockParty.Client.BallGame.Pieces = global.BingoBlockParty.Client.BallGame.Pieces || {};
	global.BingoBlockParty.Client.BallGame.Planes = global.BingoBlockParty.Client.BallGame.Planes || {};
	global.BingoBlockParty.Client.Utils = global.BingoBlockParty.Client.Utils || {};
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.Game
	var $BingoBlockParty_Client_Game = function(client) {
		this.$1$ClientField = null;
		this.$1$GameBoardField = null;
		this.set_client(client);
	};
	$BingoBlockParty_Client_Game.__typeName = 'BingoBlockParty.Client.Game';
	global.BingoBlockParty.Client.Game = $BingoBlockParty_Client_Game;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.ClientGameBoard
	var $BingoBlockParty_Client_BallGame_ClientGameBoard = function(game, boardWidth, boardHeight, renderer, canvasWidth, canvasHeight) {
		this.$2$RendererField = null;
		this.$game = null;
		this.$canvasWidth = 0;
		this.$canvasHeight = 0;
		this.$2$BackgroundPlaneField = null;
		this.$2$ViewManagerField = null;
		this.$2$OverlaysPlaneField = null;
		BingoBlockParty.Common.BallGame.GameBoard.call(this, boardWidth, boardHeight);
		this.set_renderer(renderer);
		this.$game = game;
		this.$canvasWidth = canvasWidth;
		this.$canvasHeight = canvasHeight;
	};
	$BingoBlockParty_Client_BallGame_ClientGameBoard.__typeName = 'BingoBlockParty.Client.BallGame.ClientGameBoard';
	global.BingoBlockParty.Client.BallGame.ClientGameBoard = $BingoBlockParty_Client_BallGame_ClientGameBoard;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.ClientGameModel
	var $BingoBlockParty_Client_BallGame_ClientGameModel = function(boardWidth, boardHeight, canvasWidth, canvasHeight) {
		this.$2$CanvasWidthField = 0;
		this.$2$CanvasHeightField = 0;
		this.$2$TouchManagerField = null;
		BingoBlockParty.Common.BallGame.GameModel.call(this, boardWidth, boardHeight);
		this.set_canvasWidth(canvasWidth);
		this.set_canvasHeight(canvasHeight);
	};
	$BingoBlockParty_Client_BallGame_ClientGameModel.__typeName = 'BingoBlockParty.Client.BallGame.ClientGameModel';
	global.BingoBlockParty.Client.BallGame.ClientGameModel = $BingoBlockParty_Client_BallGame_ClientGameModel;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.ClientPegPhysicsManager
	var $BingoBlockParty_Client_BallGame_ClientPegPhysicsManager = function(gameBoard, shouldDraw) {
		this.$2$ShouldDrawField = false;
		BingoBlockParty.Common.BallGame.PegPhysicsManager.call(this, gameBoard);
		this.set_shouldDraw(shouldDraw);
		this.set_gameBoard(gameBoard);
	};
	$BingoBlockParty_Client_BallGame_ClientPegPhysicsManager.__typeName = 'BingoBlockParty.Client.BallGame.ClientPegPhysicsManager';
	global.BingoBlockParty.Client.BallGame.ClientPegPhysicsManager = $BingoBlockParty_Client_BallGame_ClientPegPhysicsManager;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.ViewManager
	var $BingoBlockParty_Client_BallGame_ViewManager = function(gameBoard) {
		this.$1$GameBoardField = null;
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$ViewWidthField = 0;
		this.$1$ViewHeightField = 0;
		this.$1$PaddingBoxField = null;
		this.set_gameBoard(gameBoard);
		this.set_viewWidth($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(gameBoard.get_gameModel()).get_canvasWidth());
		this.set_viewHeight($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(gameBoard.get_gameModel()).get_canvasHeight());
		this.set_paddingBox(new Engine.Interfaces.Size(100, 100));
	};
	$BingoBlockParty_Client_BallGame_ViewManager.__typeName = 'BingoBlockParty.Client.BallGame.ViewManager';
	global.BingoBlockParty.Client.BallGame.ViewManager = $BingoBlockParty_Client_BallGame_ViewManager;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Pieces.ClientCannon
	var $BingoBlockParty_Client_BallGame_Pieces_ClientCannon = function(gameBoard, cannonPlane) {
		this.$2$CannonAssetField = null;
		BingoBlockParty.Common.BallGame.Pieces.Cannon.call(this, gameBoard, cannonPlane);
	};
	$BingoBlockParty_Client_BallGame_Pieces_ClientCannon.__typeName = 'BingoBlockParty.Client.BallGame.Pieces.ClientCannon';
	global.BingoBlockParty.Client.BallGame.Pieces.ClientCannon = $BingoBlockParty_Client_BallGame_Pieces_ClientCannon;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Pieces.ClientCannonBall
	var $BingoBlockParty_Client_BallGame_Pieces_ClientCannonBall = function(gameBoard, x, y, angle) {
		BingoBlockParty.Common.BallGame.Pieces.CannonBall.call(this, gameBoard, x, y, angle);
	};
	$BingoBlockParty_Client_BallGame_Pieces_ClientCannonBall.__typeName = 'BingoBlockParty.Client.BallGame.Pieces.ClientCannonBall';
	global.BingoBlockParty.Client.BallGame.Pieces.ClientCannonBall = $BingoBlockParty_Client_BallGame_Pieces_ClientCannonBall;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Pieces.ClientChute
	var $BingoBlockParty_Client_BallGame_Pieces_ClientChute = function(gameBoard, chutesPlane, chuteIndex, chuteLocation) {
		this.$2$TickingField = 0;
		this.$2$BlinkingField = false;
		this.$2$ChuteAssetsField = null;
		this.$2$ChuteAssetsLitField = null;
		BingoBlockParty.Common.BallGame.Pieces.Chute.call(this, gameBoard, chutesPlane, chuteIndex, chuteLocation);
		this.set_blinking(false);
		this.set_ticking(0);
		this.set_chuteAssets([]);
		this.set_chuteAssetsLit([]);
	};
	$BingoBlockParty_Client_BallGame_Pieces_ClientChute.__typeName = 'BingoBlockParty.Client.BallGame.Pieces.ClientChute';
	global.BingoBlockParty.Client.BallGame.Pieces.ClientChute = $BingoBlockParty_Client_BallGame_Pieces_ClientChute;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Pieces.ClientPeg
	var $BingoBlockParty_Client_BallGame_Pieces_ClientPeg = function(gameBoard, x, y, pegType) {
		this.$2$TickingField = 0;
		this.$2$TockingField = 0;
		this.$2$BlinkingField = false;
		this.$2$DrawTextField = false;
		BingoBlockParty.Common.BallGame.Pieces.Peg.call(this, gameBoard, x, y, pegType);
	};
	$BingoBlockParty_Client_BallGame_Pieces_ClientPeg.__typeName = 'BingoBlockParty.Client.BallGame.Pieces.ClientPeg';
	global.BingoBlockParty.Client.BallGame.Pieces.ClientPeg = $BingoBlockParty_Client_BallGame_Pieces_ClientPeg;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Planes.ClientBackgroundPlane
	var $BingoBlockParty_Client_BallGame_Planes_ClientBackgroundPlane = function(gameBoard) {
		this.$1$GameBoardField = null;
		this.$1$PlaneField = null;
		this.set_gameBoard(gameBoard);
	};
	$BingoBlockParty_Client_BallGame_Planes_ClientBackgroundPlane.__typeName = 'BingoBlockParty.Client.BallGame.Planes.ClientBackgroundPlane';
	global.BingoBlockParty.Client.BallGame.Planes.ClientBackgroundPlane = $BingoBlockParty_Client_BallGame_Planes_ClientBackgroundPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Planes.ClientCannonBallPlane
	var $BingoBlockParty_Client_BallGame_Planes_ClientCannonBallPlane = function(gameBoard) {
		this.$2$PlaneField = null;
		BingoBlockParty.Common.BallGame.Planes.CannonBallPlane.call(this, gameBoard);
	};
	$BingoBlockParty_Client_BallGame_Planes_ClientCannonBallPlane.__typeName = 'BingoBlockParty.Client.BallGame.Planes.ClientCannonBallPlane';
	global.BingoBlockParty.Client.BallGame.Planes.ClientCannonBallPlane = $BingoBlockParty_Client_BallGame_Planes_ClientCannonBallPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Planes.ClientCannonPlane
	var $BingoBlockParty_Client_BallGame_Planes_ClientCannonPlane = function(gameBoard) {
		this.$2$PlaneField = null;
		BingoBlockParty.Common.BallGame.Planes.CannonPlane.call(this, gameBoard);
	};
	$BingoBlockParty_Client_BallGame_Planes_ClientCannonPlane.__typeName = 'BingoBlockParty.Client.BallGame.Planes.ClientCannonPlane';
	global.BingoBlockParty.Client.BallGame.Planes.ClientCannonPlane = $BingoBlockParty_Client_BallGame_Planes_ClientCannonPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Planes.ClientChutesPlane
	var $BingoBlockParty_Client_BallGame_Planes_ClientChutesPlane = function(gameBoard) {
		this.$2$BackPlaneField = null;
		this.$2$FrontPlaneField = null;
		this.$2$BumpersAssetField = null;
		this.$2$BucketsAssetField = null;
		BingoBlockParty.Common.BallGame.Planes.ChutesPlane.call(this, gameBoard);
	};
	$BingoBlockParty_Client_BallGame_Planes_ClientChutesPlane.__typeName = 'BingoBlockParty.Client.BallGame.Planes.ClientChutesPlane';
	global.BingoBlockParty.Client.BallGame.Planes.ClientChutesPlane = $BingoBlockParty_Client_BallGame_Planes_ClientChutesPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Planes.ClientOverlaysPlane
	var $BingoBlockParty_Client_BallGame_Planes_ClientOverlaysPlane = function(gameBoard) {
		this.$1$PlaneField = null;
		this.$1$JackpotOverlayPositionField = null;
		this.$1$PullBoxOverlayPositionField = null;
		this.$1$CoinBoxOverlayPositionField = null;
		this.$1$JackpotOverlayField = null;
		this.$1$CoinBoxOverlayField = null;
		this.$1$PullBoxOverlayField = null;
		this.$1$GameBoardField = null;
		this.set_gameBoard(gameBoard);
		this.set_jackpotOverlayPosition(new Engine.Interfaces.Point(ss.Int32.div($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasWidth(), 2), 0));
		this.set_coinBoxOverlayPosition(new Engine.Interfaces.Point(70, 0));
		this.set_pullBoxOverlayPosition(new Engine.Interfaces.Point(351, 0));
	};
	$BingoBlockParty_Client_BallGame_Planes_ClientOverlaysPlane.__typeName = 'BingoBlockParty.Client.BallGame.Planes.ClientOverlaysPlane';
	global.BingoBlockParty.Client.BallGame.Planes.ClientOverlaysPlane = $BingoBlockParty_Client_BallGame_Planes_ClientOverlaysPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.Planes.ClientPegsPlane
	var $BingoBlockParty_Client_BallGame_Planes_ClientPegsPlane = function(gameBoard) {
		this.$2$PlaneField = null;
		BingoBlockParty.Common.BallGame.Planes.PegsPlane.call(this, gameBoard);
	};
	$BingoBlockParty_Client_BallGame_Planes_ClientPegsPlane.__typeName = 'BingoBlockParty.Client.BallGame.Planes.ClientPegsPlane';
	global.BingoBlockParty.Client.BallGame.Planes.ClientPegsPlane = $BingoBlockParty_Client_BallGame_Planes_ClientPegsPlane;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.Utils.ClientSwitcher
	var $BingoBlockParty_Client_Utils_ClientSwitcher = function() {
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.__typeName = 'BingoBlockParty.Client.Utils.ClientSwitcher';
	$BingoBlockParty_Client_Utils_ClientSwitcher.client = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_ClientGameBoard);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$1 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_ClientGameModel);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$4 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_Pieces_ClientCannonBall);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$2 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_ClientPegPhysicsManager);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$8 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_Planes_ClientCannonPlane);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$9 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_Planes_ClientChutesPlane);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$a = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_Planes_ClientPegsPlane);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$7 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_Planes_ClientCannonBallPlane);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$3 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_Pieces_ClientCannon);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$5 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_Pieces_ClientChute);
	};
	$BingoBlockParty_Client_Utils_ClientSwitcher.client$6 = function(obj) {
		return ss.cast(obj, $BingoBlockParty_Client_BallGame_Pieces_ClientPeg);
	};
	global.BingoBlockParty.Client.Utils.ClientSwitcher = $BingoBlockParty_Client_Utils_ClientSwitcher;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.Utils.TouchManager
	var $BingoBlockParty_Client_Utils_TouchManager = function(clientGameBoard) {
		this.$clientGameBoard = null;
		this.$1$touchRectsField = null;
		this.$clientGameBoard = clientGameBoard;
		this.set_touchRects([]);
	};
	$BingoBlockParty_Client_Utils_TouchManager.__typeName = 'BingoBlockParty.Client.Utils.TouchManager';
	global.BingoBlockParty.Client.Utils.TouchManager = $BingoBlockParty_Client_Utils_TouchManager;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.Utils.TouchRect
	var $BingoBlockParty_Client_Utils_TouchRect = function(x, y, width, height, eventToTrigger) {
		this.$1$XField = 0;
		this.$1$YField = 0;
		this.$1$WidthField = 0;
		this.$1$HeightField = 0;
		this.$1$EventToTriggerField = null;
		this.set_x(x);
		this.set_y(y);
		this.set_width(width);
		this.set_height(height);
		this.set_eventToTrigger(eventToTrigger);
	};
	$BingoBlockParty_Client_Utils_TouchRect.__typeName = 'BingoBlockParty.Client.Utils.TouchRect';
	global.BingoBlockParty.Client.Utils.TouchRect = $BingoBlockParty_Client_Utils_TouchRect;
	ss.initClass($BingoBlockParty_Client_Game, {
		get_client: function() {
			return this.$1$ClientField;
		},
		set_client: function(value) {
			this.$1$ClientField = value;
		},
		init: function(renderer) {
			var boardWidth = 430;
			var boardHeight = 557;
			this.set_gameBoard(new $BingoBlockParty_Client_BallGame_ClientGameBoard(this, boardWidth, ss.Int32.trunc(boardHeight * 40.2), renderer, boardWidth, boardHeight));
			this.get_gameBoard().init();
		},
		loadImages: function(renderer) {
			renderer.createImage('board', 'images/gameBoards/board1.png', null);
			renderer.createImage('walkway.red', 'images/walkway/walkway-red.png', null);
			renderer.createImage('peg.white', 'images/pegs/white_peg.png', new Engine.Interfaces.Point(13, 9));
			renderer.createImage('peg.hit.white', 'images/pegs/white_peg_lit_overlay.png', null);
			renderer.createImage('peg.blue', 'images/pegs/blue_peg.png', new Engine.Interfaces.Point(13, 9));
			renderer.createImage('peg.hit.blue', 'images/pegs/blue_peg_lit_overlay.png', null);
			renderer.createImage('peg.green', 'images/pegs/green_peg.png', new Engine.Interfaces.Point(13, 9));
			renderer.createImage('peg.hit.green', 'images/pegs/green_peg_lit_overlay.png', null);
			renderer.createImage('peg.purple', 'images/pegs/purple_peg.png', new Engine.Interfaces.Point(13, 9));
			renderer.createImage('peg.hit.purple', 'images/pegs/purple_peg_lit_overlay.png', null);
			renderer.createImage('peg.red', 'images/pegs/red_peg.png', new Engine.Interfaces.Point(13, 9));
			renderer.createImage('peg.hit.red', 'images/pegs/red_peg_lit_overlay.png', null);
			renderer.createImage('peg.yellow', 'images/pegs/yellow_peg.png', new Engine.Interfaces.Point(16, 8));
			renderer.createImage('peg.hit.yellow', 'images/pegs/yellow_peg_lit_overlay.png', null);
			renderer.createImage('cannon', 'images/cannons/shooter.png', null);
			renderer.createImage('cannonBall', 'images/cannonBalls/ball_inner.png', null);
			renderer.createImage('cannonBallShine', 'images/cannonBalls/ball_outer.png', null);
			renderer.createImage('chuteBuckets', 'images/chutes/buckets.png', null);
			renderer.createImage('chuteBumpers', 'images/chutes/bumpers.png', null);
			renderer.createImage('chuteGreenBucket', 'images/chutes/green_bucket.png', null);
			renderer.createImage('chutePurpleBucket', 'images/chutes/purple_bucket.png', null);
			renderer.createImage('chuteRedBucket', 'images/chutes/red_bucket.png', null);
			renderer.createImage('chuteYellowBucket', 'images/chutes/yellow_bucket.png', null);
			renderer.createImage('chuteBlueBucket', 'images/chutes/blue_bucket.png', null);
			renderer.createImage('chuteGreenBucketLit', 'images/chutes/green_bucket_lit.png', null);
			renderer.createImage('chutePurpleBucketLit', 'images/chutes/purple_bucket_lit.png', null);
			renderer.createImage('chuteRedBucketLit', 'images/chutes/red_bucket_lit.png', null);
			renderer.createImage('chuteYellowBucketLit', 'images/chutes/yellow_bucket_lit.png', null);
			renderer.createImage('chuteBlueBucketLit', 'images/chutes/blue_bucket_lit.png', null);
			renderer.createImage('jackpotOverlay', 'images/overlays/jackpot_shooter_overlay.png', null);
			renderer.createImage('coinBoxOverlay', 'images/overlays/coin_box.png', null);
			renderer.createImage('pullBoxOverlay', 'images/overlays/pulls_button.png', null);
			renderer.createImage('female.blonde.front', 'images/people/Female1_FrontDesign.png', null);
			renderer.createImage('male.hat.front', 'images/people/male2_FrontDesign.png', null);
		},
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		touchEvent: function(touchType, x, y) {
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_touchManager().processTouchEvent(touchType, x, y);
		},
		tick: function(elapsedGameTime) {
			this.get_gameBoard().tick(elapsedGameTime);
		},
		draw: function(elapsedGameTime) {
			this.get_gameBoard().render(elapsedGameTime);
		}
	}, null, [Client.Interfaces.IGame]);
	ss.initClass($BingoBlockParty_Client_BallGame_ClientGameBoard, {
		get_renderer: function() {
			return this.$2$RendererField;
		},
		set_renderer: function(value) {
			this.$2$RendererField = value;
		},
		get_backgroundPlane: function() {
			return this.$2$BackgroundPlaneField;
		},
		set_backgroundPlane: function(value) {
			this.$2$BackgroundPlaneField = value;
		},
		createObjects: function() {
			this.set_backgroundPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientBackgroundPlane(this));
			this.set_gameModel(new $BingoBlockParty_Client_BallGame_ClientGameModel(this.boardWidth, this.boardHeight, this.$canvasWidth, this.$canvasHeight));
			this.set_pegsPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientPegsPlane(this));
			this.set_cannonBallPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientCannonBallPlane(this));
			this.set_cannonPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientCannonPlane(this));
			this.set_chutesPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientChutesPlane(this));
			this.set_pegPhysicsManager(new $BingoBlockParty_Client_BallGame_ClientPegPhysicsManager(this, false));
			this.set_overlaysPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientOverlaysPlane(this));
			this.set_viewManager(new $BingoBlockParty_Client_BallGame_ViewManager(this));
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameModel()).set_touchManager(new $BingoBlockParty_Client_Utils_TouchManager(this));
		},
		get_viewManager: function() {
			return this.$2$ViewManagerField;
		},
		set_viewManager: function(value) {
			this.$2$ViewManagerField = value;
		},
		get_overlaysPlane: function() {
			return this.$2$OverlaysPlaneField;
		},
		set_overlaysPlane: function(value) {
			this.$2$OverlaysPlaneField = value;
		},
		init: function() {
			this.createObjects();
			BingoBlockParty.Common.BallGame.GameBoard.prototype.init.call(this);
			this.get_backgroundPlane().init();
			this.get_overlaysPlane().init();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameModel()).get_touchManager().init();
			this.get_renderer().addLayer(this.get_backgroundPlane().get_plane());
			this.get_renderer().addLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$9(this.get_chutesPlane()).get_backPlane());
			this.get_renderer().addLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$7(this.get_cannonBallPlane()).get_plane());
			this.get_renderer().addLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$8(this.get_cannonPlane()).get_plane());
			this.get_renderer().addLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$9(this.get_chutesPlane()).get_frontPlane());
			this.get_renderer().addLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$a(this.get_pegsPlane()).get_plane());
			this.get_renderer().addLayer(this.get_overlaysPlane().get_plane());
			if ($BingoBlockParty_Client_Utils_ClientSwitcher.client$2(this.get_pegPhysicsManager()).get_shouldDraw()) {
				//            Renderer.AddLayer(PegPhysicsManager.Plane);
			}
			//ballGameBoard.appendChild(this.gameModel.clickManager.element);
		},
		roundOver: function() {
			BingoBlockParty.Common.BallGame.GameBoard.prototype.roundOver.call(this);
			this.get_pegPhysicsManager().roundOver(0);
			this.get_backgroundPlane().roundOver(0);
			this.get_cannonPlane().roundOver(0);
			this.get_chutesPlane().roundOver(0);
			this.get_pegsPlane().roundOver(0);
			this.get_overlaysPlane().roundOver(0);
			this.get_cannonBallPlane().roundOver(0);
			this.$game.get_client().timeout(ss.mkdel(this, function() {
				this.get_pegPhysicsManager().roundOver(1);
				this.get_backgroundPlane().roundOver(1);
				this.get_cannonPlane().roundOver(1);
				this.get_chutesPlane().roundOver(1);
				this.get_pegsPlane().roundOver(1);
				this.get_overlaysPlane().roundOver(1);
				this.get_cannonBallPlane().roundOver(1);
				this.get_viewManager().set(0, 0);
				if (!ss.staticEquals(this.onRoundOver, null)) {
					this.onRoundOver();
				}
			}), 2500);
		},
		tick: function(elapsedGameTime) {
			BingoBlockParty.Common.BallGame.GameBoard.prototype.tick.call(this, elapsedGameTime);
			this.get_backgroundPlane().tick();
			this.get_overlaysPlane().tick();
		},
		render: function(elapsedGameTime) {
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$2(this.get_pegPhysicsManager()).render();
			this.get_backgroundPlane().render();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$8(this.get_cannonPlane()).render();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$9(this.get_chutesPlane()).render();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$a(this.get_pegsPlane()).render();
			this.get_overlaysPlane().render();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$7(this.get_cannonBallPlane()).render();
		}
	}, BingoBlockParty.Common.BallGame.GameBoard);
	ss.initClass($BingoBlockParty_Client_BallGame_ClientGameModel, {
		get_canvasWidth: function() {
			return this.$2$CanvasWidthField;
		},
		set_canvasWidth: function(value) {
			this.$2$CanvasWidthField = value;
		},
		get_canvasHeight: function() {
			return this.$2$CanvasHeightField;
		},
		set_canvasHeight: function(value) {
			this.$2$CanvasHeightField = value;
		},
		get_touchManager: function() {
			return this.$2$TouchManagerField;
		},
		set_touchManager: function(value) {
			this.$2$TouchManagerField = value;
		}
	}, BingoBlockParty.Common.BallGame.GameModel);
	ss.initClass($BingoBlockParty_Client_BallGame_ClientPegPhysicsManager, {
		get_shouldDraw: function() {
			return this.$2$ShouldDrawField;
		},
		set_shouldDraw: function(value) {
			this.$2$ShouldDrawField = value;
		},
		render: function() {
		}
	}, BingoBlockParty.Common.BallGame.PegPhysicsManager);
	ss.initClass($BingoBlockParty_Client_BallGame_ViewManager, {
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
		get_viewWidth: function() {
			return this.$1$ViewWidthField;
		},
		set_viewWidth: function(value) {
			this.$1$ViewWidthField = value;
		},
		get_viewHeight: function() {
			return this.$1$ViewHeightField;
		},
		set_viewHeight: function(value) {
			this.$1$ViewHeightField = value;
		},
		get_paddingBox: function() {
			return this.$1$PaddingBoxField;
		},
		set_paddingBox: function(value) {
			this.$1$PaddingBoxField = value;
		},
		set: function(x, y) {
			this.set_x(x);
			this.set_y(y);
		},
		translateContext: function(layer) {
			layer.translate(-this.get_x(), -this.get_y());
		},
		$median: function(xs) {
			xs.sort(function(a, b) {
				return a - b;
			});
			return xs[ss.Int32.div(xs.length, 2)];
		},
		center: function(x, y) {
			var proposedX = this.$median([x - ss.Int32.div(this.get_viewWidth(), 2), x - this.get_paddingBox().get_width(), x + this.get_paddingBox().get_width() - this.get_viewWidth()]);
			var proposedY = this.$median([y - ss.Int32.div(this.get_viewHeight(), 2), y - this.get_paddingBox().get_height(), y + this.get_paddingBox().get_height() - this.get_viewHeight()]);
			this.set_x(this.$median([proposedX, 0, this.get_gameBoard().get_gameModel().get_boardWidth() - this.get_viewWidth()]));
			this.set_y(this.$median([proposedY, 0, this.get_gameBoard().get_gameModel().get_boardHeight() - this.get_viewHeight()]));
		}
	});
	ss.initClass($BingoBlockParty_Client_BallGame_Pieces_ClientCannon, {
		init: function() {
			BingoBlockParty.Common.BallGame.Pieces.Cannon.prototype.init.call(this);
			this.set_cannonAsset($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('cannon'));
			var cannonButton = this.get_gameBoard().get_gameModel().get_cannonLocation();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_touchManager().pushClickRect(new $BingoBlockParty_Client_Utils_TouchRect(cannonButton.get_x() - this.get_cannonAsset().get_width() * 2, cannonButton.get_y(), this.get_cannonAsset().get_width() * 4, this.get_cannonAsset().get_height(), ss.mkdel(this, this.shootBall)));
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_touchManager().pushClickRect(new $BingoBlockParty_Client_Utils_TouchRect(0, 0, this.get_gameBoard().get_gameModel().get_boardWidth(), this.get_gameBoard().get_gameModel().get_boardHeight(), ss.mkdel(this, this.rotateClick)));
		},
		get_cannonAsset: function() {
			return this.$2$CannonAssetField;
		},
		set_cannonAsset: function(value) {
			this.$2$CannonAssetField = value;
		},
		rotateClick: function(eventType, touchBox, x, y, collide) {
			switch (eventType) {
				case 0: {
					this.set_movingCannon(false);
					break;
				}
				case 1: {
					this.set_movingCannon(true);
					break;
				}
				case 2: {
					if (this.get_movingCannon()) {
						var angle = ss.Int32.trunc(Math.atan2(y - this.get_gameBoard().get_gameModel().get_cannonLocation().get_y(), x - this.get_gameBoard().get_gameModel().get_cannonLocation().get_x()) * 180 / Math.PI - 90);
						this.rotateCannon(angle);
					}
					break;
				}
			}
			return false;
		},
		shootBall: function(eventType, touchBox, x, y, collide) {
			switch (eventType) {
				case 0: {
					if (collide) {
						this.get_cannonPlane().shootBall();
					}
					break;
				}
				case 1:
				case 2: {
					if (collide) {
						return true;
					}
					break;
				}
			}
			return false;
		},
		render: function(context) {
			var cannonLocation = this.get_gameBoard().get_gameModel().get_cannonLocation();
			var cannonImage = this.get_cannonAsset();
			context.save();
			context.translate(cannonLocation.get_x() - ss.Int32.div(cannonImage.get_width(), 2), cannonLocation.get_y());
			context.drawImage$2(cannonImage, 0, 0, this.get_gameBoard().get_gameModel().get_cannonAngle() * Math.PI / 180, ss.Int32.div(cannonImage.get_width(), 2), 0);
			context.restore();
			//
			//                    if (this.GameBoard.GameModel.showPeople) {
			//
			//                    this.ticking += 2;
			//
			//                    
			//
			//                    context.Save();
			//
			//                    
			//
			//                    var person = assetLoader.getAsset('female.blonde.front');
			//
			//                    
			//
			//                    context.Translate((-this.ticking + (this.GameBoard.GameModel.canvasWidth * 100)) % this.GameBoard.GameModel.canvasWidth, 100);
			//
			//                    
			//
			//                    context.Translate(person.Width / 2, person.Height / 2);
			//
			//                    
			//
			//                    
			//
			//                    if (this.ticking % 20 < 10) {
			//
			//                    context.Rotate(.07);
			//
			//                    context.DrawImage(person.image, -person.Width / 2, -person.Height / 2)
			//
			//                    } else {
			//
			//                    context.Rotate(-.07);
			//
			//                    context.DrawImage(person.image, -person.Width / 2, -person.Height / 2)
			//
			//                    }
			//
			//                    
			//
			//                    context.Restore();
			//
			//                    
			//
			//                    
			//
			//                    context.Save();
			//
			//                    
			//
			//                    var person = assetLoader.getAsset('male.hat.front');
			//
			//                    
			//
			//                    context.Translate((this.ticking + (this.GameBoard.GameModel.canvasWidth * 100)) % this.GameBoard.GameModel.canvasWidth, 200);
			//
			//                    
			//
			//                    context.Translate(person.Width / 2, person.Height / 2);
			//
			//                    
			//
			//                    
			//
			//                    if (this.ticking % 20 < 10) {
			//
			//                    context.Rotate(.07);
			//
			//                    context.scale(-1, 1);
			//
			//                    context.DrawImage(person.image, -person.Width / 2, -person.Height / 2)
			//
			//                    } else {
			//
			//                    context.Rotate(-.07);
			//
			//                    context.scale(-1, 1);
			//
			//                    context.DrawImage(person.image, -person.Width / 2, -person.Height / 2)
			//
			//                    }
			//
			//                    
			//
			//                    context.Restore();
			//
			//                    }
		}
	}, BingoBlockParty.Common.BallGame.Pieces.Cannon);
	ss.initClass($BingoBlockParty_Client_BallGame_Pieces_ClientCannonBall, {
		tick: function() {
			BingoBlockParty.Common.BallGame.Pieces.CannonBall.prototype.tick.call(this);
			var position = this.get_body().get_position();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().center(ss.Int32.trunc(this.get_gameBoard().get_pegPhysicsManager().meterToPixel(position.get_x())), ss.Int32.trunc(this.get_gameBoard().get_pegPhysicsManager().meterToPixel(position.get_y())));
		},
		render: function(context) {
			if (this.get_ballDead()) {
				return;
			}
			var position = this.get_body().get_position();
			var x = this.get_gameBoard().get_pegPhysicsManager().meterToPixel(position.get_x());
			var y = this.get_gameBoard().get_pegPhysicsManager().meterToPixel(position.get_y());
			var cannonBall = $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('cannonBall');
			var cannonBallShine = $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('cannonBallShine');
			context.save();
			context.translate(ss.Int32.trunc(x), ss.Int32.trunc(y));
			context.translate(ss.Int32.div(-cannonBall.get_width(), 2), ss.Int32.div(-cannonBall.get_height(), 2));
			context.drawImage$2(cannonBall, 0, 0, this.get_body().get_rotation(), ss.Int32.div(cannonBall.get_width(), 2), ss.Int32.div(cannonBall.get_height(), 2));
			context.drawImage(cannonBallShine, 0, 0);
			context.restore();
		}
	}, BingoBlockParty.Common.BallGame.Pieces.CannonBall, [BingoBlockParty.Common.BallGame.ICollider]);
	ss.initClass($BingoBlockParty_Client_BallGame_Pieces_ClientChute, {
		get_ticking: function() {
			return this.$2$TickingField;
		},
		set_ticking: function(value) {
			this.$2$TickingField = value;
		},
		get_blinking: function() {
			return this.$2$BlinkingField;
		},
		set_blinking: function(value) {
			this.$2$BlinkingField = value;
		},
		roundOver: function(state) {
			BingoBlockParty.Common.BallGame.Pieces.Chute.prototype.roundOver.call(this, state);
			switch (state) {
				case 0: {
					if (this.get_triggered()) {
						this.set_blinking(true);
					}
					break;
				}
				case 1: {
					this.set_blinking(false);
					break;
				}
			}
		},
		get_chuteAssets: function() {
			return this.$2$ChuteAssetsField;
		},
		set_chuteAssets: function(value) {
			this.$2$ChuteAssetsField = value;
		},
		get_chuteAssetsLit: function() {
			return this.$2$ChuteAssetsLitField;
		},
		set_chuteAssetsLit: function(value) {
			this.$2$ChuteAssetsLitField = value;
		},
		init: function() {
			BingoBlockParty.Common.BallGame.Pieces.Chute.prototype.init.call(this);
			ss.add(this.get_chuteAssets(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteBlueBucket'));
			ss.add(this.get_chuteAssets(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteGreenBucket'));
			ss.add(this.get_chuteAssets(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteYellowBucket'));
			ss.add(this.get_chuteAssets(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteRedBucket'));
			ss.add(this.get_chuteAssets(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chutePurpleBucket'));
			ss.add(this.get_chuteAssetsLit(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteBlueBucketLit'));
			ss.add(this.get_chuteAssetsLit(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteGreenBucketLit'));
			ss.add(this.get_chuteAssetsLit(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteYellowBucketLit'));
			ss.add(this.get_chuteAssetsLit(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteRedBucketLit'));
			ss.add(this.get_chuteAssetsLit(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chutePurpleBucketLit'));
		},
		render: function(context) {
			this.set_ticking(this.get_ticking() + 1);
			var chuteLocation = this.get_chuteLocation();
			var lit;
			if (this.get_blinking()) {
				lit = !(this.get_ticking() % 10 < 4);
			}
			else {
				lit = this.get_ticking() % 50 < (this.get_chuteIndex() + 1) * 10 && this.get_ticking() % 50 > this.get_chuteIndex() * 10;
				for (var i = 0; i < this.get_chutesPlane().get_chutes().length; i++) {
					var chute = this.get_chutesPlane().get_chutes()[i];
					if ($BingoBlockParty_Client_Utils_ClientSwitcher.client$5(chute).get_blinking()) {
						lit = false;
						break;
					}
				}
			}
			var chuteImage = (lit ? this.get_chuteAssetsLit() : this.get_chuteAssets())[this.get_chuteIndex()];
			context.save();
			context.translate(chuteLocation.get_x(), chuteLocation.get_y());
			if (lit) {
				var offX = ss.Int32.div(this.get_chuteAssetsLit()[this.get_chuteIndex()].get_width() - this.get_chuteAssets()[this.get_chuteIndex()].get_width(), 2);
				var offY = ss.Int32.div(this.get_chuteAssetsLit()[this.get_chuteIndex()].get_height() - this.get_chuteAssets()[this.get_chuteIndex()].get_height(), 2);
				context.translate(-offX, -offY);
			}
			context.drawImage(chuteImage, 0, 0);
			context.restore();
			context.save();
			context.translate(chuteLocation.get_x(), chuteLocation.get_y());
			context.translate(ss.Int32.div(this.get_chuteAssets()[this.get_chuteIndex()].get_width(), 2), ss.Int32.div(this.get_chuteAssets()[this.get_chuteIndex()].get_height(), 2));
			var fontSize = 25;
			//context.FillStyle = "white";
			//context.Font = "bold " + fontSize + "px Arial";
			//context.ShadowColor = "#72C9FC";
			//context.ShadowOffsetX = 0;
			//context.ShadowOffsetY = 0;
			//context.ShadowBlur = 5;
			var bonusText = this.get_chuteNumber().toString();
			var size = context.measureString(bonusText);
			context.drawString(bonusText, ss.Int32.div(ss.Int32.trunc(-size), 2), 8);
			context.restore();
		}
	}, BingoBlockParty.Common.BallGame.Pieces.Chute, [BingoBlockParty.Common.BallGame.ICollider]);
	ss.initClass($BingoBlockParty_Client_BallGame_Pieces_ClientPeg, {
		get_ticking: function() {
			return this.$2$TickingField;
		},
		set_ticking: function(value) {
			this.$2$TickingField = value;
		},
		get_tocking: function() {
			return this.$2$TockingField;
		},
		set_tocking: function(value) {
			this.$2$TockingField = value;
		},
		get_blinking: function() {
			return this.$2$BlinkingField;
		},
		set_blinking: function(value) {
			this.$2$BlinkingField = value;
		},
		get_drawText: function() {
			return this.$2$DrawTextField;
		},
		set_drawText: function(value) {
			this.$2$DrawTextField = value;
		},
		init: function() {
			BingoBlockParty.Common.BallGame.Pieces.Peg.prototype.init.call(this);
		},
		tick: function() {
			BingoBlockParty.Common.BallGame.Pieces.Peg.prototype.tick.call(this);
		},
		roundOver: function(state) {
			BingoBlockParty.Common.BallGame.Pieces.Peg.prototype.roundOver.call(this, state);
			if (this.get_hit()) {
				switch (state) {
					case 0: {
						this.set_blinking(true);
						break;
					}
				}
			}
		},
		trigger: function() {
			if (!this.get_hit()) {
				this.set_drawText(true);
				this.set_ticking(50);
			}
			BingoBlockParty.Common.BallGame.Pieces.Peg.prototype.trigger.call(this);
		},
		render: function(context) {
			this.set_tocking(this.get_tocking() + 1);
			context.save();
			context.translate(this.get_x(), this.get_y());
			var image;
			var pegAssetName;
			if (this.get_blinking()) {
				if (this.get_tocking() % 20 < 10) {
					pegAssetName = 'peg.hit';
				}
				else {
					pegAssetName = 'peg';
				}
			}
			else if (this.get_hit()) {
				pegAssetName = 'peg.hit';
			}
			else {
				pegAssetName = 'peg';
			}
			pegAssetName += '.' + this.get_pegName();
			image = $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage(pegAssetName);
			context.translate(-image.get_center().get_x(), -image.get_center().get_y());
			context.drawImage(image, 0, 0);
			context.restore();
		},
		renderText: function(context) {
			if (this.get_drawText()) {
				this.set_ticking(this.get_ticking() - 1);
				var posY = ss.Int32.div(this.get_ticking(), 4);
				context.save();
				context.translate(this.get_x(), this.get_y());
				context.translate(0, -25 + posY);
				var fontSize = 17;
				//
				//                context.FillStyle = "white";
				//
				//                context.Font = "bold " + fontSize + "px Arial";
				//
				//                
				//
				//                
				//
				//                context.ShadowColor = "#72C9FC";
				//
				//                context.ShadowOffsetX = 0;
				//
				//                context.ShadowOffsetY = 0;
				//
				//                context.ShadowBlur = 5;
				var bonusText = '+$' + this.get_bonus().toString();
				var size = context.measureString(bonusText);
				context.drawString(bonusText, ss.Int32.div(ss.Int32.trunc(-size), 2), ss.Int32.div(-fontSize, 2));
				context.restore();
				if (this.get_ticking() === 0) {
					this.set_drawText(false);
				}
			}
		}
	}, BingoBlockParty.Common.BallGame.Pieces.Peg, [BingoBlockParty.Common.BallGame.ICollider]);
	ss.initClass($BingoBlockParty_Client_BallGame_Planes_ClientBackgroundPlane, {
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		get_plane: function() {
			return this.$1$PlaneField;
		},
		set_plane: function(value) {
			this.$1$PlaneField = value;
		},
		init: function() {
			this.set_plane(this.get_gameBoard().get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasWidth(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasHeight()));
		},
		roundOver: function(state) {
		},
		tick: function() {
		},
		render: function() {
			var context = this.get_plane();
			context.save();
			this.get_gameBoard().get_viewManager().translateContext(context);
			context.drawImage$1(this.get_gameBoard().get_renderer().getImage('board'), 0, 0, this.get_gameBoard().get_gameModel().get_boardWidth(), this.get_gameBoard().get_gameModel().get_boardHeight());
			context.restore();
		}
	}, null, [BingoBlockParty.Common.BallGame.Models.IPlane]);
	ss.initClass($BingoBlockParty_Client_BallGame_Planes_ClientCannonBallPlane, {
		get_plane: function() {
			return this.$2$PlaneField;
		},
		set_plane: function(value) {
			this.$2$PlaneField = value;
		},
		init: function() {
			BingoBlockParty.Common.BallGame.Planes.CannonBallPlane.prototype.init.call(this);
			this.set_plane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasWidth(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasHeight()));
		},
		createCannonBall: function(x, y, angle) {
			return new $BingoBlockParty_Client_BallGame_Pieces_ClientCannonBall(this.get_gameBoard(), x, y, angle);
		},
		roundOver: function(state) {
			BingoBlockParty.Common.BallGame.Planes.CannonBallPlane.prototype.roundOver.call(this, state);
			if (state === 1) {
				this.get_plane().clear();
			}
		},
		render: function() {
			if (ss.isValue(this.get_cannonBall())) {
				this.get_plane().clear();
				var context = this.get_plane();
				context.save();
				$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().translateContext(context);
				context.save();
				$BingoBlockParty_Client_Utils_ClientSwitcher.client$4(this.get_cannonBall()).render(context);
				context.restore();
				context.restore();
			}
		}
	}, BingoBlockParty.Common.BallGame.Planes.CannonBallPlane, [BingoBlockParty.Common.BallGame.Models.IPlane]);
	ss.initClass($BingoBlockParty_Client_BallGame_Planes_ClientCannonPlane, {
		get_plane: function() {
			return this.$2$PlaneField;
		},
		set_plane: function(value) {
			this.$2$PlaneField = value;
		},
		init: function() {
			BingoBlockParty.Common.BallGame.Planes.CannonPlane.prototype.init.call(this);
			this.set_plane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasWidth(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasHeight()));
		},
		createCannon: function(cannonPlane) {
			return new $BingoBlockParty_Client_BallGame_Pieces_ClientCannon(this.get_gameBoard(), cannonPlane);
		},
		render: function() {
			this.get_plane().clear();
			var context = this.get_plane();
			context.save();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().translateContext(context);
			context.save();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$3(this.get_cannon()).render(context);
			context.restore();
			context.restore();
		}
	}, BingoBlockParty.Common.BallGame.Planes.CannonPlane, [BingoBlockParty.Common.BallGame.Models.IPlane]);
	ss.initClass($BingoBlockParty_Client_BallGame_Planes_ClientChutesPlane, {
		get_backPlane: function() {
			return this.$2$BackPlaneField;
		},
		set_backPlane: function(value) {
			this.$2$BackPlaneField = value;
		},
		get_frontPlane: function() {
			return this.$2$FrontPlaneField;
		},
		set_frontPlane: function(value) {
			this.$2$FrontPlaneField = value;
		},
		get_bumpersAsset: function() {
			return this.$2$BumpersAssetField;
		},
		set_bumpersAsset: function(value) {
			this.$2$BumpersAssetField = value;
		},
		get_bucketsAsset: function() {
			return this.$2$BucketsAssetField;
		},
		set_bucketsAsset: function(value) {
			this.$2$BucketsAssetField = value;
		},
		createChute: function(chutesPlane, chuteNumber, chuteLocation) {
			return new $BingoBlockParty_Client_BallGame_Pieces_ClientChute(this.get_gameBoard(), chutesPlane, chuteNumber, chuteLocation);
		},
		init: function() {
			BingoBlockParty.Common.BallGame.Planes.ChutesPlane.prototype.init.call(this);
			this.set_backPlane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasWidth(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasHeight()));
			this.set_frontPlane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasWidth(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasHeight()));
			this.set_bumpersAsset($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteBumpers'));
			this.set_bucketsAsset($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteBuckets'));
		},
		render: function() {
			this.get_backPlane().clear();
			this.get_frontPlane().clear();
			var backContext = this.get_backPlane();
			var frontContext = this.get_frontPlane();
			backContext.save();
			frontContext.save();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().translateContext(backContext);
			$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().translateContext(frontContext);
			backContext.save();
			backContext.translate(0, this.get_gameBoard().get_gameModel().get_boardHeight() - this.get_bumpersAsset().get_height());
			backContext.drawImage(this.get_bumpersAsset(), 0, 0);
			backContext.restore();
			backContext.save();
			backContext.translate(18, this.get_gameBoard().get_gameModel().get_boardHeight() - this.get_bucketsAsset().get_height());
			backContext.drawImage(this.get_bucketsAsset(), 0, 0);
			backContext.restore();
			var $t1 = this.get_chutes();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var chute = $t1[$t2];
				$BingoBlockParty_Client_Utils_ClientSwitcher.client$5(chute).render(frontContext);
			}
			backContext.restore();
			frontContext.restore();
		}
	}, BingoBlockParty.Common.BallGame.Planes.ChutesPlane, [BingoBlockParty.Common.BallGame.Models.IPlane]);
	ss.initClass($BingoBlockParty_Client_BallGame_Planes_ClientOverlaysPlane, {
		get_plane: function() {
			return this.$1$PlaneField;
		},
		set_plane: function(value) {
			this.$1$PlaneField = value;
		},
		get_jackpotOverlayPosition: function() {
			return this.$1$JackpotOverlayPositionField;
		},
		set_jackpotOverlayPosition: function(value) {
			this.$1$JackpotOverlayPositionField = value;
		},
		get_pullBoxOverlayPosition: function() {
			return this.$1$PullBoxOverlayPositionField;
		},
		set_pullBoxOverlayPosition: function(value) {
			this.$1$PullBoxOverlayPositionField = value;
		},
		get_coinBoxOverlayPosition: function() {
			return this.$1$CoinBoxOverlayPositionField;
		},
		set_coinBoxOverlayPosition: function(value) {
			this.$1$CoinBoxOverlayPositionField = value;
		},
		get_jackpotOverlay: function() {
			return this.$1$JackpotOverlayField;
		},
		set_jackpotOverlay: function(value) {
			this.$1$JackpotOverlayField = value;
		},
		get_coinBoxOverlay: function() {
			return this.$1$CoinBoxOverlayField;
		},
		set_coinBoxOverlay: function(value) {
			this.$1$CoinBoxOverlayField = value;
		},
		get_pullBoxOverlay: function() {
			return this.$1$PullBoxOverlayField;
		},
		set_pullBoxOverlay: function(value) {
			this.$1$PullBoxOverlayField = value;
		},
		get_gameBoard: function() {
			return this.$1$GameBoardField;
		},
		set_gameBoard: function(value) {
			this.$1$GameBoardField = value;
		},
		init: function() {
			this.set_plane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasWidth(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasHeight()));
			this.set_jackpotOverlay($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('jackpotOverlay'));
			this.set_coinBoxOverlay($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('coinBoxOverlay'));
			this.set_pullBoxOverlay($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('pullBoxOverlay'));
		},
		roundOver: function(state) {
			switch (state) {
				case 1: {
					var $t1 = this.get_gameBoard().get_gameModel();
					$t1.set_jackpotScore($t1.get_jackpotScore() + this.get_gameBoard().get_gameModel().get_interRoundBonus());
					this.get_gameBoard().get_gameModel().set_interRoundBonus(0);
					break;
				}
			}
		},
		tick: function() {
		},
		render: function() {
			this.get_plane().clear();
			var context = this.get_plane();
			this.$renderJackpot(context);
			this.$renderCoinBox(context);
			this.$renderPullBox(context);
		},
		$renderJackpot: function(context) {
			context.save();
			context.translate(this.get_jackpotOverlayPosition().get_x(), this.get_jackpotOverlayPosition().get_y());
			context.translate(ss.Int32.div(-this.get_jackpotOverlay().get_width(), 2), 0);
			context.drawImage(this.get_jackpotOverlay(), 0, 0);
			context.restore();
			context.save();
			context.translate(this.get_jackpotOverlayPosition().get_x(), this.get_jackpotOverlayPosition().get_y());
			context.translate(0, 46);
			var fontSize = 15;
			//
			//                        context.FillStyle = "white";
			//
			//                        context.Font = "bold " + fontSize + "px Arial";
			var size = context.measureString(this.get_gameBoard().get_gameModel().get_jackpotScore().toString());
			context.drawString(this.get_gameBoard().get_gameModel().get_jackpotScore().toString(), ss.Int32.trunc(-size / 2), ss.Int32.div(-fontSize, 2));
			context.restore();
		},
		$renderCoinBox: function(context) {
			context.save();
			context.translate(this.get_coinBoxOverlayPosition().get_x(), this.get_coinBoxOverlayPosition().get_y());
			context.translate(ss.Int32.div(-this.get_coinBoxOverlay().get_width(), 2), 0);
			context.drawImage(this.get_coinBoxOverlay(), 0, 0);
			context.restore();
			context.save();
			context.translate(this.get_coinBoxOverlayPosition().get_x(), this.get_coinBoxOverlayPosition().get_y());
			context.translate(0, 33);
			var fontSize = 15;
			//
			//                        context.FillStyle = "white";
			//
			//                        context.Font = "bold " + fontSize + "px Arial";
			var size = context.measureString(this.get_gameBoard().get_gameModel().get_numberOfCoins().toString());
			context.drawString(this.get_gameBoard().get_gameModel().get_numberOfCoins().toString(), ss.Int32.div(ss.Int32.trunc(-size), 2), ss.Int32.div(-fontSize, 2));
			context.restore();
		},
		$renderPullBox: function(context) {
			context.save();
			context.translate(this.get_pullBoxOverlayPosition().get_x(), this.get_pullBoxOverlayPosition().get_y());
			context.translate(ss.Int32.div(-this.get_pullBoxOverlay().get_width(), 2), 0);
			context.drawImage(this.get_pullBoxOverlay(), 0, 0);
			context.restore();
			context.save();
			context.translate(this.get_pullBoxOverlayPosition().get_x(), this.get_pullBoxOverlayPosition().get_y());
			context.translate(0, 34);
			var fontSize = 15;
			//
			//                        context.FillStyle = "white";
			//
			//                        context.Font = "bold " + fontSize + "px Arial";
			var size = context.measureString(this.get_gameBoard().get_gameModel().get_numberOfPulls().toString());
			context.drawString(this.get_gameBoard().get_gameModel().get_numberOfPulls().toString(), ss.Int32.div(ss.Int32.trunc(-size), 2), ss.Int32.div(-fontSize, 2));
			context.restore();
		}
	}, null, [BingoBlockParty.Common.BallGame.Models.IPlane]);
	ss.initClass($BingoBlockParty_Client_BallGame_Planes_ClientPegsPlane, {
		get_plane: function() {
			return this.$2$PlaneField;
		},
		set_plane: function(value) {
			this.$2$PlaneField = value;
		},
		createPeg: function(x, y, pegType) {
			return new $BingoBlockParty_Client_BallGame_Pieces_ClientPeg(this.get_gameBoard(), x, y, pegType);
		},
		init: function() {
			BingoBlockParty.Common.BallGame.Planes.PegsPlane.prototype.init.call(this);
			this.set_plane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasWidth(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_canvasHeight()));
		},
		render: function() {
			this.get_plane().clear();
			var context = this.get_plane();
			context.save();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().translateContext(context);
			var $t1 = this.get_pegs();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var peg = $t1[$t2];
				$BingoBlockParty_Client_Utils_ClientSwitcher.client$6(peg).render(context);
			}
			var $t3 = this.get_pegs();
			for (var $t4 = 0; $t4 < $t3.length; $t4++) {
				var peg1 = $t3[$t4];
				$BingoBlockParty_Client_Utils_ClientSwitcher.client$6(peg1).renderText(context);
			}
			context.restore();
		}
	}, BingoBlockParty.Common.BallGame.Planes.PegsPlane, [BingoBlockParty.Common.BallGame.Models.IPlane]);
	ss.initClass($BingoBlockParty_Client_Utils_ClientSwitcher, {});
	ss.initClass($BingoBlockParty_Client_Utils_TouchManager, {
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
		},
		processTouchEvent: function(touchType, x, y) {
			switch (touchType) {
				case 0: {
					var $t1 = this.get_touchRects();
					for (var $t2 = 0; $t2 < $t1.length; $t2++) {
						var clickRect = $t1[$t2];
						clickRect.get_eventToTrigger()(touchType, clickRect, x - clickRect.get_x(), y - clickRect.get_y(), clickRect.collides(x, y));
						//ignore result for mouseup
					}
					break;
				}
				case 1:
				case 2: {
					var $t3 = this.get_touchRects();
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
	});
	ss.initClass($BingoBlockParty_Client_Utils_TouchRect, {
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
		collides: function(x, y) {
			return this.get_x() < x && this.get_x() + this.get_width() > x && this.get_y() < y && this.get_y() + this.get_height() > y;
		}
	});
})();
