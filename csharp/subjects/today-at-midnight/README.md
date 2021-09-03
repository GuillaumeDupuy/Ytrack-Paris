# Instructions

Write a function `TodayAtMidnight` that returns a DateTime of today at midnight

# Expected Functions

```C#
using System;

namespace CSharpDiscovery.Quest02
{
    public class TodayAtMidnight_Exercice
    {
        public static DateTime TodayAtMidnight()
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
            Console.WriteLine(TodayAtMidnight_Exercice.TodayAtMidnight());
        }
    }
}
```

And its output :

```
$ dotnet run
{dd}/{MM}/{YYYY} 00:00:00
$
```

# Notions

- https://docs.microsoft.com/fr-fr/dotnet/api/system.datetime
