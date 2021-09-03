# Instructions

Write a function `BeginsWithSpecificCharacter` that returns true if the `string` starts with the letter `begin` passed in parameters.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class BeginsWithSpecificCharacter_Exercice
    {
        public static bool BeginsWithSpecificCharacter(string str, char begin)
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
            Console.WriteLine(BeginsWithSpecificCharacter_Exercice.BeginsWithSpecificCharacter("helloworld", 'h'));
            Console.WriteLine(BeginsWithSpecificCharacter_Exercice.BeginsWithSpecificCharacter("helloworld", 'w'));
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
