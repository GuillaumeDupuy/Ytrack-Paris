### It's closure time

### Instructions

Create an `f` function that returns an associative array containing 3 elements. The elements (in that order) are `'+'`, `'-'`, and `'*'`. The values ​​for each element are references for objects that represent functions.

- The first is able to take two numbers and return their sum.
- The second is able to take two numbers and restore their difference.
- The third is able to take two numbers and return their multiplications.

**Be careful, the function f does not take any parameters** !!

**Trick** : A function can return another function. Using anonymous functions, you'll see it's cool :D

**Trick 2** (because we're cool): Here are 2 ways to declare an anonymous function

```php
static fn () => ....

function () { return ... }
```

### Notions

- [Associative Arrays](https://www.w3schools.com/php/php_arrays_associative.asp)
- [Anonymous functions](https://www.php.net/manual/fr/functions.anonymous.php)
