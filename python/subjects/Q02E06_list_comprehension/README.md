# List comprehensions

## Instructions

Create a file `filter_recipes.py` and a function `filter_recipes(recipes: list[dict], max_persons: int) -> list[str]`.

This function should:

* loop in the input list (`recipes: list[dict]`, same format as "Read a json file" exercise output)
* keep only recipes that have persons number lower than `max_persons`

**But...**

Because it is too easy for you, i give you a challenge: the function must **not be more than 2 lines of code**, including the function declaration itself !

## Tips

* 2 lines of codes !? Forget the classic for loop...
* ...use instead a list comprehension (see notions)


## Usage

Here is a possible `test.py` to test your functions:

```python
from filter_recipes import filter_recipes

if __name__ == '__main__':
    recipes = [{'title': 'bananes flambées', 'persons': 30}, {'title': 'avocat au thon', 'persons': 4}]
    print(filter_recipes(recipes, 10))
```

```bash
$ python test.py
['avocat au thon']
```


## Notions

* [list comprehension](https://www.w3schools.com/python/python_lists_comprehension.asp)
