# Instructions

Create a filename `int-to-duration.c` and write a function `intToDuration()` that convert the duration in seconds passed as parameter into days, hours, minutes and seconds, and prints it in a specific format (see example below) with a newline ("\n") at the end of it.

For example, with the parameter 200 000, the functions must print `2d 7h 33m 20s`

# Expected Functions

```C
#include <stdio.h>
void intToDuration(int nbrSeconds) {
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "int-to-duration.c"

int main()
{
    intToDuration(1000);
    intToDuration(200000);
}
```

And its output :

```
$ gcc main.c && ./a.out
0d 0h 16m 40s
2d 7h 33m 20s
$
```
