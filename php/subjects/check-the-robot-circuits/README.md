### Check the robot circuits

### Instructions

Scientists have successfully implemented prime numbers in the robot, so that they can detect where the bugs are coming from. In fact, the robot emits a number when it has a bug. To detect the location of the bug, we find by which prime numbers it is divisible and we refer to the following table :

```
DEBUG TABLE
--------------
2       |   Left arm
3       |   Right arm
5       |   Motherboard
7       |   Processor
11      |   Zip Defluxer
13      |   Motor
```

Create a function named `checkCircuits`, taking an `int` as a parameter and returning an `array` as below.

Examples :

- 9 : divisible by 3 only, the function must return an array with 1 element : Right arm
- 12 : divisible by 2 and 3, the function must return an array with 2 elements : Left arm et Right arm.

### Notions

- [Associative Arrays](https://www.w3schools.com/php/php_arrays_associative.asp)
