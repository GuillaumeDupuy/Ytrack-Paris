import pytest

from spaceships import Interceptor, Bomber, Cruiser, Frigate, Destroyer
from base_spaceships import Battleship, Fighter


@pytest.fixture
def other_fighter():
    return Fighter(100, 1000)


@pytest.fixture
def other_battleship():
    return Battleship(500, 4000)


class TestInterceptor:
    def test_should_inherited(self):
        is_inherited = issubclass(Interceptor, Fighter)
        assert is_inherited, 'Interceptor class should be inherited from Fighter class'
        
    def test_should_have_correct_stats(self):
        ship = Interceptor()
        assert ship.attack == 180
        assert ship.defense == 1000
        assert ship.is_alive
        
    def should_inflict_more_damages_to_fighters(self, other_fighter):
        ship = Interceptor()
        ship.fire_on(other_fighter)
        assert other_fighter.defense == 640, 'An interceptor should be inflict 2 times more damages to other fighter ships'

    def test_should_inflict_standard_damages_to_battleships(self, other_battleship):
        ship = Interceptor()
        ship.fire_on(other_battleship)
        assert other_battleship.defense == 3820, 'An interceptor should inflict standard damages to battleships'


class TestBomber:
    def test_should_inherited(self):
        is_inherited = issubclass(Bomber, Fighter)
        assert is_inherited, 'Bomber class should be inherited from Fighter class'
        
    def test_should_have_correct_stats(self):
        ship = Bomber()
        assert ship.attack == 150
        assert ship.defense == 2000
        assert ship.is_alive
        
    def test_should_inflict_more_damages_to_battleships(self, other_battleship):
        ship = Bomber()
        ship.fire_on(other_battleship)
        assert other_battleship.defense == 3700, 'A bomber should be inflict 2 times more damages to battleships'

    def test_should_inflict_standard_damages_to_fighters(self, other_fighter):
        ship = Bomber()
        ship.fire_on(other_fighter)
        assert other_fighter.defense == 850, 'A bomber should inflict standard damages to other fighters'


class TestCruiser:
    def test_should_inherited(self):
        is_inherited = issubclass(Cruiser, Battleship)
        assert is_inherited, 'Cruiser class should be inherited from Battleship class'
        
    def test_should_have_correct_stats(self):
        ship = Cruiser()
        assert ship.attack == 800
        assert ship.defense == 3000
        assert ship.is_alive
        
    def test_should_inflict_standard_damages_to_fighters(self, other_fighter):
        ship = Cruiser()
        ship.fire_on(other_fighter)
        assert other_fighter.defense == 200, 'A cruiser should inflict standard damages to fighters'

    def test_should_inflict_standard_damages_to_battleships(self, other_battleship):
        ship = Cruiser()
        ship.fire_on(other_battleship)
        assert other_battleship.defense == 3200, 'A cruiser should inflict standard damages to other battleships'


class TestFrigate:
    def test_should_inherited(self):
        is_inherited = issubclass(Frigate, Battleship)
        assert is_inherited, 'Frigate class should be inherited from Battleship class'
        
    def test_should_have_correct_stats(self):
        ship = Frigate()
        assert ship.attack == 500
        assert ship.defense == 2500
        assert ship.is_alive
        
    def should_inflict_more_damages_to_fighters(self, other_fighter):
        ship = Frigate()
        ship.fire_on(other_fighter)
        assert other_fighter.defense == 0, 'A frigate should be inflict 2 times more damages to fighters'

    def test_should_inflict_standard_damages_to_battleships(self, other_battleship):
        ship = Frigate()
        ship.fire_on(other_battleship)
        assert other_battleship.defense == 3500, 'A frigate should inflict standard damages to other battleships'


class TestDestroyer:
    def test_should_inherited(self):
        is_inherited = issubclass(Destroyer, Battleship)
        assert is_inherited, 'Destroyer class should be inherited from Battleship class'
        
    def test_should_have_correct_stats(self):
        ship = Destroyer()
        assert ship.attack == 650
        assert ship.defense == 5000
        assert ship.is_alive
        
    def test_should_inflict_more_damages_to_battleships(self, other_battleship):
        ship = Destroyer()
        ship.fire_on(other_battleship)
        assert other_battleship.defense == 2700, 'A destroyer should be inflict 2 times more damages to other battleships'

    def test_should_inflict_standard_damages_to_fighters(self, other_fighter):
        ship = Destroyer()
        ship.fire_on(other_fighter)
        assert other_fighter.defense == 350, 'A destroyer should inflict standard damages to fighters'
