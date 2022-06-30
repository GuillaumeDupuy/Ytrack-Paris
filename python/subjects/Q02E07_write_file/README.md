# Save data in a file

## Instructions

Create or reuse file `menu.py` and create the function `save_menu(meals: list[tuple[dt.date, str]])` with one input:

* `meals` is the same as the exercise "Build the menu" output. Example:

```python
[
    (dt.date(2022, 6, 1), 'bananes flambées'), 
    (dt.date(2022, 6, 2), 'avocat au thon'),
]
```

The function should format and write the menu in a text file `menu.txt` as follow:

```
Wednesday 01 June 2022: bananes flambées
Thursday 02 June 2022: avocat au thon
```

## Tips

* You can reuse some previous exercises code
* Be careful to line breaking in file

## Usage

Here is a possible `test.py` to test your functions:

```python
import datetime as dt
from menu import save_menu

if __name__ == '__main__':
    recipes = [
        (dt.date(2022, 6, 1), 'bananes flambées'), 
        (dt.date(2022, 6, 2), 'avocat au thon'),
    ]
    save_menu(recipes)
```

```bash
$ python test.py
$ cat menu.txt
Wednesday 01 June 2022: bananes flambées
Thursday 02 June 2022: avocat au thon
```


## Notions

* [open a file](https://www.w3schools.com/python/python_file_write.asp)
* [write in a file](https://www.pythontutorial.net/python-basics/python-write-text-file/)
* [full example](https://www.geeksforgeeks.org/writing-to-file-in-python/#writing)
