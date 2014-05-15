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


using org.jbox2d.collision.broadphase;
using org.jbox2d.collision.shapes;
using org.jbox2d.common;
using org.jbox2d.dynamics.contacts;
using org.jbox2d.dynamics.joints;

/**
 * A rigid body. These are created via World.createBody.
 * 
 * @author Daniel Murphy
 */

namespace org.jbox2d.dynamics
{
    public class Body
    {
        public static readonly int e_islandFlag = 0x0001;
        public static readonly int e_awakeFlag = 0x0002;
        public static readonly int e_autoSleepFlag = 0x0004;
        public static readonly int e_bulletFlag = 0x0008;
        public static readonly int e_fixedRotationFlag = 0x0010;
        public static readonly int e_activeFlag = 0x0020;
        public static readonly int e_toiFlag = 0x0040;
        private readonly FixtureDef fixDef = new FixtureDef();
        public readonly Vec2 m_force = new Vec2();

        public readonly Vec2 m_linearVelocity = new Vec2();
        public readonly Sweep m_sweep = new Sweep();
        public readonly Transform m_xf = new Transform();
        private readonly MassData pmd = new MassData();
        private readonly Transform pxf = new Transform();
        public double m_I;
        public double m_angularDamping;
        public double m_angularVelocity = 0;

        public ContactEdge m_contactList;
        public int m_fixtureCount;
        public Fixture m_fixtureList;
        public int m_flags;
        public double m_gravityScale;

        public double m_invI;
        public double m_invMass;
        public int m_islandIndex;
        public JointEdge m_jointList;

        public double m_linearDamping;
        public double m_mass;
        public Body m_next;
        public Body m_prev;

        public double m_sleepTime;
        public double m_torque = 0;
        public BodyType m_type;

        public object m_userData;
        public World m_world;


        public Body(BodyDef bd, World world)
        {
            m_flags = 0;

            if (bd.bullet)
            {
                m_flags |= e_bulletFlag;
            }
            if (bd.fixedRotation)
            {
                m_flags |= e_fixedRotationFlag;
            }
            if (bd.allowSleep)
            {
                m_flags |= e_autoSleepFlag;
            }
            if (bd.awake)
            {
                m_flags |= e_awakeFlag;
            }
            if (bd.active)
            {
                m_flags |= e_activeFlag;
            }

            m_world = world;

            m_xf.p.set(bd.position);
            m_xf.q.set(bd.angle);

            m_sweep.localCenter.setZero();
            m_sweep.c0.set(m_xf.p);
            m_sweep.c.set(m_xf.p);
            m_sweep.a0 = bd.angle;
            m_sweep.a = bd.angle;
            m_sweep.alpha0 = 0.0f;

            m_jointList = null;
            m_contactList = null;
            m_prev = null;
            m_next = null;

            m_linearVelocity.set(bd.linearVelocity);
            m_angularVelocity = bd.angularVelocity;

            m_linearDamping = bd.linearDamping;
            m_angularDamping = bd.angularDamping;
            m_gravityScale = bd.gravityScale;

            m_force.setZero();
            m_torque = 0.0f;

            m_sleepTime = 0.0f;

            m_type = bd.type;

            if (m_type == BodyType.DYNAMIC)
            {
                m_mass = 1f;
                m_invMass = 1f;
            }
            else
            {
                m_mass = 0f;
                m_invMass = 0f;
            }

            m_I = 0.0f;
            m_invI = 0.0f;

            m_userData = bd.userData;

            m_fixtureList = null;
            m_fixtureCount = 0;
        }

        /**
   * Creates a fixture and attach it to this body. Use this function if you need to set some fixture
   * parameters, like friction. Otherwise you can create the fixture directly from a shape. If the
   * density is non-zero, this function automatically updates the mass of the body. Contacts are not
   * created until the next time step.
   * 
   * @param def the fixture definition.
   * @warning This function is locked during callbacks.
   */

