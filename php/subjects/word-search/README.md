### Word search

### Instructions

I want to be a crossword master !!
But for that I must first succeed in finding words in a table ... OK LET'S GO!

Create a `searchWord` function which will search for a string of characters in a given array.

`searchWord` with the following available parameters :

- The board: `array`
- The string to search for: `string`

Use this array :

```php
$board = [
    ['a', 'b', 'c', 'd'],
    ['d', 'k', 'l', 'm'],
    ['m', 'f', 'b', 's']
];
```

Example :

```php
// Word can be constructed as letters from adjacent cells sequentially
// where the 'adjacent' cells are the neighboring ones horizontally or vertically
searchWord($board, 'abcd'); // true
searchWord($board, 'abcl'); // true
searchWord($board, 'admfbl'); // true

// It is not allowed to use the same letter twice
searchWord($board, 'abcc'); // false
searchWord($board, 'abcdc'); // false
searchWord($board, 'dklml'); // false
```

### Notions

- Multidimensional array
- [php.net/manual/en/language.types.array.php](https://www.php.net/manual/en/language.types.array.php)
- [php.net/manual/en/function.array-keys.php](https://www.php.net/manual/en/function.array-keys.php)
- [php.net/manual/en/function.in-array.php](https://www.php.net/manual/en/function.in-array.php)
