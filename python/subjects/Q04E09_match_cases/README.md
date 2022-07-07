# Match cases

## Instructions

Create file `app.py` and a function `init_dock_repository`. That function read DOCK_REPOSITORY environment variable and return the correct `SpaceDockRepository` implementation accordingly.

Use following mapping between DOCK_REPOSITORY env variable value and implementation to use:

* in_memory => `SpaceDockInMemoryRepository`
* file => `SpaceDockFileRepository` (with file "fleets.pickle")

You should handle upper and lower case variable value.

Use "in_memory" as default value.

Raise a ValueError if invalid any other is passed to DOCK_REPOSITORY. Use following error message:

```python
"Repository <bad_value> does not exist"
```

## Tips

* You cas use the `match/case` python syntax.

## Usage

Here is a possible `test.py` to test your functions:

```python
import os
from app import init_dock_repository

if __name__ == '__main__':
    os.environ['DOCK_REPOSITORY'] = 'in_memory'
    print(type(init_dock_repository()))

    os.environ['DOCK_REPOSITORY'] = 'incorrect'
    init_dock_repository()
```

```bash
$ python test.py
<class 'dock_repositories.SpaceDockInMemoryRepository'>
Traceback (most recent call last):
    ...
ValueError: Repository incorrect does not exist
```

## Notion

* [match case syntax](https://learnpython.com/blog/python-match-case-statement/)
* [os module](https://docs.python.org/fr/3/library/os.html)
