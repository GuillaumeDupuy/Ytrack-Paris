import datetime as dt

import pytest

import menu

recipes = [
    {'title': 'Flanboisier aux pêches'},
    {'title': 'Spaghetti Napolitaine révisé'},
    {'title': 'Yaourts miel et fleur d\'oranger'},
    {'title': 'clafouti aux cerises'},
    {'title': 'Croissant de la mer'},
    {'title': 'Galettes des rois'},
    {'title': 'Rochers aux coco'},
    {'title': 'Galette de légumes'},
    {'title': 'Blésotto de poireaux-jambon au Cookéo'},
    {'title': 'Wacky cake'},
]


@pytest.mark.parametrize('start_date, expected', [
    pytest.param(
        dt.date(2020, 2, 27),
        [
            (dt.date(2020, 2, 27), 'Flanboisier aux pêches'),
            (dt.date(2020, 2, 28), 'Spaghetti Napolitaine révisé'),
            (dt.date(2020, 2, 29), 'Yaourts miel et fleur d\'oranger'),
            (dt.date(2020, 3, 1), 'clafouti aux cerises'),
            (dt.date(2020, 3, 2), 'Croissant de la mer'),
            (dt.date(2020, 3, 3), 'Galettes des rois'),
            (dt.date(2020, 3, 4), 'Rochers aux coco'),
            (dt.date(2020, 3, 5), 'Galette de légumes'),
            (dt.date(2020, 3, 6), 'Blésotto de poireaux-jambon au Cookéo'),
            (dt.date(2020, 3, 7), 'Wacky cake'),
        ],
        id='should handle leap years',
    ),
    pytest.param(
        dt.date(2022, 6, 1),
        [
            (dt.date(2022, 6, 1), 'Flanboisier aux pêches'),
            (dt.date(2022, 6, 2), 'Spaghetti Napolitaine révisé'),
            (dt.date(2022, 6, 3), 'Yaourts miel et fleur d\'oranger'),
            (dt.date(2022, 6, 4), 'clafouti aux cerises'),
            (dt.date(2022, 6, 5), 'Croissant de la mer'),
            (dt.date(2022, 6, 6), 'Galettes des rois'),
            (dt.date(2022, 6, 7), 'Rochers aux coco'),
            (dt.date(2022, 6, 8), 'Galette de légumes'),
            (dt.date(2022, 6, 9), 'Blésotto de poireaux-jambon au Cookéo'),
            (dt.date(2022, 6, 10), 'Wacky cake'),
        ],
        id='nominal case',
    ),
    pytest.param(
        dt.date(2021, 12, 28),
        [
            (dt.date(2021, 12, 28), 'Flanboisier aux pêches'),
            (dt.date(2021, 12, 29), 'Spaghetti Napolitaine révisé'),
            (dt.date(2021, 12, 30), 'Yaourts miel et fleur d\'oranger'),
            (dt.date(2021, 12, 31), 'clafouti aux cerises'),
            (dt.date(2022, 1, 1), 'Croissant de la mer'),
            (dt.date(2022, 1, 2), 'Galettes des rois'),
            (dt.date(2022, 1, 3), 'Rochers aux coco'),
            (dt.date(2022, 1, 4), 'Galette de légumes'),
            (dt.date(2022, 1, 5), 'Blésotto de poireaux-jambon au Cookéo'),
            (dt.date(2022, 1, 6), 'Wacky cake'),
        ],
        id='between 2 years',
    ),
])
def test_build_menu(start_date: dt.date, expected: list[tuple[dt.date, str]]):
    res = menu.build_menu(recipes, start_date)
    assert res == expected, ("This function should return a list of tuple. Ex: "
                             "[(dt.date(2022, 6, 1), 'Flanboisier aux pêches'),"
                             "(dt.date(2022, 1, 2), 'Blésotto de poireaux-jambon au Cookéo')]. "
                             "All dates must be consecutive.")
