# Instructions

Write a function `IsOdd` that returns true if the int passed as parameter is even, otherwise return false.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class IsOdd_Exercice
    {
        public static bool IsOdd(int a)
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
using CSharpDiscovery.Quest01;

namespace TestCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(IsOdd_Exercice.IsOdd(2));
            Console.WriteLine(IsOdd_Exercice.IsOdd(11));
            Console.WriteLine(IsOdd_Exercice.IsOdd(30));
        }
    }
}
```

And its output :

```
$ dotnet run
true
false
true
$
```

# Notions

- https://docs.microsoft.com/fr-fr/dotnet/csharp/language-reference/keywords/if-else
