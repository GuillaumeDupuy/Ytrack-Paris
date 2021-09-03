using CSharpDiscovery.Quest02;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class ContainsThisValueTests
    {
        [TestMethod]
        public void ContainsThisValue_ValueHere_True()
        {
            Assert.IsTrue(ContainsThisValue_Exercice.ContainsThisValue(new int[] { 1, 2, 3, 4, 5 }, 5));
        }

        [TestMethod]
        public void ContainsThisValue_ValueNotHere_False()
        {
            Assert.IsFalse(ContainsThisValue_Exercice.ContainsThisValue(new int[] { 1, 2, 3, 4, 5 }, 15));
        }

        [TestMethod]
        public void ContainsThisValue_tabEmpty_False()
        {
            Assert.IsFalse(ContainsThisValue_Exercice.ContainsThisValue(new int[0], 15));
        }

        [TestMethod]
        public void ContainsThisValue_tabNull_False()
        {
            Assert.IsFalse(ContainsThisValue_Exercice.ContainsThisValue(null, 15));
        }
    }
}
