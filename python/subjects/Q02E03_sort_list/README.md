# Sort a list

## Instructions

Python provide simple methods to sort a list. Forget bubble sorts and other custom sort algorithms.

Create a file `sort_list.py` and a function `sort_recipes(recipes, by)` with following parameters:

* `recipes` is a list of dictionaries, like as the previous exercise output (`[{"title": "...", "persons": ...}, ...]`)
* `by` is a string that can take only 2 values: `"title"` or `"persons"`. Your code **must** raise a `ValueError` if any other value is provided

The function return the same list as `recipes`, but sorted according to the `by` parameter:

* if `by` is "title" => the function should sort recipes by their title (alphabetically)
* if `by` is "persons" => the function should sort recipes ascending by persons number


## Tips

* You can perform the sort in only one line of code
* The `sorted` built-in function is your friend
* You may "say" to this function witch dictionary key to use to sort the list...


## Usage

Here is a possible `test.py` to test your functions:

```python
import sort_list

if __name__ == '__main__':
    recipes = [{'title': 'bananes flambées', 'persons': 30}, {'title': 'avocat au thon', 'persons': 4}]
    print(sort_list.sort_recipes(recipes, by='title'))
```

```bash
$ python test.py
[{'title': 'avocat au thon', 'persons': 4}, {'title': 'bananes flambées', 'persons': 30}]
```


## Notions

* [all you need to know about `sorted`](https://docs.python.org/fr/3/howto/sorting.html)
* [`sorted` built-in function](https://www.w3schools.com/python/ref_func_sorted.asp)
* [`itemgetter` usage](https://www.geeksforgeeks.org/ways-sort-list-dictionaries-values-python-using-itemgetter/)
* [[Optional] labmda functions](https://www.w3schools.com/python/python_lambda.asp)
