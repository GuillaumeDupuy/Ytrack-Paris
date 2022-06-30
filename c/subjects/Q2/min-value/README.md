# Instructions

Create a filename `min-value.c`, write a function `minValue()` that returns the minimum value of an Array passed as parameter, the second parameter passed is the length of the array.

# Expected Functions

```C
int minValue(int* array, int arraySize)
{
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "min-value.c"

int main()
{
    int arr1[4]={8,3,5,12};
    int arr2[17]={5,14,15,92,65,35,89,79,32,38,46,26,43,38,32,79,3};
    printf("%d\n",minValue(arr1, 4));
    printf("%d\n",minValue(arr2, 17));
}
```

And its output :

```
$ gcc main.c && ./a.out
5
3
$
```
