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


using org.jbox2d.common;
using org.jbox2d.pooling;

//Linear constraint (point-to-line)
//d = pB - pA = xB + rB - xA - rA
//C = dot(ay, d)
//Cdot = dot(d, cross(wA, ay)) + dot(ay, vB + cross(wB, rB) - vA - cross(wA, rA))
//   = -dot(ay, vA) - dot(cross(d + rA, ay), wA) + dot(ay, vB) + dot(cross(rB, ay), vB)
//J = [-ay, -cross(d + rA, ay), ay, cross(rB, ay)]

//Spring linear constraint
//C = dot(ax, d)
//Cdot = = -dot(ax, vA) - dot(cross(d + rA, ax), wA) + dot(ax, vB) + dot(cross(rB, ax), vB)
//J = [-ax -cross(d+rA, ax) ax cross(rB, ax)]

//Motor rotational constraint
//Cdot = wB - wA
//J = [0 0 -1 0 0 1]

/**
 * A wheel joint. This joint provides two degrees of freedom: translation along an axis fixed in
 * bodyA and rotation in the plane. You can use a joint limit to restrict the range of motion and a
 * joint motor to drive the rotation or to model rotational friction. This joint is designed for
 * vehicle suspensions.
 * 
 * @author Daniel Murphy
 */

namespace org.jbox2d.dynamics.joints
{
    public class WheelJoint : Joint
    {
        // Solver shared
        private readonly Vec2 d2 = new Vec2();
        private readonly Vec2 m_ax = new Vec2();
        private readonly Vec2 m_ay = new Vec2();
        private readonly Vec2 m_localAnchorA = new Vec2();
        private readonly Vec2 m_localAnchorB = new Vec2();
        private readonly Vec2 m_localCenterA = new Vec2();
        private readonly Vec2 m_localCenterB = new Vec2();
        private readonly Vec2 m_localXAxisA = new Vec2();
        private readonly Vec2 m_localYAxisA = new Vec2();
        private readonly Vec2 rA = new Vec2();
        private readonly Vec2 rB = new Vec2();
        private double m_bias;
        private double m_dampingRatio;

        private bool m_enableMotor;
        private double m_frequencyHz;
        private double m_gamma;
        private double m_impulse;

        // Solver temp
        private int m_indexA;
        private int m_indexB;
        private double m_invIA;
        private double m_invIB;
        private double m_invMassA;
        private double m_invMassB;
        private double m_mass;
        private double m_maxMotorTorque;
        private double m_motorImpulse;
        private double m_motorMass;
        private double m_motorSpeed;

        private double m_sAx;
        private double m_sAy;
        private double m_sBx;
        private double m_sBy;
        private double m_springImpulse;

        private double m_springMass;

        public WheelJoint(IWorldPool argPool, WheelJointDef def) : base(argPool, def)
        {
            m_localAnchorA.set(def.localAnchorA);
            m_localAnchorB.set(def.localAnchorB);
            m_localXAxisA.set(def.localAxisA);
            Vec2.crossToOutUnsafe(1.0f, m_localXAxisA, m_localYAxisA);


            m_motorMass = 0.0f;
            m_motorImpulse = 0.0f;

            m_maxMotorTorque = def.maxMotorTorque;
            m_motorSpeed = def.motorSpeed;
            m_enableMotor = def.enableMotor;

            m_frequencyHz = def.frequencyHz;
            m_dampingRatio = def.dampingRatio;
        }

        public Vec2 getLocalAnchorA()
        {
            return m_localAnchorA;
        }

        public Vec2 getLocalAnchorB()
        {
            return m_localAnchorB;
        }


        public override void getAnchorA(Vec2 argOut)
        {
            m_bodyA.getWorldPointToOut(m_localAnchorA, argOut);
        }


        public override void getAnchorB(Vec2 argOut)
        {
            m_bodyB.getWorldPointToOut(m_localAnchorB, argOut);
        }


        public override void getReactionForce(double inv_dt, Vec2 argOut)
        {
            Vec2 temp = pool.popVec2();
            temp.set(m_ay).mulLocal(m_impulse);
            argOut.set(m_ax).mulLocal(m_springImpulse).addLocal(temp).mulLocal(inv_dt);
            pool.pushVec2(1);
        }


