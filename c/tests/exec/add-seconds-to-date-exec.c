#include <stdio.h>
#include "student/add-seconds-to-date.c"
#include <stdlib.h>

int main(int argc, char* argv[]) {
    if (argc > 1) {
        addSecondsToDate(atoi(argv[1]));
    }
}