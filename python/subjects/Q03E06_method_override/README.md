# Method override

## Instructions

Create a file `spaceships.py` in same directory as file `base_spaceships.py` and create following classes with characteristics:

* `Interceptor` inherited from `Fighter`
  * attack = 180 and defense = 1000
  * double attack against all fighters

* `Bomber` inherited from `Fighter`
  * attack = 150 and defense = 2000
  * double attack against all battleships

* `Cruiser` inherited from `Battleship`
  * attack = 800 and defense = 3000

* `Frigate` inherited from `Battleship`
  * attack = 500 and defense = 2500
  * double attack against all fighters

* `Destroyer` inherited from `Battleship`
  * attack = 650 and defense = 5000
  * double attack against all battleships

All classes must be buildable without parameter (ex: `Cruiser()` instead of `Cruiser(100, 3000)`).

To do that, you should override `__init__` and `fire_on` methods.


## Usage

Here is a possible `test.py` to test your functions:

```python
from spaceships import Interceptor, Bomber, Destroyer

if __name__ == '__main__':
    tie_interceptor = Interceptor()
    y_wing = Bomber()

    print(tie_interceptor.attack)
    print(y_wing.defense)

    tie_interceptor.fire_on(y_wing)
    print(y_wing.defense)

    venator = Destroyer()
    print(venator.defense)
    tie_interceptor.fire_on(venator)
    print(venator.defense)
```

```bash
$ python test.py
180
2000
1640
5000
4820
```


## Notions

* [Overriding methods](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7196334-surchargez-les-methodes-en-python)
* [`isinstance` built-in function](https://www.w3schools.com/python/ref_func_isinstance.asp)
