# Numerical operations: the return!

## Instructions

Create a file `numerical_operations.py` (you can reuse the existing one) and implements following functions:

* `modulo(a, b)`
* `divide(a, b)`
* `integer_division(a, b)`

We assume that `a` and `b` are numbers (`int` or `float`).

**Caution**

Be careful: a division by zero risks destroying the universe! You should think about it! In this case, your functions should **return `0`**.

## Usage

Here is a possible `test.py` to test your functions:

```python
import numerical_operations

if __name__ == '__main__':
    print(numerical_operations.modulo(10, 3))
    print(numerical_operations.divide(10, 3))
    print(numerical_operations.divide(10, 0))
    print(numerical_operations.integer_division(10, 3))
```

```bash
$ python test.py
1
3.3333333333333335
0
3
```

## Notions

* [conditions](https://www.w3schools.com/python/python_conditions.asp)
