# Instructions

Create a filename `contains-substring.c`, write a function `containsSubstring()` that takes 2 strings as parameter and returns true if the first string contains the second string.

# Expected Functions

```C
#include <stdbool.h>

bool containsSubstring(char* str, char* toFind)
{
    // Your code
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "contains-substring.c"

void main (void)
{
    printf("%d\n",containsSubstring("Hello World !", "World"));
    printf("%d\n",containsSubstring("Hello World !", "Hey"));
}

```

And its output :

```
$ gcc main.c && ./a.out
1
0
$
```
