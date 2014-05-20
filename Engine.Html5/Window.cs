using System;
using System.Runtime.CompilerServices;

namespace Engine.Html5.Web
{
    public class Window
    {
        [InlineCode("window.setTimeout({action},{timeout});")]
        public static void SetTimeout(Action action, int timeout)
        {

        }
        [InlineCode("window.setInterval({action},{timeout});")]
        public static void SetInterval(Action action, int timeout)
        {

        }
    }
}