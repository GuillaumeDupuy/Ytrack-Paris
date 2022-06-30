#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -euo pipefail
IFS=$'\n\t'

# Variables
declare -i I=0
declare -i RES=15
FILE=$(cat /jail/student/many-flags.sh | sed 's/=/ /')
SOLUTION_1="docker run"
SOLUTION_2_1="-t"
SOLUTION_2_2="--tty"
SOLUTION_3_1="-d"
SOLUTION_3_2="--detached"
SOLUTION_4_1="-td"
SOLUTION_4_2="-dt"
SOLUTION_5="mushroom-kingdom"
SOLUTION_6_1="--memory"
SOLUTION_6_2="-m"
SOLUTION_17="500"
SOLUTION_7="none"
SOLUTION_8="--read-only"
SOLUTION_9="--cpus 2"
SOLUTION_10_1="-e BROTHER="
SOLUTION_10_2="--env BROTHER="
SOLUTION_11="luigi"
SOLUTION_12_1="--hostname"
SOLUTION_12_2="-h"
SOLUTION_13="mario"
SOLUTION_14_1="--workdir"
SOLUTION_14_2="-w"
SOLUTION_15="/srv"
SOLUTION_16="node"

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

# TEST 02 TTY AND DETACHED
if [[ "$FILE" == *"$SOLUTION_4_1"* ]] || [[ "$FILE" == *"$SOLUTION_4_2"* ]]
then
        echo "-- Test 02 passed"
        echo "Docker container detached and TTY attached"
        echo
        I+=1
elif [[ "$FILE" == *"$SOLUTION_2_1"* ]] || [[ "$FILE" == *"$SOLUTION_2_2"* ]] && [[ "$FILE" == *"$SOLUTION_3_1"* ]] || [[ "$FILE" == *"$SOLUTION_3_2"* ]]
then
        echo "-- Test 02 passed"
        echo "Docker container detached and TTY attached"
        echo
        I+=1
else
        echo "-- Test 02 failed"
        echo "Docker container not detached or TTY not present"
        echo
fi

# TEST 03
if [[ "$FILE" == *"$SOLUTION_5"* ]]
then
        echo "-- Test 03 passed"
        echo "Welcome to the mushroom kingdom"
        echo
	    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, wrong name used"
        echo
fi

# TEST 04
if [[ "$FILE" == *"$SOLUTION_6_1"* ]] || [[ "$FILE" == *"$SOLUTION_6_2"* ]]
then
        echo "-- Test 04 passed"
        echo "Memory limit set"
        echo
        I+=1
else
        echo "-- Test 04 failed"
        echo "Error, no memory limit set"
        echo
fi

# TEST 15
if [[ "$FILE" == *"$SOLUTION_17"* ]]
then
        echo "-- Test 15 passed"
        echo "Memory limit set to 500MB"
        echo
        I+=1
else
        echo "-- Test 15 failed"
        echo "Error, wrong memory limit"
        echo
fi

# TEST 05
if [[ "$FILE" == *"$SOLUTION_7"* ]] 
then
        echo "-- Test 05 passed"
        echo "Network is properly disabled" 
        echo
        I+=1
else
        echo "-- Test 05 failed"
        echo "Error, network is not disabled"
        echo
fi

# TEST 06
if [[ "$FILE" == *"$SOLUTION_8"* ]]
then
        echo "-- Test 06 passed"
        echo "Container is read-only"
        echo
        I+=1
else
        echo "-- Test 06 failed"
        echo "Error, container is not read-only"
        echo
fi

# TEST 07
if [[ "$FILE" == *"$SOLUTION_9"* ]]
then
        echo "-- Test 07 passed"
        echo "Container is limited to 2 CPU cores"
        echo
        I+=1
else
        echo "-- Test 07 failed"
        echo "Error, container is not limited to 2 CPUs"
        echo
fi

# TEST 08
if [[ "$FILE" == *"$SOLUTION_10_1"* ]] || [[ "$FILE" == *"$SOLUTION_10_2"* ]]
then
        echo "-- Test 08 passed"
        echo "Environment variable present"
        echo
        I+=1
else
        echo "-- Test 08 failed"
        echo "Error, environment variable couldn't be found"
        echo
fi

# TEST 09
if [[ "$FILE" == *"$SOLUTION_11"* ]]
then
        echo "-- Test 09 passed"
        echo "Luigi time !"
        echo
        I+=1
else
        echo "-- Test 09 failed"
        echo "Error, Luigi is nowhere to be found"
        echo
fi

# TEST 10
if [[ "$FILE" == *"$SOLUTION_12_1"* ]] || [[ "$FILE" == *"$SOLUTION_12_2"* ]]
then
        echo "-- Test 10 passed"
        echo "Hostname set in container"
        echo
        I+=1
else
        echo "-- Test 10 failed"
        echo "Error, hostname couldn't be set"
        echo
fi

# TEST 11
if [[ "$FILE" == *"$SOLUTION_13"* ]]
then
        echo "-- Test 11 passed"
        echo "Mario time !"
        echo
        I+=1
else
        echo "-- Test 11 failed"
        echo "Error, Mario is nowhere to be found"
        echo
fi

# TEST 12
if [[ "$FILE" == *"$SOLUTION_14_1"* ]] || [[ "$FILE" == *"$SOLUTION_14_2"* ]]
then
        echo "-- Test 12 passed"
        echo "Working directory set in container"
        echo
        I+=1
else
        echo "-- Test 12 failed"
        echo "Error, working directory couldn't be set"
        echo
fi

# TEST 13 
if [[ "$FILE" == *"$SOLUTION_15"* ]]
then
        echo "-- Test 13 passed"
        echo "Workdir set to /srv"
        echo
        I+=1
else
        echo "-- Test 13 failed"
        echo "Error, wrong working directory"
        echo
fi

# TEST 14
if [[ "$(echo $FILE | sed 's/.*\(....\)/\1/')" == *"$SOLUTION_16"* ]]
then
        echo "-- Test 14 passed"
        echo "Container image using NodeJS"
        echo
        I+=1
else
        echo "-- Test 14 failed"
        echo "Syntax error, or NodeJS image not used"
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