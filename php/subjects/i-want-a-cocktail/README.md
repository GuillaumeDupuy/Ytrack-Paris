### I want a cocktail

### Explanations

The `POO` ⚡ (object oriented programming) is a particular form of programming intended to facilitate the maintenance and the reuse / adaptation of your PHP scripts. It consists of representing objects (from the real world or not) in the form of computer entities. We generally represent a global object by what we call a class.

A class will group together a set of functions and properties that can act on the object. If we take for example a car in the real world, we can model a car by a class `Car` which will have as properties the number of wheels, the number of doors, etc ...

---

#### The classes

A class groups together functions and variables (this time called `attributes`, because they are attributes of a class) which interact with the object. That is to say that for a `car` object for example, you will have a class named` Car` and you will be able to have a function which modifies the fuel level (the fuel level being an attribute of the class that we can only modify via a function (called `method`) which will modify this attribute).

This principle is called **data encapsulation**, the purpose of data encapsulation being not to be able to access the object's data directly but via functions (called here `methods`). Each attribute can therefore have access rights outside the class.

Let's see an example to illustrate this :

```php
<?php

 class Car
 {
      /** Declaration of attributes */
      public float $fuelLevel;
      public int $doorsNumber;

      //  ↙ Visibility (more on this later)
      public int $wheelNumber;
      //      ↖ Type   ↖ Variable Name

      /**
      * This somewhat special method is the constructor,
      * It is executed when you "create" your object.
      * It must initialize the attributes of the class.
      */
      public function __construct()
      {
           // ↙ $this means the current context
           $this->fuelLevel = 45.4; // <- the default value
           //         ↖ Attribute
           $this->doorsNumber = 3;
           $this->wheelNumber = 4;
      }
 }
```

Okkkk good now that we have our object ... how do we use it? 🤔

---

#### Create an object (instantiate a class)

Here is how to create an object in PHP :

-   Instantiation using the new keyword followed by the name of the object.

```php
<?php

$car1 = new Car(); // Instantiating a new car

var_dump($car1); // Display of the whole object

-> object(Car)#1 (3) {
  ["fuelLevel"] => int(45.4)
  ["doorsNumber"] => int(3)
  ["wheelNumber"] => int(4)
}

// Retrieving an attribute
$car1->fuelLevel; // 45.4
```

The variable **$car1** represents the object which is here a car. When you run this code, the \_\_construct () method of the class is executed.

As it is a function, it can also take parameters 🤩. It all depends on how you want to code your class, but you could very well have a \_\_construct() function that initializes the attributes based on the parameters you supply to it.

Here is what it could give:

```php
<?php

  class Car
  {
      public float $fuelLevel;
      public int $doorsNumber;
      public int $wheelNumber;

      public function __construct(float $fuelLevel, int $doorsNumber, int $wheelNumber = 4)
      {
         $this->fuelLevel = $fuelLevel;
         $this->doorsNumber = $doorsNumber;
         $this->wheelNumber = $wheelNumber;
      }
  }
```

When you create the car object, without going through the appropriate methods, you will be able to set a fuel level, a number of doors and a number of wheels (by default 4).

Here are two ways to create the object:

```php
<?php

  $car1 = new Car(50, 3); // 50 : fuel level and 3 doors, there is no need to specify the number of wheels because it is 4 by default.

  $car2 = new Car(10, 5, 6); // 10 : fuel level, 5 doors and 6 wheels.
```

It is important to point out that the objects **$car1** and **$car2** are two different objects which can have their own properties.

You may now begin to understand how easily you can create as many objects as you want 😎.

_POO life_ 💯

### Instructions

Create a class named `Mojito`.

This class must have the following attributes (+ base values) :

-   `alcoholRate` : The level of alcohol in the blood
    -   Type: float
    -   Value: 0.15
-   `ingredients` : The ingredients that make up the Mojito
    -   Type: array
    -   Value: rum, lime, sparkling water, mint, sugar
-   `price` : The price of the Mojito
    -   Type: int
    -   Value: 8

### Notions

-   [Object-Oriented programming (OOP)](https://www.php.net/manual/en/language.oop5.basic.php)
-   [Properties](https://www.php.net/manual/en/language.oop5.properties.php)
-   [Constructor](https://www.php.net/manual/en/language.oop5.decon.php)
