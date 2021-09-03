using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest01;

namespace tests
{
    [TestClass]
    public class SetPiValueTests
    {
        [TestMethod]
        public void setPiValue_RandomFloat_OK()
        {
            Assert.AreEqual(3.14159f, SetPiValue_Exercice.SetPiValue(0));
        }
    }
}
