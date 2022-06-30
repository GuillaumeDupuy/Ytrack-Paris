#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=

# Variables
declare -i I=0
declare -i RES=33
FILE="/jail/student/elden-ring/docker-compose.yml"
DOTENV="/jail/student/elden-ring/.env"
DRACOFILE="/jail/student/elden-ring/draconic-tree-sentinel.env"
YAML_TEST=$(yamllint $FILE) # Storing errors in variable
SOLUTION_1=$(yq e '.services.player.hostname' $FILE)
SOLUTION_2=$(yq e '.services.player.image' $FILE)
SOLUTION_3=$(yq e '.services.player.networks.[]' $FILE)
SOLUTION_4=$(yq e '.services.player.environment.CLASS' $FILE)
SOLUTION_5=$(yq e '.services.margit.image' $FILE)
SOLUTION_6=$(yq e '.services.margit.volumes.[]' $FILE)
SOLUTION_23=$(yq e '.services.margit.environment.STATUS' $FILE)
SOLUTION_7=$(yq e '.services.margit.networks.[]' $FILE)
SOLUTION_8=$(yq e '.services.margit.cpu_count' $FILE)
SOLUTION_9=$(yq e '.services.draconic-tree-sentinel.image' $FILE)
SOLUTION_10=$(yq e '.services.draconic-tree-sentinel.env_file' $FILE)
SOLUTION_11=$(yq e '.services.draconic-tree-sentinel.volumes.[]' $FILE)
SOLUTION_12=$(yq e '.services.draconic-tree-sentinel.networks.[]' $FILE)
SOLUTION_13_1=$(yq e '.services.draconic-tree-sentinel.deploy.mode' $FILE)
SOLUTION_13_2=$(yq e '.services.draconic-tree-sentinel.deploy.replicas' $FILE)
SOLUTION_14=$(yq e '.services.godfrey.image' $FILE)
SOLUTION_15=$(yq e '.services.godfrey.volumes.[]' $FILE)
SOLUTION_16=$(yq e '.services.godfrey.environment.STATUS' $FILE)
SOLUTION_17=$(yq e '.services.godfrey.ports.[]' $FILE)
SOLUTION_18=$(yq e '.services.godfrey.networks.lands-between.ipv4_address' $FILE)
SOLUTION_19_1=$(yq e '.networks.lands-between.ipam.config[0]' $FILE)
SOLUTION_19_2=$(yq e '.networks.lands-between.ipam.config[0]' $FILE)
SOLUTION_20_1=$(yq e '.volumes | has("limgrave")' $FILE)
SOLUTION_20_2=$(yq e '.volumes | has("leyndell")' $FILE)
SOLUTION_20_3=$(yq e '.volumes | has("altus-plateau")' $FILE)
SOLUTION_21_1=$(cat $DOTENV | grep -c "ALTUS=/home/altus-plateau")
SOLUTION_21_2=$(cat $DOTENV | grep -c "PLAYER_NAME=")
SOLUTION_22_1=$(cat $DRACOFILE | grep -c "HP=13,362")
SOLUTION_22_2=$(cat $DRACOFILE | grep -c "STRONG=Fire,Lightning,Hemorrhage,Frostbite")
SOLUTION_22_3=$(cat $DRACOFILE | grep -c "WEAK=Phy")
SOLUTION_22_4=$(cat $DRACOFILE | grep -c "RUNES=50000")

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
if [ -f $DOTENV ]
then
        echo "-- Test 01 passed"
        echo ".env file present"
        echo
    I+=1
else
        echo "-- Test 01 failed"
        echo "Error, could not find the .env file"
        echo
fi

# TEST 02
if [ -f $DRACOFILE ]
then
        echo "-- Test 02 passed"
        echo "draconic-tree-sentinel.env present"
        echo
    I+=1
else
        echo "-- Test 02 failed"
        echo "Error, could not find draconic-tree-sentinel.env"
        echo
fi

# TEST 03
if [[ "$SOLUTION_1" == *"\${PLAYER_NAME}"* ]]
then
        echo "-- Test 03 passed"
        echo "Welcome to the game!"
        echo
    I+=1
else
        echo "-- Test 03 failed"
        echo "Error, no name set or service not found"
        echo
fi

# TEST 04
if [[ "$SOLUTION_2" == "ubuntu" ]]
then
        echo "-- Test 04 passed"
        echo "Player using Ubuntu image"
        echo
    I+=1
else
        echo "-- Test 04 failed"
        echo "Error, player not using Ubuntu image or service not found"
        echo
fi

# TEST 05
if [[ "$SOLUTION_3" == "lands-between" ]]
then
        echo "-- Test 05 passed"
        echo "Player dropped in the Lands Between"
        echo
    I+=1
