# Instructions

Create a filename `octal-converter.c` and write a function `octalConverter()` that takes an int as parameter and returns a string corresponding to this int in octal.

> Your function must handle number that are bigger than 8 characters when converted to octal, your function must return "0" in this case.

# Expected Functions

```C
#include "quest4.h"
#include <stdlib.h>

const char* octalConverter(int nbr) {
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
    printf("%s\n", octalConverter(128));
    printf("%s\n", octalConverter(1324));
}
```

And its output :

```
$ gcc main.c && ./a.out
200
2454
$
```
