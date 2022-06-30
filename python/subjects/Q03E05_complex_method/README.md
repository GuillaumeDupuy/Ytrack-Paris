# A more complex method

## Instructions

Reuse the file `base_spaceships.py` and the class `Spaceship`.

Create a new method `fire_on` in `Spaceship` class.

This method should take another spaceship as parameter and apply damages on it.
The amount of applied damages is equal to attacker `Spaceship.attack` attribute.


## Usage

Here is a possible `test.py` to test your functions:

```python
from base_spaceships import Spaceship

if __name__ == '__main__':
    tie_fighter = Spaceship(50, 300)
    millennium_falcon = Spaceship(350, 900)
    
    tie_fighter.fire_on(millennium_falcon)
    print(millennium_falcon.defense)
    print(millennium_falcon.is_alive)
    
    millennium_falcon.fire_on(tie_fighter)
    print(tie_fighter.defense)
    print(tie_fighter.is_alive)
```

```bash
$ python test.py
850
True
0
False
```


## Notions

You know everything to do it ;)
