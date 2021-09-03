using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest04;
using System;
using System.Reflection;
using System.Collections.Generic;
using Utils;

namespace tests
{
    [TestClass]
    public class CarInterfacesTests
    {
        [TestMethod]
        public void CheckIThermalCar() {
            var FuelProperty = typeof(IThermalCar).GetProperty("FuelLevel");
            if (FuelProperty != null) {
                Assert.AreEqual(typeof(Int32), FuelProperty.PropertyType, "FuelLevel property must be an integer");
            } else {
                Assert.Fail("Cannot find property FuelLevel in IThermalCar");
            }

            var GetFuelMethod = typeof(IThermalCar).GetMethod("GetFuelLevel");
            if (GetFuelMethod != null) {
                Assert.AreEqual(typeof(Int32), GetFuelMethod.ReturnType, "GetFuelLevel() must return an integer");
            } else {
                Assert.Fail("Cannot find method GetFuelLevel() in IThermalCar");
            }

            var FillUp = typeof(IThermalCar).GetMethod("FillUp");
            if (FillUp != null) {
                Assert.AreEqual(typeof(void), FillUp.ReturnType, "FillUp() must have no return value");
            } else {
                Assert.Fail("Cannot find method FillUp() of IThermalCar");
            }
        }

        [TestMethod]
        public void CheckIElectricCar() {
            var BatteryProperty = typeof(IElectricCar).GetProperty("BatteryLevel");
            if (BatteryProperty != null) {
                Assert.AreEqual(typeof(Int32), BatteryProperty.PropertyType, "BatteryLevel property must be an integer");
            } else {
                Assert.Fail("Cannot find property BatteryLevel in IElectricCar");
            }

            var GetBatteryMethod = typeof(IElectricCar).GetMethod("GetBatteryLevel");
            if (GetBatteryMethod != null) {
                Assert.AreEqual(typeof(Int32), GetBatteryMethod.ReturnType, "GetBatteryLevel() must return an integer");
            } else {
                Assert.Fail("Cannot find method GetBatteryLevel() in IElectricCar");
            }

            var Recharge = typeof(IElectricCar).GetMethod("Recharge");
            if (Recharge != null) {
                Assert.AreEqual(typeof(void), Recharge.ReturnType, "Recharge() must have no return value");
            } else {
                Assert.Fail("Cannot find method Recharge() of IElectricCar");
            }
        }
    }
}