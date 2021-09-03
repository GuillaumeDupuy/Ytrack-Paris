### Distance calculator 🚀

### Explanations

To define a static method, you place the static keyword in front of the function keyword as follows:

```php
<?php

 class MyClass
 {
	public static function staticMethod()
	{
	     // Static method code...
	}
 }
```

Since a static method is bound to a class, and not to an individual instance of the class, you cannot access $this inside the method. However, you can access a special variable called self.

The variable `self` designates the current class.

The following shows how to call a static method from inside the class:

```php
self::staticMethod(arguments);
```

To call a static method from outside the class, you use the following syntax:

```php
className::staticMethod(arguments);
```

Example :

```php
MyClass::staticMethod();
```

### Instructions

Create a `Geolocation` class.

In this class create a static method `fromGeoPoints` which will calculate the distance in two geographic coordinates.

The returned result will be a float with the distance in `kilometers`

⚠ The result must be rounded off to one decimal place.

Example :

```php
<?php

$calc = Geolocation::fromGeoPoints(40.76, -73.984, 38.89, -77.032); // 333.09
```

### Notions

-   [php.net/manual/en/language.oop5.static.php](https://www.php.net/manual/en/language.oop5.static.php)
