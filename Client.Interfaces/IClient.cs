using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Engine.Interfaces;

namespace Client.Interfaces
{
    public interface IClient
    {
        IGame Game { get; set; }
        void Init(IRenderer renderer);
        void Draw();
        void Tick(/*gametime*/);
    }

    public interface IGame
    {
        void Init(IRenderer renderer);
        void Draw();
        void Tick(/*gametime*/);
    }
}
