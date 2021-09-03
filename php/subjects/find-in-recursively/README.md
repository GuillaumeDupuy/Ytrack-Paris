### Find in recursively

### Instructions

Create a `findIn` function that retrieves the value of a key in an array or false if no key with that name.

`findIn` with the following available parameters:

- The value key to find : `string`
- The array : `array`

**Use recursion !!!**

Use this array:

```php
$tab = [
    "name" => "forIn",
    "type" => "function",
    "arguments" => [
        "firstParam" => [
            "paramType" => "string",
            "description" => "the value key to find"
        ],
        "secondParam" => "array"
    ],
    "return" => "string or bool",
];
```

Example :

```php
findIn('name', $tab) // forIn
findIn('description', $tab) // the value key to find
findIn('secondParam', $tab) // array
findIn('yeah', $tab) // false
```

### Notions

- [Recursive function](https://thisinterestsme.com/php-recursion-example/)
- [Associative Arrays](https://www.w3schools.com/php/php_arrays_associative.asp)
