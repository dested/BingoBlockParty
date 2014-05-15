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
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 ******************************************************************************/


using org.jbox2d.common;

/**
 * This is used to compute the current state of a contact manifold.
 * 
 * @author daniel
 */

namespace org.jbox2d.collision
{
    public class WorldManifold
    {
        /**
   * World vector pointing from A to B
   */
        public readonly Vec2 normal;

        /**
   * World contact point (point of intersection)
   */
        public readonly Vec2[] points;

        private readonly Vec2 pool3 = new Vec2();
        private readonly Vec2 pool4 = new Vec2();

        public WorldManifold()
        {
            normal = new Vec2();
            points = new Vec2[Settings.maxManifoldPoints];
            for (int i = 0; i < Settings.maxManifoldPoints; i++)
            {
                points[i] = new Vec2();
            }
        }

        public void initialize(Manifold manifold, Transform xfA, double radiusA,
            Transform xfB, double radiusB)
        {
            if (manifold.pointCount == 0)
            {
                return;
            }

            switch (manifold.type)
            {
                case ManifoldType.CIRCLES:
                {
                    // Vec2 pointA = pool3;
                    // Vec2 pointB = pool4;
                    //
                    // normal.set(1, 0);
                    // Transform.mulToOut(xfA, manifold.localPoint, pointA);
                    // Transform.mulToOut(xfB, manifold.points[0].localPoint, pointB);
                    //
                    // if (MathUtils.distanceSquared(pointA, pointB) > Settings.EPSILON * Settings.EPSILON) {
                    // normal.set(pointB).subLocal(pointA);
                    // normal.normalize();
                    // }
                    //
                    // cA.set(normal).mulLocal(radiusA).addLocal(pointA);
                    // cB.set(normal).mulLocal(radiusB).subLocal(pointB).negateLocal();
                    // points[0].set(cA).addLocal(cB).mulLocal(0.5f);
                    Vec2 pointA = pool3;
                    Vec2 pointB = pool4;

                    normal.x = 1;
                    normal.y = 0;
                    // pointA.x = xfA.p.x + xfA.q.ex.x * manifold.localPoint.x + xfA.q.ey.x *
                    // manifold.localPoint.y;
                    // pointA.y = xfA.p.y + xfA.q.ex.y * manifold.localPoint.x + xfA.q.ey.y *
                    // manifold.localPoint.y;
                    // pointB.x = xfB.p.x + xfB.q.ex.x * manifold.points[0].localPoint.x + xfB.q.ey.x *
                    // manifold.points[0].localPoint.y;
                    // pointB.y = xfB.p.y + xfB.q.ex.y * manifold.points[0].localPoint.x + xfB.q.ey.y *
                    // manifold.points[0].localPoint.y;
                    Transform.mulToOut(xfA, manifold.localPoint, pointA);
                    Transform.mulToOut(xfB, manifold.points[0].localPoint, pointB);

                    if (MathUtils.distanceSquared(pointA, pointB) > Settings.EPSILON*Settings.EPSILON)
                    {
                        normal.x = pointB.x - pointA.x;
                        normal.y = pointB.y - pointA.y;
                        normal.normalize();
                    }

                    double cAx = normal.x*radiusA + pointA.x;
                    double cAy = normal.y*radiusA + pointA.y;

                    double cBx = -normal.x*radiusB + pointB.x;
                    double cBy = -normal.y*radiusB + pointB.y;

                    points[0].x = (cAx + cBx)*.5f;
                    points[0].y = (cAy + cBy)*.5f;
                }
                    break;
                case ManifoldType.FACE_A:
                {
                    Vec2 planePoint = pool3;

                    Rot.mulToOutUnsafe(xfA.q, manifold.localNormal, normal);
                    Transform.mulToOut(xfA, manifold.localPoint, planePoint);

                    Vec2 clipPoint = pool4;

                    for (int i = 0; i < manifold.pointCount; i++)
                    {
                        // b2Vec2 clipPoint = b2Mul(xfB, manifold->points[i].localPoint);
                        // b2Vec2 cA = clipPoint + (radiusA - b2Dot(clipPoint - planePoint,
                        // normal)) * normal;
                        // b2Vec2 cB = clipPoint - radiusB * normal;
                        // points[i] = 0.5f * (cA + cB);
                        Transform.mulToOut(xfB, manifold.points[i].localPoint, clipPoint);
                        // use cA as temporary for now
                        // cA.set(clipPoint).subLocal(planePoint);
                        // double scalar = radiusA - Vec2.dot(cA, normal);
                        // cA.set(normal).mulLocal(scalar).addLocal(clipPoint);
                        // cB.set(normal).mulLocal(radiusB).subLocal(clipPoint).negateLocal();
                        // points[i].set(cA).addLocal(cB).mulLocal(0.5f);

                        double scalar =
                            radiusA
                            - ((clipPoint.x - planePoint.x)*normal.x + (clipPoint.y - planePoint.y)
                               *normal.y);

                        double cAx = normal.x*scalar + clipPoint.x;
                        double cAy = normal.y*scalar + clipPoint.y;

                        double cBx = -normal.x*radiusB + clipPoint.x;
                        double cBy = -normal.y*radiusB + clipPoint.y;

                        points[i].x = (cAx + cBx)*.5f;
                        points[i].y = (cAy + cBy)*.5f;
                    }
                }
                    break;
                case ManifoldType.FACE_B:
                    Vec2 planePoint2 = pool3;
                    Rot.mulToOutUnsafe(xfB.q, manifold.localNormal, normal);
                    Transform.mulToOut(xfB, manifold.localPoint, planePoint2);

                    // Mat22 R = xfB.q;
                    // normal.x = R.ex.x * manifold.localNormal.x + R.ey.x * manifold.localNormal.y;
                    // normal.y = R.ex.y * manifold.localNormal.x + R.ey.y * manifold.localNormal.y;
                    // Vec2 v = manifold.localPoint;
                    // planePoint.x = xfB.p.x + xfB.q.ex.x * v.x + xfB.q.ey.x * v.y;
                    // planePoint.y = xfB.p.y + xfB.q.ex.y * v.x + xfB.q.ey.y * v.y;

                    Vec2 clipPoint2 = pool4;

                    for (int i = 0; i < manifold.pointCount; i++)
                    {
                        // b2Vec2 clipPoint = b2Mul(xfA, manifold->points[i].localPoint);
                        // b2Vec2 cB = clipPoint + (radiusB - b2Dot(clipPoint - planePoint,
                        // normal)) * normal;
                        // b2Vec2 cA = clipPoint - radiusA * normal;
                        // points[i] = 0.5f * (cA + cB);

                        Transform.mulToOut(xfA, manifold.points[i].localPoint, clipPoint2);
                        // cB.set(clipPoint).subLocal(planePoint);
                        // double scalar = radiusB - Vec2.dot(cB, normal);
                        // cB.set(normal).mulLocal(scalar).addLocal(clipPoint);
                        // cA.set(normal).mulLocal(radiusA).subLocal(clipPoint).negateLocal();
                        // points[i].set(cA).addLocal(cB).mulLocal(0.5f);

                        // points[i] = 0.5f * (cA + cB);

                        //
                        // clipPoint.x = xfA.p.x + xfA.q.ex.x * manifold.points[i].localPoint.x + xfA.q.ey.x *
                        // manifold.points[i].localPoint.y;
                        // clipPoint.y = xfA.p.y + xfA.q.ex.y * manifold.points[i].localPoint.x + xfA.q.ey.y *
                        // manifold.points[i].localPoint.y;

                        double scalar =
                            radiusB
                            - ((clipPoint2.x - planePoint2.x)*normal.x + (clipPoint2.y - planePoint2.y)
                               *normal.y);

                        double cBx = normal.x*scalar + clipPoint2.x;
                        double cBy = normal.y*scalar + clipPoint2.y;

                        double cAx = -normal.x*radiusA + clipPoint2.x;
                        double cAy = -normal.y*radiusA + clipPoint2.y;

                        points[i].x = (cAx + cBx)*.5f;
                        points[i].y = (cAy + cBy)*.5f;
                    }
                    // Ensure normal points from A to B.
                    normal.x = -normal.x;
                    normal.y = -normal.y;
                    break;
            }
        }
    }
}