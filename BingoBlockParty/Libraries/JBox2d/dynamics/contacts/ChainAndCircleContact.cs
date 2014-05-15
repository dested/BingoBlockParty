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


using org.jbox2d.collision;
using org.jbox2d.collision.shapes;
using org.jbox2d.common;
using org.jbox2d.pooling;

namespace org.jbox2d.dynamics.contacts
{
    public class ChainAndCircleContact : Contact
    {
        private readonly EdgeShape edge = new EdgeShape();

        public ChainAndCircleContact(IWorldPool argPool)
            : base(argPool)
        {
        }


        public void init(Fixture fA, int indexA, Fixture fB, int indexB)
        {
            base.init(fA, indexA, fB, indexB);
        }


        public override void evaluate(Manifold manifold, Transform xfA, Transform xfB)
        {
            var chain = (ChainShape) m_fixtureA.getShape();
            chain.getChildEdge(edge, m_indexA);
            pool.getCollision().collideEdgeAndCircle(manifold, edge, xfA,
                (CircleShape) m_fixtureB.getShape(), xfB);
        }
    }
}