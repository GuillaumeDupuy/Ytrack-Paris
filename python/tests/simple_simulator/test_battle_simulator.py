import pytest

from battle_simulator import Simulator
from spaceships import Interceptor, Frigate, Bomber, Destroyer, Cruiser


@pytest.fixture
def simulator():
    return Simulator()


class TestSimulator:
    def test__duel_fight_both_survived_1(self, simulator):
        tie_fighter = Interceptor()
        y_wing = Bomber()
        simulator._duel_fight(tie_fighter, y_wing)
        assert tie_fighter.defense == 850, 'The attacker ship should be damaged'
        assert y_wing.defense == 1640, 'The defender ship should be damaged'

    def test__duel_fight_defender_should_be_destroyed(self, simulator):
        tentative_iv = Frigate()
        tie_fighter = Interceptor()
        simulator._duel_fight(tentative_iv, tie_fighter)
        assert tentative_iv.defense == 2500, 'The attacker should be intact'
        assert not tie_fighter.is_alive, 'The defender ship should be destroyed'
        assert tie_fighter.defense == 0, 'The defender ship should be destroyed'

    def test__duel_fight_both_survived_2(self, simulator):
        mc_80 = Destroyer()
        imperial_cruiser = Cruiser()
        simulator._duel_fight(imperial_cruiser, mc_80)
        assert imperial_cruiser.defense == 1700, 'The attacker ship should be damaged'
        assert mc_80.defense == 4200, 'The defender ship should be damaged'

    def test__duel_fight_attacker_should_be_destroyed(self, simulator):
        tentative_iv = Frigate()
        tie_fighter = Interceptor()
        simulator._duel_fight(tie_fighter, tentative_iv)
        assert tentative_iv.defense == 2320, 'The defender should be damaged'
        assert not tie_fighter.is_alive, 'The attacker ship should be destroyed'
        assert tie_fighter.defense == 0, 'The attacker ship should be destroyed'