        public Fixture createFixture(FixtureDef def)
        {
            if (m_world.isLocked())
            {
                return null;
            }

            var fixture = new Fixture();
            fixture.create(this, def);

            if ((m_flags & e_activeFlag) == e_activeFlag)
            {
                BroadPhase broadPhase = m_world.m_contactManager.m_broadPhase;
                fixture.createProxies(broadPhase, m_xf);
            }

            fixture.m_next = m_fixtureList;
            m_fixtureList = fixture;
            ++m_fixtureCount;

            fixture.m_body = this;

            // Adjust mass properties if needed.
            if (fixture.m_density > 0.0f)
            {
                resetMassData();
            }

            // Let the world know we have a new fixture. This will cause new contacts
            // to be created at the beginning of the next time step.
            m_world.m_flags |= World.NEW_FIXTURE;

            return fixture;
        }

        /**
   * Creates a fixture from a shape and attach it to this body. This is a convenience function. Use
   * FixtureDef if you need to set parameters like friction, restitution, user data, or filtering.
   * If the density is non-zero, this function automatically updates the mass of the body.
   * 
   * @param shape the shape to be cloned.
   * @param density the shape density (set to zero for static bodies).
   * @warning This function is locked during callbacks.
   */

        public Fixture createFixture(Shape shape, double density)
        {
            fixDef.shape = shape;
            fixDef.density = density;

            return createFixture(fixDef);
        }

        /**
   * Destroy a fixture. This removes the fixture from the broad-phase and destroys all contacts
   * associated with this fixture. This will automatically adjust the mass of the body if the body
   * is dynamic and the fixture has positive density. All fixtures attached to a body are implicitly
   * destroyed when the body is destroyed.
   * 
   * @param fixture the fixture to be removed.
   * @warning This function is locked during callbacks.
   */

        public void destroyFixture(Fixture fixture)
        {
            if (m_world.isLocked())
            {
                return;
            }

            // Remove the fixture from this body's singly linked list.
            Fixture node = m_fixtureList;
            Fixture last = null; // java change
            bool found = false;
            while (node != null)
            {
                if (node == fixture)
                {
                    node = fixture.m_next;
                    found = true;
                    break;
                }
                last = node;
                node = node.m_next;
            }

            // You tried to remove a shape that is not attached to this body.

            // java change, remove it from the list
            if (last == null)
            {
                m_fixtureList = fixture.m_next;
            }
            else
            {
                last.m_next = fixture.m_next;
            }

            // Destroy any contacts associated with the fixture.
            ContactEdge edge = m_contactList;
            while (edge != null)
            {
                Contact c = edge.contact;
                edge = edge.next;

                Fixture fixtureA = c.getFixtureA();
                Fixture fixtureB = c.getFixtureB();

                if (fixture == fixtureA || fixture == fixtureB)
                {
                    // This destroys the contact and removes it from
                    // this body's contact list.
                    m_world.m_contactManager.destroy(c);
                }
            }

            if ((m_flags & e_activeFlag) == e_activeFlag)
            {
                BroadPhase broadPhase = m_world.m_contactManager.m_broadPhase;
                fixture.destroyProxies(broadPhase);
            }

            fixture.destroy();
            fixture.m_body = null;
            fixture.m_next = null;
            fixture = null;

            --m_fixtureCount;

            // Reset the mass data.
            resetMassData();
        }

        /**
   * Set the position of the body's origin and rotation. This breaks any contacts and wakes the
   * other bodies. Manipulating a body's transform may cause non-physical behavior.
   * 
   * @param position the world position of the body's local origin.
   * @param angle the world rotation in radians.
   */

        public void setTransform(Vec2 position, double angle)
        {
            if (m_world.isLocked())
            {
                return;
            }

            m_xf.q.set(angle);
            m_xf.p.set(position);

            // m_sweep.c0 = m_sweep.c = Mul(m_xf, m_sweep.localCenter);
            Transform.mulToOutUnsafe(m_xf, m_sweep.localCenter, m_sweep.c);
            m_sweep.a = angle;

            m_sweep.c0.set(m_sweep.c);
            m_sweep.a0 = m_sweep.a;

            BroadPhase broadPhase = m_world.m_contactManager.m_broadPhase;
            for (Fixture f = m_fixtureList; f != null; f = f.m_next)
            {
                f.synchronize(broadPhase, m_xf, m_xf);
            }

            m_world.m_contactManager.findNewContacts();
        }

        /**
   * Get the body transform for the body's origin.
   * 
   * @return the world transform of the body's origin.
   */

        public Transform getTransform()
        {
            return m_xf;
        }

