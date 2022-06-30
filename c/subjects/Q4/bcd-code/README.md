# Instructions

Create a filename `bcd-code.c` and write a function `BCDCode()` that prints the BCD Code in a specific format (see "Usage" heading)

# Expected Functions

```C
#include <stdio.h>
void BCDCode(int bitnumber) {
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "bcd-code.c"

int main()
{
    BCDCode()
}
```

And its output :

```
$ gcc main.c && ./a.out
| 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
$
```
