# Instructions

Download the `Vehicule.cs` class [here](https://github.com/thomaslenaour/ytrack/blob/main/subjects/create-car/Vehicle.cs)

Create a filename `Car.cs` with the same namespace `CSharpDiscovery.Quest04`.

Create a class named `Car` and make it inherit from `Vehicule` and add the string property `Model`

Using the keyword `base()`, create 2 constructors:

- One parameterless, equivalent to the parameterless constructor in Vehicule.cs, where you define `Brand` as `"Unknown"`
- One that requires the following arguments: `Model`, `Brand`, `Color` and `CurrentSpeed` (with a default value of 0)

Override the `ToString()` method to return a string under the format of `"(Color) (Brand) (Model)"`

# Usage

Here is a possible Program.cs file to test your code :

```c#
using CSharpDiscovery.Quest04;

namespace TestCSharp
{
    class Program
    {
        static void Main(string[] str)
        {
            var RandomCar = new Car();
            var Megane = new Car("Mégane", "Renault", "Yellow", 50);
            Vehicule.WhoIsHere();
        }
    }
}
```

and it's output :

```
$ dotnet run
---------------------------------
Vehicules on the road :
- Unknown Unknown Unknown, stopped.
- Yellow Renault Mégane, moving at 50km/h.
---------------------------------
$
```
