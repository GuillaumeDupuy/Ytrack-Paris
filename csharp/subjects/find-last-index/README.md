# Instructions

Write a function `FindLastIndex` that returns the index of the last occurence of the value `a` in the `tab` passed as parameter. Return `null` if the value is not in the array

# Expected Functions

```C#
namespace CSharpDiscovery.Quest02
{
    public class FindLastIndex_Exercice
    {
        public static int? FindLastIndex(int[] tab, int a)
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
            var tab = new int[] { 20, 35, 12, 56, 35, 76 };
            Console.WriteLine(FindLastIndex_Exercice.FindLastIndex(tab, 12));
            Console.WriteLine(FindLastIndex_Exercice.FindLastIndex(tab, 35));
            Console.WriteLine(FindLastIndex_Exercice.FindLastIndex(tab, 66));
        }
    }
}
```

And its output :

```
$ dotnet run
2
4

$
```
