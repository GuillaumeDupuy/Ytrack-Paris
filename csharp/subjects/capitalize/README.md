# Instructions

Write a function `Capitalize` that returns in ALL CAPS the `string` passed as parameter. 

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class Capitalize_Exercice
    {
        public static string Capitalize(string str)
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
            Console.WriteLine(Capitalize_Exercice.Capitalize("helloworld"));
        }
    }
}
```

And its output :

```
$ dotnet run
HELLOWORLD
$
```