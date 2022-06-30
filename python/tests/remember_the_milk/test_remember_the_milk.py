import pytest

import shopping


@pytest.mark.parametrize('input_list, expected', [
    pytest.param(
        ['tomatoes', 'pastas', 'milk', 'salt'], 
        ['tomatoes', 'pastas', 'milk', 'salt'],
        id='list with milk',
    ),
    pytest.param(
        ['tomatoes', 'pastas', 'salt'], 
        ['tomatoes', 'pastas', 'milk', 'salt'],
        id='list without milk',
    ),
    pytest.param(
        ['milk'], 
        ['milk'],
        id='only milk',
    ),
    pytest.param(
        ['milke'],
        ['milke', 'milk'],
        id='list with milk but typo',
    ),
])
def test_remember_the_milk(input_list: list[str], expected: list[str]):
    res = shopping.remember_the_milk(input_list)
    
    is_you_remember_the_milk = 'milk' in res
    is_all_items_present = sorted(res) == sorted(expected)
    
    assert is_you_remember_the_milk, 'You forgot the milk !'
    assert is_all_items_present, 'You remember the milk, be forgot another element...'


def test_remember_the_milk_should_handle_empty():
    res = shopping.remember_the_milk([])
    assert res == [], 'should return an empty list'
