# Abstract classes

## Instructions

Go to file `dock_repositories.py` and create an abstract class `SpaceDockRepository` that declare 2 abstract methods:

* `save(self, dock: SpaceDock) -> None:`
* `load(self) -> SpaceDock:`

Inherit the existing `SpaceDockFileRepository` from this abstract class.

Create a new class `SpaceDockInMemoryRepository` that implement `SpaceDockRepository`. That class does noe have constructor. The both methods save and load simply respectively save space dock in an instance attribute and load it from it.

## Usage

Here is a possible `test.py` to test your functions:

```python
from dock import SpaceDock
from dock_repositories import SpaceDockInMemoryRepository, SpaceDockRepository, SpaceDockFileRepository

if __name__ == '__main__':
    dock = SpaceDock()
    dock_repo = SpaceDockInMemoryRepository()

    dock_repo.save(dock)
    print(dock_repo.load() == dock)
```

```bash
$ python test.py
True
```

## Notion

* [abstract classes basics](https://www.geeksforgeeks.org/abstract-classes-in-python/)
* [full ABC documentation](https://docs.python.org/3/library/abc.html)
