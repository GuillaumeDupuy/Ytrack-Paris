### That's anonymous

#### Explanations

#### Anonymous function

When you define a function, you specify a name for it. Later you can call the function by name.

For example, to define a function that multiplies two numbers, you can do the following :

```php
<?php

function multiply(int|float $x, int|float $y): int|float
{
    return $x * $y;
}
```

The multiply () function accepts two arguments and returns the result. To call the multiply () function, you pass it the arguments like this :

```php
<?php

multiply(10, 20);
```

In this example, multiply () is a named function. And you can reuse it as many times as you want.

Besides named functions, PHP allows you to define `anonymous` functions.

An anonymous function is a function that has no name.

The following example defines an anonymous function that multiplies two numbers :

```php
<?php

function (int|float $x, int|float $y): int|float
{
    return $x * $y;
};
```

Since the function has no name, you must end it with a semicolon (;) because PHP treats it as an expression.

This anonymous function is not at all useful because you cannot use it as a named function.

To use an anonymous function, you must assign it to a variable and call the function through the variable.

The following example assigns the anonymous function to the $multiply variable :

```php
<?php

$multiply = function (int|float $x, int|float $y): int|float {
    return $x * $y;
};
```

And this calls the anonymous function via the variable $multiply:

```php
<?php

echo $multiply(10, 20);
```

#### Scope of anonymous functions

By default, an anonymous function cannot access variables from its parent scope. For example :

```php
<?php

$message = 'Salut';
$say = function () {
    echo $message;
};

$say();
```

PHP return :

```
PHP Notice:  Undefined variable: message in ...
```

In this example, the anonymous function tries to access the $ message variable from its parent scope. However, he couldn't. Therefore, PHP returned an error.

To use the variables of the parent scope in an anonymous function, you place the variables in the `use` construct as follows :

```php
<?php

$message = 'Salut';
$say = function () use ($message) {
    echo $message;
};

$say();
```

Now it should work fine.

Note that the $message is passed to the anonymous function by value, not by reference. If you change it inside the anonymous function, the change will not be reflected outside the function. For example :

```php
<?php

$message = 'Hi';

$say = function () use ($message) {
    $message = 'Hello';
    echo $message;
};

$say();

echo $message;
```

In this example, inside the anonymous function, the value of $ message is 'Hi'. However, apart from the anonymous function, the message value remains the same as 'Hello'.

If you want to pass a variable to an anonymous function by reference, you should use the `&` operator as in the following example :

```php
<?php

$message = 'Hi';

// $message passing by reference
$say = function () use (&$message) {
    $message = 'Hello';
    echo $message;
};

$say();

echo $message;
```

Now you see the "Hello" messages twice.

### Instructions

Create a `$today` closure that will return "It is (current month) (current day number), (current year)"

Example : `It is July 29, 2021`

Create a `$isLeapYear` closure which will check if the year passed as a parameter is leap.

### Notions

- [Anonymous functions](https://www.php.net/manual/fr/functions.anonymous.php)
