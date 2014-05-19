using System.Collections.Generic;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;

namespace Engine.Xna
{
    public class XnaImageCache
    {
        private readonly ContentManager content;
        private readonly Dictionary<string, XnaImage> textures;

        public XnaImageCache(ContentManager content)
        {
            this.content = content;
            textures = new Dictionary<string, XnaImage>();

        }

        public XnaImage GetImage(string imageName)
        {
            return textures[imageName];
        }
        public void CreateImage(string imageName, string imagePath, Point center = null)
        {
            var assetName = imagePath;

#if WINDOWS_PHONE || WINDOWS
            assetName = assetName.Replace(".png", "");
#endif
            var texture2D = content.Load<Texture2D>(assetName);
            textures.Add(imageName, new XnaImage(texture2D, center));
        }
    }
}