        /**
   * Get the world body origin position. Do not modify.
   * 
   * @return the world position of the body's origin.
   */

        public Vec2 getPosition()
        {
            return m_xf.p;
        }

        /**
   * Get the angle in radians.
   * 
   * @return the current world rotation angle in radians.
   */

        public double getAngle()
        {
            return m_sweep.a;
        }

        /**
   * Get the world position of the center of mass. Do not modify.
   */

        public Vec2 getWorldCenter()
        {
            return m_sweep.c;
        }

        /**
   * Get the local position of the center of mass. Do not modify.
   */

        public Vec2 getLocalCenter()
        {
            return m_sweep.localCenter;
        }

        /**
   * Set the linear velocity of the center of mass.
   * 
   * @param v the new linear velocity of the center of mass.
   */

        public void setLinearVelocity(Vec2 v)
        {
            if (m_type == BodyType.STATIC)
            {
                return;
            }

            if (Vec2.dot(v, v) > 0.0f)
            {
                setAwake(true);
            }

            m_linearVelocity.set(v);
        }

        /**
   * Get the linear velocity of the center of mass. Do not modify, instead use
   * {@link #setLinearVelocity(Vec2)}.
   * 
   * @return the linear velocity of the center of mass.
   */

        public Vec2 getLinearVelocity()
        {
            return m_linearVelocity;
        }

        /**
   * Set the angular velocity.
   * 
   * @param omega the new angular velocity in radians/second.
   */

        public void setAngularVelocity(double w)
        {
            if (m_type == BodyType.STATIC)
            {
                return;
            }

            if (w*w > 0f)
            {
                setAwake(true);
            }

            m_angularVelocity = w;
        }

        /**
   * Get the angular velocity.
   * 
   * @return the angular velocity in radians/second.
   */

        public double getAngularVelocity()
        {
            return m_angularVelocity;
        }

        /**
   * Get the gravity scale of the body.
   * 
   * @return
   */

        public double getGravityScale()
        {
            return m_gravityScale;
        }

        /**
   * Set the gravity scale of the body.
   * 
   * @param gravityScale
   */

        public void setGravityScale(double gravityScale)
        {
            m_gravityScale = gravityScale;
        }

        /**
   * Apply a force at a world point. If the force is not applied at the center of mass, it will
   * generate a torque and affect the angular velocity. This wakes up the body.
   * 
   * @param force the world force vector, usually in Newtons (N).
   * @param point the world position of the point of application.
   */

        public void applyForce(Vec2 force, Vec2 point)
        {
            if (m_type != BodyType.DYNAMIC)
            {
                return;
            }

            if (isAwake() == false)
            {
                setAwake(true);
            }

            // m_force.addLocal(force);
            // Vec2 temp = tltemp.get();
            // temp.set(point).subLocal(m_sweep.c);
            // m_torque += Vec2.cross(temp, force);

            m_force.x += force.x;
            m_force.y += force.y;

            m_torque += (point.x - m_sweep.c.x)*force.y - (point.y - m_sweep.c.y)*force.x;
        }

        /**
   * Apply a force to the center of mass. This wakes up the body.
   * 
   * @param force the world force vector, usually in Newtons (N).
   */

        public void applyForceToCenter(Vec2 force)
        {
            if (m_type != BodyType.DYNAMIC)
            {
                return;
            }

            if (isAwake() == false)
            {
                setAwake(true);
            }

            m_force.x += force.x;
            m_force.y += force.y;
        }

        /**
   * Apply a torque. This affects the angular velocity without affecting the linear velocity of the
   * center of mass. This wakes up the body.
   * 
   * @param torque about the z-axis (out of the screen), usually in N-m.
   */

        public void applyTorque(double torque)
        {
            if (m_type != BodyType.DYNAMIC)
            {
                return;
            }

            if (isAwake() == false)
            {
                setAwake(true);
            }

            m_torque += torque;
        }

        /**
   * Apply an impulse at a point. This immediately modifies the velocity. It also modifies the
   * angular velocity if the point of application is not at the center of mass. This wakes up the
   * body.
   * 
   * @param impulse the world impulse vector, usually in N-seconds or kg-m/s.
   * @param point the world position of the point of application.
   */

