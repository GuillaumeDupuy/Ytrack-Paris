import inspect
import re

import pytest

from filter_recipes import filter_recipes

recipes_list = [
    {'title': 'Gâteau basque', 'persons': 8},
    {'title': 'Cheescake', 'persons': 1},
    {'title': 'Cookie', 'persons': 3},
    {'title': 'Lasagnes', 'persons': 900},
]


def _get_lines_of_code(func) -> list[str]:
    lines_of_code = inspect.getsource(func).strip().split('\n')
    lines_of_code = [line.strip() for maybe_single_line in lines_of_code
                     for line in maybe_single_line.split(';')
                     if line.strip()]
    
    return lines_of_code


@pytest.mark.parametrize('recipes, max_persons, expected', [
    pytest.param(recipes_list, 3, ['Cheescake'], id='strict lower max'),
    pytest.param(recipes_list, 1000, ['Gâteau basque', 'Cheescake', 'Cookie', 'Lasagnes'], id='large max'),
    pytest.param(recipes_list, 0, [], id='zero max'),
    pytest.param([], 10, [], id='zero recipes'),
])
def test_filter_recipes(recipes: list[dict], max_persons: int, expected: list[str]):
    res = filter_recipes(recipes, max_persons)
    assert res == expected


def test_filter_recipes_function_should_have_only_2_lines():
    lines_of_code = _get_lines_of_code(filter_recipes)
    assert len(lines_of_code) <= 2, 'Your function is too long. 2 lines max !'


def test_filter_recipes_function_should_match_pattern():
    lines_of_code = _get_lines_of_code(filter_recipes)
    try:
        core = lines_of_code[1].strip()
        should_match = re.match(r'^return\s*\[.*\]$', core)
        assert should_match, 'You must use a list comprehension (see notions to learn how to write it)'
    except IndexError:
        pass
