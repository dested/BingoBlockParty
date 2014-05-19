using System.Collections.Generic;
using System.Diagnostics;
using BingoBlockParty.Common.BallGame.Models;
using Engine;
using org.jbox2d.callbacks;
using org.jbox2d.collision.shapes;
using org.jbox2d.common;
using org.jbox2d.dynamics;
using Math = System.Math;

namespace BingoBlockParty.Common.BallGame
{

    public interface IPhysicsBody
    {
        Body Body { get; set; }

        bool Awake { get; }
        PointF Position { get; }
        double Rotation { get;  }
    }
    public class PhysicsBody : IPhysicsBody
    {
        public PhysicsBody(Body body)
        {
            Body = body;
        }

        public bool Awake
        {
            get { return Body.isAwake(); }
        }

        public PointF Position
        {
            get
            {
                var position = Body.getPosition();
                return new PointF(position.x, position.y);
            }
        }

        public double Rotation
        {
            get { return Body.getAngle(); }
        }
        public Body Body { get; set; }
    }



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
            this.World = new World(new Vec2(0, 35));


            this.CreateRectangleWall(0, -this.GameBoard.GameModel.BoardHeight, 1, this.GameBoard.GameModel.BoardHeight * 2, null);
            this.CreateRectangleWall(this.GameBoard.GameModel.BoardWidth, -this.GameBoard.GameModel.BoardHeight, 1, this.GameBoard.GameModel.BoardHeight * 2, null);
            this.CreateRectangleWall(0, this.GameBoard.GameModel.BoardHeight, this.GameBoard.GameModel.BoardWidth, 1, null);


            this.Collisions = new List<CollisionObject>();

            var myListener = new ContactListener();

            myListener.beginContact = (fixture) =>
            {
                if (fixture.getFixtureA().getBody().getUserData() != null)
                {
                    if (fixture.getFixtureA().getBody().getUserData() is ICollider)
                    {
                        this.Collisions.Add(new CollisionObject((ICollider)fixture.getFixtureA().getBody().getUserData(), (ICollider)fixture.getFixtureB().getBody().getUserData()));
                    }
                }

                if (fixture.getFixtureB().getBody().getUserData() != null)
                {
                    if (fixture.getFixtureB().getBody().getUserData() is ICollider)
                    {
                        this.Collisions.Add(new CollisionObject((ICollider)fixture.getFixtureB().getBody().getUserData(), (ICollider)fixture.getFixtureA().getBody().getUserData()));
                    }
                }
            };


