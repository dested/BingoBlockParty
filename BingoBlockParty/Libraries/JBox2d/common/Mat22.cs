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
 * A 2-by-2 matrix. Stored in column-major order.
 */

namespace org.jbox2d.common
{
    public class Mat22
    {
        private static readonly long serialVersionUID = 2L;

        public readonly Vec2 ex, ey;

        /** Convert the matrix to printable format. */

        /**
   * Construct zero matrix. Note: this is NOT an identity matrix! djm fixed double allocation
   * problem
   */

        public Mat22()
        {
            ex = new Vec2();
            ey = new Vec2();
        }

        /**
   * Create a matrix with given vectors as columns.
   * 
   * @param c1 Column 1 of matrix
   * @param c2 Column 2 of matrix
   */

        public Mat22(Vec2 c1, Vec2 c2)
        {
            ex = c1.clone();
            ey = c2.clone();
        }

        /**
   * Create a matrix from four doubles.
   * 
   * @param exx
   * @param col2x
   * @param exy
   * @param col2y
   */

        public Mat22(double exx, double col2x, double exy, double col2y)
        {
            ex = new Vec2(exx, exy);
            ey = new Vec2(col2x, col2y);
        }

        public override string ToString()
        {
            string s = "";
            s += "[" + ex.x + "," + ey.x + "]";
            s += "[" + ex.y + "," + ey.y + "]";
            return s;
        }

        /**
   * Set as a copy of another matrix.
   * 
   * @param m Matrix to copy
   */

        public Mat22 set(Mat22 m)
        {
            ex.x = m.ex.x;
            ex.y = m.ex.y;
            ey.x = m.ey.x;
            ey.y = m.ey.y;
            return this;
        }

        public Mat22 set(double exx, double col2x, double exy, double col2y)
        {
            ex.x = exx;
            ex.y = exy;
            ey.x = col2x;
            ey.y = col2y;
            return this;
        }

        /**
   * Return a clone of this matrix. djm fixed double allocation
   */
        // @Override // annotation omitted for GWT-compatibility
        public Mat22 clone()
        {
            return new Mat22(ex, ey);
        }

        /**
   * Set as a matrix representing a rotation.
   * 
   * @param angle Rotation (in radians) that matrix represents.
   */

        public void set(double angle)
        {
            double c = MathUtils.cos(angle), s = MathUtils.sin(angle);
            ex.x = c;
            ey.x = -s;
            ex.y = s;
            ey.y = c;
        }

        /**
   * Set as the identity matrix.
   */

        public void setIdentity()
        {
            ex.x = 1.0d;
            ey.x = 0.0d;
            ex.y = 0.0d;
            ey.y = 1.0d;
        }

        /**
   * Set as the zero matrix.
   */

        public void setZero()
        {
            ex.x = 0.0d;
            ey.x = 0.0d;
            ex.y = 0.0d;
            ey.y = 0.0d;
        }

        /**
   * Extract the angle from this matrix (assumed to be a rotation matrix).
   * 
   * @return
   */

        public double getAngle()
        {
            return MathUtils.atan2(ex.y, ex.x);
        }

        /**
   * Set by column vectors.
   * 
   * @param c1 Column 1
   * @param c2 Column 2
   */

        public void set(Vec2 c1, Vec2 c2)
        {
            ex.x = c1.x;
            ey.x = c2.x;
            ex.y = c1.y;
            ey.y = c2.y;
        }

        /** Returns the inverted Mat22 - does NOT invert the matrix locally! */

        public Mat22 invert()
        {
            double a = ex.x, b = ey.x, c = ex.y, d = ey.y;
            var B = new Mat22();
            double det = a*d - b*c;
            if (det != 0)
            {
                det = 1.0d/det;
            }
            B.ex.x = det*d;
            B.ey.x = -det*b;
            B.ex.y = -det*c;
            B.ey.y = det*a;
            return B;
        }

