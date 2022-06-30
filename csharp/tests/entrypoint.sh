#!/bin/sh

set -e

cd /jail



dotnet nuget disable source nuget.org > /dev/null
dotnet nuget add source /dotnetpkg > /dev/null

cp -rf ./student ./repo

mkdir tests && cd tests
cp -rf "/app/${EXERCISE}Tests" /app/tests.csproj /app/Utils.cs .
dotnet restore --packages /dotnetpkg > /dev/null


dotnet test --filter $EXERCISE --no-restore 
