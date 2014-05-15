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


using System;
using org.jbox2d.common;
using org.jbox2d.pooling.arrays;

/**
 * A convex polygon shape. Polygons have a maximum number of vertices equal to _maxPolygonVertices.
 * In most cases you should not need many vertices for a convex polygon.
 */

namespace org.jbox2d.collision.shapes
{
    public class PolygonShape : Shape
    {
        /** Dump lots of debug information. */
        private static readonly bool m_debug = false;

        /**
   * Local position of the shape centroid in parent body frame.
   */
        public readonly Vec2 m_centroid = new Vec2();

        /**
   * The vertices of the shape. Note: use getVertexCount(), not m_vertices.Length, to get number of
   * active vertices.
   */

        /**
   * The normals of the shape. Note: use getVertexCount(), not m_normals.Length, to get number of
   * active normals.
   */
        public readonly Vec2[] m_normals;
        public readonly Vec2[] m_vertices;

        /**
   * Number of active vertices in the shape.
   */

        // pooling
        private readonly Vec2 pool1 = new Vec2();
        private readonly Vec2 pool2 = new Vec2();
        private readonly Vec2 pool3 = new Vec2();
        private readonly Vec2 pool4 = new Vec2();
        private readonly Transform poolt1 = new Transform();
        public int m_count;

        public PolygonShape() : base(ShapeType.POLYGON)
        {
            m_count = 0;
            m_vertices = new Vec2[Settings.maxPolygonVertices];
            for (int i = 0; i < m_vertices.Length; i++)
            {
                m_vertices[i] = new Vec2();
            }
            m_normals = new Vec2[Settings.maxPolygonVertices];
            for (int i = 0; i < m_normals.Length; i++)
            {
                m_normals[i] = new Vec2();
            }
            setRadius(Settings.polygonRadius);
            m_centroid.setZero();
        }

        public override Shape clone()
        {
            var shape = new PolygonShape();
            shape.m_centroid.set(m_centroid);
            for (int i = 0; i < shape.m_normals.Length; i++)
            {
                shape.m_normals[i].set(m_normals[i]);
                shape.m_vertices[i].set(m_vertices[i]);
            }
            shape.setRadius(getRadius());
            shape.m_count = m_count;
            return shape;
        }

        /**
   * Create a convex hull from the given array of points. The count must be in the range [3,
   * Settings.maxPolygonVertices].
   * 
   * @warning the points may be re-ordered, even if they form a convex polygon
   * @warning collinear points are handled but not removed. Collinear points may lead to poor
   *          stacking behavior.
   */

        public void set(Vec2[] vertices, int count)
        {
            set(vertices, count, null, null);
        }

        /**
   * Create a convex hull from the given array of points. The count must be in the range [3,
   * Settings.maxPolygonVertices]. This method takes an arraypool for pooling
   * 
   * @warning the points may be re-ordered, even if they form a convex polygon
   * @warning collinear points are handled but not removed. Collinear points may lead to poor
   *          stacking behavior.
   */

        public void set(Vec2[] verts, int num, Vec2Array vecPool,
            IntArray intPool)
        {
            if (num < 3)
            {
                setAsBox(1.0d, 1.0d);
                return;
            }

            int n = MathUtils.min(num, Settings.maxPolygonVertices);

            // Copy the vertices into a local buffer
            Vec2[] ps = (vecPool != null) ? vecPool.get(n) : new Vec2[n];
            for (int i = 0; i < n; ++i)
            {
                ps[i] = verts[i];
            }

            // Create the convex hull using the Gift wrapping algorithm
            // http://en.wikipedia.org/wiki/Gift_wrapping_algorithm

            // Find the right most point on the hull
            int i0 = 0;
            double x0 = ps[0].x;
            for (int i = 1; i < num; ++i)
            {
                double x = ps[i].x;
                if (x > x0 || (x == x0 && ps[i].y < ps[i0].y))
                {
                    i0 = i;
                    x0 = x;
                }
            }

            int[] hull =
                (intPool != null)
                    ? intPool.get(Settings.maxPolygonVertices)
                    : new int[Settings.maxPolygonVertices];
            int m = 0;
            int ih = i0;

            while (true)
            {
                hull[m] = ih;

                int ie = 0;
                for (int j = 1; j < n; ++j)
                {
                    if (ie == ih)
                    {
                        ie = j;
                        continue;
                    }

                    Vec2 r = pool1.set(ps[ie]).subLocal(ps[hull[m]]);
                    Vec2 v = pool2.set(ps[j]).subLocal(ps[hull[m]]);
                    double c = Vec2.cross(r, v);
                    if (c < 0.0d)
                    {
                        ie = j;
                    }

                    // Collinearity check
                    if (c == 0.0d && v.lengthSquared() > r.lengthSquared())
                    {
                        ie = j;
                    }
                }

                ++m;
                ih = ie;

                if (ie == i0)
                {
                    break;
                }
            }

            m_count = m;

            // Copy vertices.
            for (int i = 0; i < m_count; ++i)
            {
                if (m_vertices[i] == null)
                {
                    m_vertices[i] = new Vec2();
                }
                m_vertices[i].set(ps[hull[i]]);
            }

            Vec2 edge = pool1;

            // Compute normals. Ensure the edges have non-zero length.
            for (int i = 0; i < m_count; ++i)
            {
                int i1 = i;
                int i2 = i + 1 < m_count ? i + 1 : 0;
                edge.set(m_vertices[i2]).subLocal(m_vertices[i1]);
                Vec2.crossToOutUnsafe(edge, 1d, m_normals[i]);
                m_normals[i].normalize();
            }

            // Compute the polygon centroid.
            computeCentroidToOut(m_vertices, m_count, m_centroid);
        }

