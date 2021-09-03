using Microsoft.VisualStudio.TestTools.UnitTesting;
using CSharpDiscovery.Quest01;

namespace tests
{
    [TestClass]
    public class HelloWorldTests
    {
        [TestMethod]
        public void Hello_Nominal_ReturnsHelloWorld()
        {
            var result = HelloWorld_Exercice.HelloWorld();
            Assert.AreEqual("Hello World !", result, "La chaîne de caractères retournée n'est pas égale à \"Hello World !\"");
        }
    }
}
