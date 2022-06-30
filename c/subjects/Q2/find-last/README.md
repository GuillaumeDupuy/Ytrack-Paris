# Instructions

Create a filename `find-last.c`, write a function `findLast()` that returns the index of the last occurence of a value in the Array passed as parameter,the second parameter is the value we want to find, the third parameter is the length of the array.

# Expected Functions

```C
int findLast(int* ptr, int nbr, int arraySize)
{
    // your code here
}
```

# Usage

Here is a possible `main.c` file to test your function :

```C
#include <stdio.h>
#include "find-last.c"

int main()
{
    int arr1[5]={8,6,3,6,12};
    int arr2[17]={3,14,15,54,65,35,89,79,32,38,46,26,43,38,32,79,5};
    printf("%d\n",findLast(arr1, 6, 5));
    printf("%d\n",findLast(arr2, 38, 17));
}
```

And its output :

```
$ gcc main.c && ./a.out
3
13
$
```
