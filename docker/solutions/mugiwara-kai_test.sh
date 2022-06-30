#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=31
FILE="/jail/student/mugiwara-kai/docker-compose.yml"
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1=$(yq e 'has("services")' $FILE)
SOLUTION_2=$(yq e 'has("networks")' $FILE)
SOLUTION_3_1=$(yq e '.networks.grand-line.ipam.config.[]' $FILE | tr '\n' ' ' | grep subnet)
SOLUTION_3_2=$(yq e '.networks.north-blue.ipam.config.[]' $FILE | tr '\n' ' ' | grep subnet)
SOLUTION_3_3=$(yq e '.networks.south-blue.ipam.config.[]' $FILE | tr '\n' ' ' | grep subnet)
SOLUTION_3_4=$(yq e '.networks.east-blue.ipam.config.[]' $FILE | tr '\n' ' ' | grep subnet)
SOLUTION_3_5=$(yq e '.networks.west-blue.ipam.config.[]' $FILE | tr '\n' ' ' | grep subnet)
SOLUTION_4_1=$(yq e '.services.nami.networks | keys' $FILE)
SOLUTION_4_2=$(yq e '.services.nami.networks.east-blue.ipv4_address' $FILE)
SOLUTION_4_3=$(yq e '.services.nami.image' $FILE)
SOLUTION_4_4=$(yq e '.services.nami.command' $FILE)
SOLUTION_5_1=$(yq e '.services.sanji.networks | keys' $FILE)
SOLUTION_5_2=$(yq e '.services.sanji.networks.north-blue.ipv4_address' $FILE)
SOLUTION_5_3=$(yq e '.services.sanji.image' $FILE)
SOLUTION_6_1=$(yq e '.services.chopper.networks | keys' $FILE)
SOLUTION_6_2=$(yq e '.services.chopper.networks.grand-line.ipv4_address' $FILE)
SOLUTION_6_3=$(yq e '.services.chopper.image' $FILE)
SOLUTION_7_1=$(yq e '.services.usopp.networks | keys' $FILE)
SOLUTION_7_2=$(yq e '.services.usopp.networks.east-blue.ipv4_address' $FILE)
SOLUTION_7_3=$(yq e '.services.usopp.image' $FILE)
SOLUTION_7_4=$(yq e '.services.usopp.command' $FILE)
SOLUTION_8_1=$(yq e '.services.robin.networks | keys' $FILE)
SOLUTION_8_2=$(yq e '.services.robin.networks.west-blue.ipv4_address' $FILE)
SOLUTION_8_3=$(yq e '.services.robin.image' $FILE)
SOLUTION_8_4=$(yq e '.services.robin.command' $FILE)
SOLUTION_9_1=$(yq e '.services.brook.networks | keys' $FILE)
SOLUTION_9_2=$(yq e '.services.brook.networks.west-blue.ipv4_address' $FILE)
SOLUTION_9_3=$(yq e '.services.brook.image' $FILE)
SOLUTION_10_1=$(yq e '.services.franky.networks | keys' $FILE)
SOLUTION_10_2=$(yq e '.services.franky.networks.south-blue.ipv4_address' $FILE)
SOLUTION_10_3=$(yq e '.services.franky.image' $FILE)

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
if [[ "$SOLUTION_1" == *"true"* ]]
then
        echo "-- Test 01 passed"
        echo "Services in the file"
        echo
        I+=1
else
        echo "-- Test 01 failed"
        echo "Error, there is no services in the file"
        echo
fi

# TEST 02
if [[ "$SOLUTION_2" == *"true"* ]]
then
        echo "-- Test 02 passed"
        echo "Networks in the file"
        echo
        I+=1
else
        echo "-- Test 02 failed"
        echo "Error, there is no network in the file"
        echo
fi

# TEST 03 Grand-line
if [[ "$SOLUTION_3_1" == *"subnet: 172.16.0.0/16 gateway: 172.16.0.254"* ]]
then
        echo "-- Test 03 passed"
        echo "Grand-line is there !"
        echo
        I+=1
else
        echo "-- Test 03 failed"
        echo "Error, cannot find Grand-line"
        echo
fi

# TEST 04 North-blue
if [[ "$SOLUTION_3_2" == *"subnet: 192.168.1.0/24 gateway: 192.168.1.254"* ]]
then
        echo "-- Test 04 passed"
        echo "North-blue is there !"
        echo
        I+=1
else
        echo "-- Test 04 failed"
        echo "Error, cannot find North-blue"
        echo
fi

# TEST 05 South-blue
if [[ "$SOLUTION_3_3" == *"subnet: 192.168.2.0/24 gateway: 192.168.2.254"* ]]
then
        echo "-- Test 05 passed"
        echo "South-blue is there !"
        echo
        I+=1
