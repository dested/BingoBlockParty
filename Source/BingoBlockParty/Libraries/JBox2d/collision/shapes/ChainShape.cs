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


using System;
using org.jbox2d.common;

/**
 * A chain shape is a free form sequence of line segments. The chain has two-sided collision, so you
 * can use inside and outside collision. Therefore, you may use any winding order. Since there may
 * be many vertices, they are allocated using Alloc. Connectivity information is used to create
 * smooth collisions. WARNING The chain will not collide properly if there are self-intersections.
 * 
 * @author Daniel
 */

namespace org.jbox2d.collision.shapes
{
    public class ChainShape : Shape
    {
        public readonly Vec2 m_nextVertex = new Vec2();
        public readonly Vec2 m_prevVertex = new Vec2();

        private readonly EdgeShape pool0 = new EdgeShape();
        public int m_count;
        public bool m_hasNextVertex = false;
        public bool m_hasPrevVertex = false;
        public Vec2[] m_vertices;

        public ChainShape()
            : base(ShapeType.CHAIN)
        {
            m_vertices = null;
            m_radius = Settings.polygonRadius;
            m_count = 0;
        }


        public override int getChildCount()
        {
            return m_count - 1;
        }

        /**
   * Get a child edge.
   */

        public void getChildEdge(EdgeShape edge, int index)
        {
            edge.m_radius = m_radius;

            Vec2 v0 = m_vertices[index + 0];
            Vec2 v1 = m_vertices[index + 1];
            edge.m_vertex1.x = v0.x;
            edge.m_vertex1.y = v0.y;
            edge.m_vertex2.x = v1.x;
            edge.m_vertex2.y = v1.y;

            if (index > 0)
            {
                Vec2 v = m_vertices[index - 1];
                edge.m_vertex0.x = v.x;
                edge.m_vertex0.y = v.y;
                edge.m_hasVertex0 = true;
            }
            else
            {
                edge.m_vertex0.x = m_prevVertex.x;
                edge.m_vertex0.y = m_prevVertex.y;
                edge.m_hasVertex0 = m_hasPrevVertex;
            }

            if (index < m_count - 2)
            {
                Vec2 v = m_vertices[index + 2];
                edge.m_vertex3.x = v.x;
                edge.m_vertex3.y = v.y;
                edge.m_hasVertex3 = true;
            }
            else
            {
                edge.m_vertex3.x = m_nextVertex.x;
                edge.m_vertex3.y = m_nextVertex.y;
                edge.m_hasVertex3 = m_hasNextVertex;
            }
        }


        public override bool testPoint(Transform xf, Vec2 p)
        {
            return false;
        }


        public override bool raycast(RayCastOutput output, RayCastInput input, Transform xf, int childIndex)
        {
            EdgeShape edgeShape = pool0;

            int i1 = childIndex;
            int i2 = childIndex + 1;
            if (i2 == m_count)
            {
                i2 = 0;
            }
            Vec2 v = m_vertices[i1];
            edgeShape.m_vertex1.x = v.x;
            edgeShape.m_vertex1.y = v.y;
            Vec2 v1 = m_vertices[i2];
            edgeShape.m_vertex2.x = v1.x;
            edgeShape.m_vertex2.y = v1.y;

            return edgeShape.raycast(output, input, xf, 0);
        }


        public override void computeAABB(AABB aabb, Transform xf, int childIndex)
        {
            Vec2 lower = aabb.lowerBound;
            Vec2 upper = aabb.upperBound;

            int i1 = childIndex;
            int i2 = childIndex + 1;
            if (i2 == m_count)
            {
                i2 = 0;
            }

            Vec2 vi1 = m_vertices[i1];
            Vec2 vi2 = m_vertices[i2];
            Rot xfq = xf.q;
            Vec2 xfp = xf.p;
            double v1x = (xfq.c*vi1.x - xfq.s*vi1.y) + xfp.x;
            double v1y = (xfq.s*vi1.x + xfq.c*vi1.y) + xfp.y;
            double v2x = (xfq.c*vi2.x - xfq.s*vi2.y) + xfp.x;
            double v2y = (xfq.s*vi2.x + xfq.c*vi2.y) + xfp.y;

            lower.x = v1x < v2x ? v1x : v2x;
            lower.y = v1y < v2y ? v1y : v2y;
            upper.x = v1x > v2x ? v1x : v2x;
            upper.y = v1y > v2y ? v1y : v2y;
        }


        public override void computeMass(MassData massData, double density)
        {
            massData.mass = 0.0d;
            massData.center.setZero();
            massData.I = 0.0d;
        }


        public override Shape clone()
        {
            var clone = new ChainShape();
            clone.createChain(m_vertices, m_count);
            clone.m_prevVertex.set(m_prevVertex);
            clone.m_nextVertex.set(m_nextVertex);
            clone.m_hasPrevVertex = m_hasPrevVertex;
            clone.m_hasNextVertex = m_hasNextVertex;
            return clone;
        }

        /**
   * Create a loop. This automatically adjusts connectivity.
   * 
   * @param vertices an array of vertices, these are copied
   * @param count the vertex count
   */

        public void createLoop(Vec2[] vertices, int count)
        {
            m_count = count + 1;
            m_vertices = new Vec2[m_count];
            for (int i = 1; i < count; i++)
            {
                Vec2 v1 = vertices[i - 1];
                Vec2 v2 = vertices[i];
                // If the code crashes here, it means your vertices are too close together.
                if (MathUtils.distanceSquared(v1, v2) < Settings.linearSlop*Settings.linearSlop)
                {
                    throw new Exception("Vertices of chain shape are too close together");
                }
            }
            for (int i = 0; i < count; i++)
            {
                m_vertices[i] = new Vec2(vertices[i]);
            }
            m_vertices[count] = new Vec2(m_vertices[0]);
            m_prevVertex.set(m_vertices[m_count - 2]);
            m_nextVertex.set(m_vertices[1]);
            m_hasPrevVertex = true;
            m_hasNextVertex = true;
        }

        /**
   * Create a chain with isolated end vertices.
   * 
   * @param vertices an array of vertices, these are copied
   * @param count the vertex count
   */

        public void createChain(Vec2[] vertices, int count)
        {
            m_count = count;
            m_vertices = new Vec2[m_count];
            for (int i = 1; i < m_count; i++)
            {
                Vec2 v1 = vertices[i - 1];
                Vec2 v2 = vertices[i];
                // If the code crashes here, it means your vertices are too close together.
                if (MathUtils.distanceSquared(v1, v2) < Settings.linearSlop*Settings.linearSlop)
                {
                    throw new Exception("Vertices of chain shape are too close together");
                }
            }
            for (int i = 0; i < m_count; i++)
            {
                m_vertices[i] = new Vec2(vertices[i]);
            }
            m_hasPrevVertex = false;
            m_hasNextVertex = false;
        }

        /**
   * Establish connectivity to a vertex that precedes the first vertex. Don't call this for loops.
   * 
   * @param prevVertex
   */

        public void setPrevVertex(Vec2 prevVertex)
        {
            m_prevVertex.set(prevVertex);
            m_hasPrevVertex = true;
        }

        /**
   * Establish connectivity to a vertex that follows the last vertex. Don't call this for loops.
   * 
   * @param nextVertex
   */

        public void setNextVertex(Vec2 nextVertex)
        {
            m_nextVertex.set(nextVertex);
            m_hasNextVertex = true;
        }
    }
}