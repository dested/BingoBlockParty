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


using org.jbox2d.callbacks;
using org.jbox2d.collision;
using org.jbox2d.collision.broadphase;
using org.jbox2d.collision.shapes;
using org.jbox2d.common;
using org.jbox2d.dynamics.contacts;
using org.jbox2d.dynamics.joints;
using org.jbox2d.pooling;
using org.jbox2d.pooling.arrays;
using org.jbox2d.pooling.normal;

/**
 * The world class manages all physics entities, dynamic simulation, and asynchronous queries. The
 * world also contains efficient memory management facilities.
 * 
 * @author Daniel Murphy
 */

namespace org.jbox2d.dynamics
{
    public class World
    {
        public static readonly int WORLD_POOL_SIZE = 100;
        public static readonly int WORLD_POOL_CONTAINER_SIZE = 10;

        public static readonly int NEW_FIXTURE = 0x0001;
        public static readonly int LOCKED = 0x0002;
        public static readonly int CLEAR_FORCES = 0x0004;
        private static int LIQUID_INT = 1234598372;
        private readonly Vec2Array avs = new Vec2Array();
        private readonly Vec2 axis = new Vec2();
        private readonly Sweep backup1 = new Sweep();
        private readonly Sweep backup2 = new Sweep();
        private readonly Timer broadphaseTimer = new Timer();
        private readonly Vec2 cA = new Vec2();
        private readonly Vec2 cB = new Vec2();
        private readonly Vec2 center = new Vec2();
        private readonly Vec2 circCenterMoved = new Vec2();
        private readonly Color3f color = new Color3f();
        private readonly ContactRegister[,] contactStacks = new ContactRegister[4, 4];
        private readonly RayCastInput input = new RayCastInput();
        private readonly Island island = new Island();
        private readonly Profile islandProfile = new Profile();
        private readonly Color3f liquidColor = new Color3f(.4f, .4f, 1f);
        private readonly Vec2 liquidOffset = new Vec2();
        private readonly Vec2 m_gravity = new Vec2();
        private readonly Profile m_profile;
        private readonly IWorldPool pool;
        private readonly Timer stepTimer = new Timer();
        private readonly TimeStep subStep = new TimeStep();
        private readonly Body[] tempBodies = new Body[2];
        private readonly Timer tempTimer = new Timer();
        private readonly TimeStep timeStep = new TimeStep();
        private readonly Vec2Array tlvertices = new Vec2Array();
        private readonly TOIInput toiInput = new TOIInput();
        private readonly Island toiIsland = new Island();
        private readonly TOIOutput toiOutput = new TOIOutput();
        private readonly Vec2 v1 = new Vec2();
        private readonly Vec2 v2 = new Vec2();
        private readonly WorldQueryWrapper wqwrapper = new WorldQueryWrapper();
        private readonly WorldRayCastWrapper wrcwrapper = new WorldRayCastWrapper();
        private readonly Transform xf = new Transform();


        // statistics gathering
        public int activeContacts = 0;
        private double averageLinearVel = -1;
        public int contactPoolCount = 0;
        private double liquidLength = .12f;

        private bool m_allowSleep;
        private int m_bodyCount;
        private Body m_bodyList;
        public ContactManager m_contactManager;
        private bool m_continuousPhysics;

        // private Body m_groundBody;

        private DebugDraw m_debugDraw;
        private DestructionListener m_destructionListener;
        public int m_flags;

        /**
   * This is used to compute the time step ratio to support a variable time step.
   */
        private double m_inv_dt0;
        private int m_jointCount;
        private Joint m_jointList;

        // these are for debugging the solver

        private bool m_stepComplete;
        private bool m_subStepping;
        private bool m_warmStarting;
        private Body[] stack = new Body[10]; // TODO djm find a good initial stack number;

        /**
   * Construct a world object.
   * 
   * @param gravity the world gravity vector.
   */

        public World(Vec2 gravity)
            : this(gravity, new DefaultWorldPool(WORLD_POOL_SIZE, WORLD_POOL_CONTAINER_SIZE))
        {
        }

        /**
   * Construct a world object.
   * 
   * @param gravity the world gravity vector.
   */

        public World(Vec2 gravity, IWorldPool pool)
            : this(gravity, pool, new DynamicTree())
        {
        }

        public World(Vec2 gravity, IWorldPool argPool, BroadPhaseStrategy broadPhaseStrategy)
        {
            pool = argPool;
            m_destructionListener = null;
            m_debugDraw = null;

            m_bodyList = null;
            m_jointList = null;

            m_bodyCount = 0;
            m_jointCount = 0;

            m_warmStarting = true;
            m_continuousPhysics = true;
            m_subStepping = false;
            m_stepComplete = true;

            m_allowSleep = true;
            m_gravity.set(gravity);

            m_flags = CLEAR_FORCES;

            m_inv_dt0 = 0f;

            m_contactManager = new ContactManager(this, broadPhaseStrategy);
            m_profile = new Profile();

            initializeRegisters();
        }

        public void setAllowSleep(bool flag)
        {
            if (flag == m_allowSleep)
            {
                return;
            }

            m_allowSleep = flag;
            if (m_allowSleep == false)
            {
                for (Body b = m_bodyList; b != null; b = b.m_next)
                {
                    b.setAwake(true);
                }
            }
        }

        public void setSubStepping(bool subStepping)
        {
            m_subStepping = subStepping;
        }

        public bool isSubStepping()
        {
            return m_subStepping;
        }

        public bool isAllowSleep()
        {
            return m_allowSleep;
        }

        private void addType(IDynamicStack<Contact> creator, ShapeType type1, ShapeType type2)
        {
            var register = new ContactRegister();
            register.creator = creator;
            register.primary = true;
            contactStacks[(int) type1, (int) type2] = register;

            if (type1 != type2)
            {
                var register2 = new ContactRegister();
                register2.creator = creator;
                register2.primary = false;
                contactStacks[(int) type2, (int) type1] = register2;
            }
        }