else
        echo "-- Test 05 failed"
        echo "Error, cannot find South-blue"
        echo
fi

# TEST 06 East-blue
if [[ "$SOLUTION_3_4" == *"subnet: 192.168.3.0/24 gateway: 192.168.3.254"* ]]
then
        echo "-- Test 06 passed"
        echo "East-blue is there !"
        echo
        I+=1
else
        echo "-- Test 06 failed"
        echo "Error, cannot find East-blue"
        echo
fi

# TEST 07 West-blue
if [[ "$SOLUTION_3_5" == *"subnet: 192.168.4.0/24 gateway: 192.168.4.254"* ]]
then
        echo "-- Test 07 passed"
        echo "West-blue is there !"
        echo
        I+=1
else
        echo "-- Test 07 failed"
        echo "Error, cannot find West-blue"
        echo
fi

# TEST 08 Service Nami
if [[ "$SOLUTION_4_1" == "- east-blue" ]]
then
        echo "-- Test 08 passed"
        echo "Nami comes from East-Blue !"
        echo
        I+=1
else
        echo "-- Test 08 failed"
        echo "Error, either Nami is nowhere to be found or the network is not set"
        echo
fi

# TEST 09 Service Nami
if [[ "$SOLUTION_4_2" == "192.168.3.66" ]]
then
        echo "-- Test 09 passed"
        echo "Nami has the correct IP address !"
        echo
        I+=1
else
        echo "-- Test 09 failed"
        echo "Error, either Nami is nowhere to be found or the IP address is wrong"
        echo
fi

# TEST 10 Service Nami
if [[ "$SOLUTION_4_3" == "ubuntu" ]]
then
        echo "-- Test 10 passed"
        echo "Nami uses the Ubuntu image !"
        echo
        I+=1
else
        echo "-- Test 10 failed"
        echo "Error, either Nami is nowhere to be found or the used image is wrong"
        echo
fi

# TEST 11 Service Nami
if [[ "$SOLUTION_4_4" == *"ping -c 4 usopp"* ]]
then
        echo "-- Test 11 passed"
        echo "Nami is trying to ping Usopp !"
        echo
        I+=1
else
        echo "-- Test 11 failed"
        echo "Error, either Nami is nowhere to be found or Nami is doing nothing interesting"
        echo
fi

# TEST 12 Service Sanji
if [[ "$SOLUTION_5_1" == "- north-blue" ]]
then
        echo "-- Test 12 passed"
        echo "Sanji comes from North-Blue !"
        echo
        I+=1
else
        echo "-- Test 12 failed"
        echo "Error, either Sanji is nowhere to be found or the network is not set"
        echo
fi

# TEST 13 Service Sanji
if [[ "$SOLUTION_5_2" == "192.168.1.33" ]]
then
        echo "-- Test 13 passed"
        echo "Sanji has the correct IP address !"
        echo
        I+=1
else
        echo "-- Test 13 failed"
        echo "Error, either Sanji is nowhere to be found or the IP address is wrong"
        echo
fi

# TEST 14 Service Sanji
if [[ "$SOLUTION_5_3" == "node" ]]
then
        echo "-- Test 14 passed"
        echo "Sanji uses the Ubuntu image !"
        echo
        I+=1
else
        echo "-- Test 14 failed"
        echo "Error, either Sanji is nowhere to be found or the used image is wrong"
        echo
fi

# TEST 15 Service Chopper
if [[ "$SOLUTION_6_1" == "- grand-line" ]]
then
        echo "-- Test 15 passed"
        echo "Chopper comes from Grand-Line !"
        echo
        I+=1
else
        echo "-- Test 15 failed"
        echo "Error, either Chopper is nowhere to be found or the network is not set"
        echo
fi

# TEST 16 Service Chopper
if [[ "$SOLUTION_6_2" == "172.16.0.100" ]]
then
        echo "-- Test 16 passed"
        echo "Chopper has the correct IP address !"
        echo
        I+=1
else
        echo "-- Test 16 failed"
        echo "Error, either Chopper is nowhere to be found or the IP address is wrong"
        echo
fi

# TEST 17 Service Chopper
if [[ "$SOLUTION_6_3" == "golang" ]]
then
        echo "-- Test 17 passed"
        echo "Chopper uses the Golang image !"
        echo
        I+=1
else
        echo "-- Test 17 failed"
        echo "Error, either Chopper is nowhere to be found or the used image is wrong"
        echo
fi

# TEST 18 Service Usopp
if [[ "$SOLUTION_7_1" == "- east-blue" ]]
then
        echo "-- Test 18 passed"
        echo "Usopp comes from East-blue !"
        echo
        I+=1
