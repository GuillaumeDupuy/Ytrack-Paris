import json

import pytest

import read_recipes

file_content = [
  {
    "title": "Flanboisier aux pêches",
    "ingredients": [
      "1 banane bien mûre",
      "250g de fromage blanc 0%",
      "3 œufs",
      "100g de compote sans sucre ajouté",
      "30g de maïzena",
      "10g de Stevia (ou autre sucrant)",
      "2 pêches mûres mais fermes"
    ],
    "persons": 6
  },
  {
    "title": "Spaghetti Napolitaine révisé",
    "ingredients": [
      "Spaghetti (n°7 barilla de préférence)",
      "Un demi-poivron vert",
      "Une tomate entière ou un quart de boîte de tomates pelées",
      "Un demi-oignon",
      "2 saucisses knackis",
      "Ail",
      "Huile d'olive",
      "Sel, poivre",
      "Ketchup (facultatif)"
    ],
    "persons": 1
  },
  {
    "title": "Yaourts miel et fleur d'oranger",
    "ingredients": [
      "1 Lde lait entier",
      "2 CàS de lait en poudre",
      "1 yaourt nature",
      "2 CàS  de miel liquide",
      "2CàS de fleur d'oranger"
    ],
    "persons": 8
  },
  {
    "title": "clafouti aux cerises",
    "ingredients": [
      "600 g de cerises",
      "- 40 g de beurre semi-sel + 20 g pour le moule",
      "- 4 oeufs",
      "- 20 cl de lait",
      "- 100 g de farine",
      "- 60 g de sucre en poudre",
      "- 1 sachet de sucre vanillé",
      "-2cl de kirsh",
      "- 1 pincée de sel",
      "- sucre glace"
    ],
    "persons": 8
  },
  {
    "title": "Croissant de la mer",
    "ingredients": [
      "2 croissants"
    ],
    "persons": 2
  },
  {
    "title": "Galettes des rois",
    "ingredients": [
      "Pour la pâte feuilletée :",
      "250 g de farine",
      "190 g de beurre doux 125 g d'eau",
      "1 pincée de sel",
      "80 g d'oeufs",
      "80 g de sucre",
      "80 g de beurre doux",
      "80 g de poudre d'amande",
      "20 g de rhum",
      "200 g de lait",
      "40 g de sucre",
      "20 g de farine",
      "40 g de jaune d'oeuf"
    ],
    "persons": 4
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
    "title": "Galette de légumes",
    "ingredients": [
      "2 pommes de terre",
      "1/2 patate douce",
      "1/2 carotte",
      "1 œuf",
      "1 pincé de sel",
      "1 pincé se poivre",
      "Ciboulette"
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
  },
  {
    "title": "Wacky cake",
    "ingredients": [
      "100 g de farine de sarrasin, seigle ou de châtaigne ou maizena  ou",
      "100g de farine t 45 ( si pas allergique au gluten)",
      "4C à S  de cacao en poudre",
      "200 g de sucre roux",
      "1 cuil. à soupe de levure",
      "1 cuil. à café de sel",
      "1 cuil. à soupe de vanille liquide",
      "1 cuil. à soupe de vinaigre blanc",
      "7,5 cl d’huile végétale (tournesol ou pépins de raisin)",
      "24 cl d’eau chaude",
      "30g de  noix de pecan ( facultatif)",
      "le  glaçage",
      "125 g de chocolat noir  patissier",
      "80 de beurre de cacahuète",
      "25 g de matière grasse végétale",
      "3 c. à s. d'eau"
    ],
    "persons": 6
  }
]


def test_get_recipes(tmp_path):
    file_path = tmp_path / 'recipes_data.json'
    with open(file_path, 'w') as f:
        json.dump(file_content, f)
    expected = file_content
    
    res = read_recipes.get_recipes(file_path)
    
    assert res == expected, 'This function should return the file content as a list of dictionaries'


def test_get_recipes_with_unexisting_file():
    with pytest.raises(OSError):
        read_recipes.get_recipes('invalid_file.json')
