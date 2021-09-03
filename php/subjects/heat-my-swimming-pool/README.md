### Heat my swimming pool ?

### Explanations

Object interfaces are contracts that the classes that implement them must fulfill. They contain empty methods that force a class to use them, thus promoting a development standard.

If a class implements an interface, it is forced to use all the methods of the same (and the same types of method arguments), otherwise it will give a fatal error. Several interfaces can be used in each class, and they can be extended between them using `extensions`. An interface can extend one or more interfaces.

All methods declared in an interface must be public.

To define an interface you must use the `interface` keyword. And to implement it `implements`

Example :

```php
// Interface creation
interface Maintenance
{
    // Function with param which returns nothing
    public function paint(string $couleur): void;
    // Function without param which returns nothing
    public function cleaning(): void;
}

class Car implements Maintenance
{
    private string $color = "Green";
    private bool $clean = false;

    // Obligation to implement both functions otherwise fatal error.
    public function paint(string $color): void
    {
       $this->color = $color;
    }

    public function cleaning(): void
    {
       $this->clean = true;
    }
}

class Motorbike implements Maintenance
{
    private string $color = "Red";
    private bool $clean = false;

    // Obligation to implement both functions otherwise fatal error.
    public function paint(string $color): void
    {
       $this->color = $color;
    }

    public function cleaning(): void
    {
       $this->clean = true;
    }
}
```

### Instructions

We want to perform the function allowing the heating of a swimming pool to be turned on automatically according to the current temperature, and the average temperature of the last few days.

Create an interface named `PoolTempsInterface` which will define the following functions :

-   getActualTemp() : Returns the current temperature.
-   getLastDaysTemps() : Returns the list of temperatures for the last 7 days.
-   setHeater(bool) : Turns the pool heating on or off according to the boolean.

Then create a class named `PoolTemps` which will implement the` PoolTempsInterface` and a property `isActive`.
Implement the different functions then create an `activateHeater` function which will trigger the heating if all the conditions are met :

-   The average temperature of the last 7 days is above 20 °
-   The current temperature is above 25 °

Examples of uses :

```php
$poolTemps = new PoolTemps(25, [19, 20, 21, 16, 19, 23, 20]);
$poolTemps->activateHeater();

var_dump($poolTemps->isActive); // false

$poolTemps2 = new PoolTemps(26, [24, 26, 27, 25, 27, 23, 20]);
$poolTemps2->activateHeater();

var_dump($poolTemps2->isActive); // true
```

### Notions

-   [OOP Interface](https://www.php.net/manual/en/language.oop5.interfaces.php)
