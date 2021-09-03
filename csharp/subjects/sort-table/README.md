# Instructions

Write a function `SortTable` that sort and return the array of int passed as parameter

# Expected Functions

```C#
namespace CSharpDiscovery.Quest02
{
    public class SortTable_Exercice
    {
        public static int[] SortTable(int[] tab)
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
            var array = new int[] { 3, 24, 13, 4, 40 };
            Console.WriteLine(string.Join(", ", SortTable_Exercice.SortTable(array)));
        }
    }
}
```

And its output :

```
$ dotnet run
3, 4, 13, 24, 40
$
```
