# Instructions

Create a filename `set-bit.c` and write a function `setBit()` that takes 2 int as parameters and set to 1 the bit at the position of the second parameter in the number of the first parameter

for example:

```
setBit(10100110, 4) returns "10101110"
            ^321                  ^321
```

# Expected Functions

```C
#include "quest4.h"

const char* setBit(int nbr, int index) {
    // Your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "quest4.h"
#include <stdio.h>

int main()
{
    printf("%s\n", setBit(0b110101, 4));
    printf("%s\n", setBit(0b10110010, 7));
}
```

And its output :

```
$ gcc main.c && ./a.out
111101
11110010
$
```
