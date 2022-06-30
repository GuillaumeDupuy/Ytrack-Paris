# Numerical Operations

## Instructions

Create a file `numerical_operations.py` and implement following functions:

* `add(a, b)`
* `subtract(a, b)`
* `multiply(a, b)`
* `power(a, b)`
* `square(a)`

We assume that `a` and `b` are numbers (`int` or `float`).

## [Optional] Use a virtual environnement to run python code locally

Virtual environments can help you to run your code locally.

[Learn all you need about virtual environments](https://openclassrooms.com/fr/courses/6951236-mettez-en-place-votre-environnement-python/7013854-decouvrez-les-environnements-virtuels).

Here, we setup a virtual environment with miniconda.

First, [download and install miniconda](https://docs.conda.io/en/latest/miniconda.html).

Then, use those commands to create a new environment:

```bash
# create a new virtual environment for python 3.10
$ conda create --name my_env python=3.10

# activate your new environment
$ conda activate my_env

# From now, all python command use this python version in this terminal
$ python --version
Python 3.10.4
```

I advise you to create one virtual environment per python project. Later, we can install external packages on our environment.


## Usage

Here is a possible `test.py` to test your functions:

```python
import numerical_operations

if __name__ == '__main__':
    print(numerical_operations.add(2, 2))
    print(numerical_operations.subtract(10, 5))
    print(numerical_operations.multiply(3, 4))
    print(numerical_operations.power(3, 3))
    print(numerical_operations.square(3))

```

```bash
$ python test.py
4
5
12
27
9
```


## Notions

* [Functions](https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python/7296396-regroupez-des-taches-en-utilisant-des-fonctions)
* [Operations](https://www.geeksforgeeks.org/python-arithmetic-operators/)
