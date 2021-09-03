using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest03;
using System;
using System.Reflection;
using System.Collections.Generic;
using System.Runtime.Serialization;
using Utils;

namespace tests
{
    [TestClass]
    public class CreateCampusTests
    {
        [TestMethod]
        public void CheckInherance() {
            Assert.IsTrue(typeof(Campus).IsSubclassOf(typeof(PointOfInterest)), "Campus is not inheriting from PointOfInterest");
        }

        [TestMethod]
        public void CapacityExists() {
            Assert.IsTrue(TestUtils.HasProperty<Campus>("Capacity"), "Cannot find property Capacity in Campus");
            Assert.IsTrue(TestUtils.TypeOfProperty<Campus>("Capacity", typeof(int)), "Capacity must be an Integer");
        }

        [TestMethod]
        public void TestToString() {
            Campus instance = (Campus)FormatterServices.GetUninitializedObject(typeof(Campus));

            Type CampusType = typeof(Campus);
            try
            {
                CampusType.GetProperty("Name").SetValue(instance, "Bordeaux Ynov Campus");
                CampusType.GetProperty("Capacity").SetValue(instance, 1500);
            }
            catch (System.Exception)
            {
                Assert.Fail("Error trying to affect the values, check the properties name");
                throw;
            }
            Assert.AreEqual("Bordeaux Ynov Campus is a campus with a capacity of 1500 students", instance.ToString());
        }
    }
}