using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest03;
using System;
using System.Reflection;
using Utils;

namespace tests
{
    [TestClass]
    public class SetPropertyTests
    {
        [TestMethod]
        public void CheckProperties()
        {
            Assert.IsTrue(TestUtils.HasProperty<PointOfInterest>("Latitude"), "The latitude property does not exist or may not have a getter");
            Assert.IsTrue(TestUtils.HasProperty<PointOfInterest>("Longitude"), "The longitude property does not exist or may not have a getter");
            Assert.IsTrue(TestUtils.HasProperty<PointOfInterest>("Name"), "The name property does not exist or may not have a getter");

            Assert.IsTrue(TestUtils.TypeOfProperty<PointOfInterest>("Latitude", typeof(Double)),$"Latitude must be a Double, not a {typeof(PointOfInterest).GetProperty("Latitude").PropertyType.Name}");
            Assert.IsTrue(TestUtils.TypeOfProperty<PointOfInterest>("Longitude", typeof(Double)),$"Longitude must be a Double, not a {typeof(PointOfInterest).GetProperty("Latitude").PropertyType.Name}");
            Assert.IsTrue(TestUtils.TypeOfProperty<PointOfInterest>("Name", typeof(String)),$"Name must be a String, not a {typeof(PointOfInterest).GetProperty("Latitude").PropertyType.Name}");
        
            Assert.IsTrue(TestUtils.HasStaticProperty<PointOfInterest>("GoogleMapsUrlTemplate"), "The static property GoogleMapsUrlTemplate does not exist or may not have a getter");
        }
        [TestMethod]
        public void CheckGoogleMapUrl() {
            Assert.AreEqual("https://www.google.com/maps/place/{0}/@{1},{2},15z/", TestUtils.GetStaticValue<PointOfInterest>("GoogleMapsUrlTemplate"));
        }
    }
}