        /**
   * Build vertices to represent an axis-aligned box.
   * 
   * @param hx the half-width.
   * @param hy the half-height.
   */

        public void setAsBox(double hx, double hy)
        {
            m_count = 4;
            m_vertices[0].set(-hx, -hy);
            m_vertices[1].set(hx, -hy);
            m_vertices[2].set(hx, hy);
            m_vertices[3].set(-hx, hy);
            m_normals[0].set(0.0d, -1.0d);
            m_normals[1].set(1.0d, 0.0d);
            m_normals[2].set(0.0d, 1.0d);
            m_normals[3].set(-1.0d, 0.0d);
            m_centroid.setZero();
        }

        /**
   * Build vertices to represent an oriented box.
   * 
   * @param hx the half-width.
   * @param hy the half-height.
   * @param center the center of the box in local coordinates.
   * @param angle the rotation of the box in local coordinates.
   */

        public void setAsBox(double hx, double hy, Vec2 center, double angle)
        {
            m_count = 4;
            m_vertices[0].set(-hx, -hy);
            m_vertices[1].set(hx, -hy);
            m_vertices[2].set(hx, hy);
            m_vertices[3].set(-hx, hy);
            m_normals[0].set(0.0d, -1.0d);
            m_normals[1].set(1.0d, 0.0d);
            m_normals[2].set(0.0d, 1.0d);
            m_normals[3].set(-1.0d, 0.0d);
            m_centroid.set(center);

            Transform xf = poolt1;
            xf.p.set(center);
            xf.q.set(angle);

            // Transform vertices and normals.
            for (int i = 0; i < m_count; ++i)
            {
                Transform.mulToOut(xf, m_vertices[i], m_vertices[i]);
                Rot.mulToOut(xf.q, m_normals[i], m_normals[i]);
            }
        }

        public override int getChildCount()
        {
            return 1;
        }


        public override bool testPoint(Transform xf, Vec2 p)
        {
            double tempx, tempy;
            Rot xfq = xf.q;

            tempx = p.x - xf.p.x;
            tempy = p.y - xf.p.y;
            double pLocalx = xfq.c*tempx + xfq.s*tempy;
            double pLocaly = -xfq.s*tempx + xfq.c*tempy;

            if (m_debug)
            {
                Console.WriteLine("--testPoint debug--");
                Console.WriteLine("Vertices: ");
                for (int i = 0; i < m_count; ++i)
                {
                    Console.WriteLine(m_vertices[i].ToString());
                }
                Console.WriteLine("pLocal: " + pLocalx + ", " + pLocaly);
            }

            for (int i = 0; i < m_count; ++i)
            {
                Vec2 vertex = m_vertices[i];
                Vec2 normal = m_normals[i];
                tempx = pLocalx - vertex.x;
                tempy = pLocaly - vertex.y;
                double dot = normal.x*tempx + normal.y*tempy;
                if (dot > 0.0d)
                {
                    return false;
                }
            }

            return true;
        }


