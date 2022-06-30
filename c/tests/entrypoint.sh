#!/bin/bash

set -e

FILENAME=/jail/student/${EXERCISE}.c

BINCONVFILE=/jail/student/binary-converter.c
EXTRA=""
if [ -f "$BINCONVFILE" ] && [ ${EXERCISE} != "binary-converter" ]; then
    EXTRA=$BINCONVFILE
fi

if [ -f "$FILENAME" ]; then
    cc -fPIC -shared -o /jail/sharedFunctions.so /jail/student/${EXERCISE}.c ${EXTRA}
fi

EXECFILE=/app/exec/${EXERCISE}-exec.c
if [ -f "$EXECFILE" ]; then
    cp "/app/exec/${EXERCISE}-exec.c" "/jail/main.c"
fi
python3 /app/${EXERCISE}-tests.py