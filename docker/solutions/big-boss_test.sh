#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=20
FILE="/jail/student/big-boss/Dockerfile"
HTMLFILE="/jail/student/big-boss/index.html"
SOLUTION_1=$(cat $FILE | grep -c "ARG VERSION=1.19-rc-alpine")
SOLUTION_2=$(cat $FILE | grep -c "FROM golang:\$VERSION")
SOLUTION_3=$(cat $FILE | grep -c "ENV DIRECTORY=/webserver")
SOLUTION_4=$(cat $FILE | grep -c "ENV PORT=2022")
SOLUTION_5=$(cat $FILE | grep -c "RUN mkdir \$DIRECTORY")
SOLUTION_6=$(cat $FILE | grep -c "WORKDIR \$DIRECTORY")
SOLUTION_7_1=$(cat $FILE | grep -c "COPY ./index.html \$DIRECTORY")
SOLUTION_7_2=$(cat $FILE | grep -c "COPY index.html \$DIRECTORY")
SOLUTION_8=$(cat $FILE | grep -c "RUN wget https")
SOLUTION_9=$(cat $FILE | grep -c "RUN go mod init webserver")
SOLUTION_10=$(cat $FILE | grep -c "RUN go get -u github.com/gin-gonic/gin")
SOLUTION_11=$(cat $FILE | grep -c "LABEL version='1.0'")
SOLUTION_12=$(cat $FILE | grep -c "LABEL description='A simple test of the Gin go framework'")
SOLUTION_13=$(cat $FILE | grep -c "EXPOSE 2022")
SOLUTION_14_1=$(cat $FILE | grep -c "HEALTHCHECK")
SOLUTION_14_2=$(cat $FILE | grep -c "\--interval=30s")
SOLUTION_14_3=$(cat $FILE | grep -c "\--timeout=30s")
SOLUTION_14_4=$(cat $FILE | grep -c "\--retries=3")
SOLUTION_14_5=$(cat $FILE | grep -c "CMD curl -f http://localhost:2022 || exit 1")
SOLUTION_15_1=$(cat $FILE | grep -c "CMD go run main.go")
SOLUTION_15_2=$(cat $FILE | grep -c "CMD go run ./main.go")
SOLUTION_15_3=$(cat $FILE | grep -c "CMD go run ./main")

echo insecure >> ~/.curlrc

# actual equality test
# TEST 01
if [[ "$SOLUTION_1" == 1 ]]
then
        echo "-- Test 01 passed"
        echo "Argument set to 1.19-rc-alpine"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, ARG missing"
        echo
fi

# TEST 02
if [[ "$SOLUTION_2" == 1 ]]
then
        echo "-- Test 02 passed"
        echo "Using Golang image version from ARG"
        echo
    I+=1
else
        echo "-- Test 02 failed"
        echo "Error, ARG missing"
        echo
fi

# TEST 03
if [[ "$SOLUTION_3" == 1 ]]
then
        echo "-- Test 03 passed"
        echo "Environment variable set to /webserver"
        echo
    I+=1
    else
        echo "-- Test 03 failed"
        echo "Error, ENV webserver missing"
        echo
fi

# TEST 04
if [[ "$SOLUTION_4" == 1 ]]
then
        echo "-- Test 04 passed"
        echo "Port set to 2022"
        echo
    I+=1
        else
                echo "-- Test 04 failed"
                echo "Error, PORT missing"
                echo
fi

# TEST 05
if [[ "$SOLUTION_5" == 1 ]]
then
        echo "-- Test 05 passed"
        echo "Directory from variable created"
        echo
    I+=1
        else
        echo "-- Test 05 failed"
        echo "Error, RUN mkdir missing"
        echo
fi

# TEST 06
if [[ "$SOLUTION_6" == 1 ]]
then
        echo "-- Test 06 passed"
        echo "WORKDIR set to variable"
        echo
    I+=1
        else
        echo "-- Test 06 failed"
        echo "Error, WORKDIR missing"
        echo
fi

