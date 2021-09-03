# Instructions

Write a function `RemoveSpaces` that returns the `string` passed in parameter without spaces at the beginning or the end.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class RemoveSpaces_Exercice
    {
        public static string RemoveSpaces(string str)
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
            Console.WriteLine(RemoveSpaces_Exercice.RemoveSpaces("  helloworld  "));
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