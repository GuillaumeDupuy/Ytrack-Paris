### Many fuel

### Explanations

#### Visibility

PHP 5 introduces the notion of visibility of methods and attributes. Each attribute and method can be assigned an access right.

The principle of encapsulation would be that we put all the attributes that are only modifiable and accessible inside the class, and the methods accessible from the outside. In practice, this is not always the case.

The three words used to manage access are :

- `public` : anyone has access to the requested method or attribute.
- `protected` : only the class as well as its possible subclasses (inherited classes, we will see what it is later).
- `private` : only the class that defined the element can access it.

For the Car class, you can see that the attributes are not modifiable outside the class, you have to go through the **appropriate methods**.

To access an attribute of a class, we use this code : $object-> attribute

Example :

```php
<?php

 class Car
 {
      //  ↙ Visibility on attributes
      private float $fuelLevel;
      protected int $doorsNumber;
      public int $wheelNumber;

      //  ↙ Visibility into functions
      public function __construct()
      {
           $this->fuelLevel = 45.4;
           $this->doorsNumber = 3;
           $this->wheelNumber = 4;
      }
 }
```

---

#### Accessors && mutators

As a rule, you do not directly access the attributes of an object. To read and modify their values, we go through methods that make it possible to secure their use.

These methods are called getter to read their values ​​and setter to modify their values.

One of the conventions often used is to take the name of the attribute to create the methods, adding `get` for the accessors and` set` for the mutators

Example :

```php
<?php

 class Car
 {
      // Attributes && Constructor

      // ....

      // Getters
      public function getFuelLevel(): float
      {
          return $this->fuelLevel;
      }

      public function getDoorsNumber(): int
      {
          return $this->doorsNumber;
      }

      public function getWheelNumber(): int
      {
          return $this->wheelNumber;
      }

      // Setters
      public function setFuelLevel(float $fuelLevel): self
      {
          $this->fuelLevel = $fuelLevel;

          return $this;
      }

      public function setDoorsNumber(int $doorsNumber): self
      {
          $this->doorsNumber = $doorsNumber;

          return $this;
      }

      public function setWheelNumber(int $wheelNumber): self
      {
          $this->wheelNumber = $wheelNumber;

          return $this;
      }
 }
```

Results :

```php
<?php

$Car = new Car(); // Instantiating a new Car

$Car->fuelLevel; // Fatal Error !!
$Car->doorsNumber; // Fatal Error !!
$Car->wheelNumber; // 4

$Car->getFuelLevel(); // 45.4
$Car->getDoorsNumber(); // 3
$Car->getWheelNumber(); // 4

$Car->setFuelLevel(100) // Change of fuel level + number of doors
    ->setDoorsNumber(2);

$Car->getFuelLevel(); // 100
$Car->getDoorsNumber(); // 2
```

> All accessors (setters) return the keyword `$this`, this principle is called method chaining or more commonly in English `Fluent methods`.

### Instructions

We want to measure how much fuel we have in our car's tank.

The amount of fuel in the tank depends on the number of kilometers we have driven in our Car, as well as the amount of fuel we put in the tank.

Create a class named `Car` with a private property named `tank` the number of gallons of fuel we have in the tank of the Car.

Also create the accessors / mutators.

We also need to add two methods to our `Car` class:

- The mutator of the `tank` property adds gallons of fuel to the tank of our Car.
- The `ride($ float)` method calculates the amount of fuel we consume when we travel a certain distance, then subtracts it from the tank.

In our example, we assume that the Car consumes 1 gallon of fuel every 20 Kilometers.

⚠ All methods (except mutator) must be accessible in a fluent manner.

### Notions

- [Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)
- [Accesseurs & Mutateurs](http://fyligrane.fr/3_php/12_POO%20:%20premiers%20pas/5_Accesseurs%20et%20mutateurs.html)
- [Fluent methods](https://smbjorklund.no/php-method-chaining-fluent-interface)
