# Instructions

Write a function `DifferenceInMinutes` that returns the number of minutes between 2 DateTime passed as parameters

# Expected Functions

```C#
using System;

namespace CSharpDiscovery.Quest02
{
    public class DifferenceInMinutes_Exercice
    {
        public static double DifferenceInMinutes(DateTime start, DateTime end)
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
            var start = new DateTime(2021, 02, 01, 12, 0, 0, 0);
            var end = new DateTime(2021, 02, 01, 18, 0, 0, 0);
            Console.WriteLine(DifferenceInMinutes_Exercice.DifferenceInMinutes(start, end));

        }
    }
}
```

And its output :

```
$ dotnet run
360
$
```
