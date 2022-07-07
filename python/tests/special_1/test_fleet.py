from fleet import Fleet
from base_spaceships import Fighter


class FakeInterceptor(Fighter):
    def __init__(self):
        super().__init__(attack=100, defense=100)


class TestFleet:
    def test_should_add_single_ship_to_empty_fleet(self):
        fleet = Fleet('my fleet', [])
        test_ship = FakeInterceptor()
        fleet + test_ship
        assert fleet.ships == [test_ship], 'the fleet should contains 1 ship'

    def test_should_add_single_ship_to_existing_fleet(self):
        ship1, ship2 = FakeInterceptor(), FakeInterceptor()
        fleet = Fleet('my fleet', [ship1, ship2])
        test_ship = FakeInterceptor()
        fleet + test_ship
        assert fleet.ships == [ship1, ship2, test_ship], 'the fleet should contains 3 ships'

    def test_should_add_list_of_ships_to_empty_fleet(self):
        fleet = Fleet('my fleet', [])
        test_ship1, test_ship2 = FakeInterceptor(), FakeInterceptor()
        fleet + [test_ship1, test_ship2]
        assert fleet.ships == [test_ship1, test_ship2], 'the fleet should contains 2 ships'

    def test_should_add_list_of_ships_to_existing_fleet(self):
        ship1, ship2 = FakeInterceptor(), FakeInterceptor()
        fleet = Fleet('my fleet', [ship1, ship2])
        test_ship1, test_ship2 = FakeInterceptor(), FakeInterceptor()
        fleet + [test_ship1, test_ship2]
        assert fleet.ships == [ship1, ship2, test_ship1, test_ship2], 'the fleet should contains 4 ships'
