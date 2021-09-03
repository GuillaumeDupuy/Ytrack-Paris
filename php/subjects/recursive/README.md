### Recursive

### Explanations

A recursive function is a function that calls itself.

They are generally used to deal with a case with an infinite number of possibilities and stop when the exit condition is reached.

Example :

```php
function recursive($arg1, $arg2, ...)
{
    // Start code
    // ...
    recursive($arg1 + 2, $arg2 - 1, ...);
    // ...
    // End code
}
```

> ⚠ Watch out for infinite loops

### Instructions

Create a `factorial` function which calculates and return the factorial of the number passed as an argument.

`factorial` with the following available parameters:

- The number : `int`

### Notions

- [Recursive function](https://thisinterestsme.com/php-recursion-example/)
- [en.wikipedia.org/wiki/Factorial](https://en.wikipedia.org/wiki/Factorial)
