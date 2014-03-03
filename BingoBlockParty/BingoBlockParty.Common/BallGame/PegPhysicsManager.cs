using System.Collections.Generic;
using BingoBlockParty.Common.BallGame.Models;
using FarseerPhysics.Collision.Shapes;
using FarseerPhysics.Common;
using FarseerPhysics.Dynamics;
using FarseerPhysics.Factories;
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
            this.World = new World(new Vector2(0, 35));


            this.CreateRectangleWall(0, -this.GameBoard.GameModel.BoardHeight, 1, this.GameBoard.GameModel.BoardHeight * 2, null);
            this.CreateRectangleWall(this.GameBoard.GameModel.BoardWidth, -this.GameBoard.GameModel.BoardHeight, 1, this.GameBoard.GameModel.BoardHeight * 2, null);
            this.CreateRectangleWall(0, this.GameBoard.GameModel.BoardHeight, this.GameBoard.GameModel.BoardWidth, 1, null);


            this.Collisions = new List<CollisionObject>();


            this.World.ContactManager.BeginContact += (contact) =>
                                                      {
                                                          {
                                                              if (contact.FixtureA.UserData!=null)
                                                              {
                                                                  if (contact.FixtureA.UserData is ICollider)
                                                                  {
                                                                      this.Collisions.Add(new CollisionObject((ICollider)contact.FixtureA.UserData, (ICollider)contact.FixtureB.UserData));
                                                                  }
                                                              }

                                                              if (contact.FixtureB.UserData != null)
                                                              {
                                                                  if (contact.FixtureB.UserData is ICollider)
                                                                  {
                                                                      this.Collisions.Add(new CollisionObject((ICollider)contact.FixtureB.UserData, (ICollider)contact.FixtureA.UserData));
                                                                  }
                                                              }
                                                          }
                                                          return true;
                                                      }; 
        }


        public Body CreateRectangleWall(int x, int y, int width, int height, ICollider userData)
        {

            var body = BodyFactory.CreateBody(World);
            body.Position = new Vector2(PixelToMeter(x), PixelToMeter(y));
            PolygonShape shape = new PolygonShape(1);

            shape.Vertices = PolygonTools.CreateRectangle(PixelToMeter(width) / 2f, PixelToMeter(height) / 2f);
            var fixture = body.CreateFixture(shape, userData);
            return body;
            /*

                        var fixDef = new PolygonDef();
                        fixDef.Density = 1;
                        fixDef.Friction = 1;
                        fixDef.Restitution = .6f;

                        fixDef.SetAsBox(this.PixelToMeter(width) / 2, this.PixelToMeter(height) / 2);

                        var bodyDef = new BodyDef();
                        bodyDef.Position.X = this.PixelToMeter(x) + this.PixelToMeter(width) / 2;
                        bodyDef.Position.Y = this.PixelToMeter(y) + this.PixelToMeter(height) / 2;
                        var body = this.World.CreateBody(bodyDef);
                        var fixture = body.CreateFixture(fixDef);
            //            ((PolygonShape)fixture.Shape).SetAsBox(this.PixelToMeter(width) / 2, this.PixelToMeter(height) / 2);
                        body.SetStatic();
                        body.SetUserData(userData);
                        return body;
            */
        }

        public Body CreateRectangleSensor(int x, int y, int width, int height, ICollider userData)
        {
            var body = BodyFactory.CreateBody(World);
            body.IsSensor = true;
            body.Position = new Vector2(PixelToMeter(x), PixelToMeter(y));

            PolygonShape shape = new PolygonShape(1);
            shape.Vertices = PolygonTools.CreateRectangle(PixelToMeter(width) / 2f, PixelToMeter(height) / 2f);
            var fixture = body.CreateFixture(shape, userData);

            return body;

        }


        public Body CreateCircleWall(int x, int y, int rad, ICollider userData)
        {

            var body = BodyFactory.CreateBody(World);
            body.Position = new Vector2(PixelToMeter(x), PixelToMeter(y));

            CircleShape shape = new CircleShape(PixelToMeter(rad), 1);
            var fixture = body.CreateFixture(shape, userData);
            return body;

        }

        public void DestroyBody(Body body)
        {
            this.World.RemoveBody(body);
        }

        public Body CreatePeg(int x, int y, ICollider peg)
        {
            var body = BodyFactory.CreateBody(World);
            body.Position = new Vector2(PixelToMeter(x), PixelToMeter(y));

            CircleShape shape = new CircleShape(1f / 2f, 1);
            var fixture = body.CreateFixture(shape, peg);

            return body;
        }
        public Body CreateCannonBall(int x, int y, float angle, float velocity, ICollider cannonBall)
        {
            var vx = (float)(Math.Cos((angle) * Math.PI / 180) * velocity);
            var vy = (float)(Math.Sin((angle) * Math.PI / 180) * velocity);


            var offvx = (float)(Math.Cos((angle) * Math.PI / 180) * 9 * 16);
            var offvy = (float)(Math.Sin((angle) * Math.PI / 180) * 3 * 16);

            var body = BodyFactory.CreateBody(World);
            body.BodyType = BodyType.Dynamic;

            body.Position = new Vector2(PixelToMeter(x + offvx), PixelToMeter(y + offvy));

            CircleShape shape = new CircleShape(1.25f / 2f, 1);

            var fixture = body.CreateFixture(shape, cannonBall);
            fixture.Restitution = .6f;

            body.ApplyForce(new Vector2(vx, vy), body.WorldCenter);
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

            this.World.Step(1f / 60f);

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