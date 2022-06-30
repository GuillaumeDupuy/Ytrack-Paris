#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=20
FILE="/jail/student/fusion/docker-compose.yml"
DOCKERFILE="/jail/student/fusion/Dockerfile"
JSFILE="/jail/student/fusion/server.js"
JSFILEORIGINAL=$(cat server_original.js)
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1_1=$(yq e '.services.blue-eyes-white-dragon1.build' $FILE)
SOLUTION_1_2=$(yq e '.services.blue-eyes-white-dragon1.tty' $FILE)
SOLUTION_1_3=$(yq e '.services.blue-eyes-white-dragon1.ports.[]' $FILE)
SOLUTION_2_1=$(yq e '.services.blue-eyes-white-dragon2.build' $FILE)
SOLUTION_2_2=$(yq e '.services.blue-eyes-white-dragon2.tty' $FILE)
SOLUTION_2_3=$(yq e '.services.blue-eyes-white-dragon2.ports.[]' $FILE)
SOLUTION_3_1=$(yq e '.services.blue-eyes-white-dragon3.build' $FILE)
SOLUTION_3_2=$(yq e '.services.blue-eyes-white-dragon3.tty' $FILE)
SOLUTION_3_3=$(yq e '.services.blue-eyes-white-dragon3.ports.[]' $FILE)
SOLUTION_4_1=$(yq e '.services.polymerization.image' $FILE)
SOLUTION_4_2=$(yq e '.services.polymerization.command' $FILE | grep -o 'curl\|blue-eyes-white-dragon1:3000\|blue-eyes-white-dragon2:3000\|blue-eyes-white-dragon3:3000' | tr '\n' ' ')
SOLUTION_4_3=$(yq e '.services.polymerization.depends_on | sort_by(.depends_on)' $FILE | tr '\n' ' ')
SOLUTION_5_1=$(cat $DOCKERFILE | head -c 9)
SOLUTION_5_2=$(cat $DOCKERFILE | grep -c "RUN mkdir /fusion")
SOLUTION_5_3=$(cat $DOCKERFILE | grep -c "WORKDIR /fusion")
SOLUTION_5_4=$(cat $DOCKERFILE | grep -c "RUN npm init -y")
SOLUTION_5_5=$(cat $DOCKERFILE | grep -c "RUN npm install express")
SOLUTION_5_6=$(cat $DOCKERFILE | grep -c "COPY server.js /fusion")
SOLUTION_5_7=$(cat $DOCKERFILE | grep -c "node server.js")
SOLUTION_6=$(cat $JSFILE | grep -c "app.listen(port, () => {")


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
if [[ "$SOLUTION_1_1" == "." ]]
then
        echo "-- Test 01 passed"
        echo "Blue Eyes White Dragon number 1 uses a build with a path set in the same directory"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, no build clause used or there is no dragon here"
        echo
fi

# TEST 02
if [[ "$SOLUTION_1_2" == *"true"* ]]
then
        echo "-- Test 02 passed"
        echo "Blue Eyes White Dragon number 1 uses a tty"
        echo
    I+=1
else
        echo "-- Test 02 failed"
        echo "Error, the dragon may be dead"
        echo
fi

# TEST 03
if [[ "$SOLUTION_1_3" == *"3000:3000"* ]]
then
        echo "-- Test 03 passed"
        echo "Blue Eyes White Dragon number 1 binds port 3000 to 3000"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, either no port is bound, or there is no port set, or there is no dragon here"
        echo
fi

# TEST 04
if [[ "$SOLUTION_2_1" == "." ]]
then
        echo "-- Test 04 passed"
        echo "Blue Eyes White Dragon number 2 uses a build with a path set in the same directory"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, no build clause used or there is no dragon here"
        echo
fi

# TEST 05
if [[ "$SOLUTION_2_2" == *"true"* ]]
then
        echo "-- Test 05 passed"
        echo "Blue Eyes White Dragon number 2 uses a tty"
        echo
    I+=1
else
        echo "-- Test 05 failed"
        echo "Error, the dragon may be dead"
        echo
fi

# TEST 06
if [[ "$SOLUTION_2_3" == *"3001:3000"* ]]
then
        echo "-- Test 06 passed"
        echo "Blue Eyes White Dragon number 2 binds port 3001 to 3000"
        echo
    I+=1
else
        echo "-- Test 06 failed"
        echo "Error, either no port is bound, or there is no port set, or there is no dragon here"
        echo
fi

