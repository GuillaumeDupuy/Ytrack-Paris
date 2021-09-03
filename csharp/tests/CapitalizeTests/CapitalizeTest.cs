using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class CapitalizeTests
    {
        [TestMethod]
        public void Capitalize_Ynov_YNOV()
        {
            Assert.AreEqual("YNOV", Capitalize_Exercice.Capitalize("Ynov"));
        }
    }
}
