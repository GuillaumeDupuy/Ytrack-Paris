# Flexible function

## Instructions

Python functions can be very flexible ! You can pass them arguments many different ways.

Create a file `flex_function.py` with function `create_person` that return a dictionary like this:

```python
{
    'first_name': 'Kevin',
    'last_name': 'Boulin',
    'age': 34,
    'gender': 'male',
    'size': 1.83,
    'job': 'taxidermist',
}
```

This function should:

* take first name and last name as required positional parameters
* take age and gender as positional or keyword parameters
* take size and job as keyword only parameters
* size and job default values: size=1.83, job="taxidermist"

See example bellow.

## Usage

Here is a possible `test.py` to test your functions:

```python
import flex_function

if __name__ == '__main__':
    print(flex_function.create_person('Kevin', 'Boulin', 34, 'male', size=1.83, job='taxidermist'))
    print(flex_function.create_person('Kevin', 'Boulin', age=34, gender='male', size=1.83, job='taxidermist'))
    print(flex_function.create_person('Kevin', 'Boulin', 34, 'male'))
```

```bash
$ python test.py
{'first_name': 'Kevin', 'last_name': 'Boulin', 'age': 34, 'gender': 'male', 'size': 1.83, 'job': 'taxidermist'}
{'first_name': 'Kevin', 'last_name': 'Boulin', 'age': 34, 'gender': 'male', 'size': 1.83, 'job': 'taxidermist'}
{'first_name': 'Kevin', 'last_name': 'Boulin', 'age': 34, 'gender': 'male', 'size': 1.83, 'job': 'taxidermist'}
```

## Notions

* [Positional-only arguments](https://realpython.com/lessons/positional-only-arguments/)