        public void applyLinearImpulse(Vec2 impulse, Vec2 point)
        {
            if (m_type != BodyType.DYNAMIC)
            {
                return;
            }

            if (isAwake() == false)
            {
                setAwake(true);
            }

            // Vec2 temp = tltemp.get();
            // temp.set(impulse).mulLocal(m_invMass);
            // m_linearVelocity.addLocal(temp);
            //
            // temp.set(point).subLocal(m_sweep.c);
            // m_angularVelocity += m_invI * Vec2.cross(temp, impulse);

            m_linearVelocity.x += impulse.x*m_invMass;
            m_linearVelocity.y += impulse.y*m_invMass;

            m_angularVelocity +=
                m_invI*((point.x - m_sweep.c.x)*impulse.y - (point.y - m_sweep.c.y)*impulse.x);
        }

        /**
   * Apply an angular impulse.
   * 
   * @param impulse the angular impulse in units of kg*m*m/s
   */

        public void applyAngularImpulse(double impulse)
        {
            if (m_type != BodyType.DYNAMIC)
            {
                return;
            }

            if (isAwake() == false)
            {
                setAwake(true);
            }
            m_angularVelocity += m_invI*impulse;
        }

        /**
   * Get the total mass of the body.
   * 
   * @return the mass, usually in kilograms (kg).
   */

        public double getMass()
        {
            return m_mass;
        }

        /**
   * Get the central rotational inertia of the body.
   * 
   * @return the rotational inertia, usually in kg-m^2.
   */

        public double getInertia()
        {
            return m_I
                   + m_mass
                   *(m_sweep.localCenter.x*m_sweep.localCenter.x + m_sweep.localCenter.y
                     *m_sweep.localCenter.y);
        }

        /**
   * Get the mass data of the body. The rotational inertia is relative to the center of mass.
   * 
   * @return a struct containing the mass, inertia and center of the body.
   */

        public void getMassData(MassData data)
        {
            // data.mass = m_mass;
            // data.I = m_I + m_mass * Vec2.dot(m_sweep.localCenter, m_sweep.localCenter);
            // data.center.set(m_sweep.localCenter);

            data.mass = m_mass;
            data.I =
                m_I
                + m_mass
                *(m_sweep.localCenter.x*m_sweep.localCenter.x + m_sweep.localCenter.y
                  *m_sweep.localCenter.y);
            data.center.x = m_sweep.localCenter.x;
            data.center.y = m_sweep.localCenter.y;
        }

        /**
   * Set the mass properties to override the mass properties of the fixtures. Note that this changes
   * the center of mass position. Note that creating or destroying fixtures can also alter the mass.
   * This function has no effect if the body isn't dynamic.
   * 
   * @param massData the mass properties.
   */

        public void setMassData(MassData massData)
        {
            // TODO_ERIN adjust linear velocity and torque to account for movement of center.
            if (m_world.isLocked())
            {
                return;
            }

            if (m_type != BodyType.DYNAMIC)
            {
                return;
            }

            m_invMass = 0.0f;
            m_I = 0.0f;
            m_invI = 0.0f;

            m_mass = massData.mass;
            if (m_mass <= 0.0f)
            {
                m_mass = 1f;
            }

            m_invMass = 1.0f/m_mass;

            if (massData.I > 0.0f && (m_flags & e_fixedRotationFlag) == 0)
            {
                m_I = massData.I - m_mass*Vec2.dot(massData.center, massData.center);
                m_invI = 1.0f/m_I;
            }

            Vec2 oldCenter = m_world.getPool().popVec2();
            // Move center of mass.
            oldCenter.set(m_sweep.c);
            m_sweep.localCenter.set(massData.center);
            // m_sweep.c0 = m_sweep.c = Mul(m_xf, m_sweep.localCenter);
            Transform.mulToOutUnsafe(m_xf, m_sweep.localCenter, m_sweep.c0);
            m_sweep.c.set(m_sweep.c0);

            // Update center of mass velocity.
            // m_linearVelocity += Cross(m_angularVelocity, m_sweep.c - oldCenter);
            Vec2 temp = m_world.getPool().popVec2();
            temp.set(m_sweep.c).subLocal(oldCenter);
            Vec2.crossToOut(m_angularVelocity, temp, temp);
            m_linearVelocity.addLocal(temp);

            m_world.getPool().pushVec2(2);
        }

