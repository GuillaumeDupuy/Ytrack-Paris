using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class BeginsWithSpecificCharacterTests
    {
        [TestMethod]
        public void BeginsWithSpecificCharacter_basic_doStart()
        {
            Assert.IsTrue(BeginsWithSpecificCharacter_Exercice.BeginsWithSpecificCharacter("alexandre", 'a'));
        }

        [TestMethod]
        public void BeginsWithSpecificCharacter_basic_doNotStart()
        {
            Assert.IsFalse(BeginsWithSpecificCharacter_Exercice.BeginsWithSpecificCharacter("alexandre", 'g'));
        }
    }
}
