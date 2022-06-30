# Instructions

Create a filename `cross-size.c` and write a function `crossSize()` that prints a cross of '\*' with a size that depends on the int passed as parameter.
for example, with the parameter 5, this function should print this:

```
*   *
 * *
  *
 * *
*   *
```

# Expected Functions

```C
#include <stdio.h>
void crossSize(int size) {
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "cross-size.c"

int main()
{
    crossSize(5);
    crossSize(8);
}
```

And its output :

```
$ gcc main.c && ./a.out
*   *
 * *
  *
 * *
*   *
*      *
 *    *
  *  *
   **
   **
  *  *
 *    *
*      *
$
```