        public override double getReactionTorque(double inv_dt)
        {
            return inv_dt*m_motorImpulse;
        }

        public double getJointTranslation()
        {
            Body b1 = m_bodyA;
            Body b2 = m_bodyB;

            Vec2 p1 = pool.popVec2();
            Vec2 p2 = pool.popVec2();
            Vec2 axis = pool.popVec2();
            b1.getWorldPointToOut(m_localAnchorA, p1);
            b2.getWorldPointToOut(m_localAnchorA, p2);
            p2.subLocal(p1);
            b1.getWorldVectorToOut(m_localXAxisA, axis);

            double translation = Vec2.dot(p2, axis);
            pool.pushVec2(3);
            return translation;
        }

        /** For serialization */

        public Vec2 getLocalAxisA()
        {
            return m_localXAxisA;
        }

        public double getJointSpeed()
        {
            return m_bodyA.m_angularVelocity - m_bodyB.m_angularVelocity;
        }

        public bool isMotorEnabled()
        {
            return m_enableMotor;
        }

        public void enableMotor(bool flag)
        {
            m_bodyA.setAwake(true);
            m_bodyB.setAwake(true);
            m_enableMotor = flag;
        }

        public void setMotorSpeed(double speed)
        {
            m_bodyA.setAwake(true);
            m_bodyB.setAwake(true);
            m_motorSpeed = speed;
        }

        public double getMotorSpeed()
        {
            return m_motorSpeed;
        }

        public double getMaxMotorTorque()
        {
            return m_maxMotorTorque;
        }

        public void setMaxMotorTorque(double torque)
        {
            m_bodyA.setAwake(true);
            m_bodyB.setAwake(true);
            m_maxMotorTorque = torque;
        }

        public double getMotorTorque(double inv_dt)
        {
            return m_motorImpulse*inv_dt;
        }

        public void setSpringFrequencyHz(double hz)
        {
            m_frequencyHz = hz;
        }

        public double getSpringFrequencyHz()
        {
            return m_frequencyHz;
        }

        public void setSpringDampingRatio(double ratio)
        {
            m_dampingRatio = ratio;
        }

        public double getSpringDampingRatio()
        {
            return m_dampingRatio;
        }

        // pooling


