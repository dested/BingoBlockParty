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
using org.jbox2d.collision;
using org.jbox2d.collision.shapes;
using org.jbox2d.common;

/**
 * @author Daniel
 */

namespace org.jbox2d.dynamics.contacts
{
    public class ContactSolver
    {
        public static readonly bool DEBUG_SOLVER = false;
        public static readonly double k_errorTol = 1e-3d;
        /**
   * For each solver, this is the initial number of constraints in the array, which expands as
   * needed.
   */
        public static readonly int INITIAL_NUM_CONSTRAINTS = 256;

        /**
   * Ensure a reasonable condition number. for the block solver
   */
        public static readonly double k_maxConditionNumber = 100.0d;
        private readonly Vec2 P = new Vec2();
        private readonly Vec2 P1 = new Vec2();
        private readonly Vec2 P2 = new Vec2();
        private readonly Vec2 a = new Vec2();
        private readonly Vec2 b = new Vec2();
        private readonly Vec2 d = new Vec2();
        private readonly Vec2 dv1 = new Vec2();
        private readonly Vec2 dv2 = new Vec2();
        private readonly PositionSolverManifold psolver = new PositionSolverManifold();
        private readonly Vec2 rA = new Vec2();
        private readonly Vec2 rB = new Vec2();
        private readonly Vec2 tangent = new Vec2();
        private readonly Vec2 temp = new Vec2();
        private readonly Vec2 temp1 = new Vec2();
        private readonly Vec2 temp2 = new Vec2();
        private readonly WorldManifold worldManifold = new WorldManifold();
        private readonly Vec2 x = new Vec2();
        private readonly Transform xfA = new Transform();
        private readonly Transform xfB = new Transform();
        public Contact[] m_contacts;
        public int m_count;
        public ContactPositionConstraint[] m_positionConstraints;

        public Position[] m_positions;
        public TimeStep m_step;
        public Velocity[] m_velocities;
        public ContactVelocityConstraint[] m_velocityConstraints;

        public ContactSolver()
        {
            m_positionConstraints = new ContactPositionConstraint[INITIAL_NUM_CONSTRAINTS];
            m_velocityConstraints = new ContactVelocityConstraint[INITIAL_NUM_CONSTRAINTS];
            for (int i = 0; i < INITIAL_NUM_CONSTRAINTS; i++)
            {
                m_positionConstraints[i] = new ContactPositionConstraint();
                m_velocityConstraints[i] = new ContactVelocityConstraint();
            }
        }

        // djm pooling

        public void init(ContactSolverDef def)
        {
            // System.out.println("Initializing contact solver");
            m_step = def.step;
            m_count = def.count;

            if (m_positionConstraints.Length < m_count)
            {
                ContactPositionConstraint[] old = m_positionConstraints;
                m_positionConstraints = new ContactPositionConstraint[MathUtils.max(old.Length*2, m_count)];
                ArrayHelper.Copy(old, 0, m_positionConstraints, 0, old.Length);
                for (int i = old.Length; i < m_positionConstraints.Length; i++)
                {
                    m_positionConstraints[i] = new ContactPositionConstraint();
                }
            }

            if (m_velocityConstraints.Length < m_count)
            {
                ContactVelocityConstraint[] old = m_velocityConstraints;
                m_velocityConstraints = new ContactVelocityConstraint[MathUtils.max(old.Length*2, m_count)];
                ArrayHelper.Copy(old, 0, m_velocityConstraints, 0, old.Length);
                for (int i = old.Length; i < m_velocityConstraints.Length; i++)
                {
                    m_velocityConstraints[i] = new ContactVelocityConstraint();
                }
            }

            m_positions = def.positions;
            m_velocities = def.velocities;
            m_contacts = def.contacts;

            for (int i = 0; i < m_count; ++i)
            {
                // System.out.println("contacts: " + m_count);
                Contact contact = m_contacts[i];

                Fixture fixtureA = contact.m_fixtureA;
                Fixture fixtureB = contact.m_fixtureB;
                Shape shapeA = fixtureA.getShape();
                Shape shapeB = fixtureB.getShape();
                double radiusA = shapeA.m_radius;
                double radiusB = shapeB.m_radius;
                Body bodyA = fixtureA.getBody();
                Body bodyB = fixtureB.getBody();
                Manifold manifold = contact.getManifold();

                int pointCount = manifold.pointCount;

                ContactVelocityConstraint vc = m_velocityConstraints[i];
                vc.friction = contact.m_friction;
                vc.restitution = contact.m_restitution;
                vc.tangentSpeed = contact.m_tangentSpeed;
                vc.indexA = bodyA.m_islandIndex;
                vc.indexB = bodyB.m_islandIndex;
                vc.invMassA = bodyA.m_invMass;
                vc.invMassB = bodyB.m_invMass;
                vc.invIA = bodyA.m_invI;
                vc.invIB = bodyB.m_invI;
                vc.contactIndex = i;
                vc.pointCount = pointCount;
                vc.K.setZero();
                vc.normalMass.setZero();

                ContactPositionConstraint pc = m_positionConstraints[i];
                pc.indexA = bodyA.m_islandIndex;
                pc.indexB = bodyB.m_islandIndex;
                pc.invMassA = bodyA.m_invMass;
                pc.invMassB = bodyB.m_invMass;
                pc.localCenterA.set(bodyA.m_sweep.localCenter);
                pc.localCenterB.set(bodyB.m_sweep.localCenter);
                pc.invIA = bodyA.m_invI;
                pc.invIB = bodyB.m_invI;
                pc.localNormal.set(manifold.localNormal);
                pc.localPoint.set(manifold.localPoint);
                pc.pointCount = pointCount;
                pc.radiusA = radiusA;
                pc.radiusB = radiusB;
                pc.type = manifold.type;

                // System.out.println("contact point count: " + pointCount);
                for (int j = 0; j < pointCount; j++)
                {
                    ManifoldPoint cp = manifold.points[j];
                    VelocityConstraintPoint vcp = vc.points[j];

                    if (m_step.warmStarting)
                    {
                        // assert(cp.normalImpulse == 0);
                        // System.out.println("contact normal impulse: " + cp.normalImpulse);
                        vcp.normalImpulse = m_step.dtRatio*cp.normalImpulse;
                        vcp.tangentImpulse = m_step.dtRatio*cp.tangentImpulse;
                    }
                    else
                    {
                        vcp.normalImpulse = 0;
                        vcp.tangentImpulse = 0;
                    }

                    vcp.rA.setZero();
                    vcp.rB.setZero();
                    vcp.normalMass = 0;
                    vcp.tangentMass = 0;
                    vcp.velocityBias = 0;
                    pc.localPoints[j].x = cp.localPoint.x;
                    pc.localPoints[j].y = cp.localPoint.y;
                }
            }
        }

