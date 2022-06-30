#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=3
FILE="/jail/student/link.sh"
SOLUTION_1=$(cat $FILE | grep -c "root")
SOLUTION_2_1=$(cat $FILE | grep -c "FairyBottle.png")
SOLUTION_2_2=$(cat $FILE | grep -c "bow.wp")
SOLUTION_2_3=$(cat $FILE | grep -c "shield")
SOLUTION_2_4=$(cat $FILE | grep -c "sword")

echo insecure >> ~/.curlrc
# actual equality test

# TEST 01
if [[ "$SOLUTION_1" == 4 ]]
then
        echo "-- Test 01 passed"
        echo "You got the Triforce of Power!"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, make sure you created the files in your container"
        echo
fi

# TEST 02
if [[ "$SOLUTION_2_1" == 1 ]] && [[ "$SOLUTION_2_2" == 1 ]]
then
        echo "-- Test 02 passed"
        echo "You got the Triforce of Wisdom!"
        echo
    I+=1
else
        echo "-- Test 02 failed"-
        echo "Error, make sure you have a fairy in a bottle and a bow in your bag"
        echo
fi

# TEST 03 all
if [[ "$SOLUTION_2_3" == 1 ]] && [[ "$SOLUTION_2_4" == 1 ]]
then
        echo "-- Test 03 passed"
        echo "You got the Triforce of Courage!"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, make sure you have a shield and a sword in your bag"
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
        echo  "          
                         /\\
                        /  \\
                       /    \\
                      /      \\
                     /        \\
                    /__________\\
                   /\\__________/\\
                  /  \\        /  \\
                 /    \\      /    \\
                /      \\    /      \\
               /        \\  /        \\
              /__________\\/__________\\
              \\__________/\\__________/
              "
        echo
        echo "All tests passed ! The Triforce is complete!"
        exit 0
else
        echo "Not all tests passed"
        exit 1
fi