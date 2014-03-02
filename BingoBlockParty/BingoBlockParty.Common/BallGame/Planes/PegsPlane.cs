using System.Collections.Generic;
using BingoBlockParty.Common.BallGame.Models;
using BingoBlockParty.Common.BallGame.Pieces;

namespace BingoBlockParty.Common.BallGame.Planes
{
    public class PegsPlane : IPlane
    {
        public GameBoard GameBoard { get; set; }
        public List<Peg> Pegs { get; set; } 
        public PegsPlane(GameBoard gameBoard)
        {
            GameBoard = gameBoard;
            Pegs = new List<Peg>();
        }


        public virtual void Init()
        {
        }

        public void LoadPegs(List<PegData> pegLocs)
        {
            Pegs = new List<Peg>();
            foreach (var pegData in pegLocs)
            {
                Peg peg = createPeg( pegData.X, pegData.Y, pegData.PegType);
                Pegs.Add(peg);
                peg.Init();
            }
        }

        public virtual Peg createPeg( int x, int y, PegType pegType)
        {
            return new Peg(GameBoard,x,y,pegType);
        }



        public virtual void RoundOver(RoundOverState state)
        {
            for (var i = Pegs.Count - 1; i >= 0; i--)
            {
                var peg = Pegs[i];
                peg.RoundOver(state);
                if (state==RoundOverState.Post && peg.Hit)
                {
                    this.GameBoard.GameModel.Pegs.RemoveAt(i);
                }
            }
        }

        public virtual void Tick()
        {
        }
    }
}