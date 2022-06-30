import pytest

import numerical_operations


@pytest.mark.parametrize('a, b, expected', [
    (10, 10, 20),
    (0, 0, 0),
    (-10, 10, 0),
    (-10, -10, -20),
    (10, .5, 10.5),
])
def test_add(a, b, expected):
    res = numerical_operations.add(a, b)
    assert res == expected, f'{a}+{b} not equal to {expected}'


@pytest.mark.parametrize('a, b, expected', [
    (20, 10, 10),
    (0, 0, 0),
    (-10, 10, -20),
    (-10, -10, 0),
    (10, .5, 9.5),
])
def test_subtract(a, b, expected):
    res = numerical_operations.subtract(a, b)
    assert res == expected, f'{a}-{b} not equal to {expected}'


@pytest.mark.parametrize('a, b, expected', [
    (2, 3, 6),
    (0, 0, 0),
    (-2, 5, -10),
    (-4, -3, 12),
    (10, .5, 5.0),
])
def test_multiply(a, b, expected):
    res = numerical_operations.multiply(a, b)
    assert res == expected, f'{a}*{b} not equal to {expected}'


@pytest.mark.parametrize('a, b, expected', [
    (3, 3, 27),
    (0, 0, 1),
    (-10, 3, -1000),
    (.5, 3, .12),
])
def test_power(a, b, expected):
    res = round(numerical_operations.power(a, b), 2)
    assert res == expected, f'{a}**{b} not equal to {expected}'


@pytest.mark.parametrize('a, expected', [
    (2, 4),
    (3, 9),
    (-10, 100),
    (.5, .25),
])
def test_square(a, expected):
    res = numerical_operations.square(a)
    assert res == expected, f'{a}**2 not equal to {expected}'
