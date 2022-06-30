import inspect
import re

import pytest

import recipes


def test_create_recipe_v2_should_has_ingredients_args():
    params = inspect.signature(recipes.create_recipe_v2).parameters
    ingredients_param = params.get('ingredients')
    if not ingredients_param:
        pytest.fail('The function should have ingredients parameter')
    param_kind = ingredients_param.kind
    expected_king = inspect._ParameterKind.VAR_POSITIONAL
    assert param_kind == expected_king, 'ingredients parameter should use unpacking operator *'


def test_create_recipe_v2_should_has_tags_kwargs():
    params = inspect.signature(recipes.create_recipe_v2).parameters
    tags_param = params.get('tags')
    if not tags_param:
        pytest.fail('The function should have ingredients parameter')
    param_kind = tags_param.kind
    expected_king = inspect._ParameterKind.VAR_KEYWORD
    assert param_kind == expected_king, 'tags parameter should use unpacking operator **'


def test_create_recipe_v2():
    title = 'x' * 149
    res = recipes.create_recipe_v2(title, 49, 
                                   'Pate à pizza', 'Frourne d\'Ambert', 'Comté', 'Emental', 'Mozzarella', 
                                   regime='vegan')
    expected = {
        'title': title, 
        'persons': 49, 
        'ingredients': ('Pate à pizza', 'Frourne d\'Ambert', 'Comté', 'Emental', 'Mozzarella'), 
        'tags': {'regime': 'vegan'},
    }
    assert res == expected, 'This function should return a dictionary with 3 keys: title, persons and ingredients'


def test_create_recipe_v2_should_raise_value_error_when_empty_ingredients():
    with pytest.raises(ValueError, match=re.compile('^this recipe has no ingredients$', flags=re.I)):
        recipes.create_recipe_v2('tacos à la grec', 12)


def test_create_recipe_v2_should_raise_value_error_when_title_too_long():
    try:
        with pytest.raises(ValueError, match=re.compile('^title is too long$', flags=re.I)):
            recipes.create_recipe_v2('x'*151, 12, 
                                     'Pate à pizza', 'Frourne d\'Ambert', 'Comté', 'Emental', 'Mozzarella')
    except TypeError:
        pass


def test_create_recipe_v2_should_raise_value_error_when_too_many_persons():
    try:
        with pytest.raises(ValueError, match=re.compile('^invalid persons number$', flags=re.I)):
            recipes.create_recipe_v2('tacos à la grec', 51, 
                                     'Pate à pizza', 'Frourne d\'Ambert', 'Comté', 'Emental', 'Mozzarella')
    except TypeError:
        pass


def test_create_recipe_v2_should_raise_value_error_when_zero_persons():
    try:
        with pytest.raises(ValueError, match=re.compile('^invalid persons number$', flags=re.I)):
            recipes.create_recipe_v2('tacos à la grec', 0, 
                                     'Pate à pizza', 'Frourne d\'Ambert', 'Comté', 'Emental', 'Mozzarella')
    except TypeError:
        pass
