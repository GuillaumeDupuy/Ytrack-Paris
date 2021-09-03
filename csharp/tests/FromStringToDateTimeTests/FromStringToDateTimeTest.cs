using CSharpDiscovery.Quest02;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace tests
{
    [TestClass]
    public class FromStringToDateTimeTests
    {
        [TestMethod]
        public void FromStringToDateTime_PatternWithAnH_DateTimeOK()
        {
            Assert.AreEqual(new DateTime(2021, 12, 21, 18, 33, 0, 0), FromStringToDateTime_Exercice.FromStringToDateTime("21/12/2021 18:33"));
        }
    }
}
