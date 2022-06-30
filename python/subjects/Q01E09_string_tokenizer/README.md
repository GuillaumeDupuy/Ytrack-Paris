# String tokenizer

## Instructions

Tokenization is the process of separating words from a sentence. It often the first step in text analysis.
Here, we implement or own string tokenizer.

Create a file `string_processing.py` with a function `tokenize(sentence)`.

Given a sentence, this function should :

* remove all punctuation sign and special character. Given token must be only letters or numbers
* separate each word. "n'est" => 2 words ("n", "est"), "c'est-à-dire" => 4 words
* put words to lower case

Return a list of words.

## Usage

Here is a possible `test.py` to test your functions:

```python
import string_processing

if __name__ == '__main__':
    my_sentence = "Dites, on n'attend pas votre soeur ?"
    print(string_processing.tokenize(my_sentence))
```

```bash
$ python test.py
['dites', 'on', 'n', 'attend', 'pas', 'votre', 'soeur']
```

## Notions

* [string methods](https://www.w3schools.com/python/python_ref_string.asp)
* [replace](https://www.w3schools.com/python/ref_string_replace.asp)
* [split](https://www.w3schools.com/python/ref_string_split.asp)
* import "string" module and [get all string punctuations](https://docs.python.org/3/library/string.html#string.punctuation)
* [Tokenization in text analysis](https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization)
* [Word segmentation](https://en.wikipedia.org/wiki/Text_segmentation#Word_segmentation)
