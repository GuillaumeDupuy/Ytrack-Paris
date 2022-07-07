import pytest

from base_spaceships import Fighter
from requirements import Requirements
from dock import SpaceDock
from space_yard import SpaceYard
from exceptions import ResourceError


class FakeInterceptor(Fighter):
    requirements = Requirements(metal=100, crystal=100)

    def __init__(self):
        super().__init__(attack=100, defense=100)


@pytest.fixture
def dock():
    return SpaceDock()


@pytest.fixture
def yard(dock):
    return SpaceYard(dock)


class TestSpaceYard:
    def test_build_ship_should_add_new_ships_to_dock(self, yard: SpaceYard, dock: SpaceDock):
        yard.build_ship('default', FakeInterceptor, 3, 2000, 2000)
        fleet = dock['default']
        assert len(fleet.ships) == 3
        
    def test_build_ship_should_add_new_ships_to__new_fleet_in_dock(self, yard: SpaceYard, dock: SpaceDock):
        yard.build_ship('new fleet', FakeInterceptor, 3, 300, 300)
        fleet = dock['new fleet']
        assert len(fleet.ships) == 3
    
    def test_build_ship_should_raise_if_not_enough_metal(self, yard: SpaceYard):
        with pytest.raises(ResourceError, match='Not enough metal to build 3 FakeInterceptor'):
            yard.build_ship('default', FakeInterceptor, 3, 20, 2000)
    
    def test_build_ship_should_raise_if_not_enough_crystal(self, yard: SpaceYard):
        with pytest.raises(ResourceError, match='Not enough crystal to build 3 FakeInterceptor'):
            yard.build_ship('default', FakeInterceptor, 3, 2000, 20)
