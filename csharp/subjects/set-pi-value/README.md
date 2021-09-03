# Instructions

Write a function `SetPiValue` that returns the value of pi (5 decimal places) passed as parameter

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class SetPiValue_Exercice
    {
        public static float SetPiValue(float pi)
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
            Console.WriteLine(CSharpDiscovery.Quest01.SetPiValue_Exercice.SetPiValue(0));
        }
    }
}
```

And its output :

```
$ dotnet run
3.14159
$
```
