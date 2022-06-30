# Days and numbers

## Instructions

Create a file `custom_calendar.py` with 2 functions:

* `day_from_number(day_number)`
* `day_to_number(day)`

Those functions perform conversion between day index and day word and vie versa:

* 1 = Monday
* 2 = Tuesday
* 3 = Wednesday
* 4 = Thursday
* 5 = Friday
* 6 = Saturday
* 7 = Sunday

You should return `None` if input is invalid (invalid number or day string).

See bellow for examples.

**Tip:** Dictionaries are your best friends here ;) See notions.


## Usage

Here is a possible `test.py` to test your functions:

```python
import custom_calendar

if __name__ == '__main__':
    print(custom_calendar.day_from_number(2))
    print(custom_calendar.day_from_number(1))
    print(custom_calendar.day_from_number(1000))
    print(custom_calendar.day_to_number('Sunday'))
    print(custom_calendar.day_to_number('invalid day'))
```

```bash
$ python test.py
Tuesday
Monday
None
7
None
```

## Notions

* [None type](https://www.w3schools.com/python/ref_keyword_none.asp)
* [dictionaries](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python/7290721-enregistrez-des-donnees-complexes-avec-des-dictionnaires)
* [access item in dictionary](https://www.w3schools.com/python/python_dictionaries_access.asp)
