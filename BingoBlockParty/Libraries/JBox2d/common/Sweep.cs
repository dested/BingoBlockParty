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
 * This describes the motion of a body/shape for TOI computation. Shapes are defined with respect to
 * the body origin, which may no coincide with the center of mass. However, to support dynamics we
 * must interpolate the center of mass position.
 */

namespace org.jbox2d.common
{
    public class Sweep
    {
        private static readonly long serialVersionUID = 1L;

        /** Local center of mass position */
        public readonly Vec2 c;
        public readonly Vec2 c0;
        public readonly Vec2 localCenter;
        /** World angles */
        public double a;
        public double a0;

        /** Fraction of the current time step in the range [0,1] c0 and a0 are the positions at alpha0. */
        public double alpha0;

        public Sweep()
        {
            localCenter = new Vec2();
            c0 = new Vec2();
            c = new Vec2();
        }

        public string toString()
        {
            string s = "Sweep:localCenter: " + localCenter + "";
            s += "c0: " + c0 + ", c: " + c + "";
            s += "a0: " + a0 + ", a: " + a + "";
            return s;
        }

        public void normalize()
        {
            double d = MathUtils.TWOPI*MathUtils.floor(a0/MathUtils.TWOPI);
            a0 -= d;
            a -= d;
        }

        public Sweep set(Sweep argCloneFrom)
        {
            localCenter.set(argCloneFrom.localCenter);
            c0.set(argCloneFrom.c0);
            c.set(argCloneFrom.c);
            a0 = argCloneFrom.a0;
            a = argCloneFrom.a;
            return this;
        }

        /**
   * Get the interpolated transform at a specific time.
   * 
   * @param xf the result is placed here - must not be null
   * @param t the normalized time in [0,1].
   */

        public void getTransform(Transform xf, double beta)
        {
            // if (xf == null)
            // xf = new XForm();
            // center = p + R * localCenter
            /*
     * if (1.0d - t0 > Settings.EPSILON) { double alpha = (t - t0) / (1.0d - t0); xf.position.x =
     * (1.0d - alpha) * c0.x + alpha * c.x; xf.position.y = (1.0d - alpha) * c0.y + alpha * c.y;
     * double angle = (1.0d - alpha) * a0 + alpha * a; xf.R.set(angle); } else { xf.position.set(c);
     * xf.R.set(a); }
     */

            xf.p.x = (1.0d - beta)*c0.x + beta*c.x;
            xf.p.y = (1.0d - beta)*c0.y + beta*c.y;
            // double angle = (1.0d - alpha) * a0 + alpha * a;
            // xf.R.set(angle);
            xf.q.set((1.0d - beta)*a0 + beta*a);

            // Shift to origin
            //xf->p -= b2Mul(xf->q, localCenter);
            Rot q = xf.q;
            xf.p.x -= q.c*localCenter.x - q.s*localCenter.y;
            xf.p.y -= q.s*localCenter.x + q.c*localCenter.y;
        }

        /**
   * Advance the sweep forward, yielding a new initial state.
   * 
   * @param alpha the new initial time.
   */

        public void advance(double alpha)
        {
//    // c0 = (1.0d - t) * c0 + t*c;
//    double beta = (alpha - alpha0) / (1.0d - alpha0);
//    c0.x = (1.0d - beta) * c0.x + beta * c.x;
//    c0.y = (1.0d - beta) * c0.y + beta * c.y;
//    a0 = (1.0d - beta) * a0 + beta * a;
//    alpha0 = alpha;
            c0.x = (1.0d - alpha)*c0.x + alpha*c.x;
            c0.y = (1.0d - alpha)*c0.y + alpha*c.y;
            a0 = (1.0d - alpha)*a0 + alpha*a;
        }
    }
}