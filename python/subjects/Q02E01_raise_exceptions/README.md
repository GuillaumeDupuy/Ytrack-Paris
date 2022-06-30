# Raise an exception

## Instruction

Create a file `recipes.py` with a function `create_recipe` that take 3 parameters:

* _name_: the recipe name as string
* _persons_: number of persons as integer
* _ingredients_: list of ingredients (list of strings)

This function check if recipe data are correct and simply return a dictionary:

```python
{
    'title': '...', 
    'persons': ..., 
    'ingredients': [...],
}
```

The function should `raise` a `ValueError` with specific message according those cases:

* if `title` has more than 150 character length. Error message: `"Title is tool long"`
* if `persons` is null or greater than 50. Error message: `"Invalid persons number"`
* if `ingredients` list is empty. Error message: `"This recipe has no ingredients"`

## Usage

Here is a possible `test.py` to test your functions:

```python
import recipes

if __name__ == '__main__':
    print(recipes.create_recipe('Pâtes au beurre', 30, ['pâtes', 'beurre']))
```

```bash
$ python test.py
{'title': 'Pâtes au beurre', 'persons': 30, 'ingredients': ['pâtes', 'beurre']}
```

## Notions

* [built-in exceptions](https://www.w3schools.com/python/python_ref_exceptions.asp)
* [String length](https://www.w3schools.com/python/gloss_python_string_length.asp)
* [Dictionaries](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python/7290721-enregistrez-des-donnees-complexes-avec-des-dictionnaires)
