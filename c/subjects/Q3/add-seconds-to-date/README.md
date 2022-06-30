# Instructions

Create a filename `add-seconds-to-date.c` and write a function `display-current-date()` that prints the date of today and the current time + the number of seconds passed as parameter, in the default format `Hours:Minutes:Seconds Day/Month/Year`, with a newline ("\n") at the end.

# Expected Functions

```C
#include <stdio.h>
void addSecondsToDate(int seconds) {
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include "add-seconds-to-date.c"

int main()
{
    addSecondsToDate(10);
    addSecondsToDate(100);
}
```

And its output :

```
$ gcc main.c && ./a.out
11:32:04 04/03/2022
11:33:34 04/03/2022
$
```
