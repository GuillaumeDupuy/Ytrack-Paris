using CSharpDiscovery.Quest02;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;

namespace tests
{
    [TestClass]
    public class AreEqualsTests
    {
        [TestMethod]
        public void AreEquals_SameTable_True()
        {
            var tab = new int[] { 1, 2, 3, 4, 5 };

            Assert.IsTrue(AreEquals_Exercice.AreEquals(tab, tab));
        }

        [TestMethod]
        public void AreEquals_DifferentTable_False()
        {
            var tab1 = new int[] { 1, 2, 3, 4, 5 };
            var tab2 = new int[] { 1, 2, 3, 4, 6 };

            Assert.IsFalse(AreEquals_Exercice.AreEquals(tab1, tab2));
        }

        [TestMethod]
        public void AreEquals_DifferentSize_False()
        {
            var tab1 = new int[] { 1, 2, 3, 4, 5 };
            var tab2 = new int[] { 1, 2, 3, 4 };

            Assert.IsFalse(AreEquals_Exercice.AreEquals(tab1, tab2));
        }
    }
}
