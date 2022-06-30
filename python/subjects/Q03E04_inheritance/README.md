# Inheritance

## Instructions

Reuse the file `base_spaceships.py` and the class `Spaceship`.

Create 2 new classes in this file:

* `Battleship`
* `Fighter`

Both should inherit from `Spaceship` and do nothing more.

## Usage

Here is a possible `test.py` to test your functions:

```python
from base_spaceships import Battleship, Fighter

if __name__ == '__main__':
    x_wing = Fighter(attack=200, defense=800)
    print(x_wing.attack)
    print(x_wing.defense)
```

```bash
$ python test.py
200
800
```


## Notions

* [Inheritance (notions)](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7196180-appliquez-l-heritage-dans-votre-code-python)
* [Inheritance](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7196232-ecrivez-une-sous-classe-en-python)
* [Inheritance (video)](https://youtu.be/UJhWrQZUe9I)
