using Engine.Interfaces;

namespace Engine.Xna
{
    public class XnaContextSettings
    {
        public int Left { get; set; }
        public int Top { get; set; }
        public DrawingEffects DrawingEffects { get; set; }

        public XnaContextSettings Clone()
        {
            return new XnaContextSettings()
            {
                Left = this.Left,
                Top = this.Top,
                DrawingEffects = this.DrawingEffects

            };
        }
    }
}