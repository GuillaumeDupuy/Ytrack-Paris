#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=13
FILE="/jail/student/hadoken/docker-compose.yml"
SUZAKUFILE="/jail/student/hadoken/suzaku-castle.html"
BATTLEFILE="/jail/student/hadoken/battle-harbor.html"
DEFAULTFILE="/jail/student/hadoken/default.conf"
FIGHTERS="/jail/student/hadoken/fighters"
BOSSES="/jail/student/hadoken/bosses"
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1=$(yq e '.services.suzaku-castle.image' $FILE)
SOLUTION_2=$(yq e '.services.suzaku-castle.volumes | sort_by(..)' $FILE | tr '\n' ' ')
SOLUTION_3=$(yq e '.services.suzaku-castle.ports.[]' $FILE)
SOLUTION_4=$(yq e '.services.battle-harbor.image' $FILE)
SOLUTION_5=$(yq e '.services.battle-harbor.volumes | sort_by(..)' $FILE | tr '\n' ' ')
SOLUTION_6=$(yq e '.services.battle-harbor.ports.[]' $FILE)
SOLUTION_7=$(yq e '.volumes | has("fighters")' $FILE)
SOLUTION_8=$(yq e '.volumes | has("bosses")' $FILE)

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
if [ -f $SUZAKUFILE ]
then
        echo "-- Test 01 passed"
        echo "Suzaku Castle present"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, could not find Suzaku Castle"
        echo
fi

# TEST 02
if [ -f $BATTLEFILE ]
then
        echo "-- Test 02 passed"
        echo "Battle Harbor present"
        echo
    I+=1
else
        echo "-- Test 02 failed"
        echo "Error, could not find Battle Harbor"
        echo
fi

# TEST 03
if [ -f $DEFAULTFILE ]
then
        echo "-- Test 03 passed"
        echo "Default.conf present"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, could not find Default.conf"
        echo
fi

# TEST 04
if [ -d $FIGHTERS ]
then
        echo "-- Test 04 passed"
        echo "All fighters are here"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, could not find the street fighters"
        echo
fi

# TEST 05
if [ -d $BOSSES ]
then
        echo "-- Test 05 passed"
        echo "All bosses are here"
        echo
    I+=1
else
        echo "-- Test 05 failed"
        echo "Error, could not find the bosses"
        echo
fi

# TEST 06
if [ "$SOLUTION_1" == "caddy" ]
then
        echo "-- Test 06 passed"
        echo "Suzaku Castle uses Caddy"
        echo
    I+=1
else
        echo "-- Test 06 failed"
        echo "Error, wrong image used or service not found"
        echo
fi

# TEST 07
if [[ "$SOLUTION_2" == *"./fighters:/usr/share/caddy/fighters - ./suzaku-castle.html:/usr/share/caddy/index.html"* ]]
then
        echo "-- Test 07 passed"
        echo "Suzaku castle stage and fighters are ready!"
        echo
    I+=1
else
        echo "-- Test 07 failed"
        echo "Error, you're missinge one or more volumes"
        echo
fi

# TEST 08
if [[ "$SOLUTION_3" == *"80:80"* ]]
then
        echo "-- Test 08 passed"
        echo "Caddy uses port 80"
        echo
    I+=1
else
        echo "-- Test 08 failed"
        echo "Error, port 80 not open or incorrectly set"
        echo
fi

# TEST 09
if [[ "$SOLUTION_4" == *"nginx"* ]]
then
        echo "-- Test 09 passed"
        echo "Battle Harbor uses NGINX"
        echo
    I+=1
else
        echo "-- Test 09 failed"
        echo "Error, image not set or service not found"
        echo
fi

# TEST 10
if [[ "$SOLUTION_5" == *"battle-harbor.html:/usr/share/nginx/html/index.html - ./bosses:/usr/share/nginx/html/bosses - ./default.conf:/etc/nginx/conf.d/default.conf"* ]]
then
        echo "-- Test 10 passed"
        echo "Battle Harbor stage is ready"
        echo
    I+=1
else
        echo "-- Test 10 failed"
        echo "Error, Battle Harbor HTML file is not used as a volume or not properly set"
        echo
fi


# TEST 11
if [[ "$SOLUTION_6" == *"8080:8080"* ]]
then
        echo "-- Test 11 passed"
        echo "NGINX uses port 8080"
        echo
    I+=1
else
        echo "-- Test 11 failed"
        echo "Error, port 80 not open or incorrectly set"
        echo
fi

# TEST 12
if [ "$SOLUTION_7" == "true" ]
then
        echo "-- Test 12 passed"
        echo "Fighters are in the volumes entry"
        echo
    I+=1
else
        echo "-- Test 12 failed"
        echo "Error, fighters are not in the volume"
        echo
fi

# TEST 13
if [ "$SOLUTION_8" == "true" ]
then
        echo "-- Test 13 passed"
        echo "Bosses are in the volume"
        echo
    I+=1
else
        echo "-- Test 13 failed"
        echo "Error, bosses are not in the volumes entry"
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