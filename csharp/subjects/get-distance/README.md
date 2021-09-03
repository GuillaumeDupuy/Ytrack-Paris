# Instructions

Create 2 `GetDistance` methods:
The first one takes a second PointOfInterest as parameter, the second one is a static method that takes 2 PointOfInterest as parameters.

Both of them need to return the distance in kilometers between the 2 points.

# Expected Methods

```c#
public int GetDistance(PointOfInterest other)
{
    // Your code
}

public static int GetDistance(PointOfInterest p1, PointOfInterest p2)
{
    // Your code
}
```

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
            var BordeauxCampus = new PointOfInterest();
            var ParisCampus = new PointOfInterest("Paris Ynov Campus", 48.9016552, 2.2079985);

            Console.WriteLine(BordeauxCampus.GetDistance(ParisCampus));
            Console.WriteLine(PointOfInterest.GetDistance(BordeauxCampus, ParisCampus));
        }
    }
}
```

and it's output :

```
$ dotnet run
497
497
$
```
