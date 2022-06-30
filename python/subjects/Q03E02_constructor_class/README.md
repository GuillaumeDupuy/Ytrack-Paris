# Constructor

## Instructions

Reuse the file `base_spaceships.py` and the class `Spaceship`.

The class should be instantiable like this:

```python
Spaceship(attack=100, defense=1500)
```

You will need to write a constructor for that.

The `is_alive` attribute must remain `True`.


## Usage

Here is a possible `test.py` to test your functions:

```python
from base_spaceships import Spaceship

if __name__ == '__main__':
    uscss_nostromo = Spaceship(attack=100, defense=1500)
    print(uscss_nostromo.is_alive)
    print(uscss_nostromo.attack)
    print(uscss_nostromo.defense)
```

```bash
$ python test.py
True
100
1500
```


## Notions

* [Constructor]([#](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7195400-ecrivez-une-classe-python#/id/r-7195466))
