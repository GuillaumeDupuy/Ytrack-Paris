import pytest

import concat_string


@pytest.mark.parametrize('first, second, expected', [
    pytest.param(
        'Je suis mon cher amis', 'très heureux de te voir', 
        'Je suis mon cher amis, très heureux de te voir', 
        id='Je suis mon cher amis, très heureux de te voir',
    ),
    pytest.param(
        'No', 'I am your father', 
        'No, I am your father', 
        id='No, I am your father',
    ),
])
def test_concat(first: str, second: str, expected: str):
    res = concat_string.concat(first, second)
    assert res == expected