        // djm pooling, and from above

        public void warmStart()
        {
            // Warm start.
            for (int i = 0; i < m_count; ++i)
            {
                ContactVelocityConstraint vc = m_velocityConstraints[i];

                int indexA = vc.indexA;
                int indexB = vc.indexB;
                double mA = vc.invMassA;
                double iA = vc.invIA;
                double mB = vc.invMassB;
                double iB = vc.invIB;
                int pointCount = vc.pointCount;

                Vec2 vA = m_velocities[indexA].v;
                double wA = m_velocities[indexA].w;
                Vec2 vB = m_velocities[indexB].v;
                double wB = m_velocities[indexB].w;

                Vec2 normal = vc.normal;
                double tangentx = 1.0d*normal.y;
                double tangenty = -1.0d*normal.x;

                for (int j = 0; j < pointCount; ++j)
                {
                    VelocityConstraintPoint vcp = vc.points[j];
                    double Px = tangentx*vcp.tangentImpulse + normal.x*vcp.normalImpulse;
                    double Py = tangenty*vcp.tangentImpulse + normal.y*vcp.normalImpulse;

                    wA -= iA*(vcp.rA.x*Py - vcp.rA.y*Px);
                    vA.x -= Px*mA;
                    vA.y -= Py*mA;
                    wB += iB*(vcp.rB.x*Py - vcp.rB.y*Px);
                    vB.x += Px*mB;
                    vB.y += Py*mB;
                }
                m_velocities[indexA].w = wA;
                m_velocities[indexB].w = wB;
            }
        }

        // djm pooling, and from above

        public void initializeVelocityConstraints()
        {
            // Warm start.
            for (int i = 0; i < m_count; ++i)
            {
                ContactVelocityConstraint vc = m_velocityConstraints[i];
                ContactPositionConstraint pc = m_positionConstraints[i];

                double radiusA = pc.radiusA;
                double radiusB = pc.radiusB;
                Manifold manifold = m_contacts[vc.contactIndex].getManifold();

                int indexA = vc.indexA;
                int indexB = vc.indexB;

                double mA = vc.invMassA;
                double mB = vc.invMassB;
                double iA = vc.invIA;
                double iB = vc.invIB;
                Vec2 localCenterA = pc.localCenterA;
                Vec2 localCenterB = pc.localCenterB;

                Vec2 cA = m_positions[indexA].c;
                double aA = m_positions[indexA].a;
                Vec2 vA = m_velocities[indexA].v;
                double wA = m_velocities[indexA].w;

                Vec2 cB = m_positions[indexB].c;
                double aB = m_positions[indexB].a;
                Vec2 vB = m_velocities[indexB].v;
                double wB = m_velocities[indexB].w;

                xfA.q.set(aA);
                xfB.q.set(aB);
                xfA.p.x = cA.x - (xfA.q.c*localCenterA.x - xfA.q.s*localCenterA.y);
                xfA.p.y = cA.y - (xfA.q.s*localCenterA.x + xfA.q.c*localCenterA.y);
                xfB.p.x = cB.x - (xfB.q.c*localCenterB.x - xfB.q.s*localCenterB.y);
                xfB.p.y = cB.y - (xfB.q.s*localCenterB.x + xfB.q.c*localCenterB.y);

                worldManifold.initialize(manifold, xfA, radiusA, xfB, radiusB);

                vc.normal.set(worldManifold.normal);

                int pointCount = vc.pointCount;
                for (int j = 0; j < pointCount; ++j)
                {
                    VelocityConstraintPoint vcp = vc.points[j];

                    vcp.rA.set(worldManifold.points[j]).subLocal(cA);
                    vcp.rB.set(worldManifold.points[j]).subLocal(cB);

                    double rnA = vcp.rA.x*vc.normal.y - vcp.rA.y*vc.normal.x;
                    double rnB = vcp.rB.x*vc.normal.y - vcp.rB.y*vc.normal.x;

                    double kNormal = mA + mB + iA*rnA*rnA + iB*rnB*rnB;

                    vcp.normalMass = kNormal > 0.0d ? 1.0d/kNormal : 0.0d;

                    double tangentx = 1.0d*vc.normal.y;
                    double tangenty = -1.0d*vc.normal.x;

                    double rtA = vcp.rA.x*tangenty - vcp.rA.y*tangentx;
                    double rtB = vcp.rB.x*tangenty - vcp.rB.y*tangentx;

                    double kTangent = mA + mB + iA*rtA*rtA + iB*rtB*rtB;

                    vcp.tangentMass = kTangent > 0.0d ? 1.0d/kTangent : 0.0d;

                    // Setup a velocity bias for restitution.
                    vcp.velocityBias = 0.0d;
                    double tempx = vB.x + -wB*vcp.rB.y - vA.x - (-wA*vcp.rA.y);
                    double tempy = vB.y + wB*vcp.rB.x - vA.y - (wA*vcp.rA.x);
                    double vRel = vc.normal.x*tempx + vc.normal.y*tempy;
                    if (vRel < -Settings.velocityThreshold)
                    {
                        vcp.velocityBias = -vc.restitution*vRel;
                    }
                }

                // If we have two points, then prepare the block solver.
                if (vc.pointCount == 2)
                {
                    VelocityConstraintPoint vcp1 = vc.points[0];
                    VelocityConstraintPoint vcp2 = vc.points[1];

                    double rn1A = Vec2.cross(vcp1.rA, vc.normal);
                    double rn1B = Vec2.cross(vcp1.rB, vc.normal);
                    double rn2A = Vec2.cross(vcp2.rA, vc.normal);
                    double rn2B = Vec2.cross(vcp2.rB, vc.normal);

                    double k11 = mA + mB + iA*rn1A*rn1A + iB*rn1B*rn1B;
                    double k22 = mA + mB + iA*rn2A*rn2A + iB*rn2B*rn2B;
                    double k12 = mA + mB + iA*rn1A*rn2A + iB*rn1B*rn2B;
                    if (k11*k11 < k_maxConditionNumber*(k11*k22 - k12*k12))
                    {
                        // K is safe to invert.
                        vc.K.ex.set(k11, k12);
                        vc.K.ey.set(k12, k22);
                        vc.K.invertToOut(vc.normalMass);
                    }
                    else
                    {
                        // The constraints are redundant, just use one.
                        // TODO_ERIN use deepest?
                        vc.pointCount = 1;
                    }
                }
            }
        }

