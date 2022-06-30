#!/bin/bash

set -e

cd /jail

mkdir run
mkdir run/tests

cp -rf ./student/* ./run
rm -rf ./run/tests

cd run
cp -rf "/app/tests/${EXERCISE}" ./tests

pytest --tb=short
