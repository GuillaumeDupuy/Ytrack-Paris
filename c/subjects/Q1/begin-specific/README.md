# Instructions

Create a filename `begin-specific.c`, write a function `beginSpecific()` that takes 2 strings as parameter, it returns true if the first string starts with the second string.

# Expected Functions

```C
#include <stdbool.h>

bool beginSpecific(char* str, char* toFind)
{
    // Your code
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include <stdbool.h>
#include "begin-specific.c"

void main (void)
{
    printf("%d\n",BeginsWithSpecificCharacter("helloworld","hello"));
    printf("%d\n",BeginsWithSpecificCharacter("helloworld","world"));
}

```

And its output :

```
$ gcc main.c && ./a.out
1
0
$
```
