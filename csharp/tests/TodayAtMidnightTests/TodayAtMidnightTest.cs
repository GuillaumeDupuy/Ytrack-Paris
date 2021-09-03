using CSharpDiscovery.Quest02;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace tests
{
    [TestClass]
    public class TodayAtMidnightTests
    {

        [TestMethod]
        public void TodayAtMidnight()
        {
            Assert.AreEqual(DateTime.Today, TodayAtMidnight_Exercice.TodayAtMidnight(), "Le retour attendu pour cette méthode est " + DateTime.Today.ToString());
        }
    }
}
