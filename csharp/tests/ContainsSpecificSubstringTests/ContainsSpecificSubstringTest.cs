using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class ContainsSpecificSubstringTests
    {
        [TestMethod]
        public void ContainsSpecificSubstring_basicstring_doContains()
        {
            Assert.IsTrue(ContainsSpecificSubstring_Exercice.ContainsSpecificSubstring("allez courage, tu t'en sors bien", "courage"));
        }

        [TestMethod]
        public void ContainsSpecificSubstring_basicstring_doNotContains()
        {
            Assert.IsFalse(ContainsSpecificSubstring_Exercice.ContainsSpecificSubstring("allez courage, tu t'en sors bien", "soleil"));
        }
    }
}
