# Handle exceptions

## Instructions

Go to file `ship_types.py` and create a function `get_ship_class_by_name` that take a ship name (string) as argument.

This function should return correct `ShipType` enum item given a ship name. Ex: ship name is `"interceptor"`, the function should return `ShipType.INTERCEPTOR`

If ship does not exists in enum, raise a `ValueError`


## Usage

Here is a possible `test.py` to test your functions:

```python
from ship_types import get_ship_class_by_name, ShipType

if __name__ == '__main__':
    print(get_ship_class_by_name('interceptor') == ShipType.INTERCEPTOR)
    print(get_ship_class_by_name('intERCEptoR') == ShipType.INTERCEPTOR)
```

```bash
$ python test.py
True
True
```

## Notion

* [access to an enum item by name](https://docs.python.org/fr/3/library/enum.html#programmatic-access-to-enumeration-members-and-their-attributes)
* [Handle exceptions](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7197031-gerez-les-exceptions)
