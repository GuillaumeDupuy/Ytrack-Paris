# Instructions

Create a filename `number-is-odd.c`, write a function `isOdd()` that returns 1 if the number passed as parameter is odd, and 0 otherwise.

# Expected Functions

```C
int isOdd(int nbr) {
    // Your code;
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "number_is_odd.c"

int main()
{
    printf("%d\n", isOdd(25));
    printf("%d\n", isOdd(14));
}
```

And its output :

```
$ gcc main.c && ./a.out
1
0
$
```
