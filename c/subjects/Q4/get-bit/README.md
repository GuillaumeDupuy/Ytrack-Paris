# Instructions

Create a filename `get-bit.c` and write a function `getBit()` that takes 2 int as parameters and returns the bit at the position of the second parameter in the first int passed as parameter

for example:

```
getBit(10100110, 3) returns 1
             ^21
```

# Expected Functions

```C
#include "quest4.h"

int getBit(int nbr, int index) {
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
    printf("%d\n", getBit(0b110101, 3));
    printf("%d\n", getBit(0b10110010, 4));
}
```

And its output :

```
$ gcc main.c && ./a.out
1
0
$
```
