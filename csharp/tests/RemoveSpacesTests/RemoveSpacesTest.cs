using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class RemoveSpacesTests
    {
        [TestMethod]
        public void RemoveSpaces_stringWithSpaceAtTheEnd_stringTrimmed()
        {
            Assert.AreEqual("NoSpaceLeftAtTheEnd", RemoveSpaces_Exercice.RemoveSpaces("NoSpaceLeftAtTheEnd "), "La méthode doit supprimer les espaces en fin de chaîne");
        }

        [TestMethod]
        public void RemoveSpaces_stringWithSpaceAtTheBeginning_stringTrimmed()
        {
            Assert.AreEqual("NoSpaceLeftAtTheBeginning", RemoveSpaces_Exercice.RemoveSpaces(" NoSpaceLeftAtTheBeginning"), "La méthode doit supprimer les espaces en début de chaîne");
        }

        [TestMethod]
        public void RemoveSpaces_stringWithSpaceEverywhere_stringTrimmed()
        {
            Assert.AreEqual("No Space Left At The Beginning Nor The End", RemoveSpaces_Exercice.RemoveSpaces(" No Space Left At The Beginning Nor The End "), "La méthode doit supprimer les espaces en début et fin de chaîne uniquement");
        }

        [TestMethod]
        public void RemoveSpaces_onlySpaces_emptyString()
        {
            Assert.AreEqual(string.Empty, RemoveSpaces_Exercice.RemoveSpaces("         "), "La méthode doit supprimer les espaces en début et fin de chaîne. S'il n'y a que des espaces elle renvoit une chaîne vide");
        }
    }
}
