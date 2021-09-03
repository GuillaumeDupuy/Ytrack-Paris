### What month is it ?

### Explanations

The `switch` statement is equivalent to a series of` if` structures.

It compares a variable to a large number of different values, and executes different pieces of code depending on the value of that variable.

It is often more reliable, more practical, more "elegant" to use a single switch structure rather than several if structures (In addition, the program will run faster).

#### Syntax :

```php
<?php

$i = 1;

switch ($i) { // Variable to check
    case 0: // First choice
        echo '$i is equal to 0';
        break; // Condition respected so we leave the loop
    case 1: // Second choice
        echo '$i is equal to 1';
        break; // Condition respected so we leave the loop
    case ($i > 10): // Third choice
        echo '$i is greater than 10';
        break; // Condition respected so we leave the loop

     // .... Infini "case" ....
}
```

### Instructions

Create a variable named `$month` which will retrieve the current month as a number.

Examples: January => 1 / February => 2 / November => 11;

Using the `switch` statement, write a script that will display "We are in the month of " + the current month.

### Notions

- [switch](https://www.php.net/manual/fr/control-structures.switch.php)
