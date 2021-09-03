# Instructions

Write a function `SpellItBackward` that returns the `string` passed as parameter in reverse.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class SpellItBackwards_Exercice
    {
        public static string SpellItBackward(string str)
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
            Console.WriteLine(SpellItBackwards_Exercice.SpellItBackward("helloworld"));
        }
    }
}
```

And its output :

```
$ dotnet run
dlrowolleh
$
```

# Notions
- https://docs.microsoft.com/fr-fr/dotnet/api/system.string.tochararray?view=net-5.0
