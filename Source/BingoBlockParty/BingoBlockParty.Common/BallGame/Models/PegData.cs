namespace BingoBlockParty.Common.BallGame.Models
{
    public class PegData
    {
        public int X { get; set; }
        public int Y { get; set; }
        public PegType PegType { get; set; }

        public PegData(int x, int y, PegType pegType)
        {
            X = x;
            Y = y;
            PegType = pegType;
        }
    }
}