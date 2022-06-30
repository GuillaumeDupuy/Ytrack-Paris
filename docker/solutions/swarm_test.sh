#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=6
FILE="/jail/student/swarm.sh"
SOLUTION_1=$(cat $FILE | grep -c "docker service create")
SOLUTION_2=$(cat $FILE | grep -c "\--replicas 3")
SOLUTION_3=$(cat $FILE | grep -c "\--name bee")
SOLUTION_4=$(cat $FILE | grep -c "curlimages/curl")
SOLUTION_5=$(cat $FILE | grep -c "curl www.ynov.com")
SOLUTION_6=$(cat $FILE | grep -c "docker service inspect --pretty bee")

echo insecure >> ~/.curlrc

# actual equality test
# TEST 01
if [[ "$SOLUTION_1" == 1 ]]
then
        echo "-- Test 01 passed"
        echo "Service created"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, service not created"
        echo
fi

# TEST 02
if [[ "$SOLUTION_2" == 1 ]]
then
        echo "-- Test 02 passed"
        echo "Replicas set to 3"
        echo
    I+=1
else
        echo "-- Test 02 failed"
        echo "Error, replicas not set to 3"
        echo
fi

# TEST 03
if [[ "$SOLUTION_3" == 1 ]]
then
        echo "-- Test 03 passed"
        echo "Service name bee"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, service name not bee"
        echo
fi

# TEST 04
if [[ "$SOLUTION_4" == 1 ]]
then
        echo "-- Test 04 passed"
        echo "Image curlimages/curl used"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, wrong or no image used"
        echo
fi

# TEST 05
if [[ "$SOLUTION_5" == 1 ]]
then
        echo "-- Test 05 passed"
        echo "Curl command executed to ynov"
        echo
    I+=1
    else
        echo "-- Test 05 failed"
        echo "Error, curl command not executed or wrong website curled"
        echo
fi

# TEST 06
if [[ "$SOLUTION_6" == 1 ]]
then
        echo "-- Test 06 passed"
        echo "Service bee inspected"
        echo
    I+=1
    else
        echo "-- Test 06 failed"
        echo "Error, service bee not inspected"
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