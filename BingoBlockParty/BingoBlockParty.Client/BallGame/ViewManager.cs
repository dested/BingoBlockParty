using System;
using BingoBlockParty.Client.Utils;
using BingoBlockParty.Common.BallGame.Models;
using Engine.Interfaces;

namespace BingoBlockParty.Client.BallGame
{
    public class ViewManager
    {
        public ClientGameBoard GameBoard { get; set; }
        public int X { get; set; }
        public int Y { get; set; }

        public int ViewWidth { get; set; }
        public int ViewHeight { get; set; }
        public Size PaddingBox { get; set; }

        public ViewManager(ClientGameBoard gameBoard)
        {
            GameBoard = gameBoard;
            ViewWidth = gameBoard.GameModel.Client().CanvasWidth;
            ViewHeight = gameBoard.GameModel.Client().CanvasHeight;
            PaddingBox = new Size(100, 100);
        }

        public void Set(int x, int y)
        {
            X = x;
            Y = y;
        }
        public void TranslateContext(ILayer layer)
        {
            layer.Translate(-X, -Y);
        }
       private int median(int[] xs)
        {
            Array.Sort(xs);
            return xs[xs.Length / 2];
        }

       public void Center(int x, int y)
       {
           var proposedX = median(new[] { x - ViewWidth / 2, x - PaddingBox.Width, x + PaddingBox.Width - ViewWidth });
           var proposedY = median(new[] { y - ViewHeight / 2, x - PaddingBox.Height, x + PaddingBox.Height - ViewHeight });

           X = median(new[] { proposedX, 0, GameBoard.GameModel.BoardWidth - ViewWidth });
           Y = median(new[] { proposedY, 0, GameBoard.GameModel.BoardHeight - ViewHeight });
       }

     }
}