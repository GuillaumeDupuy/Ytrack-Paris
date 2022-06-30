# Random battle simulator

## Instructions

In this exercise, we going to simulate a fight between many ships. Reuse file `battle_simulator.py` and class `Simulator`. Create the "private" method `_simulate_fight` that take as parameters 2 list of spaceships:

* attacker spaceships at first
* defender ones at second

**Specifications:**

* for **each alive** attacker ships
* choose randomly one **alive** defender ship
* fight with him (use previous exercise code for that)
* do nothing if attacker or defender ships list is empty


## Usage

Here is a possible `test.py` to test your functions:

```python
import random

from battle_simulator import Simulator
from spaceships import Interceptor, Frigate, Bomber, Destroyer

if __name__ == '__main__':
    random.seed(100)

    attackers = [Interceptor(), Interceptor(), Frigate()]
    defenders = [Bomber(), Interceptor(), Destroyer()]

    simulator = Simulator()

    simulator._simulate_fight(attackers, defenders)
    print(attackers[0].is_alive)
    print(attackers[1].is_alive)
    print(attackers[2].is_alive)
    print(defenders[0].is_alive)
    print(defenders[1].is_alive)
    print(defenders[2].is_alive)
```

```bash
$ python test.py
True
True
True
True
False
True
```


## Notions

* [`ramdom` built-in module](https://docs.python.org/3/library/random.html#functions-for-sequences)
