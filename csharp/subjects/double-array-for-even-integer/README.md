# Instructions

Write a function `DoubleArrayForEvenInteger` that returns the `inputTab` passed as parameter, with all the odd numbers multiplied by 2.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class DoubleArrayForEvenInteger_Exercice
    {
         public static int[] DoubleArrayForEvenInteger(int[] inputTab)
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
        static void Main()
        {
            var inputTab = new int[] { 1, 32, 7, 33 };
            Console.WriteLine("{0}", string.Join(" ", DoubleArrayForEvenInteger_Exercice.DoubleArrayForEvenInteger(inputTab)));
        }
    }
}
```

And its output :

```
$ dotnet run
2 32 14 66
$
```

# Notions

- https://docs.microsoft.com/fr-fr/dotnet/api/system.string.tochararray?view=net-5.0
