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
using org.jbox2d.dynamics;

namespace org.jbox2d.pooling.normal
{
    public class MutableStack<E> : IDynamicStack<E>
    {
        private int index;
        private readonly int _argInitSize;

        private Func<E> _newInstance;
        public Func<E> newInstance
        {
            get { return _newInstance; }
            set
            {
                _newInstance = value;

                extendStack(_argInitSize);

            }
        }

        private int size;
        private object[] stack;

        public MutableStack(int argInitSize)
        {
            _argInitSize = argInitSize;
            index = 0;
            stack = null;
            index = 0;
        }


        public E pop()
        {
            if (index >= size)
            {
                extendStack(size*2);
            }
            return (E) stack[index++];
        }

        public void push(E argObject)
        {
            stack[--index] = argObject;
        }

        private void extendStack(int argSize)
        {
            var newStack = new object[argSize];
            if (stack != null)
            {
                ArrayHelper.Copy(stack, 0, newStack, 0, size);
            }
            for (int i = 0; i < newStack.Length; i++)
            {
                newStack[i] = newInstance();
            }
            stack = newStack;
            size = newStack.Length;
        }

        /** Creates a new instance of the object contained by this stack. */
    }
}