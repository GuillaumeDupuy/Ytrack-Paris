# Instructions

Write a function `FindThisValue` that returns `true` if the array passed in the first parameter contains the value passed in the second parameter.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest02
{
    public class FindThisValue_Exercice
    {
        public static bool FindThisValue(int [] tab, int value)
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
            var array = new int[] { 1, 2, 3, 4, 5 };
            Console.WriteLine(FindThisValue_Exercice.FindThisValue(array, 3));
            Console.WriteLine(FindThisValue_Exercice.FindThisValue(array, 6));
        }
    }
}
```

And its output :

```
$ dotnet run
True
False
$
```