        // djm pooling from above

        public void solveVelocityConstraints()
        {
            for (int i = 0; i < m_count; ++i)
            {
                ContactVelocityConstraint vc = m_velocityConstraints[i];

                int indexA = vc.indexA;
                int indexB = vc.indexB;

                double mA = vc.invMassA;
                double mB = vc.invMassB;
                double iA = vc.invIA;
                double iB = vc.invIB;
                int pointCount = vc.pointCount;

                Vec2 vA = m_velocities[indexA].v;
                double wA = m_velocities[indexA].w;
                Vec2 vB = m_velocities[indexB].v;
                double wB = m_velocities[indexB].w;

                Vec2 normal = vc.normal;
                tangent.x = 1.0d*vc.normal.y;
                tangent.y = -1.0d*vc.normal.x;
                double friction = vc.friction;

                // Solve tangent constraints
                for (int j = 0; j < pointCount; ++j)
                {
                    VelocityConstraintPoint vcp = vc.points[j];
                    Vec2 a = vcp.rA;
                    double dvx = -wB*vcp.rB.y + vB.x - vA.x + wA*a.y;
                    double dvy = wB*vcp.rB.x + vB.y - vA.y - wA*a.x;

                    // Compute tangent force
                    double vt = dvx*tangent.x + dvy*tangent.y - vc.tangentSpeed;
                    double lambda = vcp.tangentMass*(-vt);

                    // Clamp the accumulated force
                    double maxFriction = friction*vcp.normalImpulse;
                    double newImpulse =
                        MathUtils.clamp(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);
                    lambda = newImpulse - vcp.tangentImpulse;
                    vcp.tangentImpulse = newImpulse;

                    // Apply contact impulse
                    // Vec2 P = lambda * tangent;

                    double Px = tangent.x*lambda;
                    double Py = tangent.y*lambda;

                    // vA -= invMassA * P;
                    vA.x -= Px*mA;
                    vA.y -= Py*mA;
                    wA -= iA*(vcp.rA.x*Py - vcp.rA.y*Px);

                    // vB += invMassB * P;
                    vB.x += Px*mB;
                    vB.y += Py*mB;
                    wB += iB*(vcp.rB.x*Py - vcp.rB.y*Px);
                }

                // Solve normal constraints
                if (vc.pointCount == 1)
                {
                    VelocityConstraintPoint vcp = vc.points[0];

                    // Relative velocity at contact
                    // Vec2 dv = vB + Cross(wB, vcp.rB) - vA - Cross(wA, vcp.rA);

                    double dvx = -wB*vcp.rB.y + vB.x - vA.x + wA*vcp.rA.y;
                    double dvy = wB*vcp.rB.x + vB.y - vA.y - wA*vcp.rA.x;

                    // Compute normal impulse
                    double vn = dvx*normal.x + dvy*normal.y;
                    double lambda = -vcp.normalMass*(vn - vcp.velocityBias);

                    // Clamp the accumulated impulse
                    double a = vcp.normalImpulse + lambda;
                    double newImpulse = (a > 0.0d ? a : 0.0d);
                    lambda = newImpulse - vcp.normalImpulse;
                    vcp.normalImpulse = newImpulse;

                    // Apply contact impulse
                    double Px = normal.x*lambda;
                    double Py = normal.y*lambda;

                    // vA -= invMassA * P;
                    vA.x -= Px*mA;
                    vA.y -= Py*mA;
                    wA -= iA*(vcp.rA.x*Py - vcp.rA.y*Px);

                    // vB += invMassB * P;
                    vB.x += Px*mB;
                    vB.y += Py*mB;
                    wB += iB*(vcp.rB.x*Py - vcp.rB.y*Px);
                }
                else
                {
                    // Block solver developed in collaboration with Dirk Gregorius (back in 01/07 on
                    // Box2D_Lite).
                    // Build the mini LCP for this contact patch
                    //
                    // vn = A * x + b, vn >= 0, , vn >= 0, x >= 0 and vn_i * x_i = 0 with i = 1..2
                    //
                    // A = J * W * JT and J = ( -n, -r1 x n, n, r2 x n )
                    // b = vn_0 - velocityBias
                    //
                    // The system is solved using the "Total enumeration method" (s. Murty). The complementary
                    // constraint vn_i * x_i
                    // implies that we must have in any solution either vn_i = 0 or x_i = 0. So for the 2D
                    // contact problem the cases
                    // vn1 = 0 and vn2 = 0, x1 = 0 and x2 = 0, x1 = 0 and vn2 = 0, x2 = 0 and vn1 = 0 need to be
                    // tested. The first valid
                    // solution that satisfies the problem is chosen.
                    //
                    // In order to account of the accumulated impulse 'a' (because of the iterative nature of
                    // the solver which only requires
                    // that the accumulated impulse is clamped and not the incremental impulse) we change the
                    // impulse variable (x_i).
                    //
                    // Substitute:
                    //
                    // x = a + d
                    //
                    // a := old total impulse
                    // x := new total impulse
                    // d := incremental impulse
                    //
                    // For the current iteration we extend the formula for the incremental impulse
                    // to compute the new total impulse:
                    //
                    // vn = A * d + b
                    // = A * (x - a) + b
                    // = A * x + b - A * a
                    // = A * x + b'
                    // b' = b - A * a;

                    VelocityConstraintPoint cp1 = vc.points[0];
                    VelocityConstraintPoint cp2 = vc.points[1];
                    a.x = cp1.normalImpulse;
                    a.y = cp2.normalImpulse;
                    // Relative velocity at contact
                    // Vec2 dv1 = vB + Cross(wB, cp1.rB) - vA - Cross(wA, cp1.rA);
                    dv1.x = -wB*cp1.rB.y + vB.x - vA.x + wA*cp1.rA.y;
                    dv1.y = wB*cp1.rB.x + vB.y - vA.y - wA*cp1.rA.x;

                    // Vec2 dv2 = vB + Cross(wB, cp2.rB) - vA - Cross(wA, cp2.rA);
                    dv2.x = -wB*cp2.rB.y + vB.x - vA.x + wA*cp2.rA.y;
                    dv2.y = wB*cp2.rB.x + vB.y - vA.y - wA*cp2.rA.x;

                    // Compute normal velocity
                    double vn1 = dv1.x*normal.x + dv1.y*normal.y;
                    double vn2 = dv2.x*normal.x + dv2.y*normal.y;

                    b.x = vn1 - cp1.velocityBias;
                    b.y = vn2 - cp2.velocityBias;
                    // System.out.println("b is " + b.x + "," + b.y);

                    // Compute b'
                    Mat22 R = vc.K;
                    b.x -= R.ex.x*a.x + R.ey.x*a.y;
                    b.y -= R.ex.y*a.x + R.ey.y*a.y;
                    // System.out.println("b' is " + b.x + "," + b.y);

                    // double k_errorTol = 1e-3d;
                    // B2_NOT_USED(k_errorTol);
                    for (;;)
                    {
                        //
                        // Case 1: vn = 0
                        //
                        // 0 = A * x' + b'
                        //
                        // Solve for x':
                        //
                        // x' = - inv(A) * b'
                        //
                        // Vec2 x = - Mul(c.normalMass, b);
                        Mat22.mulToOutUnsafe(vc.normalMass, b, x);
                        x.x *= -1;
                        x.y *= -1;

                        if (x.x >= 0.0d && x.y >= 0.0d)
                        {
                            // System.out.println("case 1");
                            // Get the incremental impulse
                            // Vec2 d = x - a;
                            d.set(x).subLocal(a);

                            // Apply incremental impulse
                            // Vec2 P1 = d.x * normal;
                            // Vec2 P2 = d.y * normal;
                            P1.set(normal).mulLocal(d.x);
                            P2.set(normal).mulLocal(d.y);

                            /*
             * vA -= invMassA * (P1 + P2); wA -= invIA * (Cross(cp1.rA, P1) + Cross(cp2.rA, P2));
             * 
             * vB += invMassB * (P1 + P2); wB += invIB * (Cross(cp1.rB, P1) + Cross(cp2.rB, P2));
             */

                            temp1.set(P1).addLocal(P2);
                            temp2.set(temp1).mulLocal(mA);
                            vA.subLocal(temp2);
                            temp2.set(temp1).mulLocal(mB);
                            vB.addLocal(temp2);

                            wA -= iA*(Vec2.cross(cp1.rA, P1) + Vec2.cross(cp2.rA, P2));
                            wB += iB*(Vec2.cross(cp1.rB, P1) + Vec2.cross(cp2.rB, P2));

                            // Accumulate
                            cp1.normalImpulse = x.x;
                            cp2.normalImpulse = x.y;

                            /*
             * #if B2_DEBUG_SOLVER == 1 // Postconditions dv1 = vB + Cross(wB, cp1.rB) - vA -
             * Cross(wA, cp1.rA); dv2 = vB + Cross(wB, cp2.rB) - vA - Cross(wA, cp2.rA);
             * 
             * // Compute normal velocity vn1 = Dot(dv1, normal); vn2 = Dot(dv2, normal);
             * 
             * assert(Abs(vn1 - cp1.velocityBias) < k_errorTol); assert(Abs(vn2 - cp2.velocityBias)
             * < k_errorTol); #endif
             */
                            if (DEBUG_SOLVER)
                            {
                                // Postconditions
                                Vec2 dv1c =
                                    vB.add(Vec2.cross(wB, cp1.rB).subLocal(vA).subLocal(Vec2.cross(wA, cp1.rA)));
                                Vec2 dv2c =
                                    vB.add(Vec2.cross(wB, cp2.rB).subLocal(vA).subLocal(Vec2.cross(wA, cp2.rA)));
                                // Compute normal velocity
                                vn1 = Vec2.dot(dv1c, normal);
                                vn2 = Vec2.dot(dv2c, normal);
                            }
                            break;
                        }

                        //
                        // Case 2: vn1 = 0 and x2 = 0
                        //
                        // 0 = a11 * x1' + a12 * 0 + b1'
                        // vn2 = a21 * x1' + a22 * 0 + '
                        //
                        x.x = -cp1.normalMass*b.x;
                        x.y = 0.0d;
                        vn1 = 0.0d;
                        vn2 = vc.K.ex.y*x.x + b.y;

                        if (x.x >= 0.0d && vn2 >= 0.0d)
                        {
                            // System.out.println("case 2");
                            // Get the incremental impulse
                            d.set(x).subLocal(a);

                            // Apply incremental impulse
                            // Vec2 P1 = d.x * normal;
                            // Vec2 P2 = d.y * normal;
                            P1.set(normal).mulLocal(d.x);
                            P2.set(normal).mulLocal(d.y);

                            /*
             * Vec2 P1 = d.x * normal; Vec2 P2 = d.y * normal; vA -= invMassA * (P1 + P2); wA -=
             * invIA * (Cross(cp1.rA, P1) + Cross(cp2.rA, P2));
             * 
             * vB += invMassB * (P1 + P2); wB += invIB * (Cross(cp1.rB, P1) + Cross(cp2.rB, P2));
             */

                            temp1.set(P1).addLocal(P2);
                            temp2.set(temp1).mulLocal(mA);
                            vA.subLocal(temp2);
                            temp2.set(temp1).mulLocal(mB);
                            vB.addLocal(temp2);

                            wA -= iA*(Vec2.cross(cp1.rA, P1) + Vec2.cross(cp2.rA, P2));
                            wB += iB*(Vec2.cross(cp1.rB, P1) + Vec2.cross(cp2.rB, P2));

                            // Accumulate
                            cp1.normalImpulse = x.x;
                            cp2.normalImpulse = x.y;

                            /*
             * #if B2_DEBUG_SOLVER == 1 // Postconditions dv1 = vB + Cross(wB, cp1.rB) - vA -
             * Cross(wA, cp1.rA);
             * 
             * // Compute normal velocity vn1 = Dot(dv1, normal);
             * 
             * assert(Abs(vn1 - cp1.velocityBias) < k_errorTol); #endif
             */
                            if (DEBUG_SOLVER)
                            {
                                // Postconditions
                                Vec2 dv1c =
                                    vB.add(Vec2.cross(wB, cp1.rB).subLocal(vA).subLocal(Vec2.cross(wA, cp1.rA)));
                                // Compute normal velocity
                                vn1 = Vec2.dot(dv1c, normal);
                            }
                            break;
                        }

                        //
                        // Case 3: wB = 0 and x1 = 0
                        //
                        // vn1 = a11 * 0 + a12 * x2' + b1'
                        // 0 = a21 * 0 + a22 * x2' + '
                        //
                        x.x = 0.0d;
                        x.y = -cp2.normalMass*b.y;
                        vn1 = vc.K.ey.x*x.y + b.x;
                        vn2 = 0.0d;

                        if (x.y >= 0.0d && vn1 >= 0.0d)
                        {
                            // System.out.println("case 3");
                            // Resubstitute for the incremental impulse
                            d.set(x).subLocal(a);

                            // Apply incremental impulse
                            /*
             * Vec2 P1 = d.x * normal; Vec2 P2 = d.y * normal; vA -= invMassA * (P1 + P2); wA -=
             * invIA * (Cross(cp1.rA, P1) + Cross(cp2.rA, P2));
             * 
             * vB += invMassB * (P1 + P2); wB += invIB * (Cross(cp1.rB, P1) + Cross(cp2.rB, P2));
             */

                            P1.set(normal).mulLocal(d.x);
                            P2.set(normal).mulLocal(d.y);

                            temp1.set(P1).addLocal(P2);
                            temp2.set(temp1).mulLocal(mA);
                            vA.subLocal(temp2);
                            temp2.set(temp1).mulLocal(mB);
                            vB.addLocal(temp2);

                            wA -= iA*(Vec2.cross(cp1.rA, P1) + Vec2.cross(cp2.rA, P2));
                            wB += iB*(Vec2.cross(cp1.rB, P1) + Vec2.cross(cp2.rB, P2));

                            // Accumulate
                            cp1.normalImpulse = x.x;
                            cp2.normalImpulse = x.y;

                            /*
             * #if B2_DEBUG_SOLVER == 1 // Postconditions dv2 = vB + Cross(wB, cp2.rB) - vA -
             * Cross(wA, cp2.rA);
             * 
             * // Compute normal velocity vn2 = Dot(dv2, normal);
             * 
             * assert(Abs(vn2 - cp2.velocityBias) < k_errorTol); #endif
             */
                            if (DEBUG_SOLVER)
                            {
                                // Postconditions
                                Vec2 dv2c =
                                    vB.add(Vec2.cross(wB, cp2.rB).subLocal(vA).subLocal(Vec2.cross(wA, cp2.rA)));
                                // Compute normal velocity
                                vn2 = Vec2.dot(dv2c, normal);
                            }
                            break;
                        }

                        //
                        // Case 4: x1 = 0 and x2 = 0
                        //
                        // vn1 = b1
                        // vn2 = ;
                        x.x = 0.0d;
                        x.y = 0.0d;
                        vn1 = b.x;
                        vn2 = b.y;

                        if (vn1 >= 0.0d && vn2 >= 0.0d)
                        {
                            // System.out.println("case 4");
                            // Resubstitute for the incremental impulse
                            d.set(x).subLocal(a);

                            // Apply incremental impulse
                            /*
             * Vec2 P1 = d.x * normal; Vec2 P2 = d.y * normal; vA -= invMassA * (P1 + P2); wA -=
             * invIA * (Cross(cp1.rA, P1) + Cross(cp2.rA, P2));
             * 
             * vB += invMassB * (P1 + P2); wB += invIB * (Cross(cp1.rB, P1) + Cross(cp2.rB, P2));
             */

                            P1.set(normal).mulLocal(d.x);
                            P2.set(normal).mulLocal(d.y);

                            temp1.set(P1).addLocal(P2);
                            temp2.set(temp1).mulLocal(mA);
                            vA.subLocal(temp2);
                            temp2.set(temp1).mulLocal(mB);
                            vB.addLocal(temp2);

                            wA -= iA*(Vec2.cross(cp1.rA, P1) + Vec2.cross(cp2.rA, P2));
                            wB += iB*(Vec2.cross(cp1.rB, P1) + Vec2.cross(cp2.rB, P2));

                            // Accumulate
                            cp1.normalImpulse = x.x;
                            cp2.normalImpulse = x.y;
                        }

                        // No solution, give up. This is hit sometimes, but it doesn't seem to matter.
                        break;
                    }
                }

                // m_velocities[indexA].v.set(vA);
                m_velocities[indexA].w = wA;
                // m_velocities[indexB].v.set(vB);
                m_velocities[indexB].w = wB;
            }
        }

