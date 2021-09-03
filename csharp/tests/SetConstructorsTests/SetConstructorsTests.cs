using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest03;
using System;
using System.Reflection;
using System.Collections.Generic;
using Utils;

namespace tests
{
    [TestClass]
    public class SetConstructorsTests
    {
        [TestMethod]
        public void CheckConstructors()
        {
            List<List<Type>> Constructors = new List<List<Type>>();
            Constructors.Add(new List<Type>());
            List<Type> ctr2 = new List<Type>();
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(double));
            ctr2.Add(typeof(double));
            Constructors.Add(ctr2);

            Assert.AreEqual(TestUtils.ConvertToString(Constructors), TestUtils.ConvertToString(TestUtils.ConstructorsList<PointOfInterest>()), "The constructors are incorrect");           
        }

        [TestMethod]
        public void CheckNoParamConstructor()
        {
            object instance;
            try
            {
                Type type = typeof(PointOfInterest);
                ConstructorInfo ctor = type.GetConstructor(Type.EmptyTypes);
                instance = ctor.Invoke(new object[] { });
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the constructor with no parameter");
                throw;
            }

            Assert.AreEqual("Bordeaux Ynov Campus", TestUtils.GetValueFromInstance(instance, "Name"), "Values are not affected correctly !");
            Assert.AreEqual(44.854186, TestUtils.GetValueFromInstance(instance, "Latitude"), "Values are not affected correctly !");
            Assert.AreEqual(-0.5663056, TestUtils.GetValueFromInstance(instance, "Longitude"), "Values are not affected correctly !");
        }

        [TestMethod]
        public void Check3ParamsConstructor()
        {
            object instance;
            try
            {
                Type type = typeof(PointOfInterest);
                ConstructorInfo ctor = type.GetConstructor(new[] {
                    typeof(String), typeof(Double), typeof(Double)
                });
                instance = ctor.Invoke(new object[] { "Bordeaux Ynov Campus", 44.854186, -0.5663056 });
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the constructor with 3 parameters");
                throw;
            }

            Assert.AreEqual("Bordeaux Ynov Campus", TestUtils.GetValueFromInstance(instance, "Name"), "Values are not affected correctly !");
            Assert.AreEqual(44.854186, TestUtils.GetValueFromInstance(instance, "Latitude"), "Values are not affected correctly !");
            Assert.AreEqual(-0.5663056, TestUtils.GetValueFromInstance(instance, "Longitude"), "Values are not affected correctly !");
        }
    }
}
