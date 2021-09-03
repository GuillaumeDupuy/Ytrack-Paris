using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest03;
using System;
using System.Reflection;
using System.Collections.Generic;
using Utils;

namespace tests
{
    [TestClass]
    public class GetDistanceTests
    {
        public static List<object> Instances = new List<object>();


        [TestMethod]
        public void GenerateInstances()
        {
            try
            {
                ConstructorInfo ctor = typeof(PointOfInterest).GetConstructor(new[] {
                    typeof(String), typeof(Double), typeof(Double)
                });
                Instances.Add(ctor.Invoke(new object[] { "Bordeaux Ynov Campus", 44.854186, -0.5663056 }));
                Instances.Add(ctor.Invoke(new object[] { "Paris Ynov Campus", 48.9016552, 2.2079985}));
                Instances.Add(ctor.Invoke(new object[] { "Toulouse Ynov Campus", 43.6250066, 1.4320661 }));
            }
            catch (System.Exception)
            {
                Assert.Fail("Error creating the instances, check your constructors");
                throw;
            }
        }

        [TestMethod]
        public void MethodExists() {
            Assert.IsTrue(TestUtils.HasMethod<PointOfInterest>("GetDistance", typeof(int), new Type[] { typeof(PointOfInterest)}, false), "Error finding the method GetDistance with the parameters and the return value it requires");
            Assert.IsTrue(TestUtils.HasMethod<PointOfInterest>("GetDistance", typeof(int), new Type[] { typeof(PointOfInterest), typeof(PointOfInterest)}, true), "Error finding the static method GetDistance with the parameters and the return value it requires");
        }

        [TestMethod]
        public void CallMethod() {
            try
            {
                TestUtils.CallMethod(Instances[0], "GetDistance", new object[] { Instances[1] });
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the GetDistance method");
                throw;
            }

            try
            {
                TestUtils.CallStaticMethod<PointOfInterest>("GetDistance", new object[] { Instances[0], Instances[1] });
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the static GetDistance method");
                throw;
            }
            
        }

        [TestMethod]
        public void CheckBordeauxParis() {
            Assert.AreEqual(497, TestUtils.CallMethod(Instances[0], "GetDistance", new object[] { Instances[1] }));
            Assert.AreEqual(497, TestUtils.CallStaticMethod<PointOfInterest>("GetDistance", new object[] { Instances[0], Instances[1] }));
        }

        [TestMethod]
        public void CheckBordeauxToulouse() {
            Assert.AreEqual(210, TestUtils.CallMethod(Instances[0], "GetDistance", new object[] { Instances[2] }));
            Assert.AreEqual(210, TestUtils.CallStaticMethod<PointOfInterest>("GetDistance", new object[] { Instances[0], Instances[2] }));
        }
        [TestMethod]
        public void CheckParisToulouse() {
            Assert.AreEqual(590, TestUtils.CallMethod(Instances[1], "GetDistance", new object[] { Instances[2] }));
            Assert.AreEqual(590, TestUtils.CallStaticMethod<PointOfInterest>("GetDistance", new object[] { Instances[1], Instances[2] }));
        }
    }
}