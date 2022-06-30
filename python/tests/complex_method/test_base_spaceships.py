import pytest

from base_spaceships import Spaceship

attack, defense = 100, 1000


@pytest.fixture
def spaceship():
    return Spaceship(attack, defense)


@pytest.fixture
def other_ship():
    return Spaceship(attack, defense)


class TestSpaceship:
    def test_fire_on(self, spaceship, other_ship):
        spaceship.fire_on(other_ship)
        assert other_ship.defense == 900, f'your ship should inflict {attack} damages to other ship'

    def test_fire_on_first_ship_should_be_unchanged(self, spaceship, other_ship):
        spaceship.fire_on(other_ship)
        assert spaceship.attack == attack and spaceship.defense == defense and spaceship.is_alive, 'The space that fire on the other must be unchanged'
    
    def test_fire_on_should_be_destroyed(self, spaceship, other_ship):
        spaceship.attack = 1500
        spaceship.fire_on(other_ship)
        assert other_ship.defense == 0, 'Incorrect defense value for attacked ship. 0 expected'
        assert not other_ship.is_alive, 'The attacked spaceship should be destroyed'
    
    def test_fire_on_should_be_just_destroyed(self, spaceship, other_ship):
        spaceship.attack = 1000
        spaceship.fire_on(other_ship)
        assert other_ship.defense == 0, 'Incorrect defense value for attacked ship. 0 expected'
        assert not other_ship.is_alive, 'The attacked spaceship should be destroyed'
    
    def test_constructor(self, spaceship):
        assert spaceship.attack == attack, 'Pass attack as constructor first argument'
        assert spaceship.defense == defense, 'Pass defense as constructor second argument'
        assert spaceship.is_alive, 'is_alive should be always True'

    def test_take_damages(self, spaceship):
        spaceship.take_damages(100)
        assert spaceship.defense == 900, 'Incorrect defense value'
        assert spaceship.is_alive, 'This spaceship is still alive'

    def test_take_damages_should_be_destroyed(self, spaceship):
        spaceship.take_damages(1500)
        assert spaceship.defense == 0, 'Incorrect defense value. 0 expected'
        assert not spaceship.is_alive, 'This spaceship should be destroyed'

    def test_take_damages_should_be_just_destroyed(self, spaceship):
        spaceship.take_damages(1000)
        assert spaceship.defense == 0, 'Incorrect defense value. 0 expected'
        assert not spaceship.is_alive, 'This spaceship should be destroyed'
