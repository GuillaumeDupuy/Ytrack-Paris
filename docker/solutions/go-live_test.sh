#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=18
FILE="/jail/student/go-live/docker-compose.yml"
GAMEFILE="/jail/student/go-live/Game"
DEFAULTFILE="/jail/student/go-live/default.conf"
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1=$(yq e '.services.reverse-proxy.image' $FILE)
SOLUTION_2=$(yq e '.services.reverse-proxy.ports.[]' $FILE)
SOLUTION_3=$(yq e '.services.reverse-proxy.volumes.[]' $FILE)
SOLUTION_4=$(yq e '.services.reverse-proxy.depends_on | sort_by(.depends_on)' $FILE | tr '\n' ' ')
SOLUTION_5_1=$(yq e '.services.game.build.context' $FILE)
SOLUTION_5_2=$(yq e '.services.game.build.dockerfile' $FILE)
SOLUTION_6=$(yq e '.services.game.ports.[]' $FILE)
SOLUTION_7=$(yq e '.services.data-tester.image' $FILE)
SOLUTION_8=$(yq e '.services.data-tester.ports' $FILE)
SOLUTION_9_1=$(yq e '.services.data-tester.environment.PGADMIN_DEFAULT_EMAIL' $FILE)
SOLUTION_9_2=$(yq e '.services.data-tester.environment.PGADMIN_DEFAULT_PASSWORD' $FILE)
SOLUTION_10=$(yq e '.services.data-tester.depends_on.[]' $FILE)
SOLUTION_11=$(yq e '.services.database.image' $FILE)
SOLUTION_12_1=$(yq e '.services.database.environment.POSTGRES_USER' $FILE)
SOLUTION_12_2=$(yq e '.services.database.environment.POSTGRES_PASSWORD' $FILE)
SOLUTION_13=$(yq e '.services.database.ports.[]' $FILE)

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
if [ -f $GAMEFILE ]
then
        echo "-- Test 01 passed"
        echo "Game Dockerfile present"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, could not find the 'Game' file"
        echo
fi

# TEST 02
if [ -f $DEFAULTFILE ]
then
        echo "-- Test 02 passed"
        echo "Default.conf present"
        echo
    I+=1
else
        echo "-- Test 02 failed"
        echo "Error, could not find Default.conf"
        echo
fi

# TEST 03
if [[ "$SOLUTION_1" == "nginx" ]]
then
        echo "-- Test 03 passed"
        echo "Reverse proxy using NGINX in place"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, wrong image used or service not found"
        echo
fi

# TEST 04
if [[ "$SOLUTION_2" == *"80:80"* ]]
then
        echo "-- Test 04 passed"
        echo "Reverse proxy listening on port 80"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, wrong port or service not found"
        echo
fi

# TEST 05
if [[ "$SOLUTION_3" == *"default.conf:/etc/nginx/conf.d/default.conf"* ]]
then
        echo "-- Test 05 passed"
        echo "Reverse proxy config file mounted"
        echo
    I+=1
else
        echo "-- Test 05 failed"
        echo "Error, configuration not used or not mounted"
        echo
fi

# TEST 06
if [[ "$SOLUTION_4" == *"data-tester - game"* ]]
then
        echo "-- Test 06 passed"
        echo "Reverse proxy is launched after game and data tester"
        echo
    I+=1
else
        echo "-- Test 06 failed"
        echo "Error, wrong dependency or service not found"
        echo
fi

# TEST 07
if [[ "$SOLUTION_5_1" == "." ]]
then
        echo "-- Test 07 passed"
        echo "Game service using the current directory as context"
        echo
    I+=1
else
        echo "-- Test 07 failed"
        echo "Error, wrong build context or service not found"
        echo
fi

# TEST 08
if [[ "$SOLUTION_5_2" == "Game" ]]
then
        echo "-- Test 08 passed"
        echo "Game service using Game as Dockerfile"
        echo
    I+=1
else
        echo "-- Test 08 failed"
        echo "Error, no Dockerfile or service not found"
        echo
fi

# TEST 09
if [[ "$SOLUTION_6" == *"3000:80"* ]]
then
        echo "-- Test 09 passed"
        echo "Game service listening on host port 3000 and container port 80"
        echo
    I+=1
else
        echo "-- Test 09 failed"
        echo "Error, wrong ports or service not found"
        echo
fi

# TEST 10
if [[ "$SOLUTION_7" == "dpage/pgadmin4" ]]
then
        echo "-- Test 10 passed"
        echo "Data tester service using PgAdmin official image"
        echo
    I+=1
else
        echo "-- Test 10 failed"
        echo "Error, wrong image or service not found"
        echo
fi

# TEST 11
if [[ "$SOLUTION_8" == *"5000:80"* ]]
then
        echo "-- Test 11 passed"
        echo "Data tester service listening on host port 5000 and container port 80"
        echo
    I+=1
else
        echo "-- Test 11 failed"
        echo "Error, wrong port or service not found"
        echo
fi

# TEST 12
if [[ "$SOLUTION_9_1" == *"go@live.com"* ]]
then
        echo "-- Test 12 passed"
        echo "Default email variable set to go@live.com"
        echo
    I+=1
else
        echo "-- Test 12 failed"
        echo "Error, no environment variable set"
        echo
fi

# TEST 13
if [[ "$SOLUTION_9_2" == *"root"* ]]
then
        echo "-- Test 13 passed"
        echo "Default password variable set to root"
        echo
    I+=1
else
        echo "-- Test 13 failed"
        echo "Error, no environment variable set"
        echo
fi

# TEST 14
if [[ "$SOLUTION_10" == *"database"* ]]
then
        echo "-- Test 14 passed"
        echo "Data tester service depends on database, makes sense"
        echo
    I+=1
else
        echo "-- Test 14 failed"
        echo "Error, wrong dependency or service not found"
        echo
fi

# TEST 15
if [[ "$SOLUTION_11" == "postgres" ]]
then
        echo "-- Test 15 passed"
        echo "Database service using Postgres image"
        echo
    I+=1
else
        echo "-- Test 15 failed"
        echo "Error, wrong image or service not found"
        echo
fi

# TEST 16
if [[ "$SOLUTION_12_1" == *"go-live"* ]]
then
        echo "-- Test 16 passed"
        echo "Database service has go-live user set as environment variable"
        echo
    I+=1
else
        echo "-- Test 16 failed"
        echo "Error, wrong environment variable or service not found"
        echo
fi

# TEST 17
if [[ "$SOLUTION_12_2" == *"root"* ]]
then
        echo "-- Test 17 passed"
        echo "'root' password set as environment variable"
        echo
    I+=1
else
        echo "-- Test 17 failed"
        echo "Error, wrong environment variable or service not found"
        echo
fi

# TEST 18
if [[ "$SOLUTION_13" == *"5432:5432"* ]]
then
        echo "-- Test 18 passed"
        echo "Database service listening on port 5432"
        echo
    I+=1
else
        echo "-- Test 18 failed"
        echo "Error, wrong port open or service not found"
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