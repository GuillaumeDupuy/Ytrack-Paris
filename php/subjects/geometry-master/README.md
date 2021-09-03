### Geometry master

### Explanations

#### What is an abstract class?

We define an abstract class using the keyword `abstract`. A class defined as abstract cannot **be instantiated**.

Here are some important points about the abstract class and method :

- An abstract class can have methods and properties like any other normal class.
- An abstract class cannot be instantiated, we need to create a child class that extends it, then we can create an object of the child class.
- If a class has even one abstract method, then the class should also be abstract.
- An abstract method is just the declaration where we supply the method name and argument, while the body part is empty.

Don't worry if it's too hard for you to figure out. We will cover all the points step by step with examples, let's first understand how we create an abstract class;).

---

#### Create an abstract class

To declare an abstract class, we need to use the `abstract` keyword before the class name.

Example :

```php
<?php

// abstract class
abstract class Vehicle {
  // abstract function mileage
  abstract public function mileage();
}
```

In the example above, our Vehicle class is an abstract class, which has an abstract method.

> The idea behind creating an abstract class is to force developers to follow a set of guidelines, for example if you want to create a new class that extends our Vehicle class then you will need to provide a definition for the abstract mileage() method, otherwise the child class must also be abstract.
> Therefore, it is mandatory for all child classes to provide a definition for the mileage() method.

---

#### Non-abstract method in abstract class

Any class with even a single abstract method must be declared abstract. But an abstract class can also have non-abstract methods, which can be accessed and used directly by child classes, without overriding them.

Let's extend the example above and include a non-abstract method in our Vehicle class :

```php
<?php
// abstract class
abstract class Vehicule {
    // protected variable
    protected string $name;

    // Non-abstract public function start
    public function start() {
        echo $this->name. " - The car starts... \n";
    }

    // non-abstract public function stop
    public function stop() {
        echo $this->name. " - The car stops... \n";
    }

    // non-abstract public function setName
    public function setName(string $name) {
        $this->name = $name;
    }

    // abstract function mileage
    abstract public function mileage() {}
}
```

In the code above, we added three non-abstract methods, namely `start ()`, `stop ()` and `setName ()` to our abstract `Vehicle` class.

---

#### Inherit from abstract classes

Like any other class, we can also create classes extending abstract classes.

The only difference here is that the child class must provide a definition for the abstract method declared in the abstract parent class.

If the child class does not provide a definition for the abstract method, it must also be defined as an abstract class.

Let's create two child classes inheriting from the Vehicle class and which will have a definition for the abstract method mileage() :

```php
<?php
// Child class 1
class Car extends Vehicle {
    public function mileage() {
        echo "I am a " . $this->name . PHP_EOL;
        echo "My average mileage is between 15 and 22 L/km";
    }
}

// Child class 2
class Motorbike extends Vehicle {
    public function mileage() {
        echo "I am a " . $this->name . PHP_EOL;
        echo "My average mileage is between 35 and 47 L/km";
    }
}
```

As mentioned above, an abstract class cannot have any objects, once we define the appropriate child classes we can create an object for them.

```php
<?php

 $car = new Car();
 $car->setName("Twingo");
 $car->mileage();

 // I am a Twingo
 // My average mileage is between 15 and 22 L/km
```

**Warning ! If you try to create an object of the Vehicle class, you will get an error.**

### Instructions

Create an abstract class named `AbstractGeometry` which will have the following abstract methods :

- area() - calculate the area of the geometric shape
- perimeter() - calculate the perimeter of the geometric shape

Then create a class `Rectangle`,` Square` and `Triangle`.

Each of its classes (Rectangle, Square) must have a constructor which takes as a parameter the width (and the height for the rectangle).

The Triangle class must have a constructor that takes three parameters.

### Notions

- [Abstract class](https://www.php.net/manual/fr/language.oop5.abstract.php)