        public Mat22 invertLocal()
        {
            double a = ex.x, b = ey.x, c = ex.y, d = ey.y;
            double det = a*d - b*c;
            if (det != 0)
            {
                det = 1.0d/det;
            }
            ex.x = det*d;
            ey.x = -det*b;
            ex.y = -det*c;
            ey.y = det*a;
            return this;
        }

        public void invertToOut(Mat22 out_)
        {
            double a = ex.x, b = ey.x, c = ex.y, d = ey.y;
            double det = a*d - b*c;
            // b2Assert(det != 0.0d);
            det = 1.0d/det;
            out_.ex.x = det*d;
            out_.ey.x = -det*b;
            out_.ex.y = -det*c;
            out_.ey.y = det*a;
        }


        /**
   * Return the matrix composed of the absolute values of all elements. djm: fixed double allocation
   * 
   * @return Absolute value matrix
   */

        public Mat22 abs()
        {
            return new Mat22(MathUtils.abs(ex.x), MathUtils.abs(ey.x), MathUtils.abs(ex.y),
                MathUtils.abs(ey.y));
        }

        /* djm: added */

        public void absLocal()
        {
            ex.absLocal();
            ey.absLocal();
        }

        /**
   * Return the matrix composed of the absolute values of all elements.
   * 
   * @return Absolute value matrix
   */

        public static Mat22 abs(Mat22 R)
        {
            return R.abs();
        }

        /* djm created */

        public static void absToOut(Mat22 R, Mat22 out_)
        {
            out_.ex.x = MathUtils.abs(R.ex.x);
            out_.ex.y = MathUtils.abs(R.ex.y);
            out_.ey.x = MathUtils.abs(R.ey.x);
            out_.ey.y = MathUtils.abs(R.ey.y);
        }

        /**
   * Multiply a vector by this matrix.
   * 
   * @param v Vector to multiply by matrix.
   * @return Resulting vector
   */

        public Vec2 mul(Vec2 v)
        {
            return new Vec2(ex.x*v.x + ey.x*v.y, ex.y*v.x + ey.y*v.y);
        }

        public void mulToOut(Vec2 v, Vec2 out_)
        {
            double tempy = ex.y*v.x + ey.y*v.y;
            out_.x = ex.x*v.x + ey.x*v.y;
            out_.y = tempy;
        }

        public void mulToOutUnsafe(Vec2 v, Vec2 out_)
        {
            out_.x = ex.x*v.x + ey.x*v.y;
            out_.y = ex.y*v.x + ey.y*v.y;
        }


        /**
   * Multiply another matrix by this one (this one on left). djm optimized
   * 
   * @param R
   * @return
   */

        public Mat22 mul(Mat22 R)
        {
            /*
     * Mat22 C = new Mat22();C.set(this.mul(R.ex), this.mul(R.ey));return C;
     */
            var C = new Mat22();
            C.ex.x = ex.x*R.ex.x + ey.x*R.ex.y;
            C.ex.y = ex.y*R.ex.x + ey.y*R.ex.y;
            C.ey.x = ex.x*R.ey.x + ey.x*R.ey.y;
            C.ey.y = ex.y*R.ey.x + ey.y*R.ey.y;
            // C.set(ex,col2);
            return C;
        }

        public Mat22 mulLocal(Mat22 R)
        {
            mulToOut(R, this);
            return this;
        }

        public void mulToOut(Mat22 R, Mat22 out_)
        {
            double tempy1 = ex.y*R.ex.x + ey.y*R.ex.y;
            double tempx1 = ex.x*R.ex.x + ey.x*R.ex.y;
            out_.ex.x = tempx1;
            out_.ex.y = tempy1;
            double tempy2 = ex.y*R.ey.x + ey.y*R.ey.y;
            double tempx2 = ex.x*R.ey.x + ey.x*R.ey.y;
            out_.ey.x = tempx2;
            out_.ey.y = tempy2;
        }