# TEST 07
if [[ "$SOLUTION_7_1" == 1 ]] || [[ "$SOLUTION_7_2" == 1 ]]
then
        echo "-- Test 07 passed"
        echo "index.html copied to directory"
        echo
    I+=1
        else
        echo "-- Test 07 failed"
        echo "Error, COPY missing"
        echo
fi

# TEST 08
if [[ "$SOLUTION_8" == 1 ]]
then
        echo "-- Test 08 passed"
        echo "wget command used to get main.go"
        echo
    I+=1
        else
        echo "-- Test 08 failed"
        echo "Error, RUN wget missing"
        echo
fi

# TEST 09
if [[ "$SOLUTION_9" == 1 ]]
then
        echo "-- Test 09 passed"
        echo "Go module initiated"
        echo
    I+=1
        else
        echo "-- Test 09 failed"
        echo "Error, no Go module initiated"
        echo
fi

# TEST 10
if [[ "$SOLUTION_10" == 1 ]]
then
        echo "-- Test 10 passed"
        echo "Go get command used to get Gin framework"
        echo
    I+=1
        else
        echo "-- Test 10 failed"
        echo "Error, no Go get command used"
        echo
fi

# TEST 11
if [[ "$SOLUTION_11" == 1 ]]
then
        echo "-- Test 11 passed"
        echo "Label set to version 1.0"
        echo
    I+=1
        else
        echo "-- Test 11 failed"
        echo "Error, no version label set"
        echo
fi

# TEST 12
if [[ "$SOLUTION_12" == 1 ]]
then
        echo "-- Test 12 passed"
        echo "Label set to description 'A simple test of the Gin go framework'"
        echo
    I+=1
        else
        echo "-- Test 12 failed"
        echo "Error, no description label set"
        echo
fi

# TEST 13
if [[ "$SOLUTION_13" == 1 ]]
then
        echo "-- Test 13 passed"
        echo "Port 2022 exposed in Dockerfile"
        echo
    I+=1
        else
        echo "-- Test 13 failed"
        echo "Error, no port exposed"
        echo
fi

# TEST 14
if [[ "$SOLUTION_14_1" == 1 ]]
then
        echo "-- Test 14 passed"
        echo "Healthcheck command set"
        echo
    I+=1
        else
        echo "-- Test 14 failed"
        echo "Error, no healthcheck command set"
        echo
fi

# TEST 15
if [[ "$SOLUTION_14_2" == 1 ]]
then
        echo "-- Test 15 passed"
        echo "Healthcheck command set to interval 30s"
        echo
    I+=1
        else
        echo "-- Test 15 failed"
        echo "Error, no healthcheck command set to interval 30s"
        echo
fi

# TEST 16
if [[ "$SOLUTION_14_3" == 1 ]]
then
        echo "-- Test 16 passed"
        echo "Healthcheck command set to timeout 30s"
        echo
    I+=1
        else
        echo "-- Test 16 failed"
        echo "Error, no healthcheck command set to timeout 30s"
        echo
fi

# TEST 17
if [[ "$SOLUTION_14_4" == 1 ]]
then
        echo "-- Test 17 passed"
        echo "Healthcheck command set to retry 3 times"
        echo
    I+=1
        else
        echo "-- Test 17 failed"
        echo "Error, no healthcheck command set to retry 3 times"
        echo
fi

# TEST 18
if [[ "$SOLUTION_14_5" == 1 ]]
then
        echo "-- Test 18 passed"
        echo "Healthcheck command test set to curl http://localhost:2022"
        echo
    I+=1
        else
        echo "-- Test 18 failed"
        echo "Error, no healthcheck CMD set"
        echo
fi

# TEST 19
if [[ "$SOLUTION_15_1" == 1 ]] || [[ "$SOLUTION_15_2" == 1 ]] || [[ "$SOLUTION_15_3" == 1 ]]
then
        echo "-- Test 19 passed"
        echo "CMD command set for main.go"
        echo
    I+=1
        else
        echo "-- Test 19 failed"
        echo "Error, no CMD command set"
        echo
fi

# TEST 20
if [ -f $HTMLFILE ]
then
        echo "-- Test 20 passed"
        echo "index.html file present"
        echo
    I+=1
else
        echo "-- Test 20 failed"
        echo "Error, could not find index.html"
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