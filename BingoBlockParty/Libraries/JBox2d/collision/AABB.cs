/*******************************************************************************
 * Copyright (c) 2013, Daniel Murphy
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 	* Redistributions of source code must retain the above copyright notice,
 * 	  this list of conditions and the following disclaimer.
 * 	* Redistributions in binary form must reproduce the above copyright notice,
 * 	  this list of conditions and the following disclaimer in the documentation
 * 	  and/or other materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY out_ OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 ******************************************************************************/


using org.jbox2d.common;
using org.jbox2d.pooling;
using org.jbox2d.pooling.normal;

/** An axis-aligned bounding box. */

namespace org.jbox2d.collision
{
    public class AABB
    {
        /** Bottom left vertex of bounding box. */
        public readonly Vec2 lowerBound;
        /** Top right vertex of bounding box. */
        public readonly Vec2 upperBound;

        /**
   * Creates the default object, with vertices at 0,0 and 0,0.
   */

        public AABB()
        {
            lowerBound = new Vec2();
            upperBound = new Vec2();
        }

        /**
   * Copies from the given object
   * 
   * @param copy the object to copy from
   */

        public AABB(AABB copy)
            : this(copy.lowerBound, copy.upperBound)
        {
        }

        /**
   * Creates an AABB object using the given bounding vertices.
   * 
   * @param lowerVertex the bottom left vertex of the bounding box
   * @param maxVertex the top right vertex of the bounding box
   */

        public AABB(Vec2 lowerVertex, Vec2 upperVertex)
        {
            lowerBound = lowerVertex.clone(); // clone to be safe
            upperBound = upperVertex.clone();
        }

        /**
   * Sets this object from the given object
   * 
   * @param aabb the object to copy from
   */

        public void set(AABB aabb)
        {
            Vec2 v = aabb.lowerBound;
            lowerBound.x = v.x;
            lowerBound.y = v.y;
            Vec2 v1 = aabb.upperBound;
            upperBound.x = v1.x;
            upperBound.y = v1.y;
        }

        /** Verify that the bounds are sorted */

        public bool isValid()
        {
            double dx = upperBound.x - lowerBound.x;
            if (dx < 0d)
            {
                return false;
            }
            double dy = upperBound.y - lowerBound.y;
            if (dy < 0)
            {
                return false;
            }
            return lowerBound.isValid() && upperBound.isValid();
        }

        /**
   * Get the center of the AABB
   * 
   * @return
   */

        public Vec2 getCenter()
        {
            var center = new Vec2(lowerBound);
            center.addLocal(upperBound);
            center.mulLocal(.5d);
            return center;
        }

        public void getCenterToOut(Vec2 out_)
        {
            out_.x = (lowerBound.x + upperBound.x)*.5d;
            out_.y = (lowerBound.y + upperBound.y)*.5d;
        }

        /**
   * Get the extents of the AABB (half-widths).
   * 
   * @return
   */

        public Vec2 getExtents()
        {
            var center = new Vec2(upperBound);
            center.subLocal(lowerBound);
            center.mulLocal(.5d);
            return center;
        }

        public void getExtentsToOut(Vec2 out_)
        {
            out_.x = (upperBound.x - lowerBound.x)*.5d;
            out_.y = (upperBound.y - lowerBound.y)*.5d; // thanks FDN1
        }

        public void getVertices(Vec2[] argRay)
        {
            argRay[0].set(lowerBound);
            argRay[1].set(lowerBound);
            argRay[1].x += upperBound.x - lowerBound.x;
            argRay[2].set(upperBound);
            argRay[3].set(upperBound);
            argRay[3].x -= upperBound.x - lowerBound.x;
        }

        /**
   * Combine two AABBs into this one.
   * 
   * @param aabb1
   * @param aab
   */

        public void combine(AABB aabb1, AABB aab)
        {
            lowerBound.x = aabb1.lowerBound.x < aab.lowerBound.x ? aabb1.lowerBound.x : aab.lowerBound.x;
            lowerBound.y = aabb1.lowerBound.y < aab.lowerBound.y ? aabb1.lowerBound.y : aab.lowerBound.y;
            upperBound.x = aabb1.upperBound.x > aab.upperBound.x ? aabb1.upperBound.x : aab.upperBound.x;
            upperBound.y = aabb1.upperBound.y > aab.upperBound.y ? aabb1.upperBound.y : aab.upperBound.y;
        }

        /**
   * Gets the perimeter length
   * 
   * @return
   */

        public double getPerimeter()
        {
            return 2.0d*(upperBound.x - lowerBound.x + upperBound.y - lowerBound.y);
        }

        /**
   * Combines another aabb with this one
   * 
   * @param aabb
   */

