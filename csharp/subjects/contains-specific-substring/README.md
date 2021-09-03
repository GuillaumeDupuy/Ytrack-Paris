# Instructions

Write a function `ContainsSpecificSubstring` that returns true if the `pattern` is in the `string` passed as parameters.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class ContainsSpecificSubstring_Exercice
    {
        public static bool ContainsSpecificSubstring(string str, string pattern)
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
            Console.WriteLine(ContainsSpecificSubstring_Exercice.ContainsSpecificSubstring("helloworld", "hello"));
            Console.WriteLine(ContainsSpecificSubstring_Exercice.ContainsSpecificSubstring("helloworld", "monde"));
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
