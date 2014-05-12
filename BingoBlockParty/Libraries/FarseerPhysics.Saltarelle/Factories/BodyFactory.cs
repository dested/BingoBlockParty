using System;
using System.Collections.Generic;
using FarseerPhysics.Collision.Shapes;
using FarseerPhysics.Common;
using FarseerPhysics.Common.Decomposition;
using FarseerPhysics.Dynamics;

namespace FarseerPhysics.Factories
{
    public static class BodyFactory
    {
        public static Body CreateBody(World world, Vector2 position = null, float rotation = 0, BodyType bodyType = BodyType.Static, object userData = null)
        {
            if (position == null) position = new Vector2();
            return new Body(world, position, rotation, bodyType, userData);
        }
          

 
 
 
    }
}