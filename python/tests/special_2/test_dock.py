import pytest

from base_spaceships import Fighter
from dock import SpaceDock
from fleet import Fleet


class FakeInterceptor(Fighter):
    def __init__(self):
        super().__init__(attack=100, defense=100)
        

class TestSpaceDock:
    def test_should_access_existing_fleet(self):
        dock = SpaceDock()
        default_fleet = dock['default']
        
        assert default_fleet.ships == []
        assert default_fleet.name == 'default'
        assert isinstance(default_fleet, Fleet)
    
    def test_should_create_new_fleet_when_access(self):
        dock = SpaceDock()
        new_fleet = dock['new_one']
        default_fleet = dock['default']
        
        assert new_fleet.ships == []
        assert new_fleet.name == 'new_one'
        assert isinstance(new_fleet, Fleet)
        
        assert default_fleet.name == 'default', 'default fleet should still exists'
    
    def test_should_set_new_fleet(self):
        dock = SpaceDock()
        ship1, ship2 = FakeInterceptor(), FakeInterceptor()
        dock['new fleet'] = [ship1, ship2]

        res = dock['new fleet']

        assert res.ships == [ship1, ship2]
        assert res.name == 'new fleet'
        assert isinstance(res, Fleet)
    
    def test_should_delete_fleet_if_exists(self):
        dock = SpaceDock()
        ship1, ship2 = FakeInterceptor(), FakeInterceptor()
        dock['new fleet'] = [ship1, ship2]

        del dock['new fleet']
        
        assert 'new fleet' not in dock.fleets, 'fleet should be deleted'
    
    def test_should_raise_when_delete_not_existing_fleet(self):
        dock = SpaceDock()

        with pytest.raises(ValueError):
            del dock['not existing fleet']
    
    def test_should_print_correctly(self):
        dock = SpaceDock()
        ship1, ship2 = FakeInterceptor(), FakeInterceptor()
        dock['new fleet'] = [ship1, ship2]
        
        assert str(dock) == 'default: 0 ships, new fleet: 2 ships'
