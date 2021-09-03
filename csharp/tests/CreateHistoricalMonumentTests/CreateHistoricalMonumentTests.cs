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
    public class CreateHistoricalMonumentTests
    {

        public static object instance;
        [TestMethod]
        public void CheckInherance()
        {
            Assert.IsTrue(typeof(HistoricalMonument).IsSubclassOf(typeof(PointOfInterest)), "Campus is not inheriting from PointOfInterest");
        }

        [TestMethod]
        public void CheckConstructor() {
            List<List<Type>> Constructors = new List<List<Type>>();
            Constructors.Add(new List<Type>());
            List<Type> ctr2 = new List<Type>();
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(double));
            ctr2.Add(typeof(double));
            ctr2.Add(typeof(int));
            Constructors.Add(ctr2);

            Assert.AreEqual(TestUtils.ConvertToString(Constructors), TestUtils.ConvertToString(TestUtils.ConstructorsList<HistoricalMonument>()), "The constructors are invalid");
        }

        [TestMethod]
        public void CheckBuildYearProperty() {
            Assert.IsTrue(TestUtils.HasProperty<HistoricalMonument>("BuildYear"));
            Assert.IsTrue(TestUtils.TypeOfProperty<HistoricalMonument>("BuildYear", typeof(int)));
        }

        [TestMethod]
        public void CheckAffectValues() {
            
            try
            {
                ConstructorInfo ctor = typeof(HistoricalMonument).GetConstructor(new[] {
                    typeof(String), typeof(Double), typeof(Double), typeof(int)
                });
                instance = ctor.Invoke(new object[] {"Porte Cailhau", 44.838336, -0.569446, 1493});
            }
            catch (System.Exception)
            {
                Assert.Fail("Failed to call the constructor");
                throw;
            }

            Assert.AreEqual("Porte Cailhau", TestUtils.GetValueFromInstance(instance, "Name"), "The Name property is not affected correctly !");
            Assert.AreEqual(44.838336, TestUtils.GetValueFromInstance(instance, "Latitude"), "The Latitude property is not affected correctly !");
            Assert.AreEqual(-0.569446, TestUtils.GetValueFromInstance(instance, "Longitude"), "The Longitude property is not affected correctly !");
            Assert.AreEqual(1493, TestUtils.GetValueFromInstance(instance, "BuildYear"), "The BuildYear property is not affected correctly !");
        }

        [TestMethod]

        public void CheckToString() {
            Assert.AreEqual("Porte Cailhau is a historical monument built in 1493", instance.ToString());
        }
    }
}