        /**
   * This resets the mass properties to the sum of the mass properties of the fixtures. This
   * normally does not need to be called unless you called setMassData to override the mass and you
   * later want to reset the mass.
   */

        public void resetMassData()
        {
            // Compute mass data from shapes. Each shape has its own density.
            m_mass = 0.0f;
            m_invMass = 0.0f;
            m_I = 0.0f;
            m_invI = 0.0f;
            m_sweep.localCenter.setZero();

            // Static and kinematic bodies have zero mass.
            if (m_type == BodyType.STATIC || m_type == BodyType.KINEMATIC)
            {
                // m_sweep.c0 = m_sweep.c = m_xf.position;
                m_sweep.c0.set(m_xf.p);
                m_sweep.c.set(m_xf.p);
                m_sweep.a0 = m_sweep.a;
                return;
            }

            // Accumulate mass over all fixtures.
            Vec2 localCenter = m_world.getPool().popVec2();
            localCenter.setZero();
            Vec2 temp = m_world.getPool().popVec2();
            MassData massData = pmd;
            for (Fixture f = m_fixtureList; f != null; f = f.m_next)
            {
                if (f.m_density == 0.0f)
                {
                    continue;
                }
                f.getMassData(massData);
                m_mass += massData.mass;
                // center += massData.mass * massData.center;
                temp.set(massData.center).mulLocal(massData.mass);
                localCenter.addLocal(temp);
                m_I += massData.I;
            }

            // Compute center of mass.
            if (m_mass > 0.0f)
            {
                m_invMass = 1.0f/m_mass;
                localCenter.mulLocal(m_invMass);
            }
            else
            {
                // Force all dynamic bodies to have a positive mass.
                m_mass = 1.0f;
                m_invMass = 1.0f;
            }

            if (m_I > 0.0f && (m_flags & e_fixedRotationFlag) == 0)
            {
                // Center the inertia about the center of mass.
                m_I -= m_mass*Vec2.dot(localCenter, localCenter);
                m_invI = 1.0f/m_I;
            }
            else
            {
                m_I = 0.0f;
                m_invI = 0.0f;
            }

            Vec2 oldCenter = m_world.getPool().popVec2();
            // Move center of mass.
            oldCenter.set(m_sweep.c);
            m_sweep.localCenter.set(localCenter);
            // m_sweep.c0 = m_sweep.c = Mul(m_xf, m_sweep.localCenter);
            Transform.mulToOutUnsafe(m_xf, m_sweep.localCenter, m_sweep.c0);
            m_sweep.c.set(m_sweep.c0);

            // Update center of mass velocity.
            // m_linearVelocity += Cross(m_angularVelocity, m_sweep.c - oldCenter);
            temp.set(m_sweep.c).subLocal(oldCenter);

            Vec2 temp2 = oldCenter;
            Vec2.crossToOutUnsafe(m_angularVelocity, temp, temp2);
            m_linearVelocity.addLocal(temp2);

            m_world.getPool().pushVec2(3);
        }

        /**
   * Get the world coordinates of a point given the local coordinates.
   * 
   * @param localPoint a point on the body measured relative the the body's origin.
   * @return the same point expressed in world coordinates.
   */

        public Vec2 getWorldPoint(Vec2 localPoint)
        {
            var v = new Vec2();
            getWorldPointToOut(localPoint, v);
            return v;
        }

        public void getWorldPointToOut(Vec2 localPoint, Vec2 out_)
        {
            Transform.mulToOut(m_xf, localPoint, out_);
        }

        /**
   * Get the world coordinates of a vector given the local coordinates.
   * 
   * @param localVector a vector fixed in the body.
   * @return the same vector expressed in world coordinates.
   */

        public Vec2 getWorldVector(Vec2 localVector)
        {
            var out_ = new Vec2();
            getWorldVectorToOut(localVector, out_);
            return out_;
        }

        public void getWorldVectorToOut(Vec2 localVector, Vec2 out_)
        {
            Rot.mulToOut(m_xf.q, localVector, out_);
        }

        public void getWorldVectorToOutUnsafe(Vec2 localVector, Vec2 out_)
        {
            Rot.mulToOutUnsafe(m_xf.q, localVector, out_);
        }

