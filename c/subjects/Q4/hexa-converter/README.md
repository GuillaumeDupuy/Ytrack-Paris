# Instructions

Create a filename `hexa-converter.c` and write a function `hexaConverter()` that takes an int as parameter and returns a string corresponding to this int in hexadecimal.

> Your function will only be tested with numbers less than 8 characters long in hexa

# Expected Functions

```C
#include "quest4.h"
#include <stdlib.h>

const char* hexaConverter(int nbr) {
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
    printf("%s\n", hexaConverter(10));
    printf("%s\n", hexaConverter(1324));
}
```

And its output :

```
$ gcc main.c && ./a.out
A
52C
$
```
