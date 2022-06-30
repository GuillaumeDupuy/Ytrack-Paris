#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=23
FILE="/jail/student/companion/docker-compose.yml"
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1_1=$(yq e '.services.chell.image' $FILE)
SOLUTION_1_2=$(yq e '.services.chell.networks' $FILE | tr '\n' ' ')
SOLUTION_1_3=$(yq e '.services.chell.depends_on | sort_by(.depends_on)' $FILE | tr '\n' ' ')
SOLUTION_1_4=$(yq e '.services.chell.command' $FILE | grep -o 'ping\|-c 2\|cube' | tr '\n' ' ') # Tests for occurences of ping -c 2 and cube and puts on one line everything
SOLUTION_2_1=$(yq e '.services.weighted-storage-cube.image' $FILE)
SOLUTION_2_2=$(yq e '.services.weighted-storage-cube.tty' $FILE)
SOLUTION_2_3=$(yq e '.services.weighted-storage-cube.networks' $FILE | tr '\n' ' ')
SOLUTION_2_4=$(yq e '.services.weighted-storage-cube.depends_on | sort_by(.depends_on)' $FILE | tr '\n' ' ')
SOLUTION_3_1=$(yq e '.services.edgeless-safety-cube.image' $FILE)
SOLUTION_3_2=$(yq e '.services.edgeless-safety-cube.tty' $FILE)
SOLUTION_3_3=$(yq e '.services.edgeless-safety-cube.networks' $FILE | tr '\n' ' ')
SOLUTION_3_4=$(yq e '.services.edgeless-safety-cube.depends_on | sort_by(.depends_on)' $FILE | tr '\n' ' ')
SOLUTION_4_1=$(yq e '.services.companion-cube.image' $FILE)
SOLUTION_4_2=$(yq e '.services.companion-cube.tty' $FILE)
SOLUTION_4_3=$(yq e '.services.companion-cube.networks' $FILE | tr '\n' ' ')
SOLUTION_4_4=$(yq e '.services.companion-cube.depends_on | sort_by(.depends_on)' $FILE | tr '\n' ' ')
SOLUTION_5_1=$(yq e '.services.cube-receptacle.image' $FILE)
SOLUTION_5_2=$(yq e '.services.cube-receptacle.tty' $FILE)
SOLUTION_5_3=$(yq e '.services.cube-receptacle.networks' $FILE | tr '\n' ' ')
SOLUTION_6_1=$(yq e '.services.edgeless-safety-cube-receptacle.image' $FILE)
SOLUTION_6_2=$(yq e '.services.edgeless-safety-cube-receptacle.tty' $FILE)
SOLUTION_6_3=$(yq e '.services.edgeless-safety-cube-receptacle.networks' $FILE | tr '\n' ' ')
SOLUTION_7=$(yq e '.networks | keys' $FILE | tr '\n' ' ')

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
if [[ "$SOLUTION_1_1" == "busybox" ]]
then
        echo "-- Test 01 passed"
        echo "Chell uses the busybox image"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, wrong image used or there is no Chell service"
        echo
fi

# TEST 02
if [[ "$SOLUTION_1_2" == *"- cube - round"* ]]
then
        echo "-- Test 02 passed"
        echo "Right networks for Chell"
        echo
    I+=1
else
        echo "-- Test 02 failed"-
        echo "Error, wrong networks used or there is no Chell service"
        echo
fi

# TEST 03 
if [[ "$SOLUTION_1_3" == *"- companion-cube - edgeless-safety-cube - weighted-storage-cube"* ]]
then
        echo "-- Test 03 passed"
        echo "Right dependencies for Chell"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, wrong dependencies used or there is no Chell service"
        echo
fi

# TEST 04 
if [[ "$SOLUTION_1_4" == *"ping -c 2 cube ping -c 2 cube ping -c 2 cube"* ]]
then
        echo "-- Test 04 passed"
        echo "Pinging all three cubes twice"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, Chell is not pinging all three cubes twice, or the cubes are not up"
        echo
fi

# TEST 05
if [[ "$SOLUTION_2_1" == "nginx" ]]
then
        echo "-- Test 05 passed"
        echo "The weighted storage cube uses the nginx image"
        echo
    I+=1
else
        echo "-- Test 05 failed"
        echo "Error, wrong image used or there is no weighted storage cube service"
        echo
fi

# TEST 06
if [[ "$SOLUTION_2_2" == *"true"* ]]
then
        echo "-- Test 06 passed"
        echo "The weighted storage cube is alive"
        echo
    I+=1
else
        echo "-- Test 06 failed"
        echo "Error, weighted storage cube is not alive"
        echo
fi

# TEST 07
if [[ "$SOLUTION_2_3" == *"- cube"* ]]
then
        echo "-- Test 07 passed"
        echo "Right network for weighted storage cube"
        echo
    I+=1
else
        echo "-- Test 07 failed"
        echo "Error, wrong network used or there is no weighted storage cube service"
        echo
fi

# TEST 08
if [[ "$SOLUTION_2_4" == *"- cube-receptacle"* ]]
then
        echo "-- Test 08 passed"
        echo "The weighted storage depends on the cube receptacle"
        echo
    I+=1
