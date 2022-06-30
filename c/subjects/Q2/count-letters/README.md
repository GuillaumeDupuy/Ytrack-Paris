# Instructions

Create a filename `count-letters.c`, write a function `countLetters()` that returns the amount of time a letter is occured in the string passed as first parameter

# Expected Functions

```C
#include <stdbool.h>

int countLetters(char* str, char* toFind)
{
    // Your code
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "count-letters.c"

int main (void)
{
    printf("%d\n",countLetters("Hello World !","o"));
}

```

And its output :

```
$ gcc main.c && ./a.out
2
$
```