        public void storeImpulses()
        {
            for (int i = 0; i < m_count; i++)
            {
                ContactVelocityConstraint vc = m_velocityConstraints[i];
                Manifold manifold = m_contacts[vc.contactIndex].getManifold();

                for (int j = 0; j < vc.pointCount; j++)
                {
                    manifold.points[j].normalImpulse = vc.points[j].normalImpulse;
                    manifold.points[j].tangentImpulse = vc.points[j].tangentImpulse;
                }
            }
        }

        /*
   * #if 0 // Sequential solver. bool ContactSolver::SolvePositionConstraints(double baumgarte) {
   * double minSeparation = 0.0d;
   * 
   * for (int i = 0; i < m_constraintCount; ++i) { ContactConstraint* c = m_constraints + i; Body*
   * bodyA = c.bodyA; Body* bodyB = c.bodyB; double invMassA = bodyA.m_mass * bodyA.m_invMass; double
   * invIA = bodyA.m_mass * bodyA.m_invI; double invMassB = bodyB.m_mass * bodyB.m_invMass; double
   * invIB = bodyB.m_mass * bodyB.m_invI;
   * 
   * Vec2 normal = c.normal;
   * 
   * // Solve normal constraints for (int j = 0; j < c.pointCount; ++j) { ContactConstraintPoint*
   * ccp = c.points + j;
   * 
   * Vec2 r1 = Mul(bodyA.GetXForm().R, ccp.localAnchorA - bodyA.GetLocalCenter()); Vec2 r2 =
   * Mul(bodyB.GetXForm().R, ccp.localAnchorB - bodyB.GetLocalCenter());
   * 
   * Vec2 p1 = bodyA.m_sweep.c + r1; Vec2 p2 = bodyB.m_sweep.c + r2; Vec2 dp = p2 - p1;
   * 
   * // Approximate the current separation. double separation = Dot(dp, normal) + ccp.separation;
   * 
   * // Track max constraint error. minSeparation = Min(minSeparation, separation);
   * 
   * // Prevent large corrections and allow slop. double C = Clamp(baumgarte * (separation +
   * _linearSlop), -_maxLinearCorrection, 0.0d);
   * 
   * // Compute normal impulse double impulse = -ccp.equalizedMass * C;
   * 
   * Vec2 P = impulse * normal;
   * 
   * bodyA.m_sweep.c -= invMassA * P; bodyA.m_sweep.a -= invIA * Cross(r1, P);
   * bodyA.SynchronizeTransform();
   * 
   * bodyB.m_sweep.c += invMassB * P; bodyB.m_sweep.a += invIB * Cross(r2, P);
   * bodyB.SynchronizeTransform(); } }
   * 
   * // We can't expect minSpeparation >= -_linearSlop because we don't // push the separation above
   * -_linearSlop. return minSeparation >= -1.5d * _linearSlop; }
   */

