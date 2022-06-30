#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -euo pipefail
IFS=$'\n\t'

# Variables
declare -i I=0
declare -i RES=3
FILE=$(cat /jail/student/my-first-container.sh)
SOLUTION_1="docker run"
SOLUTION_2="hello-world"
SOLUTION_3="--name my-first-container"

echo insecure >> ~/.curlrc
# actual equality test

# TEST 01
if [[ "$FILE" == *"$SOLUTION_1"* ]]
then
        echo "-- Test 01 passed"
        echo "Docker run command properly used"
        echo
	I+=1
else
        echo "-- Test 01 failed"
        echo "Error, wrong command used"
        echo
fi

# TEST 02
if [[ "$FILE" == *"$SOLUTION_2"* ]]
then
        echo "-- Test 02 passed"
        echo "Hello-world image used"
        echo
	I+=1
else
        echo "-- Test 02 failed"
        echo "Error, wrong image used"
        echo
fi

# TEST 03
if [[ "$FILE" == *"$SOLUTION_3"* ]]
then
        echo "-- Test 03 passed"
        echo "Container named my-first-container"
        echo
	I+=1
else
        echo "-- Test 03 failed"
        echo "Error, container has the wrong name"
        echo
fi

# Number of tests passed
echo "----------------------"
echo "-- $RES tests in total"
echo "----------------------"
echo "-- $I tests passed"
echo "-- $(($RES-$I)) failed"
echo "----------------------"

# Tests cheking, if I == number of tests, then exit status 0, else exit status 1
if [ $I == $RES ]
then
        echo "All tests passed !"
        exit 0
else
        echo "Not all tests passed"
        exit 1
fi