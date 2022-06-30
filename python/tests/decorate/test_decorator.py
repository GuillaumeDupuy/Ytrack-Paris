import datetime as dt

import pytest

from decorator import with_current_date

expected = dt.date.today()


def test_with_current_date_with_single_kwarg():
    @with_current_date
    def mock_func(current_date=None):
        if not current_date:
            pytest.fail('Your decorator should pass current_date as a new argument to the function')
        assert current_date == expected
        
    mock_func()
    

def test_with_current_date_with_many_args_and_kwargs():
    @with_current_date
    def mock_func(a=None, b=None, c=None, current_date=None):
        if not all([a, b, c]):
            pytest.fail('The decorator should pass the original parameters to the original function')
        assert current_date == expected
        assert a == 'foo'
        assert b == 'bar'
        assert c == 42
        
    mock_func('foo', 'bar', c=42)
