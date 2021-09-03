# Instructions

Alright now let's take a look at what we call Interfaces !

Create a file named `CarInterfaces.cs`. In the namespace `CSharpDiscovery.Quest04`, create 2 interfaces `IThermalCar` and `IElectricCar`.

The `IThermalCar` interface must contains:

-   an Integer `FuelLevel`
-   a `FillUp()` method that takes no parameter and has no return value
-   a `GetFuelLevel()` method that takes no parameter and returns an Integer

The `IElectricCar` interface must contains:

-   an Integer `BatteryLevel`
-   a `Recharge()` method that takes no parameter and has no return value
-   a `GetBatteryLevel()` method that takes no parameter and returns an Integer

# Expected code

```c#
namespace CSharpDiscovery.Quest04
{
    public interface IThermalCar {
        // Your code
    }
    public interface IElectricCar {
        // Your code
    }
}
```
