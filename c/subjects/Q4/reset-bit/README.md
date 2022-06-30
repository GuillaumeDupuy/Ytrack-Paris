# Instructions

Create a filename `reset-bit.c` and write a function `resetBit()` that takes 2 int as parameters and reset to 0 the bit at the position of the second parameter in the number of the first parameter

for example:

```
resetBit(10100110, 3) returns "10100010"
               ^21                   ^21
```

# Expected Functions

```C
#include "quest4.h"

const char* resetBit(int nbr, int index) {
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
    printf("%s\n", resetBit(0b110101, 3));
    printf("%s\n", resetBit(0b10110010, 5));
}
```

And its output :

```
$ gcc main.c && ./a.out
110001
10100010
$
```