# TEST 07
if [[ "$SOLUTION_3_1" == "." ]]
then
        echo "-- Test 07 passed"
        echo "Blue Eyes White Dragon number 3 uses a build with a path set in the same directory"
        echo
    I+=1
else
        echo "-- Test 07 failed"
        echo "Error, no build clause used or there is no dragon here"
        echo
fi

# TEST 08
if [[ "$SOLUTION_3_2" == *"true"* ]]
then
        echo "-- Test 08 passed"
        echo "Blue Eyes White Dragon number 3 uses a tty"
        echo
    I+=1
else
        echo "-- Test 08 failed"
        echo "Error, the dragon may be dead"
        echo
fi

# TEST 09
if [[ "$SOLUTION_3_3" == *"3002:3000"* ]]
then
        echo "-- Test 09 passed"
        echo "Blue Eyes White Dragon number 3 binds port 3002 to 3000"
        echo
    I+=1
else
        echo "-- Test 09 failed"
        echo "Error, either no port is bound, or there is no port set, or there is no dragon here"
        echo
fi

# TEST 10
if [[ "$SOLUTION_4_1" == *"curlimages/curl"* ]]
then
        echo "-- Test 10 passed"
        echo "Polymerization will be able to use curl and fuse"
        echo
    I+=1
else
        echo "-- Test 10 failed"
        echo "Error, the image is not set to curl"
        echo
fi

# TEST 11
if [[ "$SOLUTION_4_2" == *"curl blue-eyes-white-dragon1:3000 curl blue-eyes-white-dragon2:3000 curl blue-eyes-white-dragon3:3000"* ]]
then
        echo "-- Test 11 passed"
        echo "Polymerization curled all the dragons and the Blue Eyes Ultimate Dragon is here!"
        echo
    I+=1
else
        echo "-- Test 11 failed"
        echo "Error, the command failed and the fusion cannot complete"
        echo
fi

# TEST 12
if [[ "$SOLUTION_4_3" == *"blue-eyes-white-dragon3 - blue-eyes-white-dragon2 - blue-eyes-white-dragon1"* ]]
then
        echo "-- Test 12 passed"
        echo "Polymerization is using the right dependencies"
        echo
    I+=1
else
        echo "-- Test 12 failed"
        echo "Error, the dependencies are not set correctly"
        echo
fi

# TEST 13
if [[ "$SOLUTION_5_1" == *"FROM node"* ]]
then
        echo "-- Test 13 passed"
        echo "Using image node"
        echo
    I+=1
else
        echo "-- Test 13 failed"
        echo "Error, wrong or no image used"
        echo
fi

# TEST 14
if [[ "$SOLUTION_5_2" == 1 ]]
then
        echo "-- Test 14 passed"
        echo "The directory fusion is created"
        echo
    I+=1
else
        echo "-- Test 14 failed"
        echo "Error, no directory created or wrong directory name"
        echo
fi

# TEST 15
if [[ "$SOLUTION_5_3" == 1 ]]
then
        echo "-- Test 15 passed"
        echo "Workdir set to /fusion"
        echo
    I+=1
else
        echo "-- Test 15 failed"
        echo "Error, wrong work directory"
        echo
fi

# TEST 16
if [[ "$SOLUTION_5_4" == 1 ]]
then
        echo "-- Test 16 passed"
        echo "A node project is created"
        echo
    I+=1
else
        echo "-- Test 16 failed"
        echo "Error, no project created or wrong command, or you forgot to always accept"
        echo
fi

# TEST 17
if [[ "$SOLUTION_5_5" == 1 ]]
then
        echo "-- Test 17 passed"
        echo "Express is installed"
        echo
    I+=1
else
        echo "-- Test 17 failed"
        echo "Error, Express not installed"
        echo
fi

# TEST 18
if [[ "$SOLUTION_5_6" == 1 ]]
then
        echo "-- Test 18 passed"
        echo "File server.js is copied"
        echo
    I+=1
else
        echo "-- Test 18 failed"
        echo "Error, server.js not used or wrong file name"
        echo
fi

# TEST 19
if [[ "$SOLUTION_5_7" == 1 ]]
then
        echo "-- Test 19 passed"
        echo "Server.js is running"
        echo
    I+=1
else
        echo "-- Test 19 failed"
        echo "Error, server is not run, you may be using the wrong command"
        echo
fi

# TEST 20
if [[ "$SOLUTION_6" == 1 ]]
then
        echo "-- Test 20 passed"
        echo "Right server.js used"
        echo
    I+=1
else
        echo "-- Test 20 failed"
        echo "Error, check that your server.js is there, and that is hasn't been modified"
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