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


 /**
 * Represents a rotation
 * 
 * @author Daniel
 */

namespace org.jbox2d.common
{
    public class Rot
    {
        private static readonly long serialVersionUID = 1L;

        public float c; // sin and cos
        public float s; // sin and cos

        public Rot()
        {
            setIdentity();
        }

        public Rot(float angle)
        {
            set(angle);
        }

        public float getSin()
        {
            return s;
        }


        public override string ToString()
        {
            return "Rot(s:" + s + ", c:" + c + ")";
        }

        public float getCos()
        {
            return c;
        }

        public Rot set(float angle)
        {
            s = MathUtils.sin(angle);
            c = MathUtils.cos(angle);
            return this;
        }

        public Rot set(Rot other)
        {
            s = other.s;
            c = other.c;
            return this;
        }

        public Rot setIdentity()
        {
            s = 0;
            c = 1;
            return this;
        }

        public float getAngle()
        {
            return MathUtils.atan2(s, c);
        }

        public void getXAxis(Vec2 xAxis)
        {
            xAxis.set(c, s);
        }

        public void getYAxis(Vec2 yAxis)
        {
            yAxis.set(-s, c);
        }

        // @Override // annotation omitted for GWT-compatibility
        public Rot clone()
        {
            var copy = new Rot();
            copy.s = s;
            copy.c = c;
            return copy;
        }

        public static void mul(Rot q, Rot r, Rot out_)
        {
            float tempc = q.c*r.c - q.s*r.s;
            out_.s = q.s*r.c + q.c*r.s;
            out_.c = tempc;
        }

        public static void mulUnsafe(Rot q, Rot r, Rot out_)
        {
            // [qc -qs] * [rc -rs] = [qc*rc-qs*rs -qc*rs-qs*rc]
            // [qs qc] [rs rc] [qs*rc+qc*rs -qs*rs+qc*rc]
            // s = qs * rc + qc * rs
            // c = qc * rc - qs * rs
            out_.s = q.s*r.c + q.c*r.s;
            out_.c = q.c*r.c - q.s*r.s;
        }

        public static void mulTrans(Rot q, Rot r, Rot out_)
        {
            float tempc = q.c*r.c + q.s*r.s;
            out_.s = q.c*r.s - q.s*r.c;
            out_.c = tempc;
        }

        public static void mulTransUnsafe(Rot q, Rot r, Rot out_)
        {
            // [ qc qs] * [rc -rs] = [qc*rc+qs*rs -qc*rs+qs*rc]
            // [-qs qc] [rs rc] [-qs*rc+qc*rs qs*rs+qc*rc]
            // s = qc * rs - qs * rc
            // c = qc * rc + qs * rs
            out_.s = q.c*r.s - q.s*r.c;
            out_.c = q.c*r.c + q.s*r.s;
        }

        public static void mulToOut(Rot q, Vec2 v, Vec2 out_)
        {
            float tempy = q.s*v.x + q.c*v.y;
            out_.x = q.c*v.x - q.s*v.y;
            out_.y = tempy;
        }

        public static void mulToOutUnsafe(Rot q, Vec2 v, Vec2 out_)
        {
            out_.x = q.c*v.x - q.s*v.y;
            out_.y = q.s*v.x + q.c*v.y;
        }

        public static void mulTrans(Rot q, Vec2 v, Vec2 out_)
        {
            float tempy = -q.s*v.x + q.c*v.y;
            out_.x = q.c*v.x + q.s*v.y;
            out_.y = tempy;
        }

        public static void mulTransUnsafe(Rot q, Vec2 v, Vec2 out_)
        {
            out_.x = q.c*v.x + q.s*v.y;
            out_.y = -q.s*v.x + q.c*v.y;
        }
    }
}