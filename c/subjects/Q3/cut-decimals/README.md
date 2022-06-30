# Instructions

Create a filename `cut-decimals.c`, write a function `cutDecimals()` that prints the float passed as parameter rounded with 5 decimals, don't forget to print a newline ("\n") at the end.

# Expected Functions

```C
#include <stdio.h>
int cutDecimals(float d) {
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "cut-decimals.c"

int main()
{
    cutDecimals(3.141592);
    cutDecimals(0.982199);
}
```

And its output :

```
$ gcc main.c && ./a.out
3.14159
0.98220
$
```
