# Instructions

Create a filename `remove-all-spaces.c`, write a function `removeSpaces()` that removes all the spaces in the string passed as parameter, and returns it.

# Expected Functions

```C
#include <stdlib.h>

const char* removeSpaces(char *str)
{
    // Your code
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "remove-all-spaces.c"

void main (void)
{
    printf("%s\n",removeSpaces("Hello World !"));
}

```

And its output :

```
$ gcc main.c && ./a.out
HelloWorld!
$
```