else
        echo "-- Test 08 failed"
        echo "Error, wrong dependency used or there is no weighted storage cube service"
        echo
fi

# TEST 09
if [[ "$SOLUTION_3_1" == "debian" ]]
then
        echo "-- Test 09 passed"
        echo "The edgeless safety cube uses the Debian image"
        echo
    I+=1
else
        echo "-- Test 09 failed"
        echo "Error, wrong image used or there is no edgeless safety cube service"
        echo
fi

# TEST 10
if [[ "$SOLUTION_3_2" == *"true"* ]]
then
        echo "-- Test 10 passed"
        echo "The edgeless safety cube is alive"
        echo
    I+=1
else
        echo "-- Test 10 failed"
        echo "Error, edgeless safety cube is not alive"
        echo
fi

# TEST 11
if [[ "$SOLUTION_3_3" == *"- round"* ]]
then
        echo "-- Test 11 passed"
        echo "Right network for edgeless safety cube"
        echo
    I+=1
else
        echo "-- Test 11 failed"
        echo "Error, wrong network used or there is no edgeless safety cube service"
        echo
fi

# TEST 12
if [[ "$SOLUTION_3_4" == *"- edgeless-safety-cube-receptacle"* ]]
then
        echo "-- Test 12 passed"
        echo "The edgeless safety depends on the edgeless safety cube receptacle"
        echo
    I+=1
else
        echo "-- Test 12 failed"
        echo "Error, wrong dependency used or there is no edgeless safety cube service"
        echo
fi

# TEST 13
if [[ "$SOLUTION_4_1" == "ubuntu" ]]
then
        echo "-- Test 13 passed"
        echo "The companion cube uses the Ubuntu image"
        echo
    I+=1
else
        echo "-- Test 13 failed"
        echo "Error, wrong image used or there is no companion cube service"
        echo
fi

# TEST 14
if [[ "$SOLUTION_4_2" == *"true"* ]]
then
        echo "-- Test 14 passed"
        echo "The companion cube is alive"
        echo
    I+=1
else
        echo "-- Test 14 failed"
        echo "Error, companion cube is not alive"
        echo
fi

# TEST 15
if [[ "$SOLUTION_4_3" == *"- cube"* ]]
then
        echo "-- Test 15 passed"
        echo "Right network for companion cube"
        echo
    I+=1
else
        echo "-- Test 15 failed"
        echo "Error, wrong network used or there is no companion cube service"
        echo
fi

# TEST 16
if [[ "$SOLUTION_4_4" == *"- cube-receptacle"* ]]
then
        echo "-- Test 16 passed"
        echo "The companion cube depends on the cube receptacle"
        echo
    I+=1
else
        echo "-- Test 16 failed"
        echo "Error, wrong dependency used or there is no companion cube service"
        echo
fi

# TEST 17
if [[ "$SOLUTION_5_1" == "postgres" ]]
then
        echo "-- Test 17 passed"
        echo "The cube receptacle uses the PostgreSQL image"
        echo
    I+=1
else
        echo "-- Test 17 failed"
        echo "Error, wrong image used or there is no cube service"
        echo
fi

# TEST 18
if [[ "$SOLUTION_5_2" == *"true"* ]]
then
        echo "-- Test 18 passed"
        echo "The cube receptacle is alive"
        echo
    I+=1
else
        echo "-- Test 18 failed"
        echo "Error, cube is not alive"
        echo
fi

# TEST 19
if [[ "$SOLUTION_5_3" == *"- cube"* ]]
then
        echo "-- Test 19 passed"
        echo "Right network for cube receptacle"
        echo
    I+=1
else
        echo "-- Test 19 failed"
        echo "Error, wrong network used or there is no cube receptacle service"
        echo
fi

# TEST 20
if [[ "$SOLUTION_6_1" == "mysql" ]]
then
        echo "-- Test 20 passed"
        echo "The edgeless safety cube receptacle uses the MySQL image"
        echo
    I+=1
else
        echo "-- Test 20 failed"
        echo "Error, wrong image used or there is no edgeless safety cube receptacle service"
        echo
fi

# TEST 21
if [[ "$SOLUTION_6_2" == *"true"* ]]
then
        echo "-- Test 21 passed"
        echo "The edgeless safety cube receptacle is alive"
        echo
    I+=1
else
        echo "-- Test 21 failed"
        echo "Error, edgeless safety cube receptacle is not alive"
        echo
fi

# TEST 22
if [[ "$SOLUTION_6_3" == *"- round"* ]]
then
        echo "-- Test 22 passed"
        echo "Right network for edgeless safety cube receptacle"
        echo
    I+=1
else
        echo "-- Test 22 failed"
        echo "Error, wrong network used or there is no edgeless safety cube receptacle service"
        echo
fi

# TEST 23
if [[ "$SOLUTION_7" == *"- cube - round"* ]]
then
        echo "-- Test 23 passed"
        echo "Networks set"
        echo
    I+=1
else
        echo "-- Test 23 failed"
        echo "Error, no networks set or wrong networks in place"
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