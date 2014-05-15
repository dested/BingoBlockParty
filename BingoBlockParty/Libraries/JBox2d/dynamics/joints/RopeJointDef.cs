using org.jbox2d.common;

/**
 * Rope joint definition. This requires two body anchor points and a maximum lengths. Note: by
 * default the connected objects will not collide. see collideConnected in b2JointDef.
 * 
 * @author Daniel Murphy
 */

namespace org.jbox2d.dynamics.joints
{
    public class RopeJointDef : JointDef
    {
        /**
   * The local anchor point relative to bodyA's origin.
   */
        public readonly Vec2 localAnchorA = new Vec2();

        /**
   * The local anchor point relative to bodyB's origin.
   */
        public readonly Vec2 localAnchorB = new Vec2();

        /**
   * The maximum length of the rope. Warning: this must be larger than b2_linearSlop or the joint
   * will have no effect.
   */
        public float maxLength;

        public RopeJointDef()
        {
            type = JointType.ROPE;
            localAnchorA.set(-1.0f, 0.0f);
            localAnchorB.set(1.0f, 0.0f);
        }
    }
}