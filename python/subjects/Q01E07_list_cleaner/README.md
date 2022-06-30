# List cleaner

## Instructions

Create a file `shopping.py` with a function `clean_list(shopping_list)`. 

This function input is a list of string, like this:

```python
['tomatoes', 'pastas', 'milk', 'salt']
```

For each list item, your function `clean_list` should:

* remove all spaces before and after (but not between words)
* capitalize the first letter (first letter only, other ones should be to lowercase)
* add it index number before and a separator `'x/ '`
* an empty list as input = an empty list as output
* and don't forget the milk !!!! (add it at the end of the list if missing)

Example :

```python
clean_list(['tomatoes', 'pastas', 'milk', 'salt']) == ['1/ Tomatoes', '2/ Pastas', '3/ Milk', '4/ Salt']
```


## Usage

Here is a possible `test.py` to test your functions:

```python
import shopping

if __name__ == '__main__':
    print(shopping.clean_list(['tomatoes', 'pastas', 'milk', '  salt']))
    print(shopping.clean_list(['tomatoes', 'pastas', 'salt']))
```

```bash
$ python test.py
['1/ Tomatoes', '2/ Pastas', '3/ Milk', '4/ Salt']
['1/ Tomatoes', '2/ Pastas', '3/ Salt', '4/ Milk']
```

## Notions

* [string methods](https://www.w3schools.com/python/python_ref_string.asp)
* [enumerate](https://realpython.com/python-enumerate/)
* [for loops](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python/7296286-repetez-des-taches-facilement-a-l-aide-de-boucles)
