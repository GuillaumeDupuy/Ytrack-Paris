#include <stdio.h>
#include "student/cut-decimals.c"
#include <stdlib.h>

int main(int argc, char* argv[]) {
    if (argc > 1) {
        cutDecimals(atof(argv[1]));
    }
}