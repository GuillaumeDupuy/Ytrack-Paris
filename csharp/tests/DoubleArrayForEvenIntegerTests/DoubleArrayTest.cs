using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;

namespace tests
{
    [TestClass]
    public class DoubleArrayForEvenIntegerTests
    {
        [TestMethod]
        public void DoubleArrayForEvenInteger_simpleArray_OK()
        {
            var inputTab = new int[] { 1, 32, 7, 33 };
            var resultTab = new int[] { 2, 32, 14, 66 };
            Assert.IsTrue(resultTab.SequenceEqual(DoubleArrayForEvenInteger_Exercice.DoubleArrayForEvenInteger(inputTab)), "La méthode doit retourner [2, 32, 14, 66] pour [1, 32, 7, 33] en entrée.");
        }
    }
}
