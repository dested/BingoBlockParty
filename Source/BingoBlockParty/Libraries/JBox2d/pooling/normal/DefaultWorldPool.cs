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
/**
 * Created at 3:26:14 AM Jan 11, 2011
 */


using System.Collections.Generic;
using org.jbox2d.collision;
using org.jbox2d.common;
using org.jbox2d.dynamics.contacts;

/**
 * Provides object pooling for all objects used in the engine. Objects retrieved from here should
 * only be used temporarily, and then pushed back (with the exception of arrays).
 * 
 * @author Daniel Murphy
 */

namespace org.jbox2d.pooling.normal
{
    public class DefaultWorldPool : IWorldPool
    {
        private readonly OrderedStack<AABB> aabbs;

        private readonly Dictionary<int, double[]> adoubles = new Dictionary<int, double[]>();
        private readonly Dictionary<int, int[]> aints = new Dictionary<int, int[]>();
        private readonly Dictionary<int, Vec2[]> avecs = new Dictionary<int, Vec2[]>();

        private readonly MutableStack<Contact> ccstack;
        private readonly MutableStack<Contact> chcstack;

        private readonly MutableStack<Contact> chpstack;
        private readonly Collision collision;

        private readonly MutableStack<Contact> cpstack;
        private readonly Distance dist;

        private readonly MutableStack<Contact> ecstack;

        private readonly MutableStack<Contact> epstack;
        private readonly OrderedStack<Mat33> mat33s;
        private readonly OrderedStack<Mat22> mats;
        private readonly MutableStack<Contact> pcstack;
        private readonly OrderedStack<Rot> rots;
        private readonly TimeOfImpact toi;
        private readonly OrderedStack<Vec3> vec3s;
        private readonly OrderedStack<Vec2> vecs;
        private readonly IWorldPool world;

        public DefaultWorldPool(int argSize, int argContainerSize)
        {
            world = this;
            pcstack = new MutableStack<Contact>(Settings.CONTACT_STACK_INIT_SIZE)
            {
                newInstance = () => new PolygonContact(world)
            };
            ccstack = new MutableStack<Contact>(Settings.CONTACT_STACK_INIT_SIZE)
            {
                newInstance = () => new CircleContact(world)
            };
            cpstack = new MutableStack<Contact>(Settings.CONTACT_STACK_INIT_SIZE)
            {
                newInstance = () => new PolygonAndCircleContact(world)
            };
            ecstack = new MutableStack<Contact>(Settings.CONTACT_STACK_INIT_SIZE)
            {
                newInstance = () => new EdgeAndCircleContact(world)
            };
            epstack = new MutableStack<Contact>(Settings.CONTACT_STACK_INIT_SIZE)
            {
                newInstance = () => new EdgeAndPolygonContact(world)
            };
            chcstack = new MutableStack<Contact>(Settings.CONTACT_STACK_INIT_SIZE)
            {
                newInstance = () => new ChainAndCircleContact(world)
            };
            chpstack = new MutableStack<Contact>(Settings.CONTACT_STACK_INIT_SIZE)
            {
                newInstance = () => new ChainAndPolygonContact(world)
            };


            vecs = new OrderedStack<Vec2>(argSize, argContainerSize)
            {
                newInstance = () => new Vec2()
            };
            vec3s = new OrderedStack<Vec3>(argSize, argContainerSize)
            {
                newInstance = () => new Vec3()
            };
            mats = new OrderedStack<Mat22>(argSize, argContainerSize)
            {
                newInstance = () => new Mat22()
            };
            aabbs = new OrderedStack<AABB>(argSize, argContainerSize)
            {
                newInstance = () => new AABB()
            };
            rots = new OrderedStack<Rot>(argSize, argContainerSize)
            {
                newInstance = () => new Rot()
            };
            mat33s = new OrderedStack<Mat33>(argSize, argContainerSize)
            {
                newInstance = () => new Mat33()
            };

            dist = new Distance();
            collision = new Collision(this);
            toi = new TimeOfImpact(this);
        }


        public IDynamicStack<Contact> getPolyContactStack()
        {
            return pcstack;
        }

        public IDynamicStack<Contact> getCircleContactStack()
        {
            return ccstack;
        }

        public IDynamicStack<Contact> getPolyCircleContactStack()
        {
            return cpstack;
        }


        public IDynamicStack<Contact> getEdgeCircleContactStack()
        {
            return ecstack;
        }


        public IDynamicStack<Contact> getEdgePolyContactStack()
        {
            return epstack;
        }


        public IDynamicStack<Contact> getChainCircleContactStack()
        {
            return chcstack;
        }


        public IDynamicStack<Contact> getChainPolyContactStack()
        {
            return chpstack;
        }

        public Vec2 popVec2()
        {
            return vecs.pop();
        }

        public Vec2[] popVec2(int argNum)
        {
            return vecs.pop(argNum);
        }

        public void pushVec2(int argNum)
        {
            vecs.push(argNum);
        }

        public Vec3 popVec3()
        {
            return vec3s.pop();
        }

        public Vec3[] popVec3(int argNum)
        {
            return vec3s.pop(argNum);
        }

        public void pushVec3(int argNum)
        {
            vec3s.push(argNum);
        }

        public Mat22 popMat22()
        {
            return mats.pop();
        }

        public Mat22[] popMat22(int argNum)
        {
            return mats.pop(argNum);
        }

        public void pushMat22(int argNum)
        {
            mats.push(argNum);
        }

        public Mat33 popMat33()
        {
            return mat33s.pop();
        }

        public void pushMat33(int argNum)
        {
            mat33s.push(argNum);
        }

        public AABB popAABB()
        {
            return aabbs.pop();
        }

        public AABB[] popAABB(int argNum)
        {
            return aabbs.pop(argNum);
        }

        public void pushAABB(int argNum)
        {
            aabbs.push(argNum);
        }

        public Rot popRot()
        {
            return rots.pop();
        }

        public void pushRot(int num)
        {
            rots.push(num);
        }

        public Collision getCollision()
        {
            return collision;
        }

        public TimeOfImpact getTimeOfImpact()
        {
            return toi;
        }

        public Distance getDistance()
        {
            return dist;
        }

        public double[] getDoubleArray(int argLength)
        {
            if (!adoubles.ContainsKey(argLength))
            {
                adoubles[argLength] = new double[argLength];
            }

            return adoubles[argLength];
        }

        public int[] getIntArray(int argLength)
        {
            if (!aints.ContainsKey(argLength))
            {
                aints[argLength] = new int[argLength];
            }

            return aints[argLength];
        }

        public Vec2[] getVec2Array(int argLength)
        {
            if (!avecs.ContainsKey(argLength))
            {
                var ray = new Vec2[argLength];
                for (int i = 0; i < argLength; i++)
                {
                    ray[i] = new Vec2();
                }
                avecs[argLength] = ray;
            }

            return avecs[argLength];
        }
    }
}