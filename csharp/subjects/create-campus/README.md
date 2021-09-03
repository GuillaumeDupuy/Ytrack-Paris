# Instructions

Have you ever heard about heredity ? 😉

Create a filename `Campus.cs` with the same namespace `CSharpDiscovery.Quest03`.

Create a class named `Campus` and make it inherit from `PointOfInterest` and add an integer property `Capacity`

Redefine the method `ToString` so that it returns a string under the format `"(Name) is a campus with a capacity of (Capacity) students"`

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
            var BordeauxCampus = new Campus();
            BordeauxCampus.Capacity = 3000;
            Console.WriteLine(BordeauxCampus.ToString());
        }
    }
}
```

and it's output :

```
$ dotnet run
Bordeaux Ynov Campus is a campus with a capacity of 3000 students
$
```
