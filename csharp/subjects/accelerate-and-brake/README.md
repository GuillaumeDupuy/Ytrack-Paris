# Instructions

Update the `Vehicule.cs` class with [this](https://github.com/thomaslenaour/ytrack/blob/main/subjects/accelerate-and-brake/Vehicle.cs) version.

What's happening ?! You can't build your program anymore 😦.

Don't worry, it's because of the 2 abstract methods `Accelerate` and `Brake` you added in the `Vehicule` class.

In order to build again, you will need to override these 2 methods in your `Car` class :

- The `Accelerate()` method needs to add to your `CurrentSpeed` the int passed as parameter. ⚠️ Be careful ! Your current speed can`t go past 180 km/h !
- The `Brake()` method needs to remove to your `CurrentSpeed` the int passed as parameter, and as the Accelerate method, you cannot have a negative speed 😉

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
            var Megane = new Car("Mégane", "Renault", "Yellow", 100);

            Megane.Accelerate(50);

            Console.WriteLine(Megane.CurrentSpeed);

            Megane.Accelerate(50);

            Console.WriteLine(Megane.CurrentSpeed);

            Megane.Brake(160);

            Console.WriteLine(Megane.CurrentSpeed);

            Megane.Brake(40);

            Console.WriteLine(Megane.CurrentSpeed);
        }
    }
}
```

and it's output :

```
$ dotnet run
150
180
20
0
$
```
