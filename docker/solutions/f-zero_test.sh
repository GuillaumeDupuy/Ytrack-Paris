#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=$'\n\t'

# Variables
declare -i I=0
declare -i RES=10
FILE=$(cat /jail/student/f-zero/f-zero.sh)
DOCKERFILE="/jail/student/f-zero/Dockerfile"
SOLUTION_1_1="docker buildx create"
SOLUTION_1_2="--name captain-falcon"
SOLUTION_2="docker buildx build"
SOLUTION_3_1="--platform"
SOLUTION_3_2="linux/amd64"
SOLUTION_3_3="linux/arm64"
SOLUTION_4="--push" # optional
SOLUTION_5="-t blue-falcon ."
SOLUTION_6=$(cat $DOCKERFILE | grep -c "FROM almalinux")
SOLUTION_7=$(cat $DOCKERFILE | grep -c "dnf update -y")
SOLUTION_8=$(cat $DOCKERFILE | grep -c "CMD echo \"Hey I'm using \"\$(uname -m)\"!\"")

echo insecure >> ~/.curlrc
# actual equality test

# TEST 01
if [[ "$FILE" == *"$SOLUTION_1_1"* ]]
then
        echo "-- Test 01 passed"
        echo "Docker buildx create command properly used"
        echo
	    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, wrong command used"
        echo
fi

# TEST 02
if [[ "$FILE" == *"$SOLUTION_1_2"* ]]
then
        echo "-- Test 02 passed"
        echo "Show me your moves!"
        echo
        I+=1
else
        echo "-- Test 02 failed"
        echo "Error, wrong name given to the builder"
        echo
fi

# TEST 03
if [[ "$FILE" == *"$SOLUTION_2"* ]]
then
        echo "-- Test 03 passed"
        echo "Docker buildx build command properly used"
        echo
        I+=1
else
        echo "-- Test 03 failed"
        echo "Error, wrong command used"
        echo
fi

# TEST 04
if [[ "$FILE" == *"$SOLUTION_3_1"* ]]
then
        echo "-- Test 04 passed"
        echo "Platform argument set"
        echo
        I+=1
else
        echo "-- Test 04 failed"
        echo "Error, no platform argument"
        echo
fi

# TEST 05
if [[ "$FILE" == *"$SOLUTION_3_2"* ]]
then
        echo "-- Test 05 passed"
        echo "x86_64 architecture set"
        echo
        I+=1
else
        echo "-- Test 05 failed"
        echo "Error, missing x86_64 architecture"
        echo
fi

# TEST 06
if [[ "$FILE" == *"$SOLUTION_3_3"* ]]
then
        echo "-- Test 06 passed"
        echo "ARM architecture set"
        echo
        I+=1
        else
        echo "-- Test 06 failed"
        echo "Error, missing ARM architecture"
        echo
fi

# ADDITIONAL TEST
if [[ "$FILE" == *"$SOLUTION_4"* ]]
then
        echo "-- Easter egg passed"
        echo "If you wish to push your image, make sure you have a DockerHub account"
        echo
fi

# TEST 07
if [[ "$FILE" == *"$SOLUTION_5"* ]]
then
        echo "-- Test 07 passed"
        echo "The Blue Falcon is ready to be built"
        echo
        I+=1
else
        echo "-- Test 07 failed"
        echo "Error, wrong name"
        echo
fi

# TEST 08
if [[ "$SOLUTION_6" == 1 ]]
then
        echo "-- Test 08 passed"
        echo "Almalinux image used"
        echo
        I+=1
else
        echo "-- Test 08 failed"
        echo "Error, wrong image used in Dockerfile"
        echo
fi

# TEST 09
if [[ "$SOLUTION_7" == 1 ]]
then
        echo "-- Test 09 passed"
        echo "AlmaLinux updated"
        echo
        I+=1
else
        echo "-- Test 09 failed"
        echo "Error, you're not updating the system"
        echo
fi

# TEST 10
if [[ "$SOLUTION_8" == 1 ]]
then
        echo "-- Test 10 passed"
        echo "Command properly used"
        echo
        I+=1
else
        echo "-- Test 10 failed"
        echo "Error, wrong command"
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