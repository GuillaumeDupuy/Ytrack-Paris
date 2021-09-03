# Instructions

Write a function `AddTwoIntegers` that returns the sum of two integers passed as parameter.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class AddTwoIntegers_Exercice
    {
        public static int AddTwoIntegers(int a, int b)
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
            Console.WriteLine(AddTwoIntegers_Exercice.AddTwoIntegers(1, 2));
            Console.WriteLine(AddTwoIntegers_Exercice.AddTwoIntegers(10, 5));
        }
    }
}
```

And its output :

```
$ dotnet run
3
15
$
```
