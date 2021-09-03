using CSharpDiscovery.Quest02;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;

namespace tests
{
    [TestClass]
    public class SortTableTests
    {
        [TestMethod]
        public void SortTable_UnorderedTable_TableSorted()
        {
            var tab = new int[] { 1, 5, 2, 4, 3 };
            var sortedTab = new int[] { 1, 2, 3, 4, 5 };
            Assert.IsTrue(sortedTab.SequenceEqual(SortTable_Exercice.SortTable(tab)));
        }

        [TestMethod]
        public void SortTable_OrderedTable_TableSorted()
        {
            var sortedTab = new int[] { 1, 2, 3, 4, 6 };
            Assert.IsTrue(sortedTab.SequenceEqual(SortTable_Exercice.SortTable(sortedTab)));
        }
    }
}
