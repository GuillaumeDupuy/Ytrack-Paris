#include <stdio.h>
#include "student/binary-table.c"
#include <stdlib.h>

int main(int argc, char* argv[]) {
    if (argc > 1) {
        binaryTable(atoi(argv[1]));
    }
}