        // djm pooling, and from above

        /**
   * Sequential solver.
   */

        public bool solvePositionConstraints()
        {
            double minSeparation = 0.0d;

            for (int i = 0; i < m_count; ++i)
            {
                ContactPositionConstraint pc = m_positionConstraints[i];

                int indexA = pc.indexA;
                int indexB = pc.indexB;

                double mA = pc.invMassA;
                double iA = pc.invIA;
                Vec2 localCenterA = pc.localCenterA;
                double mB = pc.invMassB;
                double iB = pc.invIB;
                Vec2 localCenterB = pc.localCenterB;
                int pointCount = pc.pointCount;

                Vec2 cA = m_positions[indexA].c;
                double aA = m_positions[indexA].a;
                Vec2 cB = m_positions[indexB].c;
                double aB = m_positions[indexB].a;

                // Solve normal constraints
                for (int j = 0; j < pointCount; ++j)
                {
                    xfA.q.set(aA);
                    xfB.q.set(aB);
                    Rot.mulToOutUnsafe(xfA.q, localCenterA, xfA.p);
                    xfA.p.negateLocal().addLocal(cA);
                    Rot.mulToOutUnsafe(xfB.q, localCenterB, xfB.p);
                    xfB.p.negateLocal().addLocal(cB);

                    PositionSolverManifold psm = psolver;
                    psm.initialize(pc, xfA, xfB, j);
                    Vec2 normal = psm.normal;

                    Vec2 point = psm.point;
                    double separation = psm.separation;

                    rA.set(point).subLocal(cA);
                    rB.set(point).subLocal(cB);

                    // Track max constraint error.
                    minSeparation = MathUtils.min(minSeparation, separation);

                    // Prevent large corrections and allow slop.
                    double C =
                        MathUtils.clamp(Settings.baumgarte*(separation + Settings.linearSlop),
                            -Settings.maxLinearCorrection, 0.0d);

                    // Compute the effective mass.
                    double rnA = Vec2.cross(rA, normal);
                    double rnB = Vec2.cross(rB, normal);
                    double K = mA + mB + iA*rnA*rnA + iB*rnB*rnB;

                    // Compute normal impulse
                    double impulse = K > 0.0d ? -C/K : 0.0d;

                    P.set(normal).mulLocal(impulse);

                    cA.subLocal(temp.set(P).mulLocal(mA));
                    aA -= iA*Vec2.cross(rA, P);

                    cB.addLocal(temp.set(P).mulLocal(mB));
                    aB += iB*Vec2.cross(rB, P);
                }

                // m_positions[indexA].c.set(cA);
                m_positions[indexA].a = aA;

                // m_positions[indexB].c.set(cB);
                m_positions[indexB].a = aB;
            }

            // We can't expect minSpeparation >= -linearSlop because we don't
            // push the separation above -linearSlop.
            return minSeparation >= -3.0d*Settings.linearSlop;
        }

