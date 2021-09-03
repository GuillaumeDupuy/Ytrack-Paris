# Instructions

Write a function `FromStringToDateTime` that returns a DateTime object based on the string of the form 'day/month/year hour:minutes' passed as parameter.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest02
{
    public class FromStringToDateTime_Exercice
    {
        public static DateTime FromStringToDateTime(string dateStr)
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
            Console.WriteLine(FromStringToDateTime_Exercice.FromStringToDateTime("21/12/2021 18:33"));
        }
    }
}
```

And its output :

```
$ dotnet run
21/12/2021 18:33:00
$
```
