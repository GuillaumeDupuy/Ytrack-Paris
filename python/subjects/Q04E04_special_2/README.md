# Special methods part 2

## Instructions

We now need a space dock to store our fleets and ships.

Create file `dock.py` and class `SpaceDock` with following constructor:

```python
def __init__(self) -> None:
    # the fleets instance attribute store all user fleets in a dict by name.
    self.fleets = {'default': Fleet('default', [])}
```

Override some special methods to implements following behavior to this class:

* access to given fleet by name: `default_fleet = dock['default']`
* if fleet doesn't exist, it should create a new empty one (with empty ship array): `new_fleet = dock['this fleet does not exist yet']`
* create a new fleet (only if not exists yet) with some list of ships: `dock['my new fleet'] = [Intercpetor(), Intercpetor(), Frigate()]`
* delete a fleet with `del` keyword: `del dock['a fleet']`
* customize default string representation: `str(dock)` or `print(dock)` should return/print `default: 0 ships, my new fleet: 3 ships, this fleet does not exist yet: 0 ships`

## Usage

Here is a possible `test.py` to test your functions:

```python
from dock import SpaceDock
from spaceships import Interceptor, Frigate

if __name__ == '__main__':
    dock = SpaceDock()

    default_fleet = dock['default']
    print(default_fleet.ships)

    new_fleet = dock['this fleet does not exist yet']
    print(new_fleet.name, new_fleet.ships)

    dock['my new fleet'] = [Interceptor(), Interceptor(), Frigate()]
    print(dock['my new fleet'].name, len(dock['my new fleet'].ships))

    print(dock)
    
    del dock['this fleet does not exist yet']
    print(dock)
```

```bash
$ python test.py
[]
this fleet does not exist yet []
my new fleet 3
default: 0 ships, this fleet does not exist yet: 0 ships, my new fleet: 3 ships
default: 0 ships, my new fleet: 3 ships
```

## Notion

* [`__getitem__`](https://docs.python.org/3/reference/datamodel.html#object.__getitem__)
* [`__setitem__`](https://docs.python.org/3/reference/datamodel.html#object.__setitem__)
* [`__delitem__`](https://docs.python.org/3/reference/datamodel.html#object.__delitem__)
* [`__str__`](https://docs.python.org/3/reference/datamodel.html#object.__str__)
