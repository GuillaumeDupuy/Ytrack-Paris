# Instructions

Create a filename `min-position.c`, write a function `minPosition()` that returns the index of the minimum value of an Array passed as parameter, the second parameter passed is the length of the array.

# Expected Functions

```C
int minPosition(int* array, int arraySize)
{
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "min-position.c"

int main()
{
    int arr1[4]={8,3,5,12};
    int arr2[17]={5,14,15,54,65,35,89,79,32,38,46,26,43,38,32,79,3};
    printf("%d\n",minPosition(arr1, 4));
    printf("%d\n",minPosition(arr2, 17));
}
```

And its output :

```
$ gcc main.c && ./a.out
1
16
$
```
