# Special methods part 1

## Instructions

Special methods (aka dunder methods, aka magics methods) are methods python use in background to change a class behavior.
For example, the `__init__` method (aka constructor) is a special method. User does not call it directly. Python interpreter call it automatically after object instantiation. All special methods starts and ending with double underscore.

Go to file `fleet.py` and override `__add__` special method in class `Fleet`.
Use that method to simply add new ships (as single Spaceship instance or list of Spaceship) in existing fleet with `+` operator (see usage bellow).

## Usage

Here is a possible `test.py` to test your functions:

```python
from fleet import Fleet
from spaceships import Interceptor, Frigate

if __name__ == '__main__':
    fighter_1 = Interceptor()
    fighter_2 = Interceptor()
    fighter_3 = Interceptor()
    tentive_iv = Frigate()

    alpha_fleet = Fleet('alpha group', [fighter_1])
    print(len(alpha_fleet.ships))

    alpha_fleet + fighter_2
    print(len(alpha_fleet.ships))

    alpha_fleet + [fighter_3, tentive_iv]
    print(len(alpha_fleet.ships))
```

```bash
$ python test.py
1
2
4
```

## Notion

* [dunder methods basics](https://towardsdatascience.com/a-guide-to-pythons-dunder-methods-3b8104fce335)
* [`__add__`](https://docs.python.org/3/reference/datamodel.html#object.__add__)
