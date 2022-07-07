# Save an object

## Instructions

We want to save our space dock object in a file.

Create a file `dock_repositories.py` with class `SpaceDockFileRepository`. That class take a file name (as string) in constructor and store it in instance attribute.

Implements 2 following methods:

* `save(self, dock: SpaceDock) -> None`: serialize the dock object in a pickle file (use file name attribute)
* `load(self) -> SpaceDock`: load SpaceDock instance from pickle file if exists. Else, create and return new SpaceDock instance

## Usage

Here is a possible `test.py` to test your functions:

```python
from dock import SpaceDock
from dock_repository import SpaceDockFileRepository
from spaceships import Interceptor, Frigate

if __name__ == '__main__':
    dock = SpaceDock()
    dock['default'] += [Interceptor(), Interceptor()]
    dock['defenders'] = [Frigate(), Frigate(), Interceptor()]
    print(dock)
    
    dock_repo = SpaceDockFileRepository('fleets.pickle')
    dock_repo.save(dock)
    
    retrieved_dock = dock_repo.load()
    print(retrieved_dock)
```

```bash
$ python test.py
default: 2 ships, defenders: 3 ships
default: 2 ships, defenders: 3 ships
```

## Notion

* [pickle basics](https://www.datacamp.com/tutorial/pickle-python-tutorial)
* [pickle video](https://www.youtube.com/watch?v=a1mK13lGrQ8)
* [pickle module documentation](https://docs.python.org/3/library/pickle.html)
* [os path module](https://docs.python.org/3/library/os.path.html)
* [check if file exists](https://docs.python.org/3/library/os.path.html#os.path.exists)
