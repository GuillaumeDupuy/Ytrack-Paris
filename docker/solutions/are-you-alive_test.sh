#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=11
FILE="/jail/student/are-you-alive/docker-compose.yml"
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1=$(yq e '.services.minecraft-server.image' $FILE)
SOLUTION_2=$(yq e '.services.minecraft-server.ports.[]' $FILE)
SOLUTION_3=$(yq e '.services.minecraft-server.environment.EULA' $FILE)
SOLUTION_4=$(yq e '.services.minecraft-server.tty' $FILE)
SOLUTION_5=$(yq e '.services.minecraft-server.stdin_open' $FILE)
SOLUTION_6=$(yq e '.services.minecraft-server.restart' $FILE)
SOLUTION_7_1=$(yq e '.services.minecraft-server.healthcheck.test' $FILE)
SOLUTION_7_2=$(yq e '.services.minecraft-server.healthcheck.interval' $FILE)
SOLUTION_7_3=$(yq e '.services.minecraft-server.healthcheck.timeout' $FILE)
SOLUTION_7_4=$(yq e '.services.minecraft-server.healthcheck.retries' $FILE)
SOLUTION_7_5=$(yq e '.services.minecraft-server.healthcheck.start_period' $FILE)

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
if [[ "$SOLUTION_1" == "itzg/minecraft-server" ]]
then
        echo "-- Test 01 passed"
        echo "Minecraft Server image from Geoff Bourne is used"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, wrong image used or service not found"
        echo
fi

# TEST 02
if [[ "$SOLUTION_2" == *"25565:25565"* ]]
then
        echo "-- Test 02 passed"
        echo "Usual port 25565 open"
        echo
    I+=1
else
        echo "-- Test 02 failed"
        echo "Error, port 25565 not exposed"
        echo
fi

# TEST 03
if [[ "$SOLUTION_3" == *"TRUE"* ]]
then
        echo "-- Test 03 passed"
        echo "EULA accepted"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, EULA not accepted. I think you have something againts Mojang"
        echo
fi

# TEST 04
if [[ "$SOLUTION_4" == *"true"* ]]
then
        echo "-- Test 04 passed"
        echo "TTY attached"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, TTY instruction not set"
        echo
fi

# TEST 05
if [[ "$SOLUTION_5" == *"true"* ]]
then
        echo "-- Test 05 passed"
        echo "STDIN open"
        echo
    I+=1
else
        echo "-- Test 05 failed"
        echo "Error, STDIN instruction not set"
        echo
fi

# TEST 06
if [[ "$SOLUTION_6" == "always" ]]
then
        echo "-- Test 06 passed"
        echo "Restart policy set to always"
        echo
    I+=1
else
        echo "-- Test 06 failed"
        echo "Error, restart policy not set to always"
        echo
fi

# TEST 07
if [[ "$SOLUTION_7_1" == *"curl -s localhost:25565 > /dev/null;"* ]]
then
        echo "-- Test 07 passed"
        echo "Healthcheck test uses the right command"
        echo
    I+=1
else
        echo "-- Test 07 failed"
        echo "Error, healthcheck test is not using the right command"
        echo
fi

# TEST 08
if [[ "$SOLUTION_7_2" == *"30s"* ]]
then
        echo "-- Test 08 passed"
        echo "Healthcheck interval is set to 30 seconds"
        echo
    I+=1
else
        echo "-- Test 08 failed"
        echo "Error, healthcheck interval wrong or not set"
        echo
fi

# TEST 09
if [[ "$SOLUTION_7_3" == *"15s"* ]]
then
        echo "-- Test 09 passed"
        echo "Healthcheck timeout is set to 15 seconds"
        echo
    I+=1
else
        echo "-- Test 09 failed"
        echo "Error, healthcheck timeout wrong or not set"
        echo
fi

# TEST 10
if [[ "$SOLUTION_7_4" == 5 ]]
then
        echo "-- Test 10 passed"
        echo "Healthcheck retries is set to 5"
        echo
    I+=1
else
        echo "-- Test 10 failed"
        echo "Error, healthcheck retries wrong or not set"
        echo
fi

# TEST 11
if [[ "$SOLUTION_7_5" == *"1m"* ]]
then
        echo "-- Test 11 passed"
        echo "Healthcheck waits 1 minute"
        echo
    I+=1
else
        echo "-- Test 11 failed"
        echo "Error, healthcheck start period wrong or not set"
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