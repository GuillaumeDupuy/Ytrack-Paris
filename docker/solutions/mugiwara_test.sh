#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=$'\n\t'

# Variables
FILE=$(cat /jail/student/mugiwara.sh)

echo insecure >> ~/.curlrc

# TEST
if [[ "$FILE" == "M4r1ne-F0rd!" ]]
then
        echo "-- Test 01 passed"
        echo "Right password, welcome back !"
        echo
        exit 0

else
        echo "-- Test 01 failed"
        echo "Error, wrong password."
        echo
        exit 1
fi