        public void combine(AABB aabb)
        {
            lowerBound.x = lowerBound.x < aabb.lowerBound.x ? lowerBound.x : aabb.lowerBound.x;
            lowerBound.y = lowerBound.y < aabb.lowerBound.y ? lowerBound.y : aabb.lowerBound.y;
            upperBound.x = upperBound.x > aabb.upperBound.x ? upperBound.x : aabb.upperBound.x;
            upperBound.y = upperBound.y > aabb.upperBound.y ? upperBound.y : aabb.upperBound.y;
        }

        /**
   * Does this aabb contain the provided AABB.
   * 
   * @return
   */

        public bool contains(AABB aabb)
        {
            /*
     * bool result = true; result = result && lowerBound.x <= aabb.lowerBound.x; result = result
     * && lowerBound.y <= aabb.lowerBound.y; result = result && aabb.upperBound.x <= upperBound.x;
     * result = result && aabb.upperBound.y <= upperBound.y; return result;
     */
            // djm: faster putting all of them together, as if one is false we leave the logic
            // early
            return lowerBound.x > aabb.lowerBound.x && lowerBound.y > aabb.lowerBound.y
                   && aabb.upperBound.x > upperBound.x && aabb.upperBound.y > upperBound.y;
        }

        /**
   * @deprecated please use {@link #raycast(RayCastOutput, RayCastInput, IWorldPool)} for better
   *             performance
   * @param output
   * @param input
   * @return
   */

        public bool raycast(RayCastOutput output, RayCastInput input)
        {
            return raycast(output, input, new DefaultWorldPool(4, 4));
        }

        /**
   * From Real-time Collision Detection, p179.
   * 
   * @param output
   * @param input
   */

        public bool raycast(RayCastOutput output, RayCastInput input,
            IWorldPool argPool)
        {
            double tmin = -double.MaxValue;
            double tmax = double.MaxValue;

            Vec2 p = argPool.popVec2();
            Vec2 d = argPool.popVec2();
            Vec2 absD = argPool.popVec2();
            Vec2 normal = argPool.popVec2();

            p.set(input.p1);
            d.set(input.p2).subLocal(input.p1);
            Vec2.absToOut(d, absD);

            // x then y
            if (absD.x < Settings.EPSILON)
            {
                // Parallel.
                if (p.x < lowerBound.x || upperBound.x < p.x)
                {
                    argPool.pushVec2(4);
                    return false;
                }
            }
            else
            {
                double inv_d = 1.0d/d.x;
                double t1 = (lowerBound.x - p.x)*inv_d;
                double t2 = (upperBound.x - p.x)*inv_d;

                // Sign of the normal vector.
                double s = -1.0d;

                if (t1 > t2)
                {
                    double temp = t1;
                    t1 = t2;
                    t2 = temp;
                    s = 1.0d;
                }

                // Push the min up
                if (t1 > tmin)
                {
                    normal.setZero();
                    normal.x = s;
                    tmin = t1;
                }

                // Pull the max down
                tmax = MathUtils.min(tmax, t2);

                if (tmin > tmax)
                {
                    argPool.pushVec2(4);
                    return false;
                }
            }

            if (absD.y < Settings.EPSILON)
            {
                // Parallel.
                if (p.y < lowerBound.y || upperBound.y < p.y)
                {
                    argPool.pushVec2(4);
                    return false;
                }
            }
            else
            {
                double inv_d = 1.0d/d.y;
                double t1 = (lowerBound.y - p.y)*inv_d;
                double t2 = (upperBound.y - p.y)*inv_d;

                // Sign of the normal vector.
                double s = -1.0d;

                if (t1 > t2)
                {
                    double temp = t1;
                    t1 = t2;
                    t2 = temp;
                    s = 1.0d;
                }

                // Push the min up
                if (t1 > tmin)
                {
                    normal.setZero();
                    normal.y = s;
                    tmin = t1;
                }

                // Pull the max down
                tmax = MathUtils.min(tmax, t2);

                if (tmin > tmax)
                {
                    argPool.pushVec2(4);
                    return false;
                }
            }

            // Does the ray start inside the box?
            // Does the ray intersect beyond the max fraction?
            if (tmin < 0.0d || input.maxFraction < tmin)
            {
                argPool.pushVec2(4);
                return false;
            }

            // Intersection.
            output.fraction = tmin;
            output.normal.x = normal.x;
            output.normal.y = normal.y;
            argPool.pushVec2(4);
            return true;
        }

        public static bool testOverlap(AABB a, AABB b)
        {
            if (b.lowerBound.x - a.upperBound.x > 0.0d || b.lowerBound.y - a.upperBound.y > 0.0d)
            {
                return false;
            }

            if (a.lowerBound.x - b.upperBound.x > 0.0d || a.lowerBound.y - b.upperBound.y > 0.0d)
            {
                return false;
            }

            return true;
        }


        public override string ToString()
        {
            string s = "AABB[" + lowerBound + " . " + upperBound + "]";
            return s;
        }
    }
}