        public void mulToOutUnsafe(Mat22 R, Mat22 out_)
        {
            out_.ex.x = ex.x*R.ex.x + ey.x*R.ex.y;
            out_.ex.y = ex.y*R.ex.x + ey.y*R.ex.y;
            out_.ey.x = ex.x*R.ey.x + ey.x*R.ey.y;
            out_.ey.y = ex.y*R.ey.x + ey.y*R.ey.y;
        }

        /**
   * Multiply another matrix by the transpose of this one (transpose of this one on left). djm:
   * optimized
   * 
   * @param B
   * @return
   */

        public Mat22 mulTrans(Mat22 B)
        {
            /*
     * Vec2 c1 = new Vec2(Vec2.dot(this.ex, B.ex), Vec2.dot(this.ey, B.ex)); Vec2 c2 = new
     * Vec2(Vec2.dot(this.ex, B.ey), Vec2.dot(this.ey, B.ey)); Mat22 C = new Mat22(); C.set(c1, c2);
     * return C;
     */
            var C = new Mat22();

            C.ex.x = Vec2.dot(ex, B.ex);
            C.ex.y = Vec2.dot(ey, B.ex);

            C.ey.x = Vec2.dot(ex, B.ey);
            C.ey.y = Vec2.dot(ey, B.ey);
            return C;
        }

        public Mat22 mulTransLocal(Mat22 B)
        {
            mulTransToOut(B, this);
            return this;
        }

        public void mulTransToOut(Mat22 B, Mat22 out_)
        {
            /*
     * out_.ex.x = Vec2.dot(this.ex, B.ex); out_.ex.y = Vec2.dot(this.ey, B.ex); out_.ey.x =
     * Vec2.dot(this.ex, B.ey); out_.ey.y = Vec2.dot(this.ey, B.ey);
     */
            double x1 = ex.x*B.ex.x + ex.y*B.ex.y;
            double y1 = ey.x*B.ex.x + ey.y*B.ex.y;
            double x2 = ex.x*B.ey.x + ex.y*B.ey.y;
            double y2 = ey.x*B.ey.x + ey.y*B.ey.y;
            out_.ex.x = x1;
            out_.ey.x = x2;
            out_.ex.y = y1;
            out_.ey.y = y2;
        }

        public void mulTransToOutUnsafe(Mat22 B, Mat22 out_)
        {
            out_.ex.x = ex.x*B.ex.x + ex.y*B.ex.y;
            out_.ey.x = ex.x*B.ey.x + ex.y*B.ey.y;
            out_.ex.y = ey.x*B.ex.x + ey.y*B.ex.y;
            out_.ey.y = ey.x*B.ey.x + ey.y*B.ey.y;
        }

        /**
   * Multiply a vector by the transpose of this matrix.
   * 
   * @param v
   * @return
   */

        public Vec2 mulTrans(Vec2 v)
        {
            // return new Vec2(Vec2.dot(v, ex), Vec2.dot(v, col2));
            return new Vec2((v.x*ex.x + v.y*ex.y), (v.x*ey.x + v.y*ey.y));
        }

        /* djm added */

        public void mulTransToOut(Vec2 v, Vec2 out_)
        {
            /*
     * out_.x = Vec2.dot(v, ex); out_.y = Vec2.dot(v, col2);
     */
            double tempx = v.x*ex.x + v.y*ex.y;
            out_.y = v.x*ey.x + v.y*ey.y;
            out_.x = tempx;
        }

        /**
   * Add this matrix to B, return the result.
   * 
   * @param B
   * @return
   */

        public Mat22 add(Mat22 B)
        {
            // return new Mat22(ex.add(B.ex), col2.add(B.ey));
            var m = new Mat22();
            m.ex.x = ex.x + B.ex.x;
            m.ex.y = ex.y + B.ex.y;
            m.ey.x = ey.x + B.ey.x;
            m.ey.y = ey.y + B.ey.y;
            return m;
        }

