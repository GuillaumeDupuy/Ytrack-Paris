using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest03;
using System;
using System.Reflection;
using System.Collections.Generic;
using Utils;

namespace tests
{
    [TestClass]
    public class EditToStringTEsts
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
                Instances.Add(ctor.Invoke(new object[] {"Paris Ynov Campus", 48.9016552, 2.2079985}));
                Instances.Add(ctor.Invoke(new object[] { "Random Point", 3, 2 }));
            }
            catch (System.Exception)
            {
                Assert.Fail("Error creating the instances, check your constructors");
                throw;
            }
        }
        [TestMethod]
        public void CallMethod() {
            Assert.AreEqual("Bordeaux Ynov Campus (Lat=44.854186, Long=-0.5663056)", TestUtils.CallMethod(Instances[0], "ToString"));
            Assert.AreEqual("Paris Ynov Campus (Lat=48.9016552, Long=2.2079985)", TestUtils.CallMethod(Instances[1], "ToString"));
            Assert.AreEqual("Random Point (Lat=3, Long=2)", TestUtils.CallMethod(Instances[2], "ToString"));
        }
    }
}