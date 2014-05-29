using System.Collections.Generic;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;

namespace Engine.Xna
{
    public class XnaAssetCache
    {
        private readonly ContentManager content;
        private readonly Dictionary<string, XnaImage> textures;
        private readonly Dictionary<string, SpriteFont> fonts;

        public XnaAssetCache(ContentManager content)
        {
            this.content = content;
            textures = new Dictionary<string, XnaImage>();
            fonts=new Dictionary<string, SpriteFont>();
        }

        public XnaImage GetImage(string imageName)
        {
            return textures[imageName];
        }
        public SpriteFont GetFont(string fontName)
        {
            return null;
            return fonts[fontName];
        }

        public void CreateImage(string imageName, string imagePath, Point center = null)
        {
            var assetName = imagePath;
#if WINDOWS_PHONE || WINDOWS || WINDOWS_STORE
            assetName = assetName.Replace(".png", "");
#endif
            var texture2D = content.Load<Texture2D>(assetName);
            textures.Add(imageName, new XnaImage(texture2D, center));
        }

        public void CreateFont(string fontName, string fontPath)
        {
//            var font = content.Load<SpriteFont>("fonts/"+fontPath);
//            fonts.Add(fontName, font);
        }
    }
}