        /**
   * Gets a local point relative to the body's origin given a world point.
   * 
   * @param a point in world coordinates.
   * @return the corresponding local point relative to the body's origin.
   */

        public Vec2 getLocalPoint(Vec2 worldPoint)
        {
            var out_ = new Vec2();
            getLocalPointToOut(worldPoint, out_);
            return out_;
        }

        public void getLocalPointToOut(Vec2 worldPoint, Vec2 out_)
        {
            Transform.mulTransToOut(m_xf, worldPoint, out_);
        }

        /**
   * Gets a local vector given a world vector.
   * 
   * @param a vector in world coordinates.
   * @return the corresponding local vector.
   */

        public Vec2 getLocalVector(Vec2 worldVector)
        {
            var out_ = new Vec2();
            getLocalVectorToOut(worldVector, out_);
            return out_;
        }

        public void getLocalVectorToOut(Vec2 worldVector, Vec2 out_)
        {
            Rot.mulTrans(m_xf.q, worldVector, out_);
        }

        public void getLocalVectorToOutUnsafe(Vec2 worldVector, Vec2 out_)
        {
            Rot.mulTransUnsafe(m_xf.q, worldVector, out_);
        }

        /**
   * Get the world linear velocity of a world point attached to this body.
   * 
   * @param a point in world coordinates.
   * @return the world velocity of a point.
   */

        public Vec2 getLinearVelocityFromWorldPoint(Vec2 worldPoint)
        {
            var out_ = new Vec2();
            getLinearVelocityFromWorldPointToOut(worldPoint, out_);
            return out_;
        }

        public void getLinearVelocityFromWorldPointToOut(Vec2 worldPoint, Vec2 out_)
        {
            out_.set(worldPoint).subLocal(m_sweep.c);
            Vec2.crossToOut(m_angularVelocity, out_, out_);
            out_.addLocal(m_linearVelocity);
        }

        /**
   * Get the world velocity of a local point.
   * 
   * @param a point in local coordinates.
   * @return the world velocity of a point.
   */

        public Vec2 getLinearVelocityFromLocalPoint(Vec2 localPoint)
        {
            var out_ = new Vec2();
            getLinearVelocityFromLocalPointToOut(localPoint, out_);
            return out_;
        }

        public void getLinearVelocityFromLocalPointToOut(Vec2 localPoint, Vec2 out_)
        {
            getWorldPointToOut(localPoint, out_);
            getLinearVelocityFromWorldPointToOut(out_, out_);
        }

        /** Get the linear damping of the body. */

        public double getLinearDamping()
        {
            return m_linearDamping;
        }

        /** Set the linear damping of the body. */

        public void setLinearDamping(double linearDamping)
        {
            m_linearDamping = linearDamping;
        }

        /** Get the angular damping of the body. */

        public double getAngularDamping()
        {
            return m_angularDamping;
        }

        /** Set the angular damping of the body. */

        public void setAngularDamping(double angularDamping)
        {
            m_angularDamping = angularDamping;
        }

        public BodyType getType()
        {
            return m_type;
        }

        /**
   * Set the type of this body. This may alter the mass and velocity.
   * 
   * @param type
   */

        public void setType(BodyType type)
        {
            if (m_world.isLocked())
            {
                return;
            }

            if (m_type == type)
            {
                return;
            }

            m_type = type;

            resetMassData();

            if (m_type == BodyType.STATIC)
            {
                m_linearVelocity.setZero();
                m_angularVelocity = 0.0f;
                m_sweep.a0 = m_sweep.a;
                m_sweep.c0.set(m_sweep.c);
                synchronizeFixtures();
            }

            setAwake(true);

            m_force.setZero();
            m_torque = 0.0f;

            // Delete the attached contacts.
            ContactEdge ce = m_contactList;
            while (ce != null)
            {
                ContactEdge ce0 = ce;
                ce = ce.next;
                m_world.m_contactManager.destroy(ce0.contact);
            }
            m_contactList = null;

            // Touch the proxies so that new contacts will be created (when appropriate)
            BroadPhase broadPhase = m_world.m_contactManager.m_broadPhase;
            for (Fixture f = m_fixtureList; f != null; f = f.m_next)
            {
                int proxyCount = f.m_proxyCount;
                for (int i = 0; i < proxyCount; ++i)
                {
                    broadPhase.touchProxy(f.m_proxies[i].proxyId);
                }
            }
        }