        public override void computeAABB(AABB aabb, Transform xf, int childIndex)
        {
            Vec2 lower = aabb.lowerBound;
            Vec2 upper = aabb.upperBound;
            Vec2 v1 = m_vertices[0];
            Rot xfq = xf.q;
            Vec2 xfp = xf.p;
            double vx, vy;
            lower.x = (xfq.c*v1.x - xfq.s*v1.y) + xfp.x;
            lower.y = (xfq.s*v1.x + xfq.c*v1.y) + xfp.y;
            upper.x = lower.x;
            upper.y = lower.y;

            for (int i = 1; i < m_count; ++i)
            {
                Vec2 v2 = m_vertices[i];
                // Vec2 v = Mul(xf, m_vertices[i]);
                vx = (xfq.c*v2.x - xfq.s*v2.y) + xfp.x;
                vy = (xfq.s*v2.x + xfq.c*v2.y) + xfp.y;
                lower.x = lower.x < vx ? lower.x : vx;
                lower.y = lower.y < vy ? lower.y : vy;
                upper.x = upper.x > vx ? upper.x : vx;
                upper.y = upper.y > vy ? upper.y : vy;
            }

            lower.x -= m_radius;
            lower.y -= m_radius;
            upper.x += m_radius;
            upper.y += m_radius;
        }

        /**
   * Get the vertex count.
   * 
   * @return
   */

        public int getVertexCount()
        {
            return m_count;
        }

        /**
   * Get a vertex by index.
   * 
   * @param index
   * @return
   */

        public Vec2 getVertex(int index)
        {
            return m_vertices[index];
        }


        public override bool raycast(RayCastOutput output, RayCastInput input, Transform xf,
            int childIndex)
        {
            Rot xfq = xf.q;
            Vec2 xfp = xf.p;
            double tempx, tempy;
            // b2Vec2 p1 = b2MulT(xf.q, input.p1 - xf.p);
            // b2Vec2 p2 = b2MulT(xf.q, input.p2 - xf.p);
            tempx = input.p1.x - xfp.x;
            tempy = input.p1.y - xfp.y;
            double p1x = xfq.c*tempx + xfq.s*tempy;
            double p1y = -xfq.s*tempx + xfq.c*tempy;

            tempx = input.p2.x - xfp.x;
            tempy = input.p2.y - xfp.y;
            double p2x = xfq.c*tempx + xfq.s*tempy;
            double p2y = -xfq.s*tempx + xfq.c*tempy;

            double dx = p2x - p1x;
            double dy = p2y - p1y;

            double lower = 0, upper = input.maxFraction;

            int index = -1;

            for (int i = 0; i < m_count; ++i)
            {
                Vec2 normal = m_normals[i];
                Vec2 vertex = m_vertices[i];
                // p = p1 + a * d
                // dot(normal, p - v) = 0
                // dot(normal, p1 - v) + a * dot(normal, d) = 0
                double tempxn = vertex.x - p1x;
                double tempyn = vertex.y - p1y;
                double numerator = normal.x*tempxn + normal.y*tempyn;
                double denominator = normal.x*dx + normal.y*dy;

                if (denominator == 0.0d)
                {
                    if (numerator < 0.0d)
                    {
                        return false;
                    }
                }
                else
                {
                    // Note: we want this predicate without division:
                    // lower < numerator / denominator, where denominator < 0
                    // Since denominator < 0, we have to flip the inequality:
                    // lower < numerator / denominator <==> denominator * lower >
                    // numerator.
                    if (denominator < 0.0d && numerator < lower*denominator)
                    {
                        // Increase lower.
                        // The segment enters this half-space.
                        lower = numerator/denominator;
                        index = i;
                    }
                    else if (denominator > 0.0d && numerator < upper*denominator)
                    {
                        // Decrease upper.
                        // The segment exits this half-space.
                        upper = numerator/denominator;
                    }
                }

                if (upper < lower)
                {
                    return false;
                }
            }

            if (index >= 0)
            {
                output.fraction = lower;
                // normal = Mul(xf.R, m_normals[index]);
                Vec2 normal = m_normals[index];
                Vec2 out_ = output.normal;
                out_.x = xfq.c*normal.x - xfq.s*normal.y;
                out_.y = xfq.s*normal.x + xfq.c*normal.y;
                return true;
            }
            return false;
        }

        public void computeCentroidToOut(Vec2[] vs, int count, Vec2 out_)
        {
            out_.set(0.0d, 0.0d);
            double area = 0.0d;

            // pRef is the reference point for forming triangles.
            // It's location doesn't change the result (except for rounding error).
            Vec2 pRef = pool1;
            pRef.setZero();

            Vec2 e1 = pool2;
            Vec2 e2 = pool3;

            double inv3 = 1.0d/3.0d;

            for (int i = 0; i < count; ++i)
            {
                // Triangle vertices.
                Vec2 p1 = pRef;
                Vec2 p2 = vs[i];
                Vec2 p3 = i + 1 < count ? vs[i + 1] : vs[0];

                e1.set(p2).subLocal(p1);
                e2.set(p3).subLocal(p1);

                double D = Vec2.cross(e1, e2);

                double triangleArea = 0.5d*D;
                area += triangleArea;

                // Area weighted centroid
                e1.set(p1).addLocal(p2).addLocal(p3).mulLocal(triangleArea*inv3);
                out_.addLocal(e1);
            }

            // Centroid 
            out_.mulLocal(1.0d/area);
        }

