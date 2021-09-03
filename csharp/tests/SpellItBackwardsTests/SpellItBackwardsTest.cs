using CSharpDiscovery.Quest01;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace tests
{
    [TestClass]
    public class SpellItBackwardsTests
    {
        [TestMethod]
        public void SpellItBackward_HelloWorld_HelloWorldReversed()
        {
            //"helloworld" reçu, on retourne "dlrowolleh"
            Assert.AreEqual("dlrowolleh", SpellItBackwards_Exercice.SpellItBackward("helloworld"), "La méthode doit retourner \"dlrowolleh\" pour \"helloworld\" en entrée");
        }
    }
}