        /**
   * Add B to this matrix locally.
   * 
   * @param B
   * @return
   */

        public Mat22 addLocal(Mat22 B)
        {
            // ex.addLocal(B.ex);
            // col2.addLocal(B.ey);
            ex.x += B.ex.x;
            ex.y += B.ex.y;
            ey.x += B.ey.x;
            ey.y += B.ey.y;
            return this;
        }

        /**
   * Solve A * x = b where A = this matrix.
   * 
   * @return The vector x that solves the above equation.
   */

        public Vec2 solve(Vec2 b)
        {
            double a11 = ex.x, a12 = ey.x, a21 = ex.y, a22 = ey.y;
            double det = a11*a22 - a12*a21;
            if (det != 0.0d)
            {
                det = 1.0d/det;
            }
            var x = new Vec2(det*(a22*b.x - a12*b.y), det*(a11*b.y - a21*b.x));
            return x;
        }

        public void solveToOut(Vec2 b, Vec2 out_)
        {
            double a11 = ex.x, a12 = ey.x, a21 = ex.y, a22 = ey.y;
            double det = a11*a22 - a12*a21;
            if (det != 0.0d)
            {
                det = 1.0d/det;
            }
            double tempy = det*(a11*b.y - a21*b.x);
            out_.x = det*(a22*b.x - a12*b.y);
            out_.y = tempy;
        }

        public static Vec2 mul(Mat22 R, Vec2 v)
        {
            // return R.mul(v);
            return new Vec2(R.ex.x*v.x + R.ey.x*v.y, R.ex.y*v.x + R.ey.y*v.y);
        }

        public static void mulToOut(Mat22 R, Vec2 v, Vec2 out_)
        {
            double tempy = R.ex.y*v.x + R.ey.y*v.y;
            out_.x = R.ex.x*v.x + R.ey.x*v.y;
            out_.y = tempy;
        }

        public static void mulToOutUnsafe(Mat22 R, Vec2 v, Vec2 out_)
        {
            out_.x = R.ex.x*v.x + R.ey.x*v.y;
            out_.y = R.ex.y*v.x + R.ey.y*v.y;
        }

        public static Mat22 mul(Mat22 A, Mat22 B)
        {
            // return A.mul(B);
            var C = new Mat22();
            C.ex.x = A.ex.x*B.ex.x + A.ey.x*B.ex.y;
            C.ex.y = A.ex.y*B.ex.x + A.ey.y*B.ex.y;
            C.ey.x = A.ex.x*B.ey.x + A.ey.x*B.ey.y;
            C.ey.y = A.ex.y*B.ey.x + A.ey.y*B.ey.y;
            return C;
        }

        public static void mulToOut(Mat22 A, Mat22 B, Mat22 out_)
        {
            double tempy1 = A.ex.y*B.ex.x + A.ey.y*B.ex.y;
            double tempx1 = A.ex.x*B.ex.x + A.ey.x*B.ex.y;
            double tempy2 = A.ex.y*B.ey.x + A.ey.y*B.ey.y;
            double tempx2 = A.ex.x*B.ey.x + A.ey.x*B.ey.y;
            out_.ex.x = tempx1;
            out_.ex.y = tempy1;
            out_.ey.x = tempx2;
            out_.ey.y = tempy2;
        }

        public static void mulToOutUnsafe(Mat22 A, Mat22 B, Mat22 out_)
        {
            out_.ex.x = A.ex.x*B.ex.x + A.ey.x*B.ex.y;
            out_.ex.y = A.ex.y*B.ex.x + A.ey.y*B.ex.y;
            out_.ey.x = A.ex.x*B.ey.x + A.ey.x*B.ey.y;
            out_.ey.y = A.ex.y*B.ey.x + A.ey.y*B.ey.y;
        }

        public static Vec2 mulTrans(Mat22 R, Vec2 v)
        {
            return new Vec2((v.x*R.ex.x + v.y*R.ex.y), (v.x*R.ey.x + v.y*R.ey.y));
        }

