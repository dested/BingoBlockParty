using System.Collections.Generic;

namespace Engine.Xna
{
    public static class EnumerableExtensions
    {
        public static T Last<T>(this IEnumerable<T> items)
        {
            T last = default(T);
            foreach (var item in items)
            {
                last = item;
            }
            return last;
        }
        public static T First<T>(this IEnumerable<T> items)
        {
            foreach (var item in items)
            {
                return item;
            }
            return default(T);
        }
        public static T ElementAt<T>(this IEnumerable<T> items,int index)
        {
            int i = 0;
            foreach (var item in items)
            {
                if (i == index)
                {
                    return item;
                }
                i++;
            }
            return default(T);
        }
    }
}