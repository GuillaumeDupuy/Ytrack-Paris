# Custom exception

## Instructions

We have some ships and space dock. Now, we will create a space yard to build new space ships.

Create file `exceptions.py` with class `ResourceError` that simply extend `Exception` and do nothing more.

Create file `space_yard.py` with class `SpaceYard`. It should take a `SpaceDock` instance in constructor and store it in an instance attribute.

Create a method `build_ship` that return nothing and expect 5 arguments:

* `fleet_name` as string, the name of an existing (or not) fleet in space dock. After new ships created, they will be stored to that fleet
* `ship_class` as Spaceship subclass (ex: INterceptor, Destroyer...). Type of new ships
* `quantity` as integer. The number of desired ships
* `available_metal` as integer. User resource available stock
* `available_crystal` as integer. User resource available stock

Given a `ship_class` this method should check if there is enough resource to build ships (according to ship requirements defined in first exercise). raise a ResourceError if there is not enough resource. with following error message (examples):

```python
"Not enough metal to build 12 Interceptor"
"Not enough crystal to build 3 Cruiser"
"Not enough metal to build 5 Destroyer"
```

You should adapt resource and ship name in error message.

## Usage

Here is a possible `test.py` to test your functions:

```python
from space_yard import SpaceYard
from spaceships import Interceptor
from dock import SpaceDock

if __name__ == '__main__':
    dock = SpaceDock()
    yard = SpaceYard(dock)
    
    yard.build_ship('default', Interceptor, 3, 4000, 600)
    print(dock)
    
    yard.build_ship('default', Interceptor, 3, 2000, 600)
```

```bash
$ python test.py
default: 3 ships
Traceback (most recent call last):
    ...
exceptions.ResourceError: Not enough metal to build 3 Interceptors
```

## Notion

* [get a class name](https://www.geeksforgeeks.org/python-program-to-get-the-class-name-of-an-instance/)
* [create custom exceptions](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7197031-gerez-les-exceptions#/id/r-7197007)
