# Dataclass

## Instructions

From now, we have ships and a battle simulator. We now need a space yard to build our ships and fleets.

During this final quest, you will reuse some of quest 3 code and files:

* `base_spaceships.py`
* `fleet.py`
* `spaceships.py`

Here, we will define the cost of each space ship. There are 2 different resources: **metal** and **crystal**.

Create file `requirements.py` and a **dataclass** `Requirements` with following attributes:

* `metal`: the amount of metal required to build a ship, as integer
* `crystal`: the amount of crystal resource to build a ship, an integer too

You **must** use a dataclass to perform it (instead of a standard class, see notions).

Then, add a new `requirements: Requirements` **class** attribute (see notions) to class `Spaceship` (file `base_spaceships.py`) without default value.

Define resources requirements for each ship in `spaceships.py` file, as follow:

* Interceptor: 1 000 metal, 200 crystal
* Bomber: 2 500 metal, 400 crystal
* Frigate:  10 000 metal, 10 000 crystal
* Cruiser: 25 000 metal, 10 000 crystal
* Destroyer: 35 000 metal, 20 000 crystal

## Usage

Here is a possible `test.py` to test your functions:

```python
from base_spaceships import Spaceship
from spaceships import Interceptor, Frigate, Bomber, Destroyer, Cruiser

if __name__ == '__main__':
    print(Interceptor.requirements.metal)
    print(Bomber.requirements.crystal)
    print(Cruiser.requirements.metal)
```

```bash
$ python test.py
1000
400
25000
```

## Notion

* [dataclasses basics](https://www.pythontutorial.net/python-oop/python-dataclass/)
* [dataclasses full documentation](https://docs.python.org/3/library/dataclasses.html)
* [class attribute vs instance attribute](https://realpython.com/lessons/class-and-instance-attributes/)
