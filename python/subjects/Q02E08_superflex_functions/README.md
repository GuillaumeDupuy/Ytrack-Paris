# Hyper flexible function

## Instructions

Create or reuse file `recipes.py` and add a function `create_recipe_v2`. This function take 4 inputs:

* `title`: the recipe title as a **string**
* `persons`: the number of persons, as **int**
* `ingredients`: the **tuple** of the ingredients
* `tags`: some optional tags as key/value **dictionary**

It should return a dictionary:

```python
{
    'title': 'Tarte aux figues',
    'persons': 4,
    'ingredients': ('pâte feuilleté', 'figues'),
    'tags': {'type': 'dessert', 'vegan': True},
}
```

Unlike previous `create_recipe` function, the ingredient list and tags should not be provided to the function as a list or a dictionary. The function can ba callable like this:

```python
create_recipe_v2('Tarte aux figues', 4, 'pâte feuilleté', 'figues', type='dessert', vegan=True)
```

...or like this:

```python
create_recipe_v2('Raclette', 5, 'patates', 'fromage', 'jambon', vegan=False, healthy=False)
```


This function should perform same verifications as `create_recipe` (title not too long, not too many persons and not empty ingredient list)


## Usage

Here is a possible `test.py` to test your functions:

```python
import recipes

if __name__ == '__main__':
    print(recipes.create_recipe_v2('Tarte aux figues', 4, 'pâte feuilleté', 'figues', moment='dessert', season='summer'))
```

```bash
$ python test.py
{
    'title': 'Tarte aux figues',
    'persons': 4,
    'ingredients': ('pâte feuilleté', 'figues'),
    'tags': {'moment': 'dessert', 'season': 'summer'},
}
```


## Notions

* [args and kwargs](https://realpython.com/python-kwargs-and-args/)
