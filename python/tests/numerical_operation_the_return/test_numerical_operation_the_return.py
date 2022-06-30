import pytest

import numerical_operations


@pytest.mark.parametrize('a, b, expected', [
    (10, 3, 1),
    (-10, 3, 2),
    (10, .3, .1),
    (-10, .3, .2),
    pytest.param(10, 0, 0, id='division by zero'),
])
def test_modulo(a, b, expected):
    res = round(numerical_operations.modulo(a, b), 2)
    assert res == expected, f'modulo({a}, {b}) not equal to {expected}'


@pytest.mark.parametrize('a, b, expected', [
    (12, 5, 2.4),
    (12, 4, 3),
    (0, 4, 0),
    pytest.param(100, 0, 0, id='division by zero'),
    pytest.param(-100, 0, 0, id='division by zero'),
    (-100, 6, -16.67),
])
def test_divide(a, b, expected):
    res = round(numerical_operations.divide(a, b), 2)
    assert res == expected, f'divide({a}, {b}) not equal to {expected}'


@pytest.mark.parametrize('a, b, expected', [
    (10, 3, 3),
    (100, 5, 20),
    (100, 5, 20),
    (-14, 9, -2),
    (0, 20, 0),
    pytest.param(-100, 0, 0, id='division by zero'),
    pytest.param(100, 0, 0, id='division by zero'),
])
def test_integer_division(a, b, expected):
    res = round(numerical_operations.integer_division(a, b), 2)
    assert res == expected, f'integer_division({a}, {b}) not equal to {expected}'
