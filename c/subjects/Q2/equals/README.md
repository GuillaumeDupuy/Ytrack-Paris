# Instructions

Create a filename `equals.c`, write a function `equals()` that returns true if both arrays passed as parameters are the same. The third parameter is the length of both arrays (they have to be the same length)

# Expected Functions

```C
#include <stdbool.h>
bool equals(int* arr1, int* arr2, int arraySize)
{
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "equals.c"

int main()
{
    int arr1[5]={8,6,3,6,12};
    int arr2[5]={8,6,3,6,12};
    int arr3[5]={8,6,3,7,12};

    printf("%d\n",equals(arr1, arr2, 5));
    printf("%d\n",equals(arr2, arr3, 5));
}
```

And its output :

```
$ gcc main.c && ./a.out
1
0
$
```
