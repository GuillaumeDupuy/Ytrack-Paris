#include <stdio.h>
#include "student/cross-size.c"
#include <stdlib.h>

int main(int argc, char* argv[]) {
    if (argc > 1) {
        crossSize(atoi(argv[1]));
    }
}