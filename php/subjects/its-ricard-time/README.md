### It's ricard time ?

### Explanations

The `do {...} while ()` statement translated as: 'répéter / faire ... tant que' is an alternative to the while () statement.

It is used to test the condition after the first iteration and execution of the first block of instructions.

In the case of the while loop, the condition is examined before the loop while for the do-while loop it is examined at the end. So even if this condition is not true, the loop will run at least once.

![do while](https://i.imgur.com/rrFrxXb.png)

#### Syntax :

```php
<?php

do {
  // Block of instructions;
} while(condition);
```

---

#### Example :

```php
<?php

// Declaration and initialization of the counter
$i = 0;
// Boucle générant la table de multiplication du 8
do {
  echo "8 x ". $i . " = " . ( 8 * $i) . PHP_EOL;
  $i++; // Counter increment
} while($i <= 10);
```

> Note : There are two instructions which allow to modify the execution of loops, `break` and` continue`.

---

#### Break && continue

The break instruction is used to exit the current loop. That is, it directly interrupts the iteration. The loop condition is a condition that is always checked and, in the loop, we use break to exit the loop once we have reached our ends.

`break` also allows to handle more exceptional events, like errors:

- In the event of an error, we exit the loop and display a message.

The second instruction is the `continue` instruction. This instruction allows you to skip the instructions of the current iteration, in order to go directly to the next iteration.

Let us take an example on even numbers. This time, the variable `$i` will be incremented by 1. We will use the continue instruction to avoid odd numbers.

```php
<?php

$i = 0;

do {
  if (!($i % 2)) {
   continue;
  }

  echo $i . "\n";
  $i++;
} while($i < 20);
```

### Instructions

Create a variable named `$nbrRicard`.

Using the `do {...} while ()` statement, write a script that will increment the number of ricard drunk while respecting the following conditions:

- Before each ricard drunk displayed : Come on ricard number + the number of the current ricard
- At the 3rd ricard display: I'll have to stop soon!
- At the 5th ricard display: I am no longer very fresh ...
- At the 7th ricard, stop the loop.

**Warning ! Don't forget to skip a line at the end of each echo.**

> 

### Notions

- [do while](https://www.php.net/manual/fr/control-structures.do.while.php)
