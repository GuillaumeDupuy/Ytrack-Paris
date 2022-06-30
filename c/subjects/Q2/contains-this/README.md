# Instructions

Create a filename `contains-this.c`, write a function `containsThis()` that returns true if the Array passed as parameter contains the value of the second parameter, the third parameter is the length of the array.

# Expected Functions

```C
#include <stdbool.h>
bool containsThis(int* ptr, int nbr, int arraySize)
{
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "contains-this.c"

int main()
{
    int arr1[5]={8,6,3,6,12};
    int arr2[17]={3,14,15,54,65,35,89,79,32,38,46,26,43,38,32,79,5};
    printf("%d\n",containsThis(arr1, 3, 5));
    printf("%d\n",containsThis(arr2, 90, 17));
}
```

And its output :

```
$ gcc main.c && ./a.out
1
0
$
```
