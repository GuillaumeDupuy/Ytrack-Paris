### Reduce this callable

### Explanations

#### Callable

The `callable` keyword is used to force a function argument to be a reference to a function.

A `callable` can be one of the following:

- An anonymous function
- A string containing the name of a function
- An array describing a static class method
- An array describing an object method

---

Basic examples :

```php
// This function expects a callable as the first parameter.
function printFormatted(callable $format, string $str) {
  echo $format($str);
  echo PHP_EOL;
}

// Anonymous function
$func = static fn ($str) => substr($str, 0, 5);
printFormatted($func, "Hello World");

// A string containing the name of a function
printFormatted("strtoupper", "Hello World");
```

Output :

```php
Hello
HELLO WORLD
```

---

Examples with an object :

```php
class MyClass
{
  public static function ask(string $str): string
  {
     return $str . "?";
  }

  public function brackets(string $str): string
  {
     return "[$str]";
  }
}

// An array describing a static class method
printFormatted(["MyClass", "ask"], "Hello World");

// An array describing an object method
printFormatted([new MyClass(), "brackets"], "Hello World");
```

Output :

```php
Hello World?
[Hello World]
```

### Instructions

Recreate the native function `array_reduce` that you will name` myArrayReduce`.

Of course you are not allowed to use `array_reduce`.

### Notions

- [Callable](https://www.php.net/manual/fr/language.types.callable.php)
- [php.net/manual/fr/function.array-reduce.php](https://www.php.net/manual/fr/function.array-reduce.php)
