# Read a json file

## Instructions

Create a file `read_recipes.py` and a function `get_recipes(file_name)`. 

Create another file `recipes_data.json` and copy/paste on it the following content:

```json
[
  {
    "title": "clafouti aux cerises",
    "ingredients": [
      "600 g de cerises",
      "- 40 g de beurre semi-sel + 20 g pour le moule",
      "- 4 oeufs",
      "- 1 sachet de sucre vanillé",
      "-2cl de kirsh",
      "- 1 pincée de sel",
      "- sucre glace"
    ],
    "persons": 8
  },
  {
    "title": "Rochers aux coco",
    "ingredients": [
      "2 oeufs",
      "150g de noix de coco rapée",
      "55g de sucre en poudre"
    ],
    "persons": 2
  },
  {
    "title": "Blésotto de poireaux-jambon au Cookéo",
    "ingredients": [
      "650g de blancs de poireaux (frais ou surgelés)",
      "2 cc d'huile de tournesol",
      "230g de blé cru (type Ebly)",
      "150g de dés de jambon",
      "500ml d'eau",
      "1 bouillon cube",
      "3cs de crème fraîche à 15% de matière grasse"
    ],
    "persons": 5
  }
]
```

You have to read the file `recipes_data.json` and load his content in a list of dictionaries.

Expected output format:

```python
[{...}, {...}, {...}]
```

**Be careful to encoding when you read a file ! ;)**

## Usage

Here is a possible `test.py` to test your functions:

```python
import read_recipes

if __name__ == '__main__':
    print(read_recipes.get_recipes('recipes_data.json'))
```

```bash
$ python test.py
[{'title': 'clafouti aux cerises', 'ingredients': ['600 g de cerises', '- 40 g de beurre semi-sel + 20 g pour le moule', '- 4 oeufs', '- 1 sachet de sucre vanillé', '-2cl de kirsh', '- 1 pincée de sel', '- sucre glace'], 'persons': 8}, 
{'title': 'Rochers aux coco', 'ingredients': ['2 oeufs', '150g de noix de coco rapée', '55g de sucre en poudre'], 'persons': 2}, {'title': 'Blésotto de poireaux-jambon au Cookéo', 'ingredients': ['650g de blancs de poireaux (frais ou surgelés)', "2 cc d'huile de tournesol", '230g de blé cru (type Ebly)', '150g de dés de jambon', "500ml d'eau", '1 bouillon cube', '3cs de crème fraîche à 15% de matière grasse'], 'persons': 5}]
```


## Notions

* [Python and json basics](https://www.w3schools.com/python/python_json.asp)
* [`json` built-in package documentation](https://docs.python.org/fr/3/library/json.html)
* [Read and write files](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python/7300396-chargez-des-donnees-avec-python#/id/r-7312728)
* [`open` built-in documentation](https://docs.python.org/fr/3/library/functions.html#open)