        /** Is this body treated like a bullet for continuous collision detection? */

        public bool isBullet()
        {
            return (m_flags & e_bulletFlag) == e_bulletFlag;
        }

        /** Should this body be treated like a bullet for continuous collision detection? */

        public void setBullet(bool flag)
        {
            if (flag)
            {
                m_flags |= e_bulletFlag;
            }
            else
            {
                m_flags &= ~e_bulletFlag;
            }
        }

        /**
   * You can disable sleeping on this body. If you disable sleeping, the body will be woken.
   * 
   * @param flag
   */

        public void setSleepingAllowed(bool flag)
        {
            if (flag)
            {
                m_flags |= e_autoSleepFlag;
            }
            else
            {
                m_flags &= ~e_autoSleepFlag;
                setAwake(true);
            }
        }

        /**
   * Is this body allowed to sleep
   * 
   * @return
   */

        public bool isSleepingAllowed()
        {
            return (m_flags & e_autoSleepFlag) == e_autoSleepFlag;
        }

        /**
   * Set the sleep state of the body. A sleeping body has very low CPU cost.
   * 
   * @param flag set to true to put body to sleep, false to wake it.
   * @param flag
   */

        public void setAwake(bool flag)
        {
            if (flag)
            {
                if ((m_flags & e_awakeFlag) == 0)
                {
                    m_flags |= e_awakeFlag;
                    m_sleepTime = 0.0f;
                }
            }
            else
            {
                m_flags &= ~e_awakeFlag;
                m_sleepTime = 0.0f;
                m_linearVelocity.setZero();
                m_angularVelocity = 0.0f;
                m_force.setZero();
                m_torque = 0.0f;
            }
        }

        /**
   * Get the sleeping state of this body.
   * 
   * @return true if the body is sleeping.
   */

        public bool isAwake()
        {
            return (m_flags & e_awakeFlag) == e_awakeFlag;
        }

        /**
   * Set the active state of the body. An inactive body is not simulated and cannot be collided with
   * or woken up. If you pass a flag of true, all fixtures will be added to the broad-phase. If you
   * pass a flag of false, all fixtures will be removed from the broad-phase and all contacts will
   * be destroyed. Fixtures and joints are otherwise unaffected. You may continue to create/destroy
   * fixtures and joints on inactive bodies. Fixtures on an inactive body are implicitly inactive
   * and will not participate in collisions, ray-casts, or queries. Joints connected to an inactive
   * body are implicitly inactive. An inactive body is still owned by a World object and remains in
   * the body list.
   * 
   * @param flag
   */

        public void setActive(bool flag)
        {
            if (flag == isActive())
            {
                return;
            }

            if (flag)
            {
                m_flags |= e_activeFlag;

                // Create all proxies.
                BroadPhase broadPhase = m_world.m_contactManager.m_broadPhase;
                for (Fixture f = m_fixtureList; f != null; f = f.m_next)
                {
                    f.createProxies(broadPhase, m_xf);
                }

                // Contacts are created the next time step.
            }
            else
            {
                m_flags &= ~e_activeFlag;

                // Destroy all proxies.
                BroadPhase broadPhase = m_world.m_contactManager.m_broadPhase;
                for (Fixture f = m_fixtureList; f != null; f = f.m_next)
                {
                    f.destroyProxies(broadPhase);
                }

                // Destroy the attached contacts.
                ContactEdge ce = m_contactList;
                while (ce != null)
                {
                    ContactEdge ce0 = ce;
                    ce = ce.next;
                    m_world.m_contactManager.destroy(ce0.contact);
                }
                m_contactList = null;
            }
        }

        /**
   * Get the active state of the body.
   * 
   * @return
   */

        public bool isActive()
        {
            return (m_flags & e_activeFlag) == e_activeFlag;
        }

        /**
   * Set this body to have fixed rotation. This causes the mass to be reset.
   * 
   * @param flag
   */

        public void setFixedRotation(bool flag)
        {
            if (flag)
            {
                m_flags |= e_fixedRotationFlag;
            }
            else
            {
                m_flags &= ~e_fixedRotationFlag;
            }

            resetMassData();
        }

        /**
   * Does this body have fixed rotation?
   * 
   * @return
   */

