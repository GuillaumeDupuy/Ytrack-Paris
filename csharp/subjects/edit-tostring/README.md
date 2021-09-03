# Instructions

For this one you will need to add a little description to your point of interest.

Redefine the `ToString` method so that it returns a string under the format `"Name-Of-Point (Lat=XXXXXXXXX, Long=YYYYYYYYYY)"`

Be careful ! The method `ToString` may already exists for your class, try to figure out what keyword has to be added to redefine it 😉

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
            Console.WriteLine(DefaultPoint.ToString());

            var ParisCampus = new PointOfInterest("Paris Ynov Campus", 48.9016552, 2.2079985);
            Console.WriteLine(ParisCampus.ToString());
        }
    }
}
```

and it's output :

```
$ dotnet run
Bordeaux Ynov Campus (Lat=44.854186, Long=-0.5663056)
Paris Ynov Campus (Lat=48.9016552, Long=2.2079985)
$
```
