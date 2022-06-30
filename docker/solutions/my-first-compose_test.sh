#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=4
FILE="/jail/student/my-first-compose/docker-compose.yml"
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1=$(yq e 'has("services")' $FILE)
SOLUTION_2=$(yq e '.services | keys' $FILE)
SOLUTION_3=$(yq e '.services.hello_world.image' $FILE)
SOLUTION_4=$(yq e '.services.hello_world.environment[0]' $FILE)

echo insecure >> ~/.curlrc

# Initial test with YAML file to check if they are properly made
if [ -z "$YAML_TEST" ]
then
        echo "--- Linting test passed"
        echo
else
        echo "Linting failed!"
        echo "$YAML_TEST"
        echo
        exit 1
fi

# actual equality test
# TEST 01
if [[ "$SOLUTION_1" == *"true"* ]]
then
        echo "-- Test 01 passed"
        echo "Services in the file"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, there is no services in the file"
        echo
fi

# TEST 02
if [[ "$SOLUTION_2" == "- hello_world" ]]
then
        echo "-- Test 02 passed"
        echo "Service hello_world exists"
        echo
    I+=1
else
        echo "-- Test 02 failed"-
        echo "Error, cannot find hello_world service"
        echo
fi

# TEST 03 
if [[ "$SOLUTION_3" == "ubuntu" ]]
then
        echo "-- Test 03 passed"
        echo "Using Ubuntu image"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, Ubuntu image is not used"
        echo
fi

# TEST 04
if [[ "$SOLUTION_4" == "CAMPUS=\"Bordeaux Ynov Campus\"" ]]
then
        echo "-- Test 04 passed"
        echo "Environment variable properly set"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, check the environment variable"
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