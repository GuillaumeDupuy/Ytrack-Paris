# Instructions

Let's mix up everything you've done so far !

Create a file `HybridCar.cs`. In the namesapce `CSharpDiscovery.Quest04`, create a class `HybridCar`, make it inherit from `Car`, and implement the `IElectricCar` and `IThermalCar` interfaces from the previous exercice.

Add 2 constructors:

-   One parameterless that simply calls the parameterless constructor of `Car`
-   One that requires the following arguments: `Model`, `Brand`, `Color` and `CurrentSpeed` (with a default value of 0) and calls the corresponding `Car` constructor

Find a way to compile your program, knowing that:

-   `FuelLevel` and `BatteryLevel` have a default value of `100`%
-   `GetFuelLevel()` and `GetBatteryLevel` return respectively `FuelLevel` and `BatteryLevel`
-   `FillUp()` and `Recharge()` respectively set back the value to `100`% of `FuelLevel` and `BatteryLevel`

Finally, override the `ToString()` method so that it returns the `ToString()` string of `Car` but with `"(Color) (Brand) (Model), Battery: (BatteryLevel)%, Fuel: (FuelLevel)%"` at the end of the string.

# Usage

Here is a possible Program.cs file to test your code :

```c#
using CSharpDiscovery.Quest04;
using System;

namespace TestCSharp
{
    class Program
    {
        static void Main(string[] str)
        {
            var i8 = new HybridCar("i8", "BMW", "White");
            i8.BatteryLevel = 60;
            i8.FuelLevel = 80;
            Vehicule.WhoIsHere();

            i8.Recharge();
            i8.FillUp();
            Console.WriteLine(i8.GetBatteryLevel());
            Console.WriteLine(i8.GetFuelLevel());
        }
    }
}
```

and it's output :

```
$ dotnet run
---------------------------------
Vehicules on the road :
- White BMW i8, Battery: 60%, Fuel: 80%, stopped.
---------------------------------
100
100
$
```
