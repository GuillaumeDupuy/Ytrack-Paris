### Foreach letters

### Explanations

The `foreach` loop provides an easy way to iterate through arrays.

foreach only works for arrays and objects, and will throw an error if you attempt to use it on a variable of a different type or an uninitialized variable.

There are two syntaxes:

```php
foreach (iterable_expression as $value) {
    // Code...
}

foreach (iterable_expression as $key => $value) {
    // Code...
}
```

### Instructions

Using a foreach statement write a program displaying the alphabet.

**Trick** : used the `range` function.

Expected result :

```php
A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z
```

**The script should not be more than 5 lines**

### Notions

- [php.net/manual/en/control-structures.foreach.php](https://www.php.net/manual/en/control-structures.foreach.php)
