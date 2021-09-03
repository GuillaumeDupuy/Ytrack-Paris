using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class GetStringSizeTests
    {
        [TestMethod]
        public void GetStringSize_Alexandre_9letters()
        {
            Assert.AreEqual(9, GetStringSize_Exercice.GetStringSize("Alexandre"), "La méthode doit retourner 9 pour la valeur \"Alexandre\"");
        }

        [TestMethod]
        public void GetStringSize_Dubois_6letters()
        {
            Assert.AreEqual(6, GetStringSize_Exercice.GetStringSize("Dubois"), "La méthode doit retourner 6 pour la valeur \"Dubois\"");
        }

        [TestMethod]
        public void GetStringSize_null_0letters()
        {
            Assert.AreEqual(0, GetStringSize_Exercice.GetStringSize(null), "La méthode ne doit pas planter quand on lui passe une chaîne nulle.");
        }

        [TestMethod]
        public void GetStringSize_empty_0letters()
        {
            Assert.AreEqual(0, GetStringSize_Exercice.GetStringSize(""), "La méthode ne doit pas planter quand on lui passe une chaîne vide.");
        }
    }
}
