using System;
using FarseerPhysics.Common;
using FarseerPhysics.Dynamics;

namespace FarseerPhysics.Collision
{
    public interface IBroadPhase
    {
        int ProxyCount { get; }
        void UpdatePairs(BroadphaseDelegate callback);

        bool TestOverlap(int proxyIdA, int proxyIdB);

        int AddProxy( FixtureProxy proxy);

        void RemoveProxy(int proxyId);

        void MoveProxy(int proxyId,  AABB aabb, Vector2 displacement);

        FixtureProxy GetProxy(int proxyId);

        void TouchProxy(int proxyId);

        void GetFatAABB(int proxyId, out AABB aabb);

        void Query(Func<int, bool> callback,  AABB aabb);


        void ShiftOrigin(Vector2 newOrigin);
    }
}