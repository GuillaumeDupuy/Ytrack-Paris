import random

from base_spaceships import Spaceship


class TestSpaceship:
    def test_constructor(self):
        attack = random.randint(100, 1000)
        defense = random.randint(1000, 5000)
        spaceship = Spaceship(attack, defense)
        
        assert spaceship.attack == attack, 'Pass attack as constructor first argument'
        assert spaceship.defense == defense, 'Pass defense as constructor second argument'
        assert spaceship.is_alive, 'is_alive should be always True'
