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


using System.Collections.Generic;
using org.jbox2d.common;

/**
 * not thread safe Vec2[] pool
 * @author dmurph
 *
 */

namespace org.jbox2d.pooling.arrays
{
    public class Vec2Array
    {
        private readonly Dictionary<int, Vec2[]> map = new Dictionary<int, Vec2[]>();

        public Vec2[] get(int argLength)
        {
            if (!map.ContainsKey(argLength))
            {
                map[argLength] = getInitializedArray(argLength);
            }

            return map[argLength];
        }

        public Vec2[] getInitializedArray(int argLength)
        {
            var ray = new Vec2[argLength];
            for (int i = 0; i < ray.Length; i++)
            {
                ray[i] = new Vec2();
            }
            return ray;
        }
    }
}