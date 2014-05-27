namespace Engine.Interfaces
{
    public interface IRenderer
    {
        ILayer CreateLayer(int width, int height,ILayout layout);
        void AddLayer(ILayer layer);
        IImage GetImage(string imageName);
        void CreateImage(string imageName, string imagePath, Point center = null);
        void CreateFont(string fontName, string fontPath);

         

    }
}
