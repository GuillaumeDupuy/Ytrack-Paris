# Instructions

Write a function `GetStringSize` that returns the length of the `string` passed as parameter.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class GetStringSize_Exercice
    {
        public static int GetStringSize(string str)
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
            Console.WriteLine(GetStringSize_Exercice.GetStringSize("helloworld"));
        }
    }
}
```

And its output :

```
$ dotnet run
10
$
```