else
        echo "-- Test 05 failed"
        echo "Error, player not in the Lands Between or service not found"
        echo
fi

# TEST 06
if [[ "$SOLUTION_4" == "hero" ]]
then
        echo "-- Test 06 passed"
        echo "You're just a level 7 hero"
        echo
    I+=1
else
        echo "-- Test 06 failed"
        echo "Error, environment variable not set or service not found"
        echo
fi

# TEST 07
if [[ "$SOLUTION_5" == "alpine:3.16" ]]
then
        echo "-- Test 07 passed"
        echo "Margit The Fell Omen using image Alpine"
        echo
    I+=1
else
        echo "-- Test 07 failed"
        echo "Error, wrong image or service not found"
        echo
fi

# TEST 08
if [[ "$SOLUTION_6" == *"limgrave:/home/limgrave"* ]]
then
        echo "-- Test 08 passed"
        echo "Margit The Fell Omen is in Limgrave"
        echo
    I+=1
else
        echo "-- Test 08 failed"
        echo "Error, Margit The Fell Omen is not where it should be"
        echo
fi

# TEST 09
if [[ "$SOLUTION_23" == *"optional"* ]]
then
        echo "-- Test 09 passed"
        echo "Margit The Fell Omen is an optional boss"
        echo
    I+=1
else
        echo "-- Test 09 failed"
        echo "Error, Margit The Fell Omen is not optional"
        echo
fi

# TEST 10
if [[ "$SOLUTION_7" == *"lands-between"* ]]
then
        echo "-- Test 10 passed"
        echo "Margit The Fell Omen is in the Lands Between"
        echo
    I+=1
else
        echo "-- Test 10 failed"
        echo "Error, Margit The Fell Omen is not in the Lands Between"
        echo
fi

# TEST 11
if [[ "$SOLUTION_8" == 2 ]]
then
        echo "-- Test 11 passed"
        echo "Margit The Fell Omen has a maximum power of 2 CPUs"
        echo
    I+=1
else
        echo "-- Test 11 failed"
        echo "Error, Margit The Fell Omen's power is unlimited!"
        echo
fi

# TEST 12
if [[ "$SOLUTION_9" == "busybox:1.35" ]]
then
        echo "-- Test 12 passed"
        echo "Draconic Tree Sentinel using image Busybox"
        echo
    I+=1
else
        echo "-- Test 12 failed"
        echo "Error, wrong image or service not found"
        echo
fi

# TEST 13
if [[ "$SOLUTION_10" == *"draconic-tree-sentinel.env"* ]]
then
        echo "-- Test 13 passed"
        echo "Draconic Tree Sentinel has its stats set from the env file"
        echo
    I+=1
else
        echo "-- Test 13 failed"
        echo "Error, draconic-tree-sentinel.env missing or service not found"
        echo
fi

# TEST 14
if [[ "$SOLUTION_11" == *"altus-plateau:\${ALTUS}"* ]]
then
        echo "-- Test 14 passed"
        echo "Draconic Tree Sentinel volume is in the Altus Plateau"
        echo
    I+=1
else
        echo "-- Test 14 failed"
        echo "Error, Draconic Tree Sentinel is not where it should be"
        echo
fi

# TEST 15
if [[ "$SOLUTION_12" == *"lands-between"* ]]
then
        echo "-- Test 15 passed"
        echo "Draconic Tree Sentinel is in the Lands Between"
        echo
    I+=1
else
        echo "-- Test 15 failed"
        echo "Error, Draconic Tree Sentinel is not in the Lands Between"
        echo
fi

# TEST 16
if [[ "$SOLUTION_13_1" == *"replicated"* ]]
then
        echo "-- Test 16 passed"
        echo "Draconic Tree Sentinel is replicated!"
        echo
    I+=1
else
        echo "-- Test 16 failed"
        echo "Error, Draconic Tree Sentinel is alone and not replicated"
        echo
fi

# TEST 17
if [[ "$SOLUTION_13_2" == 2 ]]
then
        echo "-- Test 17 passed"
        echo "Two Draconic Tree Sentinel for the price of one!"
        echo
    I+=1
else
        echo "-- Test 17 failed"
        echo "Error, Draconic Tree Sentinel is alone and not replicated"
        echo
fi

# TEST 18
if [[ "$SOLUTION_14" == "redis:7.0" ]]
then
        echo "-- Test 18 passed"
        echo "Godfrey, First Elden Lord is using image Redis"
        echo
    I+=1
else
        echo "-- Test 18 failed"
        echo "Error, wrong image or service not found"
        echo
fi

# TEST 19
if [[ "$SOLUTION_15" == *"leyndell:/home/leyndell"* ]]
then
        echo "-- Test 19 passed"
        echo "Godfrey, First Elden Lord volume is in Leyndell, Royal Capital"
        echo
    I+=1
