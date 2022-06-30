#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -euo pipefail
IFS=$'\n\t'

# Variables
declare -i I=0
declare -i P=0
declare -i RES=6
FILE=$(cat /jail/student/master-hand.sh)
SOLUTION_1="docker run"
SOLUTION_2_1="-t"
SOLUTION_2_2="-it"
SOLUTION_2_3="--tty"
SOLUTION_2_4="-td"
SOLUTION_2_5="-dt"
SOLUTION_5="final-destination"
SOLUTION_6="ubuntu"
SOLUTION_7="kirby.html"
SOLUTION_8="$(cat /jail/student/kirby.html | grep -o kirby | wc -l)"

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
if [[ "$FILE" == *"$SOLUTION_2_1"* ]] || [[ "$FILE" == *"$SOLUTION_2_2"* ]] || [[ "$FILE" == *"$SOLUTION_2_3"* ]]
then
        echo "-- Test 02 passed"
        echo "Docker container with TTY attached"
        echo
        I+=1
else
        echo "-- Test 02 failed"
        echo "Error, TTY not present"
        echo
fi

# TEST 03
if [[ "$FILE" == *"$SOLUTION_5"* ]]
then
        echo "-- Test 03 passed"
        echo "You are the ultimate fighter !"
        echo
        I+=1
else
        echo "-- Test 03 failed"
        echo "Error, wrong container name"
        echo
fi

# TEST 04
if [[ "$FILE" == *"$SOLUTION_6"* ]]
then
        echo "-- Test 04 passed"
        echo "Container image using Ubuntu"
        echo
        I+=1
else
        echo "-- Test 04 failed"
        echo "Syntax error, or Ubuntu image not used"
        echo
fi

# TEST 05
if [[ "$(ls /jail/student | grep kirby)" == *"$SOLUTION_7"* ]]
then
        echo "-- Test 05 passed"
        echo "Poyo !"
        echo
        I+=1
        P=1
else
        echo "-- Test 05 failed"
        echo "Kirby is nowhere to be found !"
        echo
fi

# TEST 06
if [ $P == 1 ]
then 
if [[ "$SOLUTION_8" == 30 ]]
then
        echo "-- Test 06 passed"
        echo "File integrity checked"
        echo
        I+=1
else
        echo "-- Test 06 failed"
        echo "Error, something is wrong with the file, make sure you haven't modified it, that it is the right file,"
        echo "or that it is the right owner"
        echo
fi
elif [ $P == 0 ]
then
    echo "!! Skipping test 06"
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
        echo "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠁⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢿⣿⣿⢀⡀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢹⡇⠀⠉⠙⠋⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿
                ⠉⠀⠙⢿⣿⣿⣿⣿⠗⢤⣤⣴⠀⠁⠀⠘⠋⠰⣿⣿⡟⠋⠁⠀⠀⠀⠀⢘⣿⣿
                ⠀⠀⠀⠀⠙⠛⣿⣿⠄⠈⠛⠃⠀⠀⠀⠀⠀⢨⣿⠋⠀⠀⠀⠠⣄⠀⣠⣾⣿⣿
                ⣧⣤⠤⠀⠀⠀⠈⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠁⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿
                ⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⢿
                ⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⢀⣀⠀⠀⢆⡀⠀⠀⠀⠀⠀⣠"
        echo
        exit 0
else
        echo "Not all tests passed"
        exit 1
fi