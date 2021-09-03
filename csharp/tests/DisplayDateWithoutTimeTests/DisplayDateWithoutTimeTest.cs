using CSharpDiscovery.Quest02;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace tests
{
    [TestClass]
    public class DisplayDateWithoutTimeTests
    {
        [TestMethod]
        public void DisplayDateWithoutTime_MinValue_CorrectFormat()
        {
            Assert.AreEqual("01/01/0001", DisplayDateWithoutTime_Exercice.DisplayDateWithoutTime(DateTime.MinValue));
        }

        [TestMethod]
        public void DisplayDateWithoutTime_DDay_CorrectFormat()
        {
            Assert.AreEqual("06/06/1944", DisplayDateWithoutTime_Exercice.DisplayDateWithoutTime(new DateTime(1944, 06, 06)));
        }

        [TestMethod]
        public void DisplayDateWithoutTime_DadBirthday_CorrectFormat()
        {
            Assert.AreEqual("20/10/1960", DisplayDateWithoutTime_Exercice.DisplayDateWithoutTime(new DateTime(1960, 10, 20)));
        }
    }
}
