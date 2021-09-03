# Instructions

Write a function `ContainsThisValue` that returns true if the `value` passed as parameter is in `tab`, otherwise return false.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest02
{
    public class ContainsThisValue_Exercice
    {
        public static bool ContainsThisValue(int[] tab, int value)
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
        static void Main(string[] args)
        {
            var tab = new int[5] { 99, 98, 92, 97, 95 };
            var tab2 = new int[5] { 50, 54, 85, 47, 2 };
            Console.WriteLine(ContainsThisValue_Exercice.ContainsThisValue(tab, 97));
            Console.WriteLine(ContainsThisValue_Exercice.ContainsThisValue(tab2, 51));
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

# Notions

-   https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/statements/iteration-statements
-   https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/if-else
