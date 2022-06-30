#include <stdio.h>
#include "student/quest4.h"
#include <stdlib.h>

int main(int argc, char* argv[]) {
    if (argc > 1) {
        printf("%s",binaryConverter(atoi(argv[1])));
    }
}