from enum import Enum

import pytest

from ship_types import ShipType
from spaceships import Interceptor, Bomber, Frigate, Cruiser, Destroyer


class TestShipType:
    def test_should_be_an_enum(self):
        is_enum = issubclass(ShipType, Enum)
        assert is_enum, 'ShipType should be an Enum'
        
    @pytest.mark.parametrize('name, value', [
        ('INTERCEPTOR', Interceptor),
        ('BOMBER', Bomber),
        ('FRIGATE', Frigate),
        ('CRUISER', Cruiser),
        ('DESTROYER', Destroyer),
    ])
    def test_enum_item(self, name, value):
        try:
            res = ShipType[name]
        except KeyError:
            pytest.fail(f'missing {name} item in ShipType')
        assert res.value == value, f'{name} item should have {value} value'
