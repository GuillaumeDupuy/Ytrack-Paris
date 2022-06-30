# Instructions

Create a filename `ascii-code.c` and write a function `asciiCode()` that prints all the characters from ascii code 33 to 126, with a newline ('\n') at the end.

> ⚠️ for loop MUST be used for this exercise ! You are not allowed to simply print out all the characters one after the other manually

# Expected Functions

```C
#include <stdio.h>
void asciiCode() {
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "ascii-code.c"

int main()
{
    asciiCode();
}
```

And its output :

```
$ gcc main.c && ./a.out
!"#$%&'()*+,-./0123456789:;<=> ?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
$
```