            this.World.setContactListener(myListener);         }


        public IPhysicsBody CreateRectangleWall(int x, int y, int width, int height, ICollider userData)
        {

            var fixDef = new FixtureDef();
            fixDef.density = 1;
            fixDef.friction = 1;
            fixDef.restitution = .6;
            var bodyDef = new BodyDef();

            bodyDef.type = BodyType.STATIC;
            bodyDef.position.x = this.PixelToMeter(x) + this.PixelToMeter(width) / 2;
            bodyDef.position.y = this.PixelToMeter(y) + this.PixelToMeter(height) / 2;

            PolygonShape polyShape;
            fixDef.shape = polyShape = new PolygonShape();
            polyShape.setAsBox(this.PixelToMeter(width) / 2d, this.PixelToMeter(height) / 2d);
            var body = this.World.createBody(bodyDef);
            body.createFixture(fixDef);
            body.setUserData(userData); return new PhysicsBody(body);

        }

        public IPhysicsBody CreateRectangleSensor(int x, int y, int width, int height, ICollider userData)
        {
            var fixDef = new FixtureDef();
            fixDef.density = 1;
            fixDef.friction = 1;
            fixDef.restitution =  .6;
            var bodyDef = new BodyDef();

            bodyDef.type = BodyType.STATIC;
            bodyDef.position.x = this.PixelToMeter(x) + this.PixelToMeter(width) / 2;
            bodyDef.position.y = this.PixelToMeter(y) + this.PixelToMeter(height) / 2;

            PolygonShape polyShape;
            fixDef.shape = polyShape = new PolygonShape();
            polyShape.setAsBox(this.PixelToMeter(width) / 2d, this.PixelToMeter(height) / 2d);
            var body = this.World.createBody(bodyDef);
            var fixture = body.createFixture(fixDef);
            fixture.setSensor(true);
            body.setUserData(userData); return new PhysicsBody(body);


        }


        public IPhysicsBody CreateCircleWall(int x, int y, int rad, ICollider userData)
        {

            var fixDef = new FixtureDef();
            fixDef.density = 1;
            fixDef.friction = 1;
            fixDef.restitution =  .6;
            var bodyDef = new BodyDef();

            bodyDef.type = BodyType.STATIC;
            bodyDef.position.x = this.PixelToMeter(x);
            bodyDef.position.y = this.PixelToMeter(y);

            var circleShape = new CircleShape();
            circleShape.m_radius = this.PixelToMeter(rad);

            fixDef.shape = circleShape;
            var body = this.World.createBody(bodyDef);
            var fixture = body.createFixture(fixDef);
            body.setUserData(userData); return new PhysicsBody(body);

        }

        public void DestroyBody(IPhysicsBody body)
        {
            this.World.destroyBody(body.Body);
        }

        public IPhysicsBody CreatePeg(int x, int y, ICollider peg)
        {
            var fixDef = new FixtureDef();
            fixDef.density = 1;
            fixDef.friction = 1;
            fixDef.restitution =  .6;
            var bodyDef = new BodyDef();

            bodyDef.type = BodyType.STATIC;
            bodyDef.position.x = this.PixelToMeter(x);
            bodyDef.position.y = this.PixelToMeter(y);

            var circleShape = new CircleShape();
            circleShape.m_radius = 1d  / 2d;
            fixDef.shape = circleShape;
            var body = this.World.createBody(bodyDef);
            var fixture = body.createFixture(fixDef);
            body.setUserData(peg);
            return new PhysicsBody(body);


        }
        public IPhysicsBody CreateCannonBall(int x, int y, double angle, double velocity, ICollider cannonBall)
        {
            var vx =  Math.Cos((angle) * Math.PI / 180) * velocity;
            var vy =  Math.Sin((angle) * Math.PI / 180) * velocity;

            var offvx =  Math.Cos((angle) * Math.PI / 180) * 4d * 16d;
            var offvy =  Math.Sin((angle) * Math.PI / 180) * 3d * 16d;



            var fixDef = new FixtureDef();
            fixDef.density = 1;
            fixDef.friction = 1;
            fixDef.restitution = .6;
            var bodyDef = new BodyDef();

            bodyDef.type = BodyType.DYNAMIC;
            bodyDef.position.x = this.PixelToMeter(x + offvx);
            bodyDef.position.y = this.PixelToMeter(y + offvy);

            var circleShape = new CircleShape();
            circleShape.m_radius = 1.25d / 2d;

            fixDef.shape = circleShape;

            var body = this.World.createBody(bodyDef);
            var fixture = body.createFixture(fixDef);
            body.setUserData(cannonBall);
            body.applyLinearImpulse(new Vec2(vx, vy), body.getWorldCenter());

            return new PhysicsBody(body);

        }

        public double MeterPixelSize { get { return 16; } }

        public double MeterToPixel(double meter)
        {
            return meter * MeterPixelSize;
        }

        public double PixelToMeter(double pixel)
        {
            return pixel / MeterPixelSize;
        }

        public void RoundOver(RoundOverState post)
        {
        }

        public void Tick()
        {
            this.Collisions.Clear();

            this.World.step(0.0166, 2, 2);
            this.World.clearForces();

            for (var i = 0; i < this.Collisions.Count; i++)
            {
                var collision = this.Collisions[i];
                collision.ObjA.Collide(collision.ObjB);
            }

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