        // Sequential position solver for position constraints.
        public bool solveTOIPositionConstraints(int toiIndexA, int toiIndexB)
        {
            double minSeparation = 0.0d;

            for (int i = 0; i < m_count; ++i)
            {
                ContactPositionConstraint pc = m_positionConstraints[i];

                int indexA = pc.indexA;
                int indexB = pc.indexB;
                Vec2 localCenterA = pc.localCenterA;
                Vec2 localCenterB = pc.localCenterB;
                int pointCount = pc.pointCount;

                double mA = 0.0d;
                double iA = 0.0d;
                if (indexA == toiIndexA || indexA == toiIndexB)
                {
                    mA = pc.invMassA;
                    iA = pc.invIA;
                }

                double mB = 0d;
                double iB = 0d;
                if (indexB == toiIndexA || indexB == toiIndexB)
                {
                    mB = pc.invMassB;
                    iB = pc.invIB;
                }

                Vec2 cA = m_positions[indexA].c;
                double aA = m_positions[indexA].a;

                Vec2 cB = m_positions[indexB].c;
                double aB = m_positions[indexB].a;

                // Solve normal constraints
                for (int j = 0; j < pointCount; ++j)
                {
                    xfA.q.set(aA);
                    xfB.q.set(aB);
                    Rot.mulToOutUnsafe(xfA.q, localCenterA, xfA.p);
                    xfA.p.negateLocal().addLocal(cA);
                    Rot.mulToOutUnsafe(xfB.q, localCenterB, xfB.p);
                    xfB.p.negateLocal().addLocal(cB);

                    PositionSolverManifold psm = psolver;
                    psm.initialize(pc, xfA, xfB, j);
                    Vec2 normal = psm.normal;

                    Vec2 point = psm.point;
                    double separation = psm.separation;

                    rA.set(point).subLocal(cA);
                    rB.set(point).subLocal(cB);

                    // Track max constraint error.
                    minSeparation = MathUtils.min(minSeparation, separation);

                    // Prevent large corrections and allow slop.
                    double C =
                        MathUtils.clamp(Settings.toiBaugarte*(separation + Settings.linearSlop),
                            -Settings.maxLinearCorrection, 0.0d);

                    // Compute the effective mass.
                    double rnA = Vec2.cross(rA, normal);
                    double rnB = Vec2.cross(rB, normal);
                    double K = mA + mB + iA*rnA*rnA + iB*rnB*rnB;

                    // Compute normal impulse
                    double impulse = K > 0.0d ? -C/K : 0.0d;

                    P.set(normal).mulLocal(impulse);

                    cA.subLocal(temp.set(P).mulLocal(mA));
                    aA -= iA*Vec2.cross(rA, P);

                    cB.addLocal(temp.set(P).mulLocal(mB));
                    aB += iB*Vec2.cross(rB, P);
                }

                // m_positions[indexA].c.set(cA);
                m_positions[indexA].a = aA;

                // m_positions[indexB].c.set(cB);
                m_positions[indexB].a = aB;
            }

            // We can't expect minSpeparation >= -_linearSlop because we don't
            // push the separation above -_linearSlop.
            return minSeparation >= -1.5d*Settings.linearSlop;
        }
    }

