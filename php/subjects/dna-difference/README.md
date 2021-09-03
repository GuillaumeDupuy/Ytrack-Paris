### DNA difference

### Instructions

Geneticists need to calculate the differences between two strands of DNA represented, for example, as follows :

```
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
```

> The differences are represented by `^`. For example here the answer is 7.

Create a `dnaDiff` function which takes two `strings` as mandatory parameters and returns the number of differences between the two strands of DNA. If the two DNA strands are not the same size return false.

You are not allowed to use the native `array_diff` or` array_diff_assoc` functions, make your own.

### Notions

- [php.net/manual/en/function.array-diff.php](https://www.php.net/manual/en/function.array-diff.php)
