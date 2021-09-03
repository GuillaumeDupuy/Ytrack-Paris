# Instructions

Write a function `AreEquals` that returns true if the `tab1` and `tab2` passed in parameters are both exactly identical (same order and same values).

# Expected Functions

```C#
namespace CSharpDiscovery.Quest02
{
    public class AreEquals_Exercice
    {
        public static bool AreEquals(int[] tab1, int[] tab2)
        {
           // Your code
        }
    }
}
```

# Usage

Here is a possible Program.cs file to test your function :

```C#
using System;
using CSharpDiscovery.Quest02;
namespace TestCSharp
{
    class Program
    {
        static void Main(string[] str)
        {
            var tab = new int[] { 1, 2, 3, 4, 6 };
            var tab2 = new int[] { 1, 2, 3, 4, 6 };
            var tab3 = new int[] { 1, 2, 3, 4, 5 };
            Console.WriteLine(AreEquals_Exercice.AreEquals(tab, tab2));
            Console.WriteLine(AreEquals_Exercice.AreEquals(tab2, tab3));
        }
    }
}
```

And its output :

```
$ dotnet run
true
false
$
```
