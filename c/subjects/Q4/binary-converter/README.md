# Instructions

Create a filename `binary-converter.c` and write a function `binaryConverter()` that takes an int as parameter and returns a string corresponding to this int in binary.

> ⚠️ From now on, every function you will write must be part of a headerfile called "quest4.h", if you don't know what is a headerfile, I let you check on internet.

You can return 16 bits numbers at most, if the number passed as parameter is above, you must return 0

# Expected Functions

```C
#include "quest4.h"
#include <stdlib.h>

const char* binaryConverter(int nbr) {
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "quest4.h"
#include <stdio.h>

int main()
{
    printf("%s\n", binaryConverter(128));
    printf("%s\n", binaryConverter(1324));
}
```

And its output :

```
$ gcc main.c && ./a.out
10000000
10100101100
$
```
