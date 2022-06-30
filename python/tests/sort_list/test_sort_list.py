import pytest

import sort_list


@pytest.mark.parametrize('input_list, by, expected', [
    pytest.param(
        [
            {'title': 'avocat au thon', 'persons': 4}, 
            {'title': 'choucroute royale', 'persons': 1},
            {'title': 'bananes flambées', 'persons': 30}, 
        ],
        'title',
        [
            {'title': 'avocat au thon', 'persons': 4}, 
            {'title': 'bananes flambées', 'persons': 30}, 
            {'title': 'choucroute royale', 'persons': 1},
        ],
        id='should sort by alphabetically title',
    ),
    pytest.param(
        [
            {'title': 'avocat au thon', 'persons': 4}, 
            {'title': 'choucroute royale', 'persons': 1},
            {'title': 'bananes flambées', 'persons': 30}, 
        ],
        'persons',
        [
            {'title': 'choucroute royale', 'persons': 1},
            {'title': 'avocat au thon', 'persons': 4}, 
            {'title': 'bananes flambées', 'persons': 30}, 
        ],
        id='should sort ascending by persons',
    ),
    pytest.param(
        [],
        'persons',
        [],
        id='should return empty list',
    ),
])
def test_sort_recipes(input_list: list[dict], by: str, expected: list[dict]):
    res = sort_list.sort_recipes(input_list, by)
    assert res == expected, f'The function should be able to sort recipes by {by}'


def test_sort_recipes_should_raise_when_invalid_by():
    try:
        with pytest.raises(ValueError):
            sort_list.sort_recipes([{'title': 'choucroute royale', 'persons': 1}], by='invalid')
    except KeyError:
        pytest.fail('The function should check if "by" parameter has correct value')
