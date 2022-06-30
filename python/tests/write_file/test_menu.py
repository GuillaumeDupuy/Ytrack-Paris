import datetime as dt
import os

import menu

expected_file_path = 'menu.txt'
meals = [
    (dt.date(2022, 5, 6), 'Pates aux beurre'),
    (dt.date(2022, 5, 7), 'Filet de saumon mariné'),
    (dt.date(2022, 5, 8), 'Boeuf Bourguignon'),
]
expected_content = '''
Friday 06 May 2022: Pates aux beurre
Saturday 07 May 2022: Filet de saumon mariné
Sunday 08 May 2022: Boeuf Bourguignon
'''.strip()


def test_save_menu():
    menu.save_menu(meals)

    is_file_exists = os.path.exists(expected_file_path)
    assert is_file_exists, f'file {expected_file_path} not found'

    if is_file_exists:
        with open(expected_file_path, 'r') as f:
            content = f.read()
            
        content = content.strip()
        assert content == expected_content
