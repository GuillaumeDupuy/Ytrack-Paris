#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=4
FILE=$(cat /jail/student/build-a-server/Dockerfile)
SOLUTION_1=$(echo $FILE | head -c 10)
SOLUTION_3_1="/usr/share/nginx/html"
SOLUTION_3_2=$(cat default-nginx.conf)
SOLUTION_3_3=$(cat /jail/student/build-a-server/nginx.conf)
SOLUTION_4_1="/etc/nginx"
SOLUTION_4_2=$(cat default-index.html)
SOLUTION_4_3=$(cat /jail/student/build-a-server/index.html)

echo insecure >> ~/.curlrc

# actual equality test
# TEST 01 base image
if [[ "$SOLUTION_1" == "FROM nginx" ]]
then
        echo "-- Test 01 passed"
        echo "Using base image NGINX"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, you may be using the wrong image or the FROM instruction is not at the right place"
        echo
fi

# TEST 02 add & copy x2
if [[ $(echo $FILE | grep -o "COPY" | wc -l) == 2 ]] || [[ $(echo $FILE | grep -o "ADD" | wc -l) == 2 ]]
then
        echo "-- Test 02 passed"
        echo "Using custom files"
        echo
    I+=1
else
        echo "-- Test 02 failed"-
        echo "Error, you're not using custom files"
        echo
fi

# TEST 03 using custom files
if [[ "$FILE" == *"$SOLUTION_3_1"* ]] && [[ "$SOLUTION_3_2" != "$SOLUTION_3_3" ]]
then
        echo "-- Test 03 passed"
        echo "Using custom NGINX conf"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, you haven't modified the NGINX config file"
        echo
fi

# TEST 04 using custom files
if [[ "$FILE" == *"$SOLUTION_4_1"* ]] && [[ "$SOLUTION_4_2" != "$SOLUTION_4_3" ]]
then
        echo "-- Test 04 passed"
        echo "Using custom index file"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, you haven't modified the default index file"
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