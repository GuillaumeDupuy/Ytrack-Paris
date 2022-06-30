import pytest

import shopping


@pytest.mark.parametrize('case, input, expected', [
    pytest.param(
        'list should be formatted correctly (read instructions ;) )',
        ['tomatoes', 'pastas', 'milk', 'salt'], 
        ['1/ Tomatoes', '2/ Pastas', '3/ Milk', '4/ Salt'],
        id='list with milk',
    ),
    pytest.param(
        'uppercase for the first letter only',
        ['milk', 'SalT'], 
        ['1/ Milk', '2/ Salt'],
        id='list with milk and multiple cases',
    ),
])
def test_clean_list(case: str, input: list[str], expected: list[str]):
    res = shopping.clean_list(input)
    assert res == expected, case


@pytest.mark.parametrize('input_list, expected', [
    pytest.param(
        ['tomatoes', 'pastas', 'milk   ', '  salt'], 
        ['1/ Tomatoes', '2/ Pastas', '3/ Milk', '4/ Salt'],
        id='list with extra spaces',
    ),
    pytest.param(
        ['tomatoes', 'pastas', 'salt'], 
        ['1/ Tomatoes', '2/ Pastas', '3/ Salt', '4/ Milk'],
        id='list without milk',
    ),
    pytest.param(
        ['milk'], 
        ['1/ Milk'],
        id='only milk',
    ),
    pytest.param(
        ['milke'], 
        ['1/ Milke', '2/ Milk'],
        id='list with milk with typo',
    ),
])
def test_clean_list_should_remember_the_milk(input_list: list[str], expected: list[str]):
    res = shopping.clean_list(input_list)
    assert res == expected


def test_clean_list_should_handle_empty():
    res = shopping.clean_list([])
    assert res == [], 'should return an empty list'
