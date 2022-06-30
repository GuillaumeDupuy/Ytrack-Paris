# Simple battle simulator

## Instructions

Create file `battle_simulator.py` in same directory as files `base_spaceships.py` and `spaceships.py` and create a class `Simulator` with the "private" method `_duel_fight` that dose return nothing. This method should take 2 parameters, both are `Spaceship`:

* attacker ship
* defender ship

**Specifications:**

* This method should simulate fight between 2 spaceships
* The attacker fire on defender at first
* If defender survived to the attack he fire on the attacker, else the fight ending


## Usage

Here is a possible `test.py` to test your functions:

```python
from battle_simulator import Simulator
from spaceships import Interceptor, Frigate, Bomber

if __name__ == '__main__':
    tie_fighter = Interceptor()
    y_wing = Bomber()

    simulator = Simulator()

    simulator._duel_fight(tie_fighter, y_wing)
    print(tie_fighter.defense)
    print(y_wing.defense)

    tentative_iv = Frigate()
    tie_fighter = Interceptor()

    simulator._duel_fight(tentative_iv, tie_fighter)
    print(tentative_iv.defense)
    print(tie_fighter.is_alive)
```

```bash
$ python test.py
850
1640
2500
False
```


## Notions

* [Pass argument by reference or by value ?](https://www.geeksforgeeks.org/pass-by-reference-vs-value-in-python/)
* [Does private methods exists in pyhton ?](https://codefather.tech/blog/private-methods-python/)
