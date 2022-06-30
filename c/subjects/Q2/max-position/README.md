# Instructions

Create a filename `max-position.c`, write a function `maxPosition()` that returns the index of the maximum value of an Array passed as parameter, the second parameter passed is the length of the array.

# Expected Functions

```C
int maxPosition(int* array, int arraySize)
{
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "max-position.c"

int main()
{
    int arr1[4]={8,3,5,12};
    int arr2[17]={3,14,15,54,65,35,89,79,32,38,46,26,43,38,32,79,5};
    printf("%d\n",maxPosition(arr1, 4));
    printf("%d\n",maxPosition(arr2, 17));
}
```

And its output :

```
$ gcc main.c && ./a.out
3
6
$
```
