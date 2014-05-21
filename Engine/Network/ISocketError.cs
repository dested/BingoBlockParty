using System;

namespace Engine
{
    public interface ISocketError
    {
        Exception Exception { get; set; }
        string Message { get; set; }
    }
}