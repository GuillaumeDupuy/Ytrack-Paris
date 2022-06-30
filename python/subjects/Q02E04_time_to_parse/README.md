# Date and time

## Instructions

Create a file `datetime_utils.py` and 2 functions:

* `parse_time(time_str: str) -> dt.datetime`: take a string as input, should return corresponding **datetime** object. Input string format: "dd/mm/YYYY"
* `format_date(date: dt.date) -> str`: take a **date** object and return the corresponding string. Output string format: "[english_weekday_name] [day_number] [english_month_name] [4_digits_year]"

See usage for examples.

## Tips

* Your 2 new favorite datetime methods: `strftime` and `strptime`
* The `: str` and `-> dt.datetime` in above functions signature ar called "hint typing". Learn more in notions

## Usage

Here is a possible `test.py` to test your functions:

```python
import datetime as dt
import datetime_utils

if __name__ == '__main__':
    print(datetime_utils.parse_time('31/07/2022'))
    print(datetime_utils.format_date(dt.date(2022, 7, 31)))
```

```bash
$ python test.py
2022-07-31 00:00:00
Sunday 31 July 2022
```


## Notions

* [`datetime` module](https://docs.python.org/3/library/datetime.html)
* [Understand Python optional typing](https://fastapi.tiangolo.com/python-types/)
* [Typing module](https://docs.python.org/3/library/typing.html)