        public override void initVelocityConstraints(SolverData data)
        {
            m_indexA = m_bodyA.m_islandIndex;
            m_indexB = m_bodyB.m_islandIndex;
            m_localCenterA.set(m_bodyA.m_sweep.localCenter);
            m_localCenterB.set(m_bodyB.m_sweep.localCenter);
            m_invMassA = m_bodyA.m_invMass;
            m_invMassB = m_bodyB.m_invMass;
            m_invIA = m_bodyA.m_invI;
            m_invIB = m_bodyB.m_invI;

            double mA = m_invMassA, mB = m_invMassB;
            double iA = m_invIA, iB = m_invIB;

            Vec2 cA = data.positions[m_indexA].c;
            double aA = data.positions[m_indexA].a;
            Vec2 vA = data.velocities[m_indexA].v;
            double wA = data.velocities[m_indexA].w;

            Vec2 cB = data.positions[m_indexB].c;
            double aB = data.positions[m_indexB].a;
            Vec2 vB = data.velocities[m_indexB].v;
            double wB = data.velocities[m_indexB].w;

            Rot qA = pool.popRot();
            Rot qB = pool.popRot();
            Vec2 temp = pool.popVec2();

            qA.set(aA);
            qB.set(aB);

            // Compute the effective masses.
            Rot.mulToOutUnsafe(qA, temp.set(m_localAnchorA).subLocal(m_localCenterA), rA);
            Rot.mulToOutUnsafe(qB, temp.set(m_localAnchorB).subLocal(m_localCenterB), rB);
            d2.set(cB).addLocal(rB).subLocal(cA).subLocal(rA);

            // Point to line constraint
            {
                Rot.mulToOut(qA, m_localYAxisA, m_ay);
                m_sAy = Vec2.cross(temp.set(d2).addLocal(rA), m_ay);
                m_sBy = Vec2.cross(rB, m_ay);

                m_mass = mA + mB + iA*m_sAy*m_sAy + iB*m_sBy*m_sBy;

                if (m_mass > 0.0f)
                {
                    m_mass = 1.0f/m_mass;
                }
            }

            // Spring constraint
            m_springMass = 0.0f;
            m_bias = 0.0f;
            m_gamma = 0.0f;
            if (m_frequencyHz > 0.0f)
            {
                Rot.mulToOut(qA, m_localXAxisA, m_ax);
                m_sAx = Vec2.cross(temp.set(d2).addLocal(rA), m_ax);
                m_sBx = Vec2.cross(rB, m_ax);

                double invMass = mA + mB + iA*m_sAx*m_sAx + iB*m_sBx*m_sBx;

                if (invMass > 0.0f)
                {
                    m_springMass = 1.0f/invMass;

                    double C = Vec2.dot(d2, m_ax);

                    // Frequency
                    double omega = 2.0f*MathUtils.PI*m_frequencyHz;

                    // Damping coefficient
                    double d = 2.0f*m_springMass*m_dampingRatio*omega;

                    // Spring stiffness
                    double k = m_springMass*omega*omega;

                    // magic formulas
                    double h = data.step.dt;
                    m_gamma = h*(d + h*k);
                    if (m_gamma > 0.0f)
                    {
                        m_gamma = 1.0f/m_gamma;
                    }

                    m_bias = C*h*k*m_gamma;

                    m_springMass = invMass + m_gamma;
                    if (m_springMass > 0.0f)
                    {
                        m_springMass = 1.0f/m_springMass;
                    }
                }
            }
            else
            {
                m_springImpulse = 0.0f;
            }

            // Rotational motor
            if (m_enableMotor)
            {
                m_motorMass = iA + iB;
                if (m_motorMass > 0.0f)
                {
                    m_motorMass = 1.0f/m_motorMass;
                }
            }
            else
            {
                m_motorMass = 0.0f;
                m_motorImpulse = 0.0f;
            }

            if (data.step.warmStarting)
            {
                Vec2 P = pool.popVec2();
                // Account for variable time step.
                m_impulse *= data.step.dtRatio;
                m_springImpulse *= data.step.dtRatio;
                m_motorImpulse *= data.step.dtRatio;

                P.x = m_impulse*m_ay.x + m_springImpulse*m_ax.x;
                P.y = m_impulse*m_ay.y + m_springImpulse*m_ax.y;
                double LA = m_impulse*m_sAy + m_springImpulse*m_sAx + m_motorImpulse;
                double LB = m_impulse*m_sBy + m_springImpulse*m_sBx + m_motorImpulse;

                vA.x -= m_invMassA*P.x;
                vA.y -= m_invMassA*P.y;
                wA -= m_invIA*LA;

                vB.x += m_invMassB*P.x;
                vB.y += m_invMassB*P.y;
                wB += m_invIB*LB;
                pool.pushVec2(1);
            }
            else
            {
                m_impulse = 0.0f;
                m_springImpulse = 0.0f;
                m_motorImpulse = 0.0f;
            }
            pool.pushRot(2);
            pool.pushVec2(1);

            // data.velocities[m_indexA].v = vA;
            data.velocities[m_indexA].w = wA;
            // data.velocities[m_indexB].v = vB;
            data.velocities[m_indexB].w = wB;
        }


