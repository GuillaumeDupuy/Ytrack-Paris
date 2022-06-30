#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -euo pipefail
IFS=$'\n\t'

# Variables
FILE=$(cat /jail/student/detached-database.sh)

echo insecure >> ~/.curlrc

# TEST
if [[ "$FILE" == "Ilovecats" ]]
then
        echo "-- Test 01 passed"
        echo "Right password, yes I love you too !"
        echo
        exit 0

else
        echo "-- Test 01 failed"
        echo "Error, wrong password."
        echo
        exit 1
fi