        private void initializeRegisters()
        {
            addType(pool.getCircleContactStack(), ShapeType.CIRCLE, ShapeType.CIRCLE);
            addType(pool.getPolyCircleContactStack(), ShapeType.POLYGON, ShapeType.CIRCLE);
            addType(pool.getPolyContactStack(), ShapeType.POLYGON, ShapeType.POLYGON);
            addType(pool.getEdgeCircleContactStack(), ShapeType.EDGE, ShapeType.CIRCLE);
            addType(pool.getEdgePolyContactStack(), ShapeType.EDGE, ShapeType.POLYGON);
            addType(pool.getChainCircleContactStack(), ShapeType.CHAIN, ShapeType.CIRCLE);
            addType(pool.getChainPolyContactStack(), ShapeType.CHAIN, ShapeType.POLYGON);
        }

        public Contact popContact(Fixture fixtureA, int indexA, Fixture fixtureB, int indexB)
        {
            ShapeType type1 = fixtureA.getType();
            ShapeType type2 = fixtureB.getType();

            ContactRegister reg = contactStacks[(int) type1, (int) type2];
            IDynamicStack<Contact> creator = reg.creator;
            if (creator != null)
            {
                if (reg.primary)
                {
                    Contact c = creator.pop();
                    c.init(fixtureA, indexA, fixtureB, indexB);
                    return c;
                }
                else
                {
                    Contact c = creator.pop();
                    c.init(fixtureB, indexB, fixtureA, indexA);
                    return c;
                }
            }
            return null;
        }

        public void pushContact(Contact contact)
        {
            Fixture fixtureA = contact.getFixtureA();
            Fixture fixtureB = contact.getFixtureB();

            if (contact.m_manifold.pointCount > 0 && !fixtureA.isSensor() && !fixtureB.isSensor())
            {
                fixtureA.getBody().setAwake(true);
                fixtureB.getBody().setAwake(true);
            }

            ShapeType type1 = fixtureA.getType();
            ShapeType type2 = fixtureB.getType();

            IDynamicStack<Contact> creator = contactStacks[(int) type1, (int) type2].creator;
            creator.push(contact);
        }

        public IWorldPool getPool()
        {
            return pool;
        }

        /**
   * Register a destruction listener. The listener is owned by you and must remain in scope.
   * 
   * @param listener
   */

        public void setDestructionListener(DestructionListener listener)
        {
            m_destructionListener = listener;
        }

        /**
   * Register a contact filter to provide specific control over collision. Otherwise the default
   * filter is used (_defaultFilter). The listener is owned by you and must remain in scope.
   * 
   * @param filter
   */

        public void setContactFilter(ContactFilter filter)
        {
            m_contactManager.m_contactFilter = filter;
        }

        /**
   * Register a contact event listener. The listener is owned by you and must remain in scope.
   * 
   * @param listener
   */

        public void setContactListener(ContactListener listener)
        {
            m_contactManager.m_contactListener = listener;
        }

        /**
   * Register a routine for debug drawing. The debug draw functions are called inside with
   * World.DrawDebugData method. The debug draw object is owned by you and must remain in scope.
   * 
   * @param debugDraw
   */

        public void setDebugDraw(DebugDraw debugDraw)
        {
            m_debugDraw = debugDraw;
        }

        /**
   * create a rigid body given a definition. No reference to the definition is retained.
   * 
   * @warning This function is locked during callbacks.
   * @param def
   * @return
   */

        public Body createBody(BodyDef def)
        {
            if (isLocked())
            {
                return null;
            }
            // TODO djm pooling
            var b = new Body(def, this);

            // add to world doubly linked list
            b.m_prev = null;
            b.m_next = m_bodyList;
            if (m_bodyList != null)
            {
                m_bodyList.m_prev = b;
            }
            m_bodyList = b;
            ++m_bodyCount;

            return b;
        }

        /**
   * destroy a rigid body given a definition. No reference to the definition is retained. This
   * function is locked during callbacks.
   * 
   * @warning This automatically deletes all associated shapes and joints.
   * @warning This function is locked during callbacks.
   * @param body
   */

        public void destroyBody(Body body)
        {
            if (isLocked())
            {
                return;
            }

            // Delete the attached joints.
            JointEdge je = body.m_jointList;
            while (je != null)
            {
                JointEdge je0 = je;
                je = je.next;
                if (m_destructionListener != null)
                {
                    m_destructionListener.sayGoodbye(je0.joint);
                }

                destroyJoint(je0.joint);

                body.m_jointList = je;
            }
            body.m_jointList = null;

            // Delete the attached contacts.
            ContactEdge ce = body.m_contactList;
            while (ce != null)
            {
                ContactEdge ce0 = ce;
                ce = ce.next;
                m_contactManager.destroy(ce0.contact);
            }
            body.m_contactList = null;

            Fixture f = body.m_fixtureList;
            while (f != null)
            {
                Fixture f0 = f;
                f = f.m_next;

                if (m_destructionListener != null)
                {
                    m_destructionListener.sayGoodbye(f0);
                }

                f0.destroyProxies(m_contactManager.m_broadPhase);
                f0.destroy();
                // TODO djm recycle fixtures (here or in that destroy method)
                body.m_fixtureList = f;
                body.m_fixtureCount -= 1;
            }
            body.m_fixtureList = null;
            body.m_fixtureCount = 0;

            // Remove world body list.
            if (body.m_prev != null)
            {
                body.m_prev.m_next = body.m_next;
            }

            if (body.m_next != null)
            {
                body.m_next.m_prev = body.m_prev;
            }

            if (body == m_bodyList)
            {
                m_bodyList = body.m_next;
            }

            --m_bodyCount;
            // TODO djm recycle body
        }

        /**
   * create a joint to constrain bodies together. No reference to the definition is retained. This
   * may cause the connected bodies to cease colliding.
   * 
   * @warning This function is locked during callbacks.
   * @param def
   * @return
   */