    public class ContactSolverDef
    {
        public Contact[] contacts;
        public int count;
        public Position[] positions;
        public TimeStep step;
        public Velocity[] velocities;
    }


    internal class PositionSolverManifold
    {
        public readonly Vec2 normal = new Vec2();
        public readonly Vec2 point = new Vec2();
        public double separation;

        public void initialize(ContactPositionConstraint pc, Transform xfA, Transform xfB, int index)
        {
            Rot xfAq = xfA.q;
            Rot xfBq = xfB.q;
            Vec2 pcLocalPointsI = pc.localPoints[index];
            switch (pc.type)
            {
                case ManifoldType.CIRCLES:
                {
                    // Transform.mulToOutUnsafe(xfA, pc.localPoint, pointA);
                    // Transform.mulToOutUnsafe(xfB, pc.localPoints[0], pointB);
                    // normal.set(pointB).subLocal(pointA);
                    // normal.normalize();
                    //
                    // point.set(pointA).addLocal(pointB).mulLocal(.5d);
                    // temp.set(pointB).subLocal(pointA);
                    // separation = Vec2.dot(temp, normal) - pc.radiusA - pc.radiusB;
                    Vec2 plocalPoint = pc.localPoint;
                    Vec2 pLocalPoints0 = pc.localPoints[0];
                    double pointAx = (xfAq.c*plocalPoint.x - xfAq.s*plocalPoint.y) + xfA.p.x;
                    double pointAy = (xfAq.s*plocalPoint.x + xfAq.c*plocalPoint.y) + xfA.p.y;
                    double pointBx = (xfBq.c*pLocalPoints0.x - xfBq.s*pLocalPoints0.y) + xfB.p.x;
                    double pointBy = (xfBq.s*pLocalPoints0.x + xfBq.c*pLocalPoints0.y) + xfB.p.y;
                    normal.x = pointBx - pointAx;
                    normal.y = pointBy - pointAy;
                    normal.normalize();

                    point.x = (pointAx + pointBx)*.5d;
                    point.y = (pointAy + pointBy)*.5d;
                    double tempx = pointBx - pointAx;
                    double tempy = pointBy - pointAy;
                    separation = tempx*normal.x + tempy*normal.y - pc.radiusA - pc.radiusB;
                    break;
                }

                case ManifoldType.FACE_A:
                {
                    // Rot.mulToOutUnsafe(xfAq, pc.localNormal, normal);
                    // Transform.mulToOutUnsafe(xfA, pc.localPoint, planePoint);
                    //
                    // Transform.mulToOutUnsafe(xfB, pc.localPoints[index], clipPoint);
                    // temp.set(clipPoint).subLocal(planePoint);
                    // separation = Vec2.dot(temp, normal) - pc.radiusA - pc.radiusB;
                    // point.set(clipPoint);
                    Vec2 pcLocalNormal = pc.localNormal;
                    Vec2 pcLocalPoint = pc.localPoint;
                    normal.x = xfAq.c*pcLocalNormal.x - xfAq.s*pcLocalNormal.y;
                    normal.y = xfAq.s*pcLocalNormal.x + xfAq.c*pcLocalNormal.y;
                    double planePointx = (xfAq.c*pcLocalPoint.x - xfAq.s*pcLocalPoint.y) + xfA.p.x;
                    double planePointy = (xfAq.s*pcLocalPoint.x + xfAq.c*pcLocalPoint.y) + xfA.p.y;

                    double clipPointx = (xfBq.c*pcLocalPointsI.x - xfBq.s*pcLocalPointsI.y) + xfB.p.x;
                    double clipPointy = (xfBq.s*pcLocalPointsI.x + xfBq.c*pcLocalPointsI.y) + xfB.p.y;
                    double tempx = clipPointx - planePointx;
                    double tempy = clipPointy - planePointy;
                    separation = tempx*normal.x + tempy*normal.y - pc.radiusA - pc.radiusB;
                    point.x = clipPointx;
                    point.y = clipPointy;
                    break;
                }

                case ManifoldType.FACE_B:
                {
                    // Rot.mulToOutUnsafe(xfBq, pc.localNormal, normal);
                    // Transform.mulToOutUnsafe(xfB, pc.localPoint, planePoint);
                    //
                    // Transform.mulToOutUnsafe(xfA, pcLocalPointsI, clipPoint);
                    // temp.set(clipPoint).subLocal(planePoint);
                    // separation = Vec2.dot(temp, normal) - pc.radiusA - pc.radiusB;
                    // point.set(clipPoint);
                    //
                    // // Ensure normal points from A to B
                    // normal.negateLocal();
                    Vec2 pcLocalNormal = pc.localNormal;
                    Vec2 pcLocalPoint = pc.localPoint;
                    normal.x = xfBq.c*pcLocalNormal.x - xfBq.s*pcLocalNormal.y;
                    normal.y = xfBq.s*pcLocalNormal.x + xfBq.c*pcLocalNormal.y;
                    double planePointx = (xfBq.c*pcLocalPoint.x - xfBq.s*pcLocalPoint.y) + xfB.p.x;
                    double planePointy = (xfBq.s*pcLocalPoint.x + xfBq.c*pcLocalPoint.y) + xfB.p.y;

                    double clipPointx = (xfAq.c*pcLocalPointsI.x - xfAq.s*pcLocalPointsI.y) + xfA.p.x;
                    double clipPointy = (xfAq.s*pcLocalPointsI.x + xfAq.c*pcLocalPointsI.y) + xfA.p.y;
                    double tempx = clipPointx - planePointx;
                    double tempy = clipPointy - planePointy;
                    separation = tempx*normal.x + tempy*normal.y - pc.radiusA - pc.radiusB;
                    point.x = clipPointx;
                    point.y = clipPointy;
                    normal.x *= -1;
                    normal.y *= -1;
                }
                    break;
            }
        }
    }
}