import pytest

import custom_calendar


@pytest.mark.parametrize('day_number, expected', [
    (1, 'Monday'),
    (2, 'Tuesday'),
    (3, 'Wednesday'),
    (4, 'Thursday'),
    (5, 'Friday'),
    (6, 'Saturday'),
    (7, 'Sunday'),
    (8, None),
    (-80, None),
    (1.22, None),
    (None, None),
    (0, None),
])
def test_day_from_number(day_number: int, expected: str):
    res = custom_calendar.day_from_number(day_number)
    assert res == expected


@pytest.mark.parametrize('day, expected', [
    ('Monday', 1),
    ('Tuesday', 2),
    ('Wednesday', 3),
    ('Thursday', 4),
    ('Friday', 5),
    ('Saturday', 6),
    ('Sunday', 7),
    ('Nimp', None),
    ('', None),
    (None, None),
])
def test_day_to_number(day: str, expected: int):
    res = custom_calendar.day_to_number(day)
    assert res == expected
