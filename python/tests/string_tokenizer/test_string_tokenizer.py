import pytest

import string_processing


@pytest.mark.parametrize('sentence, expected', [
    pytest.param(
        "Dites, on n'attend pas votre soeur ?",
        ['dites', 'on', 'n', 'attend', 'pas', 'votre', 'soeur'],
        id='full sentence',
    ),
    pytest.param(
        '',
        [],
        id='empty string',
    ),
    pytest.param(
        'Coucou',
        ['coucou'],
        id='single word',
    ),
    pytest.param(
        "      je Ne pEnse pas   _-??   qu'il y ait de bonnes ou de mauvaises SITUATIONS.",
        ['je', 'ne', 'pense', 'pas', 'qu', 'il', 'y', 'ait', 'de', 'bonnes', 'ou', 'de', 'mauvaises', 'situations'],
        id='ugly sentence with lot of spaces, punctuations and multiple cases',
    ),
    pytest.param(
        "c'est-à-dire",
        ['c', 'est', 'à', 'dire'],
        id="c'est-à-dire",
    ),
])
def test_tokenize(sentence: str, expected: list[str]):
    res = string_processing.tokenize(sentence)
    assert res == expected
