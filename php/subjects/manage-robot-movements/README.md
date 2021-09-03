### Manage robot movements

### Instructions

Robot testers have called for an easier way to control robots remotely. They would like to enter a list of characters corresponding to the desired movements. For example : 'RRLFBF'.

```
Conversion table :
----------------
R | RIGHT
L | LEFT
F | FRONT
B | BACKWARDS
```

Create a `manageMovements` function which takes a string of characters among R, L, F, B and returns an array containing the list of instructions to give to the robot.

**Warning** if the user typed a duplicate statement (RR, LL, FF, BB), on the second statement, for example, specify 'RIGHT AGAIN'.

### Notions

- [Associative Arrays](https://www.w3schools.com/php/php_arrays_associative.asp)
