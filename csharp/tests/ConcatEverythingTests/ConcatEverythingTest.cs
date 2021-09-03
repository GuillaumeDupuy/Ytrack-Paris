using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class ConcatEverythingTests
    {
        [TestMethod]
        public void ConcatEverything_tableWithStrings_ConcatedString()
        {
            Assert.AreEqual("successfull", ConcatEverything_Exercice.ConcatEverything(new string[] { "success", "full" }), "Cette méthode doit concaténer les différentes chaînes du tableau.");
        }

        [TestMethod]
        public void ConcatEverything_tableWithEmptyStrings_ConcatedString()
        {
            Assert.AreEqual("success", ConcatEverything_Exercice.ConcatEverything(new string[] { "success", "" }), "Cette méthode doit concaténer les différentes chaînes du tableau.");
        }
    }
}