        public override void computeMass(MassData massData, double density)
        {
            // Polygon mass, centroid, and inertia.
            // Let rho be the polygon density in mass per unit area.
            // Then:
            // mass = rho * int(dA)
            // centroid.x = (1/mass) * rho * int(x * dA)
            // centroid.y = (1/mass) * rho * int(y * dA)
            // I = rho * int((x*x + y*y) * dA)
            //
            // We can compute these integrals by summing all the integrals
            // for each triangle of the polygon. To evaluate the integral
            // for a single triangle, we make a change of variables to
            // the (u,v) coordinates of the triangle:
            // x = x0 + e1x * u + e2x * v
            // y = y0 + e1y * u + e2y * v
            // where 0 <= u && 0 <= v && u + v <= 1.
            //
            // We integrate u from [0,1-v] and then v from [0,1].
            // We also need to use the Jacobian of the transformation:
            // D = cross(e1, e2)
            //
            // Simplification: triangle centroid = (1/3) * (p1 + p2 + p3)
            //
            // The rest of the derivation is handled by computer algebra.


            Vec2 center = pool1;
            center.setZero();
            double area = 0.0d;
            double I = 0.0d;

            // pRef is the reference point for forming triangles.
            // It's location doesn't change the result (except for rounding error).
            Vec2 s = pool2;
            s.setZero();
            // This code would put the reference point inside the polygon.
            for (int i = 0; i < m_count; ++i)
            {
                s.addLocal(m_vertices[i]);
            }
            s.mulLocal(1.0d/m_count);

            double k_inv3 = 1.0d/3.0d;

            Vec2 e1 = pool3;
            Vec2 e2 = pool4;

            for (int i = 0; i < m_count; ++i)
            {
                // Triangle vertices.
                e1.set(m_vertices[i]).subLocal(s);
                e2.set(s).negateLocal().addLocal(i + 1 < m_count ? m_vertices[i + 1] : m_vertices[0]);

                double D = Vec2.cross(e1, e2);

                double triangleArea = 0.5d*D;
                area += triangleArea;

                // Area weighted centroid
                center.x += triangleArea*k_inv3*(e1.x + e2.x);
                center.y += triangleArea*k_inv3*(e1.y + e2.y);

                double ex1 = e1.x, ey1 = e1.y;
                double ex2 = e2.x, ey2 = e2.y;

                double intx2 = ex1*ex1 + ex2*ex1 + ex2*ex2;
                double inty2 = ey1*ey1 + ey2*ey1 + ey2*ey2;

                I += (0.25d*k_inv3*D)*(intx2 + inty2);
            }

            // Total mass
            massData.mass = density*area;

            // Center of mass 
            center.mulLocal(1.0d/area);
            massData.center.set(center).addLocal(s);

            // Inertia tensor relative to the local origin (point s)
            massData.I = I*density;

            // Shift to center of mass then to original body origin.
            massData.I += massData.mass*(Vec2.dot(massData.center, massData.center));
        }

        /**
   * Validate convexity. This is a very time consuming operation.
   * 
   * @return
   */

        public bool validate()
        {
            for (int i = 0; i < m_count; ++i)
            {
                int i1 = i;
                int i2 = i < m_count - 1 ? i1 + 1 : 0;
                Vec2 p = m_vertices[i1];
                Vec2 e = pool1.set(m_vertices[i2]).subLocal(p);

                for (int j = 0; j < m_count; ++j)
                {
                    if (j == i1 || j == i2)
                    {
                        continue;
                    }

                    Vec2 v = pool2.set(m_vertices[j]).subLocal(p);
                    double c = Vec2.cross(e, v);
                    if (c < 0.0d)
                    {
                        return false;
                    }
                }
            }

            return true;
        }

        /** Get the vertices in local coordinates. */

        public Vec2[] getVertices()
        {
            return m_vertices;
        }

        /** Get the edge normal vectors. There is one for each vertex. */

        public Vec2[] getNormals()
        {
            return m_normals;
        }

        /** Get the centroid and apply the supplied transform. */

        public Vec2 centroid(Transform xf)
        {
            return Transform.mul(xf, m_centroid);
        }

        /** Get the centroid and apply the supplied transform. */

        public Vec2 centroidToOut(Transform xf, Vec2 out_)
        {
            Transform.mulToOutUnsafe(xf, m_centroid, out_);
            return out_;
        }
    }
}