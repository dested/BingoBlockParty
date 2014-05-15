/*******************************************************************************
 * Copyright (c) 2013, Daniel Murphy
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright notice,
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


 // updated to rev 100

/**
 * A transform contains translation and rotation. It is used to represent the position and
 * orientation of rigid frames.
 */

namespace org.jbox2d.common
{
    public class Transform /* [36,24] expecting: 'extends', 'implements', '{', '<': :*/
        /* [36,85] expecting: 'extends', 'implements', '{', '<': Serializable*/
    {
        private static long serialVersionUID = 1L;
        private static readonly Vec2 pool = new Vec2();

        /** The translation caused by the transform */
        public Vec2 p;

        /** A matrix representing a rotation */
        public Rot q;

        /** The default constructor. */

        public Transform()
        {
            p = new Vec2();
            q = new Rot();
        }

        /** Initialize as a copy of another transform. */

        public Transform(Transform xf)
        {
            p = xf.p.clone();
            q = xf.q.clone();
        }

        /** Initialize using a position vector and a rotation matrix. */

        public Transform(Vec2 _position, Rot _R)
        {
            p = _position.clone();
            q = _R.clone();
        }

        /** Set this to equal another transform. */

        public Transform set(Transform xf)
        {
            p.set(xf.p);
            q.set(xf.q);
            return this;
        }

        /**
   * Set this based on the position and angle.
   * 
   * @param p
   * @param angle
   */

        public void set(Vec2 p, float angle)
        {
            this.p.set(p);
            q.set(angle);
        }

        /** Set this to the identity transform. */

        public void setIdentity()
        {
            p.setZero();
            q.setIdentity();
        }

        public static Vec2 mul(Transform T, Vec2 v)
        {
            return new Vec2((T.q.c*v.x - T.q.s*v.y) + T.p.x, (T.q.s*v.x + T.q.c*v.y) + T.p.y);
        }

        public static void mulToOut(Transform T, Vec2 v, Vec2 out_)
        {
            float tempy = (T.q.s*v.x + T.q.c*v.y) + T.p.y;
            out_.x = (T.q.c*v.x - T.q.s*v.y) + T.p.x;
            out_.y = tempy;
        }

        public static void mulToOutUnsafe(Transform T, Vec2 v, Vec2 out_)
        {
            out_.x = (T.q.c*v.x - T.q.s*v.y) + T.p.x;
            out_.y = (T.q.s*v.x + T.q.c*v.y) + T.p.y;
        }

        public static Vec2 mulTrans(Transform T, Vec2 v)
        {
            float px = v.x - T.p.x;
            float py = v.y - T.p.y;
            return new Vec2((T.q.c*px + T.q.s*py), (-T.q.s*px + T.q.c*py));
        }

        public static void mulTransToOut(Transform T, Vec2 v, Vec2 out_)
        {
            float px = v.x - T.p.x;
            float py = v.y - T.p.y;
            float tempy = (-T.q.s*px + T.q.c*py);
            out_.x = (T.q.c*px + T.q.s*py);
            out_.y = tempy;
        }

        public static void mulTransToOutUnsafe(Transform T, Vec2 v, Vec2 out_)
        {
            float px = v.x - T.p.x;
            float py = v.y - T.p.y;
            out_.x = (T.q.c*px + T.q.s*py);
            out_.y = (-T.q.s*px + T.q.c*py);
        }

        public static Transform mul(Transform A, Transform B)
        {
            var C = new Transform();
            Rot.mulUnsafe(A.q, B.q, C.q);
            Rot.mulToOutUnsafe(A.q, B.p, C.p);
            C.p.addLocal(A.p);
            return C;
        }

        public static void mulToOut(Transform A, Transform B, Transform out_)
        {
            Rot.mul(A.q, B.q, out_.q);
            Rot.mulToOut(A.q, B.p, out_.p);
            out_.p.addLocal(A.p);
        }

        public static void mulToOutUnsafe(Transform A, Transform B, Transform out_)
        {
            Rot.mulUnsafe(A.q, B.q, out_.q);
            Rot.mulToOutUnsafe(A.q, B.p, out_.p);
            out_.p.addLocal(A.p);
        }

        public static Transform mulTrans(Transform A, Transform B)
        {
            var C = new Transform();
            Rot.mulTransUnsafe(A.q, B.q, C.q);
            pool.set(B.p).subLocal(A.p);
            Rot.mulTransUnsafe(A.q, pool, C.p);
            return C;
        }

        public static void mulTransToOut(Transform A, Transform B, Transform out_)
        {
            Rot.mulTrans(A.q, B.q, out_.q);
            pool.set(B.p).subLocal(A.p);
            Rot.mulTrans(A.q, pool, out_.p);
        }

        public static void mulTransToOutUnsafe(Transform A, Transform B,
            Transform out_)
        {
            Rot.mulTransUnsafe(A.q, B.q, out_.q);
            pool.set(B.p).subLocal(A.p);
            Rot.mulTransUnsafe(A.q, pool, out_.p);
        }
    }
}