        public Joint createJoint(JointDef def)
        {
            if (isLocked())
            {
                return null;
            }

            Joint j = Joint.create(this, def);

            // Connect to the world list.
            j.m_prev = null;
            j.m_next = m_jointList;
            if (m_jointList != null)
            {
                m_jointList.m_prev = j;
            }
            m_jointList = j;
            ++m_jointCount;

            // Connect to the bodies' doubly linked lists.
            j.m_edgeA.joint = j;
            j.m_edgeA.other = j.getBodyB();
            j.m_edgeA.prev = null;
            j.m_edgeA.next = j.getBodyA().m_jointList;
            if (j.getBodyA().m_jointList != null)
            {
                j.getBodyA().m_jointList.prev = j.m_edgeA;
            }
            j.getBodyA().m_jointList = j.m_edgeA;

            j.m_edgeB.joint = j;
            j.m_edgeB.other = j.getBodyA();
            j.m_edgeB.prev = null;
            j.m_edgeB.next = j.getBodyB().m_jointList;
            if (j.getBodyB().m_jointList != null)
            {
                j.getBodyB().m_jointList.prev = j.m_edgeB;
            }
            j.getBodyB().m_jointList = j.m_edgeB;

            Body bodyA = def.bodyA;
            Body bodyB = def.bodyB;

            // If the joint prevents collisions, then flag any contacts for filtering.
            if (def.collideConnected == false)
            {
                ContactEdge edge = bodyB.getContactList();
                while (edge != null)
                {
                    if (edge.other == bodyA)
                    {
                        // Flag the contact for filtering at the next time step (where either
                        // body is awake).
                        edge.contact.flagForFiltering();
                    }

                    edge = edge.next;
                }
            }

            // Note: creating a joint doesn't wake the bodies.

            return j;
        }

        /**
   * destroy a joint. This may cause the connected bodies to begin colliding.
   * 
   * @warning This function is locked during callbacks.
   * @param joint
   */

        public void destroyJoint(Joint j)
        {
            if (isLocked())
            {
                return;
            }

            bool collideConnected = j.getCollideConnected();

            // Remove from the doubly linked list.
            if (j.m_prev != null)
            {
                j.m_prev.m_next = j.m_next;
            }

            if (j.m_next != null)
            {
                j.m_next.m_prev = j.m_prev;
            }

            if (j == m_jointList)
            {
                m_jointList = j.m_next;
            }

            // Disconnect from island graph.
            Body bodyA = j.getBodyA();
            Body bodyB = j.getBodyB();

            // Wake up connected bodies.
            bodyA.setAwake(true);
            bodyB.setAwake(true);

            // Remove from body 1.
            if (j.m_edgeA.prev != null)
            {
                j.m_edgeA.prev.next = j.m_edgeA.next;
            }

            if (j.m_edgeA.next != null)
            {
                j.m_edgeA.next.prev = j.m_edgeA.prev;
            }

            if (j.m_edgeA == bodyA.m_jointList)
            {
                bodyA.m_jointList = j.m_edgeA.next;
            }

            j.m_edgeA.prev = null;
            j.m_edgeA.next = null;

            // Remove from body 2
            if (j.m_edgeB.prev != null)
            {
                j.m_edgeB.prev.next = j.m_edgeB.next;
            }

            if (j.m_edgeB.next != null)
            {
                j.m_edgeB.next.prev = j.m_edgeB.prev;
            }

            if (j.m_edgeB == bodyB.m_jointList)
            {
                bodyB.m_jointList = j.m_edgeB.next;
            }

            j.m_edgeB.prev = null;
            j.m_edgeB.next = null;

            Joint.destroy(j);
            --m_jointCount;

            // If the joint prevents collisions, then flag any contacts for filtering.
            if (collideConnected == false)
            {
                ContactEdge edge = bodyB.getContactList();
                while (edge != null)
                {
                    if (edge.other == bodyA)
                    {
                        // Flag the contact for filtering at the next time step (where either
                        // body is awake).
                        edge.contact.flagForFiltering();
                    }

                    edge = edge.next;
                }
            }
        }

        // djm pooling

        /**
   * Take a time step. This performs collision detection, integration, and constraint solution.
   * 
   * @param timeStep the amount of time to simulate, this should not vary.
   * @param velocityIterations for the velocity constraint solver.
   * @param positionIterations for the position constraint solver.
   */

        public void step(double dt, int velocityIterations, int positionIterations)
        {
            stepTimer.reset();
            // log.debug("Starting step");
            // If new fixtures were added, we need to find the new contacts.
            if ((m_flags & NEW_FIXTURE) == NEW_FIXTURE)
            {
                // log.debug("There's a new fixture, lets look for new contacts");
                m_contactManager.findNewContacts();
                m_flags &= ~NEW_FIXTURE;
            }

            m_flags |= LOCKED;

            timeStep.dt = dt;
            timeStep.velocityIterations = velocityIterations;
            timeStep.positionIterations = positionIterations;
            if (dt > 0.0f)
            {
                timeStep.inv_dt = 1.0f/dt;
            }
            else
            {
                timeStep.inv_dt = 0.0f;
            }

            timeStep.dtRatio = m_inv_dt0*dt;

            timeStep.warmStarting = m_warmStarting;

            // Update contacts. This is where some contacts are destroyed.
            tempTimer.reset();
            m_contactManager.collide();
            m_profile.collide = tempTimer.getMilliseconds();

            // Integrate velocities, solve velocity constraints, and integrate positions.
            if (m_stepComplete && timeStep.dt > 0.0f)
            {
                tempTimer.reset();
                solve(timeStep);
                m_profile.solve = tempTimer.getMilliseconds();
            }

            // Handle TOI events.
            if (m_continuousPhysics && timeStep.dt > 0.0f)
            {
                tempTimer.reset();
                solveTOI(timeStep);
                m_profile.solveTOI = tempTimer.getMilliseconds();
            }

            if (timeStep.dt > 0.0f)
            {
                m_inv_dt0 = timeStep.inv_dt;
            }

            if ((m_flags & CLEAR_FORCES) == CLEAR_FORCES)
            {
                clearForces();
            }

            m_flags &= ~LOCKED;
            // log.debug("ending step");

            m_profile.step = stepTimer.getMilliseconds();
        }

