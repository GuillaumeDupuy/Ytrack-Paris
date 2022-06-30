#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=$'\n\t'

# Variables
declare -i I=0
declare -i RES=5
FILE=$(cat /jail/student/webber/webber.sh)
SOLUTION_1="docker run"
SOLUTION_2_1="-v"
SOLUTION_2_2="index.html"
SOLUTION_3="/usr/local/apache2/htdocs"
SOLUTION_4="-p 80:80"
SOLUTION_5="$(echo $FILE | grep -o '.....$')"

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

# TEST 02 number of volumes
if [[ "$FILE" == *"$SOLUTION_2_1"* ]] && [[ "$FILE" == *"$SOLUTION_2_2"* ]]
then
        echo "-- Test 02 passed"
        echo "Volume is mounted"
        echo
        I+=1
else
        echo "-- Test 02 failed"
        echo "Error, make sure you're mounting the volume with index.html"
        echo
fi

# TEST 03 paths
if [[ "$FILE" == *"$SOLUTION_3"* ]]
then
        echo "-- Test 03 passed"
        echo "Files are in the right path"
        echo
	    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, your files are not mounted correctly"
        echo
fi

# TEST 04 port open
if [[ "$FILE" == *"$SOLUTION_4"* ]]
then
        echo "-- Test 04 passed"
        echo "Port 80 open and accessible"
        echo
        I+=1
else
        echo "-- Test 04 failed"
        echo "Error, either you didn't open any port or you're opening the wrong ports"
        echo
fi

# TEST 05 image
if [[ "$SOLUTION_5" == *"httpd"* ]] 
then
        echo "-- Test 05 passed"
        echo "HTTPD image used" 
        echo
        I+=1
else
        echo "-- Test 05 failed"
        echo "Error, wrong image used or the argument is not at the right place"
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