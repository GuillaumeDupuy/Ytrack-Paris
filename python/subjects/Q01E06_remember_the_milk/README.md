# Remember the milk

## Instructions

Create a file `shopping.py` with a function `remember_the_milk(shopping_list)`. 

This function input is a list of string, like this:

```python
['tomatoes', 'pastas', 'milk', 'salt']
```

If the string `'milk'` is not in the list, it should be added. The function return the updated list. If the milk is in the list, simply return it.

If the input list is empty, the returned list should be also empty (don't add the milk in that case).


## Usage

Here is a possible `test.py` to test your functions:

```python
import shopping

if __name__ == '__main__':
    list_with_milk = ['tomatoes', 'pastas', 'milk', 'salt']
    list_without_milk = ['tomatoes', 'pastas', 'salt']

    print(shopping.remember_the_milk(list_with_milk))
    print(shopping.remember_the_milk(list_without_milk))
```

```bash
$ python test.py
['tomatoes', 'pastas', 'milk', 'salt']
['tomatoes', 'pastas', 'salt', 'milk']
```

## Notions

* [lists](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python/7290436-enregistrez-des-groupes-de-donnees-avec-les-listes)
* [for loops](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python/7296286-repetez-des-taches-facilement-a-l-aide-de-boucles)
* [Conditions](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python/7168878-controlez-le-deroulement-de-votre-programme-avec-des-conditions)
