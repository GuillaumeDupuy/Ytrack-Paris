using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest04;
using System;
using System.Reflection;
using System.Collections.Generic;
using Utils;

namespace tests
{
    [TestClass]
    public class CreateTruckTests
    {

        public static List<object> Instances = new List<object>();

        [TestMethod]
        public void CheckInherance()
        {
            Assert.IsTrue(typeof(Truck).IsSubclassOf(typeof(Vehicule)), "Truck is not inheriting from Vehicule");
        }

        [TestMethod]
        public void CheckConstructors()
        {
            List<List<Type>> Constructors = new List<List<Type>>();
            Constructors.Add(new List<Type>());
            List<Type> ctr2 = new List<Type>();
            ctr2.Add(typeof(int));
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(int));
            Constructors.Add(ctr2);


            Assert.AreEqual(TestUtils.ConvertToString(Constructors), TestUtils.ConvertToString(TestUtils.ConstructorsList<Truck>()));
        }

        [TestMethod]
        public void CheckNoParamConstructor()
        {
            try
            {
                ConstructorInfo ctor = typeof(Truck).GetConstructor(Type.EmptyTypes);
                Instances.Add(ctor.Invoke(new object[] { }));
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the constructor with no parameter");
                throw;
            }

            Assert.AreEqual(0, TestUtils.GetValueFromInstance(Instances[0], "Tonnage"), "Values are not affected correctly !");
            Assert.AreEqual("Unknown", TestUtils.GetValueFromInstance(Instances[0], "Brand"), "Values are not affected correctly !");
            Assert.AreEqual("Unknown", TestUtils.GetValueFromInstance(Instances[0], "Color"), "Values are not affected correctly !");
            Assert.AreEqual(0, TestUtils.GetValueFromInstance(Instances[0], "CurrentSpeed"), "Values are not affected correctly !");
        }

        [TestMethod]
        public void CheckToString1()
        {
            Assert.AreEqual("Unknown Unknown 0T Truck", TestUtils.CallMethod(Instances[0], "ToString"));
        }

        [TestMethod]
        public void Check4ParamsConstructor()
        {

            try
            {
                ConstructorInfo ctor = typeof(Truck).GetConstructor(new[] {
                    typeof(Int32), typeof(String), typeof(String), typeof(Int32)
            });
                Instances.Add(ctor.Invoke(new object[] { 2, "MAC", "White", 80 }));
                Instances.Add(ctor.Invoke(new object[] { 3, "Renault", "Black", 20 }));
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the constructor with 4 parameters");
                throw;
            }

            // MAC White 80
            Assert.AreEqual(2, TestUtils.GetValueFromInstance(Instances[1], "Tonnage"), "Values are not affected correctly !");
            Assert.AreEqual("MAC", TestUtils.GetValueFromInstance(Instances[1], "Brand"), "Values are not affected correctly !");
            Assert.AreEqual("White", TestUtils.GetValueFromInstance(Instances[1], "Color"), "Values are not affected correctly !");
            Assert.AreEqual(80, TestUtils.GetValueFromInstance(Instances[1], "CurrentSpeed"), "Values are not affected correctly !");

            // Renault Black 20
            Assert.AreEqual(3, TestUtils.GetValueFromInstance(Instances[2], "Tonnage"), "Values are not affected correctly !");
            Assert.AreEqual("Renault", TestUtils.GetValueFromInstance(Instances[2], "Brand"), "Values are not affected correctly !");
            Assert.AreEqual("Black", TestUtils.GetValueFromInstance(Instances[2], "Color"), "Values are not affected correctly !");
            Assert.AreEqual(20, TestUtils.GetValueFromInstance(Instances[2], "CurrentSpeed"), "Values are not affected correctly !");
        }

        [TestMethod]
        public void CheckToString2()
        {
            Assert.AreEqual("White MAC 2T Truck", TestUtils.CallMethod(Instances[1], "ToString"));
            Assert.AreEqual("Black Renault 3T Truck", TestUtils.CallMethod(Instances[2], "ToString"));
        }

        [TestMethod]
        public void CheckAccelerate()
        {
            Assert.IsTrue(TestUtils.HasMethod<Truck>("Accelerate", new Type[] { typeof(int) }), "Method Accelerate not found");
        }
        [TestMethod]
        public void CheckBrake()
        {
            Assert.IsTrue(TestUtils.HasMethod<Truck>("Brake", new Type[] { typeof(int) }), "Method Brake not found");
        }

        [TestMethod]
        public void Chech30KMh()
        {

            TestUtils.CallMethod(Instances[0], "Accelerate", new object[] { 30 });
            Assert.AreEqual(30, TestUtils.GetValueFromInstance(Instances[0], "CurrentSpeed"), "Value is not equal to 30 Km/h !");
        }

        [TestMethod]
        public void Check100KMh()
        {
            TestUtils.CallMethod(Instances[1], "Accelerate", new object[] { 40 });
            Assert.AreEqual(100, TestUtils.GetValueFromInstance(Instances[1], "CurrentSpeed"), "Value is not equal to 100 Km/h or you are going too fast !");
        }

        [TestMethod]
        public void CheckNega()
        {
            TestUtils.CallMethod(Instances[2], "Brake", new object[] { 30 });
            Assert.AreEqual(0, TestUtils.GetValueFromInstance(Instances[2], "CurrentSpeed"), "Value is not equal to 0 Km/h or you are going backwards !");
        }
    }
}