# School punishment

## Instructions

Did you ever have to write a punishment at school ? Hundreds lines to copy is boring ! Fortunately, it is so easy with python !

Create a file `punishment.py` and create a function `do_punishment` with the following signature:

```python
def do_punishment(first_part, second_part, nb_lines):
    pass
```

This function must concatenate first and second parts (with a space between) and repeat this sentence `nb_lines` times in a single long string.

**Cautions**

* Each sentence must ending with dot `.` and must be separated with a space (see example bellow).
* You should remove every space before or after sentences parts. Ex: `   a sentence bla bla  ` => `a sentence bla bla`. See notions bellow


## Usage

Here is a possible `test.py` to test your functions:

```python
import punishment

if __name__ == '__main__':
    print(punishment.do_punishment('Je ne jetterai plus de cacahuètes', 'sur le professeur.', 3))
    print(punishment.do_punishment('Je ne jetterai plus de cacahuètes', 'sur le professeur.        ', 3))
    print(punishment.do_punishment('Je ne jetterai plus de cacahuètes', '   sur le professeur', 3))
```

```bash
$ python test.py
Je ne jetterai plus de cacahuètes sur le professeur. Je ne jetterai plus de cacahuètes sur le professeur. Je ne jetterai plus de cacahuètes sur le professeur.
Je ne jetterai plus de cacahuètes sur le professeur. Je ne jetterai plus de cacahuètes sur le professeur. Je ne jetterai plus de cacahuètes sur le professeur.
Je ne jetterai plus de cacahuètes sur le professeur. Je ne jetterai plus de cacahuètes sur le professeur. Je ne jetterai plus de cacahuètes sur le professeur.
```

## Notions

* [strip](https://www.w3schools.com/python/ref_string_strip.asp)
* [rstrip](https://www.w3schools.com/python/ref_string_rstrip.asp)
* [endwith](https://www.w3schools.com/python/ref_string_endswith.asp)
* [string multiplication](https://www.geeksforgeeks.org/create-multiple-copies-of-a-string-in-python-by-using-multiplication-operator/)
