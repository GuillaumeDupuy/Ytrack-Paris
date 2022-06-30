#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -euo pipefail
IFS=$'\n\t'

# Variables
FILE=$(cat /jail/student/sinnoh.sh)

echo insecure >> ~/.curlrc

# TEST
if [[ "$FILE" == *"lejn87Y67Bhjb673F867kjyh?JHY-è54"* ]]
then
        echo "-- Test 01 passed"
        echo "Right password trainer!"
        echo
        exit 0
else
        echo "-- Test 01 failed"
        echo "Error, wrong password."
        echo
        exit 1
fi