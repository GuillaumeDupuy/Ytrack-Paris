# Hello World !

Welcome to the python coding challenge ! After those four quests, you'll be an expert of this language ;) 

## Setup

First, youy need to install python in your computer. This course is designed for python 3.10. I recommand you to use the same version.

[Here to download and install python](https://www.python.org/downloads/)

To write your code, you may use yout favourite IDE. If you doesn't have one, i recommand you to use Visual Studio Code with python extension pack installed :

* [Get VScode here](https://code.visualstudio.com/)
* (Optional) [The python extension pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-extension-pack). Install it directly from VS code extensions manager

## Instructions

Create a file `hello_world.py` and write inside a function `say_hello_world` that return the string `"Hello World!"`.

```python
def say_hello_world():
    # this is a function,
    # write your code here
```

## Usage

Here is a possible code to test your function. Put it in an other file (ex: `test.py`):

```python
from hello_world import say_hello_world

if __name__ == '__main__':
    print(say_hello_world())
```

Run your test file with the following command:

```shell
$ python3 test.py
Hello World!
```

## Notions

* [Be careful to indentation!](https://www.w3schools.com/python/gloss_python_indentation.asp)