        public override void solveVelocityConstraints(SolverData data)
        {
            double mA = m_invMassA, mB = m_invMassB;
            double iA = m_invIA, iB = m_invIB;

            Vec2 vA = data.velocities[m_indexA].v;
            double wA = data.velocities[m_indexA].w;
            Vec2 vB = data.velocities[m_indexB].v;
            double wB = data.velocities[m_indexB].w;

            Vec2 temp = pool.popVec2();
            Vec2 P = pool.popVec2();

            // Solve spring constraint
            {
                double Cdot = Vec2.dot(m_ax, temp.set(vB).subLocal(vA)) + m_sBx*wB - m_sAx*wA;
                double impulse = -m_springMass*(Cdot + m_bias + m_gamma*m_springImpulse);
                m_springImpulse += impulse;

                P.x = impulse*m_ax.x;
                P.y = impulse*m_ax.y;
                double LA = impulse*m_sAx;
                double LB = impulse*m_sBx;

                vA.x -= mA*P.x;
                vA.y -= mA*P.y;
                wA -= iA*LA;

                vB.x += mB*P.x;
                vB.y += mB*P.y;
                wB += iB*LB;
            }

            // Solve rotational motor constraint
            {
                double Cdot = wB - wA - m_motorSpeed;
                double impulse = -m_motorMass*Cdot;

                double oldImpulse = m_motorImpulse;
                double maxImpulse = data.step.dt*m_maxMotorTorque;
                m_motorImpulse = MathUtils.clamp(m_motorImpulse + impulse, -maxImpulse, maxImpulse);
                impulse = m_motorImpulse - oldImpulse;

                wA -= iA*impulse;
                wB += iB*impulse;
            }

            // Solve point to line constraint
            {
                double Cdot = Vec2.dot(m_ay, temp.set(vB).subLocal(vA)) + m_sBy*wB - m_sAy*wA;
                double impulse = -m_mass*Cdot;
                m_impulse += impulse;

                P.x = impulse*m_ay.x;
                P.y = impulse*m_ay.y;
                double LA = impulse*m_sAy;
                double LB = impulse*m_sBy;

                vA.x -= mA*P.x;
                vA.y -= mA*P.y;
                wA -= iA*LA;

                vB.x += mB*P.x;
                vB.y += mB*P.y;
                wB += iB*LB;
            }
            pool.pushVec2(2);

            // data.velocities[m_indexA].v = vA;
            data.velocities[m_indexA].w = wA;
            // data.velocities[m_indexB].v = vB;
            data.velocities[m_indexB].w = wB;
        }


        public override bool solvePositionConstraints(SolverData data)
        {
            Vec2 cA = data.positions[m_indexA].c;
            double aA = data.positions[m_indexA].a;
            Vec2 cB = data.positions[m_indexB].c;
            double aB = data.positions[m_indexB].a;

            Rot qA = pool.popRot();
            Rot qB = pool.popRot();
            Vec2 temp = pool.popVec2();

            qA.set(aA);
            qB.set(aB);

            Rot.mulToOut(qA, temp.set(m_localAnchorA).subLocal(m_localCenterA), rA);
            Rot.mulToOut(qB, temp.set(m_localAnchorB).subLocal(m_localCenterB), rB);
            d2.set(cB).subLocal(cA).addLocal(rB).subLocal(rA);

            Vec2 ay = pool.popVec2();
            Rot.mulToOut(qA, m_localYAxisA, ay);

            double sAy = Vec2.cross(temp.set(d2).addLocal(rA), ay);
            double sBy = Vec2.cross(rB, ay);

            double C = Vec2.dot(d2, ay);

            double k = m_invMassA + m_invMassB + m_invIA*m_sAy*m_sAy + m_invIB*m_sBy*m_sBy;

            double impulse;
            if (k != 0.0f)
            {
                impulse = -C/k;
            }
            else
            {
                impulse = 0.0f;
            }

            Vec2 P = pool.popVec2();
            P.x = impulse*ay.x;
            P.y = impulse*ay.y;
            double LA = impulse*sAy;
            double LB = impulse*sBy;

            cA.x -= m_invMassA*P.x;
            cA.y -= m_invMassA*P.y;
            aA -= m_invIA*LA;
            cB.x += m_invMassB*P.x;
            cB.y += m_invMassB*P.y;
            aB += m_invIB*LB;

            pool.pushVec2(3);
            pool.pushRot(2);
            // data.positions[m_indexA].c = cA;
            data.positions[m_indexA].a = aA;
            // data.positions[m_indexB].c = cB;
            data.positions[m_indexB].a = aB;

            return MathUtils.abs(C) <= Settings.linearSlop;
        }
    }
}