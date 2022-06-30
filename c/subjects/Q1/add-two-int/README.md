# Instructions

Create a filename `add-two-int.c`, write a function `addTwoInt()` that returns the sum of two integers passed as parameter.

# Expected Functions

```C
#include <stdio.h>

int addTwoInt(int a, int b)
{
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "add_two_int.c"

int main()
{
    printf("%i\n", addTwoInt(2, 5));
    printf("%i\n", addTwoInt(25, 30));
}
```

And its output :

```
$ gcc main.c && ./a.out
7
155
$
```
