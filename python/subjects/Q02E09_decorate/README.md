# Function decorator

A decorator is a function that modify other function behavior. Basic usage :

```python
@my_decorator
def my_function():
    ...
```

A decorator is basically a function that take an other function as parameter and return modified function:

```python
def my_decorator(function):
    def modified_function(*args, **kwargs):
        # do other things before original function...

        # You can also modify modified function arguments
        return function(*args, new_argument=..., **kwargs)
        # ...and other after

    # don't forget to return the modified function object (without parenthesis)
    return modified_function
```

Learn more in notions.


## Instructions

Create a file `decorator.py` and write a decorator `with_current_date`.

This decorator should add a `current_date` parameter to it modified function.

`current_date` should be the today date object. You can obtain it with: `dt.date.today()`.


## Usage

Here is a possible `test.py` to test your functions:

```python
import datetime as dt
from decorator import with_current_date

@with_current_date
def log_message(message: str, current_date: dt.date):
    # this is an example function
    # you can imagine any other functions
    return f'{current_date}: {message}'

if __name__ == '__main__':
    print(log_message('hello'))
    print(log_message('world'))
```

```bash
$ python test.py
2022-06-17: hello
2022-06-17: world
```


## Notions

* [Decorator tutorial](https://www.geeksforgeeks.org/decorators-in-python/)
