from base_spaceships import Spaceship


class TestSpaceship:
    def test_attributes(self):
        spaceship = Spaceship()
        
        assert spaceship.attack == 0
        assert spaceship.defense == 0
        assert spaceship.is_alive
