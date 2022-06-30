#!/usr/bin/bash

# Unofficial Bash Strict Mode
set -uo pipefail
IFS=$'\n\t'

echo insecure >> ~/.curlrc

# IP Address is the gateway of the docker network "Grand-Line"
# You first have to create the 'Grand-Line' network
curl -fvsI http://10.35.0.1:3200/

if [[ $? -eq 0 ]];
then
    echo "$(cat success.txt)";
    echo;
    echo "Great, I found Zoro !";
    echo;
    echo "The password is :";
    echo "M4r1ne-F0rd!";
    exit 0;
else
    echo "$(cat error.txt)";
    echo;
    echo "Error ! Could not free Zoro !";
    echo "Make sure the other container is up and that you opened the right port";
    echo;
    exit 1;
fi