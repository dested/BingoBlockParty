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
 * Contains methods from MathUtils that rely on JVM features. These are separated out from
 * MathUtils so that they can be overridden when compiling for GWT.
 */

namespace org.jbox2d.common
{
    public class PlatformMathUtils
    {
/*
        private static readonly double SHIFT23 = 1 << 23;
        private static readonly double INV_SHIFT23 = 1.0d/SHIFT23;

        public static double fastPow(double a, double b)
        {
            double x = NumberHelper.doubleToRawIntBits(a);
            x *= INV_SHIFT23;
            x -= 127;
            double y = x - (x >= 0 ? (int) x : (int) x - 1);
            b *= x + (y - y*y)*0.346607d;
            y = b - (b >= 0 ? (int) b : (int) b - 1);
            y = (y - y*y)*0.33971d;
            return NumberHelper.intBitsToDouble((int) ((b + 127 - y)*SHIFT23));
        }
*/
    }
}