else
        echo "-- Test 18 failed"
        echo "Error, either Usopp is nowhere to be found or the network is not set"
        echo
fi

# TEST 19 Service Usopp
if [[ "$SOLUTION_7_2" == "192.168.3.200" ]]
then
        echo "-- Test 19 passed"
        echo "Usopp has the correct IP address !"
        echo
        I+=1
else
        echo "-- Test 19 failed"
        echo "Error, either Usopp is nowhere to be found or the IP address is wrong"
        echo
fi

# TEST 20 Service Usopp
if [[ "$SOLUTION_7_3" == "debian" ]]
then
        echo "-- Test 20 passed"
        echo "Usopp uses the Debian image !"
        echo
        I+=1
else
        echo "-- Test 20 failed"
        echo "Error, either Usopp is nowhere to be found or the used image is wrong"
        echo
fi

# TEST 21 Service Usopp
if [[ "$SOLUTION_7_4" == *"t"* ]]
then
        echo "-- Test 21 passed"
        echo "Usopp is staying alive !"
        echo
        I+=1
else
        echo "-- Test 21 failed"
        echo "Error, either Usopp is dead or you did not keep the container running"
        echo
fi

# TEST 22 Service Robin
if [[ "$SOLUTION_8_1" == "- west-blue" ]]
then
        echo "-- Test 22 passed"
        echo "Robin comes from West-blue !"
        echo
        I+=1
else
        echo "-- Test 22 failed"
        echo "Error, either Robin is nowhere to be found or the network is not set"
        echo
fi

# TEST 23 Service Robin
if [[ "$SOLUTION_8_2" == "192.168.4.130" ]]
then
        echo "-- Test 23 passed"
        echo "Robin has the correct IP address !"
        echo
        I+=1
else
        echo "-- Test 23 failed"
        echo "Error, either Robin is nowhere to be found or the IP address is wrong"
        echo
fi

# TEST 24 Service Robin
if [[ "$SOLUTION_8_3" == "alpine/curl" ]]
then
        echo "-- Test 24 passed"
        echo "Robin uses the Golang image !"
        echo
        I+=1
else
        echo "-- Test 24 failed"
        echo "Error, either Robin is nowhere to be found or the used image is wrong"
        echo
fi

# TEST 25 Service Robin
if [[ "$SOLUTION_8_4" == *"curl 192.168.4.254 80"* ]]
then
        echo "-- Test 25 passed"
        echo "Robin found Brook !"
        echo
        I+=1
else
        echo "-- Test 25 failed"
        echo "Error, Robin could not find anything"
        echo
fi

# TEST 26 Service Brook
if [[ "$SOLUTION_9_1" == "- west-blue" ]]
then
        echo "-- Test 26 passed"
        echo "Brook comes from West-blue !"
        echo
        I+=1
else
        echo "-- Test 26 failed"
        echo "Error, either Brook is nowhere to be found or the network is not set"
        echo
fi

# TEST 27 Service Brook
if [[ "$SOLUTION_9_2" == "192.168.4.83" ]]
then
        echo "-- Test 27 passed"
        echo "Brook has the correct IP address !"
        echo
        I+=1
else
        echo "-- Test 27 failed"
        echo "Error, either Brook is nowhere to be found or the IP address is wrong"
        echo
fi

# TEST 28 Service Brook
if [[ "$SOLUTION_9_3" == "nginx" ]]
then
        echo "-- Test 28 passed"
        echo "Brook uses the Golang image !"
        echo
        I+=1
else
        echo "-- Test 28 failed"
        echo "Error, either Brook is nowhere to be found or the used image is wrong"
        echo
fi

# TEST 29 Service Franky
if [[ "$SOLUTION_10_1" == "- south-blue" ]]
then
        echo "-- Test 29 passed"
        echo "Franky comes from West-blue !"
        echo
        I+=1
else
        echo "-- Test 29 failed"
        echo "Error, either Franky is nowhere to be found or the network is not set"
        echo
fi

# TEST 30 Service Franky
if [[ "$SOLUTION_10_2" == "192.168.2.94" ]]
then
        echo "-- Test 30 passed"
        echo "Franky has the correct IP address !"
        echo
        I+=1
else
        echo "-- Test 30 failed"
        echo "Error, either Franky is nowhere to be found or the IP address is wrong"
        echo
fi

# TEST 31 Service Franky
if [[ "$SOLUTION_10_3" == "redis" ]]
then
        echo "-- Test 31 passed"
        echo "Franky uses the Golang image !"
        echo
        I+=1
else
        echo "-- Test 31 failed"
        echo "Error, either Franky is nowhere to be found or the used image is wrong"
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
        echo "All tests passed, captain !"
        exit 0
else
        echo "Not all tests passed"
        exit 1
fi