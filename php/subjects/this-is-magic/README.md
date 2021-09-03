### This is magic

### Explanations

Some functions predefined by the php compiler that run on certain events are called `magic methods` 🧙‍♂️.

Magic methods start with the prefix `__`, for example __construct, __get, __set. There are different types of magic methods in php.

List below :

- __construct: is called when we create an object of our class. Basically this is used to create a constructor in php5.


- __destruct: is called when the object of our class is not defined. It's just the opposite of __construct.


- __get: is called when our object tries to read a property or a variable of the class which is inaccessible or unavailable.


- __set: is called when an object of our class tries to set the value of the property which is really inaccessible or unavailable in our class.


- __isset: __isset methods are triggered when the isset () function is applied to any property of the class that is inaccessible or unavailable.


- __unset: __unset is something the opposite of the isset method. This method is triggered when the unset () function is called on an unreachable or unavailable property of the class.


- __call: __call magic method trigger when we try to call a method or function of the class that is either unreachable or unavailable.


- __callstatic: __callstatic execture when the unreachable or unavailable method is in a static context.


- __sleep: __sleep methods are triggered when we are going to serialize your class object.


- __wakeup: __wakeup runs when we deserialize a class object.


- __toString: __toString runs when you use echo on your object.


- __invoke: __invoke called when we use the object of your class as a function

The above magic php methods execute when certain specific events occur on your class object.

For example, if you just echo your object, the __toString method fires.

### Instructions

Create a class named `Magic` and implement the following magic methods in it :

- __construct
- __destruct
- __get
- __set
- __isset
- __toString

In each of its methods, implement an echo which will indicate the use of each method.

Also create a public property named `card` which will be of type string and which will have the default value : 'As'

### Notions

- [Magic methods](https://www.php.net/manual/en/language.oop5.magic.php)
