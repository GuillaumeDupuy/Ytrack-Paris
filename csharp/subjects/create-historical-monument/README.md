# Instructions

Create a filename `HistoricalMonument.cs` with the same namespace `CSharpDiscovery.Quest03`.

Create a class named `HistoricalMonument` and make it inherit from `PointOfInterest` and add an integer property `BuildYear`

Add an empty constructor, then using the keyword `base()`, create a constructor that requires the following arguments: `Latitude`, `Longitude`, `Name` and `BuildYear`.

Redefine the method `ToString` so that it returns a string under the format `"(Name) is a historical monument built in (BuildYear)"`

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
            PointOfInterest PorteCailhau = new HistoricalMonument("Porte Cailhau", 44.838336, -0.569446, 1493);
            Console.WriteLine(PorteCailhau.ToString());
        }
    }
}
```

and it's output :

```
$ dotnet run
Porte Cailhau is a historical monument built in 1493
$
```
