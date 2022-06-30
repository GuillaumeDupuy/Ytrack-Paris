# Instructions

Create a filename `display-current-date.c` and write a function `displayCurrentDate()` that prints the date of today and the current time, in the default format `Hours:Minutes:Seconds Day/Month/Year`

# Expected Functions

```C
#include <stdio.h>
void displayCurrentDate (void) {
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "display-current-date.c"

int main()
{
    displayCurrentDate();
}
```

And its output :

```
$ gcc main.c && ./a.out
11:32:04 04/03/2022
$
```
