import random

import pytest

from battle_simulator import Simulator
from spaceships import Interceptor, Frigate, Bomber, Destroyer


@pytest.fixture
def simulator():
    return Simulator()


class TestSimulator:
    def test__simulate_fight_with_empty_defender_list(self, simulator):
        random.seed(100)
        
        attackers = [Interceptor(), Interceptor(), Frigate()]
        defenders = []
        
        try:
            simulator._simulate_fight(attackers, defenders)
        except Exception as err:
            pytest.fail(f'The method _simulate_fight should handle empty defender list: {err}')
            
    def test__simulate_fight_with_empty_attacker_list(self, simulator):
        random.seed(100)
        
        attackers = []
        defenders = [Interceptor(), Interceptor(), Frigate()]
        
        try:
            simulator._simulate_fight(attackers, defenders)
        except Exception as err:
            pytest.fail(f'The method _simulate_fight should handle empty defender list: {err}')
    
    def test__simulate_fight(self, simulator):
        random.seed(100)
        
        attackers = [Interceptor(), Interceptor(), Frigate()]
        defenders = [Bomber(), Interceptor(), Destroyer()]
        
        simulator._simulate_fight(attackers, defenders)

        assert attackers[0].is_alive
        assert attackers[0].defense == 850
        assert attackers[1].is_alive
        assert attackers[1].defense == 640 
        assert attackers[2].is_alive
        assert attackers[2].defense == 2500
        assert defenders[0].is_alive
        assert defenders[0].defense == 1640
        assert not defenders[1].is_alive
        assert defenders[1].defense == 0
        assert defenders[2].is_alive
        assert defenders[2].defense == 5000
        
    def test__simulate_fight_with_single_ship(self, simulator):
        random.seed(100)
        
        attackers = [Interceptor()]
        defenders = [Interceptor(), Interceptor()]
        
        simulator._simulate_fight(attackers, defenders)

        assert defenders[0].is_alive
        assert defenders[0].defense == 640
        assert defenders[1].is_alive
        assert defenders[1].defense == 1000
        
    def test__simulate_fight_full_fighters_should_kill_all(self, simulator):
        random.seed(100)
        
        attackers = [Interceptor() for _ in range(100)]
        defenders = [Interceptor() for _ in range(5)]
        
        simulator._simulate_fight(attackers, defenders)

        assert not defenders[0].is_alive
        assert not defenders[1].is_alive
        assert not defenders[2].is_alive
        assert not defenders[3].is_alive
        assert not defenders[4].is_alive
        
    def test__simulate_fight_full_fighters(self, simulator):
        random.seed(100)
        
        attackers = [Interceptor() for _ in range(10)]
        defenders = [Interceptor() for _ in range(5)]
        
        simulator._simulate_fight(attackers, defenders)

        assert defenders[0].is_alive
        assert defenders[1].is_alive
        assert defenders[2].is_alive
        assert not defenders[3].is_alive
        assert defenders[4].is_alive

    def test__simulate_fight_full_battleships_should_kill_all(self, simulator):
        random.seed(100)
        
        attackers = [Destroyer() for _ in range(100)]
        defenders = [Destroyer() for _ in range(5)]
        
        simulator._simulate_fight(attackers, defenders)

        assert not defenders[0].is_alive
        assert not defenders[1].is_alive
        assert not defenders[2].is_alive
        assert not defenders[3].is_alive
        assert not defenders[4].is_alive

    def test__simulate_fight_full_battleships(self, simulator):
        random.seed(100)
        
        attackers = [Destroyer() for _ in range(7)]
        defenders = [Destroyer() for _ in range(5)]
        
        simulator._simulate_fight(attackers, defenders)

        assert defenders[0].is_alive
        assert defenders[1].is_alive
        assert defenders[2].is_alive
        assert not defenders[3].is_alive
        assert defenders[4].is_alive
