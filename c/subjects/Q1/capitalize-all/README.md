# Instructions

Create a filename `capitalize-all.c`, write a function `capitalizeAll()` that returns the string passed as parameter in ALL CAPS.

# Expected Functions

```C
#include <stdlib.h>

const char* capitalizeAll(char *str)
{
    // Your code
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "capitalize-all.c"

void main (void)
{
    printf("%s\n",capitalizeAll("Hello World !"));
}

```

And its output :

```
$ gcc main.c && ./a.out
HELLO WORLD !
$
```