        public bool isFixedRotation()
        {
            return (m_flags & e_fixedRotationFlag) == e_fixedRotationFlag;
        }

        /** Get the list of all fixtures attached to this body. */

        public Fixture getFixtureList()
        {
            return m_fixtureList;
        }

        /** Get the list of all joints attached to this body. */

        public JointEdge getJointList()
        {
            return m_jointList;
        }

        /**
   * Get the list of all contacts attached to this body.
   * 
   * @warning this list changes during the time step and you may miss some collisions if you don't
   *          use ContactListener.
   */

        public ContactEdge getContactList()
        {
            return m_contactList;
        }

        /** Get the next body in the world's body list. */

        public Body getNext()
        {
            return m_next;
        }

        /** Get the user data pointer that was provided in the body definition. */

        public object getUserData()
        {
            return m_userData;
        }

        /**
   * Set the user data. Use this to store your application specific data.
   */

        public void setUserData(object data)
        {
            m_userData = data;
        }

        /**
   * Get the parent world of this body.
   */

        public World getWorld()
        {
            return m_world;
        }

        // djm pooling

        public void synchronizeFixtures()
        {
            Transform xf1 = pxf;
            // xf1.position = m_sweep.c0 - Mul(xf1.R, m_sweep.localCenter);

            // xf1.q.set(m_sweep.a0);
            // Rot.mulToOutUnsafe(xf1.q, m_sweep.localCenter, xf1.p);
            // xf1.p.mulLocal(-1).addLocal(m_sweep.c0);
            // inlined:
            xf1.q.s = MathUtils.sin(m_sweep.a0);
            xf1.q.c = MathUtils.cos(m_sweep.a0);
            xf1.p.x = m_sweep.c0.x - xf1.q.c*m_sweep.localCenter.x + xf1.q.s*m_sweep.localCenter.y;
            xf1.p.y = m_sweep.c0.y - xf1.q.s*m_sweep.localCenter.x - xf1.q.c*m_sweep.localCenter.y;
            // end inline

            for (Fixture f = m_fixtureList; f != null; f = f.m_next)
            {
                f.synchronize(m_world.m_contactManager.m_broadPhase, xf1, m_xf);
            }
        }

        public void synchronizeTransform()
        {
            // m_xf.q.set(m_sweep.a);
            //
            // // m_xf.position = m_sweep.c - Mul(m_xf.R, m_sweep.localCenter);
            // Rot.mulToOutUnsafe(m_xf.q, m_sweep.localCenter, m_xf.p);
            // m_xf.p.mulLocal(-1).addLocal(m_sweep.c);
            //
            m_xf.q.s = MathUtils.sin(m_sweep.a);
            m_xf.q.c = MathUtils.cos(m_sweep.a);
            Rot q = m_xf.q;
            Vec2 v = m_sweep.localCenter;
            m_xf.p.x = m_sweep.c.x - q.c*v.x + q.s*v.y;
            m_xf.p.y = m_sweep.c.y - q.s*v.x - q.c*v.y;
        }

        /**
   * This is used to prevent connected bodies from colliding. It may lie, depending on the
   * collideConnected flag.
   * 
   * @param other
   * @return
   */

        public bool shouldCollide(Body other)
        {
            // At least one body should be dynamic.
            if (m_type != BodyType.DYNAMIC && other.m_type != BodyType.DYNAMIC)
            {
                return false;
            }

            // Does a joint prevent collision?
            for (JointEdge jn = m_jointList; jn != null; jn = jn.next)
            {
                if (jn.other == other)
                {
                    if (jn.joint.getCollideConnected() == false)
                    {
                        return false;
                    }
                }
            }

            return true;
        }

        public void advance(double t)
        {
            // Advance to the new safe time. This doesn't sync the broad-phase.
            m_sweep.advance(t);
            m_sweep.c.set(m_sweep.c0);
            m_sweep.a = m_sweep.a0;
            m_xf.q.set(m_sweep.a);
            // m_xf.position = m_sweep.c - Mul(m_xf.R, m_sweep.localCenter);
            Rot.mulToOutUnsafe(m_xf.q, m_sweep.localCenter, m_xf.p);
            m_xf.p.mulLocal(-1).addLocal(m_sweep.c);
        }
    }
}