        /**
   * Call this after you are done with time steps to clear the forces. You normally call this after
   * each call to Step, unless you are performing sub-steps. By default, forces will be
   * automatically cleared, so you don't need to call this function.
   * 
   * @see setAutoClearForces
   */

        public void clearForces()
        {
            for (Body body = m_bodyList; body != null; body = body.getNext())
            {
                body.m_force.setZero();
                body.m_torque = 0.0f;
            }
        }

        /**
   * Call this to draw shapes and other debug draw data.
   */

        public void drawDebugData()
        {
            if (m_debugDraw == null)
            {
                return;
            }

            int flags = m_debugDraw.getFlags();

            if ((flags & DebugDraw.e_shapeBit) == DebugDraw.e_shapeBit)
            {
                for (Body b = m_bodyList; b != null; b = b.getNext())
                {
                    xf.set(b.getTransform());
                    for (Fixture f = b.getFixtureList(); f != null; f = f.getNext())
                    {
                        if (b.isActive() == false)
                        {
                            color.set(0.5f, 0.5f, 0.3f);
                            drawShape(f, xf, color);
                        }
                        else if (b.getType() == BodyType.STATIC)
                        {
                            color.set(0.5f, 0.9f, 0.3f);
                            drawShape(f, xf, color);
                        }
                        else if (b.getType() == BodyType.KINEMATIC)
                        {
                            color.set(0.5f, 0.5f, 0.9f);
                            drawShape(f, xf, color);
                        }
                        else if (b.isAwake() == false)
                        {
                            color.set(0.5f, 0.5f, 0.5f);
                            drawShape(f, xf, color);
                        }
                        else
                        {
                            color.set(0.9f, 0.7f, 0.7f);
                            drawShape(f, xf, color);
                        }
                    }
                }
            }

            if ((flags & DebugDraw.e_jointBit) == DebugDraw.e_jointBit)
            {
                for (Joint j = m_jointList; j != null; j = j.getNext())
                {
                    drawJoint(j);
                }
            }

            if ((flags & DebugDraw.e_pairBit) == DebugDraw.e_pairBit)
            {
                color.set(0.3f, 0.9f, 0.9f);
                for (Contact c = m_contactManager.m_contactList; c != null; c = c.getNext())
                {
                    Fixture fixtureA = c.getFixtureA();
                    Fixture fixtureB = c.getFixtureB();
                    fixtureA.getAABB(c.getChildIndexA()).getCenterToOut(cA);
                    fixtureB.getAABB(c.getChildIndexB()).getCenterToOut(cB);
                    m_debugDraw.drawSegment(cA, cB, color);
                }
            }

            if ((flags & DebugDraw.e_aabbBit) == DebugDraw.e_aabbBit)
            {
                color.set(0.9f, 0.3f, 0.9f);

                for (Body b = m_bodyList; b != null; b = b.getNext())
                {
                    if (b.isActive() == false)
                    {
                        continue;
                    }

                    for (Fixture f = b.getFixtureList(); f != null; f = f.getNext())
                    {
                        for (int i = 0; i < f.m_proxyCount; ++i)
                        {
                            FixtureProxy proxy = f.m_proxies[i];
                            AABB aabb = m_contactManager.m_broadPhase.getFatAABB(proxy.proxyId);
                            Vec2[] vs = avs.get(4);
                            vs[0].set(aabb.lowerBound.x, aabb.lowerBound.y);
                            vs[1].set(aabb.upperBound.x, aabb.lowerBound.y);
                            vs[2].set(aabb.upperBound.x, aabb.upperBound.y);
                            vs[3].set(aabb.lowerBound.x, aabb.upperBound.y);
                            m_debugDraw.drawPolygon(vs, 4, color);
                        }
                    }
                }
            }

            if ((flags & DebugDraw.e_centerOfMassBit) == DebugDraw.e_centerOfMassBit)
            {
                for (Body b = m_bodyList; b != null; b = b.getNext())
                {
                    xf.set(b.getTransform());
                    xf.p.set(b.getWorldCenter());
                    m_debugDraw.drawTransform(xf);
                }
            }

            if ((flags & DebugDraw.e_dynamicTreeBit) == DebugDraw.e_dynamicTreeBit)
            {
                m_contactManager.m_broadPhase.drawTree(m_debugDraw);
            }
        }

        /**
   * Query the world for all fixtures that potentially overlap the provided AABB.
   * 
   * @param callback a user implemented callback class.
   * @param aabb the query box.
   */

        public void queryAABB(QueryCallback callback, AABB aabb)
        {
            wqwrapper.broadPhase = m_contactManager.m_broadPhase;
            wqwrapper.callback = callback;
            m_contactManager.m_broadPhase.query(wqwrapper, aabb);
        }

        /**
   * Ray-cast the world for all fixtures in the path of the ray. Your callback controls whether you
   * get the closest point, any point, or n-points. The ray-cast ignores shapes that contain the
   * starting point.
   * 
   * @param callback a user implemented callback class.
   * @param point1 the ray starting point
   * @param point2 the ray ending point
   */

        public void raycast(RayCastCallback callback, Vec2 point1, Vec2 point2)
        {
            wrcwrapper.broadPhase = m_contactManager.m_broadPhase;
            wrcwrapper.callback = callback;
            input.maxFraction = 1.0f;
            input.p1.set(point1);
            input.p2.set(point2);
            m_contactManager.m_broadPhase.raycast(wrcwrapper, input);
        }

        /**
   * Get the world body list. With the returned body, use Body.getNext to get the next body in the
   * world list. A null body indicates the end of the list.
   * 
   * @return the head of the world body list.
   */

        public Body getBodyList()
        {
            return m_bodyList;
        }

        /**
   * Get the world joint list. With the returned joint, use Joint.getNext to get the next joint in
   * the world list. A null joint indicates the end of the list.
   * 
   * @return the head of the world joint list.
   */

