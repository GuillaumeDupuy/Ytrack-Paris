import random

import pytest

from fleet import Fleet
from base_spaceships import Fighter, Battleship

dead_fighter_1 = Fighter(10, 300)
dead_fighter_1.is_alive = False

dead_fighter_2 = Fighter(50, 600)
dead_fighter_2.is_alive = False

dead_battleship = Battleship(530, 1260)
dead_battleship.is_alive = False

fighter_1 = Fighter(100, 1000)
fighter_2 = Fighter(150, 1200)
fighter_3 = Fighter(230, 900)

fighters = [
    fighter_1,
    dead_fighter_2,
    fighter_2,
    fighter_3,
    dead_fighter_1,
]

battleship_1 = Battleship(500, 4000)
battleship_2 = Battleship(600, 9000)

battleships = [
    battleship_1,
    dead_battleship,
    battleship_2,
]


@pytest.fixture
def ships():
    shuffled_ships = battleships + fighters
    random.shuffle(shuffled_ships)
    return shuffled_ships


class TestFleet:
    def test_constructor(self, ships):
        fleet = Fleet('Rebel army', ships)
        assert len(fleet.ships) == 8, 'Invalid ship number in the fleet'
        assert fleet.ships == ships
        assert fleet.name == 'Rebel army'
    
    def test_get_all_alive_ships(self, ships):
        fleet = Fleet('Rebel army', ships)
        actual_ships = sorted(fleet.get_all_alive_ships(), key=id)
        expected_ships = sorted([battleship_1, battleship_2, fighter_1, fighter_2, fighter_3], key=id)
        assert len(actual_ships) == 5, 'Expected 5 surviving ships in the fleet'
        assert actual_ships, expected_ships
    
    def test_get_alive_battleships(self, ships):
        fleet = Fleet('Rebel army', ships)
        actual_ships = sorted(fleet.get_alive_battleships(), key=id)
        expected_ships = sorted([battleship_1, battleship_2], key=id)
        assert len(actual_ships) == 2, 'Expected 2 surviving battleship in the fleet'
        assert actual_ships, expected_ships
    
    def test_get_alive_fighters(self, ships):
        fleet = Fleet('Rebel army', ships)
        actual_ships = sorted(fleet.get_alive_fighters(), key=id)
        expected_ships = sorted([fighter_1, fighter_2, fighter_3], key=id)
        assert len(actual_ships) == 3, 'Expected 3 surviving fighters in the fleet'
        assert actual_ships, expected_ships
    
    def test_get_report(self, ships):
        fleet = Fleet('Rebel army', ships)
        assert fleet.get_report() == {
            'alive_battleships': 2,
            'alive_fighters': 3,
            'dead_battleships': 1,
            'dead_fighters': 2,
        }
