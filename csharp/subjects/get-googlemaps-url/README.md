# Instructions

What about adding some methods to your class ?

Create a method `GetGoogleMapsUrl` that takes no parameters, and using the static property `GoogleMapsUrlTemplate` created before, returns the Google Maps URL as a string for the current point of interest.

For example, with the Bordeaux Ynov Campus, this method has to return `"https://www.google.com/maps/place/Bordeaux+Ynov+Campus/@44.854186,-0.5663056,15z/"`

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
            Console.WriteLine(DefaultPoint.GetGoogleMapsUrl());

            var ParisCampus = new PointOfInterest("Paris Ynov Campus", 48.9016552, 2.2079985);
            Console.WriteLine(ParisCampus.GetGoogleMapsUrl());
        }
    }
}
```

and it's output :

```
$ dotnet run
https://www.google.com/maps/place/Bordeaux+Ynov+Campus/@44.854186,-0.5663056,15z/
https://www.google.com/maps/place/Paris+Ynov+Campus/@48.9016552,2.2079985,15z/
$
```
