import pytest

from base_spaceships import Spaceship

attack, defense = 100, 1000


@pytest.fixture
def spaceship():
    return Spaceship(attack, defense)


class TestSpaceship:
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
