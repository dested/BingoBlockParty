namespace BingoBlockParty.Common.BallGame.Models
{
    public interface IPlane
    {
        void Init();
        void RoundOver(RoundOverState state);
        void Tick();
    }
}