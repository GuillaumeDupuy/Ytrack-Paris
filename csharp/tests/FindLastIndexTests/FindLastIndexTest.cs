using CSharpDiscovery.Quest02;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class FindLastIndexTests
    {
        [TestMethod]
        public void FindLastIndex_OnlyOneOccurence_1()
        {
            var tab = new int[] { 1, 2, 3, 4, 5 };
            Assert.AreEqual(1, FindLastIndex_Exercice.FindLastIndex(tab, 2));
        }

        [TestMethod]
        public void FindLastIndex_TwoOccurences_4()
        {
            var tab = new int[] { 1, 2, 3, 4, 2 };
            Assert.AreEqual(4, FindLastIndex_Exercice.FindLastIndex(tab, 2));
        }

        [TestMethod]
        public void FindLastIndex_NoOccurence_Null()
        {
            var tab = new int[] { 1, 2, 3, 4, 5 };
            Assert.AreEqual(null, FindLastIndex_Exercice.FindLastIndex(tab, 17));
        }

        [TestMethod]
        public void FindLastIndex_NoTable_Null()
        {
            Assert.AreEqual(null, FindLastIndex_Exercice.FindLastIndex(null, 17));
        }
    }
}
