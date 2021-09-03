### Line breaker

### Instructions

Create a `breakLines` function that performs automatic line breaks.

It must return a character string including line breaks : "\n" respecting the following criteria :

1. A line cannot exceed the length of the line.
2. Each line should be as long as possible.
3. Line breaks are between two words (on a space).
4. The function keeps the line breaks already present.
5. The function cannot (error) divide a line with a word larger than the maximum line size.

`breakLines` with the following available parameters:

- The string to break : `string`
- The maximum length of each sentence : `int`

Example :

```php
breakLines('Line with words', 15); // Line with words

breakLines("Line with words should break", 15); // Line with words\nshould break

breakLines("Line with words should break at this spot", 15); // Line with words\nshould break at\nthis spot
```