        public Joint getJointList()
        {
            return m_jointList;
        }

        /**
   * Get the world contact list. With the returned contact, use Contact.getNext to get the next
   * contact in the world list. A null contact indicates the end of the list.
   * 
   * @return the head of the world contact list.
   * @warning contacts are created and destroyed in the middle of a time step. Use ContactListener
   *          to avoid missing contacts.
   */

        public Contact getContactList()
        {
            return m_contactManager.m_contactList;
        }

        public bool isSleepingAllowed()
        {
            return m_allowSleep;
        }

        public void setSleepingAllowed(bool sleepingAllowed)
        {
            m_allowSleep = sleepingAllowed;
        }

        /**
   * Enable/disable warm starting. For testing.
   * 
   * @param flag
   */

        public void setWarmStarting(bool flag)
        {
            m_warmStarting = flag;
        }

        public bool isWarmStarting()
        {
            return m_warmStarting;
        }

        /**
   * Enable/disable continuous physics. For testing.
   * 
   * @param flag
   */

        public void setContinuousPhysics(bool flag)
        {
            m_continuousPhysics = flag;
        }

        public bool isContinuousPhysics()
        {
            return m_continuousPhysics;
        }


        /**
   * Get the number of broad-phase proxies.
   * 
   * @return
   */

        public int getProxyCount()
        {
            return m_contactManager.m_broadPhase.getProxyCount();
        }

        /**
   * Get the number of bodies.
   * 
   * @return
   */

        public int getBodyCount()
        {
            return m_bodyCount;
        }

        /**
   * Get the number of joints.
   * 
   * @return
   */

        public int getJointCount()
        {
            return m_jointCount;
        }

        /**
   * Get the number of contacts (each may have 0 or more contact points).
   * 
   * @return
   */

        public int getContactCount()
        {
            return m_contactManager.m_contactCount;
        }

        /**
   * Gets the height of the dynamic tree
   * 
   * @return
   */

        public int getTreeHeight()
        {
            return m_contactManager.m_broadPhase.getTreeHeight();
        }

        /**
   * Gets the balance of the dynamic tree
   * 
   * @return
   */

        public int getTreeBalance()
        {
            return m_contactManager.m_broadPhase.getTreeBalance();
        }

        /**
   * Gets the quality of the dynamic tree
   * 
   * @return
   */

        public double getTreeQuality()
        {
            return m_contactManager.m_broadPhase.getTreeQuality();
        }

        /**
   * Change the global gravity vector.
   * 
   * @param gravity
   */

        public void setGravity(Vec2 gravity)
        {
            m_gravity.set(gravity);
        }

        /**
   * Get the global gravity vector.
   * 
   * @return
   */

        public Vec2 getGravity()
        {
            return m_gravity;
        }

        /**
   * Is the world locked (in the middle of a time step).
   * 
   * @return
   */

        public bool isLocked()
        {
            return (m_flags & LOCKED) == LOCKED;
        }

        /**
   * Set flag to control automatic clearing of forces after each time step.
   * 
   * @param flag
   */

        public void setAutoClearForces(bool flag)
        {
            if (flag)
            {
                m_flags |= CLEAR_FORCES;
            }
            else
            {
                m_flags &= ~CLEAR_FORCES;
            }
        }

        /**
   * Get the flag that controls automatic clearing of forces after each time step.
   * 
   * @return
   */

        public bool getAutoClearForces()
        {
            return (m_flags & CLEAR_FORCES) == CLEAR_FORCES;
        }

        /**
   * Get the contact manager for testing purposes
   * 
   * @return
   */

        public ContactManager getContactManager()
        {
            return m_contactManager;
        }

        public Profile getProfile()
        {
            return m_profile;
        }

