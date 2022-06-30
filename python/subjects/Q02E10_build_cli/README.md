# Build a CLI

## Instructions

create a CLI (command line interface) tool with python. Create a file `cli.py` that contains your CLI code.

You can reuse most of the files and functions your wrote during this quest:

* `datetime_utils.py`
* `menu.py`
* `filter_recipes.py`
* `sort_list.py`
* `recipes.py`
* `read_recipes.py`
* `recipes_data.json`

**Specifications:**

* parse 2 arguments from command line: `--start` or `-s` (start date) and `--max-persons` or `-p` (maximum persons number for recipes)
* `--max-persons` argument should be optional, his default value is 4
* load recipes data from `recipes_data.json` file (see bellow for file content example)
* sort recipes by their title (alphabetically)
* keep recipes with person number lower than `--max-persons`
* format menu with date and recipe title
* write menu in `menu.txt` file


## Usage

Following commands are both equivalent:

```bash
$ python cli.py --start 15/06/2022 --max-persons 6
$ python cli.py -s 15/06/2022 -p 6
```

```bash
$ cat menu.txt
Wednesday 15 June 2022: Blésotto de poireaux-jambon au Cookéo
Thursday 16 June 2022: Rochers aux coco
```


## Notions

* [Build CLI tool with argparse](https://docs.python.org/3/library/argparse.html)

## Data

`recipes_data.json` content:

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
