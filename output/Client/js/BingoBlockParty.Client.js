(function() {
	'use strict';
	global.BingoBlockParty = global.BingoBlockParty || {};
	global.BingoBlockParty.Client = global.BingoBlockParty.Client || {};
	global.BingoBlockParty.Client.BallGame = global.BingoBlockParty.Client.BallGame || {};
	global.BingoBlockParty.Client.BallGame.Pieces = global.BingoBlockParty.Client.BallGame.Pieces || {};
	global.BingoBlockParty.Client.BallGame.Planes = global.BingoBlockParty.Client.BallGame.Planes || {};
	global.BingoBlockParty.Client.BingoGame = global.BingoBlockParty.Client.BingoGame || {};
	global.BingoBlockParty.Client.InfoArea = global.BingoBlockParty.Client.InfoArea || {};
	global.BingoBlockParty.Client.LobbyArea = global.BingoBlockParty.Client.LobbyArea || {};
	global.BingoBlockParty.Client.PeopleArea = global.BingoBlockParty.Client.PeopleArea || {};
	global.BingoBlockParty.Client.Utils = global.BingoBlockParty.Client.Utils || {};
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.Game
	var $BingoBlockParty_Client_Game = function(client) {
		this.$1$ClientField = null;
		this.$1$GameBoardLayoutField = null;
		this.$1$InfoAreaLayoutField = null;
		this.$1$BingoBoardLayoutField = null;
		this.$1$PeopleAreaLayoutField = null;
		this.$1$LobbyListLayoutField = null;
		this.$1$ScreenManagerField = null;
		this.$1$SocketField = null;
		this.set_client(client);
	};
	$BingoBlockParty_Client_Game.__typeName = 'BingoBlockParty.Client.Game';
	global.BingoBlockParty.Client.Game = $BingoBlockParty_Client_Game;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.Game.Boo
	var $BingoBlockParty_Client_Game$Boo = function() {
		this.$1$FooField = null;
	};
	$BingoBlockParty_Client_Game$Boo.__typeName = 'BingoBlockParty.Client.Game$Boo';
	global.BingoBlockParty.Client.Game$Boo = $BingoBlockParty_Client_Game$Boo;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.ClientGameBoard
	var $BingoBlockParty_Client_BallGame_ClientGameBoard = function(game, boardWidth, boardHeight, renderer, gameBoardLayout) {
		this.$2$RendererField = null;
		this.$2$LayoutField = null;
		this.$game = null;
		this.$2$BackgroundPlaneField = null;
		this.$2$ViewManagerField = null;
		this.$2$OverlaysPlaneField = null;
		BingoBlockParty.Common.BallGame.GameBoard.call(this, boardWidth, boardHeight);
		this.set_renderer(renderer);
		this.set_layout(gameBoardLayout);
		this.$game = game;
	};
	$BingoBlockParty_Client_BallGame_ClientGameBoard.__typeName = 'BingoBlockParty.Client.BallGame.ClientGameBoard';
	global.BingoBlockParty.Client.BallGame.ClientGameBoard = $BingoBlockParty_Client_BallGame_ClientGameBoard;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BallGame.ClientGameModel
	var $BingoBlockParty_Client_BallGame_ClientGameModel = function(boardWidth, boardHeight, gameBoardLayout) {
		this.$2$GameBoardLayoutField = null;
		this.$2$TouchManagerField = null;
		BingoBlockParty.Common.BallGame.GameModel.call(this, boardWidth, boardHeight);
		this.set_gameBoardLayout(gameBoardLayout);
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
		this.set_viewWidth($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(gameBoard.get_gameModel()).get_gameBoardLayout().get_width());
		this.set_viewHeight($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(gameBoard.get_gameModel()).get_gameBoardLayout().get_height());
		this.set_paddingBox(new Engine.Size.$ctor1(100, 100));
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
		this.set_jackpotOverlayPosition(new Engine.Point(ss.Int32.div($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_width(), 2), 0));
		this.set_coinBoxOverlayPosition(new Engine.Point(70, 0));
		this.set_pullBoxOverlayPosition(new Engine.Point(351, 0));
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
	// BingoBlockParty.Client.BingoGame.BingoCard
	var $BingoBlockParty_Client_BingoGame_BingoCard = function(numbers) {
		this.$1$NumbersField = null;
		this.set_numbers(new Array(numbers.length));
		for (var index = 0; index < numbers.length; index++) {
			var number = numbers[index];
			this.get_numbers()[index] = new $BingoBlockParty_Client_BingoGame_BingoCardNumber(number);
		}
	};
	$BingoBlockParty_Client_BingoGame_BingoCard.__typeName = 'BingoBlockParty.Client.BingoGame.BingoCard';
	global.BingoBlockParty.Client.BingoGame.BingoCard = $BingoBlockParty_Client_BingoGame_BingoCard;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BingoGame.BingoCardNumber
	var $BingoBlockParty_Client_BingoGame_BingoCardNumber = function(number) {
		this.$1$NumberField = 0;
		this.$1$CalledField = false;
		this.set_number(number);
		this.set_called(false);
	};
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.__typeName = 'BingoBlockParty.Client.BingoGame.BingoCardNumber';
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.colorToColor = function(color) {
		switch (color) {
			case 0: {
				return $BingoBlockParty_Client_BingoGame_BingoCardNumber.red;
			}
			case 1: {
				return $BingoBlockParty_Client_BingoGame_BingoCardNumber.green;
			}
			case 2: {
				return $BingoBlockParty_Client_BingoGame_BingoCardNumber.blue;
			}
			case 3: {
				return $BingoBlockParty_Client_BingoGame_BingoCardNumber.yellow;
			}
			case 4: {
				return $BingoBlockParty_Client_BingoGame_BingoCardNumber.purple;
			}
			case 5: {
				return $BingoBlockParty_Client_BingoGame_BingoCardNumber.black;
			}
			default: {
				throw new ss.ArgumentOutOfRangeException('color');
			}
		}
	};
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.numberToColor = function(number) {
		if (number >= 1 && number < 7) {
			return 2;
		}
		if (number >= 7 && number < 13) {
			return 1;
		}
		if (number >= 13 && number < 19) {
			return 3;
		}
		if (number >= 19 && number < 25) {
			return 0;
		}
		if (number >= 25 && number < 31) {
			return 4;
		}
		throw new ss.Exception('Bad Number');
	};
	global.BingoBlockParty.Client.BingoGame.BingoCardNumber = $BingoBlockParty_Client_BingoGame_BingoCardNumber;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BingoGame.BingoCardNumberColor
	var $BingoBlockParty_Client_BingoGame_BingoCardNumberColor = function() {
	};
	$BingoBlockParty_Client_BingoGame_BingoCardNumberColor.__typeName = 'BingoBlockParty.Client.BingoGame.BingoCardNumberColor';
	global.BingoBlockParty.Client.BingoGame.BingoCardNumberColor = $BingoBlockParty_Client_BingoGame_BingoCardNumberColor;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BingoGame.BingoLayout
	var $BingoBlockParty_Client_BingoGame_BingoLayout = function(game, width, height, renderer, bingoBoardLayout) {
		this.$_game = null;
		this.$_width = 0;
		this.$_height = 0;
		this.$1$LayoutField = null;
		this.$_renderer = null;
		this.$mainLayer = null;
		this.$1$Purchase2BingoCardPosition2Field = null;
		this.$1$Purchase2BingoCardPosition1Field = null;
		this.$1$Purchase3BingoCardPosition1Field = null;
		this.$1$Purchase3BingoCardPosition2Field = null;
		this.$1$Purchase3BingoCardPosition3Field = null;
		this.$1$Purchase4BingoCardPosition1Field = null;
		this.$1$Purchase4BingoCardPosition2Field = null;
		this.$1$Purchase4BingoCardPosition3Field = null;
		this.$1$Purchase4BingoCardPosition4Field = null;
		this.$1$Purchase1BingoCardPositionField = null;
		this.$1$PurchaseBingoCardField = null;
		this.$1$PurchaseCoinPositionField = null;
		this.$1$PurchaseAmountPositionField = null;
		this.$1$GoldCoinField = null;
		this.$1$Icon400Field = null;
		this.$1$Icon300Field = null;
		this.$1$Icon200Field = null;
		this.$1$Icon100Field = null;
		this.$1$PurchaseBingoCardSelected1Field = false;
		this.$1$PurchaseBingoCardSelected2Field = false;
		this.$1$PurchaseBingoCardSelected3Field = false;
		this.$1$PurchaseBingoCardSelected4Field = false;
		this.$1$PurchaseBingoCardPosition4Field = null;
		this.$1$PurchaseBingoCardPosition3Field = null;
		this.$1$PurchaseBingoCardPosition2Field = null;
		this.$1$PurchaseBingoCardPosition1Field = null;
		this.$1$PurchaseBingoCardOutlineField = null;
		this.$1$PurchaseBingoCardOutlineSelectedField = null;
		this.$1$ChooseYourCardsField = null;
		this.$1$ChooseYourCardsPositionField = null;
		this.$1$LightBoardField = null;
		this.$1$LightBoardPositionField = null;
		this.$1$PreviousCalledBallsPositionField = null;
		this.$1$PreviousCalledBallsField = null;
		this.$1$BingoCard1Field = null;
		this.$1$BingoCard2Field = null;
		this.$1$BingoCard3Field = null;
		this.$1$BingoCard4Field = null;
		this.$1$BingoCardPosition1Field = null;
		this.$1$BingoCardPosition2Field = null;
		this.$1$BingoCardPosition3Field = null;
		this.$1$BingoCardPosition4Field = null;
		this.$1$NumberCallAreaPositionField = null;
		this.$1$BingoCardField = null;
		this.$1$NumberCallAreaField = null;
		this.$1$LeftBoardField = null;
		this.$1$PreviousNumbersCalledField = null;
		this.$1$TouchManagerField = null;
		this.$1$CurrentBingoStateField = 0;
		this.$touchRectangles = [];
		this.$r = new ss.Random();
		this.$_game = game;
		this.$_width = width;
		this.$_height = height;
		this.set_layout(bingoBoardLayout);
		this.$_renderer = renderer;
	};
	$BingoBlockParty_Client_BingoGame_BingoLayout.__typeName = 'BingoBlockParty.Client.BingoGame.BingoLayout';
	global.BingoBlockParty.Client.BingoGame.BingoLayout = $BingoBlockParty_Client_BingoGame_BingoLayout;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.BingoGame.BingoLayoutState
	var $BingoBlockParty_Client_BingoGame_BingoLayoutState = function() {
	};
	$BingoBlockParty_Client_BingoGame_BingoLayoutState.__typeName = 'BingoBlockParty.Client.BingoGame.BingoLayoutState';
	global.BingoBlockParty.Client.BingoGame.BingoLayoutState = $BingoBlockParty_Client_BingoGame_BingoLayoutState;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.InfoArea.InfoAreaLayout
	var $BingoBlockParty_Client_InfoArea_InfoAreaLayout = function(game, width, height, renderer, infoAreaLayout) {
		this.$_game = null;
		this.$_width = 0;
		this.$_height = 0;
		this.$_renderer = null;
		this.$1$LayoutField = null;
		this.$mainLayer = null;
		this.$1$TouchManagerField = null;
		this.$_game = game;
		this.$_width = width;
		this.$_height = height;
		this.$_renderer = renderer;
		this.set_layout(infoAreaLayout);
	};
	$BingoBlockParty_Client_InfoArea_InfoAreaLayout.__typeName = 'BingoBlockParty.Client.InfoArea.InfoAreaLayout';
	global.BingoBlockParty.Client.InfoArea.InfoAreaLayout = $BingoBlockParty_Client_InfoArea_InfoAreaLayout;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.LobbyArea.LobbyRoom
	var $BingoBlockParty_Client_LobbyArea_$LobbyRoom = function() {
		this.$1$NameField = null;
	};
	$BingoBlockParty_Client_LobbyArea_$LobbyRoom.__typeName = 'BingoBlockParty.Client.LobbyArea.$LobbyRoom';
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.LobbyArea.HeaderButtonTop
	var $BingoBlockParty_Client_LobbyArea_HeaderButtonTop = function() {
	};
	$BingoBlockParty_Client_LobbyArea_HeaderButtonTop.__typeName = 'BingoBlockParty.Client.LobbyArea.HeaderButtonTop';
	global.BingoBlockParty.Client.LobbyArea.HeaderButtonTop = $BingoBlockParty_Client_LobbyArea_HeaderButtonTop;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.LobbyArea.LobbyLayout
	var $BingoBlockParty_Client_LobbyArea_LobbyLayout = function(game, width, height, renderer, lobbyBoardLayout) {
		this.$_game = null;
		this.$_width = 0;
		this.$_height = 0;
		this.$1$LayoutField = null;
		this.$1$RendererField = null;
		this.$1$SelectedHeaderButtonField = 0;
		this.$1$TouchManagerField = null;
		this.$mainLayer = null;
		this.$1$NumberOfRoomsVisibleField = 0;
		this.$1$RoomButtonSizeField = null;
		this.$1$RoomsPositionField = null;
		this.$1$PlusOverlayField = null;
		this.$1$OrangeButtonOverlayField = null;
		this.$1$CreateRoomTextOverlayField = null;
		this.$1$SelectedOverlayField = null;
		this.$1$AllRoomsOverlayField = null;
		this.$1$FeaturedOverlayField = null;
		this.$1$FavoritesOverlayField = null;
		this.$1$EyeOverlayField = null;
		this.$1$DollarOverlayField = null;
		this.$1$StarOverlayField = null;
		this.$1$LobbyOverlayField = null;
		this.$1$ProfileOverlayField = null;
		this.$1$GoldCoinOverlayField = null;
		this.$1$SilverCoinOverlayField = null;
		this.$1$LobbyBackgroundField = null;
		this.$1$ScrollBarButtonOverlayField = null;
		this.$1$ScrollBarOverlayField = null;
		this.$1$GoldCoinOverlayPositionField = null;
		this.$1$SilverCoinOverlayPositionField = null;
		this.$1$ProfileOverlayPositionField = null;
		this.$1$LobbyOverlayPositionField = null;
		this.$1$LobbyBackgroundPositionField = null;
		this.$1$FavoritesButtonPositionField = null;
		this.$1$FeaturedButtonPositionField = null;
		this.$1$AllRoomsButtonPositionField = null;
		this.$1$CreateRoomPositionField = null;
		this.$1$ButtonIconOffsetField = null;
		this.$1$ButtonTextOffsetField = null;
		this.$1$CreateRoomTextOffsetField = null;
		this.$1$CreateRoomIconOffsetField = null;
		this.$1$RoomButtonColorField = null;
		this.$1$AlternateRoomButtonColorField = null;
		this.$1$ScrollBarPositionField = null;
		this.$1$RoomsField = null;
		this.$1$TopRoomIndexField = 0;
		this.$c = 0;
		this.$_game = game;
		this.$_width = width;
		this.$_height = height;
		this.set_layout(lobbyBoardLayout);
		this.set_renderer(renderer);
	};
	$BingoBlockParty_Client_LobbyArea_LobbyLayout.__typeName = 'BingoBlockParty.Client.LobbyArea.LobbyLayout';
	global.BingoBlockParty.Client.LobbyArea.LobbyLayout = $BingoBlockParty_Client_LobbyArea_LobbyLayout;
	////////////////////////////////////////////////////////////////////////////////
	// BingoBlockParty.Client.PeopleArea.PeopleAreaLayout
	var $BingoBlockParty_Client_PeopleArea_PeopleAreaLayout = function(game, width, height, renderer, peopleAreaLayout) {
		this.$_game = null;
		this.$_width = 0;
		this.$_height = 0;
		this.$_renderer = null;
		this.$1$LayoutField = null;
		this.$mainLayer = null;
		this.$1$BarrierPositionField = null;
		this.$1$WalkwayPositionField = null;
		this.$1$BarrierField = null;
		this.$1$RedWalkwayField = null;
		this.$ticking = 0;
		this.$1$TouchManagerField = null;
		this.$_game = game;
		this.$_width = width;
		this.$_height = height;
		this.$_renderer = renderer;
		this.set_layout(peopleAreaLayout);
	};
	$BingoBlockParty_Client_PeopleArea_PeopleAreaLayout.__typeName = 'BingoBlockParty.Client.PeopleArea.PeopleAreaLayout';
	global.BingoBlockParty.Client.PeopleArea.PeopleAreaLayout = $BingoBlockParty_Client_PeopleArea_PeopleAreaLayout;
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
	ss.initClass($BingoBlockParty_Client_Game, {
		get_client: function() {
			return this.$1$ClientField;
		},
		set_client: function(value) {
			this.$1$ClientField = value;
		},
		get_gameBoardLayout: function() {
			return this.$1$GameBoardLayoutField;
		},
		set_gameBoardLayout: function(value) {
			this.$1$GameBoardLayoutField = value;
		},
		get_infoAreaLayout: function() {
			return this.$1$InfoAreaLayoutField;
		},
		set_infoAreaLayout: function(value) {
			this.$1$InfoAreaLayoutField = value;
		},
		get_bingoBoardLayout: function() {
			return this.$1$BingoBoardLayoutField;
		},
		set_bingoBoardLayout: function(value) {
			this.$1$BingoBoardLayoutField = value;
		},
		get_peopleAreaLayout: function() {
			return this.$1$PeopleAreaLayoutField;
		},
		set_peopleAreaLayout: function(value) {
			this.$1$PeopleAreaLayoutField = value;
		},
		get_lobbyListLayout: function() {
			return this.$1$LobbyListLayoutField;
		},
		set_lobbyListLayout: function(value) {
			this.$1$LobbyListLayoutField = value;
		},
		get_screenManager: function() {
			return this.$1$ScreenManagerField;
		},
		set_screenManager: function(value) {
			this.$1$ScreenManagerField = value;
		},
		get_socket: function() {
			return this.$1$SocketField;
		},
		set_socket: function(value) {
			this.$1$SocketField = value;
		},
		initScreens: function(renderer, screenManager) {
			this.set_screenManager(screenManager);
			var gameScreen = screenManager.createScreen();
			this.set_gameBoardLayout(gameScreen.createLayout(430, 557).makeActive().forceTick());
			this.set_bingoBoardLayout(gameScreen.createLayout(332, 557));
			this.set_infoAreaLayout(gameScreen.createLayout(259, 698));
			this.set_peopleAreaLayout(gameScreen.createLayout(762, 202).setScreenOrientation(1).offset(0, -61));
			this.get_gameBoardLayout().leftOf(this.get_infoAreaLayout()).rightOf(this.get_bingoBoardLayout());
			this.get_peopleAreaLayout().below(this.get_bingoBoardLayout()).below(this.get_gameBoardLayout());
			this.get_gameBoardLayout().set_layoutView(new $BingoBlockParty_Client_BallGame_ClientGameBoard(this, this.get_gameBoardLayout().get_width(), 1280, renderer, this.get_gameBoardLayout()));
			this.get_bingoBoardLayout().set_layoutView(new $BingoBlockParty_Client_BingoGame_BingoLayout(this, 332, 557, renderer, this.get_bingoBoardLayout()));
			this.get_infoAreaLayout().set_layoutView(new $BingoBlockParty_Client_InfoArea_InfoAreaLayout(this, 259, 698, renderer, this.get_infoAreaLayout()));
			this.get_peopleAreaLayout().set_layoutView(new $BingoBlockParty_Client_PeopleArea_PeopleAreaLayout(this, 762, 202, renderer, this.get_peopleAreaLayout()));
			var lobbyScreen = screenManager.createScreen();
			this.set_lobbyListLayout(lobbyScreen.createLayout(766, 584).makeActive());
			this.get_lobbyListLayout().set_layoutView(new $BingoBlockParty_Client_LobbyArea_LobbyLayout(this, 766, 584, renderer, this.get_lobbyListLayout()));
			screenManager.changeScreen(gameScreen);
		},
		initSocketManager: function(socketManager) {
			//
			//            Socket = socketManager.Create("http://192.168.1.3:3000/");
			//
			//            Socket.OnConnect = () =>
			//
			//            {
			//
			//            Socket.Emit("shoes2", new { Fuck = "Yopu" });
			//
			//            };
			//
			//            Socket.On<Boo>("shoes", a =>
			//
			//            {
			//
			//            });
			//
			//            Socket.On<Boo>("shoes3", a =>
			//
			//            {
			//
			//            });
			//
			//            
			//
			//            Socket.Connect();
		},
		beforeDraw: function() {
		},
		afterDraw: function() {
		},
		beforeTick: function() {
		},
		afterTick: function() {
		},
		loadAssets: function(renderer) {
			renderer.createImage('lobby.allRooms', 'images/lobby/allRooms.png', null);
			renderer.createImage('lobby.createNewRoomText', 'images/lobby/createNewRoomText.png', null);
			renderer.createImage('lobby.dollarSign', 'images/lobby/dollarSign.png', null);
			renderer.createImage('lobby.emptyStar', 'images/lobby/emptyStar.png', null);
			renderer.createImage('lobby.eyeBall', 'images/lobby/eyeBall.png', null);
			renderer.createImage('lobby.favoritesStar', 'images/lobby/favoritesStar.png', null);
			renderer.createImage('lobby.favoritesText', 'images/lobby/favoritesText.png', null);
			renderer.createImage('lobby.featuredText', 'images/lobby/featuredText.png', null);
			renderer.createImage('lobby.floor', 'images/lobby/floor.png', null);
			renderer.createImage('lobby.joinText', 'images/lobby/joinText.png', null);
			renderer.createImage('lobby.lobby', 'images/lobby/lobby.png', null);
			renderer.createImage('lobby.orangeButton', 'images/lobby/orangeButton.png', null);
			renderer.createImage('lobby.plus', 'images/lobby/plus.png', null);
			renderer.createImage('lobby.profile', 'images/lobby/profile.png', null);
			renderer.createImage('lobby.purpleButton', 'images/lobby/purpleButton.png', null);
			renderer.createImage('lobby.scrollBar', 'images/lobby/scrollBar.png', null);
			renderer.createImage('lobby.scrollButton', 'images/lobby/scrollButton.png', null);
			renderer.createImage('lobby.selectedButton', 'images/lobby/selectedButton.png', null);
			renderer.createImage('lobby.thinBackground', 'images/lobby/thinBackground.png', null);
			renderer.createImage('lobby.wideBackground', 'images/lobby/wideBackground.png', null);
			renderer.createImage('icons.lock', 'images/icons/lock.png', null);
			renderer.createImage('icons.goldCoin', 'images/icons/goldCoin.png', null);
			renderer.createImage('icons.100', 'images/icons/100.png', null);
			renderer.createImage('icons.200', 'images/icons/200.png', null);
			renderer.createImage('icons.300', 'images/icons/300.png', null);
			renderer.createImage('icons.400', 'images/icons/400.png', null);
			renderer.createImage('leftBoard.bingoCard', 'images/leftBoard/bingoCard.png', null);
			renderer.createImage('leftBoard.chooseYourCards', 'images/leftBoard/chooseYourCards.png', null);
			renderer.createImage('leftBoard.darkBoard', 'images/leftBoard/darkBoard.png', null);
			renderer.createImage('leftBoard.greyPersonBox', 'images/leftBoard/greyPersonBox.png', null);
			renderer.createImage('leftBoard.leftBoard', 'images/leftBoard/leftBoard.png', null);
			renderer.createImage('leftBoard.lightBoard', 'images/leftBoard/lightBoard.png', null);
			renderer.createImage('leftBoard.numberCallArea', 'images/leftBoard/numberCallArea.png', null);
			renderer.createImage('leftBoard.purchaseBingCardOutline', 'images/leftBoard/purchaseBingCardOutline.png', null);
			renderer.createImage('leftBoard.purchaseBingCardOutlineSelected', 'images/leftBoard/purchaseBingCardOutlineSelected.png', null);
			renderer.createImage('leftBoard.purchaseBingoCard', 'images/leftBoard/purchaseBingoCard.png', null);
			renderer.createImage('leftBoard.purchaseCard', 'images/leftBoard/purchaseCard.png', null);
			renderer.createImage('leftBoard.purchaseConfirm', 'images/leftBoard/purchaseConfirm.png', null);
			renderer.createImage('leftBoard.selectAvatar', 'images/leftBoard/selectAvatar.png', null);
			renderer.createImage('leftBoard.smallGreyBox', 'images/leftBoard/smallGreyBox.png', null);
			renderer.createImage('leftBoard.smallOrangeButton', 'images/leftBoard/smallOrangeButton.png', null);
			renderer.createImage('leftBoard.wideGreyBox', 'images/leftBoard/wideGreyBox.png', null);
			renderer.createImage('leftBoard.previousCalledBalls', 'images/leftBoard/previousCalledBalls.png', null);
			renderer.createImage('leftBoard.wideOrangeButton', 'images/leftBoard/wideOrangeButton.png', null);
			renderer.createImage('leftBoard.numbers.white.1', 'images/leftBoard/numbers/white/1.png', null);
			renderer.createImage('leftBoard.numbers.white.2', 'images/leftBoard/numbers/white/2.png', null);
			renderer.createImage('leftBoard.numbers.white.3', 'images/leftBoard/numbers/white/3.png', null);
			renderer.createImage('leftBoard.numbers.white.4', 'images/leftBoard/numbers/white/4.png', null);
			renderer.createImage('leftBoard.numbers.white.5', 'images/leftBoard/numbers/white/5.png', null);
			renderer.createImage('leftBoard.numbers.white.6', 'images/leftBoard/numbers/white/6.png', null);
			renderer.createImage('leftBoard.numbers.white.7', 'images/leftBoard/numbers/white/7.png', null);
			renderer.createImage('leftBoard.numbers.white.8', 'images/leftBoard/numbers/white/8.png', null);
			renderer.createImage('leftBoard.numbers.white.9', 'images/leftBoard/numbers/white/9.png', null);
			renderer.createImage('leftBoard.numbers.white.10', 'images/leftBoard/numbers/white/10.png', null);
			renderer.createImage('leftBoard.numbers.white.11', 'images/leftBoard/numbers/white/11.png', null);
			renderer.createImage('leftBoard.numbers.white.12', 'images/leftBoard/numbers/white/12.png', null);
			renderer.createImage('leftBoard.numbers.white.13', 'images/leftBoard/numbers/white/13.png', null);
			renderer.createImage('leftBoard.numbers.white.14', 'images/leftBoard/numbers/white/14.png', null);
			renderer.createImage('leftBoard.numbers.white.15', 'images/leftBoard/numbers/white/15.png', null);
			renderer.createImage('leftBoard.numbers.white.16', 'images/leftBoard/numbers/white/16.png', null);
			renderer.createImage('leftBoard.numbers.white.17', 'images/leftBoard/numbers/white/17.png', null);
			renderer.createImage('leftBoard.numbers.white.18', 'images/leftBoard/numbers/white/18.png', null);
			renderer.createImage('leftBoard.numbers.white.19', 'images/leftBoard/numbers/white/19.png', null);
			renderer.createImage('leftBoard.numbers.white.20', 'images/leftBoard/numbers/white/20.png', null);
			renderer.createImage('leftBoard.numbers.white.21', 'images/leftBoard/numbers/white/21.png', null);
			renderer.createImage('leftBoard.numbers.white.22', 'images/leftBoard/numbers/white/22.png', null);
			renderer.createImage('leftBoard.numbers.white.23', 'images/leftBoard/numbers/white/23.png', null);
			renderer.createImage('leftBoard.numbers.white.24', 'images/leftBoard/numbers/white/24.png', null);
			renderer.createImage('leftBoard.numbers.white.25', 'images/leftBoard/numbers/white/25.png', null);
			renderer.createImage('leftBoard.numbers.white.26', 'images/leftBoard/numbers/white/26.png', null);
			renderer.createImage('leftBoard.numbers.white.27', 'images/leftBoard/numbers/white/27.png', null);
			renderer.createImage('leftBoard.numbers.white.28', 'images/leftBoard/numbers/white/28.png', null);
			renderer.createImage('leftBoard.numbers.white.29', 'images/leftBoard/numbers/white/29.png', null);
			renderer.createImage('leftBoard.numbers.white.30', 'images/leftBoard/numbers/white/30.png', null);
			renderer.createImage('leftBoard.numbers.colored.1', 'images/leftBoard/numbers/colored/1.png', null);
			renderer.createImage('leftBoard.numbers.colored.2', 'images/leftBoard/numbers/colored/2.png', null);
			renderer.createImage('leftBoard.numbers.colored.3', 'images/leftBoard/numbers/colored/3.png', null);
			renderer.createImage('leftBoard.numbers.colored.4', 'images/leftBoard/numbers/colored/4.png', null);
			renderer.createImage('leftBoard.numbers.colored.5', 'images/leftBoard/numbers/colored/5.png', null);
			renderer.createImage('leftBoard.numbers.colored.6', 'images/leftBoard/numbers/colored/6.png', null);
			renderer.createImage('leftBoard.numbers.colored.7', 'images/leftBoard/numbers/colored/7.png', null);
			renderer.createImage('leftBoard.numbers.colored.8', 'images/leftBoard/numbers/colored/8.png', null);
			renderer.createImage('leftBoard.numbers.colored.9', 'images/leftBoard/numbers/colored/9.png', null);
			renderer.createImage('leftBoard.numbers.colored.10', 'images/leftBoard/numbers/colored/10.png', null);
			renderer.createImage('leftBoard.numbers.colored.11', 'images/leftBoard/numbers/colored/11.png', null);
			renderer.createImage('leftBoard.numbers.colored.12', 'images/leftBoard/numbers/colored/12.png', null);
			renderer.createImage('leftBoard.numbers.colored.13', 'images/leftBoard/numbers/colored/13.png', null);
			renderer.createImage('leftBoard.numbers.colored.14', 'images/leftBoard/numbers/colored/14.png', null);
			renderer.createImage('leftBoard.numbers.colored.15', 'images/leftBoard/numbers/colored/15.png', null);
			renderer.createImage('leftBoard.numbers.colored.16', 'images/leftBoard/numbers/colored/16.png', null);
			renderer.createImage('leftBoard.numbers.colored.17', 'images/leftBoard/numbers/colored/17.png', null);
			renderer.createImage('leftBoard.numbers.colored.18', 'images/leftBoard/numbers/colored/18.png', null);
			renderer.createImage('leftBoard.numbers.colored.19', 'images/leftBoard/numbers/colored/19.png', null);
			renderer.createImage('leftBoard.numbers.colored.20', 'images/leftBoard/numbers/colored/20.png', null);
			renderer.createImage('leftBoard.numbers.colored.21', 'images/leftBoard/numbers/colored/21.png', null);
			renderer.createImage('leftBoard.numbers.colored.22', 'images/leftBoard/numbers/colored/22.png', null);
			renderer.createImage('leftBoard.numbers.colored.23', 'images/leftBoard/numbers/colored/23.png', null);
			renderer.createImage('leftBoard.numbers.colored.24', 'images/leftBoard/numbers/colored/24.png', null);
			renderer.createImage('leftBoard.numbers.colored.25', 'images/leftBoard/numbers/colored/25.png', null);
			renderer.createImage('leftBoard.numbers.colored.26', 'images/leftBoard/numbers/colored/26.png', null);
			renderer.createImage('leftBoard.numbers.colored.27', 'images/leftBoard/numbers/colored/27.png', null);
			renderer.createImage('leftBoard.numbers.colored.28', 'images/leftBoard/numbers/colored/28.png', null);
			renderer.createImage('leftBoard.numbers.colored.29', 'images/leftBoard/numbers/colored/29.png', null);
			renderer.createImage('leftBoard.numbers.colored.30', 'images/leftBoard/numbers/colored/30.png', null);
			renderer.createImage('board', 'images/gameBoards/board1.png', null);
			renderer.createImage('walkway.red', 'images/walkway/walkway-red.png', null);
			renderer.createImage('walkway.barrier', 'images/walkway/walkwayBarrier.png', null);
			renderer.createImage('peg.white', 'images/pegs/white_peg.png', new Engine.Point(13, 9));
			renderer.createImage('peg.hit.white', 'images/pegs/white_peg_lit_overlay.png', null);
			renderer.createImage('peg.blue', 'images/pegs/blue_peg.png', new Engine.Point(13, 9));
			renderer.createImage('peg.hit.blue', 'images/pegs/blue_peg_lit_overlay.png', null);
			renderer.createImage('peg.green', 'images/pegs/green_peg.png', new Engine.Point(13, 9));
			renderer.createImage('peg.hit.green', 'images/pegs/green_peg_lit_overlay.png', null);
			renderer.createImage('peg.purple', 'images/pegs/purple_peg.png', new Engine.Point(13, 9));
			renderer.createImage('peg.hit.purple', 'images/pegs/purple_peg_lit_overlay.png', null);
			renderer.createImage('peg.red', 'images/pegs/red_peg.png', new Engine.Point(13, 9));
			renderer.createImage('peg.hit.red', 'images/pegs/red_peg_lit_overlay.png', null);
			renderer.createImage('peg.yellow', 'images/pegs/yellow_peg.png', new Engine.Point(16, 8));
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
			renderer.createImage('silverCoinBoxOverlay', 'images/overlays/silver_coin_box.png', null);
			renderer.createImage('pullBoxOverlay', 'images/overlays/pulls_button.png', null);
			renderer.createImage('female.blonde.front', 'images/people/Female1_FrontDesign.png', null);
			renderer.createImage('male.hat.front', 'images/people/male2_FrontDesign.png', null);
		},
		loadFonts: function(renderer) {
			renderer.createFont('lobby.font', 'spriteFont1');
			renderer.createFont('Arial-18', 'Arial-18');
		}
	}, null, [Engine.Interfaces.IGame]);
	ss.initClass($BingoBlockParty_Client_Game$Boo, {
		get_foo: function() {
			return this.$1$FooField;
		},
		set_foo: function(value) {
			this.$1$FooField = value;
		}
	});
	ss.initClass($BingoBlockParty_Client_BallGame_ClientGameBoard, {
		get_renderer: function() {
			return this.$2$RendererField;
		},
		set_renderer: function(value) {
			this.$2$RendererField = value;
		},
		get_layout: function() {
			return this.$2$LayoutField;
		},
		set_layout: function(value) {
			this.$2$LayoutField = value;
		},
		get_backgroundPlane: function() {
			return this.$2$BackgroundPlaneField;
		},
		set_backgroundPlane: function(value) {
			this.$2$BackgroundPlaneField = value;
		},
		createObjects: function() {
			this.set_backgroundPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientBackgroundPlane(this));
			this.set_gameModel(new $BingoBlockParty_Client_BallGame_ClientGameModel(this.boardWidth, this.boardHeight, this.get_layout()));
			this.set_pegsPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientPegsPlane(this));
			this.set_cannonBallPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientCannonBallPlane(this));
			this.set_cannonPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientCannonPlane(this));
			this.set_chutesPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientChutesPlane(this));
			this.set_pegPhysicsManager(new $BingoBlockParty_Client_BallGame_ClientPegPhysicsManager(this, false));
			this.set_overlaysPlane(new $BingoBlockParty_Client_BallGame_Planes_ClientOverlaysPlane(this));
			this.set_viewManager(new $BingoBlockParty_Client_BallGame_ViewManager(this));
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameModel()).set_touchManager(new Engine.TouchManager());
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
		},
		roundOver: function() {
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
		get_touchManager: function() {
			return $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameModel()).get_touchManager();
		},
		render: function(elapsedGameTime) {
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$2(this.get_pegPhysicsManager()).render();
			this.get_backgroundPlane().render();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$8(this.get_cannonPlane()).render();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$9(this.get_chutesPlane()).render();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$a(this.get_pegsPlane()).render();
			this.get_overlaysPlane().render();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$7(this.get_cannonBallPlane()).render();
		},
		destroy: function() {
		},
		initLayoutView: function() {
			this.init();
		},
		tickLayoutView: function(elapsedGameTime) {
			this.tick(elapsedGameTime);
		}
	}, BingoBlockParty.Common.BallGame.GameBoard, [Engine.Interfaces.ILayoutView]);
	ss.initClass($BingoBlockParty_Client_BallGame_ClientGameModel, {
		get_gameBoardLayout: function() {
			return this.$2$GameBoardLayoutField;
		},
		set_gameBoardLayout: function(value) {
			this.$2$GameBoardLayoutField = value;
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
			layer.translate$1(-this.get_x(), -this.get_y());
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
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_touchManager().pushClickRect(new Engine.TouchRect.$ctor1(cannonButton.get_x() - this.get_cannonAsset().get_width() * 2, cannonButton.get_y(), this.get_cannonAsset().get_width() * 4, this.get_cannonAsset().get_height(), ss.mkdel(this, this.shootBall), null));
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_touchManager().pushClickRect(new Engine.TouchRect.$ctor1(0, 0, this.get_gameBoard().get_gameModel().get_boardWidth(), this.get_gameBoard().get_gameModel().get_boardHeight(), ss.mkdel(this, this.rotateClick), null));
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
			context.translate$1(cannonLocation.get_x() - ss.Int32.div(cannonImage.get_width(), 2), cannonLocation.get_y());
			context.drawImage$7(cannonImage, 0, 0, this.get_gameBoard().get_gameModel().get_cannonAngle() * Math.PI / 180, ss.Int32.div(cannonImage.get_width(), 2), 0);
			context.restore();
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
			context.translate$1(ss.Int32.trunc(x), ss.Int32.trunc(y));
			context.translate$1(ss.Int32.div(-cannonBall.get_width(), 2), ss.Int32.div(-cannonBall.get_height(), 2));
			context.drawImage$7(cannonBall, 0, 0, this.get_body().get_rotation(), ss.Int32.div(cannonBall.get_width(), 2), ss.Int32.div(cannonBall.get_height(), 2));
			context.drawImage$2(cannonBallShine, 0, 0);
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
			context.translate$1(chuteLocation.get_x(), chuteLocation.get_y());
			if (lit) {
				var offX = ss.Int32.div(this.get_chuteAssetsLit()[this.get_chuteIndex()].get_width() - this.get_chuteAssets()[this.get_chuteIndex()].get_width(), 2);
				var offY = ss.Int32.div(this.get_chuteAssetsLit()[this.get_chuteIndex()].get_height() - this.get_chuteAssets()[this.get_chuteIndex()].get_height(), 2);
				context.translate$1(-offX, -offY);
			}
			context.drawImage$2(chuteImage, 0, 0);
			context.restore();
			context.save();
			context.translate$1(chuteLocation.get_x(), chuteLocation.get_y());
			context.translate$1(ss.Int32.div(this.get_chuteAssets()[this.get_chuteIndex()].get_width(), 2), ss.Int32.div(this.get_chuteAssets()[this.get_chuteIndex()].get_height(), 2));
			var fontSize = 25;
			//context.FillStyle = "white";
			//context.Font = "bold " + fontSize + "px Arial";
			//context.ShadowColor = "#72C9FC";
			//context.ShadowOffsetX = 0;
			//context.ShadowOffsetY = 0;
			//context.ShadowBlur = 5;
			var bonusText = this.get_chuteNumber().toString();
			var size = context.measureString(bonusText);
			context.drawString('lobby.font', bonusText, ss.Int32.div(ss.Int32.trunc(-size), 2), 8);
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
			context.translate$1(this.get_x(), this.get_y());
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
			context.translate$1(-image.get_center().get_x(), -image.get_center().get_y());
			context.drawImage$2(image, 0, 0);
			context.restore();
		},
		renderText: function(context) {
			if (this.get_drawText()) {
				this.set_ticking(this.get_ticking() - 1);
				var posY = ss.Int32.div(this.get_ticking(), 4);
				context.save();
				context.translate$1(this.get_x(), this.get_y());
				context.translate$1(0, -25 + posY);
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
				context.drawString('lobby.font', bonusText, ss.Int32.div(ss.Int32.trunc(-size), 2), ss.Int32.div(-fontSize, 2));
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
			this.set_plane(this.get_gameBoard().get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_width(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_height(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_layout()));
		},
		roundOver: function(state) {
		},
		tick: function() {
		},
		render: function() {
			var context = this.get_plane();
			context.begin();
			context.save();
			this.get_gameBoard().get_viewManager().translateContext(context);
			context.drawImage$6(this.get_gameBoard().get_renderer().getImage('board'), 0, 0, this.get_gameBoard().get_gameModel().get_boardWidth(), this.get_gameBoard().get_gameModel().get_boardHeight());
			context.restore();
			context.end();
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
			this.set_plane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_width(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_height(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_layout()));
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
			this.get_plane().begin();
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
			this.get_plane().end();
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
			this.set_plane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_width(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_height(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout()));
		},
		createCannon: function(cannonPlane) {
			return new $BingoBlockParty_Client_BallGame_Pieces_ClientCannon(this.get_gameBoard(), cannonPlane);
		},
		render: function() {
			this.get_plane().begin();
			this.get_plane().clear();
			var context = this.get_plane();
			context.save();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().translateContext(context);
			context.save();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client$3(this.get_cannon()).render(context);
			context.restore();
			context.restore();
			this.get_plane().end();
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
			this.set_backPlane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_width(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_height(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_layout()));
			this.set_frontPlane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_width(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_height(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_layout()));
			this.set_bumpersAsset($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteBumpers'));
			this.set_bucketsAsset($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().getImage('chuteBuckets'));
		},
		render: function() {
			this.get_backPlane().begin();
			this.get_frontPlane().begin();
			this.get_backPlane().clear();
			this.get_frontPlane().clear();
			var backContext = this.get_backPlane();
			var frontContext = this.get_frontPlane();
			backContext.save();
			frontContext.save();
			$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().translateContext(backContext);
			$BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_viewManager().translateContext(frontContext);
			backContext.save();
			backContext.translate$1(0, this.get_gameBoard().get_gameModel().get_boardHeight() - this.get_bumpersAsset().get_height());
			backContext.drawImage$2(this.get_bumpersAsset(), 0, 0);
			backContext.restore();
			backContext.save();
			backContext.translate$1(18, this.get_gameBoard().get_gameModel().get_boardHeight() - this.get_bucketsAsset().get_height());
			backContext.drawImage$2(this.get_bucketsAsset(), 0, 0);
			backContext.restore();
			var $t1 = this.get_chutes();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var chute = $t1[$t2];
				$BingoBlockParty_Client_Utils_ClientSwitcher.client$5(chute).render(frontContext);
			}
			backContext.restore();
			frontContext.restore();
			this.get_backPlane().end();
			this.get_frontPlane().end();
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
			this.set_plane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_width(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_height(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout()));
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
			this.get_plane().begin();
			this.get_plane().clear();
			var context = this.get_plane();
			this.$renderJackpot(context);
			this.$renderCoinBox(context);
			this.$renderPullBox(context);
			this.get_plane().end();
		},
		$renderJackpot: function(context) {
			context.save();
			context.translate$1(this.get_jackpotOverlayPosition().get_x(), this.get_jackpotOverlayPosition().get_y());
			context.translate$1(ss.Int32.div(-this.get_jackpotOverlay().get_width(), 2), 0);
			context.drawImage$2(this.get_jackpotOverlay(), 0, 0);
			context.restore();
			context.save();
			context.translate$1(this.get_jackpotOverlayPosition().get_x(), this.get_jackpotOverlayPosition().get_y());
			context.translate$1(0, 46);
			var fontSize = 15;
			//
			//                        context.FillStyle = "white";
			//
			//                        context.Font = "bold " + fontSize + "px Arial";
			var size = context.measureString(this.get_gameBoard().get_gameModel().get_jackpotScore().toString());
			context.drawString('lobby.font', this.get_gameBoard().get_gameModel().get_jackpotScore().toString(), ss.Int32.trunc(-size / 2), ss.Int32.div(-fontSize, 2));
			context.restore();
		},
		$renderCoinBox: function(context) {
			context.save();
			context.translate$1(this.get_coinBoxOverlayPosition().get_x(), this.get_coinBoxOverlayPosition().get_y());
			context.translate$1(ss.Int32.div(-this.get_coinBoxOverlay().get_width(), 2), 0);
			context.drawImage$2(this.get_coinBoxOverlay(), 0, 0);
			context.restore();
			context.save();
			context.translate$1(this.get_coinBoxOverlayPosition().get_x(), this.get_coinBoxOverlayPosition().get_y());
			context.translate$1(0, 33);
			var fontSize = 15;
			//
			//                        context.FillStyle = "white";
			//
			//                        context.Font = "bold " + fontSize + "px Arial";
			var size = context.measureString(this.get_gameBoard().get_gameModel().get_numberOfCoins().toString());
			context.drawString('lobby.font', this.get_gameBoard().get_gameModel().get_numberOfCoins().toString(), ss.Int32.div(ss.Int32.trunc(-size), 2), ss.Int32.div(-fontSize, 2));
			context.restore();
		},
		$renderPullBox: function(context) {
			context.save();
			context.translate$1(this.get_pullBoxOverlayPosition().get_x(), this.get_pullBoxOverlayPosition().get_y());
			context.translate$1(ss.Int32.div(-this.get_pullBoxOverlay().get_width(), 2), 0);
			context.drawImage$2(this.get_pullBoxOverlay(), 0, 0);
			context.restore();
			context.save();
			context.translate$1(this.get_pullBoxOverlayPosition().get_x(), this.get_pullBoxOverlayPosition().get_y());
			context.translate$1(0, 34);
			var fontSize = 15;
			//
			//                        context.FillStyle = "white";
			//
			//                        context.Font = "bold " + fontSize + "px Arial";
			var size = context.measureString(this.get_gameBoard().get_gameModel().get_numberOfPulls().toString());
			context.drawString('lobby.font', this.get_gameBoard().get_gameModel().get_numberOfPulls().toString(), ss.Int32.div(ss.Int32.trunc(-size), 2), ss.Int32.div(-fontSize, 2));
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
			this.set_plane($BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_renderer().createLayer($BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_width(), $BingoBlockParty_Client_Utils_ClientSwitcher.client$1(this.get_gameBoard().get_gameModel()).get_gameBoardLayout().get_height(), $BingoBlockParty_Client_Utils_ClientSwitcher.client(this.get_gameBoard()).get_layout()));
		},
		render: function() {
			this.get_plane().begin();
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
			this.get_plane().end();
		}
	}, BingoBlockParty.Common.BallGame.Planes.PegsPlane, [BingoBlockParty.Common.BallGame.Models.IPlane]);
	ss.initClass($BingoBlockParty_Client_BingoGame_BingoCard, {
		get_numbers: function() {
			return this.$1$NumbersField;
		},
		set_numbers: function(value) {
			this.$1$NumbersField = value;
		},
		getNumberAt: function(x, y) {
			return this.get_numbers()[y * $BingoBlockParty_Client_BingoGame_BingoCard.numbersWide + x];
		}
	});
	ss.initClass($BingoBlockParty_Client_BingoGame_BingoCardNumber, {
		get_number: function() {
			return this.$1$NumberField;
		},
		set_number: function(value) {
			this.$1$NumberField = value;
		},
		get_color: function() {
			if (this.get_called()) {
				return 5;
			}
			return $BingoBlockParty_Client_BingoGame_BingoCardNumber.numberToColor(this.get_number());
		},
		get_called: function() {
			return this.$1$CalledField;
		},
		set_called: function(value) {
			this.$1$CalledField = value;
		}
	});
	ss.initEnum($BingoBlockParty_Client_BingoGame_BingoCardNumberColor, { red: 0, green: 1, blue: 2, yellow: 3, purple: 4, black: 5 });
	ss.initClass($BingoBlockParty_Client_BingoGame_BingoLayout, {
		get_layout: function() {
			return this.$1$LayoutField;
		},
		set_layout: function(value) {
			this.$1$LayoutField = value;
		},
		init: function() {
			this.$mainLayer = this.$_renderer.createLayer(this.$_width, this.$_height, this.get_layout());
			this.$_renderer.addLayer(this.$mainLayer);
			this.set_touchManager(new Engine.TouchManager());
			this.set_numberCallAreaPosition(new Engine.Point(8, 380));
			this.set_previousCalledBallsPosition(new Engine.Point(37, 370));
			this.set_bingoCardPosition1(new Engine.Point(-9, 20));
			this.set_bingoCardPosition2(new Engine.Point(151, 20));
			this.set_bingoCardPosition3(new Engine.Point(-9, 190));
			this.set_bingoCardPosition4(new Engine.Point(151, 190));
			this.set_leftBoard(this.$_renderer.getImage('leftBoard.leftBoard'));
			this.set_numberCallArea(this.$_renderer.getImage('leftBoard.numberCallArea'));
			this.set_bingoCard(this.$_renderer.getImage('leftBoard.bingoCard'));
			this.set_previousCalledBalls(this.$_renderer.getImage('leftBoard.previousCalledBalls'));
			this.set_chooseYourCards(this.$_renderer.getImage('leftBoard.chooseYourCards'));
			this.set_purchaseBingoCardOutline(this.$_renderer.getImage('leftBoard.purchaseBingCardOutline'));
			this.set_purchaseBingoCardOutlineSelected(this.$_renderer.getImage('leftBoard.purchaseBingCardOutlineSelected'));
			this.set_purchaseBingoCardPosition1(new Engine.Point(4, 5));
			this.set_purchaseBingoCardPosition2(new Engine.Point(146, 5));
			this.set_purchaseBingoCardPosition3(new Engine.Point(4, 175));
			this.set_purchaseBingoCardPosition4(new Engine.Point(146, 175));
			this.set_lightBoard(this.$_renderer.getImage('leftBoard.lightBoard'));
			this.set_purchaseBingoCard(this.$_renderer.getImage('leftBoard.purchaseBingoCard'));
			this.set_icon100(this.$_renderer.getImage('icons.100'));
			this.set_icon200(this.$_renderer.getImage('icons.200'));
			this.set_icon300(this.$_renderer.getImage('icons.300'));
			this.set_icon400(this.$_renderer.getImage('icons.400'));
			this.set_goldCoin(this.$_renderer.getImage('icons.goldCoin'));
			this.set_purchase1BingoCardPosition(new Engine.Point(83, 65));
			this.set_purchase2BingoCardPosition1(new Engine.Point(79, 61));
			this.set_purchase2BingoCardPosition2(new Engine.Point(87, 69));
			this.set_purchase3BingoCardPosition1(new Engine.Point(75, 57));
			this.set_purchase3BingoCardPosition2(new Engine.Point(83, 65));
			this.set_purchase3BingoCardPosition3(new Engine.Point(91, 73));
			this.set_purchase4BingoCardPosition1(new Engine.Point(71, 53));
			this.set_purchase4BingoCardPosition2(new Engine.Point(79, 61));
			this.set_purchase4BingoCardPosition3(new Engine.Point(87, 69));
			this.set_purchase4BingoCardPosition4(new Engine.Point(95, 77));
			this.set_purchaseAmountPosition(new Engine.Point(40, 110));
			this.set_purchaseCoinPosition(new Engine.Point(116, 121));
			this.set_chooseYourCardsPosition(new Engine.Point(10, 142));
			this.set_lightBoardPosition(new Engine.Point(10, 30));
			this.setState(0);
			this.get_touchManager().pushClickRect(new Engine.TouchRect.$ctor1(0, 0, this.$_width, this.$_height, ss.mkdel(this, this.$purchaseCard), null));
			this.$setupCards();
		},
		get_purchase2BingoCardPosition2: function() {
			return this.$1$Purchase2BingoCardPosition2Field;
		},
		set_purchase2BingoCardPosition2: function(value) {
			this.$1$Purchase2BingoCardPosition2Field = value;
		},
		get_purchase2BingoCardPosition1: function() {
			return this.$1$Purchase2BingoCardPosition1Field;
		},
		set_purchase2BingoCardPosition1: function(value) {
			this.$1$Purchase2BingoCardPosition1Field = value;
		},
		get_purchase3BingoCardPosition1: function() {
			return this.$1$Purchase3BingoCardPosition1Field;
		},
		set_purchase3BingoCardPosition1: function(value) {
			this.$1$Purchase3BingoCardPosition1Field = value;
		},
		get_purchase3BingoCardPosition2: function() {
			return this.$1$Purchase3BingoCardPosition2Field;
		},
		set_purchase3BingoCardPosition2: function(value) {
			this.$1$Purchase3BingoCardPosition2Field = value;
		},
		get_purchase3BingoCardPosition3: function() {
			return this.$1$Purchase3BingoCardPosition3Field;
		},
		set_purchase3BingoCardPosition3: function(value) {
			this.$1$Purchase3BingoCardPosition3Field = value;
		},
		get_purchase4BingoCardPosition1: function() {
			return this.$1$Purchase4BingoCardPosition1Field;
		},
		set_purchase4BingoCardPosition1: function(value) {
			this.$1$Purchase4BingoCardPosition1Field = value;
		},
		get_purchase4BingoCardPosition2: function() {
			return this.$1$Purchase4BingoCardPosition2Field;
		},
		set_purchase4BingoCardPosition2: function(value) {
			this.$1$Purchase4BingoCardPosition2Field = value;
		},
		get_purchase4BingoCardPosition3: function() {
			return this.$1$Purchase4BingoCardPosition3Field;
		},
		set_purchase4BingoCardPosition3: function(value) {
			this.$1$Purchase4BingoCardPosition3Field = value;
		},
		get_purchase4BingoCardPosition4: function() {
			return this.$1$Purchase4BingoCardPosition4Field;
		},
		set_purchase4BingoCardPosition4: function(value) {
			this.$1$Purchase4BingoCardPosition4Field = value;
		},
		get_purchase1BingoCardPosition: function() {
			return this.$1$Purchase1BingoCardPositionField;
		},
		set_purchase1BingoCardPosition: function(value) {
			this.$1$Purchase1BingoCardPositionField = value;
		},
		get_purchaseBingoCard: function() {
			return this.$1$PurchaseBingoCardField;
		},
		set_purchaseBingoCard: function(value) {
			this.$1$PurchaseBingoCardField = value;
		},
		get_purchaseCoinPosition: function() {
			return this.$1$PurchaseCoinPositionField;
		},
		set_purchaseCoinPosition: function(value) {
			this.$1$PurchaseCoinPositionField = value;
		},
		get_purchaseAmountPosition: function() {
			return this.$1$PurchaseAmountPositionField;
		},
		set_purchaseAmountPosition: function(value) {
			this.$1$PurchaseAmountPositionField = value;
		},
		get_goldCoin: function() {
			return this.$1$GoldCoinField;
		},
		set_goldCoin: function(value) {
			this.$1$GoldCoinField = value;
		},
		get_icon400: function() {
			return this.$1$Icon400Field;
		},
		set_icon400: function(value) {
			this.$1$Icon400Field = value;
		},
		get_icon300: function() {
			return this.$1$Icon300Field;
		},
		set_icon300: function(value) {
			this.$1$Icon300Field = value;
		},
		get_icon200: function() {
			return this.$1$Icon200Field;
		},
		set_icon200: function(value) {
			this.$1$Icon200Field = value;
		},
		get_icon100: function() {
			return this.$1$Icon100Field;
		},
		set_icon100: function(value) {
			this.$1$Icon100Field = value;
		},
		get_purchaseBingoCardSelected1: function() {
			return this.$1$PurchaseBingoCardSelected1Field;
		},
		set_purchaseBingoCardSelected1: function(value) {
			this.$1$PurchaseBingoCardSelected1Field = value;
		},
		get_purchaseBingoCardSelected2: function() {
			return this.$1$PurchaseBingoCardSelected2Field;
		},
		set_purchaseBingoCardSelected2: function(value) {
			this.$1$PurchaseBingoCardSelected2Field = value;
		},
		get_purchaseBingoCardSelected3: function() {
			return this.$1$PurchaseBingoCardSelected3Field;
		},
		set_purchaseBingoCardSelected3: function(value) {
			this.$1$PurchaseBingoCardSelected3Field = value;
		},
		get_purchaseBingoCardSelected4: function() {
			return this.$1$PurchaseBingoCardSelected4Field;
		},
		set_purchaseBingoCardSelected4: function(value) {
			this.$1$PurchaseBingoCardSelected4Field = value;
		},
		get_purchaseBingoCardPosition4: function() {
			return this.$1$PurchaseBingoCardPosition4Field;
		},
		set_purchaseBingoCardPosition4: function(value) {
			this.$1$PurchaseBingoCardPosition4Field = value;
		},
		get_purchaseBingoCardPosition3: function() {
			return this.$1$PurchaseBingoCardPosition3Field;
		},
		set_purchaseBingoCardPosition3: function(value) {
			this.$1$PurchaseBingoCardPosition3Field = value;
		},
		get_purchaseBingoCardPosition2: function() {
			return this.$1$PurchaseBingoCardPosition2Field;
		},
		set_purchaseBingoCardPosition2: function(value) {
			this.$1$PurchaseBingoCardPosition2Field = value;
		},
		get_purchaseBingoCardPosition1: function() {
			return this.$1$PurchaseBingoCardPosition1Field;
		},
		set_purchaseBingoCardPosition1: function(value) {
			this.$1$PurchaseBingoCardPosition1Field = value;
		},
		get_purchaseBingoCardOutline: function() {
			return this.$1$PurchaseBingoCardOutlineField;
		},
		set_purchaseBingoCardOutline: function(value) {
			this.$1$PurchaseBingoCardOutlineField = value;
		},
		get_purchaseBingoCardOutlineSelected: function() {
			return this.$1$PurchaseBingoCardOutlineSelectedField;
		},
		set_purchaseBingoCardOutlineSelected: function(value) {
			this.$1$PurchaseBingoCardOutlineSelectedField = value;
		},
		get_chooseYourCards: function() {
			return this.$1$ChooseYourCardsField;
		},
		set_chooseYourCards: function(value) {
			this.$1$ChooseYourCardsField = value;
		},
		get_chooseYourCardsPosition: function() {
			return this.$1$ChooseYourCardsPositionField;
		},
		set_chooseYourCardsPosition: function(value) {
			this.$1$ChooseYourCardsPositionField = value;
		},
		get_lightBoard: function() {
			return this.$1$LightBoardField;
		},
		set_lightBoard: function(value) {
			this.$1$LightBoardField = value;
		},
		get_lightBoardPosition: function() {
			return this.$1$LightBoardPositionField;
		},
		set_lightBoardPosition: function(value) {
			this.$1$LightBoardPositionField = value;
		},
		get_previousCalledBallsPosition: function() {
			return this.$1$PreviousCalledBallsPositionField;
		},
		set_previousCalledBallsPosition: function(value) {
			this.$1$PreviousCalledBallsPositionField = value;
		},
		get_previousCalledBalls: function() {
			return this.$1$PreviousCalledBallsField;
		},
		set_previousCalledBalls: function(value) {
			this.$1$PreviousCalledBallsField = value;
		},
		get_bingoCard1: function() {
			return this.$1$BingoCard1Field;
		},
		set_bingoCard1: function(value) {
			this.$1$BingoCard1Field = value;
		},
		get_bingoCard2: function() {
			return this.$1$BingoCard2Field;
		},
		set_bingoCard2: function(value) {
			this.$1$BingoCard2Field = value;
		},
		get_bingoCard3: function() {
			return this.$1$BingoCard3Field;
		},
		set_bingoCard3: function(value) {
			this.$1$BingoCard3Field = value;
		},
		get_bingoCard4: function() {
			return this.$1$BingoCard4Field;
		},
		set_bingoCard4: function(value) {
			this.$1$BingoCard4Field = value;
		},
		get_bingoCardPosition1: function() {
			return this.$1$BingoCardPosition1Field;
		},
		set_bingoCardPosition1: function(value) {
			this.$1$BingoCardPosition1Field = value;
		},
		get_bingoCardPosition2: function() {
			return this.$1$BingoCardPosition2Field;
		},
		set_bingoCardPosition2: function(value) {
			this.$1$BingoCardPosition2Field = value;
		},
		get_bingoCardPosition3: function() {
			return this.$1$BingoCardPosition3Field;
		},
		set_bingoCardPosition3: function(value) {
			this.$1$BingoCardPosition3Field = value;
		},
		get_bingoCardPosition4: function() {
			return this.$1$BingoCardPosition4Field;
		},
		set_bingoCardPosition4: function(value) {
			this.$1$BingoCardPosition4Field = value;
		},
		get_numberCallAreaPosition: function() {
			return this.$1$NumberCallAreaPositionField;
		},
		set_numberCallAreaPosition: function(value) {
			this.$1$NumberCallAreaPositionField = value;
		},
		get_bingoCard: function() {
			return this.$1$BingoCardField;
		},
		set_bingoCard: function(value) {
			this.$1$BingoCardField = value;
		},
		get_numberCallArea: function() {
			return this.$1$NumberCallAreaField;
		},
		set_numberCallArea: function(value) {
			this.$1$NumberCallAreaField = value;
		},
		get_leftBoard: function() {
			return this.$1$LeftBoardField;
		},
		set_leftBoard: function(value) {
			this.$1$LeftBoardField = value;
		},
		get_previousNumbersCalled: function() {
			return this.$1$PreviousNumbersCalledField;
		},
		set_previousNumbersCalled: function(value) {
			this.$1$PreviousNumbersCalledField = value;
		},
		tick: function(elapsedGameTime) {
		},
		get_touchManager: function() {
			return this.$1$TouchManagerField;
		},
		set_touchManager: function(value) {
			this.$1$TouchManagerField = value;
		},
		render: function(elapsedGameTime) {
			this.$mainLayer.begin();
			this.$mainLayer.save();
			this.$renderBackground();
			switch (this.get_currentBingoState()) {
				case 0: {
					this.$renderPurchaseCards();
					break;
				}
				case 1: {
					this.$renderInGame();
					break;
				}
				case 2: {
					break;
				}
				default: {
					throw new ss.ArgumentOutOfRangeException();
				}
			}
			this.$mainLayer.restore();
			this.$mainLayer.end();
		},
		get_currentBingoState: function() {
			return this.$1$CurrentBingoStateField;
		},
		set_currentBingoState: function(value) {
			this.$1$CurrentBingoStateField = value;
		},
		setState: function(state) {
			for (var $t1 = 0; $t1 < this.$touchRectangles.length; $t1++) {
				var touchRectangle = this.$touchRectangles[$t1];
				this.get_touchManager().removeClickRect(touchRectangle);
			}
			ss.clear(this.$touchRectangles);
			this.set_currentBingoState(state);
			switch (state) {
				case 0: {
					ss.add(this.$touchRectangles, this.get_touchManager().pushClickRect(new Engine.TouchRect.$ctor1(this.get_lightBoardPosition().get_x() + this.get_purchaseBingoCardPosition1().get_x(), this.get_lightBoardPosition().get_y() + this.get_purchaseBingoCardPosition1().get_y(), this.get_purchaseBingoCardOutline().get_width(), this.get_purchaseBingoCardOutline().get_height(), ss.mkdel(this, this.$purchaseCard), 1)));
					ss.add(this.$touchRectangles, this.get_touchManager().pushClickRect(new Engine.TouchRect.$ctor1(this.get_lightBoardPosition().get_x() + this.get_purchaseBingoCardPosition2().get_x(), this.get_lightBoardPosition().get_y() + this.get_purchaseBingoCardPosition2().get_y(), this.get_purchaseBingoCardOutline().get_width(), this.get_purchaseBingoCardOutline().get_height(), ss.mkdel(this, this.$purchaseCard), 2)));
					ss.add(this.$touchRectangles, this.get_touchManager().pushClickRect(new Engine.TouchRect.$ctor1(this.get_lightBoardPosition().get_x() + this.get_purchaseBingoCardPosition3().get_x(), this.get_lightBoardPosition().get_y() + this.get_purchaseBingoCardPosition3().get_y(), this.get_purchaseBingoCardOutline().get_width(), this.get_purchaseBingoCardOutline().get_height(), ss.mkdel(this, this.$purchaseCard), 3)));
					ss.add(this.$touchRectangles, this.get_touchManager().pushClickRect(new Engine.TouchRect.$ctor1(this.get_lightBoardPosition().get_x() + this.get_purchaseBingoCardPosition4().get_x(), this.get_lightBoardPosition().get_y() + this.get_purchaseBingoCardPosition4().get_y(), this.get_purchaseBingoCardOutline().get_width(), this.get_purchaseBingoCardOutline().get_height(), ss.mkdel(this, this.$purchaseCard), 4)));
					break;
				}
				case 1: {
					break;
				}
				case 2: {
					break;
				}
			}
		},
		$purchaseCard: function(eventtype, touchbox, x, y, collide) {
			this.set_purchaseBingoCardSelected1(false);
			this.set_purchaseBingoCardSelected2(false);
			this.set_purchaseBingoCardSelected3(false);
			this.set_purchaseBingoCardSelected4(false);
			switch (eventtype) {
				case 0: {
					if (collide) {
						switch (this.get_currentBingoState()) {
							case 0: {
								this.setState(2);
								break;
							}
							case 1: {
								this.setState(0);
								break;
							}
							case 2: {
								this.setState(1);
								break;
							}
							default: {
								throw new ss.ArgumentOutOfRangeException();
							}
						}
					}
					break;
				}
				case 1: {
					break;
				}
				case 2: {
					if (ss.isValue(touchbox.get_state())) {
						var number = ss.unbox(ss.cast(touchbox.get_state(), ss.Int32));
						switch (number) {
							case 1: {
								this.set_purchaseBingoCardSelected1(true);
								break;
							}
							case 2: {
								this.set_purchaseBingoCardSelected2(true);
								break;
							}
							case 3: {
								this.set_purchaseBingoCardSelected3(true);
								break;
							}
							case 4: {
								this.set_purchaseBingoCardSelected4(true);
								break;
							}
						}
						return true;
					}
					break;
				}
				default: {
					throw new ss.ArgumentOutOfRangeException('eventtype');
				}
			}
			return false;
		},
		$renderPurchaseCards: function() {
			this.$mainLayer.save();
			this.$mainLayer.translate(this.get_lightBoardPosition());
			this.$mainLayer.drawImage$2(this.get_lightBoard(), 0, 0);
			this.$mainLayer.drawImage(this.get_chooseYourCards(), this.get_chooseYourCardsPosition());
			this.$drawPurchaseBingoCard(100, 1, this.get_purchaseBingoCardPosition1());
			this.$drawPurchaseBingoCard(200, 2, this.get_purchaseBingoCardPosition2());
			this.$drawPurchaseBingoCard(300, 3, this.get_purchaseBingoCardPosition3());
			this.$drawPurchaseBingoCard(400, 4, this.get_purchaseBingoCardPosition4());
			this.$mainLayer.restore();
			this.$mainLayer.drawImage(this.get_previousCalledBalls(), this.get_previousCalledBallsPosition());
		},
		$drawPurchaseBingoCard: function(amount, numOfCards, cardPosition) {
			this.$mainLayer.save();
			this.$mainLayer.translate$1(cardPosition.get_x(), cardPosition.get_y());
			var purchaseOutline = this.get_purchaseBingoCardOutline();
			switch (numOfCards) {
				case 1: {
					if (this.get_purchaseBingoCardSelected1()) {
						purchaseOutline = this.get_purchaseBingoCardOutlineSelected();
					}
					break;
				}
				case 2: {
					if (this.get_purchaseBingoCardSelected2()) {
						purchaseOutline = this.get_purchaseBingoCardOutlineSelected();
					}
					break;
				}
				case 3: {
					if (this.get_purchaseBingoCardSelected3()) {
						purchaseOutline = this.get_purchaseBingoCardOutlineSelected();
					}
					break;
				}
				case 4: {
					if (this.get_purchaseBingoCardSelected4()) {
						purchaseOutline = this.get_purchaseBingoCardOutlineSelected();
					}
					break;
				}
			}
			this.$mainLayer.drawImage$2(purchaseOutline, 0, 0);
			this.$mainLayer.save();
			switch (numOfCards) {
				case 1: {
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase1BingoCardPosition(), true);
					break;
				}
				case 2: {
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase2BingoCardPosition1(), true);
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase2BingoCardPosition2(), true);
					break;
				}
				case 3: {
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase3BingoCardPosition1(), true);
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase3BingoCardPosition2(), true);
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase3BingoCardPosition3(), true);
					break;
				}
				case 4: {
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase4BingoCardPosition1(), true);
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase4BingoCardPosition2(), true);
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase4BingoCardPosition3(), true);
					this.$mainLayer.drawImage$1(this.get_purchaseBingoCard(), this.get_purchase4BingoCardPosition4(), true);
					break;
				}
			}
			this.$mainLayer.restore();
			var amountImage;
			switch (amount) {
				case 100: {
					amountImage = this.get_icon100();
					break;
				}
				case 200: {
					amountImage = this.get_icon200();
					break;
				}
				case 300: {
					amountImage = this.get_icon300();
					break;
				}
				case 400: {
					amountImage = this.get_icon400();
					break;
				}
				default: {
					throw new ss.Exception('Bad Amount');
				}
			}
			this.$mainLayer.drawImage(amountImage, this.get_purchaseAmountPosition());
			this.$mainLayer.drawImage$1(this.get_goldCoin(), this.get_purchaseCoinPosition(), true);
			this.$mainLayer.restore();
		},
		$renderBackground: function() {
			this.$mainLayer.drawImage$2(this.get_leftBoard(), 0, 0);
			this.$mainLayer.drawImage(this.get_numberCallArea(), this.get_numberCallAreaPosition());
		},
		$renderInGame: function() {
			this.$drawBingoCard(this.get_bingoCard1(), this.get_bingoCardPosition1());
			this.$drawBingoCard(this.get_bingoCard2(), this.get_bingoCardPosition2());
			this.$drawBingoCard(this.get_bingoCard3(), this.get_bingoCardPosition3());
			this.$drawBingoCard(this.get_bingoCard4(), this.get_bingoCardPosition4());
			this.$drawPreviousNumbersCalled();
		},
		$drawPreviousNumbersCalled: function() {
			this.$mainLayer.drawImage(this.get_previousCalledBalls(), this.get_previousCalledBallsPosition());
			this.$mainLayer.save();
			this.$mainLayer.translate$1(this.get_numberCallAreaPosition().get_x() + 30, this.get_numberCallAreaPosition().get_y() + 22);
			var paddingW = 45;
			var paddingH = 29;
			for (var index = 0; index < this.get_previousNumbersCalled().length; index++) {
				var number = this.get_previousNumbersCalled()[index];
				this.$mainLayer.drawImage$2(this.$_renderer.getImage('leftBoard.numbers.colored.' + number), index % 6 * paddingW, ss.Int32.div(index, 6) * paddingH);
			}
			this.$mainLayer.restore();
		},
		$drawBingoCard: function(card, cardPosition) {
			this.$mainLayer.save();
			this.$mainLayer.translate$1(cardPosition.get_x(), cardPosition.get_y());
			this.$mainLayer.drawImage$2(this.get_bingoCard(), 0, 0);
			this.$mainLayer.save();
			this.$mainLayer.translate$1(31, 28);
			for (var x = 0; x < $BingoBlockParty_Client_BingoGame_BingoCard.numbersWide; x++) {
				for (var y = 0; y < $BingoBlockParty_Client_BingoGame_BingoCard.numbersHigh; y++) {
					var bingoCardNumber = card.getNumberAt(x, y);
					var color = $BingoBlockParty_Client_BingoGame_BingoCardNumber.colorToColor(bingoCardNumber.get_color());
					this.$mainLayer.drawRectangle(color, x * 33, y * 34, 30, 30);
					this.$mainLayer.drawImage$2(this.$_renderer.getImage('leftBoard.numbers.white.' + bingoCardNumber.get_number()), x * 33 + 1, y * 34 + 8);
				}
			}
			this.$mainLayer.restore();
			this.$mainLayer.restore();
		},
		destroy: function() {
		},
		initLayoutView: function() {
			this.init();
		},
		tickLayoutView: function(elapsedGameTime) {
			this.tick(elapsedGameTime);
		},
		$setupCards: function() {
			this.set_bingoCard1(new $BingoBlockParty_Client_BingoGame_BingoCard(this.$randomNumbers(12, 1, 30)));
			var $t1 = this.get_bingoCard1().get_numbers();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var bingoCardNumber = $t1[$t2];
				bingoCardNumber.set_called(this.$r.nextMinMax(1, 100) < 20);
			}
			this.set_bingoCard2(new $BingoBlockParty_Client_BingoGame_BingoCard(this.$randomNumbers(12, 1, 30)));
			var $t3 = this.get_bingoCard2().get_numbers();
			for (var $t4 = 0; $t4 < $t3.length; $t4++) {
				var bingoCardNumber1 = $t3[$t4];
				bingoCardNumber1.set_called(this.$r.nextMinMax(1, 100) < 20);
			}
			this.set_bingoCard3(new $BingoBlockParty_Client_BingoGame_BingoCard(this.$randomNumbers(12, 1, 30)));
			var $t5 = this.get_bingoCard3().get_numbers();
			for (var $t6 = 0; $t6 < $t5.length; $t6++) {
				var bingoCardNumber2 = $t5[$t6];
				bingoCardNumber2.set_called(this.$r.nextMinMax(1, 100) < 20);
			}
			this.set_bingoCard4(new $BingoBlockParty_Client_BingoGame_BingoCard(this.$randomNumbers(12, 1, 30)));
			var $t7 = this.get_bingoCard4().get_numbers();
			for (var $t8 = 0; $t8 < $t7.length; $t8++) {
				var bingoCardNumber3 = $t7[$t8];
				bingoCardNumber3.set_called(this.$r.nextMinMax(1, 100) < 20);
			}
			this.set_previousNumbersCalled(ss.arrayClone(this.$randomNumbers(28, 1, 30)));
		},
		$randomNumbers: function(count, low, high) {
			var nums = [];
			for (var i = 0; i < count; i++) {
				var next = this.$r.nextMinMax(low, high);
				if (ss.contains(nums, next)) {
					i--;
					continue;
				}
				ss.add(nums, next);
			}
			return Array.prototype.slice.call(nums);
		}
	}, null, [Engine.Interfaces.ILayoutView]);
	ss.initEnum($BingoBlockParty_Client_BingoGame_BingoLayoutState, { purchaseCards: 0, inGame: 1, lobby: 2 });
	ss.initClass($BingoBlockParty_Client_InfoArea_InfoAreaLayout, {
		get_layout: function() {
			return this.$1$LayoutField;
		},
		set_layout: function(value) {
			this.$1$LayoutField = value;
		},
		init: function() {
			this.$mainLayer = this.$_renderer.createLayer(this.$_width, this.$_height, this.get_layout());
			this.$_renderer.addLayer(this.$mainLayer);
			this.set_touchManager(new Engine.TouchManager());
		},
		tick: function(elapsedGameTime) {
		},
		get_touchManager: function() {
			return this.$1$TouchManagerField;
		},
		set_touchManager: function(value) {
			this.$1$TouchManagerField = value;
		},
		render: function(elapsedGameTime) {
			this.$mainLayer.begin();
			this.$mainLayer.save();
			this.$mainLayer.drawRectangle(new Engine.Color(58, 58, 148, 255), 0, 0, this.$_width, this.$_height);
			this.$mainLayer.restore();
			this.$mainLayer.end();
		},
		destroy: function() {
		},
		initLayoutView: function() {
			this.init();
		},
		tickLayoutView: function(elapsedGameTime) {
			this.tick(elapsedGameTime);
		}
	}, null, [Engine.Interfaces.ILayoutView]);
	ss.initClass($BingoBlockParty_Client_LobbyArea_$LobbyRoom, {
		get_$name: function() {
			return this.$1$NameField;
		},
		set_$name: function(value) {
			this.$1$NameField = value;
		}
	});
	ss.initEnum($BingoBlockParty_Client_LobbyArea_HeaderButtonTop, { allRooms: 0, featured: 1, favorites: 2 });
	ss.initClass($BingoBlockParty_Client_LobbyArea_LobbyLayout, {
		get_layout: function() {
			return this.$1$LayoutField;
		},
		set_layout: function(value) {
			this.$1$LayoutField = value;
		},
		get_renderer: function() {
			return this.$1$RendererField;
		},
		set_renderer: function(value) {
			this.$1$RendererField = value;
		},
		get_selectedHeaderButton: function() {
			return this.$1$SelectedHeaderButtonField;
		},
		set_selectedHeaderButton: function(value) {
			this.$1$SelectedHeaderButtonField = value;
		},
		get_touchManager: function() {
			return this.$1$TouchManagerField;
		},
		set_touchManager: function(value) {
			this.$1$TouchManagerField = value;
		},
		init: function() {
			this.$mainLayer = this.get_renderer().createLayer(this.$_width, this.$_height, this.get_layout());
			this.get_renderer().addLayer(this.$mainLayer);
			this.set_touchManager(new Engine.TouchManager());
			this.set_lobbyOverlay(this.get_renderer().getImage('lobby.lobby'));
			this.set_profileOverlay(this.get_renderer().getImage('lobby.profile'));
			this.set_goldCoinOverlay(this.get_renderer().getImage('coinBoxOverlay'));
			this.set_silverCoinOverlay(this.get_renderer().getImage('silverCoinBoxOverlay'));
			this.set_lobbyBackground(this.get_renderer().getImage('lobby.wideBackground'));
			this.set_allRoomsOverlay(this.get_renderer().getImage('lobby.allRooms'));
			this.set_featuredOverlay(this.get_renderer().getImage('lobby.featuredText'));
			this.set_favoritesOverlay(this.get_renderer().getImage('lobby.favoritesText'));
			this.set_eyeOverlay(this.get_renderer().getImage('lobby.eyeBall'));
			this.set_dollarOverlay(this.get_renderer().getImage('lobby.dollarSign'));
			this.set_starOverlay(this.get_renderer().getImage('lobby.favoritesStar'));
			this.set_selectedOverlay(this.get_renderer().getImage('lobby.selectedButton'));
			this.set_createRoomTextOverlay(this.get_renderer().getImage('lobby.createNewRoomText'));
			this.set_orangeButtonOverlay(this.get_renderer().getImage('lobby.orangeButton'));
			this.set_plusOverlay(this.get_renderer().getImage('lobby.plus'));
			this.set_scrollBarOverlay(this.get_renderer().getImage('lobby.scrollBar'));
			this.set_scrollBarButtonOverlay(this.get_renderer().getImage('lobby.scrollButton'));
			this.set_lobbyOverlayPosition(new Engine.Point(45, 14));
			this.set_profileOverlayPosition(new Engine.Point(192, 9));
			this.set_goldCoinOverlayPosition(new Engine.Point(349, 3));
			this.set_silverCoinOverlayPosition(new Engine.Point(610, 3));
			this.set_lobbyBackgroundPosition(new Engine.Point(11, 45));
			this.set_allRoomsButtonPosition(new Engine.Point(30, 55));
			this.set_featuredButtonPosition(new Engine.Point(205, 55));
			this.set_favoritesButtonPosition(new Engine.Point(380, 55));
			this.set_buttonIconOffset(new Engine.Point(25, 25));
			this.set_buttonTextOffset(new Engine.Point(100, 25));
			this.set_createRoomPosition(new Engine.Point(565, 55));
			this.set_createRoomIconOffset(new Engine.Point(25, 25));
			this.set_createRoomTextOffset(new Engine.Point(100, 25));
			this.set_roomsPosition(new Engine.Point(12, 110));
			this.set_roomButtonColor(new Engine.Color(230, 230, 230, 255));
			this.set_alternateRoomButtonColor(new Engine.Color(191, 191, 191, 255));
			this.set_scrollBarPosition(new Engine.Point(this.get_lobbyOverlayPosition().get_x() + this.get_lobbyBackground().get_width() - this.get_scrollBarButtonOverlay().get_center().get_x() - 50, this.get_roomsPosition().get_y()));
			this.set_roomButtonSize(new Engine.Size.$ctor1(745, 90));
			this.set_numberOfRoomsVisible(5);
			this.$createTouches();
			this.get_layout().get_uiManager().createTextBox(new Engine.Rectangle.$ctor2(this.get_createRoomPosition(), this.get_orangeButtonOverlay().get_width(), this.get_orangeButtonOverlay().get_height()), this, null);
			var $t1 = [];
			var $t2 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t2.set_$name('Room Name 1');
			ss.add($t1, $t2);
			null;
			var $t3 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t3.set_$name('Room Name 2');
			ss.add($t1, $t3);
			null;
			var $t4 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t4.set_$name('Room Name 3');
			ss.add($t1, $t4);
			null;
			var $t5 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t5.set_$name('Room Name 4');
			ss.add($t1, $t5);
			null;
			var $t6 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t6.set_$name('Room Name 5');
			ss.add($t1, $t6);
			null;
			var $t7 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t7.set_$name('Room Name 6');
			ss.add($t1, $t7);
			null;
			var $t8 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t8.set_$name('Room Name 7');
			ss.add($t1, $t8);
			null;
			var $t9 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t9.set_$name('Room Name 8');
			ss.add($t1, $t9);
			null;
			var $t10 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t10.set_$name('Room Name 9');
			ss.add($t1, $t10);
			null;
			var $t11 = new $BingoBlockParty_Client_LobbyArea_$LobbyRoom();
			$t11.set_$name('Room Name 10');
			ss.add($t1, $t11);
			null;
			this.set_$rooms($t1);
		},
		$createTouches: function() {
			this.get_touchManager().pushClickRect(new Engine.TouchRect(new Engine.Rectangle.$ctor2(this.get_allRoomsButtonPosition(), this.get_selectedOverlay().get_width(), this.get_selectedOverlay().get_height()), ss.mkdel(this, function(eventType, touchBox, x, y, collide) {
				switch (eventType) {
					case 0: {
						if (collide) {
							this.set_selectedHeaderButton(0);
						}
						break;
					}
				}
				return false;
			}), null));
			this.get_touchManager().pushClickRect(new Engine.TouchRect(new Engine.Rectangle.$ctor2(this.get_featuredButtonPosition(), this.get_selectedOverlay().get_width(), this.get_selectedOverlay().get_height()), ss.mkdel(this, function(eventType1, touchBox1, x1, y1, collide1) {
				switch (eventType1) {
					case 0: {
						if (collide1) {
							this.set_selectedHeaderButton(1);
						}
						break;
					}
				}
				return false;
			}), null));
			this.get_touchManager().pushClickRect(new Engine.TouchRect(new Engine.Rectangle.$ctor2(this.get_favoritesButtonPosition(), this.get_selectedOverlay().get_width(), this.get_selectedOverlay().get_height()), ss.mkdel(this, function(eventType2, touchBox2, x2, y2, collide2) {
				switch (eventType2) {
					case 0: {
						if (collide2) {
							this.set_selectedHeaderButton(2);
						}
						break;
					}
				}
				return false;
			}), null));
			this.get_touchManager().pushClickRect(new Engine.TouchRect(new Engine.Rectangle.$ctor2(this.get_createRoomPosition(), this.get_orangeButtonOverlay().get_width(), this.get_orangeButtonOverlay().get_height()), ss.mkdel(this, function(eventType3, touchBox3, x3, y3, collide3) {
				switch (eventType3) {
					case 0: {
						if (collide3) {
							this.set_selectedHeaderButton(1);
						}
						break;
					}
				}
				return false;
			}), null));
		},
		get_numberOfRoomsVisible: function() {
			return this.$1$NumberOfRoomsVisibleField;
		},
		set_numberOfRoomsVisible: function(value) {
			this.$1$NumberOfRoomsVisibleField = value;
		},
		get_roomButtonSize: function() {
			return this.$1$RoomButtonSizeField;
		},
		set_roomButtonSize: function(value) {
			this.$1$RoomButtonSizeField = value;
		},
		get_roomsPosition: function() {
			return this.$1$RoomsPositionField;
		},
		set_roomsPosition: function(value) {
			this.$1$RoomsPositionField = value;
		},
		get_plusOverlay: function() {
			return this.$1$PlusOverlayField;
		},
		set_plusOverlay: function(value) {
			this.$1$PlusOverlayField = value;
		},
		get_orangeButtonOverlay: function() {
			return this.$1$OrangeButtonOverlayField;
		},
		set_orangeButtonOverlay: function(value) {
			this.$1$OrangeButtonOverlayField = value;
		},
		get_createRoomTextOverlay: function() {
			return this.$1$CreateRoomTextOverlayField;
		},
		set_createRoomTextOverlay: function(value) {
			this.$1$CreateRoomTextOverlayField = value;
		},
		get_selectedOverlay: function() {
			return this.$1$SelectedOverlayField;
		},
		set_selectedOverlay: function(value) {
			this.$1$SelectedOverlayField = value;
		},
		get_allRoomsOverlay: function() {
			return this.$1$AllRoomsOverlayField;
		},
		set_allRoomsOverlay: function(value) {
			this.$1$AllRoomsOverlayField = value;
		},
		get_featuredOverlay: function() {
			return this.$1$FeaturedOverlayField;
		},
		set_featuredOverlay: function(value) {
			this.$1$FeaturedOverlayField = value;
		},
		get_favoritesOverlay: function() {
			return this.$1$FavoritesOverlayField;
		},
		set_favoritesOverlay: function(value) {
			this.$1$FavoritesOverlayField = value;
		},
		get_eyeOverlay: function() {
			return this.$1$EyeOverlayField;
		},
		set_eyeOverlay: function(value) {
			this.$1$EyeOverlayField = value;
		},
		get_dollarOverlay: function() {
			return this.$1$DollarOverlayField;
		},
		set_dollarOverlay: function(value) {
			this.$1$DollarOverlayField = value;
		},
		get_starOverlay: function() {
			return this.$1$StarOverlayField;
		},
		set_starOverlay: function(value) {
			this.$1$StarOverlayField = value;
		},
		get_lobbyOverlay: function() {
			return this.$1$LobbyOverlayField;
		},
		set_lobbyOverlay: function(value) {
			this.$1$LobbyOverlayField = value;
		},
		get_profileOverlay: function() {
			return this.$1$ProfileOverlayField;
		},
		set_profileOverlay: function(value) {
			this.$1$ProfileOverlayField = value;
		},
		get_goldCoinOverlay: function() {
			return this.$1$GoldCoinOverlayField;
		},
		set_goldCoinOverlay: function(value) {
			this.$1$GoldCoinOverlayField = value;
		},
		get_silverCoinOverlay: function() {
			return this.$1$SilverCoinOverlayField;
		},
		set_silverCoinOverlay: function(value) {
			this.$1$SilverCoinOverlayField = value;
		},
		get_lobbyBackground: function() {
			return this.$1$LobbyBackgroundField;
		},
		set_lobbyBackground: function(value) {
			this.$1$LobbyBackgroundField = value;
		},
		get_scrollBarButtonOverlay: function() {
			return this.$1$ScrollBarButtonOverlayField;
		},
		set_scrollBarButtonOverlay: function(value) {
			this.$1$ScrollBarButtonOverlayField = value;
		},
		get_scrollBarOverlay: function() {
			return this.$1$ScrollBarOverlayField;
		},
		set_scrollBarOverlay: function(value) {
			this.$1$ScrollBarOverlayField = value;
		},
		get_goldCoinOverlayPosition: function() {
			return this.$1$GoldCoinOverlayPositionField;
		},
		set_goldCoinOverlayPosition: function(value) {
			this.$1$GoldCoinOverlayPositionField = value;
		},
		get_silverCoinOverlayPosition: function() {
			return this.$1$SilverCoinOverlayPositionField;
		},
		set_silverCoinOverlayPosition: function(value) {
			this.$1$SilverCoinOverlayPositionField = value;
		},
		get_profileOverlayPosition: function() {
			return this.$1$ProfileOverlayPositionField;
		},
		set_profileOverlayPosition: function(value) {
			this.$1$ProfileOverlayPositionField = value;
		},
		get_lobbyOverlayPosition: function() {
			return this.$1$LobbyOverlayPositionField;
		},
		set_lobbyOverlayPosition: function(value) {
			this.$1$LobbyOverlayPositionField = value;
		},
		get_lobbyBackgroundPosition: function() {
			return this.$1$LobbyBackgroundPositionField;
		},
		set_lobbyBackgroundPosition: function(value) {
			this.$1$LobbyBackgroundPositionField = value;
		},
		get_favoritesButtonPosition: function() {
			return this.$1$FavoritesButtonPositionField;
		},
		set_favoritesButtonPosition: function(value) {
			this.$1$FavoritesButtonPositionField = value;
		},
		get_featuredButtonPosition: function() {
			return this.$1$FeaturedButtonPositionField;
		},
		set_featuredButtonPosition: function(value) {
			this.$1$FeaturedButtonPositionField = value;
		},
		get_allRoomsButtonPosition: function() {
			return this.$1$AllRoomsButtonPositionField;
		},
		set_allRoomsButtonPosition: function(value) {
			this.$1$AllRoomsButtonPositionField = value;
		},
		get_createRoomPosition: function() {
			return this.$1$CreateRoomPositionField;
		},
		set_createRoomPosition: function(value) {
			this.$1$CreateRoomPositionField = value;
		},
		get_buttonIconOffset: function() {
			return this.$1$ButtonIconOffsetField;
		},
		set_buttonIconOffset: function(value) {
			this.$1$ButtonIconOffsetField = value;
		},
		get_buttonTextOffset: function() {
			return this.$1$ButtonTextOffsetField;
		},
		set_buttonTextOffset: function(value) {
			this.$1$ButtonTextOffsetField = value;
		},
		get_createRoomTextOffset: function() {
			return this.$1$CreateRoomTextOffsetField;
		},
		set_createRoomTextOffset: function(value) {
			this.$1$CreateRoomTextOffsetField = value;
		},
		get_createRoomIconOffset: function() {
			return this.$1$CreateRoomIconOffsetField;
		},
		set_createRoomIconOffset: function(value) {
			this.$1$CreateRoomIconOffsetField = value;
		},
		get_roomButtonColor: function() {
			return this.$1$RoomButtonColorField;
		},
		set_roomButtonColor: function(value) {
			this.$1$RoomButtonColorField = value;
		},
		get_alternateRoomButtonColor: function() {
			return this.$1$AlternateRoomButtonColorField;
		},
		set_alternateRoomButtonColor: function(value) {
			this.$1$AlternateRoomButtonColorField = value;
		},
		get_scrollBarPosition: function() {
			return this.$1$ScrollBarPositionField;
		},
		set_scrollBarPosition: function(value) {
			this.$1$ScrollBarPositionField = value;
		},
		tick: function(elapsedGameTime) {
		},
		render: function(elapsedGameTime) {
			this.$mainLayer.begin();
			this.$mainLayer.save();
			this.$mainLayer.drawRectangle(new Engine.Color(0, 0, 0, 255), 0, 0, this.$_width, this.$_height);
			this.$mainLayer.drawImage$2(this.get_lobbyOverlay(), this.get_lobbyOverlayPosition().get_x(), this.get_lobbyOverlayPosition().get_y());
			this.$mainLayer.drawImage$2(this.get_profileOverlay(), this.get_profileOverlayPosition().get_x(), this.get_profileOverlayPosition().get_y());
			this.$mainLayer.drawImage$2(this.get_goldCoinOverlay(), this.get_goldCoinOverlayPosition().get_x(), this.get_goldCoinOverlayPosition().get_y());
			this.$mainLayer.drawImage$2(this.get_silverCoinOverlay(), this.get_silverCoinOverlayPosition().get_x(), this.get_silverCoinOverlayPosition().get_y());
			this.$mainLayer.drawImage$2(this.get_lobbyBackground(), this.get_lobbyBackgroundPosition().get_x(), this.get_lobbyBackgroundPosition().get_y());
			this.$headerButtonGroup(this.$mainLayer, 0, this.get_selectedHeaderButton() === 0);
			this.$headerButtonGroup(this.$mainLayer, 1, this.get_selectedHeaderButton() === 1);
			this.$headerButtonGroup(this.$mainLayer, 2, this.get_selectedHeaderButton() === 2);
			this.$createRoomButtonGroup(this.$mainLayer);
			this.$rooms(this.$mainLayer, this.get_roomButtonSize().get_width(), this.get_roomButtonSize().get_height());
			this.$mainLayer.drawImage$2(this.get_scrollBarOverlay(), this.get_scrollBarPosition().get_x(), this.get_scrollBarPosition().get_y());
			this.$mainLayer.drawImage$2(this.get_scrollBarButtonOverlay(), this.get_scrollBarPosition().get_x() + 4, this.get_scrollBarPosition().get_y() + this.get_scrollBarButtonPosition());
			this.$mainLayer.restore();
			this.$mainLayer.end();
		},
		get_$rooms: function() {
			return this.$1$RoomsField;
		},
		set_$rooms: function(value) {
			this.$1$RoomsField = value;
		},
		get_topRoomIndex: function() {
			return this.$1$TopRoomIndexField;
		},
		set_topRoomIndex: function(value) {
			this.$1$TopRoomIndexField = value;
		},
		get_scrollBarButtonPosition: function() {
			if (this.$c++ % 20 === 0) {
				var i = this.get_$rooms().length + 1 - this.get_numberOfRoomsVisible();
				if (i > 0) {
					this.set_topRoomIndex(this.get_topRoomIndex() + 1);
					this.set_topRoomIndex(this.get_topRoomIndex() % i);
				}
			}
			var height = this.get_scrollBarOverlay().get_height() - this.get_scrollBarButtonOverlay().get_height();
			return ss.Int32.div(height, this.get_$rooms().length - this.get_numberOfRoomsVisible()) * this.get_topRoomIndex();
		},
		destroy: function() {
		},
		initLayoutView: function() {
			this.init();
		},
		tickLayoutView: function(elapsedGameTime) {
			this.tick(elapsedGameTime);
		},
		$headerButtonGroup: function(layer, buttonType, selected) {
			var buttonLoc;
			var icon;
			var text;
			switch (buttonType) {
				case 0: {
					buttonLoc = this.get_allRoomsButtonPosition();
					icon = this.get_eyeOverlay();
					text = this.get_allRoomsOverlay();
					break;
				}
				case 1: {
					buttonLoc = this.get_featuredButtonPosition();
					icon = this.get_dollarOverlay();
					text = this.get_featuredOverlay();
					break;
				}
				case 2: {
					buttonLoc = this.get_favoritesButtonPosition();
					icon = this.get_starOverlay();
					text = this.get_favoritesOverlay();
					break;
				}
				default: {
					throw new ss.ArgumentOutOfRangeException('buttonType');
				}
			}
			layer.save();
			layer.translate$1(buttonLoc.get_x(), buttonLoc.get_y());
			if (selected) {
				layer.drawImage$2(this.get_selectedOverlay(), 0, 0);
			}
			layer.drawImage$4(icon, this.get_buttonIconOffset().get_x(), this.get_buttonIconOffset().get_y(), true);
			layer.drawImage$4(text, this.get_buttonTextOffset().get_x(), this.get_buttonTextOffset().get_y(), true);
			layer.restore();
		},
		$createRoomButtonGroup: function(layer) {
			layer.save();
			layer.translate$1(this.get_createRoomPosition().get_x(), this.get_createRoomPosition().get_y());
			layer.drawImage$2(this.get_orangeButtonOverlay(), 0, 0);
			layer.drawImage$4(this.get_plusOverlay(), this.get_createRoomIconOffset().get_x(), this.get_createRoomIconOffset().get_y(), true);
			layer.drawImage$4(this.get_createRoomTextOverlay(), this.get_createRoomTextOffset().get_x(), this.get_createRoomTextOffset().get_y(), true);
			layer.restore();
		},
		$rooms: function(layer, buttonWidth, buttonHeight) {
			layer.save();
			layer.translate$1(this.get_roomsPosition().get_x(), this.get_roomsPosition().get_y());
			for (var i = 0; i < this.get_numberOfRoomsVisible(); i++) {
				layer.save();
				layer.translate$1(0, buttonHeight * i);
				layer.drawRectangle(((i % 2 === 0) ? this.get_roomButtonColor() : this.get_alternateRoomButtonColor()), 0, 0, buttonWidth, buttonHeight);
				if (i + this.get_topRoomIndex() < this.get_$rooms().length) {
					var currentRoom = this.get_$rooms()[i + this.get_topRoomIndex()];
					layer.drawString('lobby.font', 'Hello ' + currentRoom.get_$name(), 50, 50);
				}
				layer.restore();
			}
			layer.restore();
		}
	}, null, [Engine.Interfaces.ILayoutView]);
	ss.initClass($BingoBlockParty_Client_PeopleArea_PeopleAreaLayout, {
		get_layout: function() {
			return this.$1$LayoutField;
		},
		set_layout: function(value) {
			this.$1$LayoutField = value;
		},
		init: function() {
			this.$mainLayer = this.$_renderer.createLayer(this.$_width, this.$_height, this.get_layout());
			this.$_renderer.addLayer(this.$mainLayer);
			this.set_redWalkway(this.$_renderer.getImage('walkway.red'));
			this.set_barrier(this.$_renderer.getImage('walkway.barrier'));
			this.set_barrierPosition(new Engine.Point(-5, 0));
			this.set_walkwayPosition(new Engine.Point(-5, this.get_barrier().get_height() - 2));
			this.set_touchManager(new Engine.TouchManager());
		},
		get_barrierPosition: function() {
			return this.$1$BarrierPositionField;
		},
		set_barrierPosition: function(value) {
			this.$1$BarrierPositionField = value;
		},
		get_walkwayPosition: function() {
			return this.$1$WalkwayPositionField;
		},
		set_walkwayPosition: function(value) {
			this.$1$WalkwayPositionField = value;
		},
		get_barrier: function() {
			return this.$1$BarrierField;
		},
		set_barrier: function(value) {
			this.$1$BarrierField = value;
		},
		get_redWalkway: function() {
			return this.$1$RedWalkwayField;
		},
		set_redWalkway: function(value) {
			this.$1$RedWalkwayField = value;
		},
		tick: function(elapsedGameTime) {
		},
		get_touchManager: function() {
			return this.$1$TouchManagerField;
		},
		set_touchManager: function(value) {
			this.$1$TouchManagerField = value;
		},
		render: function(elapsedGameTime) {
			this.$mainLayer.begin();
			this.$mainLayer.clear();
			this.$mainLayer.save();
			this.$mainLayer.translate$1(0, 61);
			this.$mainLayer.drawImage(this.get_barrier(), this.get_barrierPosition());
			this.$mainLayer.drawImage(this.get_redWalkway(), this.get_walkwayPosition());
			this.$ticking += 2;
			this.$mainLayer.save();
			var person = this.$_renderer.getImage('female.blonde.front');
			this.$mainLayer.translate$1((-this.$ticking + this.$_width * 100) % this.$_width, 50);
			var rotate;
			rotate = ((this.$ticking % 30 < 15) ? 0.07 : -0.07);
			this.$mainLayer.drawImage$5(person, ss.Int32.div(-person.get_width(), 2), ss.Int32.div(-person.get_height(), 2), rotate, person.get_center());
			this.$mainLayer.restore();
			this.$mainLayer.save();
			person = this.$_renderer.getImage('male.hat.front');
			this.$mainLayer.translate$1((this.$ticking + this.$_width * 100) % this.$_width, 100);
			rotate = ((this.$ticking % 30 < 15) ? 0.07 : -0.07);
			this.$mainLayer.setDrawingEffects(1);
			this.$mainLayer.drawImage$5(person, ss.Int32.div(-person.get_width(), 2), ss.Int32.div(-person.get_height(), 2), rotate, person.get_center());
			this.$mainLayer.restore();
			this.$mainLayer.restore();
			this.$mainLayer.end();
		},
		destroy: function() {
		},
		initLayoutView: function() {
			this.init();
		},
		tickLayoutView: function(elapsedGameTime) {
			this.tick(elapsedGameTime);
		}
	}, null, [Engine.Interfaces.ILayoutView]);
	ss.initClass($BingoBlockParty_Client_Utils_ClientSwitcher, {});
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.red = new Engine.Color(249, 27, 27, 255);
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.green = new Engine.Color(89, 253, 31, 255);
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.blue = new Engine.Color(39, 107, 247, 255);
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.yellow = new Engine.Color(241, 248, 62, 255);
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.purple = new Engine.Color(237, 20, 245, 255);
	$BingoBlockParty_Client_BingoGame_BingoCardNumber.black = new Engine.Color(0, 0, 0, 255);
	$BingoBlockParty_Client_BingoGame_BingoCard.numbersWide = 4;
	$BingoBlockParty_Client_BingoGame_BingoCard.numbersHigh = 3;
})();
