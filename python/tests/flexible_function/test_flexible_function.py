import flex_function


nominal_expected = {
    'first_name': 'Kevin',
    'last_name': 'Boulin',
    'age': 34,
    'gender': 'male',
    'size': 1.83,
    'job': 'taxidermist',
}
modified_expected = {
    'first_name': 'Sophie',
    'last_name': 'Marchal',
    'age': 40,
    'gender': 'female',
    'size': 1.60,
    'job': 'developer',
}


def test_create_person_full_positional():
    res = flex_function.create_person('Sophie', 'Marchal', 40, 'female', size=1.60, job='developer')
    assert res == modified_expected
    

def test_create_person_full_keywords():
    res = flex_function.create_person('Sophie', 'Marchal', age=40, gender='female', size=1.60, job='developer')
    assert res == modified_expected



def test_create_person_full_default_values():
    res = flex_function.create_person('Kevin', 'Boulin', age=34, gender='male')
    assert res == nominal_expected


def test_create_person_mix():
    res = flex_function.create_person('Sophie', 'Marchal', 40, size=1.60, gender='female')
    assert res == {
        'first_name': 'Sophie',
        'last_name': 'Marchal',
        'age': 40,
        'gender': 'female',
        'size': 1.60,
        'job': 'taxidermist',
    }


def test_create_person_full_nominal():
    res = flex_function.create_person('Kevin', 'Boulin', 34, 'male', size=1.83, job='taxidermist')
    assert res == nominal_expected


def test_create_person_full_nominal_full_kw():
    res = flex_function.create_person('Kevin', 'Boulin', age=34, gender='male', size=1.83, job='taxidermist')
    assert res == nominal_expected
    

def test_create_person_full_nominal_missing():
    res = flex_function.create_person('Kevin', 'Boulin', 34, 'male')
    assert res == nominal_expected
