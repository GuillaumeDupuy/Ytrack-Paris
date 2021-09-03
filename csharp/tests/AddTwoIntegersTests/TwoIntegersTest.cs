using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest01;
using System;

namespace tests
{
    [TestClass]
    public class AddTwoIntegersTests
    {
        [TestMethod]
        public void AddTwoIntegers_2RandomInts_CorrectSumReceived()
        {
            Random rnd = new Random();
            var a = rnd.Next(0, 100);
            var b = rnd.Next(0, 100);
            Assert.AreEqual(a + b, AddTwoIntegers_Exercice.AddTwoIntegers(a, b), string.Format("La somme de {0} et {1} devrait retourner {2}", a, b, a + b));
        }

        [TestMethod]
        public void AddTwoIntegers_2RandomIntsNeg_CorrectSumReceived()
        {
            Random rnd = new Random();
            var a = rnd.Next(0, 100);
            var b = rnd.Next(-100, 0);
            Assert.AreEqual(a + b, AddTwoIntegers_Exercice.AddTwoIntegers(a, b), string.Format("La somme de {0} et {1} devrait retourner {2}", a, b, a + b));
        }
    }
}
