# Multiple inheritance

## Instructions

Reuse the file `spaceships.py`. Create 2 classes:

* `BattleshipKiller` that implement method fire_one witch inflict 2 times damages to battleships
* `FighterKiller` that implement method fire_one witch inflict 2 times damages to fighters

Then, remove `fire_on` method from previous classes (Interceptor, Cruiser...) and inherits from those 2 classes to reproduce the same behavior (Interceptor x2 against fighter, Bomber x2 against battleships...).


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

* [Multiple inheritance](https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python/7196419-utilisez-les-hierarchies-d-heritage-et-l-heritage-multiple#/id/r-7196405)
