using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest01;

namespace tests
{
    [TestClass]
    public class IsOddTests
    {
        [TestMethod]
        public void IsOdd_OddInteger_True()
        {
            Assert.IsTrue(IsOdd_Exercice.IsOdd(34));
        }

        [TestMethod]
        public void IsOdd_EvenInteger_False()
        {
            Assert.IsFalse(IsOdd_Exercice.IsOdd(33));
        }
        [TestMethod]
        public void IsOdd_EvenInteger_Zero()
        {
            Assert.IsTrue(IsOdd_Exercice.IsOdd(0));
        }
        [TestMethod]
        public void IsOdd_EvenInteger_One()
        {
            Assert.IsFalse(IsOdd_Exercice.IsOdd(1));
        }
    }
}
