using System.Collections.Generic;
using BingoBlockParty.Common.BallGame.Models;
using Box2DX.Collision;
using Box2DX.Common;
using Box2DX.Dynamics;
using Math = System.Math;

namespace BingoBlockParty.Common.BallGame
{
    public class PegPhysicsManager
    {
        public World World { get; set; }
        public GameBoard GameBoard { get; set; }
        public List<CollisionObject> Collisions { get; set; }

        public PegPhysicsManager(GameBoard gameBoard)
        {
            this.GameBoard = gameBoard;
        }


        public void Init()
        {
            AABB worldAABB = new AABB();
            worldAABB.LowerBound.Set(-100.0f);
            worldAABB.UpperBound.Set(100.0f);

            this.World = new World(worldAABB, new Vec2(0, 35), true);


            this.CreateRectangleWall(0, -this.GameBoard.GameModel.BoardHeight, 1, this.GameBoard.GameModel.BoardHeight * 2, "Wall");
            this.CreateRectangleWall(this.GameBoard.GameModel.BoardWidth, -this.GameBoard.GameModel.BoardHeight, 1, this.GameBoard.GameModel.BoardHeight * 2, "Wall");
            this.CreateRectangleWall(0, this.GameBoard.GameModel.BoardHeight, this.GameBoard.GameModel.BoardWidth, 1, "Wall");


            this.Collisions = new List<CollisionObject>();
            var myListener = new PegContactListener();



            this.World.SetContactListener(myListener);
        }


        public Body CreateRectangleWall(int x, int y, int width, int height, object userData)
        {
            var fixDef = new PolygonDef();
            fixDef.Density = 1;
            fixDef.Friction = 1;
            fixDef.Restitution = .6f;
            var bodyDef = new BodyDef();
            bodyDef.Position.X = this.PixelToMeter(x) + this.PixelToMeter(width) / 2;
            bodyDef.Position.Y = this.PixelToMeter(y) + this.PixelToMeter(height) / 2;
            var body = this.World.CreateBody(bodyDef);
            var fixture = body.CreateFixture(fixDef);
            ((PolygonShape)fixture.Shape).SetAsBox(this.PixelToMeter(width) / 2, this.PixelToMeter(height) / 2);
            body.SetStatic();
            body.SetUserData(userData);
            return body;
        }

        public Body CreateRectangleSensor(int x, int y, int width, int height, object userData)
        {
            var fixDef = new PolygonDef();
            fixDef.IsSensor = true;
            fixDef.Density = 1;
            fixDef.Friction = 1;
            fixDef.Restitution = .6f;
            var bodyDef = new BodyDef();
            bodyDef.Position.X = this.PixelToMeter(x) + this.PixelToMeter(width) / 2;
            bodyDef.Position.Y = this.PixelToMeter(y) + this.PixelToMeter(height) / 2;
            var body = this.World.CreateBody(bodyDef);
            var fixture = body.CreateFixture(fixDef);
            ((PolygonShape)fixture.Shape).SetAsBox(this.PixelToMeter(width) / 2, this.PixelToMeter(height) / 2);
            body.SetStatic();
            body.SetUserData(userData);
            return body;
        }


        public Body CreateCircleWall(int x, int y, int rad, object userData)
        {

            var fixDef = new CircleDef();

            fixDef.Density = 1;
            fixDef.Friction = 1;
            fixDef.Restitution = .6f;
            fixDef.Radius = PixelToMeter(rad);

            var bodyDef = new BodyDef();

            bodyDef.Position.X = this.PixelToMeter(x);
            bodyDef.Position.Y = this.PixelToMeter(y);

            var body = this.World.CreateBody(bodyDef);
            body.SetStatic();
            body.CreateFixture(fixDef);
            body.SetUserData(userData);
            return body;
        }

        public void DestroyBody(Body body)
        {
            this.World.DestroyBody(body);
        }

        public Body CreatePeg(int x, int y, object peg)
        {

            var fixDef = new CircleDef();

            fixDef.Density = 1;
            fixDef.Friction = 1;
            fixDef.Restitution = .6f;
            fixDef.Radius = 1 / 2;

            var bodyDef = new BodyDef();

            bodyDef.Position.X = this.PixelToMeter(x);
            bodyDef.Position.Y = this.PixelToMeter(y);

            var body = this.World.CreateBody(bodyDef);
            body.SetStatic();
            body.CreateFixture(fixDef);
            body.SetUserData(peg);
            return body;
        }
        public Body CreateCannonBall(int x, int y, float angle, float velocity, object cannonBall)
        {

            var vx = (float)(Math.Cos((angle) * Math.PI / 180) * velocity);
            var vy = (float)(Math.Sin((angle) * Math.PI / 180) * velocity);


            var offvx = (float)(Math.Cos((angle) * Math.PI / 180) * 9 * 16);
            var offvy = (float)(Math.Sin((angle) * Math.PI / 180) * 3 * 16);

            var fixDef = new CircleDef();

            fixDef.Density = 1;
            fixDef.Friction = 1;
            fixDef.Restitution = .6f;
            fixDef.Radius = 1.25f / 2;

            var bodyDef = new BodyDef();

            bodyDef.Position.X = this.PixelToMeter(x + offvx);
            bodyDef.Position.Y = this.PixelToMeter(y + offvy);

            var body = this.World.CreateBody(bodyDef);
            body.SetStatic();
            body.CreateFixture(fixDef);
            body.SetUserData(cannonBall);

            body.ApplyImpulse(new Vec2(vx, vy), body.GetWorldCenter());
            return body;
        }
         
        public float MeterPixelSize { get { return 16; } }

        public float MeterToPixel(float meter)
        {
            return meter * MeterPixelSize;
        }

        public float PixelToMeter(float pixel)
        {
            return pixel / MeterPixelSize;
        }

        public void RoundOver(RoundOverState post)
        {
        }

        public void Tick()
        {
            this.Collisions.Clear();

            this.World.Step(1 / 60, 10, 10);

            for (var i = 0; i < this.Collisions.Count; i++)
            {
                var collision = this.Collisions[i];
                collision.ObjA.Collide(collision.ObjB);
            }

        }
    }

    public class PegContactListener : ContactListener
    {
        /*
                    public void BeginContact(Contact contact)
                    {
                                                                  if (contact.GetFixtureA().GetBody().GetUserData()) {
                            if (contact.GetFixtureA().GetBody().GetUserData().collide) {
                                this.collisions.push({objA: contact.GetFixtureA().GetBody().GetUserData(), objB: contact.GetFixtureB().GetBody().GetUserData()});
                            }
                        }

                        if (contact.GetFixtureB().GetBody().GetUserData()) {
                            if (contact.GetFixtureB().GetBody().GetUserData().collide) {
                                this.collisions.push({objA: contact.GetFixtureB().GetBody().GetUserData(), objB: contact.GetFixtureA().GetBody().GetUserData()});
                            }
                        }
                    }
        */

        public void BeginContact(Contact contact)
        {
        }

        public void EndContact(Contact contact)
        {
        }

        public void PreSolve(Contact contact, Manifold oldManifold)
        {
        }

        public void PostSolve(Contact contact, ContactImpulse impulse)
        {
        }
    }

    public class CollisionObject
    {
        public CollisionObject(ICollider objA, ICollider objB)
        {
            ObjA = objA;
            ObjB = objB;
        }

        public ICollider ObjA { get; set; }
        public ICollider ObjB { get; set; }
    }

    public interface ICollider
    {
        void Collide(ICollider collider);
        void Trigger();
    }
}