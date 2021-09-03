# Instructions

You will work on the same file almost all along the quest.

Let's create a file named `PointOfInterest.cs`, in this file, set the namespace to `CSharpDiscovery.Quest03` and create a public class named `PointOfInterest`.

You first task is to set 3 empty properties on this class:

- Latitude (Double)
- Longitude (Double)
- Name (String)

Then add a static string property named `GoogleMapsUrlTemplate` and set its value to `https://www.google.com/maps/place/{0}/@{1},{2},15z/`

All of these properties must remain `public`

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
            var poi = new PointOfInterest();
            Console.WriteLine(poi.Latitude);
            Console.WriteLine(poi.Longitude);
            Console.WriteLine(poi.Name);

            Console.WriteLine(PointOfInterest.GoogleMapsUrlTemplate);
        }
    }
}
```

and it's output:

```
$ dotnet run
0
0

https://www.google.com/maps/place/{0}/@{1},{2},15z/
$
```
