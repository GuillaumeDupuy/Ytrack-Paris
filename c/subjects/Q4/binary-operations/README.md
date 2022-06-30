# Instructions

Create a filename `binary-operations.c` and write 2 functions `add2binaries()` and `productBinary2()`.

- `add2binaries()` takes 2 int as parameters and returns the sum of the 2 int in binary

- `productBinary2()` takes an int as parameter and returns the product by 2 of it in binary, you are NOT ALLOWED to use the "\*" operator (you should check "shift operator" on internet 🙂)

> Since your functions are part of the "quest4.h" headerfile, you may want to use your function "binaryConverter" without importing anything more to make it simpler

# Expected Functions

```C
#include "quest4.h"

const char* add2binaries(int a, int b) {
    // your code here
}

const char* productBinary2(int a) {
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
    printf("%s\n", add2binaries(0b111000, 0b10111));
    printf("%s\n", productBinary2(0b10110));
}
```

And its output :

```
$ gcc main.c && ./a.out
1001111
101100
$
```
