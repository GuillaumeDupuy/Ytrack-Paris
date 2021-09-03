using CSharpDiscovery.Quest02;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace tests
{
    [TestClass]
    public class SecretSantaTests
    {
        [TestMethod]
        public void SecretSanta_RandomPeople_NoOneIsMissing()
        {
            var people = new HashSet<string> { "arnaud", "marie", "alexandre", "audrey", "adrien", "mathilde", "théophile", "hanako" };
            var result = SecretSanta_Exercice.SecretSantaDraw(people);
            Assert.AreEqual(people.Count, result.Count, "J'ai l'impression que le nombre de personne en sortie est différent de celui en entrée !");
            foreach (var pair in result)
            {
                Assert.IsFalse(string.IsNullOrEmpty(pair.Value), pair.Key + " doit forcément offrir un cadeau à quelqu'un.");
            }
        }

        [TestMethod]
        public void SecretSanta_RandomPeople_GiverAndRecipientAreDifferent()
        {
            var people = new HashSet<string> { "arnaud", "marie", "alexandre", "audrey", "adrien", "mathilde", "théophile", "hanako" };
            var result = SecretSanta_Exercice.SecretSantaDraw(people);
            foreach (var pair in result)
            {
                Assert.AreNotEqual(pair.Key, pair.Value);
            }
        }

        [TestMethod]
        public void SecretSanta_2Draws_ResultsAreDifferent()
        {
            var people = new HashSet<string> { "arnaud", "marie", "alexandre", "audrey", "adrien", "mathilde", "théophile", "hanako" };
            var result = SecretSanta_Exercice.SecretSantaDraw(people);
            var result2 = SecretSanta_Exercice.SecretSantaDraw(people);

            var differenceFound = false;
            foreach (var pair in result)
            {
                if (pair.Value != result2.GetValueOrDefault(pair.Key))
                {
                    differenceFound = true;
                    break;
                }
            }
            Assert.IsTrue(differenceFound, "Pour deux tirages successifs, on a exactement la même liste de donneur/destinataires en sortie");
        }
    }
}