        private void solve(TimeStep step)
        {
            m_profile.solveInit = 0;
            m_profile.solveVelocity = 0;
            m_profile.solvePosition = 0;

            // Size the island for the worst case.
            island.init(m_bodyCount, m_contactManager.m_contactCount, m_jointCount,
                m_contactManager.m_contactListener);

            // Clear all the island flags.
            for (Body b = m_bodyList; b != null; b = b.m_next)
            {
                b.m_flags &= ~Body.e_islandFlag;
            }
            for (Contact c = m_contactManager.m_contactList; c != null; c = c.m_next)
            {
                c.m_flags &= ~Contact.ISLAND_FLAG;
            }
            for (Joint j = m_jointList; j != null; j = j.m_next)
            {
                j.m_islandFlag = false;
            }

            // Build and simulate all awake islands.
            int stackSize = m_bodyCount;
            if (stack.Length < stackSize)
            {
                stack = new Body[stackSize];
            }
            for (Body seed = m_bodyList; seed != null; seed = seed.m_next)
            {
                if ((seed.m_flags & Body.e_islandFlag) == Body.e_islandFlag)
                {
                    continue;
                }

                if (seed.isAwake() == false || seed.isActive() == false)
                {
                    continue;
                }

                // The seed can be dynamic or kinematic.
                if (seed.getType() == BodyType.STATIC)
                {
                    continue;
                }

                // Reset island and stack.
                island.clear();
                int stackCount = 0;
                stack[stackCount++] = seed;
                seed.m_flags |= Body.e_islandFlag;

                // Perform a depth first search (DFS) on the constraint graph.
                while (stackCount > 0)
                {
                    // Grab the next body off the stack and add it to the island.
                    Body b = stack[--stackCount];
                    island.add(b);

                    // Make sure the body is awake.
                    b.setAwake(true);

                    // To keep islands as small as possible, we don't
                    // propagate islands across static bodies.
                    if (b.getType() == BodyType.STATIC)
                    {
                        continue;
                    }

                    // Search all contacts connected to this body.
                    for (ContactEdge ce = b.m_contactList; ce != null; ce = ce.next)
                    {
                        Contact contact = ce.contact;

                        // Has this contact already been added to an island?
                        if ((contact.m_flags & Contact.ISLAND_FLAG) == Contact.ISLAND_FLAG)
                        {
                            continue;
                        }

                        // Is this contact solid and touching?
                        if (contact.isEnabled() == false || contact.isTouching() == false)
                        {
                            continue;
                        }

                        // Skip sensors.
                        bool sensorA = contact.m_fixtureA.m_isSensor;
                        bool sensorB = contact.m_fixtureB.m_isSensor;
                        if (sensorA || sensorB)
                        {
                            continue;
                        }

                        island.add(contact);
                        contact.m_flags |= Contact.ISLAND_FLAG;

                        Body other = ce.other;

                        // Was the other body already added to this island?
                        if ((other.m_flags & Body.e_islandFlag) == Body.e_islandFlag)
                        {
                            continue;
                        }
                        stack[stackCount++] = other;
                        other.m_flags |= Body.e_islandFlag;
                    }

                    // Search all joints connect to this body.
                    for (JointEdge je = b.m_jointList; je != null; je = je.next)
                    {
                        if (je.joint.m_islandFlag)
                        {
                            continue;
                        }

                        Body other = je.other;

                        // Don't simulate joints connected to inactive bodies.
                        if (other.isActive() == false)
                        {
                            continue;
                        }

                        island.add(je.joint);
                        je.joint.m_islandFlag = true;

                        if ((other.m_flags & Body.e_islandFlag) == Body.e_islandFlag)
                        {
                            continue;
                        }
                        stack[stackCount++] = other;
                        other.m_flags |= Body.e_islandFlag;
                    }
                }
                island.solve(islandProfile, step, m_gravity, m_allowSleep);
                m_profile.solveInit += islandProfile.solveInit;
                m_profile.solveVelocity += islandProfile.solveVelocity;
                m_profile.solvePosition += islandProfile.solvePosition;

                // Post solve cleanup.
                for (int i = 0; i < island.m_bodyCount; ++i)
                {
                    // Allow static bodies to participate in other islands.
                    Body b = island.m_bodies[i];
                    if (b.getType() == BodyType.STATIC)
                    {
                        b.m_flags &= ~Body.e_islandFlag;
                    }
                }
            }

            broadphaseTimer.reset();
            // Synchronize fixtures, check for out of range bodies.
            for (Body b = m_bodyList; b != null; b = b.getNext())
            {
                // If a body was not in an island then it did not move.
                if ((b.m_flags & Body.e_islandFlag) == 0)
                {
                    continue;
                }

                if (b.getType() == BodyType.STATIC)
                {
                    continue;
                }

                // Update fixtures (for broad-phase).
                b.synchronizeFixtures();
            }

            // Look for new contacts.
            m_contactManager.findNewContacts();
            m_profile.broadphase = broadphaseTimer.getMilliseconds();
        }

        private void solveTOI(TimeStep step)
        {
            Island island = toiIsland;
            island.init(2*Settings.maxTOIContacts, Settings.maxTOIContacts, 0,
                m_contactManager.m_contactListener);
            if (m_stepComplete)
            {
                for (Body b = m_bodyList; b != null; b = b.m_next)
                {
                    b.m_flags &= ~Body.e_islandFlag;
                    b.m_sweep.alpha0 = 0.0f;
                }

                for (Contact c = m_contactManager.m_contactList; c != null; c = c.m_next)
                {
                    // Invalidate TOI
                    c.m_flags &= ~(Contact.TOI_FLAG | Contact.ISLAND_FLAG);
                    c.m_toiCount = 0;
                    c.m_toi = 1.0f;
                }
            }

            // Find TOI events and solve them.
            for (;;)
            {
                // Find the first TOI.
                Contact minContact = null;
                double minAlpha = 1.0f;

                for (Contact c = m_contactManager.m_contactList; c != null; c = c.m_next)
                {
                    // Is this contact disabled?
                    if (c.isEnabled() == false)
                    {
                        continue;
                    }

                    // Prevent excessive sub-stepping.
                    if (c.m_toiCount > Settings.maxSubSteps)
                    {
                        continue;
                    }

                    double alpha = 1.0f;
                    if ((c.m_flags & Contact.TOI_FLAG) != 0)
                    {
                        // This contact has a valid cached TOI.
                        alpha = c.m_toi;
                    }
                    else
                    {
                        Fixture fA = c.getFixtureA();
                        Fixture fB = c.getFixtureB();

                        // Is there a sensor?
                        if (fA.isSensor() || fB.isSensor())
                        {
                            continue;
                        }

                        Body bA = fA.getBody();
                        Body bB = fB.getBody();

                        BodyType typeA = bA.m_type;
                        BodyType typeB = bB.m_type;

                        bool activeA = bA.isAwake() && typeA != BodyType.STATIC;
                        bool activeB = bB.isAwake() && typeB != BodyType.STATIC;

                        // Is at least one body active (awake and dynamic or kinematic)?
                        if (activeA == false && activeB == false)
                        {
                            continue;
                        }

                        bool collideA = bA.isBullet() || typeA != BodyType.DYNAMIC;
                        bool collideB = bB.isBullet() || typeB != BodyType.DYNAMIC;

                        // Are these two non-bullet dynamic bodies?
                        if (collideA == false && collideB == false)
                        {
                            continue;
                        }

                        // Compute the TOI for this contact.
                        // Put the sweeps onto the same time interval.
                        double alpha0 = bA.m_sweep.alpha0;

                        if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0)
                        {
                            alpha0 = bB.m_sweep.alpha0;
                            bA.m_sweep.advance(alpha0);
                        }
                        else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0)
                        {
                            alpha0 = bA.m_sweep.alpha0;
                            bB.m_sweep.advance(alpha0);
                        }

                        int indexA = c.getChildIndexA();
                        int indexB = c.getChildIndexB();

                        // Compute the time of impact in interval [0, minTOI]
                        TOIInput input = toiInput;
                        input.proxyA.set(fA.getShape(), indexA);
                        input.proxyB.set(fB.getShape(), indexB);
                        input.sweepA.set(bA.m_sweep);
                        input.sweepB.set(bB.m_sweep);
                        input.tMax = 1.0f;

                        pool.getTimeOfImpact().timeOfImpact(toiOutput, input);

                        // Beta is the fraction of the remaining portion of the .
                        double beta = toiOutput.t;
                        if (toiOutput.state == TOIOutputState.TOUCHING)
                        {
                            alpha = MathUtils.min(alpha0 + (1.0f - alpha0)*beta, 1.0f);
                        }
                        else
                        {
                            alpha = 1.0f;
                        }

                        c.m_toi = alpha;
                        c.m_flags |= Contact.TOI_FLAG;
                    }

                    if (alpha < minAlpha)
                    {
                        // This is the minimum TOI found so far.
                        minContact = c;
                        minAlpha = alpha;
                    }
                }

