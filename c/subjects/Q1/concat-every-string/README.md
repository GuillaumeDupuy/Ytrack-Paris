# Instructions

Create a filename `concat-every-string.c`, write a function `concatEveryString()` that takes 2 strings as parameter and returns one string that concatenate both of them.

# Expected Functions

```C
#include <stdlib.h>

const char* concatEveryString(char *str1,char *str2)
{
    // Your code
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "concat-every-string.c"

void main (void)
{
    printf("%s\n", concatEveryString("Hello", "World"));
}

```

And its output :

```
$ gcc main.c && ./a.out
HelloWorld
$
```
