using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest04;
using System;
using System.Reflection;
using System.Collections.Generic;
using Utils;

namespace tests
{
    [TestClass]
    public class CreateCarTests
    {

        public static object instance;

        [TestMethod]
        public void CheckInherance()
        {
            Assert.IsTrue(typeof(Car).IsSubclassOf(typeof(Vehicule)), "Car is not inheriting from Vehicule");
        }

        [TestMethod]
        public void CheckConstructors()
        {
            List<List<Type>> Constructors = new List<List<Type>>();
            Constructors.Add(new List<Type>());
            List<Type> ctr2 = new List<Type>();
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(int));
            Constructors.Add(ctr2);


            Assert.AreEqual(TestUtils.ConvertToString(Constructors), TestUtils.ConvertToString(TestUtils.ConstructorsList<Car>()));
        }

        [TestMethod]
        public void CheckNoParamConstructor()
        {
            try
            {
                ConstructorInfo ctor = typeof(Car).GetConstructor(Type.EmptyTypes);
                instance = ctor.Invoke(new object[] { });
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the constructor with no parameter");
                throw;
            }

            Assert.AreEqual("Unknown", TestUtils.GetValueFromInstance(instance, "Model"), "Values are not affected correctly !");
            Assert.AreEqual("Unknown", TestUtils.GetValueFromInstance(instance, "Brand"), "Values are not affected correctly !");
            Assert.AreEqual("Unknown", TestUtils.GetValueFromInstance(instance, "Color"), "Values are not affected correctly !");
            Assert.AreEqual(0, TestUtils.GetValueFromInstance(instance, "CurrentSpeed"), "Values are not affected correctly !");
        }

        [TestMethod]
        public void Check4ParamsConstructor()
        {

            try
            {
                ConstructorInfo ctor = typeof(Car).GetConstructor(new[] {
                    typeof(String), typeof(String), typeof(String), typeof(Int32)
            });
                instance = ctor.Invoke(new object[] { "Mégane", "Renault", "Yellow", 50 });
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the constructor with 4 parameters");
                throw;
            }

            Assert.AreEqual("Mégane", TestUtils.GetValueFromInstance(instance, "Model"), "Values are not affected correctly !");
            Assert.AreEqual("Renault", TestUtils.GetValueFromInstance(instance, "Brand"), "Values are not affected correctly !");
            Assert.AreEqual("Yellow", TestUtils.GetValueFromInstance(instance, "Color"), "Values are not affected correctly !");
            Assert.AreEqual(50, TestUtils.GetValueFromInstance(instance, "CurrentSpeed"), "Values are not affected correctly !");
        }

        [TestMethod]

        public void CheckToString()
        {
            Assert.AreEqual("Yellow Renault Mégane", TestUtils.CallMethod(instance, "ToString"));
        }
    }
}