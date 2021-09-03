# Instructions

Create a filename `Truck.cs` with the same namespace `CSharpDiscovery.Quest04`.

Create a class named `Truck` and make it inherit from `Vehicule`

Add an Integer property `Tonnage` to your `Truck` class.

Using the keyword `base()`, create 2 constructors:

- One parameterless, equivalent to the parameterless constructor in Vehicule.cs, where you define `Tonnage` as `0`
- One that requires the following arguments: `Tonnage`, `Brand`, `Color` and `CurrentSpeed` (with a default value of 0)

Override the `ToString()` method to return a string under the format of `"(Color) (Brand) (Tonnage)T Truck"`

Same for the `Car` class, you will need to override the `Accelerate` and `Brake` methods:

- `Accelerate()` needs to add to your `CurrentSpeed` the int passed as parameter. ⚠️ Be careful ! Your current speed can\`t go past `100` km/h !
- `Brake()` needs to remove to your `CurrentSpeed` the int passed as parameter, and as the Accelerate method, you cannot have a negative speed 😉

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
            var RandomTruck = new Truck();
            var MAC = new Truck(2, "MAC", "White", 80);
            var Renault = new Truck(3, "Renault", "Black", 20);

            Vehicule.WhoIsHere();

            RandomTruck.Accelerate(30);
            MAC.Accelerate(40);
            Renault.Brake(30);

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
- Unknown Unknown 0T Truck, stopped.
- White MAC 2T Truck, moving at 80km/h.
- Black Renault 3T Truck, moving at 20km/h.
---------------------------------
---------------------------------
Vehicules on the road :
- Unknown Unknown 0T Truck, moving at 30km/h.
- White MAC 2T Truck, moving at 100km/h.
- Black Renault 3T Truck, stopped.
---------------------------------
$
```
