import random

from fleet import Fleet
from battle_simulator import Simulator
from spaceships import Interceptor, Frigate, Bomber, Destroyer


class TestSimulator:
    def test_fight(self):
        attackers = Fleet('Empire', [Interceptor(), Interceptor(), Frigate()])
        defenders = Fleet('Rebels', [Bomber(), Interceptor(), Destroyer()])
        simulator = Simulator(attackers, defenders)
        random.seed(100)
        
        simulator.fight()

        assert attackers.ships[0].is_alive
        assert attackers.ships[0].defense == 490
        assert not attackers.ships[1].is_alive
        assert attackers.ships[1].defense == 0
        assert attackers.ships[2].is_alive
        assert attackers.ships[2].defense == 1200
        assert defenders.ships[0].is_alive
        assert defenders.ships[0].defense == 1640
        assert not defenders.ships[1].is_alive
        assert defenders.ships[1].defense == 0
        assert defenders.ships[2].is_alive
        assert defenders.ships[2].defense == 4320
        
    def test_fight_full_fighters_should_kill_all(self):
        attackers = Fleet('Empire', [Interceptor() for _ in range(100)])
        defenders = Fleet('Rebels', [Interceptor() for _ in range(5)])
        simulator = Simulator(attackers, defenders)
        random.seed(100)
        
        simulator.fight()
        
        assert not defenders.ships[0].is_alive
        assert not defenders.ships[1].is_alive
        assert not defenders.ships[2].is_alive
        assert not defenders.ships[3].is_alive
        assert not defenders.ships[4].is_alive
        
    def test_fight_full_fighters(self):
        attackers = Fleet('Empire', [Interceptor() for _ in range(5)])
        defenders = Fleet('Rebels', [Interceptor() for _ in range(5)])
        simulator = Simulator(attackers, defenders)
        random.seed(100)
        
        simulator.fight()

        assert not defenders.ships[0].is_alive
        assert defenders.ships[0].defense == 0
        assert defenders.ships[1].is_alive
        assert defenders.ships[1].defense == 280
        assert defenders.ships[2].is_alive
        assert defenders.ships[2].defense == 640
        assert not defenders.ships[3].is_alive
        assert defenders.ships[3].defense == 0
        assert defenders.ships[4].is_alive
        assert defenders.ships[4].defense == 640

    def test_fight_full_battleships_should_kill_all(self):
        attackers = Fleet('Empire', [Destroyer() for _ in range(100)])
        defenders = Fleet('Rebels', [Destroyer() for _ in range(5)])
        simulator = Simulator(attackers, defenders)
        random.seed(100)
        
        simulator.fight()
        
        assert not defenders.ships[0].is_alive
        assert not defenders.ships[1].is_alive
        assert not defenders.ships[2].is_alive
        assert not defenders.ships[3].is_alive
        assert not defenders.ships[4].is_alive

    def test_fight_full_battleships(self):
        attackers = Fleet('Empire', [Destroyer() for _ in range(7)])
        defenders = Fleet('Rebels', [Destroyer() for _ in range(5)])
        simulator = Simulator(attackers, defenders)
        random.seed(100)
        
        simulator.fight()

        assert not defenders.ships[0].is_alive
        assert defenders.ships[0].defense == 0
        assert defenders.ships[1].is_alive
        assert defenders.ships[1].defense == 1100
        assert defenders.ships[2].is_alive
        assert defenders.ships[2].defense == 2400
        assert not defenders.ships[3].is_alive
        assert defenders.ships[3].defense == 0
        assert defenders.ships[4].is_alive
        assert defenders.ships[4].defense == 3700

    def test_get_report(self):
        attackers = Fleet('Empire', [Interceptor(), Interceptor(), Frigate()])
        defenders = Fleet('Rebels', [Bomber(), Interceptor(), Destroyer()])
        simulator = Simulator(attackers, defenders)
        random.seed(100)
        
        simulator.fight()
        report = simulator.get_report()
        
        assert report == {
            'Empire': {
                'alive_battleships': 1, 
                'alive_fighters': 1, 
                'dead_battleships': 0, 
                'dead_fighters': 1,
            }, 
            'Rebels': {
                'alive_battleships': 1, 
                'alive_fighters': 1, 
                'dead_battleships': 0, 
                'dead_fighters': 1,
            },
        }
