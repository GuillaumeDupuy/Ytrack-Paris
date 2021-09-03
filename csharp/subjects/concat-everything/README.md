# Instructions

Write a function `ConcatEverything` that returns one `string` containing all the strings passed in the array in parameter. 

Put simply, concatenates everything into only one string.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class ConcatEverything_Exercice
    {
        public static string ConcatEverything(params string[] str)
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
        static void Main(string[] str)
        {
            string[] table = { "hello", "world" };
            Console.WriteLine(ConcatEverything_Exercice.ConcatEverything(table));
        }
    }
}
```

And its output :

```
$ dotnet run
helloworld
$
```