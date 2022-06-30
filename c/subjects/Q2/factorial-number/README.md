# Instructions

Create a filename `factorial-number.c`, write a function `factorialNumber()` that returns the factorial of the number passed as parameter.

> 💡 Factorial of 5 :
>
> 5! = 5 \* 4 \* 3 \* 2 \* 1 = 120

# Expected Functions

```C
int factorialNumber(int a)
{
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "factorial-number.c"

int main()
{
    printf("%i\n", factorialNumber(5));
    printf("%i\n", factorialNumber(8));
}
```

And its output :

```
$ gcc main.c && ./a.out
120
40320
$
```
