import datetime as dt

import pytest

import datetime_utils


@pytest.mark.parametrize('dt_str, expected', [
    pytest.param('01/01/2001', dt.datetime(2001, 1, 1), id='parse simple date as datetime'),
    pytest.param('06/12/2022', dt.datetime(2022, 12, 6), id='parse other date as datetime'),
])
def test_parse_time(dt_str: str, expected: dt.datetime):
    try:
        res = datetime_utils.parse_time(dt_str)
    except ValueError as e:
        error = str(e)
        pytest.fail(error)
    if not isinstance(res, dt.datetime):
        pytest.fail('This function should return a datetime object')
    assert res == expected


@pytest.mark.parametrize('date, expected', [
    pytest.param(dt.date(2022, 6, 15), 'Wednesday 15 June 2022', id='format date 1'),
    pytest.param(dt.date(2020, 2, 29), 'Saturday 29 February 2020', id='format date 2'),
    pytest.param(dt.date(1993, 12, 6), 'Monday 06 December 1993', id='format date 3'),
])
def test_format_date(date: dt.date, expected: str):
    res = datetime_utils.format_date(date)
    assert res == expected, "You should format date as follow: '[day_name] [day_number] [month_name] [4_digits_year]'"
