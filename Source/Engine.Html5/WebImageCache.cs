using System;
using System.Collections.Generic;

namespace Engine.Html5.Web
{
    public class WebImageCache
    {
        private readonly JsDictionary<string, WebImage> textures;

        public WebImageCache()
        {
            textures = new JsDictionary<string, WebImage>();
        }
        public WebImage GetImage(string imageName)
        {
            return textures[imageName];
        }
        public void CreateImage(string imageName, string imagePath, Point center, Action ready)
        {
            textures[imageName]=new WebImage(imagePath, center, ready);
        }

    }
}