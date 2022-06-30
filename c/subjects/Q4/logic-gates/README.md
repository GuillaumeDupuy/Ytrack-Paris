# Instructions

Create a filename `logic-gates.c` and write 3 functions `and2binaries()` and `or2binaries()` and `xor2binaries`, all 3 takes 2 int as parameters

- `and2binaries()` returns the AND operation of 2 int in binary.

- `or2binaries()` returns the OR operation of 2 int in binary.

- `xor2binaries()` returns the XOR operation of 2 int in binary.

# Expected Functions

```C
#include "quest4.h"

const char* and2binaries(int a, int b) {
    // Your code here
}

const char* or2binaries(int a, int b) {
    // Your code here
}

const char* xor2binaries(int a, int b) {
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
    printf("%s\n", and2binaries(0b110010, 0b101010));
    printf("%s\n", or2binaries(0b110010, 0b101010));
    printf("%s\n", xor2binaries(0b110010, 0b101010));
}
```

And its output :

```
$ gcc main.c && ./a.out
100010
111010
11000
$
```
