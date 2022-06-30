#include <stdio.h>
#include "student/int-to-duration.c"
#include <stdlib.h>

int main(int argc, char* argv[]) {
    if (argc > 1) {
        intToDuration(atoi(argv[1]));
    }
}