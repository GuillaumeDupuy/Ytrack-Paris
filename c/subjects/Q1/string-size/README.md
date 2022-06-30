# Instructions

Create a filename `string-size.c`, write a function `getStringSize()` that takes a string as parameter and returns the size of it.

# Expected Functions

```C
int getStringSize(char *s) {
    // Your code
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "string-size.c"

void main (void)
{
    printf("%d\n", getStringSize("Hello World !"));
}

```

And its output :

```
$ gcc main.c && ./a.out
13
$
```
