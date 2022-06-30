# Instructions

Create a filename `spell-backward.c`, write a function `spellItBackward()` that returns the string passed as parameter reversed.

# Expected Functions

```C
#include <stdlib.h>

const char* spellItBackward(char *str)
{
    // Your code
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "spell-backward.c"

void main (void)
{
    printf("%s\n", spellItBaward("Hello World !"));
}

```

And its output :

```
$ gcc main.c && ./a.out
! dlroW olleH
$
```
