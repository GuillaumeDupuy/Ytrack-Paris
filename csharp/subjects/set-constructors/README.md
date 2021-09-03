# Instructions

Let's add 2 constructors.

The first one takes no parameters and the defaults values affected are the following :

- `Name` : `"Bordeaux Ynov Campus"`
- `Latitude` : `44.854186`
- `Longitude` : `-0.5663056`

The second one takes 3 parameters, and sets the value of `Name`, `Latitude` and `Longitude`.

# Usage

Here is a possible Program.cs file to test your code :

```c#
using System;
using CSharpDiscovery.Quest03;

namespace TestCSharp
{
    class Program
    {
        static void Main(string[] str)
        {
            var DefaultPoint = new PointOfInterest();
            Console.WriteLine(DefaultPoint.Name);
            Console.WriteLine(DefaultPoint.Latitude);
            Console.WriteLine(DefaultPoint.Longitude);

            var ParisCampus = new PointOfInterest("Paris Ynov Campus", 48.9016552, 2.2079985);
            Console.WriteLine(ParisCampus.Name);
            Console.WriteLine(ParisCampus.Latitude);
            Console.WriteLine(ParisCampus.Longitude);
        }
    }
}
```

and it's output :

```
$ dotnet run
Bordeaux Ynov Campus
44,854186
-0,5663056
Paris Ynov Campus
48,9016552
2,2079985
$
```
