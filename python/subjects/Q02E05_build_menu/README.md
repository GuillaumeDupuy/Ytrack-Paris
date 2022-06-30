# Build the menu

## Instructions

Create a file `menu.py` and a function `build_menu(recipes: list[dict], start_date: dt.date) -> list[tuple[dt.date, str]]` (remember hint typing) with following inputs:

* `recipes`: list of dictionaries with same format as the exercise "Read a json file" output (`[{"title": "...", "persons": ...}, ...]`)
* `start_date` a `date` object

The function should return a list of tuples (a data structure like a list but immutable). Each tuple should contain 2 elements:

* a date object that days increases with tuple position in the list
* the corresponding recipe `"title"`

See bellow for examples.

## Tips

* You can perform additions and subtraction between date (or datetime) object and a timedelta object (like between 2 integers)


## Usage

Here is a possible `test.py` to test your functions:

```python
import datetime as dt
import menu

if __name__ == '__main__':
    recipes = [
        {'title': 'bananes flambées', 'persons': 30}, 
        {'title': 'avocat au thon', 'persons': 4},
    ]
    print(menu.build_menu(recipes, dt.date(2022, 6, 1)))
```

```bash
$ python test.py
[
    (dt.date(2022, 6, 1), 'bananes flambées'), 
    (dt.date(2022, 6, 2), 'avocat au thon'),
]
```

## Notions

* [tuple data structure](https://www.w3schools.com/python/python_tuples.asp)
* [timedelta usage](https://www.geeksforgeeks.org/python-datetime-timedelta-function/)
* [timedelta documentation](https://docs.python.org/3/library/datetime.html#timedelta-objects)
* [enumerate](https://realpython.com/python-enumerate/)
