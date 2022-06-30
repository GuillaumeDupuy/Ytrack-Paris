# Simple class

The purpose of the 2 last quests is creating a space war strategy game. In this quest  we focus on space battle system.

First, we need some space ships.

## Instructions

Create a file `base_spaceships.py` and a class `Spaceship` with 3 attributes:

* `is_alive`, default to `True`
* `attack`, default to `0`
* `defense`, default to `0`


## Usage

Here is a possible `test.py` to test your functions:

```python
from base_spaceships import Spaceship

if __name__ == '__main__':
    print(Spaceship().is_alive)
    print(Spaceship().attack)
    print(Spaceship().defense)
```

```bash
$ python test.py
True
0
0
```


## Notions

* [Understand objects](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7197146-comprenez-la-programmation-orientee-objet)
* [Classes (video)](https://youtu.be/dkJjidsg15c)
* [Classes (short)](https://www.w3schools.com/python/python_classes.asp)
* [Classes (long)](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7195400-ecrivez-une-classe-python)
