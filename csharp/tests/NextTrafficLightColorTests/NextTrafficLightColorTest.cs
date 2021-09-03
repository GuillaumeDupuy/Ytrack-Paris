using CSharpDiscovery.Models;
using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class NextTrafficLightColorTests
    {
        [TestMethod]
        public void GetNextTrafficLightColor_Red_Green()
        {
            Assert.AreEqual(TrafficLightColor.Green, NextTrafficLightColor_Exercice.GetNextTrafficLightColor(TrafficLightColor.Red), "La couleur qui suit le rouge doit être le vert");
        }

        [TestMethod]
        public void GetNextTrafficLightColor_Green_Orange()
        {
            Assert.AreEqual(TrafficLightColor.Orange, NextTrafficLightColor_Exercice.GetNextTrafficLightColor(TrafficLightColor.Green), "La couleur qui suit le vert doit être le orange");
        }

        [TestMethod]
        public void GetNextTrafficLightColor_Orange_Red()
        {
            Assert.AreEqual(TrafficLightColor.Red, NextTrafficLightColor_Exercice.GetNextTrafficLightColor(TrafficLightColor.Orange), "La couleur qui suit le orange doit être le rouge");
        }
    }
}