                if (minContact == null || 1.0f - 10.0f*Settings.EPSILON < minAlpha)
                {
                    // No more TOI events. Done!
                    m_stepComplete = true;
                    break;
                }

                // Advance the bodies to the TOI.
                Fixture fA2 = minContact.getFixtureA();
                Fixture fB2 = minContact.getFixtureB();
                Body bA2 = fA2.getBody();
                Body bB2 = fB2.getBody();

                backup1.set(bA2.m_sweep);
                backup2.set(bB2.m_sweep);

                bA2.advance(minAlpha);
                bB2.advance(minAlpha);

                // The TOI contact likely has some new contact points.
                minContact.update(m_contactManager.m_contactListener);
                minContact.m_flags &= ~Contact.TOI_FLAG;
                ++minContact.m_toiCount;

                // Is the contact solid?
                if (minContact.isEnabled() == false || minContact.isTouching() == false)
                {
                    // Restore the sweeps.
                    minContact.setEnabled(false);
                    bA2.m_sweep.set(backup1);
                    bB2.m_sweep.set(backup2);
                    bA2.synchronizeTransform();
                    bB2.synchronizeTransform();
                    continue;
                }

                bA2.setAwake(true);
                bB2.setAwake(true);

                // Build the island
                island.clear();
                island.add(bA2);
                island.add(bB2);
                island.add(minContact);

                bA2.m_flags |= Body.e_islandFlag;
                bB2.m_flags |= Body.e_islandFlag;
                minContact.m_flags |= Contact.ISLAND_FLAG;

                // Get contacts on bodyA and bodyB.
                tempBodies[0] = bA2;
                tempBodies[1] = bB2;
                for (int i = 0; i < 2; ++i)
                {
                    Body body = tempBodies[i];
                    if (body.m_type == BodyType.DYNAMIC)
                    {
                        for (ContactEdge ce = body.m_contactList; ce != null; ce = ce.next)
                        {
                            if (island.m_bodyCount == island.m_bodyCapacity)
                            {
                                break;
                            }

                            if (island.m_contactCount == island.m_contactCapacity)
                            {
                                break;
                            }

                            Contact contact = ce.contact;

                            // Has this contact already been added to the island?
                            if ((contact.m_flags & Contact.ISLAND_FLAG) != 0)
                            {
                                continue;
                            }

                            // Only add static, kinematic, or bullet bodies.
                            Body other = ce.other;
                            if (other.m_type == BodyType.DYNAMIC && body.isBullet() == false
                                && other.isBullet() == false)
                            {
                                continue;
                            }

                            // Skip sensors.
                            bool sensorA = contact.m_fixtureA.m_isSensor;
                            bool sensorB = contact.m_fixtureB.m_isSensor;
                            if (sensorA || sensorB)
                            {
                                continue;
                            }

                            // Tentatively advance the body to the TOI.
                            backup1.set(other.m_sweep);
                            if ((other.m_flags & Body.e_islandFlag) == 0)
                            {
                                other.advance(minAlpha);
                            }

                            // Update the contact points
                            contact.update(m_contactManager.m_contactListener);

                            // Was the contact disabled by the user?
                            if (contact.isEnabled() == false)
                            {
                                other.m_sweep.set(backup1);
                                other.synchronizeTransform();
                                continue;
                            }

                            // Are there contact points?
                            if (contact.isTouching() == false)
                            {
                                other.m_sweep.set(backup1);
                                other.synchronizeTransform();
                                continue;
                            }

                            // Add the contact to the island
                            contact.m_flags |= Contact.ISLAND_FLAG;
                            island.add(contact);

                            // Has the other body already been added to the island?
                            if ((other.m_flags & Body.e_islandFlag) != 0)
                            {
                                continue;
                            }

                            // Add the other body to the island.
                            other.m_flags |= Body.e_islandFlag;

                            if (other.m_type != BodyType.STATIC)
                            {
                                other.setAwake(true);
                            }

                            island.add(other);
                        }
                    }
                }

                subStep.dt = (1.0f - minAlpha)*step.dt;
                subStep.inv_dt = 1.0f/subStep.dt;
                subStep.dtRatio = 1.0f;
                subStep.positionIterations = 20;
                subStep.velocityIterations = step.velocityIterations;
                subStep.warmStarting = false;
                island.solveTOI(subStep, bA2.m_islandIndex, bB2.m_islandIndex);

                // Reset island flags and synchronize broad-phase proxies.
                for (int i = 0; i < island.m_bodyCount; ++i)
                {
                    Body body = island.m_bodies[i];
                    body.m_flags &= ~Body.e_islandFlag;

                    if (body.m_type != BodyType.DYNAMIC)
                    {
                        continue;
                    }

                    body.synchronizeFixtures();

                    // Invalidate all contact TOIs on this displaced body.
                    for (ContactEdge ce = body.m_contactList; ce != null; ce = ce.next)
                    {
                        ce.contact.m_flags &= ~(Contact.TOI_FLAG | Contact.ISLAND_FLAG);
                    }
                }

                // Commit fixture proxy movements to the broad-phase so that new contacts are created.
                // Also, some contacts can be destroyed.
                m_contactManager.findNewContacts();

