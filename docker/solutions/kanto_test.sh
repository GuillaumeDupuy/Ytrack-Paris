#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=17
FILE="/jail/student/kanto/docker-compose.yml"
DOTENVFILE="/jail/student/kanto/.env"
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1=$(yq e '.services.database.image' $FILE)
SOLUTION_2_1=$(yq e '.services.database.environment.MYSQL_ROOT_PASSWORD' $FILE)
SOLUTION_2_2=$(yq e '.services.database.environment.MYSQL_DATABASE' $FILE)
SOLUTION_2_3=$(yq e '.services.database.environment.MYSQL_USER' $FILE)
SOLUTION_2_4=$(yq e '.services.database.environment.MYSQL_PASSWORD' $FILE)
SOLUTION_3=$(yq e '.services.database.ports.[]' $FILE)
SOLUTION_4=$(yq e '.services.panel.image' $FILE)
SOLUTION_5=$(yq e '.services.panel.ports.[]' $FILE)
SOLUTION_6_1=$(yq e '.services.panel.environment.PMA_HOST' $FILE)
SOLUTION_6_2=$(yq e '.services.panel.environment.PMA_PORT' $FILE)
SOLUTION_6_3=$(yq e '.services.panel.environment.PMA_ARBITRARY' $FILE)
SOLUTION_7=$(yq e '.services.panel.depends_on.[]' $FILE)
SOLUTION_8_1=$(cat $DOTENVFILE | grep -c "MYSQL_ROOT_PASSWORD=Pallet_Town")
SOLUTION_8_2=$(cat $DOTENVFILE | grep -c "MYSQL_USER=AshKetchum")
SOLUTION_8_3=$(cat $DOTENVFILE | grep -c "MYSQL_DATABASE=kanto")
SOLUTION_8_4=$(cat $DOTENVFILE | grep -c "MYSQL_PASSWORD=HeyYouPikachu!")

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
if [[ "$SOLUTION_1" == "mysql" ]]
then
        echo "-- Test 01 passed"
        echo "MySQL image used"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, wrong image used or service not found"
        echo
fi

# TEST 02
if [[ "$SOLUTION_2_1" == *"\${MYSQL_ROOT_PASSWORD}"* ]]
then
        echo "-- Test 02 passed"
        echo "MYSQL_ROOT_PASSWORD uses the proper variable"
        echo
    I+=1
else
        echo "-- Test 02 failed"
        echo "Error, MYSQL_ROOT_PASSWORD is not there or not used the right way"
        echo
fi

# TEST 03
if [[ "$SOLUTION_2_2" == *"\${MYSQL_DATABASE}"* ]]
then
        echo "-- Test 03 passed"
        echo "MYSQL_DATABASE uses the proper variable"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, MYSQL_DATABASE is not there or not used the right way"
        echo
fi

# TEST 04
if [[ "$SOLUTION_2_3" == *"\${MYSQL_USER}"* ]]
then
        echo "-- Test 04 passed"
        echo "MYSQL_USER uses the proper variable"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, MYSQL_USER is not there or not used the right way"
        echo
fi

# TEST 05
if [[ "$SOLUTION_2_4" == *"\${MYSQL_PASSWORD}"* ]]
then
        echo "-- Test 05 passed"
        echo "MYSQL_PASSWORD uses the proper variable"
        echo
    I+=1
else
        echo "-- Test 05 failed"
        echo "Error, MYSQL_PASSWORD is not there or not used the right way"
        echo
fi

# TEST 06
if [[ "$SOLUTION_3" == *"3306:3306"* ]]
then
        echo "-- Test 06 passed"
        echo "MYSQL port is used"
        echo
    I+=1
else
        echo "-- Test 06 failed"
        echo "Error, MYSQL port is not used"
        echo
fi

# TEST 07
if [[ "$SOLUTION_4" == "phpmyadmin" ]]
then
        echo "-- Test 07 passed"
        echo "PHPMyAdmin image is used (oh boy)"
        echo
    I+=1
else
        echo "-- Test 07 failed"
        echo "Error, PHPMyAdmin is notwhere to be found. That may be a good thing, after all, but not now"
        echo
fi

# TEST 08
if [[ "$SOLUTION_5" == *"8080:80"* ]]
then
        echo "-- Test 08 passed"
        echo "Port 8080 is bound to port 80"
        echo
    I+=1
else
        echo "-- Test 08 failed"
        echo "Error, port 8080 not bound or not used the right way"
        echo
fi

# TEST 09
if [[ "$SOLUTION_6_1" == "database" ]]
then
        echo "-- Test 09 passed"
        echo "PMA_HOST uses database"
        echo
    I+=1
else
        echo "-- Test 09 failed"
        echo "Error, PMA_HOST is not there or wrong value used"
        echo
fi

# TEST 10
if [[ "$SOLUTION_6_2" == 3306 ]]
then
        echo "-- Test 10 passed"
        echo "PMA_PORT uses port 3306"
        echo
    I+=1
else
        echo "-- Test 10 failed"
        echo "Error, PMA_PORT is not there or wrong value used"
        echo
fi

# TEST 11
if [[ "$SOLUTION_6_3" == 1 ]]
then
        echo "-- Test 11 passed"
        echo "PMA_ARBITRARY is set to 1"
        echo
    I+=1
else
        echo "-- Test 11 failed"
        echo "Error, PMA_ARBITRARY is not there or wrong value used"
        echo
fi

# TEST 12
if [[ "$SOLUTION_7" == "database" ]]
then
        echo "-- Test 12 passed"
        echo "Panel depends on the database"
        echo
    I+=1
else
        echo "-- Test 12 failed"
        echo "Error, dependency missing"
        echo
fi

# TEST 13
if [ -f $DOTENVFILE ]
then
        echo "-- Test 13 passed"
        echo "Found .env file"
        echo
    I+=1
else
        echo "-- Test 13 failed"
        echo "Error, the .env file is nowhere to be found. Make sure the file name is .env and that it is in the same directory as the docker-compose.yml file"
        echo
fi

# TEST 14
if [[ "$SOLUTION_8_1" == 1 ]]
then
        echo "-- Test 14 passed"
        echo "MYSQL_ROOT_PASSWORD variable is set in .env"
        echo
    I+=1
else
        echo "-- Test 14 failed"
        echo "Error, could not find MYSQL_ROOT_PASSWORD or it has the wrong variable"
        echo
fi

# TEST 15
if [[ "$SOLUTION_8_2" == 1 ]]
then
        echo "-- Test 15 passed"
        echo "MYSQL_USER variable is set in .env"
        echo
    I+=1
else
        echo "-- Test 15 failed"
        echo "Error, could not find MYSQL_USER or it has the wrong variable"
        echo
fi

# TEST 16
if [[ "$SOLUTION_8_3" == 1 ]]
then
        echo "-- Test 16 passed"
        echo "MYSQL_DATABASE variable is set in .env"
        echo
    I+=1
else
        echo "-- Test 16 failed"
        echo "Error, could not find MYSQL_DATABASE or it has the wrong variable"
        echo
fi

# TEST 17
if [[ "$SOLUTION_8_4" == 1 ]]
then
        echo "-- Test 17 passed"
        echo "MYSQL_PASSWORD variable is set in .env"
        echo
    I+=1
else
        echo "-- Test 17 failed"
        echo "Error, could not find MYSQL_PASSWORD or it has the wrong variable"
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