import pytest

from ship_types import get_ship_class_by_name, ShipType


@pytest.mark.parametrize('name, value', [
    ('interceptor', ShipType.INTERCEPTOR),
    ('Interceptor', ShipType.INTERCEPTOR),
    ('intERCeptor', ShipType.INTERCEPTOR),
    ('INTERCEPTOR', ShipType.INTERCEPTOR),
    ('bomber', ShipType.BOMBER),
    ('frigate', ShipType.FRIGATE),
    ('cruiser', ShipType.CRUISER),
    ('destroyer', ShipType.DESTROYER),
])
def test_get_ship_class_by_name_should_return_item(name, value):
    assert get_ship_class_by_name(name) == value


def test_get_ship_class_by_name_should_raise():
    with pytest.raises(ValueError):
        get_ship_class_by_name('invalid_item_name')