                if (m_subStepping)
                {
                    m_stepComplete = false;
                    break;
                }
            }
        }

        private void drawJoint(Joint joint)
        {
            Body bodyA = joint.getBodyA();
            Body bodyB = joint.getBodyB();
            Transform xf1 = bodyA.getTransform();
            Transform xf2 = bodyB.getTransform();
            Vec2 x1 = xf1.p;
            Vec2 x2 = xf2.p;
            Vec2 p1 = pool.popVec2();
            Vec2 p2 = pool.popVec2();
            joint.getAnchorA(p1);
            joint.getAnchorB(p2);

            color.set(0.5f, 0.8f, 0.8f);

            switch (joint.getType())
            {
                    // TODO djm write after writing joints
                case JointType.DISTANCE:
                    m_debugDraw.drawSegment(p1, p2, color);
                    break;

                case JointType.PULLEY:
                {
                    var pulley = (PulleyJoint) joint;
                    Vec2 s1 = pulley.getGroundAnchorA();
                    Vec2 s2 = pulley.getGroundAnchorB();
                    m_debugDraw.drawSegment(s1, p1, color);
                    m_debugDraw.drawSegment(s2, p2, color);
                    m_debugDraw.drawSegment(s1, s2, color);
                }
                    break;
                case JointType.CONSTANT_VOLUME:
                case JointType.MOUSE:
                    // don't draw this
                    break;
                default:
                    m_debugDraw.drawSegment(x1, p1, color);
                    m_debugDraw.drawSegment(p1, p2, color);
                    m_debugDraw.drawSegment(x2, p2, color);
                    break;
            }
            pool.pushVec2(2);
        }

        // NOTE this corresponds to the liquid test, so the debugdraw can draw
        // the liquid particles correctly. They should be the same.

        private void drawShape(Fixture fixture, Transform xf, Color3f color)
        {
            switch (fixture.getType())
            {
                case ShapeType.CIRCLE:
                {
                    var circle = (CircleShape) fixture.getShape();

                    // Vec2 center = Mul(xf, circle.m_p);
                    Transform.mulToOutUnsafe(xf, circle.m_p, center);
                    double radius = circle.m_radius;
                    xf.q.getXAxis(axis);

                    if (fixture.getUserData() != null && fixture.getUserData().Equals(LIQUID_INT))
                    {
                        Body b = fixture.getBody();
                        liquidOffset.set(b.m_linearVelocity);
                        double linVelLength = b.m_linearVelocity.length();
                        if (averageLinearVel == -1)
                        {
                            averageLinearVel = linVelLength;
                        }
                        else
                        {
                            averageLinearVel = .98f*averageLinearVel + .02f*linVelLength;
                        }
                        liquidOffset.mulLocal(liquidLength/averageLinearVel/2);
                        circCenterMoved.set(center).addLocal(liquidOffset);
                        center.subLocal(liquidOffset);
                        m_debugDraw.drawSegment(center, circCenterMoved, liquidColor);
                        return;
                    }

                    m_debugDraw.drawSolidCircle(center, radius, axis, color);
                }
                    break;

                case ShapeType.POLYGON:
                {
                    var poly = (PolygonShape) fixture.getShape();
                    int vertexCount = poly.m_count;
                    Vec2[] vertices = tlvertices.get(Settings.maxPolygonVertices);

                    for (int i = 0; i < vertexCount; ++i)
                    {
                        // vertices[i] = Mul(xf, poly.m_vertices[i]);
                        Transform.mulToOutUnsafe(xf, poly.m_vertices[i], vertices[i]);
                    }

                    m_debugDraw.drawSolidPolygon(vertices, vertexCount, color);
                }
                    break;
                case ShapeType.EDGE:
                {
                    var edge = (EdgeShape) fixture.getShape();
                    Transform.mulToOutUnsafe(xf, edge.m_vertex1, v1);
                    Transform.mulToOutUnsafe(xf, edge.m_vertex2, v2);
                    m_debugDraw.drawSegment(v1, v2, color);
                }
                    break;

                case ShapeType.CHAIN:
                {
                    var chain = (ChainShape) fixture.getShape();
                    int count = chain.m_count;
                    Vec2[] vertices = chain.m_vertices;

                    Transform.mulToOutUnsafe(xf, vertices[0], v1);
                    for (int i = 1; i < count; ++i)
                    {
                        Transform.mulToOutUnsafe(xf, vertices[i], v2);
                        m_debugDraw.drawSegment(v1, v2, color);
                        m_debugDraw.drawCircle(v1, 0.05f, color);
                        v1.set(v2);
                    }
                }
                    break;
                default:
                    break;
            }
        }
    }


    internal class WorldQueryWrapper : TreeCallback
    {
        public BroadPhase broadPhase;
        public QueryCallback callback;

        public bool treeCallback(int nodeId)
        {
            var proxy = (FixtureProxy) broadPhase.getUserData(nodeId);
            return callback.reportFixture(proxy.fixture);
        }
    };


    internal class WorldRayCastWrapper : TreeRayCastCallback
    {
        // djm pooling
        private readonly RayCastOutput output = new RayCastOutput();
        private readonly Vec2 point = new Vec2();
        private readonly Vec2 temp = new Vec2();

        public
            BroadPhase broadPhase;

        public RayCastCallback callback;

        public double raycastCallback(RayCastInput input, int nodeId)
        {
            object userData = broadPhase.getUserData(nodeId);
            var proxy = (FixtureProxy) userData;
            Fixture fixture = proxy.fixture;
            int index = proxy.childIndex;
            bool hit = fixture.raycast(output, input, index);

            if (hit)
            {
                double fraction = output.fraction;
                // Vec2 point = (1.0f - fraction) * input.p1 + fraction * input.p2;
                temp.set(input.p2).mulLocal(fraction);
                point.set(input.p1).mulLocal(1 - fraction).addLocal(temp);
                return callback.reportFixture(fixture, point, output.normal, fraction);
            }

            return input.maxFraction;
        }
    };
}