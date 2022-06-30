# Simple method

## Instructions

Reuse the file `base_spaceships.py` and the class `Spaceship`.

Create a method `take_damages` that should take an integer parameter `damage`.

**Specifications:**

* This method should subtract the given damage value to the ship defense.
* The minimum value for ship defense is zero
* If ship defense fall to zero, pass `is_alive` to `False`


## Usage

Here is a possible `test.py` to test your functions:

```python
from base_spaceships import Spaceship

if __name__ == '__main__':
    uss_enterprise = Spaceship(attack=100, defense=1500)
    uss_enterprise.take_damages(2000)
    print(uss_enterprise.defense)
    print(uss_enterprise.is_alive)
```

```bash
$ python test.py
0
False
```


## Notions

* [classes and methods](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7195400-ecrivez-une-classe-python#/id/r-7197158)
