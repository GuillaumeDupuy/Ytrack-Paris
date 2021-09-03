using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest04;
using System;
using System.Reflection;
using System.Collections.Generic;
using Utils;

namespace tests
{
    [TestClass]
    public class CreateHybridCarTests
    {
        public static object instance;
        [TestMethod]
        public void CheckInherance() {
            Assert.IsTrue(typeof(HybridCar).IsSubclassOf(typeof(Car)), "HybridCar is not inheriting from Car");
        }

        [TestMethod]
        public void CheckInterfacesImplementations() {


            Assert.AreEqual(typeof(HybridCar).GetInterface("IElectricCar"), typeof(IElectricCar));
            Assert.AreEqual(typeof(HybridCar).GetInterface("IThermalCar"), typeof(IThermalCar));
        }

        [TestMethod]
        public void CheckConstructors() {
            List<List<Type>> Constructors = new List<List<Type>>();
            Constructors.Add(new List<Type>());
            List<Type> ctr2 = new List<Type>();
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(string));
            ctr2.Add(typeof(int));
            Constructors.Add(ctr2);


            Assert.AreEqual(TestUtils.ConvertToString(Constructors), TestUtils.ConvertToString(TestUtils.ConstructorsList<HybridCar>()));
        }

        [TestMethod]
        public void CheckNoParamConstructor() {
            try
            {
                ConstructorInfo ctor = typeof(HybridCar).GetConstructor(Type.EmptyTypes);
                instance = ctor.Invoke(new object[] {});
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
        public void Check4ParamsConstructor() {
            
            try
            {
                ConstructorInfo ctor = typeof(HybridCar).GetConstructor(new[] {
                    typeof(String), typeof(String), typeof(String), typeof(Int32)
            });
                instance = ctor.Invoke(new object[] {"i8", "BMW", "White", 0});
            }
            catch (System.Exception)
            {
                Assert.Fail("Cannot call the constructor with 4 parameters");
                throw;
            }

            Assert.AreEqual("i8", TestUtils.GetValueFromInstance(instance, "Model"), "Values are not affected correctly !");
            Assert.AreEqual("BMW", TestUtils.GetValueFromInstance(instance, "Brand"), "Values are not affected correctly !");
            Assert.AreEqual("White", TestUtils.GetValueFromInstance(instance, "Color"), "Values are not affected correctly !");
            Assert.AreEqual(0, TestUtils.GetValueFromInstance(instance, "CurrentSpeed"), "Values are not affected correctly !");
        }

        [TestMethod]

        public void CheckBatteryAndFuelLevel() {
            Assert.AreEqual(100, TestUtils.GetValueFromInstance(instance, "BatteryLevel"), "The Battery must be 100% by default");
            Assert.AreEqual(100, TestUtils.GetValueFromInstance(instance, "FuelLevel"), "The Fuel must be 100% by default");
        }

        [TestMethod]
        public void CheckInterfacesMethods() {
            var Battery = typeof(HybridCar).GetProperty("BatteryLevel");
            Battery.SetValue(instance, 50);

            var Fuel = typeof(HybridCar).GetProperty("FuelLevel");
            Fuel.SetValue(instance, 50);


            Assert.AreEqual(50, TestUtils.CallMethod(instance, "GetBatteryLevel"), "The GetBatteryLevel must return the level of the battery");
            Assert.AreEqual(50, TestUtils.CallMethod(instance, "GetFuelLevel"), "The GetFuelLevel must return the level of the fuel");

            TestUtils.CallMethod(instance, "Recharge");
            TestUtils.CallMethod(instance, "FillUp");

            Assert.AreEqual(100, TestUtils.GetValueFromInstance(instance, "BatteryLevel"), "The Recharge method must set the Battery to 100%");
            Assert.AreEqual(100, TestUtils.GetValueFromInstance(instance, "BatteryLevel"), "The FillUp method must set the Fuel to 100%");
        }

        [TestMethod]

        public void CheckToString() {
            Assert.AreEqual("White BMW i8, Battery: 100%, Fuel: 100%", TestUtils.CallMethod(instance, "ToString"));
        }
    }
}