else
        echo "-- Test 19 failed"
        echo "Error, Godfrey, First Elden Lord is not where it should be"
        echo
fi

# TEST 20
if [[ "$SOLUTION_16" == *"required"* ]]
then
        echo "-- Test 20 passed"
        echo "You have to kill Godfrey, First Elden Lord"
        echo
    I+=1
else
        echo "-- Test 20 failed"
        echo "Error, Godfrey, First Elden Lord has to be beaten in order to advance"
        echo
fi

# TEST 21
if [[ "$SOLUTION_17" == *"6379:6379"* ]]
then
        echo "-- Test 21 passed"
        echo "Godfrey, First Elden Lord has port 6379 open "
        echo
    I+=1
else
        echo "-- Test 21 failed"
        echo "Error, Godfrey, First Elden Lord port's is closed"
        echo
fi

# TEST 22
if [[ "$SOLUTION_18" == 10.25.20.22 ]]
then
        echo "-- Test 22 passed"
        echo "Godfrey, First Elden Lord's IP address set to 10.25.20.22 "
        echo
    I+=1
else
        echo "-- Test 22 failed"
        echo "Error, Godfrey, First Elden Lord's IP address missing"
        echo
fi

# TEST 23
if [[ "$SOLUTION_19_1" == *"10.25.20.0/24"* ]]
then
        echo "-- Test 23 passed"
        echo "The Lands Between has the correct subnet"
        echo
    I+=1
else
        echo "-- Test 23 failed"
        echo "Error, wrong subnet or network not set"
        echo
fi

# TEST 24
if [[ "$SOLUTION_19_2" == *"10.25.20.254"* ]]
then
        echo "-- Test 24 passed"
        echo "The Lands Between has the correct gateway"
        echo
    I+=1
else
        echo "-- Test 24 failed"
        echo "Error, wrong gateway or network not set"
        echo
fi

# TEST 25
if [[ "$SOLUTION_20_1" == *"true"* ]]
then
        echo "-- Test 25 passed"
        echo "Limgrave is there"
        echo
    I+=1
else
        echo "-- Test 25 failed"
        echo "Error, Limgrave is missing"
        echo
fi

# TEST 26
if [[ "$SOLUTION_20_2" == *"true"* ]]
then
        echo "-- Test 26 passed"
        echo "Leyndell is there"
        echo
    I+=1
else
        echo "-- Test 26 failed"
        echo "Error, Leyndell is missing"
        echo
fi

# TEST 27
if [[ "$SOLUTION_20_3" == *"true"* ]]
then
        echo "-- Test 27 passed"
        echo "Altus Plateau is there"
        echo
    I+=1
else
        echo "-- Test 27 failed"
        echo "Error, Altus Plateau is missing"
        echo
fi

# TEST 28
if [[ "$SOLUTION_21_1" == 1 ]]
then
        echo "-- Test 28 passed"
        echo "ALTUS value properly set"
        echo
    I+=1
else
        echo "-- Test 28 failed"
        echo "Error, ALTUS value in .env not set"
        echo
fi

# TEST 29
if [[ "$SOLUTION_21_2" == 1 ]]
then
        echo "-- Test 29 passed"
        echo "Hello Player!"
        echo
    I+=1
else
        echo "-- Test 29 failed"
        echo "Error, PLAYER_NAME not set"
        echo
fi

# TEST 30
if [[ "$SOLUTION_22_1" == 1 ]]
then
        echo "-- Test 30 passed"
        echo "HP of Draconic Tree Sentinel set to 13,362"
        echo
    I+=1
else
        echo "-- Test 30 failed"
        echo "Error, Draconic Tree Sentinel's HP not set"
        echo
fi

# TEST 31
if [[ "$SOLUTION_22_2" == 1 ]]
then
        echo "-- Test 31 passed"
        echo "Draconic Tree Sentinel has its resistances set"
        echo
    I+=1
else
        echo "-- Test 31 failed"
        echo "Error, Draconic Tree Sentinel's resistances not set"
        echo
fi

# TEST 32
if [[ "$SOLUTION_22_3" == 1 ]]
then
        echo "-- Test 32 passed"
        echo "Draconic Tree Sentinel weaknesses set"
        echo
    I+=1
else
        echo "-- Test 32 failed"
        echo "Error, Draconic Tree Sentinel's weaknesses not set"
        echo
fi

# TEST 33
if [[ "$SOLUTION_22_4" == 1 ]]
then
        echo "-- Test 33 passed"
        echo "Draconic Tree Sentinel gives 50000 runes"
        echo
    I+=1
else
        echo "-- Test 33 failed"
        echo "Error, Draconic Tree Sentinel's runes not set"
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