        public static void mulTransToOut(Mat22 R, Vec2 v, Vec2 out_)
        {
            double out_x = v.x*R.ex.x + v.y*R.ex.y;
            out_.y = v.x*R.ey.x + v.y*R.ey.y;
            out_.x = out_x;
        }

        public static void mulTransToOutUnsafe(Mat22 R, Vec2 v, Vec2 out_)
        {
            out_.y = v.x*R.ey.x + v.y*R.ey.y;
            out_.x = v.x*R.ex.x + v.y*R.ex.y;
        }

        public static Mat22 mulTrans(Mat22 A, Mat22 B)
        {
            var C = new Mat22();
            C.ex.x = A.ex.x*B.ex.x + A.ex.y*B.ex.y;
            C.ex.y = A.ey.x*B.ex.x + A.ey.y*B.ex.y;
            C.ey.x = A.ex.x*B.ey.x + A.ex.y*B.ey.y;
            C.ey.y = A.ey.x*B.ey.x + A.ey.y*B.ey.y;
            return C;
        }

        public static void mulTransToOut(Mat22 A, Mat22 B, Mat22 out_)
        {
            double x1 = A.ex.x*B.ex.x + A.ex.y*B.ex.y;
            double y1 = A.ey.x*B.ex.x + A.ey.y*B.ex.y;
            double x2 = A.ex.x*B.ey.x + A.ex.y*B.ey.y;
            double y2 = A.ey.x*B.ey.x + A.ey.y*B.ey.y;

            out_.ex.x = x1;
            out_.ex.y = y1;
            out_.ey.x = x2;
            out_.ey.y = y2;
        }

        public static void mulTransToOutUnsafe(Mat22 A, Mat22 B, Mat22 out_)
        {
            out_.ex.x = A.ex.x*B.ex.x + A.ex.y*B.ex.y;
            out_.ex.y = A.ey.x*B.ex.x + A.ey.y*B.ex.y;
            out_.ey.x = A.ex.x*B.ey.x + A.ex.y*B.ey.y;
            out_.ey.y = A.ey.x*B.ey.x + A.ey.y*B.ey.y;
        }

        public static Mat22 createRotationalTransform(double angle)
        {
            var mat = new Mat22();
            double c = MathUtils.cos(angle);
            double s = MathUtils.sin(angle);
            mat.ex.x = c;
            mat.ey.x = -s;
            mat.ex.y = s;
            mat.ey.y = c;
            return mat;
        }

        public static void createRotationalTransform(double angle, Mat22 out_)
        {
            double c = MathUtils.cos(angle);
            double s = MathUtils.sin(angle);
            out_.ex.x = c;
            out_.ey.x = -s;
            out_.ex.y = s;
            out_.ey.y = c;
        }

        public static Mat22 createScaleTransform(double scale)
        {
            var mat = new Mat22();
            mat.ex.x = scale;
            mat.ey.y = scale;
            return mat;
        }

        public static void createScaleTransform(double scale, Mat22 out_)
        {
            out_.ex.x = scale;
            out_.ey.y = scale;
        }


        public override int GetHashCode()
        {
            int prime = 31;
            int result = 1;
            result = prime*result + ((ex == null) ? 0 : ex.GetHashCode());
            result = prime*result + ((ey == null) ? 0 : ey.GetHashCode());
            return result;
        }


        public override bool Equals(object obj)
        {
            if (this == obj) return true;
            if (obj == null) return false;
            if (GetType() != obj.GetType()) return false;
            var other = (Mat22) obj;
            if (ex == null)
            {
                if (other.ex != null) return false;
            }
            else if (!ex.Equals(other.ex)) return false;
            if (ey == null)
            {
                if (other.ey != null) return false;
            }
            else if (!ey.Equals(other.ey)) return false;
            return true;
        }
    }
}