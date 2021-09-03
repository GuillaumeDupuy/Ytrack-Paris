using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest04;
using System;
using System.Reflection;
using System.Collections.Generic;
using Utils;

namespace tests
{
    [TestClass]
    public class AccelerateAndBrakeTests
    {
        public static object instance;

        [TestMethod]
        public void CheckAccelerate()
        {
            Assert.IsTrue(TestUtils.HasMethod<Car>("Accelerate", new Type[] { typeof(int) }), "Method Accelerate not found");
        }
        [TestMethod]
        public void CheckBrake()
        {
            Assert.IsTrue(TestUtils.HasMethod<Car>("Brake", new Type[] { typeof(int) }), "Method Brake not found");
        }

        [TestMethod]
        public void Check150KMh()
        {
            try
            {
                ConstructorInfo ctor = typeof(Car).GetConstructor(new[] {
                    typeof(String), typeof(String), typeof(String), typeof(Int32)
            });
                instance = ctor.Invoke(new object[] { "Mégane", "Renault", "Yellow", 100 });
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the constructor with 4 parameters");
                throw;
            }

            TestUtils.CallMethod(instance, "Accelerate", new object[] { 50 });
            Assert.AreEqual(150, TestUtils.GetValueFromInstance(instance, "CurrentSpeed"), "Value is not equal to 150 Km/h !");
        }

        [TestMethod]
        public void Check180KMh()
        {
            TestUtils.CallMethod(instance, "Accelerate", new object[] { 50 });
            Assert.AreEqual(180, TestUtils.GetValueFromInstance(instance, "CurrentSpeed"), "Value is not equal to 180 Km/h or you are going too fast !");
        }

        [TestMethod]
        public void Check20KMh()
        {
            TestUtils.CallMethod(instance, "Brake", new object[] { 160 });
            Assert.AreEqual(20, TestUtils.GetValueFromInstance(instance, "CurrentSpeed"), "Value is not equal to 20 Km/h !");
        }

        [TestMethod]
        public void CheckNega()
        {
            TestUtils.CallMethod(instance, "Brake", new object[] { 40 });
            Assert.AreEqual(0, TestUtils.GetValueFromInstance(instance, "CurrentSpeed"), "Value is not equal to 0 Km/h or you are going backwards !");
        }
    }
}