# Object composition

## Instructions

Create a file `fleet.py` in same directory as file `base_spaceships.py` and create a class `Fleet` that take 2 parameters in constructor :

* the fleet name as a string. Save it in instance attribute `name`
* a list of `Spaceships`. Save it in instance attribute `ships`

Add 4 methods :

* `get_all_alive_ships`: get all ships in `ships` attribute that have `is_alive=True`
* `get_alive_battleships`: get all battleships in `ships` attribute that have `is_alive=True`
* `get_alive_fighters`: get all fighters in `ships` attribute that have `is_alive=True`
* `get_report`: return a dictionary that represent the fleet state. Example:

```python
{
    'alive_battleships': 4,
    'alive_fighters': 10,
    'dead_battleships': 1,
    'dead_fighters': 4,
}
```

Then, implement corresponding properties:

* `alive_ships`
* `alive_fighters`
* `alive_battleships`
* `report`

## Usage

Here is a possible `test.py` to test your functions:

```python
from fleet import Fleet
from spaceships import Frigate, Cruiser, Interceptor

if __name__ == '__main__':
    uss_kelvin = Frigate()
    star_fleet = Fleet('Starfleet', [uss_kelvin, Cruiser(), Interceptor(), Cruiser()])
    print(star_fleet.name)
    print(len(star_fleet.ships))

    uss_kelvin.is_alive = False
    print(len(star_fleet.get_alive_battleships()))
    print(star_fleet.get_report())

    print(star_fleet.report == star_fleet.get_report())
    print(star_fleet.alive_fighters == star_fleet.get_alive_fighters())
```

```bash
$ python test.py
Starfleet
4
2
{'alive_battleships': 2, 'alive_fighters': 1, 'dead_battleships': 1, 'dead_fighters': 0}
True
True
```

## Notions

* [Object collections](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7196587-utilisez-des-objets-dans-des-collections)
* [Properties](https://www.geeksforgeeks.org/python-property-decorator-property/)
