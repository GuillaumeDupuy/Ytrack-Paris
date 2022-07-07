# Enum

## Instructions

Create file `ship_types.py` and Enum `ShipType`. The enum should map spaceships name (ex. INTERCEPTOR, CRUISER...) with corresponding classes (`Interceptor`, `Cruiser`...).

Each enum item name must be in upper case.

## Usage

Here is a possible `test.py` to test your functions:

```python
from ship_types import ShipType

if __name__ == '__main__':
    print(ShipType.CRUISER)
    print(ShipType.CRUISER.name)
    print(ShipType.CRUISER.value)
```

```bash
$ python test.py
ShipType.CRUISER
CRUISER
<class 'spaceships.Cruiser'>
```

## Notion

* [enum](https://docs.python.org/fr/3/library/enum.html)
